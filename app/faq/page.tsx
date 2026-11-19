import type { Metadata } from 'next'
import { FaqAccordion } from '@/components/sections/FaqAccordion'
import { PageHeader } from '@/components/sections/PageHeader'
import { JsonLd } from '@/components/ui/JsonLd'
import { doctorFaqs } from '@/lib/data/faqs'
import { slugify } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers about booking, hospitals, procedures, insurance and what to bring to your consultation with Dr. Darshan Patel.',
  alternates: { canonical: '/faq' },
}

export default function FaqPage() {
  const categories = Array.from(new Set(doctorFaqs.map((f) => f.category ?? 'General')))
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: doctorFaqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return (
    <>
      <JsonLd data={ld} />
      <PageHeader eyebrow="Questions" title="Answers before you visit" crumbs={[{ label: 'FAQ' }]} />
      <div className="mx-auto max-w-[900px] space-y-10 px-4 pb-24 sm:px-6 lg:px-8">
        {categories.map((c) => (
          <section key={c} aria-labelledby={`faq-${slugify(c)}`}>
            <h2 id={`faq-${slugify(c)}`} className="mb-4 font-heading text-[length:var(--text-h3)] font-bold text-text-hi">
              {c}
            </h2>
            <FaqAccordion items={doctorFaqs.filter((f) => (f.category ?? 'General') === c)} />
          </section>
        ))}
      </div>
    </>
  )
}
