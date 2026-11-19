import { Reveal } from '@/components/ui/Reveal'
import { StatChip } from '@/components/ui/StatChip'
import { UnverifiedTag } from '@/components/ui/UnverifiedTag'
import { CalendarOutlined, EnvironmentOutlined, HeartOutlined, SafetyCertificateOutlined } from '@/components/ui/icons'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { doctorData } from '@/lib/data/doctor'
import { publishable } from '@/lib/verified'

interface TrustBandProps {
  className?: string
}

const ICONS = [CalendarOutlined, HeartOutlined, SafetyCertificateOutlined, EnvironmentOutlined]
const SPARKS = ['pulse', 'wave', 'bars', 'wave'] as const

/** Numbers are shown only when verified (always visible with a tag in dev). */
export function TrustBand({ className }: TrustBandProps) {
  const stats = publishable(doctorData.stats)
  if (stats.length === 0) return null

  return (
    <SectionWrapper id="trust" aria-label="Experience at a glance" className={className} noPadding>
      <ul className="grid grid-cols-2 gap-4 pb-16 md:pb-24 lg:grid-cols-4">
        {stats.map((s, i) => {
          const Icon = ICONS[i % ICONS.length]
          return (
            <li key={s.label}>
              <Reveal delay={i * 0.08} className="flex h-full flex-col gap-2">
              <StatChip
                label={s.label}
                value={`${s.prefix ?? ''}${s.decimals ? s.value.toFixed(s.decimals) : s.value.toLocaleString('en-IN')}${s.suffix}`}
                icon={<Icon />}
                spark={SPARKS[i % SPARKS.length]}
                className="h-full"
              />
              <UnverifiedTag item={s} />
              </Reveal>
            </li>
          )
        })}
      </ul>
    </SectionWrapper>
  )
}
