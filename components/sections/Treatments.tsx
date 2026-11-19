import Link from 'next/link'
import { CarouselStrip } from '@/components/ui/CarouselStrip'
import { GlassPanel } from '@/components/ui/GlassPanel'
import { ArrowRightOutlined } from '@/components/ui/icons'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { sections } from '@/lib/data/home'
import { treatments } from '@/lib/data/treatments'

interface TreatmentsProps {
  className?: string
}

const CATEGORY_LABEL: Record<string, string> = {
  stone: 'Kidney stones',
  prostate: 'Prostate',
  laparoscopy: 'Keyhole surgery',
  andrology: 'Men’s health',
  transplant: 'Transplant',
  'pediatric-female': 'Women and children',
}

export function Treatments({ className }: TreatmentsProps) {
  return (
    <SectionWrapper id="treatments" bg="glow" className={className} {...sections.treatments}>
      <CarouselStrip label="Treatments" autoScroll>
        {treatments.map((t) => (
          <li key={t.id} className="w-[18rem] shrink-0 sm:w-80">
            <Link
              href={`/treatments/${t.slug}`}
              className="group block h-full rounded-[20px] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary-hover"
            >
              <GlassPanel tone="tint" className="flex h-full min-h-64 flex-col justify-between transition-colors duration-[var(--duration-interact)] group-hover:bg-glass-strong">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan">
                    {CATEGORY_LABEL[t.category] ?? t.category}
                  </p>
                  <h3 className="mt-3 font-heading text-xl font-bold text-text-hi">{t.title}</h3>
                  <p className="mt-3 line-clamp-4 text-sm text-text-mid">{t.shortDescription}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-text-hi">
                  See who it is for <ArrowRightOutlined aria-hidden="true" />
                </span>
              </GlassPanel>
            </Link>
          </li>
        ))}
      </CarouselStrip>
    </SectionWrapper>
  )
}
