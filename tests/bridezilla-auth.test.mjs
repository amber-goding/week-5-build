import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { runInNewContext } from "node:vm";
import ts from "typescript";

// Execute the actual TypeScript handler with allowlisted imports and isolated
// globals. No environment files, real Clerk sessions, or network are available.
function loadModule(path, dependencies = {}, globals = {}) {
  const source = readFileSync(new URL(path, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  });
  const loadedModule = { exports: {} };
  runInNewContext(outputText, {
    module: loadedModule,
    exports: loadedModule.exports,
    require(name) {
      assert.ok(Object.hasOwn(dependencies, name), "Unexpected test import");
      return dependencies[name];
    },
    ...globals,
  });
  return loadedModule.exports;
}

const limits = loadModule("../lib/bridezilla-guardrails.ts");

function setup({ signedIn = false, authError = false, upstream } = {}) {
  const calls = { auth: 0, body: 0, openAI: 0 };
  const { POST } = loadModule(
    "../app/api/bridezilla/route.ts",
    {
      "server-only": {},
      "@/lib/bridezilla-guardrails": limits,
      "@clerk/nextjs/server": {
        async auth(options) {
          calls.auth++;
          assert.equal(options.acceptsToken, "session_token");
          assert.equal(options.treatPendingAsSignedOut, true);
          if (authError) throw new Error("Private auth diagnostic");
          return { userId: signedIn ? "user_test" : null };
        },
      },
    },
    {
      Response,
      AbortSignal,
      Error,
      process: { env: { OPENAI_API_KEY: "test-placeholder", OPENAI_MODEL: "test-model" } },
      fetch: async (url, options) => {
        calls.openAI++;
        assert.equal(url, "https://api.openai.com/v1/responses");
        assert.ok(upstream, "Unexpected OpenAI call");
        return upstream(options);
      },
    },
  );
  return {
    calls,
    send(body, malformed = false) {
      return POST({
        async json() {
          calls.body++;
          if (malformed) throw new SyntaxError("Invalid JSON");
          return body;
        },
      });
    },
  };
}

test("signed-out or invalid sessions return JSON 401 before body processing or OpenAI", async () => {
  const { send, calls } = setup();
  const response = await send({ message: "Plan my wedding", userId: "spoofed" });
  assert.equal(response.status, 401);
  assert.match(response.headers.get("content-type"), /application\/json/);
  assert.deepEqual(await response.json(), {
    error: "Please sign in to use BrideZilla, then try again.",
  });
  assert.deepEqual(calls, { auth: 1, body: 0, openAI: 0 });
});

test("signed-out malformed input is rejected by authentication first", async () => {
  const { send, calls } = setup();
  assert.equal((await send(null, true)).status, 401);
  assert.deepEqual(calls, { auth: 1, body: 0, openAI: 0 });
});

test("session verification errors fail closed without leaking details", async () => {
  const { send, calls } = setup({ authError: true });
  const response = await send({ message: "Plan my wedding" });
  assert.equal(response.status, 503);
  assert.deepEqual(await response.json(), {
    error: "BrideZilla could not verify your session. Please try again shortly.",
  });
  assert.deepEqual(calls, { auth: 1, body: 0, openAI: 0 });
});

test("authenticated invalid messages retain validation and never reach OpenAI", async () => {
  for (const body of [null, {}, { message: "   " }, { message: 123 },
    { message: "x".repeat(limits.BRIDEZILLA_MAX_INPUT_LENGTH + 1) }]) {
    const { send, calls } = setup({ signedIn: true });
    assert.equal((await send(body)).status, 400);
    assert.deepEqual(calls, { auth: 1, body: 1, openAI: 0 });
  }
  const { send, calls } = setup({ signedIn: true });
  assert.equal((await send(null, true)).status, 400);
  assert.equal(calls.openAI, 0);
});

test("authenticated valid input reaches the existing Responses API flow with a mock", async () => {
  const { send, calls } = setup({
    signedIn: true,
    upstream(options) {
      const body = JSON.parse(options.body);
      assert.equal(body.input, "Plan my wedding");
      assert.equal(body.model, "test-model");
      assert.equal(body.max_output_tokens, 800);
      assert.equal(body.store, false);
      assert.match(body.instructions, /^You are BrideZilla,/);
      assert.equal(options.cache, "no-store");
      assert.ok(options.signal instanceof AbortSignal);
      return Response.json({ status: "completed", output: [
        { content: [{ type: "output_text", text: "  Choose your theme.  " }] },
      ] });
    },
  });
  const response = await send({ message: "  Plan my wedding  " });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { reply: "Choose your theme." });
  assert.deepEqual(calls, { auth: 1, body: 1, openAI: 1 });
});

test("authenticated unusable or incomplete AI output still returns a friendly 502", async () => {
  for (const payload of [null, { status: "incomplete" },
    { status: "completed", output_text: " " },
    { status: "completed", output_text: "x".repeat(limits.BRIDEZILLA_MAX_RESPONSE_LENGTH + 1) }]) {
    const { send } = setup({ signedIn: true, upstream: () => Response.json(payload) });
    const response = await send({ message: "Plan my wedding" });
    assert.equal(response.status, 502);
    assert.equal(typeof (await response.json()).error, "string");
  }
});

test("authenticated upstream failures retain safe status mapping", async () => {
  for (const [upstreamStatus, expectedStatus] of [[429, 429], [401, 503], [500, 503], [504, 504]]) {
    const { send } = setup({
      signedIn: true,
      upstream: () => new Response("Private provider diagnostic", { status: upstreamStatus }),
    });
    const response = await send({ message: "Plan my wedding" });
    assert.equal(response.status, expectedStatus);
    assert.ok(!(await response.text()).includes("Private provider diagnostic"));
  }
});

test("authenticated network and timeout failures retain safe handling", async () => {
  for (const [name, expectedStatus] of [["Error", 502], ["TimeoutError", 504], ["AbortError", 504]]) {
    const { send } = setup({
      signedIn: true,
      upstream: () => { const error = new Error("Private diagnostic"); error.name = name; throw error; },
    });
    const response = await send({ message: "Plan my wedding" });
    assert.equal(response.status, expectedStatus);
    assert.ok(!(await response.text()).includes("Private diagnostic"));
  }
});
