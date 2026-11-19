/** Owner-supplied photographs (WhatsApp export, 12 Nov 2026). All portrait orientation. */
export interface Photo {
  src: string
  alt: string
  width: number
  height: number
}

export const photos = {
  portraitFormal: {
    src: '/images/doctor/doctor-portrait-formal.jpg',
    alt: 'Dr. Darshan Patel, urologist, smiling in a grey blazer at his desk',
    width: 1066,
    height: 1600,
  },
  portraitClinic: {
    src: '/images/doctor/doctor-portrait-clinic.jpg',
    alt: 'Dr. Darshan Patel in dark scrubs at his clinic desk, with his degree certificates on the wall behind',
    width: 854,
    height: 1280,
  },
  consultationDesk: {
    src: '/images/doctor/doctor-consultation-desk.jpg',
    alt: 'Dr. Darshan Patel reviewing reports at his consultation desk',
    width: 960,
    height: 1280,
  },
  endoscopePortrait: {
    src: '/images/doctor/doctor-endoscope-portrait.jpg',
    alt: 'Dr. Darshan Patel in the operating theatre holding a flexible ureteroscope',
    width: 960,
    height: 1280,
  },
  endoscopeProfile: {
    src: '/images/doctor/doctor-endoscope-profile.jpg',
    alt: 'Dr. Darshan Patel in surgical gown holding a flexible ureteroscope',
    width: 960,
    height: 1280,
  },
  theatreDoctor: {
    src: '/images/doctor/operating-theatre-doctor.jpg',
    alt: 'Dr. Darshan Patel concentrating during a procedure in the operating theatre',
    width: 960,
    height: 1280,
  },
  theatreTeam: {
    src: '/images/doctor/operating-theatre-team.jpg',
    alt: 'Dr. Darshan Patel and the surgical team operating together',
    width: 960,
    height: 1280,
  },
} as const satisfies Record<string, Photo>

/** "At work" strip on the homepage. */
export const atWork: Photo[] = [photos.endoscopePortrait, photos.theatreTeam, photos.theatreDoctor]
