# The Author's Forge

A premium landing page for a publishing and writing cohort — taking expert coaches and consultants from idea to published book in 5 months.

## Run & Operate

- `pnpm --filter @workspace/authors-forge run dev` — run the frontend (port assigned by workflow)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, Framer Motion, shadcn/ui
- API: Express 5 (shared api-server)
- DB: PostgreSQL + Drizzle ORM (provisioned separately if needed)
- Build: Vite (static output)

## Where things live

- `artifacts/authors-forge/` — the landing page React app
- `artifacts/authors-forge/src/index.css` — theme/palette (dark premium theme)
- `artifacts/authors-forge/src/App.tsx` — router entry point
- `artifacts/authors-forge/src/pages/` — page components
- `attached_assets/` — source reference image (accessible via @assets alias in Vite)

## Architecture decisions

- Presentation-first single-page app — no backend or API calls needed.
- The @assets Vite alias resolves to the workspace-level attached_assets/ directory.
- Google Font imports must be the first line of index.css (before @import "tailwindcss").
- Dark, editorial color palette targeting high-value coaches/consultants.

## Product

The Author's Forge is a premium 5-month publishing incubator that builds, publishes, and positions books for expert coaches and consultants. The landing page presents the 5-month journey, deliverables, program details, and a call to action.

## User preferences

- Premium, dark, editorial design aesthetic
- Target audience: successful, high-value coaches and consultants
- No emojis in the UI

## Gotchas

- All CSS custom properties in the scaffold index.css default to "red" — must be replaced with real HSL values before components render correctly.
- Google Font @import url() must be the FIRST line of index.css.
- The Vite @assets alias points to ../../attached_assets relative to the artifact root.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
