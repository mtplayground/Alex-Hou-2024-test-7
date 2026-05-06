# Product Snapshot

## What this project is
`Alex-Hou-2024-test-7` is an early-stage Next.js 15 application using the App Router and TypeScript. It is currently a scaffold for a future message board app.

## What it does today
- Serves a simple landing page at `/`.
- Runs on `0.0.0.0:8080` in both dev and production scripts.
- Builds with Next.js standalone output enabled for future container use.

## Current feature baseline
- Next.js 15 + React 19 + TypeScript.
- App Router structure under `app/`.
- Tailwind CSS and PostCSS configured and active in the global stylesheet.
- ESLint configured with Next.js core-web-vitals and TypeScript rules.
- Prettier configured for consistent formatting.

## Architectural decisions
- Keep the app on the Next.js App Router from the start.
- Use standalone Next.js output in `next.config.ts` to support Docker-oriented deployment later.
- Use Tailwind utility classes for page styling rather than custom component CSS architecture at this stage.
- Keep the project minimal until message, database, and API work is added in later issues.

## Conventions
- Default branch is `main`.
- Primary scripts: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`, `npm run format`, `npm run format:check`.
- Global styles live in `app/globals.css`.
- Formatting excludes generated artifacts like `.next/` and `node_modules/`.

## Not in scope yet
- No database integration is merged yet.
- No Prisma models, API routes, server actions, or message form/list features are merged yet.
