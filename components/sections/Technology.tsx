import { EyeOutlined, SafetyOutlined, ThunderboltOutlined, VideoCameraOutlined } from '@/components/ui/icons'
import { Reveal } from '@/components/ui/Reveal'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { sections, technology } from '@/lib/data/home'

interface TechnologyProps {
  className?: string
}

const ICONS = {
  thunder: ThunderboltOutlined,
  eye: EyeOutlined,
  video: VideoCameraOutlined,
  safety: SafetyOutlined,
} as const

/** Vertical timeline: a glowing line with an icon node per tool. */
export function Technology({ className }: TechnologyProps) {
  return (
    <SectionWrapper id="technology" bg="glow" className={className} {...sections.technology}>
      <ol className="relative ml-6 space-y-10 border-l border-primary-line pb-2 md:ml-8 md:space-y-12">
        {technology.map((t, i) => {
          const Icon = ICONS[t.icon]
          return (
            <li key={t.title} className="relative pl-10 md:pl-14">
              <Reveal delay={i * 0.06}>
                <span
                  aria-hidden="true"
                  className="absolute -left-6 top-0 inline-flex size-12 items-center justify-center rounded-full border border-primary-line bg-ink-800 text-xl text-cyan md:-left-6"
                >
                  <Icon />
                </span>
                <p className="eyebrow mb-3">{t.category}</p>
                <h3 className="font-heading text-2xl font-bold text-text-hi md:text-3xl">{t.title}</h3>
                <p className="mt-3 max-w-2xl text-text-mid">{t.description}</p>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </SectionWrapper>
  )
}
