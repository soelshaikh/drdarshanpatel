import Link from 'next/link'
import { cn } from '@/lib/utils'

interface Crumb {
  label: string
  href?: string
}

interface PageHeaderProps {
  eyebrow?: string
  title: string
  intro?: string
  crumbs?: Crumb[]
  className?: string
}

/** Top of every inner page. Renders the page's single H1 and a breadcrumb trail. */
export function PageHeader({ eyebrow, title, intro, crumbs, className }: PageHeaderProps) {
  return (
    <header className={cn('section-glow', className)}>
      <div className="mx-auto max-w-[1200px] px-4 pb-10 pt-10 sm:px-6 md:pb-14 md:pt-16 lg:px-8">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text-lo">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="inline-flex min-h-11 min-w-11 items-center hover:text-text-hi focus-visible:outline-2 focus-visible:outline-primary-hover">
                  Home
                </Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  {c.href ? (
                    <Link href={c.href} className="inline-flex min-h-11 min-w-11 items-center hover:text-text-hi focus-visible:outline-2 focus-visible:outline-primary-hover">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-text-mid">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
        <h1 className="text-gradient max-w-3xl font-heading text-[length:var(--text-h1)] font-extrabold leading-[1.05]">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-text-mid">{intro}</p>}
      </div>
    </header>
  )
}
