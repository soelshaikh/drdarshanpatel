import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHeader } from '@/components/sections/PageHeader'
import { Button } from '@/components/ui/Button'
import { GlassPanel } from '@/components/ui/GlassPanel'
import { CheckCircleOutlined } from '@/components/ui/icons'
import { doctorData } from '@/lib/data/doctor'
import { aboutCopy } from '@/lib/data/home'
import { photos } from '@/lib/data/media'
import { ctaLabels, pageCopy } from '@/lib/data/pages'
import { bookHref } from '@/lib/data/site'

export const metadata: Metadata = {
  title: pageCopy.about.metaTitle,
  description: pageCopy.about.metaDescription,
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={pageCopy.about.eyebrow}
        title={doctorData.fullName}
        intro={aboutCopy.intro}
        crumbs={[{ label: pageCopy.about.crumb }]}
      />

      <div className="mx-auto max-w-[1200px] space-y-14 px-4 pb-24 sm:px-6 lg:px-8">
        <section aria-label={doctorData.fullName} className="grid items-start gap-8 lg:grid-cols-[380px_1fr]">
          <div className="glass overflow-hidden rounded-[var(--radius-xl)]">
            <Image
              src={photos.portraitClinic.src}
              alt={photos.portraitClinic.alt}
              width={photos.portraitClinic.width}
              height={photos.portraitClinic.height}
              sizes="(min-width: 1024px) 380px, 100vw"
              priority
              className="h-auto w-full"
            />
          </div>
          <div className="space-y-8">
            <GlassPanel tone="tint">
              <h2 className="font-heading text-[length:var(--text-h3)] font-bold text-text-hi">{pageCopy.about.approachTitle}</h2>
              <p className="mt-3 text-text-mid">{aboutCopy.approach}</p>
            </GlassPanel>

            <div>
              <h2 className="mb-4 font-heading text-[length:var(--text-h3)] font-bold text-text-hi">{pageCopy.about.qualificationsTitle}</h2>
              <ul className="space-y-3">
                {doctorData.degrees.map((d) => (
                  <li key={d.degree}>
                    <GlassPanel tone="tint">
                      <p className="font-semibold text-text-hi">{d.degree}</p>
                      <p className="text-sm text-text-mid">{d.institution}</p>
                    </GlassPanel>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="practice" className="grid gap-4 md:grid-cols-2">
          <GlassPanel tone="tint">
            <h2 id="practice" className="font-heading text-[length:var(--text-h3)] font-bold text-text-hi">
              {pageCopy.about.practiceTitle}
            </h2>
            <ul className="mt-4 space-y-3 text-text-mid">
              {doctorData.specializations.map((s) => (
                <li key={s} className="flex gap-3">
                  <CheckCircleOutlined aria-hidden="true" className="mt-1 text-cyan" />
                  {s}
                </li>
              ))}
            </ul>
          </GlassPanel>
          <GlassPanel tone="tint">
            <h2 className="font-heading text-[length:var(--text-h3)] font-bold text-text-hi">{pageCopy.about.proceduresTitle}</h2>
            <ul className="mt-4 space-y-3 text-text-mid">
              {doctorData.keyProcedures.map((s) => (
                <li key={s} className="flex gap-3">
                  <CheckCircleOutlined aria-hidden="true" className="mt-1 text-cyan" />
                  {s}
                </li>
              ))}
            </ul>
          </GlassPanel>
        </section>

        <section aria-labelledby="memberships">
          <h2 id="memberships" className="mb-4 font-heading text-[length:var(--text-h3)] font-bold text-text-hi">
            {pageCopy.about.membershipsTitle}
          </h2>
          <ul className="flex flex-wrap gap-3">
            {doctorData.memberships.map((m) => (
              <li key={m} className="glass glass-tint rounded-full px-4 py-2 text-sm text-text-mid">
                {m}
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-wrap gap-3">
          <Button href={bookHref} size="lg">
            {ctaLabels.book}
          </Button>
          <Button href="/treatments" variant="glass" size="lg">
            {ctaLabels.seeTreatments}
          </Button>
        </div>
      </div>
    </>
  )
}
