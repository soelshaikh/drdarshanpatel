import { isShownUnverified, type Verifiable } from '@/lib/verified'

interface UnverifiedTagProps {
  item: Verifiable
}

/** Dev-only marker on content that is hidden in production until verified. */
export function UnverifiedTag({ item }: UnverifiedTagProps) {
  if (!isShownUnverified(item)) return null
  return (
    <span className="rounded-full bg-warning/20 px-2 py-0.5 text-xs font-semibold text-warning" title={item.source}>
      Unverified (dev only)
    </span>
  )
}
