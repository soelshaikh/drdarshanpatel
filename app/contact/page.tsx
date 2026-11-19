import type { Metadata } from 'next'
import Image from 'next/image'
import { HospitalSchedule } from '@/components/sections/HospitalSchedule'
import { PageHeader } from '@/components/sections/PageHeader'
import { Button } from '@/components/ui/Button'
import { ArrowRightOutlined, CalendarOutlined, MailOutlined, PhoneOutlined, WhatsAppOutlined } from '@/components/ui/icons'
import { Reveal } from '@/components/ui/Reveal'
import { photos } from '@/lib/data/media'
import { ctaLabels, pageCopy } from '@/lib/data/pages'
import { bookHref, contact, emergencyNotice } from '@/lib/data/site'

export const metadata: Metadata = {
  title: pageCopy.contact.metaTitle,
  description: pageCopy.contact.metaDescription,
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  const copy = pageCopy.contact
  const rows = [
    { key: 'call', title: copy.callTitle, value: contact.phoneDisplay, href: contact.phoneHref, external: false, Icon: PhoneOutlined },
    { key: 'wa', title: copy.whatsappTitle, value: copy.whatsappText, href: contact.whatsappHref, external: true, Icon: WhatsAppOutlined },
    { key: 'mail', title: copy.emailTitle, value: contact.email, href: `mailto:${contact.email}`, external: false, Icon: MailOutlined },
  ]

  return (
    <>
      <PageHeader eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} crumbs={[{ label: copy.crumb }]} />

      <div className="mx-auto grid max-w-[1200px] items-start gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8">
        <div>
          <ul className="divide-y divide-glass-border border-y border-glass-border">
            {rows.map((r, i) => (
              <li key={r.key}>
                <Reveal delay={i * 0.08}>
                  <a
                    href={r.href}
                    {...(r.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-5 py-6 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary-hover md:py-8"
                  >
                    <span
                      aria-hidden="true"
                      className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-primary-soft text-2xl text-cyan"
                    >
                      <r.Icon />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-text-lo">{r.title}</span>
                      <span className="mt-1 block font-heading text-xl [overflow-wrap:anywhere] font-bold text-text-hi md:text-3xl">{r.value}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-glass-border-strong text-text-hi transition-[transform,background-color] duration-[var(--duration-interact)] group-hover:translate-x-1 group-hover:bg-primary"
                    >
                      <ArrowRightOutlined />
                    </span>
                    {r.external && <span className="sr-only">(opens in a new tab)</span>}
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={0.3} className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={bookHref} size="lg">
              <CalendarOutlined aria-hidden="true" /> {ctaLabels.book}
            </Button>
            <p className="text-text-mid">{copy.appointmentText}</p>
          </Reveal>

          <p role="note" className="mt-8 rounded-2xl border border-glass-border bg-danger-soft p-4 text-sm text-text-hi">
            <strong className="font-semibold">{copy.emergencyLabel}</strong>
            {emergencyNotice}
          </p>
        </div>

        <Reveal y={32} scale={0.97} className="glass overflow-hidden rounded-[var(--radius-xl)]">
          <Image
            src={photos.consultationDesk.src}
            alt={photos.consultationDesk.alt}
            width={photos.consultationDesk.width}
            height={photos.consultationDesk.height}
            sizes="(min-width: 1024px) 440px, 100vw"
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </Reveal>
      </div>

      <HospitalSchedule className="pt-16" />
    </>
  )
}
