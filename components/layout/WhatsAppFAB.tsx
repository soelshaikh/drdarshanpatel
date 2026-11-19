import { Button } from '@/components/ui/Button'
import { CalendarOutlined, PhoneOutlined, WhatsAppOutlined } from '@/components/ui/icons'
import { bookHref, contact } from '@/lib/data/site'

interface WhatsAppFABProps {
  className?: string
}

/** Desktop: floating WhatsApp pill. Mobile: sticky call / WhatsApp / book bar. */
export function WhatsAppFAB({ className }: WhatsAppFABProps) {
  return (
    <aside aria-label="Quick contact" className={className}>
      <a
        href={contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Dr. Darshan Patel on WhatsApp"
        className="fixed bottom-6 right-6 z-[var(--z-sticky)] hidden min-h-12 items-center gap-2 rounded-full bg-whatsapp px-5 font-heading text-sm font-bold text-ink-950 shadow-[var(--shadow-raised)] transition-transform duration-[var(--duration-interact)] hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-text-hi sm:flex"
      >
        <WhatsAppOutlined aria-hidden="true" className="text-lg" />
        WhatsApp
      </a>

      <nav
        aria-label="Quick actions"
        className="glass glass-tint fixed inset-x-3 bottom-3 z-[var(--z-sticky)] flex items-center gap-2 rounded-full p-2 sm:hidden"
      >
        <Button href={contact.phoneHref} variant="glass" size="sm" className="flex-1" aria-label="Call the doctor">
          <PhoneOutlined aria-hidden="true" /> Call
        </Button>
        <a
          href={contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp the doctor"
          className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-whatsapp px-4 font-heading text-sm font-bold text-ink-950"
        >
          <WhatsAppOutlined aria-hidden="true" /> Chat
        </a>
        <Button href={bookHref} variant="glass" size="sm" className="flex-1">
          <CalendarOutlined aria-hidden="true" /> Book
        </Button>
      </nav>
    </aside>
  )
}
