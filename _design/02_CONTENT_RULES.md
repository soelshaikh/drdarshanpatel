# Content rules

- Plain English a 14-year-old understands. Headlines <= 10 words. Paragraphs <= 3 sentences. Reading grade <= 8.
- Local context: Ahmedabad, Gujarat, named hospitals/areas. Gujarati labels may be added later via `lib/data` (not in JSX).
- Banned phrases: "dedicated team", "committed to excellence", "comprehensive care", "state-of-the-art" (say what the technology does), "Welcome to".
- Medical: no guarantees ("100% cure", "pain-free"), no before/after promises, no comparison claims ("best urologist"). Use "may", "typically", ranges, and "consult for your case".
- Every treatment page: what it is, who needs it, how it is done, recovery, risks, when to call, FAQ (3-6), CTA. Reviewed by the doctor before publishing.
- Statistics, awards, years, surgery counts, hospital list, timings, fees: store with `verified: boolean` and `source`. Render only `verified: true`. (Current unverified: "5,000+ surgeries", "99.2% success", "12+ years", Bapunagar/AIMS affiliation.)
- Testimonials: first name + procedure only, with written consent on file. No patient photos without consent.
- Emergency block: "Severe pain, cannot pass urine, blood in urine with fever: call now / go to the nearest emergency room."
- Disclaimer in footer: informational only, not a substitute for medical advice.
- No lorem ipsum, placeholders, or emojis anywhere.
