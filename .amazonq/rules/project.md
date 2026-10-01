<!-- AUTO-GENERATED from AGENTS.md — do not edit directly.
     Run `bash scripts/sync-agent-rules.sh` to regenerate. -->

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Visit Dauin

## What This Is
A local-first travel guide and connection platform for Dauin, Negros Oriental (Philippines). Travellers read up on things to do, restaurants and stays, then message local freelancers (tricycle and van drivers, dive guides, boatmen, yoga teachers, tour guides) directly via WhatsApp / Messenger / SMS. Phase 1 is traffic and direct contact only — no accounts, no payments. See `docs/PLAN_VISIT_DAUIN.md` for the roadmap.

## Audience & Language
- Primary audience: Western backpackers and Filipino domestic travellers.
- All site copy is English. Write in British/International English, short and practical.

## Tech Stack
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** shadcn/ui primitives, Tailwind CSS v4, `cn()` utility
- **Icons:** Lucide React
- **Fonts:** Fraunces (headings) + Geist (body) via `next/font/google`
- **Data:** typed static data in `src/data/*.ts` (move to a database such as Supabase when locals self-manage profiles)
- **Deployment:** Vercel

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm run typecheck` — TypeScript check
- `npm run check` — Run lint + typecheck + build

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles; colours come from the tokens in `src/app/globals.css`
- 2-space indentation
- Responsive: mobile-first — most locals and many travellers are on phones with slow connections

## Content Rules
- Only publish facts that have been checked. Prices, fees and opening hours must be phrased as approximate and the
  `contentCheckedAt` date in `src/data/site.ts` updated when re-checked.
- Never invent real people. Placeholder local profiles must have `isExample: true` (rendered with an "Example" badge,
  contact disabled, excluded from the sitemap). Set `showExampleLocals: false` once real locals are listed.
- Real locals are added to `src/data/locals.ts` only after consent; set `verified: true` only after meeting in person.

## Project Structure
```
src/
  app/              # Routes: /, /things-to-do, /locals, /eat, /stay, /plan, /join, /about, /search
  components/       # Site components (cards, header/footer, contact panel, join form)
    ui/             # shadcn/ui primitives
  data/             # site config, activities, locals, restaurants, stays
  lib/              # utils, link builders, search
  types/            # Shared TypeScript types
docs/
  PLAN_VISIT_DAUIN.md # Product plan and roadmap
```

## MOST IMPORTANT NOTES
- When launching Claude Code agent teams, ALWAYS have each teammate work in their own worktree branch and merge everyone's work at the end, resolving any merge conflicts smartly.
- After editing `AGENTS.md`, run `bash scripts/sync-agent-rules.sh` to regenerate platform-specific instruction files.
