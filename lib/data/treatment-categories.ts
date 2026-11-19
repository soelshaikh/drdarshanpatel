import type { TreatmentCategory } from '@/types'

export const categoryLabel: Record<TreatmentCategory, string> = {
  stone: 'Kidney stones',
  prostate: 'Prostate',
  laparoscopy: 'Keyhole surgery',
  andrology: 'Men’s health',
  transplant: 'Kidney transplant',
  'pediatric-female': 'Women and children',
}

export const categoryOrder: TreatmentCategory[] = [
  'stone',
  'prostate',
  'laparoscopy',
  'andrology',
  'transplant',
  'pediatric-female',
]

/** One plain-English line per group. Hedged: no promises about outcomes. */
export const categoryIntro: Record<TreatmentCategory, string> = {
  stone: 'Stones in the kidney or urine tube can cause sharp pain and blood in urine. Treatment depends on the size and place of the stone.',
  prostate: 'An enlarged prostate can slow the urine stream and wake you at night. Medicine, monitoring or surgery may be options.',
  laparoscopy: 'Surgery through small openings, using a camera, for selected kidney and urine-tube problems.',
  andrology: 'Care for sexual health and fertility problems in men, explained in private and in plain words.',
  transplant: 'Care before and after a kidney transplant, for patients and for people thinking of donating.',
  'pediatric-female': 'Urology care for women and children.',
}
