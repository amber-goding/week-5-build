import { connection } from "next/server";
import { Suspense } from "react";

import { AddWeddingTaskForm } from "@/app/add-wedding-task-form";
import { EditWeddingTaskForm } from "@/app/edit-wedding-task-form";
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

      {tasks.length === 0 ? (
        <div className="empty-state">
          <p className="empty-state-kicker">Your plan begins here</p>
          <p>
            Add the first detail from the planning panel and it will appear in
            this journal.
          </p>
        </div>
      ) : (
        <ol className="task-list">
          {tasks.map((task, index) => (
            <li key={task.id}>
              <article className="task-entry">
                <p className="task-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <div className="task-content">
                  <div className="task-title-row">
                    <div>
                      <p className="task-category">{task.category}</p>
                      <h3>{task.title}</h3>
                    </div>
                    <span
                      className={
                        statusStyles[task.status] ??
                        statusStyles["Not Started"]
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
                          <time
                            dateTime={task.dueDate.toISOString().slice(0, 10)}
                          >
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
      )}
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
    <main className="planner-page">
      <div className="planner-container">
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
            <p className="journal-label">A private planning journal</p>
          </div>

          <div className="hero-grid">
            <h1 className="display-heading">
              <span>Your celebration,</span>
              <span>
                beautifully <em>considered.</em>
              </span>
            </h1>
            <div className="hero-copy">
              <p>
                A calm, considered place to shape the day—from the first
                meaningful decision to the final finishing touch.
              </p>
              {/* <p className="hero-note">Made for every way you celebrate.</p> */}
            </div>
          </div>
        </header>

        <section className="dashboard-frame" aria-label="Planning workspace">
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
  );
}
