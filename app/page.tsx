import { connection } from "next/server";
import { Suspense } from "react";

import { AddWeddingTaskForm } from "@/app/add-wedding-task-form";
import { AccountControls } from "@/app/account-controls";
import { EditWeddingTaskForm } from "@/app/edit-wedding-task-form";
import { PlannerShell } from "@/app/planner-shell";
import { prisma } from "@/lib/prisma";

const statusStyles: Record<string, string> = {
  "Not Started": "status-badge status-not-started",
  "In Progress": "status-badge status-in-progress",
  Completed: "status-badge status-completed",
};

const dueDateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeZone: "UTC",
});

type WeddingTaskListItem = {
  id: number;
  title: string;
  category: string;
  status: string;
  dueDate: Date | null;
  notes: string | null;
  createdAt: Date;
};

function compareByCreation(taskA: WeddingTaskListItem, taskB: WeddingTaskListItem) {
  return (
    taskB.createdAt.getTime() - taskA.createdAt.getTime() ||
    taskB.id - taskA.id
  );
}

function compareActiveTasks(taskA: WeddingTaskListItem, taskB: WeddingTaskListItem) {
  if (taskA.dueDate && !taskB.dueDate) return -1;
  if (!taskA.dueDate && taskB.dueDate) return 1;

  if (taskA.dueDate && taskB.dueDate) {
    const dueDateDifference =
      taskA.dueDate.getTime() - taskB.dueDate.getTime();

    if (dueDateDifference !== 0) return dueDateDifference;
  }

  return compareByCreation(taskA, taskB);
}

function WeddingTaskEntries({
  tasks,
  completed = false,
}: {
  tasks: WeddingTaskListItem[];
  completed?: boolean;
}) {
  return (
    <ol className={`task-list${completed ? " task-list-completed" : ""}`}>
      {tasks.map((task, index) => (
        <li key={task.id}>
          <article
            className={`task-entry${completed ? " task-entry-completed" : ""}`}
          >
            <p className="task-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </p>

            <div className="task-content">
              <div className="task-title-row">
                <div>
                  <p className="task-category">{task.category}</p>
                  <h4>{task.title}</h4>
                </div>
                <span
                  className={
                    statusStyles[task.status] ?? statusStyles["Not Started"]
                  }
                >
                  {task.status}
                </span>
              </div>

              <dl className="task-meta">
                <div>
                  <dt>Due</dt>
                  <dd>
                    {task.dueDate ? (
                      <time dateTime={task.dueDate.toISOString().slice(0, 10)}>
                        {dueDateFormatter.format(task.dueDate)}
                      </time>
                    ) : (
                      "Open timeline"
                    )}
                  </dd>
                </div>
              </dl>

              {task.notes && <p className="task-notes">{task.notes}</p>}

              <EditWeddingTaskForm
                task={{
                  id: task.id,
                  title: task.title,
                  category: task.category,
                  status: task.status,
                  dueDate: task.dueDate
                    ? task.dueDate.toISOString().slice(0, 10)
                    : "",
                  notes: task.notes ?? "",
                }}
              />
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}

async function WeddingTaskList() {
  await connection();

  const tasks = await prisma.weddingTask.findMany({
    select: {
      id: true,
      createdAt: true,
      title: true,
      category: true,
      status: true,
      dueDate: true,
      notes: true,
    },
    orderBy: [{ createdAt: "desc" }, { id: "desc" }],
  });

  const completedTasks = tasks
    .filter((task) => task.status === "Completed")
    .sort(compareByCreation);
  const activeTasks = tasks
    .filter((task) => task.status !== "Completed")
    .sort(compareActiveTasks);

  return (
    <section className="task-ledger" aria-labelledby="task-list-heading">
      <div className="ledger-heading">
        <div>
          <p className="eyebrow">Your planning journal</p>
          <h2 id="task-list-heading">
            Plans taking <em>shape</em>
          </h2>
        </div>
        <p className="task-count" aria-label={`${tasks.length} saved tasks`}>
          <span>{String(tasks.length).padStart(2, "0")}</span>
          {tasks.length === 1 ? "entry" : "entries"}
        </p>
      </div>

      <section className="task-section" aria-labelledby="active-tasks-heading">
        <h3 className="task-section-heading" id="active-tasks-heading">
          Active Tasks
        </h3>
        {activeTasks.length > 0 ? (
          <WeddingTaskEntries tasks={activeTasks} />
        ) : tasks.length === 0 ? (
          <div className="empty-state">
            <p className="empty-state-kicker">Your plan begins here</p>
            <p>
              Add the first detail from the planning panel and it will appear
              in this journal.
            </p>
          </div>
        ) : (
          <p className="task-section-empty">
            No active tasks. Your completed tasks are listed below.
          </p>
        )}
      </section>

      <section
        className="task-section completed-task-section"
        aria-labelledby="completed-tasks-heading"
      >
        <h3 className="task-section-heading" id="completed-tasks-heading">
          Completed Tasks
        </h3>
        {completedTasks.length > 0 ? (
          <WeddingTaskEntries tasks={completedTasks} completed />
        ) : (
          <p className="task-section-empty">No completed tasks yet.</p>
        )}
      </section>
    </section>
  );
}

function WeddingTaskListFallback() {
  return (
    <section
      className="task-ledger"
      aria-labelledby="task-list-loading-heading"
    >
      <div className="ledger-heading">
        <div>
          <p className="eyebrow">Your planning journal</p>
          <h2 id="task-list-loading-heading">
            Plans taking <em>shape</em>
          </h2>
        </div>
      </div>
      <div className="ledger-loading" role="status">
        Gathering your plans...
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <PlannerShell>
      <main className="planner-page">
        <div className="planner-container" id="dashboard">
          <header className="editorial-hero">
            <div className="brand-row">
              <div className="brand-lockup">
                <span className="brand-seal" aria-hidden="true">
                  EA
                </span>
                <div>
                  <p className="brand-name">Ever After</p>
                  <p className="brand-subtitle">Wedding planner</p>
                </div>
              </div>
              <AccountControls />
            </div>

            <div className="hero-grid">
              <p className="hero-kicker">Your wedding planning workspace</p>
              <h1 className="display-heading">
                <span>Your celebration,</span>
                <span>
                  beautifully <em>considered.</em>
                </span>
              </h1>
              <div className="hero-copy">
                <p>
                  A private, beautifully organized place to shape the day—from
                  the first meaningful decision to the final finishing touch.
                </p>
              </div>
            </div>
          </header>

          <section
            className="dashboard-frame"
            id="wedding-tasks"
            aria-label="Planning workspace"
          >
            <div className="composer-panel">
              <AddWeddingTaskForm />
            </div>
            <div className="ledger-panel">
              <Suspense fallback={<WeddingTaskListFallback />}>
                <WeddingTaskList />
              </Suspense>
            </div>
          </section>
        </div>
      </main>
    </PlannerShell>
  );
}
