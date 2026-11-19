export interface AffiliatedHospital {
  id: string
  name: string
  area: string
  city: string
  role: string
  schedule: string
  timings: string
  address: string
  mapUrl?: string
  phone: string
  isPrimary?: boolean
  /** Only verified items render in production. See _design/02_CONTENT_RULES.md */
  verified: boolean
  source?: string
}

export interface DoctorStat {
  value: number
  suffix: string
  prefix?: string
  label: string
  decimals?: number
  verified: boolean
  source?: string
}

export interface DoctorProfile {
  name: string
  prefix: string
  fullName: string
  credentials: string
  degrees: {
    degree: string
    institution: string
    year?: string
  }[]
  title: string
  shortBio: string
  fullBio: string[]
  photo: string
  phone: string
  whatsapp: string
  email: string
  yearsExperience: number
  surgeriesCount: number
  specializations: string[]
  keyProcedures: string[]
  memberships: string[]
  stats: DoctorStat[]
  affiliatedHospitals: AffiliatedHospital[]
  philosophy: string
}

export type TreatmentCategory =
  | 'stone'
  | 'prostate'
  | 'laparoscopy'
  | 'andrology'
  | 'transplant'
  | 'pediatric-female'

export interface ProcedureStep {
  name: string
  description: string
  isMinimallyInvasive: boolean
}

export interface RecoveryStep {
  day: string
  milestone: string
}

export interface FAQ {
  question: string
  answer: string
  category?: string
}

export interface TreatmentImage {
  src: string
  alt: string
  width: number
  height: number
}

export interface Treatment {
  id: string
  slug: string
  title: string
  shortDescription: string
  icon: string
  category: TreatmentCategory
  symptoms: string[]
  causes: string[]
  procedures: ProcedureStep[]
  recovery: RecoveryStep[]
  faqs: FAQ[]
  seoKeywords: string[]
  isFeatured: boolean
  isLaser: boolean
  image?: TreatmentImage
  overview?: string[]
}

export interface Testimonial {
  id: string
  patientName: string
  procedure: string
  hospitalArea: string
  quote: string
  rating: number
  date: string
  isFeature: boolean
  /** true only when written patient consent is on file */
  verified: boolean
  source?: string
}

export interface VideoTestimonial {
  id: string
  patientName: string
  procedure: string
  thumbnailUrl: string
  videoUrl?: string
  summary: string
}

export interface TechnologyHighlight {
  title: string
  subtitle: string
  description: string
  benefit: string
  icon: string
}

export interface NavItem {
  label: string
  href: string
}

