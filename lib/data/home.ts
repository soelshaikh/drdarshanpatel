/**
 * Homepage copy. No numeric claims here: statistics live in doctor.ts with verified flags.
 * Rules: headlines <= 10 words, paragraphs <= 3 sentences, hedged medical language.
 */
export const hero = {
  eyebrow: 'Urologist and laser surgeon, Ahmedabad',
  title: 'Kidney stone and prostate care, explained clearly.',
  intro:
    'Dr. Darshan Patel treats kidney stones, prostate problems and men’s health. You get a clear plan in simple words before any procedure.',
  chips: [
    { label: 'Laser stone surgery (RIRS)', position: '-left-3 top-[10%] sm:-left-6' },
    { label: 'Prostate (BPH) care', position: '-right-3 top-[58%] sm:-right-6' },
    { label: 'Kidney transplant', position: '-left-3 bottom-[10%] sm:-left-6' },
  ],
} as const

export const sections = {
  treatments: {
    eyebrow: 'Treatments',
    title: 'Care for the most common urology problems',
    intro: 'Tap a treatment to see who it is for, how it works and what recovery looks like.',
  },
  why: {
    eyebrow: 'How consultations work',
    title: 'You understand your options before you decide',
  },
  hospitals: {
    eyebrow: 'Where to meet the doctor',
    title: 'Find a hospital and day that suits you',
    intro: 'Please confirm the day before you travel. Timings can change.',
  },
  technology: {
    eyebrow: 'Technology',
    title: 'Tools used for modern urology',
    intro: 'Technology helps the doctor see clearly and treat through smaller openings. The right choice depends on your case.',
  },
  testimonials: {
    eyebrow: 'Patient stories',
    title: 'What patients say about their care',
  },
  faq: {
    eyebrow: 'Questions',
    title: 'Answers before you visit',
    intro: 'Short answers to what patients ask most often about booking, procedures and costs.',
    helpTitle: 'Have a different question?',
    helpText: 'Call or message the clinic. For severe pain or if you cannot pass urine, go to an emergency room.',
  },
  atWork: {
    eyebrow: 'In practice',
    title: 'How Dr. Patel works with patients',
  },
  doctor: {
    eyebrow: 'Your doctor',
    title: 'Meet Dr. Darshan Patel',
  },
} as const

export const whyPoints = [
  {
    title: 'Plain explanation first',
    text: 'Your scan and reports are explained in simple words, so you know what is happening.',
    icon: 'eye',
  },
  {
    title: 'Options, not pressure',
    text: 'When medicine or monitoring is enough, you are told. Surgery is discussed when it may help.',
    icon: 'safety',
  },
  {
    title: 'Less invasive where suitable',
    text: 'Where your case allows, techniques that use natural passages or small openings are discussed.',
    icon: 'medicine',
  },
] as const

export const technology = [
  {
    title: 'Holmium laser',
    category: 'Stone treatment',
    description: 'A laser fibre breaks kidney and ureter stones into small pieces that can pass out.',
    icon: 'thunder',
  },
  {
    title: 'Flexible ureteroscope',
    category: 'RIRS',
    description: 'A thin, steerable digital scope reaches the kidney through the urine passage, usually without a skin cut.',
    icon: 'eye',
  },
  {
    title: 'Laparoscopy',
    category: 'Keyhole surgery',
    description: 'A camera and small instruments are used through tiny openings for selected kidney and bladder surgeries.',
    icon: 'video',
  },
  {
    title: 'Bipolar and laser prostate surgery',
    category: 'Prostate care',
    description: 'Used to relieve urine blockage from an enlarged prostate in suitable patients.',
    icon: 'safety',
  },
] as const

export const finalCta = {
  title: 'Ready to book a consultation?',
  text: 'Choose a hospital and time that suits you. We will confirm by phone or WhatsApp.',
} as const

export const aboutCopy = {
  intro:
    'Dr. Darshan Patel is a urologist and laser kidney stone surgeon in Ahmedabad. He treats kidney stones, prostate problems, men’s health conditions and kidney transplant care.',
  approach:
    'He explains your reports in plain words, and discusses every reasonable option with you.',
} as const

export const conditionsCopy = {
  intro:
    'Not sure what your symptoms mean? These are common signs seen in each area of urology. Only an examination can tell you the cause.',
  warning: 'See a doctor soon if symptoms last more than a few days. Go to an emergency room for severe pain, cannot pass urine, or blood in urine with fever.',
} as const

/** Shown on every treatment page. Generic by design; procedure-specific risks need the doctor's review. */
export const treatmentSafety = {
  risksTitle: 'Risks',
  risks:
    'Every procedure has risks, such as infection, bleeding or needing a second procedure. Your doctor will explain the risks for your own case before you decide.',
  callTitle: 'When to get help quickly',
  call: 'Go to an emergency room, or call the clinic, if you have fever with shivering, severe pain, heavy bleeding or you cannot pass urine after treatment.',
} as const
