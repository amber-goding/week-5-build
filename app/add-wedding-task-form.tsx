"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition, type FormEvent } from "react";

import { createWeddingTask } from "@/app/actions";
import { WEDDING_TASK_CATEGORIES } from "@/lib/wedding-task-categories";

type SubmissionResult =
  | { success: true }
  | { success: false; error: string }
  | null;

const fieldClasses = "field-control";

export function AddWeddingTaskForm() {
  const router = useRouter();
  const [result, setResult] = useState<SubmissionResult>(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setResult(null);

    startTransition(async () => {
      try {
        const nextResult = await createWeddingTask(formData);

        setResult(nextResult);

        if (nextResult.success) {
          form.reset();
          router.refresh();
        }
      } catch {
        setResult({
          success: false,
          error: "Unable to submit the wedding task. Please try again.",
        });
      }
    });
  }

  return (
    <section className="task-composer" aria-labelledby="add-task-heading">
      <div className="composer-heading">
        <p className="eyebrow">The next thoughtful detail</p>
        <h2 id="add-task-heading">
          Every detail, beautifully <em>placed</em>
        </h2>
        <p>
          Capture what comes next, give it a thoughtful timeline, and keep the
          notes that matter close at hand.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <fieldset disabled={isPending} className="form-grid">
          <div className="field-group field-span-full">
            <div className="label-row">
              <label htmlFor="title">Task title</label>
              <span>Required</span>
            </div>
            <input
              id="title"
              name="title"
              type="text"
              maxLength={200}
              required
              className={fieldClasses}
              placeholder="Reserve the ceremony venue"
            />
          </div>

          <div className="field-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              defaultValue="Other"
              className={fieldClasses}
            >
              {WEDDING_TASK_CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="field-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              defaultValue="Not Started"
              className={fieldClasses}
            >
              <option>Not Started</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>

          <div className="field-group field-span-full">
            <div className="label-row">
              <label htmlFor="dueDate">Due date</label>
              <span>Optional</span>
            </div>
            <input
              id="dueDate"
              name="dueDate"
              type="date"
              className={fieldClasses}
            />
          </div>

          <div className="field-group field-span-full">
            <div className="label-row">
              <label htmlFor="notes">Notes</label>
              <span>Optional</span>
            </div>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              maxLength={2000}
              className={fieldClasses}
              placeholder="Add contacts, questions, or details to remember."
            />
          </div>

          <button type="submit" className="submit-button">
            <span>{isPending ? "Saving..." : "Add to the plan"}</span>
            <span aria-hidden="true">→</span>
          </button>
        </fieldset>

        {result && (
          <p
            aria-live="polite"
            className={`form-message ${
              result.success ? "form-message-success" : "form-message-error"
            }`}
          >
            {result.success
              ? "Your wedding task has been added to the plan."
              : result.error}
          </p>
        )}
      </form>
    </section>
  );
}
