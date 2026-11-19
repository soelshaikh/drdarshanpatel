import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

interface SectionWrapperProps {
  id?: string
  /**
   * Background treatment, so neighbouring sections do not look the same:
   * band = faint darker band, light = raised navy band, glow = blue light from above, glow-cyan = cyan light from the side.
   */
  bg?: 'default' | 'band' | 'light' | 'glow' | 'glow-cyan'
  eyebrow?: string
  title?: string
  intro?: string
  className?: string
  innerClassName?: string
  children: React.ReactNode
  'aria-label'?: string
  noPadding?: boolean
}

const BG = {
  default: '',
  band: 'bg-ink-900/50',
  light: 'section-light',
  glow: 'section-glow',
  'glow-cyan': 'section-glow-cyan',
} as const

export function SectionWrapper({
  id,
  bg = 'default',
  eyebrow,
  title,
  intro,
  className,
  innerClassName,
  children,
  'aria-label': ariaLabel,
  noPadding = false,
}: SectionWrapperProps) {
  return (
    <section id={id} aria-label={ariaLabel ?? title} className={cn(BG[bg], !noPadding && 'py-20 md:py-28', className)}>
      <div className={cn('mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8', innerClassName)}>
        {(eyebrow || title || intro) && (
          <Reveal y={20}>
            <header className="mb-10 max-w-2xl md:mb-14">
              {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
              {title && (
                <h2 className="text-gradient font-heading text-[length:var(--text-h2)] font-extrabold leading-[1.1]">
                  {title}
                </h2>
              )}
              {title && <span aria-hidden="true" className="mt-5 block h-1 w-14 rounded-full bg-primary" />}
              {intro && <p className="mt-5 text-text-mid">{intro}</p>}
            </header>
          </Reveal>
        )}
        <Reveal y={32}>{children}</Reveal>
      </div>
    </section>
  )
}
