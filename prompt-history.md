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

## 10. Implement the WeddingTask create action

### Exact prompt

> Implement only the server-side Create operation for our Wedding Planning Tracker.
>
> Create `app/actions.ts` with a Next.js Server Action named `createWeddingTask` that:
>
> - Accepts FormData.
> - Validates a nonempty title and reasonable field lengths.
> - Accepts category, status, optional due date, and optional notes.
> - Restricts status to "Not Started", "In Progress", or "Completed".
> - Uses the existing `prisma` export from `lib/prisma.ts` to save a WeddingTask.
> - Returns a simple success or error result without exposing internal database details.
>
> Do not create forms, pages, API routes, Read/Update/Delete functionality, or install packages. Do not modify the database schema or run migrations.
>
> Follow `AGENTS.md` and append this prompt to `prompt-history.md`. Run TypeScript and focused lint checks, then show and explain the diff. Do not commit or push.

### Inferred details

- **Context:** Add the first server-side application operation on top of the generated Prisma Client singleton and migrated `WeddingTask` table.
- **Task:** Implement a narrowly scoped Server Action that validates form input and creates one wedding task with safe return values.
- **Format:** Use a dedicated `app/actions.ts` module with explicit server-side validation, then show and explain the focused diff and verification results.
- **Constraints:** Add Create only; do not add forms, pages, API routes, Read/Update/Delete operations, dependencies, schema changes, migrations, commits, or pushes.

## 11. Build the Add Wedding Task form

### Exact prompt

> Build a minimal Add Wedding Task form to test our existing `createWeddingTask` Server Action.
>
> Requirements:
>
> 1. Replace the default Next.js starter content in `app/page.tsx` with a simple wedding task entry page.
> 2. Include fields for title, category, status, optional due date, and optional notes.
> 3. Connect the form to the existing `createWeddingTask` action without rewriting its validation or database logic.
> 4. Display success and error messages after submission.
> 5. Clear the form only after a successful save.
> 6. Use existing Tailwind CSS for simple, responsive styling.
> 7. Keep database operations server-side.
>
> Do not implement Read, Update, Delete, authentication, new dependencies, or additional pages. Do not modify the Prisma schema or run migrations.
>
> Follow `AGENTS.md` and append this prompt to `prompt-history.md`. Run TypeScript and ESLint checks, show the diff, and explain how the form sends data to the server.
>
> Do not commit or push.

### Inferred details

- **Context:** Add a minimal browser interface for exercising the existing create-only Server Action.
- **Task:** Replace the starter page with a responsive form that submits the expected fields, reports the action result, and resets only after success.
- **Format:** Use the existing Tailwind setup in `app/page.tsx`, then show the focused diff and explain the client-to-server submission flow.
- **Constraints:** Reuse the existing Server Action unchanged; do not add other CRUD operations, authentication, dependencies, pages, schema changes, migrations, commits, or pushes.

## 12. Improve the date-picker icon contrast

### Exact prompt

> The due date picker works, but its calendar icon is difficult to see because it blends into the background.
> Improve the calendar icon's visibility and contrast in the existing wedding task form. Keep the current design and make the smallest necessary CSS change.
> Do not modify form behavior, validation, database logic, or unrelated styling.
> Follow `AGENTS.md`, append this prompt to `prompt-history.md`, run appropriate checks, and show the diff. Do not commit or push.

### Inferred details

- **Context:** Correct a native date-input contrast issue in the existing responsive wedding-task form, especially in dark mode.
- **Task:** Make the browser-rendered calendar indicator use a color scheme that contrasts with the dark input background.
- **Format:** Add one narrowly scoped global CSS rule, show the focused diff, and report verification results.
- **Constraints:** Modify only `app/globals.css` and `prompt-history.md`; preserve form behavior, validation, database logic, design, and unrelated styling; do not commit or push.

## 13. Implement WeddingTask read functionality

### Exact prompt

> Implement the Read functionality for our Wedding Planning Tracker.
>
> 1. Retrieve all saved `WeddingTask` records from Neon using the existing Prisma Client.
> 2. Display the tasks beneath the existing Add Wedding Task form in a clean, responsive list.
> 3. Show each task's title, category, status, optional due date, and optional notes.
> 4. Display a helpful empty-state message when no tasks exist.
> 5. Ensure the list reflects newly saved tasks and persists after a browser refresh.
> 6. Keep all database queries server-side and preserve the working Create functionality.
> 7. Use the existing Next.js 16 architecture and Tailwind CSS. Avoid new dependencies.
>
> Do not implement Update, Delete, authentication, filtering, or unrelated features. Do not modify the database schema or run migrations.
>
> Follow `AGENTS.md` and append this prompt to `prompt-history.md`. Run TypeScript and ESLint checks, show the diff, and explain the data flow.
>
> Do not commit or push.

### Inferred details

- **Context:** Add server-rendered visibility for records created through the existing wedding-task form.
- **Task:** Query all wedding tasks in a Server Component, render a responsive list and empty state, and refresh that server-rendered data after successful creates.
- **Format:** Preserve the existing styled form in a focused Client Component and render the task list beneath it from `app/page.tsx`.
- **Constraints:** Keep queries server-side and Create working; do not add Update, Delete, authentication, filtering, dependencies, schema changes, migrations, commits, or pushes.

## 14. Fix the blocking-route error with Suspense

### Exact prompt

> Fix the Next.js 16.4.2 blocking-route error on `/`.
> The error points to `await connection()` in `app/page.tsx`, where uncached database access occurs outside React Suspense.
> Refactor the page so the Prisma task query and any required `connection()` call execute inside an async Server Component wrapped in `<Suspense>` with a simple loading fallback.
> Preserve the existing Add Task form, task cards, `router.refresh()`, styling, and Create/Read functionality.
> Do not disable Cache Components, use caching that could return stale tasks, add dependencies, or modify Prisma or database configuration.
> Follow `AGENTS.md` and append this prompt to `prompt-history.md`. Run TypeScript, ESLint, and build checks. Show the diff and explain the fix.
> Do not commit or push.

### Inferred details

- **Context:** Next.js 16.4.2 blocks the root route because request-time database work currently begins above any React Suspense boundary.
- **Task:** Move `connection()` and the Prisma read into a nested async Server Component and stream it through a Suspense fallback.
- **Format:** Make a focused page refactor, retain the existing UI, show the diff, and explain the runtime data flow and verification results.
- **Constraints:** Preserve Create/Read behavior, `router.refresh()`, task cards, styling, and fresh request-time data; do not disable Cache Components, add caching or dependencies, change Prisma/database configuration, commit, or push.

## 15. Establish the Ever After Planner visual foundation

### Exact prompt

> Establish the visual foundation for Ever After Planner using an elegant, luxurious, and welcoming wedding-planning aesthetic.
>
> Color palette:
>
> - Deep charcoal #29282D — primary background
> - Dusty mauve #AD8F9D — signature accent
> - Warm ivory #F7F3EF — content surfaces
> - Muted plum #66515F — primary buttons and headings
> - Champagne #C8B39A — subtle highlights
> - Soft taupe #C4B8B1 — borders and details
>
> Create a sophisticated, romantic, gender-inclusive design that feels welcoming to brides, couples, and bridal parties without looking overly pink, childish, or cluttered.
>
> Focus only on global colors, typography, and visual styling. Maintain readable contrast, clearly visible date-picker controls, responsive behavior, and accessible focus states.
>
> Preserve all existing Create/Read functionality, database connections, components, and page structure.
>
> Modify only `app/globals.css`, `app/layout.tsx` if necessary, and `prompt-history.md`. Use existing dependencies.
>
> Follow `AGENTS.md`, append the prompt to `prompt-history.md`, run appropriate checks, and explain the diff. Do not commit or push.

### Inferred details

- **Context:** Give the working Wedding Planning Tracker a cohesive Ever After Planner identity without restructuring the application.
- **Task:** Apply the supplied palette, refined typography, surface treatments, and accessible interaction styling at the global level.
- **Format:** Use global CSS tokens and focused overrides so the existing Tailwind-styled form and task list adopt the new visual system.
- **Constraints:** Modify only `app/globals.css`, `app/layout.tsx` if needed, and `prompt-history.md`; retain responsive Create/Read behavior, visible date controls, accessible focus, existing dependencies, database configuration, components, and page structure; do not commit or push.

## 16. Redesign the Ever After Planner interface

### Exact prompt

> Redesign the Ever After Planner interface. The current design looks like a generic form stacked above task cards. Use the existing page as the starting point, but create a distinctive luxury wedding-planning dashboard inspired by high-end bridal editorials.
>
> Design direction:
>
> - Deep charcoal, dusty mauve, muted plum, warm ivory, and restrained champagne accents.
> - Strong typography contrast: oversized elegant serif headings, selective italic accents, and refined sans-serif body text.
> - A memorable branded hero with an editorial headline and welcoming supporting copy.
> - A wider, balanced desktop layout that visually connects the Add Task form and saved tasks, rather than stacking everything in a narrow central column.
> - Beautifully organized form fields, refined buttons, and task cards with stronger visual hierarchy.
> - Intentional whitespace, subtle decorative details, sophisticated borders, and polished spacing.
> - Responsive layouts that stack gracefully on mobile.
> - Excellent readability, accessible focus states, and a clearly visible date picker.
>
> Avoid generic SaaS dashboard styling, repetitive cards, excessive rounding, unnecessary animations, and decorative elements that distract from usability.
>
> You may restructure presentation components and update styling, but preserve all existing Create/Read functionality, server-side Prisma queries, Server Actions, Suspense, and router refresh behavior.
>
> Do not add dependencies, modify the database, introduce new features, or alter business logic.
>
> Follow AGENTS.md, append this prompt to prompt-history.md, run TypeScript, ESLint, and build checks, and explain the diff. Do not commit or pu

### Inferred details

- **Context:** Evolve the functional tracker into a distinctive Ever After Planner experience with a high-end bridal editorial sensibility.
- **Task:** Introduce a branded hero, a unified wide planning workspace, a refined task composer, and an editorial saved-task ledger.
- **Format:** Use responsive presentation components, purposeful typography, restrained decoration, strong hierarchy, and the established wedding palette.
- **Constraints:** Preserve the Prisma Server Component query, Server Action, Suspense boundary, `router.refresh()`, Create/Read behavior, and business logic; do not add dependencies, modify the database, introduce features, commit, or push.

## 17. Refine the Ever After Planner presentation

### Exact prompt

> Refine the Ever After Planner visual design with a small, presentation-only pass.
>
> Goals:
>
> 1. Improve the typography so the headers feel more elegant, balanced, and intentional.
> 2. Refine the hero headline so it looks less awkward or overly heavy while preserving the editorial feel.
> 3. Improve section headings and supporting text so they feel polished and luxurious rather than stiff.
> 4. Add subtle decorative accents such as delicate filigree, ornamental linework, or faint floral-inspired details to enhance elegance.
> 5. Keep these decorative details restrained, sophisticated, and lightweight — not busy, not childish, and not clip-art-like.
> 6. Maintain excellent readability, visible form controls, responsive behavior, and accessibility.
>
> Design guidance:
>
> - Preserve the current overall layout, color palette, and Create/Read functionality.
> - Use subtle visual decoration only in presentation areas such as the hero section, panel corners, dividers, or section headers.
> - If decorative graphics are added, prefer CSS shapes, pseudo-elements, inline SVG, or lightweight built-in approaches. Do not add dependencies.
> - Improve heading scale, font pairing, spacing, line-height, and hierarchy where needed.
>
> Do not modify database logic, Prisma, Server Actions, Suspense behavior, routing, or business logic.\
> Do not add new features.
>
> Modify only presentation-related files and `prompt-history.md`.
>
> Follow `AGENTS.md`, append this prompt to `prompt-history.md`, run TypeScript, ESLint, and build checks, and explain the diff.
>
> Do not commit or push.

### Inferred details

- **Context:** Polish the established editorial dashboard without changing its layout or functional architecture.
- **Task:** Lighten and rebalance the typography, refine presentation copy, and add restrained botanical and geometric ornamentation.
- **Format:** Use a system editorial type stack, a decorative `aria-hidden` SVG, and lightweight CSS pseudo-elements in presentation areas.
- **Constraints:** Modify presentation files and prompt history only; preserve the palette, layout, responsive behavior, accessible controls, Create/Read flow, Prisma, Server Actions, Suspense, routing, and business logic; add no dependencies or features; do not commit or push.

## 18. Fix the Ever After Planner layout and typography

### Exact prompt

> Fix the layout and typography problems in Ever After Planner shown in my latest browser screenshot.
>
> The current design has a massive empty gap above the header, an oversized hero headline, awkward italic line breaks, and inconsistent heading proportions.
>
> Requirements:
>
> 1. Identify and remove the CSS or layout rule causing the excessive top spacing. Do not use arbitrary negative margins or positioning hacks.
> 2. Position the header near the top of the viewport with normal page padding.
> 3. Reduce the hero headline size and line height to create balanced, intentional typography. Use responsive `clamp()` values if appropriate.
> 4. Limit decorative italic typography to a controlled accent rather than dominating entire headings.
> 5. Establish a consistent heading hierarchy for the hero, form, and task list.
> 6. Preserve the current charcoal, mauve, plum, champagne, and ivory palette.
> 7. Keep the existing two-column desktop layout and responsive mobile stacking.
> 8. Do not add floral decorations yet.
>
> Preserve all Create/Read functionality, Prisma queries, Server Actions, Suspense, and database behavior.
>
> Modify only necessary presentation files and `prompt-history.md`. Do not add dependencies or unrelated features.
>
> Follow `AGENTS.md`, record the exact prompt, run TypeScript, ESLint, and build checks, and report the root cause of the excessive spacing and the precise changes made.
>
> Do not commit or push.

### Inferred details

- **Context:** Correct spacing and typographic imbalance visible in the latest browser rendering of the editorial dashboard.
- **Task:** Remove cumulative hero spacing, reduce and normalize the heading scale, constrain italic accents, and remove the current floral decoration.
- **Format:** Make targeted presentation changes with responsive `clamp()` typography and a consistent hero-to-section-to-task hierarchy.
- **Constraints:** Preserve the palette, two-column desktop layout, mobile stacking, accessible controls, Create/Read functionality, Prisma, Server Actions, Suspense, routing, and database behavior; modify only presentation files and prompt history; add no dependencies, features, positioning hacks, commits, or pushes.

## 19. Refine the hero into a cohesive vertical layout

### Exact prompt

> Refine only the hero section layout in Ever After Planner.
>
> Currently, the large headline appears on the left while the introductory paragraph and italic tagline appear in a separate column on the right.
>
> Change the hero to a cohesive, left-aligned vertical layout:
>
> 1. Display the headline first.
> 2. Place the introductory paragraph directly underneath it.
> 3. Place "Made for every way you celebrate." beneath the paragraph.
> 4. Maintain elegant, intentional spacing and a balanced maximum text width.
> 5. Preserve the current fonts, colors, wording, decorative details, and responsive behavior.
> 6. Remove any unnecessary two-column hero layout rules without introducing excessive empty space.
>
> Do not modify the form, saved task list, application functionality, or database logic.
>
> Follow `AGENTS.md`, append this prompt to `prompt-history.md`, run appropriate checks, and explain the diff. Do not commit or push.

### Inferred details

- **Context:** The hero's headline and supporting copy are visually disconnected by a desktop-only two-column rule.
- **Task:** Stack the existing headline, introductory paragraph, and tagline in one cohesive left-aligned flow with balanced spacing and readable widths.
- **Format:** Make a focused CSS-only hero layout adjustment and record the prompt in the established history format.
- **Constraints:** Preserve all wording, fonts, colors, decorative details, responsive behavior, form and task-list presentation, Create/Read functionality, and database logic; add no dependencies; do not commit or push.

## 20. Center the hero and correct headline wrapping

### Exact prompt

> Fix the Ever After Planner hero layout and headline wrapping.
>
> On desktop, I want the headline centered horizontally and displayed on exactly two lines:
>
> Line 1: "Your celebration,"\
> Line 2: "beautifully considered."
>
> Requirements:
>
> - Center the hero content within the page's main container.
> - Give the headline enough horizontal width to prevent unwanted line breaks.
> - Preserve the elegant serif typography, with the second line in italic mauve.
> - Use balanced, responsive font sizing rather than oversized text.
> - Center the introductory paragraph directly beneath the headline, followed by "Made for every way you celebrate."
> - Keep appropriate spacing between the header, hero, and planning dashboard.
> - On narrow mobile screens, allow natural wrapping when necessary rather than causing horizontal overflow.
>
> Remove any restrictive width or grid rules causing the headline to wrap awkwardly. Do not use absolute positioning or negative margins as workarounds.
>
> Preserve the existing design palette, form, task list, Create/Read functionality, and database logic.
>
> Follow `AGENTS.md`, append this prompt to `prompt-history.md`, run appropriate checks, and show the diff. Do not commit or push.

### Inferred details

- **Context:** The explicit two-line hero headline is wrapping further because its width is constrained, and the vertically stacked hero is still left-aligned.
- **Task:** Center the hero flow, remove the restrictive headline measure, preserve exactly two headline lines on wider screens, and allow safe natural wrapping on narrow screens.
- **Format:** Make focused presentation-only CSS changes and record the prompt in the established history format.
- **Constraints:** Preserve the palette, typography family, wording, decorative details, spacing rhythm, responsive behavior, form, task list, Create/Read functionality, and database logic; use no positioning hacks, new dependencies, commits, or pushes.

## 21. Add subtle filigree and ornamental bridal accents

### Exact prompt

> Add subtle filigree and ornamental bridal accents to the current Ever After Planner design.
>
> Goals:
> 1. Introduce elegant decorative details such as delicate filigree, fine ornamental linework, or faint botanical-inspired accents.
> 2. Keep the effect subtle, sophisticated, and lightweight.
> 3. Use decoration only to enhance the design — not dominate it.
> 4. Prefer accents in places like:
>    - hero corners or edges
>    - section dividers
>    - panel corners
>    - heading embellishments
> 5. Use the existing charcoal, mauve, plum, champagne, and ivory palette.
> 6. Preserve readability, accessible contrast, visible form controls, and responsive behavior.
>
> Important constraints:
> - Do not change the current page layout structure.
> - Do not reposition the hero, form, or task list.
> - Do not change any wording.
> - Do not modify Create/Read functionality, Server Actions, Prisma, Suspense behavior, routing, or database logic.
> - Do not add dependencies.
>
> Use CSS, pseudo-elements, inline SVG, or similarly lightweight built-in approaches if needed.
>
> Modify only presentation-related files and `prompt-history.md`.
>
> Follow `AGENTS.md`, append this prompt to `prompt-history.md`, run TypeScript, ESLint, and build checks, and explain the diff.
>
> Do not commit or push.

### Inferred details

- **Context:** The established editorial layout needs a restrained layer of bridal ornamentation without changing its structure or visual hierarchy.
- **Task:** Extend the existing linework with subtle hero-edge flourishes, divider embellishments, and refined panel-corner details.
- **Format:** Use lightweight CSS pseudo-elements and existing palette tokens, plus the established chronological prompt-history format.
- **Constraints:** Modify presentation styling and prompt history only; preserve layout, wording, accessibility, responsive behavior, controls, Create/Read functionality, Server Actions, Prisma, Suspense, routing, and database logic; add no dependencies; do not commit or push.

## 22. Replace geometric accents with botanical filigree

### Exact prompt

> The previous filigree attempt is almost invisible and consists mainly of geometric lines and diamonds. I want clearly recognizable, elegant BOTANICAL filigree.
>
> Add two decorative floral ornaments to Ever After Planner:
>
> 1. A prominent but tasteful floral flourish in the upper-right area of the charcoal hero, featuring delicate rose-like flowers, curling stems, and leaves.
> 2. A smaller coordinating botanical flourish in a corner of the ivory dashboard, away from form fields and task content.
>
> Requirements:
>
> - Use inline SVG with actual botanical paths or shapes, not just CSS borders, diamonds, or circles.
> - Use muted champagne and dusty mauve linework with enough contrast to be visibly recognizable.
> - Keep the illustrations refined, airy, and inspired by luxury wedding stationery—not clip art.
> - Use responsive sizing and prevent overlap with text, buttons, or form inputs.
> - Mark purely decorative SVGs as hidden from assistive technology.
> - Preserve the existing hero alignment, fonts, page structure, colors, and all functionality.
> - Do not add external images or dependencies.
>
> Modify only necessary presentation files and `prompt-history.md`. Follow `AGENTS.md`, record this prompt, run TypeScript, ESLint, and build checks, and show the diff.
>
> Do not commit or push.

### Inferred details

- **Context:** The previous CSS-only ornaments read as faint geometry rather than recognizable botanical filigree.
- **Task:** Replace the hero-edge geometry with a visible rose-and-vine SVG and add a smaller coordinating floral SVG within safe dashboard corner space.
- **Format:** Use hand-drawn inline SVG paths styled with existing champagne and mauve tokens, plus responsive presentation CSS and the established prompt-history format.
- **Constraints:** Modify only presentation files and prompt history; preserve the hero alignment, fonts, wording, layout structure, palette, accessibility, responsive behavior, controls, and all Create/Read, Server Action, Prisma, Suspense, routing, and database behavior; add no external assets or dependencies; do not commit or push.

## 23. Emphasize visible botanical corner flourishes

### Exact prompt

> Fix the decorative styling in Ever After Planner.
>
> The current decoration is not what I asked for. I do NOT want ornamental divider lines or tiny geometric accents. I want visible botanical CORNER flourishes.
>
> Requirements:
> 1. Remove or stop emphasizing the current divider-style ornamental decorations if they are the main decorative treatment.
> 2. Add clearly visible botanical corner flourishes instead.
> 3. Place one flourish in the upper-right corner area of the dark hero section.
> 4. Place one smaller coordinating flourish in a corner of the ivory dashboard panel.
> 5. These flourishes must look botanical: visible leaves, stems, soft curved linework, and bridal-stationery elegance.
> 6. Do NOT use clip-art styling, bulky flowers, or busy vines.
> 7. Do NOT place the decoration as horizontal dividers between content sections.
> 8. Use inline SVG or embedded SVG markup so the corner flourishes are actually visible and controllable.
> 9. Use muted champagne and dusty mauve linework with enough contrast to be noticeable at normal viewing size.
> 10. Keep the flourishes behind or beside the content so they never overlap text fields, task text, or buttons.
> 11. Preserve the current layout, wording, Create/Read functionality, Suspense behavior, Prisma logic, and responsive behavior.
>
> Important:
> - I want corner flourishes, not divider ornaments.
> - The decorative elements need to be visibly recognizable in the browser screenshot.
> - If necessary, slightly increase their size and contrast so they are clearly present.
>
> Modify only presentation-related files and `prompt-history.md`.
> Follow `AGENTS.md`, append this prompt to `prompt-history.md`, run TypeScript, ESLint, and build checks, and explain exactly where the corner flourishes were added.
>
> Do not commit or push.

### Inferred details

- **Context:** The current botanical SVGs are too small or breakpoint-limited to read clearly, while geometric divider and corner treatments remain visually prominent.
- **Task:** Remove the geometric ornament language, enlarge and strengthen the botanical SVGs, and reshape the dashboard sprig into a true corner-hugging composition.
- **Format:** Use two responsive, assistive-technology-hidden inline SVG corner flourishes with visible champagne stems and mauve leaves and blooms.
- **Constraints:** Modify only presentation files and prompt history; keep ornaments out of content zones; preserve layout, wording, responsive behavior, accessibility, Create/Read functionality, Suspense, Prisma, routing, and database logic; add no dependencies; do not commit or push.

## 24. Clean up the Ever After Planner interface

### Exact prompt

> Clean up the Ever After Planner interface. The recent decorative redesign introduced enormous black SVG shapes, excessive empty space, and a broken dashboard layout.
>
> Our priority is now a beautiful, functional, professional wedding planning application—not decorative artwork.
>
> Requirements:
>
> 1. Remove all custom filigree, ornamental SVGs, and associated decorative positioning/CSS.
> 2. Remove the excessive empty space above the page header and throughout the layout.
> 3. Restore a clean, balanced two-column dashboard on desktop: Add Task form on the left, saved tasks on the right.
> 4. Stack these sections vertically on mobile.
> 5. Keep the hero centered, with "Your celebration," on the first line and "beautifully considered." on the second line at desktop widths.
> 6. Use elegant, readable serif headings paired with modern sans-serif body text.
> 7. Retain the charcoal, dusty mauve, muted plum, champagne, and ivory color palette.
> 8. Use subtle borders, soft shadows, balanced spacing, and refined typography for a polished appearance.
> 9. Ensure all form controls are clearly visible, including the date picker.
> 10. Keep the layout compact enough that users can see the beginning of the dashboard without excessive scrolling.
>
> Preserve all existing Create/Read functionality, Prisma queries, Server Actions, Suspense behavior, routing, and database configuration.
>
> Do not introduce new features, dependencies, images, SVG decorations, or animations.
>
> Modify only necessary presentation files and `prompt-history.md`. Follow `AGENTS.md`, log this prompt, run TypeScript, ESLint, and production build checks, and summarize the changes.
>
> Do not commit or push.

### Inferred details

- **Context:** Recent decorative SVG work disrupted the visual balance and made the dashboard feel broken and excessively spacious.
- **Task:** Remove custom artwork and its positioning rules, restore the existing responsive dashboard grid, and tighten the hero, panels, form, and page spacing.
- **Format:** Use the established serif-and-sans typography, restrained palette, borders, and softer shadows without introducing new decorative assets.
- **Constraints:** Modify presentation files and prompt history only; preserve the centered desktop headline, responsive two-column-to-stacked layout, visible controls, Create/Read functionality, Prisma queries, Server Actions, Suspense, routing, and database configuration; add no features, dependencies, images, SVGs, animations, commits, or pushes.

## 25. Add the server-side WeddingTask update operation

### Exact prompt

> Implement only the server-side Update operation for Ever After Planner.
>
> In `app/actions.ts`, add a Next.js Server Action named `updateWeddingTask` that:
>
> 1. Accepts FormData containing an existing WeddingTask ID, title, category, status, optional due date, and optional notes.
> 2. Validates the ID and input values using the same rules as `createWeddingTask`.
> 3. Uses the existing Prisma Client to update only the task matching that ID.
> 4. Returns a safe success or error result, including when the task does not exist.
> 5. Does not expose database errors or credentials to the browser.
> 6. Preserves the existing Create operation.
>
> Keep the implementation simple. Reuse existing validation helpers where appropriate, without unnecessary refactoring.
>
> Do not modify the UI, add Delete functionality, install dependencies, change the database schema, or run migrations.
>
> Follow `AGENTS.md` and append this prompt to `prompt-history.md`. Run TypeScript and focused ESLint checks, show the diff, and explain how the update reaches Neon.
>
> Do not commit or push.

### Inferred details

- **Context:** The existing server action supports creating wedding tasks, while server-side update functionality is not yet implemented.
- **Task:** Add an ID-scoped update action that applies the Create action's field validation and safely distinguishes a missing task from other failures.
- **Format:** Reuse a focused validation helper and the existing Prisma singleton, returning only simple success or user-safe error objects.
- **Constraints:** Modify only `app/actions.ts` and `prompt-history.md`; preserve Create behavior; do not change UI, add Delete, install dependencies, alter the schema, run migrations, expose secrets or database errors, commit, or push.

## 26. Add inline editing to saved wedding tasks

### Exact prompt

> Add a simple inline Edit feature to the existing Ever After Planner task list.
>
> Requirements:
>
> 1. Add an accessible "Edit" button to each saved wedding task.
> 2. Clicking Edit reveals a compact form prefilled with that task's title, category, status, due date, and notes.
> 3. Include Save Changes and Cancel buttons.
> 4. Submit updates through the existing `updateWeddingTask` Server Action, including the task ID.
> 5. Display success or validation errors without losing user input.
> 6. After a successful update, close the editor and refresh the task list using `router.refresh()`.
> 7. Cancel must close the editor without saving changes.
> 8. Preserve the current charcoal, mauve, and ivory design and responsive layout.
>
> Keep Prisma queries and database credentials server-side. Do not implement Delete, authentication, new pages, or additional features. Do not modify the database schema, run migrations, or add dependencies.
>
> Follow `AGENTS.md`, append this prompt to `prompt-history.md`, run TypeScript and ESLint checks, and explain the diff. Do not commit or push.

### Inferred details

- **Context:** Saved tasks are rendered from a server-side Prisma query and the project now has a validated `updateWeddingTask` Server Action but no interface for invoking it.
- **Task:** Add an inline, prefilled editor to each task with Save and Cancel controls, safe feedback, and a post-success router refresh.
- **Format:** Keep data fetching in the Server Component and use a focused Client Component for editor state, FormData submission, and responsive styling.
- **Constraints:** Preserve the current palette, responsive layout, Create/Read behavior, Prisma and credentials on the server, and existing application architecture; add no Delete, authentication, pages, dependencies, schema changes, migrations, commits, or pushes.

## 27. Refine the inline Edit controls

### Exact prompt

> Refine only the existing inline Edit functionality in Ever After Planner.
>
> The Edit form currently looks oversized and unfinished. Save Changes and Cancel appear as crowded plain text, and the Edit controls are difficult to identify.
>
> Requirements:
>
> 1. Style each Edit control as a clearly recognizable, accessible button with a subtle pencil icon if practical.
> 2. Make the expanded editor visually distinct but compact, with consistent spacing and alignment.
> 3. Style Save Changes as a muted plum primary button and Cancel as a clearly separated secondary button.
> 4. Use the application's existing charcoal, mauve, plum, and ivory palette.
> 5. Maintain readable labels, visible focus states, and responsive behavior.
> 6. Preserve all existing Update functionality, prefilled values, validation messages, and cancel behavior.
> 7. Do not redesign the main page or modify the Add Task form.
>
> Keep all Create/Read functionality, Prisma queries, Server Actions, and database configuration unchanged.
>
> Modify only the necessary Edit component, associated CSS, and `prompt-history.md`. Do not add dependencies, implement Delete, run migrations, commit, or push.
>
> Follow `AGENTS.md`, append this prompt to `prompt-history.md`, run TypeScript and ESLint checks, and show the diff.

### Inferred details

- **Context:** The inline editor works, but its appearance makes controls hard to recognize and the expanded form feels too large.
- **Task:** Refine the Edit toggle, compact the editor fields, and make the plum save and secondary cancel actions visually distinct.
- **Format:** Add a small decorative pencil SVG and focused responsive CSS using the existing palette and accessible focus styling.
- **Constraints:** Modify only the Edit component, related CSS, and prompt history; preserve update behavior, prefilled values, validation feedback, cancel behavior, Create/Read, Prisma, Server Actions, and database configuration; add no dependencies or Delete functionality; do not migrate, commit, or push.

## 28. Add the server-side WeddingTask delete operation

### Exact prompt

> Implement only the server-side Delete operation for Ever After Planner.
>
> In `app/actions.ts`, add a Next.js Server Action named `deleteWeddingTask` that:
>
> 1. Accepts FormData containing the ID of an existing WeddingTask.
> 2. Validates that the ID is a positive integer.
> 3. Uses the existing Prisma Client to delete only the task matching that ID.
> 4. Returns a safe success result when deletion succeeds.
> 5. Returns "Wedding task not found." when the ID does not exist.
> 6. Handles database errors without exposing internal details or credentials.
> 7. Preserves the existing Create and Update functionality.
>
> Keep the implementation simple and consistent with the existing Server Actions.
>
> Do not modify the UI, add confirmation dialogs yet, install dependencies, change the database schema, or run migrations.
>
> Follow `AGENTS.md` and append this exact prompt to `prompt-history.md`.
>
> Run TypeScript and focused ESLint checks, show the diff, and explain how deletion reaches Neon.
>
> Do not invoke the Delete action, delete any records, commit, or push.

### Inferred details

- **Context:** The project supports creating and updating wedding tasks, and the user now needs the server-side deletion operation before adding its UI later.
- **Task:** Add an ID-validated Server Action that deletes only the matching task and safely handles missing records and database failures.
- **Format:** Use the existing Prisma singleton and a scoped Prisma delete query; return simple result objects and retain the current action conventions.
- **Constraints:** Modify only `app/actions.ts` and `prompt-history.md`; preserve Create and Update; do not alter the UI, add confirmation dialogs or dependencies, change schema, run migrations, invoke deletion, change records, commit, or push; never expose credentials or internal errors.

## 30. Review the Add Task form and root layout changes

### Exact prompt

> Review the remaining uncommitted changes in `app/add-wedding-task-form.tsx` and `app/layout.tsx`.
>
> Determine whether they are intentional presentation changes needed for the current Ever After Planner interface.
>
> Verify that:
>
> - The Add Task form still calls the existing Create Server Action.
> - Form validation, success/error messages, and refresh behavior remain intact.
> - CSS classes referenced by the form exist.
> - Layout metadata and fonts are configured correctly.
> - No unrelated functionality or sensitive information was introduced.
>
> Do not modify application files. Follow `AGENTS.md` and append this prompt to `prompt-history.md`.
>
> Provide a concise recommendation on whether both files should be committed, and explain any concerns.
>
> Do not commit, push, or run migrations.

### Inferred details

- **Context:** Two presentation-related files remain modified, and their relationship to the current planner design and working Create flow needs review.
- **Task:** Compare the diffs against the Create Server Action, validation and refresh behavior, matching CSS rules, Next.js metadata/font conventions, and secret-handling scope.
- **Format:** Provide an evidence-based concise review and commit recommendation, recording the prompt in the established chronological format.
- **Constraints:** Do not modify application files, expose sensitive values, commit, push, or run migrations; append only this review prompt to project history.

## 31. Refine task controls and organize active and completed tasks

### Exact prompt

> Refine the existing Ever After Planner task list for usability and presentation.
>
> Implement these changes together:
>
> **1. Improve Edit and Delete controls**
>
> - Position Edit and Delete neatly together on each task card.
> - Make both controls clearly recognizable, consistently sized, and aligned.
> - Keep Edit styled as a subtle secondary action.
> - Style Delete as a restrained destructive action with appropriate contrast.
> - Preserve the existing inline deletion confirmation, Cancel, and Yes, Delete behavior.
> - Ensure the controls work on desktop and mobile without overlapping task information.
>
> **2. Sort active tasks by due date**
>
> - Display tasks with status "Not Started" or "In Progress" in an Active Tasks section.
> - Sort active tasks by due date, earliest first.
> - Place tasks without a due date after dated tasks.
> - Use creation date and ID as consistent tie-breakers.
> - Do not add a priority field, new database columns, or migrations.
>
> **3. Separate completed tasks**
>
> - Display tasks with status "Completed" below the active tasks, separated by a clearly labeled "Completed Tasks" heading and subtle horizontal divider.
> - Visually distinguish completed tasks with understated styling while keeping their text readable.
> - Retain Edit and Delete controls on completed tasks.
> - When a task's status changes to Completed, it should move to the completed section after saving.
> - When a completed task is changed back to Not Started or In Progress, it should return to the active section in the correct due-date order.
> - Ensure the organization remains correct after refreshing the browser.
>
> **4. Preserve existing behavior**
>
> - Keep Create, Read, Update, and Delete fully functional.
> - Preserve existing Server Actions, Prisma Client, Suspense, and router.refresh behavior.
> - Handle empty active or completed sections gracefully.
> - Keep database queries server-side.
> - Preserve the existing charcoal, mauve, plum, and ivory wedding-themed design.
> - Do not introduce authentication, new dependencies, additional pages, or unrelated features.
>
> Use the existing database fields and prefer straightforward sorting/grouping logic. Modify only files necessary for this task.
>
> Follow AGENTS.md and append this exact prompt to prompt-history.md. Run TypeScript, ESLint, and production build checks. Show the diff and explain how the sorting and completed-task grouping work.
>
> Do not run migrations, commit, or push.

### Inferred details

- **Context:** The task list is currently one creation-ordered collection, and the Edit/Delete actions need consistent placement and destructive styling.
- **Task:** Sort incomplete tasks by due date with undated items last, render completed tasks in a separate section, and keep all existing task actions available in both groups.
- **Format:** Group and sort the server-fetched task records using their existing dates and IDs, then apply concise section and control styling.
- **Constraints:** Modify only the list presentation/query fields, related CSS, and prompt history; preserve CRUD actions, confirmation behavior, Prisma, Suspense, refresh behavior, responsive design, and server-side data access; add no schema fields, migrations, dependencies, authentication, pages, commits, or pushes.

## 29. Add the task Delete confirmation interface

### Exact prompt

> Add the Delete interface to Ever After Planner using the existing `deleteWeddingTask` Server Action.
>
> Requirements:
>
> 1. Add a clearly labeled Delete button beside the Edit button for each saved task.
> 2. Use a small trash icon if practical, without adding dependencies.
> 3. When Delete is clicked, show an inline confirmation with the task title and two options: "Cancel" and "Yes, Delete".
> 4. Do not delete anything until the user explicitly confirms.
> 5. On confirmation, call `deleteWeddingTask` with the correct task ID.
> 6. On success, close the confirmation and call `router.refresh()` so the task disappears from the list.
> 7. On failure, display a safe error message and preserve the task.
> 8. Disable confirmation controls while deletion is processing to prevent duplicate requests.
> 9. Style the controls consistently with the existing charcoal, mauve, plum, and ivory interface.
> 10. Maintain keyboard accessibility, visible focus states, and responsive behavior.
>
> Preserve the existing Create, Read, and Update functionality.
>
> Do not modify the database schema, Server Action logic, Prisma configuration, or unrelated presentation elements. Do not add dependencies, authentication, or new pages.
>
> Follow `AGENTS.md`, append this prompt to `prompt-history.md`, run TypeScript and ESLint checks, and show the diff.
>
> Do not execute a deletion during verification. Do not commit or push.

### Inferred details

- **Context:** The server-side `deleteWeddingTask` action is ready, but tasks have no UI to request a deletion safely.
- **Task:** Add an adjacent Delete control, require explicit inline confirmation, then invoke the existing action and refresh the task list only after success.
- **Format:** Extend the existing task editor client component with confirmation state, accessible button and status markup, inline SVG, and palette-matched responsive styles.
- **Constraints:** Preserve Create, Read, and Update behavior; do not change schema, Server Action logic, Prisma configuration, unrelated presentation, dependencies, authentication, or pages; do not delete during verification, commit, or push.

## 32. Replace category text fields with a predefined wedding-category dropdown

### Exact prompt

> Improve Ever After Planner by replacing the free-text Category field with a predefined wedding-category dropdown.
>
> Display these categories in alphabetical order:
>
> - Attire & Accessories
> - Beauty & Wellness
> - Budget & Payments
> - Cake & Desserts
> - Ceremony & Reception
> - Decor & Flowers
> - Food & Beverages
> - Guests & Seating
> - Invitations & Stationery
> - Music & Entertainment
> - Photography & Videography
> - Transportation & Accommodations
> - Vendors & Services
> - Venue & Location
> - Other
>
> Keep "Other" at the bottom of the dropdown as a fallback option.
>
> Requirements:
>
> 1. Replace the Category text input with an accessible, mobile-friendly dropdown in both the Create Task and Edit Task forms.
> 2. Define the category options in one shared constant so both forms use the same alphabetical list.
> 3. Use "Other" as the default category for new tasks.
> 4. Update server-side validation to accept only predefined categories for new tasks and newly selected category values.
> 5. Preserve existing tasks and their saved categories, including older values that are not in the new list. When editing such a task, display its existing category as a temporary selectable option so users can retain it or choose a new category.
> 6. Keep the existing Prisma schema and PostgreSQL category column. Do not add database migrations or modify existing records.
> 7. Preserve the current wedding-themed styling, responsive layout, task sorting, completed-task grouping, and all CRUD functionality.
> 8. Do not add dependencies or unrelated features.
>
> Follow AGENTS.md and append this exact prompt to prompt-history.md.
>
> Run TypeScript, ESLint, and production build checks. Summarize the changes and show the relevant diff.
>
> Do not commit, push, or run migrations.

### Inferred details

- **Context:** Category fields are currently free text, so inconsistent values can be entered across Create and Edit.
- **Task:** Provide a shared fixed category list in both forms and enforce it server-side while allowing an existing legacy category to remain selected during an update.
- **Format:** Update the server actions and form controls, add one shared category constant, and document the change with checks and a focused diff summary.
- **Constraints:** Keep the Prisma schema, saved records, CRUD behavior, styling, and task grouping unchanged; add no dependencies; do not run migrations, commit, or push.

## 33. Verify workspace readiness for Week 6 AI integration

### Exact prompt

> Verify that you have access to the complete Ever After Planner project at C:\Users\amber\desktop\Projects\week-5-build.
>
> Before making changes:
>
> 1. Confirm the workspace root.
> 2. Confirm that AGENTS.md, package.json, app/, lib/, prisma/, .gitignore, and prompt-history.md are accessible.
> 3. Confirm the active Git branch is week-6-bridezilla.
> 4. Read AGENTS.md and follow its project workflow instructions.
> 5. Verify that the existing local .env file is ignored by Git without displaying or reading any secret values.
>
> Do not modify application files, install dependencies, or run migrations.
>
> Do not display secrets or connection strings.
>
> Follow AGENTS.md regarding prompt logging, but make no other changes.
>
> Report whether the workspace is ready for Week 6 AI integration.

### Inferred details

- **Context:** The Ever After Planner workspace must be validated before beginning Week 6 AI integration work.
- **Task:** Confirm the project root, required paths, active branch, project instructions, and Git-ignore protection for the local `.env` file.
- **Format:** Provide a concise readiness report with evidence from read-only filesystem and Git checks.
- **Constraints:** Append only this prompt-history entry; do not inspect or display `.env` contents or connection strings, modify application files, install dependencies, run migrations, commit, or push.

## 34. Prepare server-side OpenAI API environment configuration

### Exact prompt

> Prepare Ever After Planner for BrideZilla's server-side OpenAI API integration.
>
> The project is on the week-6-bridezilla branch. The local .env file already exists and is Git-ignored.
>
> Follow AGENTS.md and read the relevant bundled Next.js 16 documentation before making changes.
>
> Tasks:
>
> 1. Verify that OPENAI_API_KEY is the appropriate environment variable for server-side use.
> 2. Confirm that .env is ignored by Git without reading or displaying its contents.
> 3. Explain how I can manually add OPENAI_API_KEY to the existing .env file without disturbing my Neon database configuration.
> 4. Check whether a safe placeholder-only environment template would be useful. Create one only if appropriate.
> 5. Explain how we will keep the key out of browser code and API responses.
>
> Constraints:
>
> - Never read, print, copy, or log secret values.
> - Do not modify my existing .env file.
> - Do not ask me to paste an API key into Codex.
> - Do not install dependencies.
> - Do not create an AI endpoint or chatbot yet.
> - Do not change existing CRUD functionality, styling, or Prisma files.
> - Do not run migrations.
> - Append this prompt to prompt-history.md following AGENTS.md.
>
> Report your findings and any file changes.
>
> Do not commit or push.

### Inferred details

- **Context:** BrideZilla will add a server-only OpenAI integration while preserving the existing Neon-backed planner and keeping credentials confidential.
- **Task:** Validate the standard OpenAI key variable and Next.js environment behavior, verify Git protection for `.env`, document safe manual setup, and add a non-secret environment template if useful.
- **Format:** Provide a concise security and setup report, plus focused configuration and prompt-history changes.
- **Constraints:** Never inspect, expose, copy, or log secrets; do not modify `.env`, install dependencies, create an AI endpoint or chatbot, alter CRUD, styling, or Prisma files, run migrations, commit, or push.

## 35. Implement the first working BrideZilla chatbot

### Exact prompt

> Implement the first working version of BrideZilla, an AI-powered Halloween wedding planning chatbot, inside the existing Ever After Planner application.
>
> Follow AGENTS.md, including reading the relevant bundled Next.js 16 documentation and appending this exact prompt to prompt-history.md.
>
> Requirements:
>
> 1. Add a simple, responsive BrideZilla chat interface to the existing dashboard without removing or changing the wedding task tracker.
> 2. Create a dedicated server-side AI endpoint using the OpenAI API. Keep OPENAI_API_KEY exclusively on the server.
> 3. Use the official OpenAI API with a model available to the configured account. Avoid unnecessary dependencies; if a model choice or package is uncertain, explain it rather than guessing.
> 4. Place BrideZilla's system prompt directly in server-side code.
>
> Use this initial system prompt:
>
> "You are BrideZilla, a witty, theatrical, Halloween-inspired wedding planning assistant. Help users plan creative, organized, and memorable weddings. You specialize in gothic romance, elegant Halloween celebrations, and spooky wedding themes, but can help with other wedding styles. Keep your tone playful, supportive, and practical. Never insult users, invent confirmed bookings or vendor availability, or present guesses as verified facts. Give clear, actionable advice and acknowledge uncertainty when appropriate."
>
> 5. Allow the user to type a message, submit it, and see BrideZilla's response.
> 6. Show a loading state while waiting for a reply.
> 7. Display a clear indication that BrideZilla is an AI assistant.
> 8. Keep the initial implementation to one user message and one AI response per request. Do not implement conversation memory yet.
> 9. Do not save chat messages or automatically create, update, or delete wedding tasks.
> 10. Keep the design consistent with the current charcoal, plum, mauve, and ivory palette. Give the chatbot a subtle gothic Halloween identity without redesigning the dashboard.
> 11. Keep this first implementation focused on establishing and testing the API call. We will implement and test the full input, output, and failure guardrails in subsequent milestones.
>
> Security and scope:
>
> - Never read, display, print, or log API keys or database credentials.
> - Never expose the API key to Client Components or browser responses.
> - Do not modify the Prisma schema or run migrations.
> - Do not modify existing CRUD Server Actions or task sorting.
> - Do not add unrelated features or unnecessary dependencies.
> - Do not commit or push.
>
> Verification:
>
> - Run TypeScript, ESLint, and production build checks.
> - Identify the server-side AI call and system prompt in the changed code.
> - Summarize all changed files and any dependencies added.
> - Explain the data flow from the user's chat input to the AI response.
> - Explain how I can manually test one successful BrideZilla conversation.
>
> Do not claim the live AI request was verified unless it actually succeeded.

### Inferred details

- **Context:** Ever After Planner needs its first focused BrideZilla experience while retaining the existing task-tracking dashboard and server-side credential boundary.
- **Task:** Add a responsive single-turn chat interface and a server-only Route Handler that sends the supplied system prompt and one user message to the OpenAI Responses API.
- **Format:** Use a focused Client Component, a dedicated JSON endpoint, the existing visual palette, and clear loading, AI identity, response, and error states.
- **Constraints:** Keep secrets server-only; do not inspect credentials, persist chats, add memory, mutate tasks, change CRUD actions, task sorting, Prisma files, or schema, add unnecessary dependencies, run migrations, commit, or push; run TypeScript, ESLint, and production build checks.

## 36. Diagnose the BrideZilla API HTTP 500 error

### Exact prompt

> Diagnose the HTTP 500 error from POST /api/bridezilla in Ever After Planner.
> Review app/api/bridezilla/route.ts, focusing on configuration validation, the OpenAI Responses API request, HTTP error handling, and response-text extraction.
> Check whether OPENAI_API_KEY and OPENAI_MODEL are expected and handled correctly, but never read, print, expose, or log their values.
> Identify likely causes of the 500 error and explain how to distinguish missing configuration, authentication failures, unavailable models, rate limits, and malformed API responses.
> Use only safe diagnostic information. Do not expose raw authorization headers, secrets, environment values, or sensitive response bodies.
> Do not modify application code, install dependencies, run migrations, commit, or push. Follow AGENTS.md and log this prompt.
> Report the most likely cause, supporting code evidence, and the smallest recommended fix. Do not implement the fix yet.

### Inferred details

- **Context:** The new single-turn BrideZilla Route Handler returns HTTP 500 during a local chat request and needs a security-conscious diagnosis before any fix is applied.
- **Task:** Trace each route status path, validate the expected environment-variable names and Responses API shape, and distinguish local configuration failures from upstream authentication, model, rate-limit, network, and response-format failures.
- **Format:** Provide the most likely cause first, cite precise code evidence, give a safe diagnostic matrix, and recommend the smallest unimplemented fix.
- **Constraints:** Do not inspect or reveal environment values, authorization data, credentials, or sensitive provider bodies; modify only prompt history; do not install dependencies, run migrations, change application code, commit, or push.

## 37. Locate an OpenAI API key and available model ID

### Exact prompt

> Where do I find my real key and a model ID available to your OpenAI project?

### Inferred details

- **Context:** BrideZilla requires locally configured OpenAI credentials and an account-accessible Responses API model before its first successful request.
- **Task:** Explain where to create a project API key and how to identify an available model ID using official OpenAI resources.
- **Format:** Provide concise dashboard navigation and safe `.env` setup guidance with official links.
- **Constraints:** Do not inspect, request, expose, or log the credential value; do not modify `.env`, application code, dependencies, database state, or Git history.

## 38. Add BrideZilla input, output, and failure guardrails

### Exact prompt

> Improve the reliability of the existing BrideZilla AI chatbot in Ever After Planner.
>
> The first live OpenAI API call has been tested successfully. Preserve the working chat interface and existing functionality.
>
> Follow AGENTS.md, read the relevant bundled Next.js 16 documentation, and append this exact prompt to prompt-history.md.
>
> Implement the three guardrail categories required by the Week 6 curriculum:
>
> 1. INPUT GUARDRAIL
>
> - Reject empty or whitespace-only messages.
> - Enforce a maximum input length of 2,000 characters on both the client and server.
> - Show clear, helpful validation messages.
> - Never call the OpenAI API for rejected input.
>
> 2. OUTPUT GUARDRAIL
>
> - Check that the AI response contains usable, nonempty text before displaying it.
> - Enforce a reasonable maximum response length.
> - If the response is missing, malformed, or unusable, display a friendly error rather than presenting broken output.
> - Do not expose raw API responses or sensitive details to the browser.
> - Preserve the existing BrideZilla system prompt for now so we can test prompt changes separately.
>
> 3. FAILURE GUARDRAIL
>
> - Handle API errors, network failures, and rate-limit responses without crashing the application.
> - Add a reasonable request timeout.
> - Display helpful, user-friendly messages when the AI is unavailable or taking too long.
> - Allow users to retry their messages.
> - Keep the existing wedding task tracker functional even if the AI service fails.
>
> Additional requirements:
>
> - Preserve the existing server-side OpenAI Responses API integration.
> - Keep API credentials server-side and never display or log secret values.
> - Avoid unnecessary dependencies.
> - Do not add conversation memory or additional AI features.
> - Do not redesign BrideZilla yet.
> - Do not modify the database schema, Prisma configuration, or existing CRUD operations.
> - Do not run migrations, commit, or push.
>
> Verification:
>
> - Run TypeScript, ESLint, and production build checks.
> - Review and summarize the diff.
> - Explain where each guardrail is implemented.
> - Provide clear manual tests for invalid input, invalid AI output, API failure, timeout, and rate limits.
> - Explain how failures can be simulated safely without exposing credentials or repeatedly making paid API calls.
>
> Report the results and identify anything that still requires manual testing.

### Inferred details

- **Context:** BrideZilla has completed its first successful live request and now needs curriculum-required reliability controls without changing the established single-turn experience.
- **Task:** Add coordinated client/server input limits, validate and bound Responses API output, classify safe failure messages, time out stalled requests, and preserve retryable input.
- **Format:** Keep guardrail constants shared, retain the existing interface and server-only system prompt, and provide focused verification and manual simulation guidance.
- **Constraints:** Do not expose credentials or raw provider details, add memory or unrelated features, redesign the interface, change Prisma or CRUD behavior, install dependencies, run migrations, commit, or push.

## 39. Add a responsive, collapsible planner sidebar

### Exact prompt

> Implement the first presentation-ready layout improvement for Ever After Planner: a responsive, collapsible left navigation sidebar.
>
> **Context**
>
> - This is an existing Next.js 16 App Router wedding-planning application.
> - The current dashboard contains working Wedding Task CRUD functionality and a working BrideZilla AI chat.
> - This is a focused UI update. Preserve all existing functionality.
> - Follow AGENTS.md and append this prompt to prompt-history.md using the established format.
>
> **Task**
>
> 1. Add an elegant, collapsible left sidebar consistent with the application's existing charcoal, plum, mauve, ivory, and champagne visual direction.
> 2. Add navigation items in this order:
>    - Dashboard
>    - Wedding Tasks
>    - Inspiration
>    - Invitations
>    - Budget Tracker
>    - Vendors
>    - Settings
> 3. Visually group the items into Planning, Creative Studio, and Management.
> 4. On desktop, show icons and labels when expanded; show icons with accessible labels/tooltips when collapsed.
> 5. On mobile, use a menu button to open and close the sidebar as a drawer.
> 6. Highlight the currently active destination.
> 7. Keep the existing dashboard and Wedding Tasks functionality accessible. If separating them into routes would significantly expand the scope, do not perform that refactor yet.
> 8. Do not create empty placeholder pages or dead navigation links for unfinished sections. Visually distinguish features that are not available yet.
> 9. Maintain the existing responsive layout and use accessible keyboard navigation, focus styles, and appropriate mobile behavior.
>
> **Constraints**
>
> - No database or Prisma changes.
> - No changes to the BrideZilla API or AI behavior.
> - Do not move BrideZilla into its floating drawer yet; that is the next step.
> - No new UI libraries or unnecessary dependencies.
> - No unsolicited Git commits.
> - Avoid unrelated refactoring, and keep changes focused on layout and navigation.
>
> **Verification**
>
> - Run lint, TypeScript checks, and production build.
> - Verify that the sidebar expands and collapses, the mobile menu works, and existing Wedding Task and BrideZilla components remain functional.
> - Report files changed, test results, remaining issues, and any navigation destinations intentionally left inactive.

### Inferred details

- **Context:** Ever After Planner needs a presentation-ready navigation shell around the existing server-rendered dashboard, task CRUD, and BrideZilla chat.
- **Task:** Add a responsive client-side sidebar with grouped destinations, desktop collapse behavior, a mobile drawer, active in-page navigation, and clear unavailable states.
- **Format:** Preserve the existing dashboard route and visual system, using focused React and CSS changes plus accessible labels, focus handling, and keyboard dismissal.
- **Constraints:** Do not add routes, placeholder pages, dependencies, database or Prisma changes, BrideZilla behavior changes, unrelated refactors, commits, pushes, or migrations; run lint, TypeScript, and production build checks.

## 40. Move BrideZilla into a floating drawer

### Exact prompt

> Implement Step 2 of the Ever After Planner presentation-ready UI: move the existing BrideZilla chat into a floating launcher and responsive right-side drawer.
>
> **Context**
>
> - The app already has a responsive, collapsible navigation sidebar in app/planner-shell.tsx.
> - BrideZilla currently works as an embedded chat component on the dashboard.
> - Preserve the existing AI request flow, input/output limits, loading states, timeout handling, error handling, and retry behavior.
> - Follow AGENTS.md and append this exact prompt to prompt-history.md using the established format.
>
> **Task**
>
> 1. Add a fixed, elegant, pill-shaped "Ask BrideZilla" launcher near the bottom-right corner of the viewport, with a subtle Gothic-inspired icon or emblem using existing assets or lightweight CSS.
> 2. Clicking the launcher opens BrideZilla in a right-side drawer that overlays the application without resizing the main layout.
> 3. Use a comfortable desktop width of approximately 480px, responsive to narrower viewports. On mobile, the drawer should occupy the full screen.
> 4. Place a clear BrideZilla title and Close button in the drawer header.
> 5. Reuse the existing BrideZilla chat component and its behavior rather than replacing or rebuilding the AI integration.
> 6. Keep the message content scrollable and the message input easily accessible.
> 7. Support closing with the header Close button and Escape key. Manage focus appropriately when opening and closing; avoid keyboard focus reaching obscured content while the modal drawer is open.
> 8. Ensure the launcher remains accessible while navigating Dashboard and Wedding Tasks, and does not obscure essential task controls.
> 9. Maintain the established charcoal, plum, mauve, ivory, and champagne aesthetic. Make the interaction polished but understated.
> 10. Remove the old embedded BrideZilla section from the dashboard so there is only one chat instance.
>
> **Constraints**
>
> - Do not modify the BrideZilla API route, AI prompts, or guardrail behavior.
> - Do not implement saved conversations, authentication, new AI features, new pages, or database changes.
> - Do not add a third-party drawer or modal library.
> - Do not create or generate a character illustration yet; use a tasteful temporary icon until the visual identity is finalized.
> - Do not introduce a full theme-switching system yet.
> - Preserve existing Wedding Task CRUD and sidebar navigation.
> - Keep changes focused and do not create Git commits.
>
> **Verification**
>
> - Run TypeScript, ESLint, production build, and git diff --check.
> - Verify the old embedded chat is removed and only one BrideZilla chat instance is rendered.
> - Verify drawer opening, closing, responsive sizing, focus management, scroll behavior, and working AI submission as far as the available environment allows.
> - Clearly report any checks that require manual browser verification.
> - Summarize changed files and any remaining issues.

### Inferred details

- **Context:** The presentation-ready shell is established, and BrideZilla now needs a persistent, globally accessible modal presentation without changing its tested AI behavior.
- **Task:** Move the single existing chat instance into a fixed right-side drawer with an accessible launcher, responsive sizing, scroll containment, Escape handling, focus trapping, and focus restoration.
- **Format:** Extend the existing client shell and palette with focused React and CSS changes, keeping the dashboard and chat implementation intact.
- **Constraints:** Do not alter the AI route, prompt, guardrails, task CRUD, Prisma, database state, dependencies, pages, authentication, themes, or Git history; run TypeScript, ESLint, build, and diff checks.

## 41. Polish the presentation-ready interface

### Exact prompt

> Polish the existing Ever After Planner interface for an upcoming live presentation.
>
> **Context**
>
> - This is a working Next.js 16 wedding-planning application.
> - The app now has a responsive, collapsible left sidebar and a floating BrideZilla chat drawer.
> - Wedding Task CRUD and the BrideZilla AI integration are functional.
> - Follow AGENTS.md and append this exact prompt to prompt-history.md using the established format.
>
> **Goal**\
> Make the existing application feel cohesive, sophisticated, and presentation-ready, using an elegant Gothic Romance aesthetic.
>
> **Visual direction**
>
> - Refined charcoal, deep plum, muted burgundy, mauve, ivory, and restrained champagne-gold accents.
> - Elegant editorial typography and strong visual hierarchy.
> - Subtle borders, tasteful spacing, soft depth, and consistent corner treatments.
> - Romantic Gothic styling that feels sophisticated rather than cartoonish or overly Halloween-themed.
> - Preserve good contrast and readability.
>
> **Task**
>
> 1. Review the existing dashboard, Wedding Tasks section, sidebar, and BrideZilla launcher/drawer for visual inconsistencies.
> 2. Create a cohesive layout with consistent spacing, typography, colors, button treatments, form controls, and card styling.
> 3. Refine the application header and dashboard introduction so the page immediately communicates that this is a polished wedding-planning workspace.
> 4. Improve the visual presentation of existing task forms and task lists, including the distinction between active and completed tasks.
> 5. Polish the sidebar's expanded, collapsed, active, hover, and disabled navigation states.
> 6. Refine the floating BrideZilla pill and chat drawer so they feel integrated into the design.
> 7. Make sure the overall composition works on desktop, tablet, and mobile.
> 8. Prefer CSS and existing assets. Avoid decorative clutter, excessive animation, or large changes to component structure.
>
> **Constraints**
>
> - This is a visual-polish pass, not a feature build.
> - Do not add new pages, dashboard widgets, placeholder statistics, or unfinished functionality.
> - Do not implement theme switching, persistent chat history, authentication, or new AI capabilities.
> - Do not modify database models, migrations, API behavior, guardrails, or CRUD logic.
> - Do not install new dependencies unless absolutely necessary; explain any such need before proceeding.
> - Preserve all accessibility and keyboard interactions.
> - Keep changes tightly scoped and do not create Git commits.
>
> **Verification**
>
> - Run TypeScript, ESLint, production build, and git diff --check.
> - Confirm all existing functionality remains intact.
> - Summarize the visual refinements, changed files, validation results, and any remaining browser checks.

### Inferred details

- **Context:** Ever After Planner has all presentation features in place and needs a final visual-system pass across the dashboard, task workflow, navigation shell, and BrideZilla drawer.
- **Task:** Harmonize existing color, typography, spacing, controls, cards, interaction states, and responsive presentation while strengthening the dashboard introduction and active/completed task hierarchy.
- **Format:** Prefer shared CSS tokens and existing class hooks, with only minimal copy or markup adjustments needed for clearer editorial hierarchy.
- **Constraints:** Preserve all behavior, accessibility, CRUD and AI logic, data models, API routes, guardrails, pages, dependencies, and Git history; avoid new functionality, clutter, or excessive motion and run all requested checks.

## 42. Fix the CSS parsing and build error

### Exact prompt

> Fix the CSS parsing/build error in Ever After Planner.
>
> **Context**\
> Next.js 16.4.2 (Turbopack) reports:
>
> - File: app/globals.css
> - Error near generated CSS line 1724
> - "Unexpected end of input"
> - The output ends near a closing brace followed by `display: inline-flex;`
>
> **Task**
>
> 1. Inspect the end of app/globals.css and the surrounding CSS rules.
> 2. Identify the exact syntax error, including any missing selector, opening brace, closing brace, or incomplete declaration.
> 3. Apply the smallest correct fix that preserves the intended styling.
> 4. Check for other malformed or incomplete CSS rules caused by the recent visual changes.
> 5. Follow AGENTS.md and append this prompt to prompt-history.md.
>
> **Constraints**
>
> - Do not redesign any components.
> - Do not rewrite or broadly reorganize globals.css.
> - Do not modify application logic, BrideZilla, APIs, Prisma, or dependencies.
> - Do not discard unrelated visual changes.
> - Do not create a Git commit.
>
> **Verification**
>
> - Run the TypeScript check, ESLint, and production build.
> - Run git diff --check.
> - Report the root cause, exact CSS fix, files changed, and verification results.

### Inferred details

- **Context:** Turbopack encountered an orphaned CSS declaration at the end of the recently polished global stylesheet and retained the resulting parsing error in the active development server.
- **Task:** Confirm the malformed tail, remove only the selectorless declaration if still present, audit adjacent media blocks, and prove the stylesheet parses in the production pipeline.
- **Format:** Report the precise parser cause, minimal correction, limited file impact, and requested verification commands.
- **Constraints:** Do not redesign, reorganize CSS broadly, alter behavior or integrations, discard visual work, add dependencies, or create Git history.

## 43. Resolve the PostgreSQL SSL security warning

### Exact prompt

> Investigate and resolve the PostgreSQL SSL security warning in Ever After Planner.
>
> **Context**\
> Next.js 16.4.2 reports a warning from pg-connection-string about sslmode=prefer, require, or verify-ca being treated as verify-full.
>
> The warning surfaces while rendering WeddingTaskList in app/page.tsx.
>
> This project uses Prisma 7, @prisma/adapter-pg, and Neon PostgreSQL.
>
> Follow AGENTS.md and append this prompt to prompt-history.md.
>
> **Task**
>
> 1. Inspect the existing database connection setup and identify which environment variable and PostgreSQL driver are responsible.
> 2. Check whether the application currently uses sslmode=require or another legacy SSL setting.
> 3. If compatible with the existing Neon configuration, change the relevant connection string SSL mode to verify-full while preserving all other parameters and connection settings.
> 4. Preserve the current distinction between pooled and direct database connections.
> 5. Check that the application can still read wedding tasks.
> 6. Explain the warning's root cause and whether the fix requires restarting the Next.js development server.
>
> **Constraints**
>
> - Never print or log database connection strings, passwords, credentials, or secrets.
> - Never place connection credentials in tracked files or prompt-history.md.
> - Do not disable TLS or certificate verification.
> - Do not suppress the warning without addressing its cause.
> - Do not change Prisma models, migrations, CRUD behavior, or AI functionality.
> - Do not install or upgrade dependencies.
> - Do not commit any changes.
>
> **Verification**
>
> - Run TypeScript, ESLint, and production build.
> - Verify database connectivity without modifying existing records.
> - Run git diff --check.
> - Report the root cause, the configuration changed (without secrets), and the verification results.

### Inferred details

- **Context:** The Prisma 7 `@prisma/adapter-pg` runtime path reaches Neon through node-postgres and emits a forward-compatibility warning when a legacy SSL-mode label is parsed.
- **Task:** Identify the pooled and direct connection paths, safely detect their SSL modes, explicitly preserve full certificate and hostname verification for runtime queries, and verify a read-only WeddingTask query.
- **Format:** Make a minimal server-side configuration adjustment and report the cause, safe configuration details, validation results, and restart guidance without exposing connection data.
- **Constraints:** Do not reveal or track credentials, weaken TLS, change database schema or records, alter CRUD or AI behavior, install packages, migrate, commit, or push.

## 44. Inspect authentication and private data ownership readiness

### Exact prompt

> **Context**\
> Ever After Planner is an existing Next.js 16 App Router, TypeScript, Prisma 7, and Neon PostgreSQL application. It currently has working Wedding Task CRUD, a server-side BrideZilla AI integration, and a responsive planning interface.
>
> We are beginning Milestone 1: individual user authentication and private data ownership. The confirmed requirements are email-based sign-in, Google sign-in, secure sessions, and private wedding-planning data.
>
> Follow AGENTS.md. Append this prompt as the next sequential entry in prompt-history.md using the established Context/Task/Format/Constraints format.
>
> **Task**
>
> 1. Inspect the existing Next.js, Prisma, Neon, environment-variable, and application structure. Read the project's applicable Next.js documentation as required by AGENTS.md.
> 2. Identify all routes, server actions, database queries, and API endpoints that currently access wedding data or invoke BrideZilla.
> 3. Determine whether any authentication or user-ownership functionality already exists.
> 4. Compare two suitable maintained authentication solutions for this specific stack, including support for email-based authentication, Google sign-in, Prisma/Neon integration, session management, and deployment.
> 5. Recommend the simplest secure solution. Explain whether email authentication should use passwords, verification codes, or magic links.
> 6. Inspect the WeddingTask model and existing database-access patterns. Explain how existing task records could be preserved and assigned to an account safely, without performing any migration.
> 7. Identify authorization risks, including direct server action/API access and the paid BrideZilla endpoint.
> 8. Inspect the current Git branch, working tree, and uncommitted changes.
> 9. Propose the smallest safe implementation sequence, with independently verifiable steps.
>
> **Constraints**
>
> - Inspection only, except the required prompt-history entry.
> - Do not install dependencies or change application code.
> - Do not edit environment files or print secrets.
> - Do not create users, database tables, or migrations.
> - Do not modify or delete existing wedding tasks.
> - Do not perform database writes or paid AI requests.
> - Do not commit, push, or switch branches.
> - Do not implement authentication yet.
> - Avoid unrelated refactoring or new functionality.
>
> **Format**\
> Return a concise report with:
>
> 1. Current architecture and authentication status.
> 2. Authentication solution comparison and recommendation.
> 3. Routes and server operations requiring protection.
> 4. Existing wedding-data ownership and migration considerations.
> 5. Git branch and working-tree status.
> 6. Proposed next implementation step.
> 7. Any risks or decisions requiring approval before implementation.

### Inferred details

- **Context:** The working single-workspace planner is beginning individual authentication and private ownership, with existing tasks that have no owner field.
- **Task:** Audit application entry points and data access, compare maintained authentication providers, recommend an email sign-in method, and plan a safe ownership transition without implementing it.
- **Format:** Provide a concise seven-part report covering architecture, provider comparison, protection requirements, existing-data handling, Git status, implementation sequence, and approval decisions.
- **Constraints:** Only append this history entry; do not change application or environment files, install packages, create users or migrations, access paid AI, write database records, or change Git history or branches. Never expose secrets.

## 45. Begin the Clerk authentication foundation

### Exact prompt

> # Milestone 1 — Step 2: Clerk Authentication Foundation
>
> **Context**
>
> Ever After Planner is an existing Next.js 16.4.2 App Router application using TypeScript, Prisma 7, and Neon PostgreSQL.
>
> The application already includes working Wedding Task CRUD, a responsive sidebar, and BrideZilla AI integration.
>
> We are implementing individual user authentication using Clerk, with email verification codes and Google sign-in.
>
> The current Git branch must be `feature/user-authentication`, created from `week-6-bridezilla`.
>
> Follow AGENTS.md and append this exact prompt to prompt-history.md using the established Context/Task/Format/Constraints workflow.
>
> **Task**
>
> 1. Verify that the current Git branch is `feature/user-authentication` and inspect the working tree. Do not switch branches or overwrite unrelated changes.
> 2. Review the current official Clerk Next.js integration instructions and the applicable bundled Next.js 16 documentation.
> 3. Connect the project to my existing Clerk development application using the supported setup workflow. Request my participation for any interactive authentication or application-selection steps. Do not create another Clerk application without explicit approval.
> 4. Install and configure the necessary Clerk Next.js SDK.
> 5. Configure `ClerkProvider` in the application layout and the appropriate `proxy.ts` integration for Next.js 16.
> 6. Add minimal, accessible sign-in, sign-up, and signed-in account controls that fit the existing interface.
> 7. Ensure Clerk environment variables are configured securely using ignored local environment files. Do not print, log, or commit credentials.
> 8. Account for the application's enabled Next.js Cache Components configuration and appropriate Suspense boundaries.
> 9. Preserve all existing wedding-planning and BrideZilla functionality.
>
> **Constraints**
>
> - Work only on `feature/user-authentication`.
> - Do not switch, merge, or create branches.
> - Do not modify Prisma models or create/apply database migrati

### Inferred details

- **Context:** Clerk has been selected for the authentication foundation, using an existing development application and the dedicated feature branch.
- **Task:** Verify the branch and setup requirements, then connect the selected Clerk application and integrate its SDK, provider, proxy, and account controls after receiving the complete constraints.
- **Format:** Follow the established prompt-history workflow and report implementation and verification outcomes.
- **Constraints:** Preserve existing functionality, keep credentials private and in ignored files, use only the specified branch, and do not create another Clerk application. The received prompt ends mid-word in the database-migration constraint; request the remainder before implementation.

## 46. Complete Clerk foundation constraints and verification requirements

### Exact prompt

> Constraints
> - Work only on feature/user-authentication.
> - Do not switch, merge, or create branches.
> - Do not modify Prisma models or create/apply database migrations.
> - Do not modify existing wedding-task records.
> - Do not change Wedding Task CRUD logic or database queries.
> - Do not modify BrideZilla's API route, AI prompts, or guardrails.
> - Do not implement user-based database authorization yet; that is a separate reviewed step.
> - Do not create production Clerk resources or configure deployment.
> - Do not introduce unrelated dependencies, features, or visual redesigns.
> - Do not create Git commits or push changes.
> - Stop and report unexpected setup requirements rather than making assumptions.
> Verification
> 1. Run Clerk setup diagnostics if supported.
> 2. Run TypeScript checks, ESLint, and the production build.
> 3. Run git diff --check.
> 4. Verify that authentication components render without disrupting the existing application.
> 5. Identify any required manual testing for email verification, Google sign-in, sign-out, and expired sessions.
> 6. Report all changed files, installed dependencies, configuration changes, verification results, and remaining issues.
> 7. Clearly identify which application routes, server actions, and API endpoints remain unprotected.
> Expected Result
> A working Clerk authentication foundation with sign-in, sign-up, and account controls, while preserving the existing application.
> Authentication is not considered fully secure until the subsequent authorization and user-data ownership milestones are completed.

### Inferred details

- **Context:** This completes the truncated constraints for the Clerk authentication foundation requested in entry 45.
- **Task:** Connect the existing development application and add authentication controls without implementing ownership or altering existing task and AI operations.
- **Format:** Report changed files, dependencies, configuration, diagnostics, TypeScript/ESLint/build/diff results, manual checks, and remaining public operations.
- **Constraints:** Work only on the existing feature branch; preserve task records, queries, CRUD, Prisma, and BrideZilla. Do not migrate, deploy, create production resources, commit, or push. Stop for unexpected requirements and keep credentials private.

## 47. Select the existing Clerk development application

### Exact prompt

> Use Ever After Planner development

### Inferred details

- **Context:** Clerk CLI authentication succeeded and the existing Ever After Planner development application was presented for selection.
- **Task:** Connect this application using the supported Clerk setup workflow.
- **Format:** Continue the authentication foundation and report its configuration and verification results.
- **Constraints:** Use the selected existing development application only; retain all constraints in entries 45 and 46 and never disclose credentials.

## 48. Authenticate BrideZilla API requests

### Exact prompt

> # Milestone 1 — Step 3: Authenticate BrideZilla API Requests
>
> **Context**
>
> Ever After Planner is a Next.js 16 application using Clerk, Prisma 7, Neon PostgreSQL, and the OpenAI API.
>
> Clerk email-code and Google authentication have been integrated and manually tested. We are working on the `feature/user-authentication` branch.
>
> The existing BrideZilla API works but does not yet require authentication.
>
> Follow AGENTS.md and append this exact prompt to prompt-history.md using the established workflow.
>
> **Task**
>
> 1. Verify the current branch is `feature/user-authentication` and review the working tree.
> 2. Inspect `app/api/bridezilla/route.ts` and its existing authentication-related dependencies.
> 3. Use Clerk's supported server-side `auth()` helper to require a valid signed-in user before processing a BrideZilla request or making an OpenAI API call.
> 4. Return a clear HTTP 401 JSON response when authentication is missing or invalid.
> 5. Ensure existing input/output limits, timeouts, failure handling, and AI behavior remain intact.
> 6. Update the BrideZilla chat interface only if necessary to display a friendly sign-in-required message.
> 7. Follow the project's applicable Next.js and Clerk documentation.
>
> **Constraints**
>
> - Protect only the BrideZilla API and its directly related interface behavior.
> - Do not modify WeddingTask queries, forms, or CRUD server actions.
> - Do not modify Prisma models or run migrations.
> - Do not change the OpenAI model, system prompt, or existing guardrails.
> - Do not implement conversation history, new AI features, or a usage-limit database.
> - Do not make paid OpenAI requests during automated testing.
> - Do not expose API keys or authentication credentials.
> - Do not switch branches, commit, or push.
> - Do not redesign the chat drawer.
>
> **Verification**
>
> 1. Verify unauthenticated requests receive HTTP 401 without reaching OpenAI.
> 2. Verify authenticated requests reach the existing request-validation logic using mocked OpenAI responses.
> 3. Verify no authentication bypass is introduced.
> 4. Run TypeScript, ESLint, production build, and git diff --check.
> 5. Report changed files, test results, and remaining security limitations.
> 6. Confirm that durable rate limiting and WeddingTask ownership are still separate, unfinished milestones.

### Inferred details

- **Context:** Clerk sign-in is established, but the paid BrideZilla endpoint still allows anonymous requests.
- **Task:** Require a verified Clerk user session before parsing messages or contacting OpenAI, retain safe JSON failures, and verify authenticated behavior using isolated mocks.
- **Format:** Report the focused diff, automated and HTTP verification, remaining manual checks, and unfinished security milestones.
- **Constraints:** Preserve task data access, Prisma, AI configuration, prompts, guardrails, and drawer design. Do not make paid test requests, expose credentials, add unrelated features, migrate, switch branches, commit, or push.
