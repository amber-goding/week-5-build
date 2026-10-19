# Prompt History

## 1. Codex workflow setup

### Exact prompt

> Before implementing any application features, configure this project's Codex workflow.
>
> 1. Create `prompt-history.md` in the project root if it does not exist.
> 2. Update the root `AGENTS.md` with persistent instructions to:
>    - Automatically append every user project prompt to `prompt-history.md` in chronological, numbered order.
>    - Include the exact full prompt and concise inferred Context, Task, Format, and Constraints for each entry.
>    - Preserve all previous entries; never overwrite or renumber them.
>    - Never log secrets, credentials, connection strings, or `.env` values.
>    - Make small, focused changes within the requested scope.
>    - Avoid unnecessary dependencies, features, and unrelated refactoring.
>    - Review and summarize diffs, explain changes, and report verification results.
>    - Never commit, push, or run database migrations without explicit permission.
> 3. Record this setup prompt as entry #1.
> 4. Keep the existing Next.js and Prisma configuration unchanged.
>
> Modify only `AGENTS.md` and `prompt-history.md`. Show the diff and summarize the changes.

### Inferred details

- **Context:** Establish repository-level operating rules before application feature work begins.
- **Task:** Create the prompt log and persist the requested Codex workflow instructions.
- **Format:** Maintain a chronological, numbered Markdown history containing the exact prompt and concise inferred metadata.
- **Constraints:** Modify only `AGENTS.md` and `prompt-history.md`; preserve existing Next.js and Prisma configuration; do not expose secrets; do not commit, push, or run migrations.

## 2. Add the WeddingTask model

### Exact prompt

> Add a `WeddingTask` model to `prisma/schema.prisma` with these fields:
>
> - `id`: auto-incrementing integer primary key
> - `title`: required string
> - `category`: string, default "General"
> - `status`: string, default "Not Started"
> - `dueDate`: optional DateTime
> - `notes`: optional string
> - `createdAt`: DateTime, default to creation time
>
> Preserve the existing Prisma generator and PostgreSQL datasource. Follow `AGENTS.md` and append this prompt to `prompt-history.md`.
>
> Modify only those two files. Do not run migrations, generate clients, install packages, or modify the database. Show and explain the diff.

### Inferred details

- **Context:** Extend the existing Prisma 7 PostgreSQL schema with the application's first wedding-planning data model.
- **Task:** Define `WeddingTask` with the requested types, optional fields, and defaults, then record this prompt as entry #2.
- **Format:** Use idiomatic Prisma schema syntax and the established numbered Markdown prompt-history structure.
- **Constraints:** Modify only `prisma/schema.prisma` and `prompt-history.md`; preserve the generator, datasource, and prior history; do not migrate, generate clients, install packages, or access the database.

## 3. Review Prisma installation changes

### Exact prompt

> Review the current Git changes related to Prisma installation and initialization.
> Identify which files are necessary to reproduce our Next.js 16 and Prisma 7 project, and which generated skill files are optional.
> Inspect `.gitignore`, `package.json`, `package-lock.json`, `prisma7.config.ts`, `.agents/`, `.claude/`, `.windsurf/`, and `skills-lock.json`.
> Check that database credentials and environment files are excluded from Git. Do not display any secret values.
> Do not modify, delete, stage, commit, or push any files. Do not run migrations.
> Follow `AGENTS.md` and append this prompt to `prompt-history.md`, without changing other files.
> Recommend exactly which files should be committed and which should remain untracked or be ignored. Explain the reasoning concisely.

### Inferred details

- **Context:** Audit the uncommitted artifacts created while adding Prisma 7 to the existing Next.js 16 project.
- **Task:** Classify reproducibility-critical Prisma files versus optional generated agent-skill files, and verify secret-file exclusions.
- **Format:** Provide concise, exact commit and ignore recommendations with supporting reasoning.
- **Constraints:** Append only to `prompt-history.md`; do not expose secrets or modify, delete, stage, commit, push, install, generate, migrate, or access the database.

## 4. Ignore optional Prisma agent-skill resources

### Exact prompt

> Update `.gitignore` to exclude the optional Prisma-generated agent-skill resources: `/.agents/`, `/.claude/`, `/.windsurf/`, and `/skills-lock.json`.
> Preserve all existing ignore rules, especially `.env*` and `/app/generated/prisma`.
> Follow `AGENTS.md` and append this prompt to `prompt-history.md`.
> Modify only `.gitignore` and `prompt-history.md`. Do not delete files, install packages, run migrations, commit, or push. Show the diff.

### Inferred details

- **Context:** Apply the ignore recommendations from the Prisma installation audit.
- **Task:** Ignore the generated agent-skill directories and their lock file, then record this prompt as entry #4.
- **Format:** Add a focused, labeled `.gitignore` block and retain the established numbered Markdown prompt-history structure.
- **Constraints:** Modify only `.gitignore` and `prompt-history.md`; preserve all existing ignore rules and history; do not delete files, install packages, migrate, commit, or push.

## 5. Verify the Neon database connection

### Exact prompt

> Verify that Prisma 7 can connect to my existing Neon PostgreSQL database.
>
> 1. Confirm `prisma7.config.ts` reads `DATABASE_URL` from `.env`.
> 2. Run `npx prisma db pull --print` to test the connection without overwriting `prisma/schema.prisma`.
> 3. Report whether the connection succeeds and whether the database contains any tables.
> 4. Do not display connection strings, passwords, or other secrets.
> 5. Do not modify the schema, create tables, run migrations, install packages, or generate Prisma Client.
> 6. Follow `AGENTS.md` and append this prompt to `prompt-history.md`.
>
> Explain the results in beginner-friendly language and summarize the file changes.

### Inferred details

- **Context:** Confirm that the existing Prisma 7 setup can safely reach the configured Neon PostgreSQL database before database changes are made.
- **Task:** Verify environment loading, perform print-only database introspection, report connectivity and whether tables exist, and record this prompt as entry #5.
- **Format:** Give a beginner-friendly result summary and identify the sole documentation change.
- **Constraints:** Do not expose secrets, overwrite the Prisma schema, create tables, run migrations, install packages, generate Prisma Client, commit, or push; modify only `prompt-history.md`.

## 6. Prepare the first Prisma migration

### Exact prompt

> Prepare our first Prisma migration for the existing Neon PostgreSQL database.
>
> 1. Inspect `prisma/schema.prisma` and `prisma7.config.ts`.
> 2. Confirm the `WeddingTask` model is valid and the configuration is compatible with Prisma 7.10.1.
> 3. Identify the exact command needed to create the first migration, named `init_wedding_tasks`.
> 4. Explain which files and database objects the migration will create or modify.
> 5. Identify any connection or configuration issues that could prevent the migration.
>
> Do not execute the migration, modify the database, install packages, or change configuration files. Do not expose credentials.
>
> Follow `AGENTS.md` and append this prompt to `prompt-history.md`. Summarize the findings concisely.

### Inferred details

- **Context:** Review the validated Prisma 7 schema and empty Neon database before authorizing the initial migration.
- **Task:** Confirm migration readiness, provide the named migration command, explain its file and database effects, and identify likely blockers.
- **Format:** Give a concise readiness summary with the exact command and clearly separated effects and risks.
- **Constraints:** Modify only `prompt-history.md`; do not expose credentials, execute a migration, modify the database, install packages, generate Prisma Client, or change configuration.

## 7. Generate the initial create-only migration

### Exact prompt

> Generate the initial Prisma migration named `init_wedding_tasks` using Prisma 7.10.1 and the existing configuration.
> Run:\
> `npx prisma migrate dev --name init_wedding_tasks --create-only --config prisma7.config.ts`
> If a shadow-database permission error occurs, stop and report it. Do not attempt workarounds or change database permissions.
> If successful, inspect the generated SQL and confirm it creates only the expected `WeddingTask` table, fields, defaults, and primary key.
> Do not apply the migration to Neon, generate Prisma Client, install packages, commit, or push.
> Follow `AGENTS.md`, append this prompt to `prompt-history.md`, and summarize the results and file changes.

### Inferred details

- **Context:** Materialize the reviewed initial Prisma migration as SQL without applying it to the empty Neon database.
- **Task:** Run the authorized create-only migration command, stop on shadow-database permission failure, and otherwise inspect the generated SQL for exact schema scope.
- **Format:** Report command success, SQL contents, verification results, and changed files concisely.
- **Constraints:** Use Prisma 7.10.1 and the existing configuration; do not work around permission failures, apply the migration, generate Prisma Client, install packages, commit, push, expose secrets, or change unrelated files.

## 8. Apply the initial migration to Neon

### Exact prompt

> Apply the reviewed `init_wedding_tasks` migration to my existing Neon PostgreSQL database.
>
> 1. Run `npx prisma migrate dev --config prisma7.config.ts`.
> 2. If successful, run `npx prisma migrate status --config prisma7.config.ts` to verify migration status.
> 3. Confirm that the `WeddingTask` table was created with the expected fields.
> 4. Do not modify the schema, configuration, or migration SQL.
> 5. Do not insert, update, or delete any wedding task records.
> 6. Do not display credentials or connection strings.
> 7. If an error occurs, stop and explain it without attempting additional fixes.
>
> Follow `AGENTS.md` and append this prompt to `prompt-history.md`.
>
> Report the results and any file changes. Do not commit or push.

### Inferred details

- **Context:** Deploy the reviewed initial migration to the connected, previously empty Neon PostgreSQL database.
- **Task:** Apply the pending migration, verify migration status, and confirm the resulting live `WeddingTask` table structure.
- **Format:** Report the migration, status, table verification, and file changes clearly and concisely.
- **Constraints:** Stop after any error; do not modify schema, configuration, or migration SQL; do not change wedding task records, expose secrets, commit, or push.

## 9. Set up Prisma Client for Next.js

### Exact prompt

> &#x20; Set up Prisma Client for our existing Next.js 16, Prisma 7.10.1, and Neon PostgreSQL project.
>
> 1. Inspect the current Prisma generator configuration and generated-client output path.
> 2. Generate Prisma Client using the existing schema.
> 3. Create `lib/prisma.ts` to export a reusable Prisma Client singleton using `PrismaPg` from `@prisma/adapter-pg`.
> 4. Use `DATABASE_URL_POOLED` for application queries if available, while preserving the existing direct `DATABASE_URL` configuration for migrations.
> 5. Keep database credentials server-side.
> 6. Verify the setup with appropriate TypeScript and lint checks.
>
> Follow `AGENTS.md` and append this prompt to `prompt-history.md`.
>
> Do not modify the database, run migrations, create API routes or UI components, install packages, commit, or push. Show the diff and summarize verification results.

### Inferred details

- **Context:** Add the reusable server-side Prisma runtime layer after the initial schema migration has been generated and applied.
- **Task:** Generate Prisma Client at the configured output path and add a singleton PostgreSQL-adapter client that prefers the pooled application URL.
- **Format:** Provide a focused TypeScript module, show the scoped diff, and summarize generation, type-check, and lint results.
- **Constraints:** Keep credentials server-only; preserve the direct migration URL and existing schema/configuration; do not modify the database, run migrations, add routes or UI, install packages, commit, or push.
