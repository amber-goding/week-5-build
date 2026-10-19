import { connection } from "next/server";
import { Suspense } from "react";

import { AddWeddingTaskForm } from "@/app/add-wedding-task-form";
import { prisma } from "@/lib/prisma";

const statusStyles: Record<string, string> = {
  "Not Started":
    "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200",
  "In Progress":
    "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200",
  Completed:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200",
};

const dueDateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeZone: "UTC",
});

async function WeddingTaskList() {
  await connection();

  const tasks = await prisma.weddingTask.findMany({
    select: {
      id: true,
      title: true,
      category: true,
      status: true,
      dueDate: true,
      notes: true,
    },
    orderBy: [{ createdAt: "desc" }, { id: "desc" }],
  });

  return (
    <section aria-labelledby="task-list-heading">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-600 dark:text-rose-400">
            Saved plans
          </p>
          <h2
            id="task-list-heading"
            className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50"
          >
            Wedding tasks
          </h2>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
        </p>
      </div>

      {tasks.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-rose-200 bg-white px-6 py-10 text-center shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            No wedding tasks yet.
          </p>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Add your first task with the form above to start planning.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {tasks.map((task) => (
            <article
              key={task.id}
              className="rounded-2xl border border-rose-100 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-rose-600 dark:text-rose-400">
                    {task.category}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                    {task.title}
                  </h3>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
                    statusStyles[task.status] ?? statusStyles["Not Started"]
                  }`}
                >
                  {task.status}
                </span>
              </div>

              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-medium text-zinc-700 dark:text-zinc-300">
                    Due date
                  </dt>
                  <dd className="mt-0.5 text-zinc-600 dark:text-zinc-400">
                    {task.dueDate
                      ? dueDateFormatter.format(task.dueDate)
                      : "No due date"}
                  </dd>
                </div>

                {task.notes && (
                  <div>
                    <dt className="font-medium text-zinc-700 dark:text-zinc-300">
                      Notes
                    </dt>
                    <dd className="mt-0.5 whitespace-pre-wrap text-zinc-600 dark:text-zinc-400">
                      {task.notes}
                    </dd>
                  </div>
                )}
              </dl>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function WeddingTaskListFallback() {
  return (
    <section aria-labelledby="task-list-loading-heading">
      <p className="text-sm font-semibold uppercase tracking-widest text-rose-600 dark:text-rose-400">
        Saved plans
      </p>
      <h2
        id="task-list-loading-heading"
        className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50"
      >
        Wedding tasks
      </h2>
      <div className="mt-5 rounded-2xl border border-rose-100 bg-white px-6 py-8 text-center text-sm text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
        Loading wedding tasks...
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-rose-50 px-4 py-10 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-4xl space-y-10">
        <AddWeddingTaskForm />

        <Suspense fallback={<WeddingTaskListFallback />}>
          <WeddingTaskList />
        </Suspense>
      </div>
    </main>
  );
}
