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
