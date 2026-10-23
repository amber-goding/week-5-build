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
