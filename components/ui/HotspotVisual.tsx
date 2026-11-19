import { cn } from '@/lib/utils'

export interface VisualChip {
  label: string
  /** Tailwind position classes for the floating chip, e.g. 'left-0 top-[18%]' */
  position: string
}

interface HotspotVisualProps {
  chips?: VisualChip[]
  className?: string
}

const HOTSPOTS = [
  { x: 128, y: 120 },
  { x: 272, y: 120 },
  { x: 200, y: 292 },
]

/**
 * Hero visual: stylised urinary system (kidneys, ureters, bladder) in glass/cyan line art
 * with pulsing hotspots and floating glass chips. Decorative; chips are the only text.
 * TODO(assets): swap for a rendered 3D organ image once supplied (see _design/01_DESIGN_RULES.md).
 */
export function HotspotVisual({ chips = [], className }: HotspotVisualProps) {
  return (
    <div className={cn('relative mx-auto aspect-[400/440] w-full max-w-[460px]', className)}>
      <div aria-hidden="true" className="absolute inset-[8%] rounded-full border border-glass-border bg-glass" />
      <div
        aria-hidden="true"
        className="absolute inset-[22%] rounded-full border border-glass-border bg-primary-soft blur-[2px]"
      />
      <svg viewBox="0 0 400 440" className="absolute inset-0 size-full" aria-hidden="true" focusable="false" fill="none">
        <path
          d="M150 70 C95 70 80 130 100 175 C112 200 135 190 140 165 C132 140 150 125 165 120 C175 100 170 70 150 70Z"
          fill="var(--color-primary)" fillOpacity="0.8"
          stroke="var(--color-cyan)"
          strokeWidth="1.5"
        />
        <path
          d="M250 70 C305 70 320 130 300 175 C288 200 265 190 260 165 C268 140 250 125 235 120 C225 100 230 70 250 70Z"
          fill="var(--color-primary)" fillOpacity="0.8"
          stroke="var(--color-cyan)"
          strokeWidth="1.5"
        />
        <path d="M148 185 C150 230 185 255 195 285" stroke="var(--color-cyan)" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
        <path d="M252 185 C250 230 215 255 205 285" stroke="var(--color-cyan)" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
        <path
          d="M200 280 C160 280 150 330 175 355 C190 370 210 370 225 355 C250 330 240 280 200 280Z"
          fill="var(--color-primary)" fillOpacity="0.8"
          stroke="var(--color-cyan)"
          strokeWidth="1.5"
        />
        {HOTSPOTS.map((h) => (
          <g key={`${h.x}-${h.y}`}>
            <circle className="hotspot-ring" cx={h.x} cy={h.y} r="10" fill="var(--color-cyan)" />
            <circle cx={h.x} cy={h.y} r="8" fill="var(--color-cyan)" stroke="var(--color-text-hi)" strokeWidth="2" />
          </g>
        ))}
      </svg>
      {chips.map((c) => (
        <div
          key={c.label}
          className={cn(
            'glass glass-tint absolute flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-text-hi sm:text-sm',
            c.position,
          )}
        >
          <span aria-hidden="true" className="size-2 rounded-full bg-cyan" />
          {c.label}
        </div>
      ))}
    </div>
  )
}
