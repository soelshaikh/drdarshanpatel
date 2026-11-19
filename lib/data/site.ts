import type { NavItem } from '@/types'
import { doctorData } from '@/lib/data/doctor'

/** Primary navigation. Routes are defined in _design/03_PAGES.md. */
export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Treatments', href: '/treatments' },
  { label: 'Hospitals', href: '/hospitals' },
  { label: 'Contact', href: '/contact' },
]

/** Footer link groups. */
export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: 'Care',
    links: [
      { label: 'Treatments', href: '/treatments' },
      { label: 'Conditions', href: '/conditions' },
      { label: 'Hospitals and timings', href: '/hospitals' },
    ],
  },
  {
    title: 'Patients',
    links: [
      { label: 'Book appointment', href: '/book' },
      { label: 'Patient stories', href: '/testimonials' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
]

export const bookHref = '/book'

export const contact = {
  phoneDisplay: doctorData.phone,
  phoneHref: `tel:${doctorData.phone.replace(/\s+/g, '')}`,
  whatsappHref: `https://wa.me/${doctorData.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(
    'Hello Dr. Darshan Patel, I would like to book an appointment.',
  )}`,
  email: doctorData.email,
} as const

export const emergencyNotice =
  'Severe pain, cannot pass urine, or blood in urine with fever? Go to the nearest emergency room now, or call 108 for an ambulance.'

export const disclaimer =
  'This website is for information only and does not replace medical advice. Please consult a doctor about your own case.'

/** Public origin. Set NEXT_PUBLIC_SITE_URL in Vercel when the final domain is known. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.drdarshanurosurgeon.com').replace(/\/$/, '')

/** Only the Vercel production deployment is indexable; previews and local builds are not. */
export const isIndexable = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === 'production' : process.env.NODE_ENV === 'production'
