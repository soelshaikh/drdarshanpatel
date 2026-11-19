import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PhoneOutlined, HeartOutlined, ExperimentOutlined } from '@/components/ui/icons'
import { Button } from '@/components/ui/Button'
import { GlassPanel } from '@/components/ui/GlassPanel'
import { IconButton } from '@/components/ui/IconButton'
import { PillNav } from '@/components/ui/PillNav'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { StatChip } from '@/components/ui/StatChip'
import { HotspotVisual } from '@/components/ui/HotspotVisual'
import { CarouselStrip } from '@/components/ui/CarouselStrip'

export const metadata: Metadata = { title: 'UI kit (dev)', robots: { index: false, follow: false } }

const NAV = [
  { label: 'Overview', href: '/dev/kit' },
  { label: 'Treatments', href: '/treatments' },
  { label: 'Hospitals', href: '/hospitals' },
  { label: 'Contact', href: '/contact' },
]

const SAMPLE_CARDS = ['Kidney stones', 'Prostate', 'Andrology', 'Laparoscopy', 'Transplant']

/** Dev-only preview of the glass primitives. Returns 404 in production. */
export default function KitPage() {
  if (process.env.NODE_ENV === 'production') notFound()
  return (
    <div className="pt-8">
      <SectionWrapper eyebrow="Phase 2" title="Clinical Glass UI kit" intro="Every primitive, on the shared canvas.">
        <div className="flex flex-wrap items-center gap-4">
          <PillNav items={NAV} className="max-w-full overflow-x-auto" />
          <Button size="lg">Book Appointment</Button>
          <Button variant="glass" size="lg">
            <PhoneOutlined aria-hidden="true" /> Call Now
          </Button>
          <Button variant="ghost">Learn more</Button>
          <IconButton label="Call" tone="primary">
            <PhoneOutlined />
          </IconButton>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Hero visual and stat chips" noPadding className="pb-20">
        <GlassPanel level="panel" className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h1 className="font-heading text-[length:var(--text-h1)] font-extrabold">Kidney care, explained clearly</h1>
            <p className="mt-4 max-w-md text-text-mid">Sample copy only. Real copy comes from lib/data.</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <StatChip label="Sample metric" value="120" unit="bpm" icon={<HeartOutlined />} spark="pulse" />
              <StatChip label="Sample metric" value="80" unit="/90" icon={<ExperimentOutlined />} spark="bars" />
            </div>
          </div>
          <HotspotVisual
            chips={[
              { label: 'Laser stone surgery', position: 'left-0 top-[14%]' },
              { label: 'Prostate care', position: 'right-0 top-[44%]' },
              { label: 'Kidney health', position: 'left-[6%] bottom-[10%]' },
            ]}
          />
        </GlassPanel>
      </SectionWrapper>

      <SectionWrapper title="Carousel strip">
        <CarouselStrip label="Sample treatments">
          {SAMPLE_CARDS.map((c) => (
            <li key={c} className="w-64 shrink-0">
              <GlassPanel tone="tint" className="h-40">
                <p className="font-heading text-xl font-bold text-text-hi">{c}</p>
                <p className="mt-2 text-sm text-text-lo">Sample card</p>
              </GlassPanel>
            </li>
          ))}
        </CarouselStrip>
      </SectionWrapper>
    </div>
  )
}
