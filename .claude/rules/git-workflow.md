# Git Workflow Rules - Dr. Darshan Patel site

## Conventional commits
`<type>(<scope>): <short description>`

| Type | Use for |
|---|---|
| `feat` | New section, page, primitive, feature |
| `fix` | Bug fix |
| `style` | Visual changes (tokens, glass, spacing) |
| `refactor` | No behaviour change |
| `content` | `lib/data` updates (treatments, hospitals, FAQs, doctor) |
| `a11y` | Accessibility improvements |
| `perf` | Performance improvements |
| `docs` | `_design/`, CLAUDE.md, RULES.md, `.claude/` notes |
| `chore` | Config, dependencies, tooling |

Examples:
```
feat(hero): build hero with HotspotVisual and trust chips
feat(book): add antd appointment form with Zod validation
style(tokens): raise glass-tint opacity for AA contrast
content(treatments): add laser stone surgery page data
fix(header): keep pill nav above drawer overlay
```

## Branches
`main` (production), `develop` (integration). Work on `feat/<section>`, `fix/<issue>`, `style/<area>`, `content/<topic>`.

## Pre-commit gates
```bash
npm run type-check
npm run lint
npm run build   # before merging or shipping a page
```

## Section completion flow
Follow `AGENTS.md`: section-builder -> design-guard -> copy-guard -> mobile-qa -> ship-check, then commit with `feat(<section>): complete <Section>`.

## Never commit
- `console.log`, `any`, raw hex/rgb outside `app/tokens.css` and `lib/theme/antd-theme.ts`
- Lorem ipsum, placeholders, emojis
- Facts with `verified: false` wired into rendered output
- Patient data or testimonials without recorded consent
- `.env*`, API keys, `node_modules/`, `.next/`
- Edits to `_design/antd-design-language.md`

## Forbidden commands
`git push --force` to `main`; `git reset --hard` without explicit user instruction; `git commit --no-verify`.
