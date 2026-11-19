import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'glass' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
  children: React.ReactNode
  'aria-label'?: string
}

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-full font-heading font-semibold select-none ' +
  'min-h-11 transition-[background-color,border-color,transform,box-shadow] duration-[var(--duration-interact)] ' +
  '[transition-timing-function:var(--ease-interact)] active:scale-[0.98] ' +
  'focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary-hover ' +
  'disabled:opacity-50 disabled:pointer-events-none'

const VARIANTS = {
  primary: 'bg-primary text-text-on-primary shadow-cta hover:bg-primary-hover active:bg-primary-press',
  glass: 'glass glass-strong rounded-full text-text-hi hover:bg-glass-border',
  ghost: 'bg-transparent text-text-mid hover:text-text-hi hover:bg-glass',
} as const

const SIZES = {
  sm: 'px-4 text-sm',
  md: 'px-6 text-[15px]',
  lg: 'px-8 text-base min-h-14',
} as const

/** Renders a link, an external link or a button depending on `href` / `external`. */
export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  disabled = false,
  type = 'button',
  className,
  children,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = cn(BASE, VARIANTS[variant], SIZES[size], className)

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} aria-label={ariaLabel}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    )
  }
  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }
  return (
    <button type={type} disabled={disabled} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
