# Component Conventions - Dr. Darshan Patel site

## Section template
```tsx
// components/sections/TrustBand.tsx
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { doctor } from '@/lib/data/doctor'

interface TrustBandProps {
  className?: string
}

export function TrustBand({ className }: TrustBandProps) {
  const stats = doctor.stats.filter((s) => s.verified) // render verified facts only
  return (
    <SectionWrapper id="trust" className={className}>
      {/* content from lib/data, glass primitives */}
    </SectionWrapper>
  )
}
```
- Named exports (default only for Next `page`, `layout`, `not-found`, `error`). Explicit props interface. `id` matches nav anchor.
- Folders: `components/{layout,sections,ui,forms}`, PascalCase. Routes live only in `app/`.

## Primitives: check `components/ui/` before creating
Design primitives from `_design/01_DESIGN_RULES.md`: `SectionWrapper`, `GlassPanel`/`GlassCard`, `PillNav`, `Button` (primary, glass, ghost; renders button/Link/a), `StatChip`, `Sparkline`, `HotspotVisual`, `IconButton`, scroll-snap `Carousel` strip, `DoctorCard`/`TreatmentCard`/`HospitalCard`. Extend via props; never duplicate. Section spacing comes from `SectionWrapper` only.

## Client boundaries
`'use client'` only at the smallest leaf (state, effects, handlers, Framer Motion, antd form widgets) with a one-line reason comment. Sections stay Server Components and pass data down.

## Data flow
All copy and facts come from `lib/data/*.ts` typed in `types/index.ts`. Filter on `verified` before render. No copy in JSX.

## Icons
antd icons (`@ant-design/icons`) for UI; `lucide-react` only when antd lacks one; named imports only. Decorative icons `aria-hidden="true"`; icon-only buttons need `aria-label`. No emojis.

## Motion
Framer Motion via the shared `Motion`/`ScrollReveal` wrappers; `useReducedMotion` is handled there. Transform + opacity only.

## Checklist before saving
- Named export, props interface, `SectionWrapper` + `id`
- No raw hex/rgb, no inline `style`, no extra gradients, no `any`, no raw `<img>`
- Glass via `.glass`/`.glass-strong`/`.glass-tint`
- Unverified facts not rendered; no lorem ipsum
