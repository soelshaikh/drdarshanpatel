import Link from 'next/link'
import { GlassPanel } from '@/components/ui/GlassPanel'
import { MailOutlined, PhoneOutlined } from '@/components/ui/icons'
import { contact, disclaimer, emergencyNotice, footerNav } from '@/lib/data/site'
import { doctorData } from '@/lib/data/doctor'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear()
  return (
    <footer className={className}>
      <div className="mx-auto max-w-[1200px] px-4 pb-28 pt-8 sm:px-6 sm:pb-10 lg:px-8">
        <GlassPanel level="panel" tone="tint">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="font-heading text-2xl font-extrabold text-text-hi">{doctorData.fullName}</p>
              <p className="mt-1 text-sm text-text-lo">{doctorData.credentials}</p>
              <p className="mt-4 max-w-sm text-text-mid">Urologist and laser surgeon in Ahmedabad.</p>
              <ul className="mt-6 space-y-2 text-text-mid">
                <li>
                  <a
                    href={contact.phoneHref}
                    className="inline-flex min-h-11 min-w-11 items-center gap-2 hover:text-text-hi focus-visible:outline-2 focus-visible:outline-primary-hover"
                  >
                    <PhoneOutlined aria-hidden="true" /> {contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex min-h-11 min-w-11 items-center gap-2 hover:text-text-hi focus-visible:outline-2 focus-visible:outline-primary-hover"
                  >
                    <MailOutlined aria-hidden="true" /> {contact.email}
                  </a>
                </li>
              </ul>
            </div>

            {footerNav.map((group) => (
              <nav key={group.title} aria-label={group.title} className="md:col-span-3">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan">{group.title}</p>
                <ul className="mt-4 space-y-2">
                  {group.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="inline-flex min-h-11 min-w-11 items-center text-text-mid hover:text-text-hi focus-visible:outline-2 focus-visible:outline-primary-hover"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-glass-border bg-danger-soft p-4 text-sm text-text-hi">
            <strong className="font-semibold">Emergency: </strong>
            {emergencyNotice}
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-glass-border pt-6 text-xs text-text-lo sm:flex-row sm:justify-between">
            <p>{disclaimer}</p>
            <p>&copy; {year} {doctorData.fullName}</p>
          </div>
        </GlassPanel>
      </div>
    </footer>
  )
}
