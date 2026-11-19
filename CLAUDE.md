# Dr. Darshan Patel — Urologist Website

Multi-page Next.js site for Dr. Darshan Patel, urologist and laser surgeon, Ahmedabad.
Design language: **Clinical Glass** (dark navy canvas, frosted glass panels, one electric-blue accent).

@AGENTS.md
@RULES.md
@_design/00_INDEX.md
@_design/01_DESIGN_RULES.md
@_design/02_CONTENT_RULES.md
@_design/03_PAGES.md

## Stack
Next 16 (App Router) · React 19 · TypeScript strict · Tailwind v4 (CSS-first `@theme`) · antd 6 (themed via ConfigProvider) · Framer Motion · React Hook Form + Zod.

## Source of truth (read in this order when they disagree)
1. `app/tokens.css` — colour, type, radius, motion tokens
2. `lib/theme/antd-theme.ts` — mirror of the tokens for antd (keep in sync)
3. `_design/*` and `RULES.md` — rules
4. `lib/data/*` — all copy and facts

## antd tooling
- `.mcp.json` registers the `antd` MCP server (`@ant-design/cli mcp`). Before using ANY antd component, query it: props via `antd info <Component>`, demos via `antd demo`, tokens via `antd token`. Do not guess antd props.
- `_design/antd-design-language.md` is the exported antd design-language doc (read-only reference).
- Without the MCP loaded, run the same queries via `npx @ant-design/cli <command>`.

## Skills (in `.claude/skills/`)
`ui-ux-pro-max` (palettes, type pairings, UX checks) · `design-system` (token layers) · `ui-styling` · `brand`. Use them for design decisions, then record the decision in `_design/`.

## Commands
`npm run dev` · `npm run build` · `npm run lint` · `npm run type-check` (run type-check + lint before every commit).

## Never
- Invent medical facts, statistics, awards, or patient data. Unverified claims go in `lib/data` with `verified: false` and are NOT rendered.
- Put hex/rgb in components. Put copy in JSX. Use `any`. Use emojis.
- Modify `_design/antd-design-language.md`.
