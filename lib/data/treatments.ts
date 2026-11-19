import type { Treatment } from '@/types'

export const treatments: Treatment[] = [
  {
    id: 'rirs-laser-surgery',
    slug: 'rirs-laser-surgery',
    title: 'RIRS — Laser Stone Surgery',
    shortDescription:
      'A thin flexible scope goes through the natural urinary passage to break kidney stones with a laser, usually without a cut on the skin.',
    icon: 'Sparkles',
    category: 'stone',
    isFeatured: true,
    isLaser: true,
    image: {
      src: '/images/gallery/ureteroscopy-endoscope-monitor.png',
      alt: 'Surgeon holding a flexible scope and watching the monitor during a kidney stone procedure',
      width: 800,
      height: 500,
    },
    overview: [
      'Retrograde Intrarenal Surgery (RIRS) is a minimally invasive way to treat kidney stones. A thin, flexible scope is passed through the urethra into the kidney, so there is usually no cut on the skin.',
      'A very thin laser fiber breaks the stone into small pieces. Small pieces and sand may pass out in the urine over time. Whether RIRS suits you depends on the size, number and position of your stones.',
    ],
    symptoms: [
      'Severe cramping pain in the side or back',
      'Blood in urine (hematuria)',
      'Nausea and vomiting during a pain attack',
      'Burning while passing urine or repeated urine infections',
    ],
    causes: [
      'Not drinking enough water, which is common in hot climates like Gujarat',
      'A diet high in salt, animal protein or oxalate-rich foods',
      'High calcium or high uric acid levels in the body',
      'Family history or a urine passage that does not drain well',
    ],
    procedures: [
      {
        name: 'Entry Through the Natural Passage',
        description: 'A flexible scope is passed through the urinary passage, usually without a cut or puncture.',
        isMinimallyInvasive: true,
      },
      {
        name: 'Laser Stone Breaking',
        description: 'A Holmium laser breaks the stone into small pieces and sand.',
        isMinimallyInvasive: true,
      },
      {
        name: 'Temporary DJ Stent',
        description: 'A thin stent is often placed for a short time, commonly a week or two, to help urine drain. Your doctor will decide if you need one.',
        isMinimallyInvasive: true,
      },
    ],
    recovery: [
      { day: 'Day 1', milestone: 'Many people walk a few hours after surgery. Some go home the same day or the next day, but this varies by person.' },
      { day: 'First few days', milestone: 'Many people return to light daily routine and desk work when they feel ready. Your doctor will advise you.' },
      { day: 'Around 1-2 weeks', milestone: 'If a stent was placed, it is usually removed in the clinic around this time. Your doctor will decide the date.' },
    ],
    seoKeywords: [
      'RIRS surgery Ahmedabad',
      'laser kidney stone surgery',
      'laser stone specialist Ahmedabad',
      'Dr Darshan Patel RIRS',
    ],
    faqs: [
      {
        question: 'Does RIRS need a cut on the skin?',
        answer: 'Usually not. The scope is passed through the natural urinary passage, so there are normally no skin cuts or stitches. Your doctor will explain what to expect in your case.',
      },
      {
        question: 'When can I return to work after RIRS?',
        answer: 'Many people return to light work within a few days. It varies from person to person, and your doctor will advise you.',
      },
    ],
  },
  {
    id: 'mini-pcnl',
    slug: 'mini-pcnl',
    title: 'Mini-PCNL for Large Kidney Stones',
    shortDescription:
      'A small keyhole entry through the back to remove large kidney stones, including staghorn stones. Suitability depends on your case.',
    icon: 'Activity',
    category: 'stone',
    isFeatured: true,
    isLaser: true,
    image: {
      src: '/images/gallery/kidney-stones-labelled-diagram.png',
      alt: 'Mini PCNL Kidney Stone Treatment Ahmedabad',
      width: 800,
      height: 500,
    },
    overview: [
      'Percutaneous Nephrolithotomy (PCNL) is a well-established treatment for large kidney stones, or for staghorn stones that fill several parts of the kidney.',
      'Mini-PCNL uses a smaller tunnel than standard PCNL, often around 4-5 mm. A smaller tunnel may mean less bleeding and less pain for some people. Your doctor will tell you if it is right for you.',
    ],
    symptoms: [
      'Dull, long-lasting ache in the lower back or sides',
      'Repeated fever, chills and cloudy urine',
      'Swelling of the kidney (hydronephrosis)',
    ],
    causes: [
      'A kidney stone left untreated that grows over the years',
      'Repeated urine infections that can lead to infection-related stones',
    ],
    procedures: [
      {
        name: 'Imaging-Guided Needle Entry',
        description: 'A needle is guided into the kidney using imaging, aiming to avoid blood vessels.',
        isMinimallyInvasive: true,
      },
      {
        name: 'Small Tunnel Widening',
        description: 'A narrow tunnel of about 4-5 mm is widened gently under X-ray guidance.',
        isMinimallyInvasive: true,
      },
      {
        name: 'Laser and Stone Removal',
        description: 'The stone is broken with a laser or other tools, and pieces are removed. Sometimes a second step is needed.',
        isMinimallyInvasive: true,
      },
    ],
    recovery: [
      { day: 'Day 1', milestone: 'Many people start to move around and take light fluids or food, as advised by the doctor.' },
      { day: 'Day 2 onwards', milestone: 'Tubes are removed when your doctor feels it is safe. Hospital stay is usually a few days and varies by person.' },
      { day: 'Around 1-2 weeks', milestone: 'Many people slowly return to normal activity. Your doctor will tell you when to start heavier work.' },
    ],
    seoKeywords: [
      'Mini PCNL surgery Ahmedabad',
      'staghorn stone specialist',
      'complex kidney stone surgery Gujarat',
    ],
    faqs: [
      {
        question: 'What is the difference between standard PCNL and Mini-PCNL?',
        answer: 'Standard PCNL uses a larger tunnel into the kidney. Mini-PCNL uses a smaller one, often around 4-5 mm. A smaller tunnel may mean less bleeding and pain for some people, but the best choice depends on your stone.',
      },
    ],
  },
  {
    id: 'laser-prostate-bph',
    slug: 'laser-prostate-bph',
    title: 'Laser Prostate Surgery (BPH)',
    shortDescription:
      'Surgery through the urinary passage to relieve urine blockage from an enlarged prostate (BPH), using laser or bipolar energy.',
    icon: 'Shield',
    category: 'prostate',
    isFeatured: true,
    isLaser: true,
    image: {
      src: '/images/gallery/enlarged-prostate-resectoscope-diagram.png',
      alt: 'Prostate Laser Treatment Ahmedabad',
      width: 800,
      height: 500,
    },
    overview: [
      'Benign Prostatic Hyperplasia (BPH) is a common problem in older men. The prostate grows bigger and can cause a weak stream, waking up at night to pass urine, and a strong urge to go.',
      'Surgery removes the part of the prostate that blocks urine. It is done through the urine passage, usually with no cut on the skin. Bleeding is often less than with older methods but can still happen, so your doctor checks your heart and medicines first.',
    ],
    symptoms: [
      'Waking up several times at night to pass urine',
      'Weak, slow or stop-start urine stream',
      'Sudden strong urge to pass urine',
      'Feeling the bladder is not empty, or suddenly being unable to pass urine',
    ],
    causes: [
      'Hormone changes that come with age',
      'Family history, since prostate growth can run in families',
    ],
    procedures: [
      {
        name: 'Entry Through the Urinary Passage',
        description: 'No skin cut. A thin scope is passed through the natural urinary passage.',
        isMinimallyInvasive: true,
      },
      {
        name: 'Plasma or Laser Removal',
        description: 'The prostate tissue that blocks urine is cleared using bipolar energy or a laser.',
        isMinimallyInvasive: true,
      },
      {
        name: 'Short-Term Catheter',
        description: 'A catheter is usually kept for a short time, often a day or two or more, until the urine is clear. Your doctor will decide.',
        isMinimallyInvasive: true,
      },
    ],
    recovery: [
      { day: 'Day 1-2', milestone: 'The catheter is often removed in the first few days, once the urine looks clear. This varies by person.' },
      { day: 'First few days', milestone: 'Many people go home within a few days and move around the house. Your doctor will advise you.' },
      { day: 'Around 2 weeks', milestone: 'Many people slowly return to routine activity, avoiding heavy lifting and straining until the doctor says it is fine.' },
    ],
    seoKeywords: [
      'prostate laser surgery Ahmedabad',
      'TURP surgeon Ahmedabad',
      'BPH specialist Dr Darshan Patel',
      'enlarged prostate treatment',
    ],
    faqs: [
      {
        question: 'Does prostate surgery affect sex life?',
        answer: 'Prostate surgery can affect sex life. Some men notice less semen during climax, and a few have changes in erections. Ask your doctor what to expect in your case.',
      },
    ],
  },
  {
    id: 'laparoscopic-urology',
    slug: 'laparoscopic-urology',
    title: 'Laparoscopic (Keyhole) Urology Surgery',
    shortDescription:
      'Keyhole surgery for conditions such as kidney blockage (pyeloplasty), kidney tumors (nephrectomy) and some adrenal problems.',
    icon: 'Maximize2',
    category: 'laparoscopy',
    isFeatured: true,
    isLaser: false,
    image: {
      src: '/images/gallery/laparoscopic-surgery.png',
      alt: 'Laparoscopic Urological Surgery Ahmedabad',
      width: 800,
      height: 500,
    },
    overview: [
      'Laparoscopic surgery uses a few small cuts instead of one long cut. A camera and thin tools are passed through these cuts.',
      'Dr. Darshan Patel performs laparoscopic pyeloplasty for a blocked kidney outlet (PUJ obstruction), laparoscopic nephrectomy for kidney masses, and laparoscopic ureteral reimplantation. Keyhole surgery may mean less pain and faster healing for many people, but not every case can be done this way.',
    ],
    symptoms: [
      'Swelling of the kidney (hydronephrosis)',
      'A lump in the side, or repeated belly or flank pain',
      'A kidney growth found by chance on ultrasound or CT scan',
    ],
    causes: [
      'A blocked kidney outlet (PUJ obstruction) present from birth, sometimes due to a blood vessel crossing it',
      'Kidney tumors or other growths in the kidney',
    ],
    procedures: [
      {
        name: 'Small Cuts for Ports',
        description: 'A few small ports are placed in the belly while the surgeon watches on screen.',
        isMinimallyInvasive: true,
      },
      {
        name: 'Magnified Camera View',
        description: 'A high-definition camera gives the surgeon a magnified view of the organs.',
        isMinimallyInvasive: true,
      },
      {
        name: 'Fine Stitching',
        description: 'Where needed, the urinary tract is repaired with fine stitches.',
        isMinimallyInvasive: true,
      },
    ],
    recovery: [
      { day: 'Day 1', milestone: 'Many people are helped to sit up and take liquids, as advised by the doctor.' },
      { day: 'First few days', milestone: 'Drains and tubes are removed when the doctor feels it is safe. Hospital stay varies by person and by surgery.' },
      { day: 'Around 2 weeks or more', milestone: 'Many people slowly return to work. Your doctor will advise you based on your surgery.' },
    ],
    seoKeywords: [
      'laparoscopic pyeloplasty Ahmedabad',
      'laparoscopic nephrectomy',
      'keyhole urology surgeon Ahmedabad',
    ],
    faqs: [
      {
        question: 'Why might keyhole surgery be chosen over open surgery?',
        answer: 'Keyhole surgery often causes less pain, smaller scars and a shorter hospital stay than open surgery. It is not right for everyone, and your doctor will advise the best option for you.',
      },
    ],
  },
  {
    id: 'male-infertility-andrology',
    slug: 'male-infertility-andrology',
    title: 'Men’s Sexual Health and Fertility',
    shortDescription:
      'Private consultation and care for erectile problems, varicocele, male infertility and related sexual health concerns.',
    icon: 'HeartHandshake',
    category: 'andrology',
    isFeatured: false,
    isLaser: false,
    image: {
      src: '/images/gallery/male-infertility-types-diagram.png',
      alt: 'Male Infertility Andrology Ahmedabad',
      width: 800,
      height: 500,
    },
    overview: [
      'Many men feel shy about sexual health and fertility problems. Care here is meant to be private, respectful and without judgment.',
      'Dr. Darshan Patel treats conditions such as varicocele (including microsurgical repair), low or absent sperm count (including Micro-TESE in selected cases) and severe erectile dysfunction (including penile implants in selected cases). The right option depends on tests and on your case.',
    ],
    symptoms: [
      'Not being able to conceive after 12 months of trying',
      'A dull ache in the scrotum or visible enlarged veins (varicocele)',
      'Trouble getting or keeping an erection',
      'Premature ejaculation or worry about sexual performance',
    ],
    causes: [
      'Faulty valves in the veins of the testicle, which let blood pool',
      'Hormone problems such as low testosterone',
      'Poor blood flow linked to diabetes, high blood pressure or smoking',
    ],
    procedures: [
      {
        name: 'Ultrasound and Semen Tests',
        description: 'Semen analysis and a scrotal ultrasound help find the cause of the problem.',
        isMinimallyInvasive: true,
      },
      {
        name: 'Microsurgical Varicocele Repair',
        description: 'An operating microscope is used to tie the abnormal veins while trying to protect the nearby arteries and lymph channels.',
        isMinimallyInvasive: true,
      },
    ],
    recovery: [
      { day: 'Day 1', milestone: 'Varicocele surgery is often done as a day-care procedure. Some people may need to stay longer. Your doctor will advise you.' },
      { day: 'First few days', milestone: 'Many people return to light desk work when they feel ready.' },
      { day: 'Around 4 weeks', milestone: 'Many people slowly return to sex and heavy lifting. Your doctor will tell you when it is safe for you.' },
    ],
    seoKeywords: [
      'andrologist Ahmedabad',
      'male infertility doctor Ahmedabad',
      'erectile dysfunction treatment Dr Darshan Patel',
      'varicocele surgery Ahmedabad',
    ],
    faqs: [
      {
        question: 'Is my consultation private?',
        answer: 'Your health details are treated as private. If you have any concern, please ask the clinic about privacy before your visit.',
      },
    ],
  },
  {
    id: 'kidney-transplant-care',
    slug: 'kidney-transplant-care',
    title: 'Kidney Transplant Care',
    shortDescription:
      'Surgical care for kidney donors and for people receiving a kidney, along with follow-up care after transplant.',
    icon: 'Layers',
    category: 'transplant',
    isFeatured: false,
    isLaser: false,
    image: {
      src: '/images/gallery/kidney-in-gloved-hand.png',
      alt: 'Kidney Transplant Surgeon Ahmedabad Dr Darshan Patel',
      width: 800,
      height: 500,
    },
    overview: [
      'Kidney transplant is a treatment for people whose kidneys have stopped working well. It needs a careful check of both the donor and the person receiving the kidney.',
      'Dr. Darshan Patel is involved in keyhole removal of a kidney from a living donor and in the surgery for the person receiving it. Whether transplant is right for you depends on your health and your tests.',
    ],
    symptoms: [
      'End-stage kidney disease (ESRD) needing regular dialysis',
      'Severe tiredness, swelling from extra fluid and imbalance of body salts',
    ],
    causes: [
      'Kidney damage from diabetes',
      'Long-term high blood pressure that is not controlled',
      'Long-term kidney inflammation (glomerulonephritis) or polycystic kidney disease',
    ],
    procedures: [
      {
        name: 'Keyhole Donor Kidney Removal',
        description: 'The donor kidney is removed using keyhole surgery, which may help the donor recover sooner.',
        isMinimallyInvasive: true,
      },
      {
        name: 'Joining the New Kidney',
        description: 'The surgeon joins the artery and vein of the new kidney to blood vessels in the lower belly.',
        isMinimallyInvasive: false,
      },
    ],
    recovery: [
      { day: 'Donor, first days', milestone: 'Many donors go home within a few days. This varies by person, and your doctor will advise you.' },
      { day: 'Recipient, first weeks', milestone: 'Kidney tests are checked often, and long-term medicines are started and adjusted by the transplant team as needed.' },
    ],
    seoKeywords: [
      'kidney transplant surgeon Ahmedabad',
      'donor nephrectomy specialist',
      'renal transplant doctor Gujarat',
    ],
    faqs: [
      {
        question: 'Can a kidney donor live a normal life?',
        answer: 'Many healthy donors live well with one kidney after careful checks. Donors need regular follow-up, and your doctor will explain the risks.',
      },
    ],
  },
]

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug)
}
