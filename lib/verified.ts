/**
 * Content gate (see _design/02_CONTENT_RULES.md).
 * Items with `verified: false` render only in development (with a visible tag) and never in production.
 */
export interface Verifiable {
  verified: boolean
  source?: string
}

const isDev = process.env.NODE_ENV !== 'production'

export function publishable<T extends Verifiable>(items: readonly T[]): T[] {
  return items.filter((item) => item.verified || isDev)
}

export function isShownUnverified(item: Verifiable): boolean {
  return !item.verified && isDev
}
