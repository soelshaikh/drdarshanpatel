# Next 16 App Router Rules - Dr. Darshan Patel site

App Router only. No `pages/`, `getServerSideProps`, `getStaticProps`. Routes are in `_design/03_PAGES.md`.

## Dynamic routes
`params` is a Promise in Next 16; always `await` it.
```tsx
// app/treatments/[slug]/page.tsx
interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams(): { slug: string }[] {
  return treatments.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const t = treatments.find((x) => x.slug === slug)
  if (!t) return {}
  return { title: t.title, description: t.shortDescription, alternates: { canonical: `/treatments/${slug}` } }
}

export default async function TreatmentPage({ params }: PageProps) {
  const { slug } = await params
  const t = treatments.find((x) => x.slug === slug)
  if (!t) notFound()
  return /* sections */
}
```
Slugs come from `lib/data`; every dynamic route has `generateStaticParams`.

## Metadata and SEO
Every page: one H1, `generateMetadata` (title, description <= 160 chars, canonical, OpenGraph), JSON-LD (`Physician` globally; `MedicalProcedure` + `FAQPage` on treatments), breadcrumbs from the second level. JSON-LD and metadata must not include unverified facts.

## Server vs Client
Server Components by default. `'use client'` only for state, effects, handlers, browser APIs, Framer Motion, antd form widgets, and the `AntdProvider`. Keep it on the smallest leaf with a one-line reason. antd's `AntdRegistry` + `ConfigProvider` are mounted once via `providers/AntdProvider.tsx`; do not add another.

## Forms and mutations
Forms post to a server action or route handler (`app/api/*/route.ts`) that re-validates with the same Zod schema. No PII in logs. See `forms-validation.md`.

## Errors
`notFound()` for missing slugs; `app/not-found.tsx` links to treatments + book. Add `error.tsx` where data can fail.

## Link, Image, Fonts
- `next/link` for internal links; `next/image` for images (descriptive `alt`, `priority` on hero only).
- Fonts load once in `app/layout.tsx` via `next/font/google`: Manrope -> `--font-manrope`, Inter -> `--font-inter` (consumed by `--font-display`/`--font-body` in `tokens.css`). Never import fonts in components. Apply `.canvas` on `<body>`.
