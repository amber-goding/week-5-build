"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition, type FormEvent } from "react";

import { createWeddingTask } from "@/app/actions";

type SubmissionResult =
  | { success: true }
  | { success: false; error: string }
  | null;

const fieldClasses =
  "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-950 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-200 disabled:cursor-not-allowed disabled:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:focus:border-rose-400 dark:focus:ring-rose-950";

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
    <section className="mx-auto w-full max-w-xl rounded-2xl bg-white p-6 shadow-lg sm:p-8 dark:bg-zinc-900">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-rose-600 dark:text-rose-400">
          Wedding Planning Tracker
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Add a wedding task
        </h1>
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Capture one planning task at a time. You can add the rest of the
          tracker later.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <fieldset disabled={isPending} className="space-y-5">
          <div>
            <label
              htmlFor="title"
              className="mb-1.5 block text-sm font-medium text-zinc-800 dark:text-zinc-200"
            >
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              maxLength={200}
              required
              className={fieldClasses}
              placeholder="Book the photographer"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="category"
                className="mb-1.5 block text-sm font-medium text-zinc-800 dark:text-zinc-200"
              >
                Category
              </label>
              <input
                id="category"
                name="category"
                type="text"
                defaultValue="General"
                maxLength={100}
                className={fieldClasses}
              />
            </div>

            <div>
              <label
                htmlFor="status"
                className="mb-1.5 block text-sm font-medium text-zinc-800 dark:text-zinc-200"
              >
                Status
              </label>
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
          </div>

          <div>
            <label
              htmlFor="dueDate"
              className="mb-1.5 block text-sm font-medium text-zinc-800 dark:text-zinc-200"
            >
              Due date <span className="text-zinc-500">(optional)</span>
            </label>
            <input
              id="dueDate"
              name="dueDate"
              type="date"
              className={fieldClasses}
            />
          </div>

          <div>
            <label
              htmlFor="notes"
              className="mb-1.5 block text-sm font-medium text-zinc-800 dark:text-zinc-200"
            >
              Notes <span className="text-zinc-500">(optional)</span>
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              maxLength={2000}
              className={fieldClasses}
              placeholder="Add any details, contacts, or reminders."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-rose-600 px-4 py-2.5 font-semibold text-white transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:focus:ring-offset-zinc-900"
          >
            {isPending ? "Saving…" : "Save wedding task"}
          </button>
        </fieldset>

        {result && (
          <p
            aria-live="polite"
            className={`rounded-lg px-4 py-3 text-sm ${
              result.success
                ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200"
                : "bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200"
            }`}
          >
            {result.success
              ? "Wedding task saved successfully."
              : result.error}
          </p>
        )}
      </form>
    </section>
  );
}
