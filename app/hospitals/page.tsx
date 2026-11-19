import type { Metadata } from 'next'
import { HospitalSchedule } from '@/components/sections/HospitalSchedule'
import { PageHeader } from '@/components/sections/PageHeader'
import { pageCopy } from '@/lib/data/pages'

export const metadata: Metadata = {
  title: pageCopy.hospitals.metaTitle,
  description: pageCopy.hospitals.metaDescription,
  alternates: { canonical: '/hospitals' },
}

export default function HospitalsPage() {
  return (
    <>
      <PageHeader
        eyebrow={pageCopy.hospitals.eyebrow}
        title={pageCopy.hospitals.title}
        intro={pageCopy.hospitals.intro}
        crumbs={[{ label: pageCopy.hospitals.crumb }]}
      />
      <HospitalSchedule hideHeader className="pt-0" />
    </>
  )
}
