import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { GlassPanel } from '@/components/ui/GlassPanel'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { doctorData } from '@/lib/data/doctor'
import { sections } from '@/lib/data/home'
import { photos } from '@/lib/data/media'

interface DoctorIntroProps {
  className?: string
}

export function DoctorIntro({ className }: DoctorIntroProps) {
  return (
    <SectionWrapper id="doctor" bg="glow-cyan" className={className} {...sections.doctor}>
      <GlassPanel level="panel" className="grid items-center gap-8 md:grid-cols-[320px_1fr]">
        <div className="glass overflow-hidden rounded-[24px]">
          <Image
            src={photos.portraitClinic.src}
            alt={photos.portraitClinic.alt}
            width={photos.portraitClinic.width}
            height={photos.portraitClinic.height}
            sizes="(min-width: 768px) 320px, 100vw"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div>
          <p className="font-heading text-2xl font-bold text-text-hi">{doctorData.fullName}</p>
          <p className="mt-1 text-text-lo">{doctorData.title}</p>
          <ul className="mt-6 space-y-3">
            {doctorData.degrees.map((d) => (
              <li key={d.degree} className="rounded-2xl border border-glass-border bg-glass p-4">
                <p className="font-semibold text-text-hi">{d.degree}</p>
                <p className="text-sm text-text-mid">{d.institution}</p>
              </li>
            ))}
          </ul>
          <Button href="/about" variant="glass" className="mt-6">
            Meet Dr. Darshan Patel
          </Button>
        </div>
      </GlassPanel>
    </SectionWrapper>
  )
}
