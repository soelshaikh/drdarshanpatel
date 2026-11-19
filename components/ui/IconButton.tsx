import Link from 'next/link'
import { cn } from '@/lib/utils'

interface IconButtonProps {
  label: string
  href?: string
  external?: boolean
  onClick?: () => void
  tone?: 'glass' | 'primary'
  className?: string
  children: React.ReactNode
}

const BASE =
  'inline-flex size-11 shrink-0 items-center justify-center rounded-full border text-text-hi ' +
  'transition-[background-color,transform] duration-[var(--duration-interact)] [transition-timing-function:var(--ease-interact)] ' +
  'active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary-hover'

/** Round 44px icon button. Always needs an accessible `label`. */
export function IconButton({ label, href, external, onClick, tone = 'glass', className, children }: IconButtonProps) {
  const cls = cn(
    BASE,
    tone === 'primary'
      ? 'border-transparent bg-primary shadow-[var(--shadow-cta)] hover:bg-primary-hover'
      : 'border-glass-border glass-strong hover:bg-glass-border',
    className,
  )
  const icon = (
    <span aria-hidden="true" className="inline-flex text-lg">
      {children}
    </span>
  )
  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={cls}>
        {icon}
      </a>
    )
  }
  if (href) {
    return (
      <Link href={href} aria-label={label} className={cls}>
        {icon}
      </Link>
    )
  }
  return (
    <button type="button" aria-label={label} onClick={onClick} className={cls}>
      {icon}
    </button>
  )
}
