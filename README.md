# Dr. Darshan Patel — Urologist Website

Multi-page Next.js site for Dr. Darshan Patel, urologist in Ahmedabad. Design language: Clinical Glass (dark navy, frosted glass, one electric-blue accent). Project rules live in `CLAUDE.md`, `RULES.md` and `_design/`.

## Stack

Next 16 (App Router) · React 19 · TypeScript strict · Tailwind v4 · antd 6 · Framer Motion · Zod.

## Scripts

```bash
npm run dev          # local development
npm run type-check   # tsc --noEmit
npm run lint
npm run build        # production build
npm start            # serve the production build
```

## Deploy to Vercel

1. Push the project to a Git repository (GitHub, GitLab or Bitbucket) and import it at vercel.com/new. Framework preset: Next.js. No build settings need changing (`npm run build`, Node 20 or newer).
2. In Project Settings > Environment Variables, set `NEXT_PUBLIC_SITE_URL` to the final public origin, for example `https://www.drdarshanurosurgeon.com`. It drives canonical URLs, the sitemap, `robots.txt` and structured data. See `.env.example`.
3. Add the custom domain under Project Settings > Domains.
4. Only the Production deployment is indexable. Preview deployments serve `robots.txt` with `Disallow: /` and a `noindex` meta tag.

## Before going live

Content marked `verified: false` in `lib/data/*` is hidden in production builds (shown with a tag in development). Before launch, the doctor or owner should confirm and then flip to `verified: true` with a `source`:

- Hospital affiliations, consultation days, timings and addresses (`lib/data/doctor.ts`).
- Experience, surgery count, success rate and consulting-centre stats.
- Degrees and memberships.
- Patient testimonials, only with written consent (`lib/data/testimonials.ts`).
- Medical wording in `lib/data/treatments.ts` and `lib/data/faqs.ts`, reviewed by the doctor.
- The emergency number (108) in `lib/data/site.ts`.

The booking form opens a pre-filled WhatsApp message. There is no backend and no stored patient data.
