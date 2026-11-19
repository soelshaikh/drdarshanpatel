import type { Metadata } from 'next'
import { Manrope, Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFAB } from '@/components/layout/WhatsAppFAB'
import { JsonLd } from '@/components/ui/JsonLd'
import { AntdProvider } from '@/providers/AntdProvider'
import { doctorData } from '@/lib/data/doctor'
import { isIndexable, siteUrl } from '@/lib/data/site'
import { publishable } from '@/lib/verified'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

const verifiedHospitals = doctorData.affiliatedHospitals.filter((h) => h.verified)
const consultationAreas = verifiedHospitals.map((h) => h.name).join(', ')
const siteTitle = 'Dr. Darshan Patel — Urologist and Laser Surgeon in Ahmedabad'
const siteDescription = `Dr. Darshan Patel (${doctorData.credentials}), urologist in Ahmedabad. Kidney stones, prostate care, men’s health and kidney transplant. Consultations at ${consultationAreas}.`
const ogImage = doctorData.photo

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: '%s | Dr. Darshan Patel Urologist',
  },
  description: siteDescription,
  keywords: [
    'Dr Darshan Patel urologist',
    'Dr Darshan Patel Ahmedabad',
    'urologist in Ahmedabad',
    'kidney stone treatment Ahmedabad',
    'RIRS laser stone surgery Ahmedabad',
    'Mini PCNL Gujarat',
    'prostate treatment Ahmedabad',
    'kidney transplant Ahmedabad',
  ],
  authors: [{ name: doctorData.fullName }],
  creator: doctorData.fullName,
  publisher: doctorData.fullName,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: doctorData.fullName,
    title: siteTitle,
    description: siteDescription,
    images: [{ url: ogImage, width: 1066, height: 1600, alt: `${doctorData.fullName}, urologist in Ahmedabad` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
  robots: { index: isIndexable, follow: isIndexable },
}

const primaryHospital = publishable(doctorData.affiliatedHospitals).find((h) => h.verified)

const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: doctorData.fullName,
  medicalSpecialty: ['Urology'],
  telephone: doctorData.phone,
  email: doctorData.email,
  url: siteUrl,
  image: `${siteUrl}${ogImage}`,
  ...(primaryHospital && {
    address: {
      '@type': 'PostalAddress',
      streetAddress: primaryHospital.address,
      addressLocality: primaryHospital.city,
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
  }),
  hospitalAffiliation: verifiedHospitals.map((h) => ({
    '@type': 'Hospital',
    name: h.name,
    address: {
      '@type': 'PostalAddress',
      addressLocality: h.area,
      addressRegion: h.city,
      addressCountry: 'IN',
    },
  })),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" className={`${manrope.variable} ${inter.variable}`}>
      <body className="canvas antialiased font-sans selection:bg-primary/40 selection:text-text-hi">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[var(--z-toast)] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:font-semibold focus:text-text-on-primary"
        >
          Skip to content
        </a>
        <JsonLd data={physicianSchema} />
        <AntdProvider>
          <Header />
          <main id="main" className="pt-[var(--header-height)]">
            {children}
          </main>
          <Footer />
          <WhatsAppFAB />
        </AntdProvider>
      </body>
    </html>
  )
}
