import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

/** Brand mark: the urinary system (kidneys, ureters, bladder) in a round glass badge. Decorative; pair it with the doctor's name. */
export function Logo({ className }: LogoProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'flex size-11 shrink-0 items-center justify-center rounded-full border border-glass-border-strong bg-ink-800',
        className,
      )}
    >
      <svg viewBox="80 55 240 330" className="h-6 w-auto" fill="none" focusable="false">
        <path
          d="M150 70 C95 70 80 130 100 175 C112 200 135 190 140 165 C132 140 150 125 165 120 C175 100 170 70 150 70Z"
          fill="var(--color-primary)"
          stroke="var(--color-cyan)"
          strokeWidth="12"
        />
        <path
          d="M250 70 C305 70 320 130 300 175 C288 200 265 190 260 165 C268 140 250 125 235 120 C225 100 230 70 250 70Z"
          fill="var(--color-primary)"
          stroke="var(--color-cyan)"
          strokeWidth="12"
        />
        <path d="M148 185 C150 230 185 255 195 285" stroke="var(--color-cyan)" strokeWidth="18" strokeLinecap="round" />
        <path d="M252 185 C250 230 215 255 205 285" stroke="var(--color-cyan)" strokeWidth="18" strokeLinecap="round" />
        <path
          d="M200 280 C160 280 150 330 175 355 C190 370 210 370 225 355 C250 330 240 280 200 280Z"
          fill="var(--color-primary)"
          stroke="var(--color-cyan)"
          strokeWidth="12"
        />
      </svg>
    </span>
  )
}
