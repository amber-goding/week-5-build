import "server-only";

import { auth } from "@clerk/nextjs/server";

import {
  BRIDEZILLA_MAX_INPUT_LENGTH,
  BRIDEZILLA_MAX_RESPONSE_LENGTH,
  BRIDEZILLA_SERVER_TIMEOUT_MS,
} from "@/lib/bridezilla-guardrails";

const OPENAI_RESPONSES_URL = "https://api.openai.com/v1/responses";
const MAX_OUTPUT_TOKENS = 800;

const BRIDEZILLA_SYSTEM_PROMPT =
  "You are BrideZilla, a witty, theatrical, Halloween-inspired wedding planning assistant. Help users plan creative, organized, and memorable weddings. You specialize in gothic romance, elegant Halloween celebrations, and spooky wedding themes, but can help with other wedding styles. Keep your tone playful, supportive, and practical. Never insult users, invent confirmed bookings or vendor availability, or present guesses as verified facts. Give clear, actionable advice and acknowledge uncertainty when appropriate.";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isTimeoutError(error: unknown) {
  return (
    error instanceof Error &&
    (error.name === "AbortError" || error.name === "TimeoutError")
  );
}

function providerErrorResponse(status: number) {
  if (status === 429) {
    return Response.json(
      {
        error:
          "BrideZilla is receiving too many requests. Wait a moment, then try again.",
      },
      { status: 429 },
    );
  }

  if (status === 408 || status === 504) {
    return Response.json(
      { error: "BrideZilla took too long to answer. Please try again." },
      { status: 504 },
    );
  }

  if (status === 401 || status === 403 || status === 404) {
    return Response.json(
      {
        error:
          "BrideZilla's AI connection is unavailable. Check the server configuration and try again.",
      },
      { status: 503 },
    );
  }

  if (status >= 500) {
    return Response.json(
      { error: "BrideZilla is temporarily unavailable. Please try again soon." },
      { status: 503 },
    );
  }

  return Response.json(
    { error: "BrideZilla could not process that request. Please try again." },
    { status: 502 },
  );
}

function extractResponseText(payload: unknown) {
  if (!isRecord(payload)) return null;

  if (typeof payload.output_text === "string") {
    return payload.output_text.trim() || null;
  }

  if (!Array.isArray(payload.output)) return null;

  const textParts: string[] = [];

  for (const item of payload.output) {
    if (!isRecord(item) || !Array.isArray(item.content)) continue;

    for (const contentPart of item.content) {
      if (
        isRecord(contentPart) &&
        contentPart.type === "output_text" &&
        typeof contentPart.text === "string"
      ) {
        textParts.push(contentPart.text);
      }
    }
  }

  return textParts.join("\n").trim() || null;
}

export async function POST(request: Request) {
  try {
    const { userId } = await auth({
      acceptsToken: "session_token",
      treatPendingAsSignedOut: true,
    });

    if (!userId) {
      return Response.json(
        { error: "Please sign in to use BrideZilla, then try again." },
        { status: 401 },
      );
    }
  } catch {
    return Response.json(
      { error: "BrideZilla could not verify your session. Please try again shortly." },
      { status: 503 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Send a valid chat message." }, { status: 400 });
  }

  const message =
    isRecord(body) && typeof body.message === "string"
      ? body.message.trim()
      : "";

  if (!message) {
    return Response.json({ error: "Enter a message for BrideZilla." }, { status: 400 });
  }

  if (message.length > BRIDEZILLA_MAX_INPUT_LENGTH) {
    return Response.json(
      {
        error: `Keep your message at ${BRIDEZILLA_MAX_INPUT_LENGTH.toLocaleString()} characters or fewer.`,
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL?.trim();

  if (!apiKey || !model) {
    return Response.json(
      { error: "BrideZilla is not configured on the server yet." },
      { status: 500 },
    );
  }

  try {
    const openAIResponse = await fetch(OPENAI_RESPONSES_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        instructions: BRIDEZILLA_SYSTEM_PROMPT,
        input: message,
        max_output_tokens: MAX_OUTPUT_TOKENS,
        store: false,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(BRIDEZILLA_SERVER_TIMEOUT_MS),
    });

    if (!openAIResponse.ok) {
      return providerErrorResponse(openAIResponse.status);
    }

    let payload: unknown;

    try {
      payload = await openAIResponse.json();
    } catch {
      return Response.json(
        {
          error:
            "BrideZilla received an unreadable response. Please try again.",
        },
        { status: 502 },
      );
    }

    if (!isRecord(payload) || payload.status !== "completed") {
      return Response.json(
        { error: "BrideZilla could not complete that response. Please try again." },
        { status: 502 },
      );
    }

    const reply = extractResponseText(payload);

    if (!reply) {
      return Response.json(
        { error: "BrideZilla returned an empty response. Please try again." },
        { status: 502 },
      );
    }

    if (reply.length > BRIDEZILLA_MAX_RESPONSE_LENGTH) {
      return Response.json(
        {
          error:
            "BrideZilla's reply was too long to display safely. Please ask for a shorter answer.",
        },
        { status: 502 },
      );
    }

    return Response.json({ reply });
  } catch (error) {
    if (isTimeoutError(error)) {
      return Response.json(
        { error: "BrideZilla took too long to answer. Please try again." },
        { status: 504 },
      );
    }

    return Response.json(
      { error: "BrideZilla could not reach the AI service. Try again shortly." },
      { status: 502 },
    );
  }
}
