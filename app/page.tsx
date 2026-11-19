import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/ui/Marquee'
import { treatments } from '@/lib/data/treatments'
import { TrustBand } from '@/components/sections/TrustBand'
import { Treatments } from '@/components/sections/Treatments'
import { WhyDoctor } from '@/components/sections/WhyDoctor'
import { DoctorIntro } from '@/components/sections/DoctorIntro'
import { AtWork } from '@/components/sections/AtWork'
import { HospitalSchedule } from '@/components/sections/HospitalSchedule'
import { Technology } from '@/components/sections/Technology'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQSection } from '@/components/sections/FAQSection'
import { EmergencyCTA } from '@/components/sections/EmergencyCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee label="Treatments offered" items={treatments.map((t) => t.title)} />
      <TrustBand />
      <Treatments />
      <WhyDoctor />
      <DoctorIntro />
      <AtWork />
      <HospitalSchedule />
      <Technology />
      <Testimonials />
      <FAQSection />
      <EmergencyCTA />
    </>
  )
}
