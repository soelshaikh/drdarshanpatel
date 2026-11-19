# antd Usage Rules (antd 6)

## Query the MCP first
`.mcp.json` registers the `antd` MCP server. Before using ANY antd component, query it: props via `antd info <Component>`, examples via `antd demo`, theme tokens via `antd token`. If the MCP is not loaded, run the same through `npx @ant-design/cli <command>`. Never guess props. `_design/antd-design-language.md` is a read-only reference; do not edit it.

## When to use antd vs custom primitives
| Use antd | Use our glass primitives (`components/ui`) |
|---|---|
| Form, Input, Select, DatePicker/TimePicker, Checkbox, Radio | Page layout, sections, hero, cards, chips |
| Modal, Drawer, notification/message | PillNav, Button (marketing CTAs), StatChip, Sparkline |
| Steps, Collapse (FAQ) | Carousel strip, HotspotVisual, DoctorCard/TreatmentCard |
Marketing layout never uses antd Layout/Grid/Card. Prefer antd for interactive widgets that need accessibility behaviour we would otherwise rebuild.

## Theming
- One theme: `lib/theme/antd-theme.ts` (dark algorithm, CSS variables, `hashed: false`) applied by `ConfigProvider` in `providers/AntdProvider.tsx`. Keep it in sync with `app/tokens.css`; it is the only file besides tokens.css allowed to hold literals.
- Customise through, in order: ConfigProvider `token`, per-component `components.X` tokens, then the component's `classNames`/`styles` props using token utilities.
- Never use `!important`, never target antd internal class names (`.ant-*`) in CSS, never wrap a second ConfigProvider with different colours.
- New antd look needed: add a token in `antd-theme.ts`, mirrored from `tokens.css`, not a CSS patch.

## SSR
`AntdRegistry` (from `@ant-design/nextjs-registry`) already wraps the app in `providers/AntdProvider.tsx`. Do not add another registry or manual style extraction. That provider is a client component; antd components themselves are used only in `'use client'` leaves (usually `components/forms/*`) with a one-line reason comment.

## Accessibility and touch
Use `Form.Item` labels (visible, not placeholder-only), `help`/`validateStatus` for errors, controls >= 44px (theme `controlHeight` is 48), visible focus ring per `tokens-and-glass.md`.

## Icons and bundle
`@ant-design/icons` named imports. Import components individually from `antd`. Heavy widgets (DatePicker, Modal) only where needed, lazy when below the fold.

## Content
antd text still comes from `lib/data` or form config files; no copy hardcoded in JSX. Notifications/messages must not echo PII.

## CSS layer order (do not change)
- `app/globals.css` imports Tailwind as explicit layers and declares `@layer theme, base, antd, components, utilities;`; `AntdProvider` passes `layer` to `AntdRegistry`. antd's global resets (`a { background-color: transparent }`, `outline: none`, input resets) therefore sit BELOW Tailwind utilities.
- Do NOT go back to `@import "tailwindcss";` as a single line: the bundler drops the layer-order statement and antd's reset starts overriding utilities on `<a>` elements (buttons rendered with no background).
- The global focus ring lives in `@layer components` in globals.css for the same reason.
