import Image from 'next/image'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { sections } from '@/lib/data/home'
import { atWork } from '@/lib/data/media'

interface AtWorkProps {
  className?: string
}

export function AtWork({ className }: AtWorkProps) {
  return (
    <SectionWrapper id="at-work" bg="default" className={className} {...sections.atWork}>
      <ul className="grid gap-4 sm:grid-cols-3">
        {atWork.map((p) => (
          <li key={p.src} className="glass overflow-hidden rounded-[24px]">
            <Image
              src={p.src}
              alt={p.alt}
              width={p.width}
              height={p.height}
              sizes="(min-width: 640px) 33vw, 100vw"
              className="aspect-[3/4] w-full object-cover"
            />
          </li>
        ))}
      </ul>
    </SectionWrapper>
  )
}
