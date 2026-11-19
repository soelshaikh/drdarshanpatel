'use client' // antd Collapse is interactive

import { Collapse } from 'antd'
import type { FAQ } from '@/types'

interface FaqAccordionProps {
  items: FAQ[]
  /** Open the first question on load. */
  openFirst?: boolean
}

/** One glass card per question, so each answer reads as its own panel. */
export function FaqAccordion({ items, openFirst = false }: FaqAccordionProps) {
  return (
    <ul className="space-y-3">
      {items.map((f, i) => (
        <li key={f.question}>
          <Collapse
            ghost
            size="large"
            expandIconPlacement="end"
            defaultActiveKey={openFirst && i === 0 ? ['q'] : []}
            className="glass glass-tint rounded-[var(--radius-lg)] overflow-hidden"
            items={[
              {
                key: 'q',
                label: <span className="font-heading text-base font-semibold text-text-hi md:text-lg">{f.question}</span>,
                children: <p className="max-w-prose text-text-mid">{f.answer}</p>,
              },
            ]}
          />
        </li>
      ))}
    </ul>
  )
}
