# RULES — strict, every rule mandatory

## Code
- TypeScript `strict`. No `any` (use `unknown` + narrowing). Explicit param/return types on exported functions.
- Named exports only (default only for Next `page`, `layout`, `not-found`, `error`).
- Every section: `interface XProps { className?: string }`, wrapped in `<SectionWrapper id="...">`.
- Server Components by default. `'use client'` only at the smallest leaf (state, effects, handlers, Framer Motion, antd form widgets) with a one-line reason comment.
- All copy/facts from `lib/data/*.ts`, typed in `types/index.ts`. No copy in JSX.
- `next/image` only, with descriptive `alt`. `priority` on the hero image only.
- No `console.log`, no inline `style` for design values, no emojis (code, data, UI).
- Files: PascalCase components in `components/{layout,sections,ui,forms}`; routes only in `app/`.
- Path alias `@/*`. Conventional commits.

## Styling
- Colours, radii, shadows, blur, type, motion come from `app/tokens.css` utilities/variables. NEVER raw hex/rgb in components (only `tokens.css` and `lib/theme/antd-theme.ts` may hold literals).
- Glass: compose `.glass`, `.glass-strong`, `.glass-tint`. Do not re-declare blur/border/shadow values.
- Text-heavy panels use `.glass-tint` (AA-safe). Body text >= `text-mid`, never lower than `text-lo`, min size 12px, body 17px.
- 8px spacing grid. Section padding via `SectionWrapper` only.
- Max 2 font families: Manrope (display/headings), Inter (body/UI).
- Gradients: only the token-defined ones in tokens.css (`.canvas`, `.section-glow*`, `.panel-glow`, `.text-gradient`). No ad-hoc gradients in components.
- antd: use for forms, date/time, select, modal, drawer, steps, collapse, notification. Marketing layout uses our own glass primitives. Query the antd MCP before using a component. Never override antd with `!important`; use ConfigProvider tokens or the component's `classNames`/`styles` props.

- Icons: import ONLY from `@/components/ui/icons` (client re-export of `@ant-design/icons`). Importing `@ant-design/icons` directly in a Server Component crashes with `createContext is not a function`.

## Motion
- Framer Motion, transform + opacity only. Entrance <= 600ms, hover/focus <= 250ms. Easing `--ease-enter`.
- Always honour `useReducedMotion`. `whileInView` uses `viewport={{ once: true }}`.
- Banned: parallax, auto-carousels (exception, owner-approved: the home Treatments strip auto-advances; it must pause on hover/focus/touch and stop for reduced motion), preloaders, page-transition overlays, magnetic cursor, text scramble. Infinite loops allowed (transform only, off for reduced motion): WhatsApp pulse, hero chip float and light drift, the treatments ticker (`Marquee`, pauses on hover). Entrances use the `Reveal` component.

## Accessibility
- WCAG AA contrast (4.5:1 text, 3:1 UI). Visible focus ring (`--color-primary-hover`, 2px, offset 3px). Touch targets >= 44px.
- Labels via `htmlFor`/antd `Form.Item`. Decorative icons `aria-hidden`. One H1 per page, no skipped levels.
- Glass must stay legible with `backdrop-filter` unsupported (fallback in tokens.css).

## CTA
- One primary CTA per viewport: "Book Appointment" (electric blue). Secondary: "Call Now" (glass). Never "Submit" or "Click Here".
- Phone + WhatsApp reachable from every page (header, sticky mobile bar, footer).

## Process
- Phase order in `AGENTS.md`. Run `npm run type-check && npm run lint` before committing. Do not modify `_design/antd-design-language.md`.
