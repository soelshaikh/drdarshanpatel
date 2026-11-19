interface SparklineProps {
  kind?: 'pulse' | 'wave' | 'bars'
  className?: string
}

const PATHS = {
  pulse: 'M0 20 H22 L28 8 L36 32 L42 14 L47 20 H72 L78 10 L85 30 L90 20 H120',
  wave: 'M0 20 C10 4, 20 4, 30 20 S50 36, 60 20 S80 4, 90 20 S110 36, 120 20',
} as const

const BAR_HEIGHTS = [14, 28, 18, 34, 22, 30, 12, 26, 20, 32]

/** Decorative waveform. Inherits colour via currentColor. */
export function Sparkline({ kind = 'wave', className }: SparklineProps) {
  if (kind === 'bars') {
    return (
      <svg viewBox="0 0 120 40" className={className} aria-hidden="true" focusable="false">
        {BAR_HEIGHTS.map((h, i) => (
          <rect
            key={i}
            x={i * 12 + 3}
            y={(40 - h) / 2}
            width="3"
            height={h}
            rx="1.5"
            fill="currentColor"
            opacity={0.5 + (i % 3) * 0.2}
          />
        ))}
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 120 40" className={className} aria-hidden="true" focusable="false" fill="none">
      <path d={PATHS[kind]} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
