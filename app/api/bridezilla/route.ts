import "server-only";

const OPENAI_RESPONSES_URL = "https://api.openai.com/v1/responses";
const MAX_MESSAGE_LENGTH = 2000;

const BRIDEZILLA_SYSTEM_PROMPT =
  "You are BrideZilla, a witty, theatrical, Halloween-inspired wedding planning assistant. Help users plan creative, organized, and memorable weddings. You specialize in gothic romance, elegant Halloween celebrations, and spooky wedding themes, but can help with other wedding styles. Keep your tone playful, supportive, and practical. Never insult users, invent confirmed bookings or vendor availability, or present guesses as verified facts. Give clear, actionable advice and acknowledge uncertainty when appropriate.";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
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

  if (message.length > MAX_MESSAGE_LENGTH) {
    return Response.json(
      { error: `Keep your message under ${MAX_MESSAGE_LENGTH} characters.` },
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
        store: false,
      }),
      cache: "no-store",
    });

    if (!openAIResponse.ok) {
      return Response.json(
        { error: "BrideZilla could not answer right now. Try again shortly." },
        { status: 502 },
      );
    }

    const payload: unknown = await openAIResponse.json();
    const reply = extractResponseText(payload);

    if (!reply) {
      return Response.json(
        { error: "BrideZilla returned an empty response. Please try again." },
        { status: 502 },
      );
    }

    return Response.json({ reply });
  } catch {
    return Response.json(
      { error: "BrideZilla could not reach the AI service. Try again shortly." },
      { status: 502 },
    );
  }
}
