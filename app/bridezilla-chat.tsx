"use client";

import { FormEvent, useState } from "react";

type ChatResult = {
  reply?: unknown;
  error?: unknown;
};

export function BrideZillaChat() {
  const [message, setMessage] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");
  const [reply, setReply] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextMessage = message.trim();
    if (!nextMessage || isLoading) return;

    setSubmittedMessage(nextMessage);
    setReply("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/bridezilla", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: nextMessage }),
      });
      const result = (await response.json()) as ChatResult;

      if (!response.ok || typeof result.reply !== "string") {
        setError(
          typeof result.error === "string"
            ? result.error
            : "BrideZilla could not answer right now. Please try again.",
        );
        return;
      }

      setReply(result.reply);
      setMessage("");
    } catch {
      setError("BrideZilla could not answer right now. Please try again.");
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

        <form className="bridezilla-form" onSubmit={handleSubmit}>
          <label htmlFor="bridezilla-message">What are we planning?</label>
          <textarea
            id="bridezilla-message"
            className="field-control bridezilla-input"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Try: Help me plan an elegant haunted-forest reception..."
            maxLength={2000}
            rows={4}
            disabled={isLoading}
            required
          />
          <div className="bridezilla-form-footer">
            <p>AI-generated guidance can be mistaken. Verify important details.</p>
            <button
              className="bridezilla-submit"
              type="submit"
              disabled={isLoading || !message.trim()}
            >
              {isLoading ? "Conjuring…" : "Ask BrideZilla"}
              <span aria-hidden="true">✦</span>
            </button>
          </div>
          {error && (
            <p className="bridezilla-error" role="alert">
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
