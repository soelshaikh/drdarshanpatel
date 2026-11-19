import { Button } from '@/components/ui/Button'
import { GlassPanel } from '@/components/ui/GlassPanel'
import { PhoneOutlined, WhatsAppOutlined } from '@/components/ui/icons'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { doctorFaqs } from '@/lib/data/faqs'
import { sections } from '@/lib/data/home'
import { ctaLabels } from '@/lib/data/pages'
import { contact } from '@/lib/data/site'
import { FaqAccordion } from './FaqAccordion'

interface FAQSectionProps {
  className?: string
}

export function FAQSection({ className }: FAQSectionProps) {
  return (
    <SectionWrapper id="faq" bg="light" className={className} aria-label={sections.faq.title}>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div className="lg:sticky lg:top-[calc(var(--header-height)+24px)] lg:self-start">
          <p className="eyebrow mb-4">{sections.faq.eyebrow}</p>
          <h2 className="text-gradient font-heading text-[length:var(--text-h2)] font-extrabold leading-[1.1]">{sections.faq.title}</h2>
          <p className="mt-4 max-w-md text-text-mid">{sections.faq.intro}</p>
          <GlassPanel tone="tint" className="mt-8">
            <p className="font-heading text-lg font-bold text-text-hi">{sections.faq.helpTitle}</p>
            <p className="mt-2 text-text-mid">{sections.faq.helpText}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href={contact.phoneHref} variant="glass" size="sm">
                <PhoneOutlined aria-hidden="true" /> {ctaLabels.call}
              </Button>
              <Button href={contact.whatsappHref} external variant="glass" size="sm">
                <WhatsAppOutlined aria-hidden="true" /> {ctaLabels.whatsapp}
              </Button>
            </div>
          </GlassPanel>
        </div>
        <FaqAccordion items={doctorFaqs} openFirst />
      </div>
    </SectionWrapper>
  )
}
