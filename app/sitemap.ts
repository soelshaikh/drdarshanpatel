import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/data/site'
import { treatments } from '@/lib/data/treatments'

const STATIC_ROUTES = ['', '/about', '/treatments', '/conditions', '/hospitals', '/testimonials', '/faq', '/book', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    ...STATIC_ROUTES.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.7,
    })),
    ...treatments.map((t) => ({
      url: `${siteUrl}/treatments/${t.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
