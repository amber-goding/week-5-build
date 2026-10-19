"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition, type FormEvent } from "react";

import { deleteWeddingTask, updateWeddingTask } from "@/app/actions";

type WeddingTaskFields = {
  id: number;
  title: string;
  category: string;
  status: string;
  dueDate: string;
  notes: string;
};

type SubmissionResult =
  | { success: true }
  | { success: false; error: string }
  | null;

export function EditWeddingTaskForm({ task }: { task: WeddingTaskFields }) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [result, setResult] = useState<SubmissionResult>(null);
  const [isPending, startTransition] = useTransition();
  const [isDeleting, startDeleteTransition] = useTransition();
  const formId = `edit-wedding-task-${task.id}`;
  const deleteConfirmationId = `delete-wedding-task-${task.id}`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    setResult(null);

    startTransition(async () => {
      try {
        const nextResult = await updateWeddingTask(formData);

        setResult(nextResult);

        if (nextResult.success) {
          setIsEditing(false);
          router.refresh();
        }
      } catch {
        setResult({
          success: false,
          error: "Unable to update the wedding task. Please try again.",
        });
      }
    });
  }

  function handleCancel() {
    setIsEditing(false);
    setResult(null);
  }

  function handleDelete() {
    const formData = new FormData();
    formData.set("id", String(task.id));
    setDeleteError(null);

    startDeleteTransition(async () => {
      try {
        const deleteResult = await deleteWeddingTask(formData);

        if (deleteResult.success) {
          setIsConfirmingDelete(false);
          router.refresh();
          return;
        }

        setDeleteError(deleteResult.error);
      } catch {
        setDeleteError("Unable to delete the wedding task. Please try again.");
      }
    });
  }

  return (
    <div className="task-edit-controls">
      {!isEditing && (
        <div className="task-action-buttons">
          <button
            type="button"
            className="edit-button"
            aria-label={`Edit ${task.title}`}
            disabled={isDeleting}
            onClick={() => {
              setResult(null);
              setIsConfirmingDelete(false);
              setDeleteError(null);
              setIsEditing(true);
            }}
          >
            <svg
              className="edit-button-icon"
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="m10.9 2.1 3 3M2 14l3.2-.7 8.3-8.4a1.6 1.6 0 0 0-2.3-2.3l-8.4 8.3L2 14Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.35"
              />
            </svg>
            Edit
          </button>
          <button
            type="button"
            className="delete-button"
            aria-label={`Delete ${task.title}`}
            aria-expanded={isConfirmingDelete}
            aria-controls={
              isConfirmingDelete ? deleteConfirmationId : undefined
            }
            disabled={isDeleting}
            onClick={() => {
              setDeleteError(null);
              setIsConfirmingDelete(true);
            }}
          >
            <svg
              className="delete-button-icon"
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M2.5 4.5h11m-9.8 0 .7 9h8.2l.7-9M6 4.5V2.8h4v1.7m-3.5 2.2v4.8m3-4.8v4.8"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.25"
              />
            </svg>
            Delete
          </button>
        </div>
      )}

      {isConfirmingDelete && !isEditing && (
        <div
          id={deleteConfirmationId}
          className="delete-confirmation"
          role="group"
          aria-labelledby={`${deleteConfirmationId}-label`}
        >
          <p id={`${deleteConfirmationId}-label`}>
            Delete <strong>{task.title}</strong>?
          </p>
          <div className="delete-confirmation-actions">
            <button
              type="button"
              className="cancel-edit-button"
              disabled={isDeleting}
              onClick={() => {
                setIsConfirmingDelete(false);
                setDeleteError(null);
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="confirm-delete-button"
              disabled={isDeleting}
              onClick={handleDelete}
            >
              {isDeleting ? "Deleting..." : "Yes, Delete"}
            </button>
          </div>
          {deleteError && (
            <p className="delete-error" role="alert">
              {deleteError}
            </p>
          )}
        </div>
      )}

      {isEditing && (
        <form
          id={formId}
          className="task-editor"
          aria-label={`Edit ${task.title}`}
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="id" value={task.id} />

          <fieldset disabled={isPending} className="edit-form-grid">
            <div className="field-group edit-field-full">
              <label htmlFor={`${formId}-title`}>Task title</label>
              <input
                id={`${formId}-title`}
                name="title"
                type="text"
                defaultValue={task.title}
                maxLength={200}
                required
                autoFocus
                className="field-control"
              />
            </div>

            <div className="field-group">
              <label htmlFor={`${formId}-category`}>Category</label>
              <input
                id={`${formId}-category`}
                name="category"
                type="text"
                defaultValue={task.category}
                maxLength={100}
                className="field-control"
              />
            </div>

            <div className="field-group">
              <label htmlFor={`${formId}-status`}>Status</label>
              <select
                id={`${formId}-status`}
                name="status"
                defaultValue={task.status}
                className="field-control"
              >
                <option>Not Started</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>

            <div className="field-group">
              <label htmlFor={`${formId}-due-date`}>Due date</label>
              <input
                id={`${formId}-due-date`}
                name="dueDate"
                type="date"
                defaultValue={task.dueDate}
                className="field-control"
              />
            </div>

            <div className="field-group edit-field-full">
              <label htmlFor={`${formId}-notes`}>Notes</label>
              <textarea
                id={`${formId}-notes`}
                name="notes"
                rows={3}
                defaultValue={task.notes}
                maxLength={2000}
                className="field-control"
              />
            </div>

            <div className="task-edit-actions edit-field-full">
              <button type="submit" className="save-edit-button">
                {isPending ? "Saving..." : "Save Changes"}
              </button>
              <button
                type="button"
                className="cancel-edit-button"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </fieldset>
        </form>
      )}

      {result && (
        <p
          aria-live="polite"
          className={`form-message task-edit-message ${
            result.success ? "form-message-success" : "form-message-error"
          }`}
        >
          {result.success ? "Wedding task updated." : result.error}
        </p>
      )}
    </div>
  );
}
