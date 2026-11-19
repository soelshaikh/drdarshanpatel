import { cn } from '@/lib/utils'

interface MarqueeProps {
  /** Short text items, e.g. treatment names. */
  items: readonly string[]
  /** Accessible name for the strip. */
  label: string
  className?: string
}

/** Slow scrolling ticker. The visible list is read by screen readers once; the repeat is hidden. Stops for reduced motion and on hover. */
export function Marquee({ items, label, className }: MarqueeProps) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-10 whitespace-nowrap font-heading text-lg font-semibold text-text-mid md:text-xl">
          {item}
          <span aria-hidden="true" className="size-2 rounded-full bg-cyan" />
        </li>
      ))}
    </ul>
  )
  return (
    <div role="region" aria-label={label} className={cn('marquee overflow-hidden border-y border-glass-border py-5', className)}>
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
