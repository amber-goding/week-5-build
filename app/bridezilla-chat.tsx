"use client";

import { FormEvent, useState } from "react";

import {
  BRIDEZILLA_CLIENT_TIMEOUT_MS,
  BRIDEZILLA_MAX_INPUT_LENGTH,
  BRIDEZILLA_MAX_RESPONSE_LENGTH,
} from "@/lib/bridezilla-guardrails";

type ChatResult = {
  reply?: unknown;
  error?: unknown;
};

export function BrideZillaChat() {
  const [message, setMessage] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");
  const [reply, setReply] = useState("");
  const [validationError, setValidationError] = useState("");
  const [requestError, setRequestError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [canRetry, setCanRetry] = useState(false);

  function handleMessageChange(nextMessage: string) {
    setMessage(nextMessage);
    setValidationError("");
    setRequestError("");
    setCanRetry(false);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextMessage = message.trim();
    if (isLoading) return;

    if (!nextMessage) {
      setValidationError("Enter a message for BrideZilla before sending.");
      return;
    }

    if (message.length > BRIDEZILLA_MAX_INPUT_LENGTH) {
      setValidationError(
        `Keep your message at ${BRIDEZILLA_MAX_INPUT_LENGTH.toLocaleString()} characters or fewer.`,
      );
      return;
    }

    setSubmittedMessage(nextMessage);
    setReply("");
    setValidationError("");
    setRequestError("");
    setCanRetry(false);
    setIsLoading(true);

    try {
      const response = await fetch("/api/bridezilla", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: nextMessage }),
        signal: AbortSignal.timeout(BRIDEZILLA_CLIENT_TIMEOUT_MS),
      });

      let result: ChatResult = {};

      try {
        result = (await response.json()) as ChatResult;
      } catch {
        setRequestError(
          "BrideZilla sent an unreadable response. Please try again.",
        );
        setCanRetry(true);
        return;
      }

      if (!response.ok || typeof result.reply !== "string") {
        setRequestError(
          typeof result.error === "string"
            ? result.error
            : "BrideZilla could not answer right now. Please try again.",
        );
        setCanRetry(response.status !== 400);
        return;
      }

      const nextReply = result.reply.trim();

      if (
        !nextReply ||
        nextReply.length > BRIDEZILLA_MAX_RESPONSE_LENGTH
      ) {
        setRequestError(
          "BrideZilla sent an unusable response. Please try again.",
        );
        setCanRetry(true);
        return;
      }

      setReply(nextReply);
      setMessage("");
    } catch (error) {
      const timedOut =
        error instanceof Error &&
        (error.name === "AbortError" || error.name === "TimeoutError");

      setRequestError(
        timedOut
          ? "BrideZilla took too long to answer. Please try again."
          : "BrideZilla could not reach the AI service. Please try again.",
      );
      setCanRetry(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="bridezilla-panel" aria-labelledby="bridezilla-heading">
      <div className="bridezilla-intro">
        <div className="bridezilla-mark" aria-hidden="true">
          <span>☾</span>
        </div>
        <div>
          <div className="bridezilla-title-row">
            <p className="eyebrow">Summon some inspiration</p>
            <span className="ai-badge">AI assistant</span>
          </div>
          <h2 id="bridezilla-heading">
            Ask <em>BrideZilla</em>
          </h2>
          <p>
            Your witty wedding-planning familiar for gothic romance, elegant
            Halloween details, and practical next steps.
          </p>
        </div>
      </div>

      <div className="bridezilla-chat-shell">
        {(submittedMessage || isLoading) && (
          <div className="chat-exchange" aria-live="polite">
            {submittedMessage && (
              <div className="chat-message chat-message-user">
                <p className="chat-speaker">You</p>
                <p>{submittedMessage}</p>
              </div>
            )}

            {isLoading && (
              <div className="chat-message chat-message-assistant" role="status">
                <p className="chat-speaker">BrideZilla · AI</p>
                <p className="chat-loading">
                  Consulting the wedding spirits<span aria-hidden="true">…</span>
                </p>
              </div>
            )}

            {reply && !isLoading && (
              <div className="chat-message chat-message-assistant">
                <p className="chat-speaker">BrideZilla · AI</p>
                <p>{reply}</p>
              </div>
            )}
          </div>
        )}

        <form className="bridezilla-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="bridezilla-message">What are we planning?</label>
          <textarea
            id="bridezilla-message"
            className="field-control bridezilla-input"
            name="message"
            value={message}
            onChange={(event) => handleMessageChange(event.target.value)}
            placeholder="Try: Help me plan an elegant haunted-forest reception..."
            maxLength={BRIDEZILLA_MAX_INPUT_LENGTH}
            rows={4}
            disabled={isLoading}
            aria-describedby={
              validationError
                ? "bridezilla-message-count bridezilla-validation-error"
                : "bridezilla-message-count"
            }
            aria-invalid={Boolean(validationError)}
          />
          {validationError && (
            <p
              className="bridezilla-error"
              id="bridezilla-validation-error"
              role="alert"
            >
              {validationError}
            </p>
          )}
          <div className="bridezilla-form-footer">
            <div className="bridezilla-form-meta">
              <p id="bridezilla-message-count">
                {message.length.toLocaleString()} /{" "}
                {BRIDEZILLA_MAX_INPUT_LENGTH.toLocaleString()} characters
              </p>
              <p>AI-generated guidance can be mistaken. Verify important details.</p>
            </div>
            <button
              className="bridezilla-submit"
              type="submit"
              disabled={isLoading}
            >
              {isLoading
                ? "Conjuring…"
                : canRetry
                  ? "Try again"
                  : "Ask BrideZilla"}
              <span aria-hidden="true">✦</span>
            </button>
          </div>
          {requestError && (
            <p className="bridezilla-error" role="alert">
              {requestError}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
