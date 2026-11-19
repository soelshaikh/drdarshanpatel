# Design index — Clinical Glass

**Prime Law:** every element must build trust, give clarity, or drive action. Otherwise it does not exist.
**Goals:** a visitor trusts the doctor in 3 seconds and can book in 10.
**Feel:** calm, precise, high-tech — a premium health dashboard, not a hospital brochure.
**References:** two "Spatial" glass health dashboards (dark navy room, frosted panels, 3D organ with floating data chips, pill nav, electric-blue CTA).

## Colour tokens (source: app/tokens.css; antd mirror: lib/theme/antd-theme.ts)
| Role | Token | Value |
|---|---|---|
| Page | ink-950 | #050B1A |
| Surface | ink-900 / 800 / 700 / 600 | #0A1426 / #0F1D38 / #17294A / #22385F |
| Brand + primary CTA | primary (hover / press) | #1F5BFF (#3D73FF / #1546D1) |
| Data highlight | cyan | #3FD0E6 |
| Headings | text-hi | #F4F8FF |
| Body | text-mid | #B8C7E0 |
| Captions | text-lo | #8C9FC0 |
| Glass | glass / strong / tint | white 6% / 10% / navy 55% |
| Glass border | glass-border (strong) | white 14% (26%) |
| Status | success / warning / danger | #34D399 / #F5B84B / #FF5C6C |
| Third-party | whatsapp | #25D366 |

**Colour rule 70/25/5:** 70% ink + glass, 25% text, 5% electric blue + cyan. Blue is scarce on purpose: primary CTA, active nav pill, key number badges. Cyan only for waveforms, sparklines, hotspots.

## Typography
Manrope (display, headings: 600-800) + Inter (body, UI: 400-600). Display `--text-display`, H1 `--text-h1`, H2 `--text-h2`, body 17px/1.65, UI 15px, label 12px uppercase tracking .12em.
Headings: large, tight (-0.02em), `text-hi`. Supporting copy: `text-mid`.

## Shape and depth
Radius: panels 24-40px, cards 16-24px, controls 12px, pills/CTAs 999px. Glass recipe in tokens.css (`.glass`). Depth = nested glass + inner top highlight, never heavy drop shadows.
