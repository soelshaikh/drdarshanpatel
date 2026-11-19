import type { MetadataRoute } from 'next'
import { isIndexable, siteUrl } from '@/lib/data/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: isIndexable ? { userAgent: '*', allow: '/', disallow: ['/dev/'] } : { userAgent: '*', disallow: '/' },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
