import { Button } from '@/components/ui/Button'
import { GlassPanel } from '@/components/ui/GlassPanel'
import { ClockCircleOutlined, EnvironmentOutlined, PhoneOutlined } from '@/components/ui/icons'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { UnverifiedTag } from '@/components/ui/UnverifiedTag'
import { doctorData } from '@/lib/data/doctor'
import { sections } from '@/lib/data/home'
import { publishable } from '@/lib/verified'

interface HospitalScheduleProps {
  className?: string
  /** Hide the section heading when the page already has an H1 */
  hideHeader?: boolean
}

export function HospitalSchedule({ className, hideHeader = false }: HospitalScheduleProps) {
  const hospitals = publishable(doctorData.affiliatedHospitals)
  // On the /hospitals page the H1 is followed directly by cards, so they are H2 to avoid skipping a level
  const Heading = hideHeader ? 'h2' : 'h3'
  return (
    <SectionWrapper id="hospitals" bg="light" className={className} {...(hideHeader ? { 'aria-label': sections.hospitals.title } : sections.hospitals)}>
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {hospitals.map((h) => (
          <li key={h.id}>
            <GlassPanel tone="tint" className="flex h-full flex-col">
              <div className="flex flex-wrap items-center gap-2">
                <Heading className="font-heading text-xl font-bold text-text-hi">{h.name}</Heading>
                <UnverifiedTag item={h} />
              </div>
              <p className="mt-1 text-sm text-cyan">{h.area}</p>
              <dl className="mt-5 space-y-3 text-sm text-text-mid">
                <div className="flex gap-3">
                  <dt className="sr-only">Days and timings</dt>
                  <ClockCircleOutlined aria-hidden="true" className="mt-0.5 text-text-lo" />
                  <dd>
                    <span className="font-semibold text-text-hi">{h.schedule}</span>
                    <br />
                    {h.timings}
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="sr-only">Address</dt>
                  <EnvironmentOutlined aria-hidden="true" className="mt-0.5 text-text-lo" />
                  <dd>{h.address}</dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-wrap gap-3 pt-2">
                <Button href={`tel:${h.phone.replace(/\s+/g, '')}`} variant="glass" size="sm" aria-label={`Call ${h.name}`}>
                  <PhoneOutlined aria-hidden="true" /> Call
                </Button>
                {h.mapUrl && (
                  <Button href={h.mapUrl} external variant="ghost" size="sm">
                    Directions
                  </Button>
                )}
              </div>
            </GlassPanel>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  )
}
