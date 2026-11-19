import type { Testimonial, VideoTestimonial } from '@/types'

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    patientName: 'Ramesh Patel',
    procedure: 'RIRS Laser Stone Removal (18mm)',
    hospitalArea: 'Saanvi Urology Hospital, Sola',
    quote:
      'I was in unbearable flank pain for three days. Dr. Darshan Patel diagnosed an 18mm renal stone and performed RIRS laser surgery. There was no cut, no stitch, and I was discharged the very next morning. His calm explanation removed all my fear.',
    rating: 5,
    date: '2025-01',
    isFeature: true,
    verified: false,
    source: 'Written consent not yet on file',
  },
  {
    id: 'test-2',
    patientName: 'Hareshbhai Shah',
    procedure: 'Bipolar Plasma TURP for Prostate (BPH)',
    hospitalArea: 'House of Surgeons, Paldi',
    quote:
      'Waking up 5-6 times every night to urinate had exhausted me completely. Dr. Darshan Patel advised laser prostate surgery. Within 48 hours of surgery, my catheter was removed, and I had crystal-clear, effortless urine flow like I was 30 years younger.',
    rating: 5,
    date: '2024-11',
    isFeature: true,
    verified: false,
    source: 'Written consent not yet on file',
  },
  {
    id: 'test-3',
    patientName: 'Jayanti Prajapati',
    procedure: 'Mini-PCNL for 28mm Staghorn Stone',
    hospitalArea: 'Sardar Hospital, Nikol',
    quote:
      'Other doctors recommended open surgery with a huge 8-inch cut. Dr. Darshan did Mini-PCNL with just a 5mm pin-hole. Zero pain, zero complications. He is truly a master surgeon who treats patients like family.',
    rating: 5,
    date: '2025-02',
    isFeature: true,
    verified: false,
    source: 'Written consent not yet on file',
  },
  {
    id: 'test-4',
    patientName: 'Ketan Trivedi',
    procedure: 'Laparoscopic Pyeloplasty',
    hospitalArea: 'AIMS Hospital, Paldi',
    quote:
      'Diagnosed with severe PUJ obstruction causing kidney swelling. Dr. Darshan performed keyhole laparoscopy. Scars are practically invisible and my kidney function tests returned to completely normal.',
    rating: 5,
    date: '2024-09',
    isFeature: false,
    verified: false,
    source: 'Written consent not yet on file',
  },
  {
    id: 'test-5',
    patientName: 'Mukesh Desai',
    procedure: 'Microsurgical Varicocele Repair',
    hospitalArea: 'Saanvi Urology Hospital, Sola',
    quote:
      'We had been trying to conceive for 3 years without success. Dr. Darshan’s gentle counseling and microsurgery brought about immense improvement in semen count within 4 months. We are blessed with a baby boy now.',
    rating: 5,
    date: '2024-12',
    isFeature: true,
    verified: false,
    source: 'Written consent not yet on file',
  },
]

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: 'vid-1',
    patientName: 'Mr. Arvindbhai Vaghela',
    procedure: 'Day-care Laser RIRS Surgery',
    thumbnailUrl: '/images/gallery/operating-theatre-team.png',
    summary: 'Walked in with acute renal colic at 8 AM, operated at 11 AM, walking comfortably by 4 PM.',
  },
  {
    id: 'vid-2',
    patientName: 'Mr. Chandrakant Mehta (72 yrs)',
    procedure: 'Laser Prostatectomy for Severe Retention',
    thumbnailUrl: '/images/gallery/doctor-hands-urinary-system-hologram.png',
    summary: 'Safe laser procedure under spinal anesthesia despite having a cardiac stent.',
  },
]

