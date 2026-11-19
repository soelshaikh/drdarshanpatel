import { Button } from '@/components/ui/Button'
import { GlassPanel } from '@/components/ui/GlassPanel'
import { ctaLabels, pageCopy } from '@/lib/data/pages'
import { bookHref } from '@/lib/data/site'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-24 sm:px-6">
      <GlassPanel level="panel" tone="tint" className="text-center">
        <p aria-hidden="true" className="font-heading text-7xl font-extrabold text-primary-hover">
          404
        </p>
        <h1 className="mt-4 font-heading text-[length:var(--text-h2)] font-extrabold">{pageCopy.notFound.title}</h1>
        <p className="mx-auto mt-3 max-w-md text-text-mid">{pageCopy.notFound.text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="glass">
            {pageCopy.notFound.home}
          </Button>
          <Button href="/treatments" variant="glass">
            {pageCopy.notFound.treatments}
          </Button>
          <Button href={bookHref}>{ctaLabels.book}</Button>
        </div>
      </GlassPanel>
    </div>
  )
}
