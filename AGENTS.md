<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project workflow

- Automatically append every user project prompt to `prompt-history.md` in chronological, numbered order.
- For each entry, include the exact full prompt and concise inferred Context, Task, Format, and Constraints.
- Preserve every previous entry. Never overwrite or renumber existing entries.
- Never record secrets, credentials, connection strings, or `.env` values in the prompt history.
- Make small, focused changes within the requested scope.
- Avoid unnecessary dependencies, features, and unrelated refactoring.
- Review and summarize diffs, explain changes, and report verification results.
- Never commit, push, or run database migrations without explicit user permission.
