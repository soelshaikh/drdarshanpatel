import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/sections/PageHeader'
import { Button } from '@/components/ui/Button'
import { GlassPanel } from '@/components/ui/GlassPanel'
import {
  ArrowRightOutlined,
  EyeOutlined,
  ExperimentOutlined,
  HeartOutlined,
  MedicineBoxOutlined,
  PhoneOutlined,
  SafetyCertificateOutlined,
} from '@/components/ui/icons'
import { Reveal } from '@/components/ui/Reveal'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { ctaLabels, pageCopy } from '@/lib/data/pages'
import { bookHref, contact } from '@/lib/data/site'
import { categoryIntro, categoryLabel, categoryOrder } from '@/lib/data/treatment-categories'
import { treatments } from '@/lib/data/treatments'
import type { TreatmentCategory } from '@/types'

export const metadata: Metadata = {
  title: pageCopy.treatments.metaTitle,
  description: pageCopy.treatments.metaDescription,
  alternates: { canonical: '/treatments' },
}

const CATEGORY_ICON: Record<TreatmentCategory, typeof HeartOutlined> = {
  stone: ExperimentOutlined,
  prostate: MedicineBoxOutlined,
  laparoscopy: EyeOutlined,
  andrology: HeartOutlined,
  transplant: SafetyCertificateOutlined,
  'pediatric-female': HeartOutlined,
}

export default function TreatmentsPage() {
  const copy = pageCopy.treatments
  const groups = categoryOrder
    .map((c) => ({ category: c, items: treatments.filter((t) => t.category === c) }))
    .filter((g) => g.items.length > 0)

  return (
    <>
      <PageHeader eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} crumbs={[{ label: copy.crumb }]} />

      <nav aria-label={copy.jumpLabel} className="mx-auto max-w-[1200px] px-4 pb-12 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap gap-3">
          {groups.map((g) => {
            const Icon = CATEGORY_ICON[g.category]
            return (
              <li key={g.category}>
                <a
                  href={`#cat-${g.category}`}
                  className="glass glass-tint inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-[15px] font-medium text-text-hi transition-colors duration-[var(--duration-interact)] hover:bg-glass-strong"
                >
                  <Icon aria-hidden="true" className="text-cyan" />
                  {categoryLabel[g.category]}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      {groups.map((g, gi) => {
        const Icon = CATEGORY_ICON[g.category]
        return (
          <SectionWrapper
            key={g.category}
            id={`cat-${g.category}`}
            aria-label={categoryLabel[g.category]}
            bg={gi % 2 === 0 ? 'light' : 'default'}
            className="scroll-mt-24"
          >
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
              <div className="lg:sticky lg:top-[calc(var(--header-height)+24px)] lg:self-start">
                <p aria-hidden="true" className="font-heading text-7xl font-extrabold leading-none text-ink-600">
                  {String(gi + 1).padStart(2, '0')}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-6 inline-flex size-14 items-center justify-center rounded-2xl bg-primary-soft text-3xl text-cyan"
                >
                  <Icon />
                </span>
                <h2 className="text-gradient mt-5 font-heading text-[length:var(--text-h2)] font-extrabold leading-[1.1]">
                  {categoryLabel[g.category]}
                </h2>
                <p className="mt-4 max-w-md text-text-mid">{categoryIntro[g.category]}</p>
                <p className="mt-5 text-sm font-semibold text-text-lo">
                  {g.items.length} {g.items.length === 1 ? copy.countOne : copy.countMany}
                </p>
              </div>

              <ul className="space-y-4">
                {g.items.map((t, i) => (
                  <li key={t.id}>
                    <Reveal delay={i * 0.08}>
                      <Link
                        href={`/treatments/${t.slug}`}
                        className="group block rounded-[20px] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary-hover"
                      >
                        <GlassPanel tone="tint" lift className="flex items-center gap-5 md:p-7">
                          <div className="min-w-0 flex-1">
                            {t.isLaser && <p className="eyebrow mb-3">{copy.laserTag}</p>}
                            <h3 className="font-heading text-xl font-bold text-text-hi md:text-2xl">{t.title}</h3>
                            <p className="mt-3 text-text-mid">{t.shortDescription}</p>
                            <p className="mt-4 text-sm font-semibold text-text-hi">{copy.cardAction}</p>
                          </div>
                          <span
                            aria-hidden="true"
                            className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-glass-border-strong text-text-hi transition-[transform,background-color] duration-[var(--duration-interact)] group-hover:translate-x-1 group-hover:bg-primary"
                          >
                            <ArrowRightOutlined />
                          </span>
                        </GlassPanel>
                      </Link>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </SectionWrapper>
        )
      })}

      <SectionWrapper aria-label={copy.ctaTitle}>
        <GlassPanel level="panel" tone="strong" className="panel-glow py-12 text-center md:py-16">
          <h2 className="text-gradient mx-auto max-w-2xl font-heading text-[length:var(--text-h2)] font-extrabold leading-[1.1]">
            {copy.ctaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-mid">{copy.ctaText}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={bookHref} size="lg">
              {ctaLabels.book}
            </Button>
            <Button href={contact.phoneHref} variant="glass" size="lg">
              <PhoneOutlined aria-hidden="true" /> {contact.phoneDisplay}
            </Button>
          </div>
        </GlassPanel>
      </SectionWrapper>
    </>
  )
}
