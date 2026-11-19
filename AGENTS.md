# Agent pipeline

Build one page or section at a time. Order: `section-builder` -> `design-guard` -> `copy-guard` -> `mobile-qa` -> `ship-check`.

| Agent | Job |
|---|---|
| section-builder | Builds one section/page from `lib/data` + tokens, using primitives in `components/ui` |
| design-guard | Read-only. Checks tokens, glass recipe, contrast, spacing, motion against `_design/01` |
| copy-guard | Read-only. Checks copy against `_design/02` and medical-claim rules |
| mobile-qa | Checks 375px, touch targets, glass legibility, no horizontal scroll |
| data-manager | Owns `lib/data/*` and `types/index.ts` |
| code-reviewer | TypeScript, a11y, Next.js correctness |
| ship-check | Final gate: build, lint, type-check, SEO, a11y, unverified-claims scan |

Phase order (do not skip): 1 foundation (tokens, theme, rules) -> 2 UI primitives -> 3 layout shell -> 4 home sections -> 5 inner pages -> 6 SEO + polish.
