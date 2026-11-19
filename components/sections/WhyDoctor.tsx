import { Reveal } from '@/components/ui/Reveal'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { sections, whyPoints } from '@/lib/data/home'

interface WhyDoctorProps {
  className?: string
}

/** Editorial numbered list: big numerals and hairlines instead of cards. */
export function WhyDoctor({ className }: WhyDoctorProps) {
  return (
    <SectionWrapper id="why" bg="light" className={className} {...sections.why}>
      <ol className="divide-y divide-glass-border border-y border-glass-border">
        {whyPoints.map((p, i) => (
          <li key={p.title}>
            <Reveal delay={i * 0.1}>
              <div className="grid items-baseline gap-4 py-8 md:grid-cols-[7rem_1fr_1.2fr] md:gap-10 md:py-10">
                <span
                  aria-hidden="true"
                  className="text-gradient font-heading text-5xl font-extrabold leading-none md:text-6xl"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-2xl font-bold text-text-hi md:text-3xl">{p.title}</h3>
                <p className="text-text-mid">{p.text}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  )
}
