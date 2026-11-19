# Tokens and Glass Rules - Clinical Glass

`app/tokens.css` is the single source of truth. Tailwind v4 is CSS-first: the `@theme` block generates both CSS variables and utilities. There is no `tailwind.config.ts`. `lib/theme/antd-theme.ts` mirrors the tokens for antd (literal values); change both together.

## No raw colour values
Only `app/tokens.css` and `lib/theme/antd-theme.ts` may contain hex/rgb/hsl.
```tsx
// FORBIDDEN
<div className="bg-[#0f1d38] text-[#b8c7e0] border-[rgba(255,255,255,.14)]">

// CORRECT - token utilities
<div className="bg-ink-800 text-text-mid">

// CORRECT - variable when no utility fits
<div className="border-[var(--color-glass-border)]">
```
No inline `style` for design values.

## Token names (from tokens.css)
- Surfaces: `ink-950` (page), `ink-900`, `ink-800`, `ink-700`, `ink-600`
- Accent: `primary`, `primary-hover`, `primary-press`, `primary-soft`, `primary-line`, `text-on-primary`
- Data: `cyan`, `cyan-soft` (waveforms, sparklines, hotspots only)
- Text: `text-hi` (headings), `text-mid` (body), `text-lo` (captions)
- Glass: `glass`, `glass-strong`, `glass-tint`, `glass-border`, `glass-border-strong`
- Status: `success`, `warning`, `danger`, `danger-soft`; third party: `whatsapp`
- Radius `xs`..`2xl`, `pill`; shadows `glass`, `raised`, `cta`; blur `glass`, `glass-lg`
- Type `display`, `h1`, `h2`, `h3`, `body`, `ui`, `label`; fonts `font-display`/`font-heading` (Manrope), `font-body`/`font-sans` (Inter)
- Motion `--duration-micro|interact|reveal|counter`, `--ease-enter|exit|interact`; layout `--max-width`, `--header-height`; `--z-*` scale

Colour rule 70/25/5: 70% ink + glass, 25% text, 5% primary + cyan. Primary is scarce: primary CTA, active nav pill, key number badges.

## Glass recipe
Compose the classes; never re-declare blur, border, or shadow.
```tsx
<section className="glass rounded-xl p-8">            {/* panel */}
  <article className="glass glass-strong rounded-lg p-6"> {/* nested, max 2 levels */}
<div className="glass glass-tint rounded-lg p-6">      {/* text-heavy: AA-safe fill */}
```
- `.glass` = translucent fill + 1px `glass-border` + `shadow-glass` + `blur(24px) saturate(140%)`.
- `.glass-strong` for raised/nested levels; `.glass-tint` whenever a panel holds paragraphs or small text.
- Radius: panels 24-40px, cards 16-24px, controls 12px, pills 999px.
- Depth comes from nested glass + inner top highlight, not heavy drop shadows. The only glow is `shadow-cta`.
- Fallback without `backdrop-filter` is in tokens.css; keep text legible there.
- Mobile: blur <= 24px.

## Gradients
Only the `.canvas` backdrop (applied once on `<body>`) and the hero light. No other gradients, no pure #000/#fff backgrounds.

## Text and contrast
Headings `text-hi`, body `text-mid`, captions `text-lo` (never lower). Minimum 12px; body 17px (`--text-body`), UI 15px, labels 12px uppercase. WCAG AA: 4.5:1 text, 3:1 UI, checked over glass and the canvas light spots.

## Spacing and layout
8px grid (Tailwind defaults plus `--spacing-18/22/26/30`). Section padding via `SectionWrapper` only. Content max-width `--max-width` (1200px), gutters 16/24/32. Mobile-first: base classes for 375px, then `md:`/`lg:`.

## Focus
`focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-primary-hover`. Never `outline-none` without this replacement.

## Fonts
Max two families: Manrope (display/headings 600-800) and Inter (body/UI 400-600), loaded once in `app/layout.tsx`.

## Class merging
Use `clsx` + `tailwind-merge` via `cn()` in `lib/utils.ts`.
