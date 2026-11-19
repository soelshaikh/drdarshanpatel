# Pages and sitemap

| Route | Purpose | Key sections |
|---|---|---|
| `/` | Trust in 3s, book in 10s | Hero, TrustBand (verified stats), Treatments strip, Why-this-doctor, Hospitals + schedule, Technology, Testimonials, FAQ, Emergency, Book CTA |
| `/about` | Doctor credentials and approach | Bio, qualifications timeline, memberships, philosophy |
| `/treatments` | Index of treatments | Grouped cards (stones, prostate, andrology, kidney, laparoscopy, transplant) |
| `/treatments/[slug]` | One treatment, deep | See content rules; JSON-LD `MedicalProcedure` + `FAQPage` |
| `/conditions` and `/conditions/[slug]` | Symptom-led SEO pages | Kidney stones, BPH, UTI, erectile dysfunction, etc. |
| `/hospitals` | Where and when | Hospital cards, map, weekly timetable, directions |
| `/testimonials` | Social proof | Text + video (consented) |
| `/faq` | Objections and logistics | antd Collapse, grouped |
| `/book` | Appointment request | antd Form (name, phone, hospital, date, concern) + WhatsApp alternative |
| `/contact` | Phone, WhatsApp, map | Same data as footer |
| `not-found` | Recovery | Search-free: links to treatments + book |

Every page: one H1, `generateMetadata` with canonical, OpenGraph, JSON-LD (`Physician` globally, page-specific types as above), breadcrumbs from 2nd level. Slugs come from `lib/data` via `generateStaticParams`.
Forms post to a server action/route handler with Zod validation; no PII in logs.
