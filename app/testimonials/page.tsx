import type { Metadata } from 'next'
import { PageHeader } from '@/components/sections/PageHeader'
import { Button } from '@/components/ui/Button'
import { GlassPanel } from '@/components/ui/GlassPanel'
import { UnverifiedTag } from '@/components/ui/UnverifiedTag'
import { bookHref } from '@/lib/data/site'
import { testimonials } from '@/lib/data/testimonials'
import { publishable } from '@/lib/verified'

export const metadata: Metadata = {
  title: 'Patient Stories',
  description: 'Words from patients treated by Dr. Darshan Patel in Ahmedabad.',
  alternates: { canonical: '/testimonials' },
}

/** Only testimonials with consent on file (`verified`) appear in production. */
export default function TestimonialsPage() {
  const items = publishable(testimonials)
  return (
    <>
      <PageHeader eyebrow="Patient stories" title="What patients say about their care" crumbs={[{ label: 'Patient stories' }]} />
      <div className="mx-auto max-w-[1200px] px-4 pb-24 sm:px-6 lg:px-8">
        {items.length === 0 ? (
          <GlassPanel level="panel" tone="tint" className="text-center">
            <p className="mx-auto max-w-xl text-text-mid">
              We are collecting patient stories with their consent. Until then, you can book a visit and ask the doctor
              anything.
            </p>
            <Button href={bookHref} className="mt-6">
              Book Appointment
            </Button>
          </GlassPanel>
        ) : (
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
        )}
      </div>
    </>
  )
}
