'use client' // Framer Motion entrance animation

import { motion, useReducedMotion } from 'framer-motion'

interface RevealProps {
  children: React.ReactNode
  className?: string
  /** Seconds to wait before the animation starts (use index * 0.08 to stagger a list). */
  delay?: number
  /** Start offset in px. Positive = rises from below. */
  y?: number
  /** Start scale, e.g. 0.96 for a soft zoom-in. */
  scale?: number
}

/** Fades and rises into view once. Transform + opacity only; renders static for reduced motion. */
export function Reveal({ children, className, delay = 0, y = 28, scale = 1 }: RevealProps) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
