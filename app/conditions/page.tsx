import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/sections/PageHeader'
import { GlassPanel } from '@/components/ui/GlassPanel'
import { ArrowRightOutlined, CheckCircleOutlined, WarningOutlined } from '@/components/ui/icons'
import { conditionsCopy } from '@/lib/data/home'
import { categoryLabel, categoryOrder } from '@/lib/data/treatment-categories'
import { treatments } from '@/lib/data/treatments'

export const metadata: Metadata = {
  title: 'Symptoms and Conditions',
  description:
    'Common urology symptoms such as kidney stone pain, blood in urine and prostate problems, and when to see a urologist in Ahmedabad.',
  alternates: { canonical: '/conditions' },
}

export default function ConditionsPage() {
  const groups = categoryOrder
    .map((c) => {
      const items = treatments.filter((t) => t.category === c)
      const symptoms = Array.from(new Set(items.flatMap((t) => t.symptoms))).slice(0, 6)
      return { category: c, items, symptoms }
    })
    .filter((g) => g.items.length > 0)

  return (
    <>
      <PageHeader
        eyebrow="Symptoms"
        title="What your symptoms may mean"
        intro={conditionsCopy.intro}
        crumbs={[{ label: 'Conditions' }]}
      />
      <div className="mx-auto max-w-[1200px] space-y-8 px-4 pb-24 sm:px-6 lg:px-8">
        <p role="note" className="flex gap-3 rounded-2xl border border-glass-border bg-danger-soft p-4 text-sm text-text-hi">
          <WarningOutlined aria-hidden="true" className="mt-0.5" />
          {conditionsCopy.warning}
        </p>
        <ul className="grid gap-4 md:grid-cols-2">
          {groups.map((g) => (
            <li key={g.category}>
              <GlassPanel tone="tint" className="h-full">
                <h2 className="font-heading text-xl font-bold text-text-hi">{categoryLabel[g.category]}</h2>
                <ul className="mt-4 space-y-2 text-text-mid">
                  {g.symptoms.map((s) => (
                    <li key={s} className="flex gap-3">
                      <CheckCircleOutlined aria-hidden="true" className="mt-1 text-cyan" />
                      {s}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-3">
                  {g.items.map((t) => (
                    <li key={t.id}>
                      <Link
                        href={`/treatments/${t.slug}`}
                        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-glass-border px-4 text-sm font-semibold text-text-hi hover:bg-glass-strong focus-visible:outline-2 focus-visible:outline-primary-hover"
                      >
                        {t.title.split(' — ')[0]} <ArrowRightOutlined aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </GlassPanel>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
