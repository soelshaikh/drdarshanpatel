import { cn } from '@/lib/utils'

interface GlassPanelProps {
  /** panel = page-level container (32px radius), card = nested (20px radius) */
  level?: 'panel' | 'card'
  /** tint = AA-safe fill for text-heavy content */
  tone?: 'default' | 'strong' | 'tint'
  /** Rise slightly on hover (for cards that look interactive) */
  lift?: boolean
  as?: 'div' | 'article' | 'section' | 'li' | 'aside'
  className?: string
  children: React.ReactNode
}

export function GlassPanel({
  level = 'card',
  tone = 'default',
  lift = false,
  as: Tag = 'div',
  className,
  children,
}: GlassPanelProps) {
  return (
    <Tag
      className={cn(
        'glass',
        level === 'panel' ? 'rounded-[var(--radius-xl)] p-6 md:p-8' : 'rounded-[20px] p-5',
        tone === 'strong' && 'glass-strong',
        tone === 'tint' && 'glass-tint',
        lift &&
          'transition-[transform,background-color] duration-[var(--duration-interact)] hover:-translate-y-1 hover:bg-glass-strong',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
