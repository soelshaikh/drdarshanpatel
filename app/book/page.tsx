import type { Metadata } from 'next'
import Image from 'next/image'
import { BookingForm } from '@/components/forms/BookingForm'
import { PageHeader } from '@/components/sections/PageHeader'
import { Button } from '@/components/ui/Button'
import { GlassPanel } from '@/components/ui/GlassPanel'
import { PhoneOutlined } from '@/components/ui/icons'
import { doctorData } from '@/lib/data/doctor'
import { photos } from '@/lib/data/media'
import { pageCopy } from '@/lib/data/pages'
import { contact } from '@/lib/data/site'
import { publishable } from '@/lib/verified'

export const metadata: Metadata = {
  title: pageCopy.book.metaTitle,
  description: pageCopy.book.metaDescription,
  alternates: { canonical: '/book' },
}

export default function BookPage() {
  const hospitals = publishable(doctorData.affiliatedHospitals).map((h) => ({ value: `${h.name}, ${h.area}`, label: `${h.name} (${h.area}) - ${h.schedule}` }))

  return (
    <>
      <PageHeader
        eyebrow={pageCopy.book.eyebrow}
        title={pageCopy.book.title}
        intro={pageCopy.book.intro}
        crumbs={[{ label: pageCopy.book.crumb }]}
      />
      <section aria-label={pageCopy.book.formLabel} className="pb-24">
        <div className="mx-auto grid max-w-[1200px] gap-6 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <GlassPanel level="panel" tone="tint">
            <BookingForm hospitals={hospitals} whatsappNumber={doctorData.whatsapp.replace(/\+/g, '')} />
          </GlassPanel>
          <aside className="space-y-6">
            <div className="glass overflow-hidden rounded-[var(--radius-lg)]">
              <Image
                src={photos.consultationDesk.src}
                alt={photos.consultationDesk.alt}
                width={photos.consultationDesk.width}
                height={photos.consultationDesk.height}
                sizes="(min-width: 1024px) 400px, 100vw"
                className="aspect-[4/3] w-full object-cover object-top"
              />
            </div>
            <GlassPanel tone="tint">
              <p className="font-heading text-lg font-bold text-text-hi">{pageCopy.book.talkTitle}</p>
              <p className="mt-2 text-text-mid">{pageCopy.book.talkText}</p>
              <Button href={contact.phoneHref} variant="glass" className="mt-4">
                <PhoneOutlined aria-hidden="true" /> {contact.phoneDisplay}
              </Button>
            </GlassPanel>
          </aside>
        </div>
      </section>
    </>
  )
}
