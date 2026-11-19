import { Button } from '@/components/ui/Button'
import { GlassPanel } from '@/components/ui/GlassPanel'
import { PhoneOutlined } from '@/components/ui/icons'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { finalCta } from '@/lib/data/home'
import { bookHref, contact, emergencyNotice } from '@/lib/data/site'

interface EmergencyCTAProps {
  className?: string
}

/** Closing section: one primary booking CTA plus the emergency notice. */
export function EmergencyCTA({ className }: EmergencyCTAProps) {
  return (
    <SectionWrapper id="book" className={className}>
      <GlassPanel level="panel" tone="strong" className="panel-glow py-12 text-center md:py-16">
        <h2 className="text-gradient mx-auto max-w-2xl font-heading text-[length:var(--text-h1)] font-extrabold">{finalCta.title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-text-mid">{finalCta.text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={bookHref} size="lg">
            Book Appointment
          </Button>
          <Button href={contact.phoneHref} variant="glass" size="lg">
            <PhoneOutlined aria-hidden="true" /> {contact.phoneDisplay}
          </Button>
        </div>
        <p role="note" className="mx-auto mt-8 max-w-2xl rounded-2xl border border-glass-border bg-danger-soft p-4 text-sm text-text-hi">
          <strong className="font-semibold">Emergency: </strong>
          {emergencyNotice}
        </p>
      </GlassPanel>
    </SectionWrapper>
  )
}
