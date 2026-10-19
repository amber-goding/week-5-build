"use server";

import { prisma } from "@/lib/prisma";

const MAX_TITLE_LENGTH = 200;
const MAX_CATEGORY_LENGTH = 100;
const MAX_NOTES_LENGTH = 2_000;
const VALID_STATUSES = new Set([
  "Not Started",
  "In Progress",
  "Completed",
]);

function getTextField(formData: FormData, name: string) {
  const value = formData.get(name);

  return typeof value === "string" ? value.trim() : "";
}

function parseDueDate(value: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);

  if (!match) {
    return null;
  }

  const [, yearText, monthText, dayText] = match;
  const year = Number(yearText);
  const month = Number(monthText);
  const day = Number(dayText);
  const date = new Date(Date.UTC(year, month - 1, day));

  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null;
  }

  return date;
}

export async function createWeddingTask(formData: FormData) {
  const title = getTextField(formData, "title");
  const category = getTextField(formData, "category") || "General";
  const status = getTextField(formData, "status") || "Not Started";
  const dueDateValue = getTextField(formData, "dueDate");
  const notes = getTextField(formData, "notes");

  if (!title) {
    return { success: false, error: "Title is required." } as const;
  }

  if (title.length > MAX_TITLE_LENGTH) {
    return {
      success: false,
      error: `Title must be ${MAX_TITLE_LENGTH} characters or fewer.`,
    } as const;
  }

  if (category.length > MAX_CATEGORY_LENGTH) {
    return {
      success: false,
      error: `Category must be ${MAX_CATEGORY_LENGTH} characters or fewer.`,
    } as const;
  }

  if (!VALID_STATUSES.has(status)) {
    return { success: false, error: "Select a valid status." } as const;
  }

  if (notes.length > MAX_NOTES_LENGTH) {
    return {
      success: false,
      error: `Notes must be ${MAX_NOTES_LENGTH} characters or fewer.`,
    } as const;
  }

  const dueDate = dueDateValue ? parseDueDate(dueDateValue) : undefined;

  if (dueDateValue && !dueDate) {
    return {
      success: false,
      error: "Due date must be a valid date in YYYY-MM-DD format.",
    } as const;
  }

  try {
    await prisma.weddingTask.create({
      data: {
        title,
        category,
        status,
        dueDate,
        notes: notes || null,
      },
    });

    return { success: true } as const;
  } catch {
    return {
      success: false,
      error: "Unable to create the wedding task. Please try again.",
    } as const;
  }
}
