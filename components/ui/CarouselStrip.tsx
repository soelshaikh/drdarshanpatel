'use client' // scroll controls, auto-advance timer and pause state

import { useEffect, useRef, useState } from 'react'
import { LeftOutlined, RightOutlined } from './icons'
import { IconButton } from './IconButton'

interface CarouselStripProps {
  label: string
  children: React.ReactNode
  className?: string
  /** Advance by one card every few seconds. Pauses on hover, focus and touch; off for reduced motion. */
  autoScroll?: boolean
  intervalMs?: number
}

const prefersReducedMotion = (): boolean => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Horizontal scroll-snap strip with round arrows. Children should be <li>. */
export function CarouselStrip({ label, children, className, autoScroll = false, intervalMs = 3500 }: CarouselStripProps) {
  const ref = useRef<HTMLUListElement>(null)
  const [paused, setPaused] = useState(false)

  const scroll = (dir: 1 | -1) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  }

  useEffect(() => {
    if (!autoScroll || paused || prefersReducedMotion()) return
    const id = window.setInterval(() => {
      const el = ref.current
      if (!el) return
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8
      if (atEnd) el.scrollTo({ left: 0, behavior: 'smooth' })
      else el.scrollBy({ left: el.clientWidth * 0.5, behavior: 'smooth' })
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [autoScroll, paused, intervalMs])

  return (
    <div
      className={className}
      role="region"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div className="mb-4 flex justify-end gap-2">
        <IconButton label={`Previous ${label}`} onClick={() => scroll(-1)}>
          <LeftOutlined />
        </IconButton>
        <IconButton label={`Next ${label}`} onClick={() => scroll(1)}>
          <RightOutlined />
        </IconButton>
      </div>
      <ul ref={ref} className="strip -mx-4 flex gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:mx-0 lg:scroll-px-0 lg:px-0">
        {children}
      </ul>
    </div>
  )
}
