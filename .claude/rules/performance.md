# Performance Rules - Dr. Darshan Patel site

| Metric | Target | Key factor |
|---|---|---|
| LCP | < 2.5s on mobile 3G | Hero image + fonts |
| INP | < 200ms | Buttons, antd form widgets |
| CLS | 0 | Declared image dimensions, reserved glass panel sizes |

## Images
- `next/image` always. Explicit `width`/`height`, or `fill` inside a sized container with `sizes`.
- `priority` on the single hero image only; everything else lazy.
- Real doctor photography on glass cards; no black-background PNGs. Remote hosts must be allowed in `next.config.ts`.

## Fonts
`next/font/google` in `app/layout.tsx` only: Manrope + Inter, `display: 'swap'`, limited subsets and weights (Manrope 600-800, Inter 400-600). No `<link>` font tags.

## Glass cost
`backdrop-filter` is the main GPU cost on mobile.
- Use `.glass` as defined (blur 24px); never exceed 24px blur on mobile; `--blur-glass-lg` only on desktop hero/panel surfaces.
- Do not nest more than 2 glass levels; avoid glass on large scrolling lists (use `.glass-tint` or solid `ink-*` fills there).
- `.canvas` uses `background-attachment: fixed`; if scroll jank appears on mobile, switch it to `scroll` in `tokens.css` rather than adding layers.

## Animation
Animate only `opacity` and `transform`; never width/height/margin/top/left. Entrance <= 600ms, hover/focus <= 250ms. `useReducedMotion` respected. No parallax, auto-carousels, preloaders. `whileInView` with `once: true`. Only infinite loops: WhatsApp pulse and hero hotspot pulse.

## JavaScript
- Server Components by default; `'use client'` on leaves only.
- Import antd components individually (`import { Form, Input } from 'antd'` is tree-shaken in antd 6); never `import * as`. Icons: named imports from `@ant-design/icons`/`lucide-react`.
- Load antd-heavy widgets (DatePicker, Modal, Drawer) only in client leaves that need them, via `next/dynamic` when below the fold.
- Lenis smooth scroll must not block input; keep it in `SmoothScrollProvider` and disable under reduced motion.
- No third-party scripts in `<head>`. Maps are lazy `<iframe>`, not an SDK.

## Build check
Run `npm run build` and confirm no route is unexpectedly dynamic and first-load JS has not jumped.
