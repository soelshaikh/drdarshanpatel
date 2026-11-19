import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PageHeader } from '@/components/sections/PageHeader'
import { FaqAccordion } from '@/components/sections/FaqAccordion'
import { Button } from '@/components/ui/Button'
import { GlassPanel } from '@/components/ui/GlassPanel'
import { JsonLd } from '@/components/ui/JsonLd'
import { CheckCircleOutlined, PhoneOutlined } from '@/components/ui/icons'
import { treatmentSafety } from '@/lib/data/home'
import { bookHref, contact, emergencyNotice, siteUrl } from '@/lib/data/site'
import { categoryLabel } from '@/lib/data/treatment-categories'
import { getTreatmentBySlug, treatments } from '@/lib/data/treatments'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams(): { slug: string }[] {
  return treatments.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const t = getTreatmentBySlug(slug)
  if (!t) return {}
  return {
    title: t.title,
    description: t.shortDescription,
    keywords: t.seoKeywords,
    alternates: { canonical: `/treatments/${t.slug}` },
  }
}

export default async function TreatmentPage({ params }: PageProps) {
  const { slug } = await params
  const t = getTreatmentBySlug(slug)
  if (!t) notFound()

  const procedureLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: t.title,
    description: t.shortDescription,
    url: `${siteUrl}/treatments/${t.slug}`,
  }
  const faqLd = t.faqs.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: t.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }
    : null

  return (
    <>
      <JsonLd data={procedureLd} />
      {faqLd && <JsonLd data={faqLd} />}
      <PageHeader
        eyebrow={categoryLabel[t.category]}
        title={t.title}
        intro={t.shortDescription}
        crumbs={[{ label: 'Treatments', href: '/treatments' }, { label: t.title }]}
      />

      <div className="mx-auto max-w-[1200px] space-y-14 px-4 pb-24 sm:px-6 lg:px-8">
        {(t.overview?.length || t.image) && (
          <section aria-labelledby="overview" className="grid items-center gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 id="overview" className="font-heading text-[length:var(--text-h2)] font-extrabold">
                What it is
              </h2>
              {t.overview?.map((p) => (
                <p key={p.slice(0, 24)} className="text-text-mid">
                  {p}
                </p>
              ))}
            </div>
            {t.image && (
              <div className="glass overflow-hidden rounded-[var(--radius-lg)]">
                <Image src={t.image.src} alt={t.image.alt} width={t.image.width} height={t.image.height} sizes="(min-width: 1024px) 560px, 100vw" className="h-auto w-full" />
              </div>
            )}
          </section>
        )}

        <section aria-labelledby="who" className="grid gap-4 md:grid-cols-2">
          <h2 id="who" className="sr-only">
            Symptoms and causes
          </h2>
          <GlassPanel tone="tint">
            <h3 className="font-heading text-xl font-bold text-text-hi">Common symptoms</h3>
            <ul className="mt-4 space-y-3 text-text-mid">
              {t.symptoms.map((s) => (
                <li key={s} className="flex gap-3">
                  <CheckCircleOutlined aria-hidden="true" className="mt-1 text-cyan" />
                  {s}
                </li>
              ))}
            </ul>
          </GlassPanel>
          <GlassPanel tone="tint">
            <h3 className="font-heading text-xl font-bold text-text-hi">Common causes</h3>
            <ul className="mt-4 space-y-3 text-text-mid">
              {t.causes.map((c) => (
                <li key={c} className="flex gap-3">
                  <CheckCircleOutlined aria-hidden="true" className="mt-1 text-cyan" />
                  {c}
                </li>
              ))}
            </ul>
          </GlassPanel>
        </section>

        <section aria-labelledby="how">
          <h2 id="how" className="mb-6 font-heading text-[length:var(--text-h2)] font-extrabold">
            How it is done
          </h2>
          <ol className="grid gap-4 md:grid-cols-2">
            {t.procedures.map((p, i) => (
              <li key={p.name}>
                <GlassPanel tone="tint" className="flex h-full gap-4">
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading font-bold text-text-on-primary"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-text-hi">{p.name}</h3>
                    <p className="mt-1 text-text-mid">{p.description}</p>
                  </div>
                </GlassPanel>
              </li>
            ))}
          </ol>
        </section>

        {t.recovery.length > 0 && (
          <section aria-labelledby="recovery">
            <h2 id="recovery" className="mb-6 font-heading text-[length:var(--text-h2)] font-extrabold">
              Recovery
            </h2>
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.recovery.map((r) => (
                <li key={r.day}>
                  <GlassPanel tone="tint" className="h-full">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan">{r.day}</p>
                    <p className="mt-2 text-text-mid">{r.milestone}</p>
                  </GlassPanel>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-text-lo">Recovery differs for each person. Your doctor will guide you for your case.</p>
          </section>
        )}

        <section aria-labelledby="safety" className="grid gap-4 md:grid-cols-2">
          <h2 id="safety" className="sr-only">
            Risks and when to get help
          </h2>
          <GlassPanel tone="tint">
            <h3 className="font-heading text-xl font-bold text-text-hi">{treatmentSafety.risksTitle}</h3>
            <p className="mt-3 text-text-mid">{treatmentSafety.risks}</p>
          </GlassPanel>
          <GlassPanel tone="tint">
            <h3 className="font-heading text-xl font-bold text-text-hi">{treatmentSafety.callTitle}</h3>
            <p className="mt-3 text-text-mid">{treatmentSafety.call}</p>
          </GlassPanel>
        </section>

        {t.faqs.length > 0 && (
          <section aria-labelledby="faqs">
            <h2 id="faqs" className="mb-6 font-heading text-[length:var(--text-h2)] font-extrabold">
              Questions about {t.title.split(' — ')[0]}
            </h2>
            <div className="max-w-3xl">
              <FaqAccordion items={t.faqs} />
            </div>
          </section>
        )}

        <section aria-label="Book a consultation">
          <GlassPanel level="panel" tone="strong" className="text-center">
            <h2 className="mx-auto max-w-2xl font-heading text-[length:var(--text-h2)] font-extrabold">Want to know if this is right for you?</h2>
            <p className="mx-auto mt-3 max-w-xl text-text-mid">Book a consultation and get a plan for your own case.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button href={bookHref} size="lg">
                Book Appointment
              </Button>
              <Button href={contact.phoneHref} variant="glass" size="lg">
                <PhoneOutlined aria-hidden="true" /> Call Now
              </Button>
            </div>
            <p role="note" className="mx-auto mt-6 max-w-2xl rounded-2xl border border-glass-border bg-danger-soft p-4 text-sm text-text-hi">
              <strong className="font-semibold">Emergency: </strong>
              {emergencyNotice}
            </p>
          </GlassPanel>
        </section>
      </div>
    </>
  )
}
