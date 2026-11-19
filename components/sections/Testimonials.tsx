import { GlassPanel } from '@/components/ui/GlassPanel'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { UnverifiedTag } from '@/components/ui/UnverifiedTag'
import { sections } from '@/lib/data/home'
import { testimonials } from '@/lib/data/testimonials'
import { publishable } from '@/lib/verified'

interface TestimonialsProps {
  className?: string
}

/** Shown only with written consent on file (`verified`). First name + procedure only. */
export function Testimonials({ className }: TestimonialsProps) {
  const items = publishable(testimonials).slice(0, 3)
  if (items.length === 0) return null

  return (
    <SectionWrapper id="stories" className={className} {...sections.testimonials}>
      <ul className="grid gap-4 md:grid-cols-3">
        {items.map((t) => (
          <li key={t.id}>
            <GlassPanel tone="tint" as="article" className="flex h-full flex-col justify-between">
              <blockquote className="text-text-mid">&ldquo;{t.quote}&rdquo;</blockquote>
              <footer className="mt-6 flex flex-wrap items-center gap-2 text-sm">
                <span className="font-semibold text-text-hi">{t.patientName.split(' ')[0]}</span>
                <span className="text-text-lo">{t.procedure}</span>
                <UnverifiedTag item={t} />
              </footer>
            </GlassPanel>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  )
}
