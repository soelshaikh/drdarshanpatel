# Design rules

## Layout
- Page = `canvas` backdrop; content in glass panels, max-width 1200px (`--max-width`), gutters 16 / 24 / 32px.
- One purpose per section. Sections separated by 96-128px (SectionWrapper), not by dividers.
- Mobile-first to 375px. Glass panels go full-bleed-with-gutter on mobile; reduce blur to `--blur-glass` (never > 24px on mobile for perf).
- Header: floating glass pill nav (logo | pill links, active = filled primary | phone button + Book CTA). Compact on scroll.

## Signature patterns (build as primitives in components/ui)
| Primitive | Purpose |
|---|---|
| `SectionWrapper` | section shell: id, aria-label, spacing, optional eyebrow + H2 |
| `GlassPanel` / `GlassCard` | nested glass containers (panel 32px radius, card 20px) |
| `PillNav` | top nav, filled active pill |
| `Button` | primary (blue), glass, ghost; renders button/Link/a |
| `StatChip` | icon + label + big number badge (e.g. "5,000+" only when verified) |
| `Sparkline` | SVG waveform beside a stat; cyan stroke; decorative, aria-hidden |
| `HotspotVisual` | hero organ graphic with pulsing hotspots + floating glass chips |
| `IconButton` | round glass 44px (arrows, call, chat) |
| `Carousel` strip | horizontal scroll-snap cards + round arrows; no autoplay |
| `DoctorCard` / `TreatmentCard` / `HospitalCard` | content cards on `GlassCard` |

## Hero
Left: eyebrow, H1 (<= 10 words), 2-sentence supporting copy, primary + secondary CTA, trust chips. Right: `HotspotVisual` (urinary-system graphic) with 3-4 floating chips (e.g. "Laser stone surgery", "Same-day discharge" only if true). One hero image with `priority`.

## Do
- Big light headings over small muted labels; generous whitespace inside glass.
- Real doctor photography on glass cards. Show phone number in header, hero, contact, footer.
- Icons: one set (antd icons for UI, lucide only if antd lacks one), 1.5px stroke feel, `aria-hidden`.

## Don't
- No pure #000/#fff backgrounds, no neon glows beyond the CTA shadow, no more than 2 glass levels nested, no glass-on-glass text without `.glass-tint`.
- No stock "smiling nurse" imagery, no black-background PNGs, no generic AI illustrations.
- No popups on first load, no autoplay media, no auto-carousels.
