/** Page-level copy for inner pages. Keep wording plain English and hedged (see _design/02_CONTENT_RULES.md). */

export const ctaLabels = {
  book: 'Book Appointment',
  call: 'Call Now',
  whatsapp: 'Open WhatsApp',
  seeTreatments: 'See treatments',
} as const

export const pageCopy = {
  about: {
    metaTitle: 'About Dr. Darshan Patel',
    metaDescription:
      'Dr. Darshan Patel, urologist in Ahmedabad. Qualifications, areas of practice and how he works with patients.',
    eyebrow: 'About',
    crumb: 'About',
    approachTitle: 'How he works with patients',
    qualificationsTitle: 'Qualifications',
    practiceTitle: 'Areas of practice',
    proceduresTitle: 'Procedures performed',
    membershipsTitle: 'Professional memberships',
  },
  book: {
    metaTitle: 'Book an Appointment',
    metaDescription:
      'Request a consultation with Dr. Darshan Patel, urologist in Ahmedabad. Choose a hospital and date, or call or WhatsApp the clinic.',
    eyebrow: 'Appointments',
    title: 'Book a consultation',
    intro: 'Tell us when and where. The clinic will confirm your time by phone or WhatsApp.',
    crumb: 'Book',
    formLabel: 'Booking form',
    talkTitle: 'Prefer to talk?',
    talkText: 'Call the clinic directly.',
  },
  contact: {
    metaTitle: 'Contact',
    metaDescription: 'Call, WhatsApp or email Dr. Darshan Patel’s clinic in Ahmedabad, or book an appointment online.',
    eyebrow: 'Contact',
    title: 'Talk to the clinic',
    intro: 'The fastest way to reach us is by phone or WhatsApp.',
    crumb: 'Contact',
    callTitle: 'Call',
    whatsappTitle: 'WhatsApp',
    whatsappText: 'Send a message any time.',
    emailTitle: 'Email',
    emailAction: 'Send email',
    appointmentTitle: 'Appointment',
    appointmentText: 'Pick a hospital and date.',
    emergencyLabel: 'Emergency: ',
  },
  hospitals: {
    metaTitle: 'Hospitals and Timings',
    metaDescription:
      'Where to consult Dr. Darshan Patel in Ahmedabad: hospitals, consultation days, timings, addresses and phone numbers.',
    eyebrow: 'Hospitals',
    title: 'Find a hospital and day that suits you',
    intro: 'Please confirm the day before you travel, as timings can change.',
    crumb: 'Hospitals',
  },
  treatments: {
    metaTitle: 'Treatments',
    metaDescription:
      'Urology treatments by Dr. Darshan Patel in Ahmedabad: kidney stones (RIRS, Mini-PCNL), prostate (BPH), keyhole surgery, men’s health and kidney transplant.',
    eyebrow: 'Treatments',
    title: 'Urology treatments, explained',
    intro: 'Choose a treatment to see who it is for, how it works and what recovery looks like.',
    crumb: 'Treatments',
    jumpLabel: 'Treatment groups',
    countOne: 'treatment',
    countMany: 'treatments',
    laserTag: 'Laser',
    cardAction: 'See who it is for',
    ctaTitle: 'Not sure which one you need?',
    ctaText: 'Book a consultation. The doctor will explain your options in simple words before you decide.',
  },
  notFound: {
    title: 'This page is not here',
    text: 'The link may be old. Go back home, see treatments, or book a consultation.',
    home: 'Back to home',
    treatments: 'Treatments',
  },
} as const
