import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { GlassPanel } from '@/components/ui/GlassPanel'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'
import { CheckCircleOutlined, PhoneOutlined } from '@/components/ui/icons'
import { doctorData } from '@/lib/data/doctor'
import { hero } from '@/lib/data/home'
import { bookHref, contact } from '@/lib/data/site'
import { photos } from '@/lib/data/media'
import { publishable } from '@/lib/verified'

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  const areas = publishable(doctorData.affiliatedHospitals)
    .filter((h) => h.verified)
    .map((h) => h.area.split(' / ')[0])
  const trust = [doctorData.credentials, areas.length ? `Consults in ${areas.join(', ')}` : null].filter(
    (x): x is string => Boolean(x),
  )

  return (
    <section id="top" aria-label="Introduction" className={className}>
      <div className="mx-auto max-w-[1200px] px-4 pb-16 pt-8 sm:px-6 md:pb-24 md:pt-12 lg:px-8">
        <GlassPanel level="panel" className="panel-glow relative overflow-hidden p-6 sm:p-10 lg:p-14">
          <div aria-hidden="true" className="drift pointer-events-none absolute -right-24 -top-24 size-[28rem] rounded-full bg-primary-soft" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Reveal y={16}>
                <p className="eyebrow mb-5">{hero.eyebrow}</p>
              </Reveal>
              <Reveal y={24} delay={0.08}>
                <h1 className="text-gradient font-heading text-[length:var(--text-h1)] font-extrabold leading-[1.05]">
                  {hero.title}
                </h1>
              </Reveal>
              <Reveal y={24} delay={0.16}>
                <p className="mt-6 max-w-xl text-lg text-text-mid">{hero.intro}</p>
              </Reveal>

              <Reveal y={24} delay={0.24} className="mt-8 flex flex-wrap items-center gap-3">
                <Button href={bookHref} size="lg">
                  Book Appointment
                </Button>
                <Button href={contact.phoneHref} variant="glass" size="lg">
                  <PhoneOutlined aria-hidden="true" /> Call Now
                </Button>
              </Reveal>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-mid">
                {trust.map((t) => (
                  <li key={t} className="inline-flex items-center gap-2">
                    <CheckCircleOutlined aria-hidden="true" className="text-cyan" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <Reveal y={32} scale={0.96} delay={0.2} className="relative mx-auto w-full max-w-[460px]">
              <div className="glass overflow-hidden rounded-[var(--radius-xl)]">
                <Image
                  src={photos.portraitFormal.src}
                  alt={photos.portraitFormal.alt}
                  width={photos.portraitFormal.width}
                  height={photos.portraitFormal.height}
                  sizes="(min-width: 1024px) 460px, 90vw"
                  priority
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              {hero.chips.map((c, i) => (
                <div
                  key={c.label}
                  className={cn(
                    'glass glass-tint absolute flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-text-hi sm:text-sm',
                    i === 0 ? 'float' : i === 1 ? 'float-slow' : 'float-late',
                    c.position,
                  )}
                >
                  <span aria-hidden="true" className="size-2 rounded-full bg-cyan" />
                  {c.label}
                </div>
              ))}
            </Reveal>
          </div>
        </GlassPanel>
      </div>
    </section>
  )
}
