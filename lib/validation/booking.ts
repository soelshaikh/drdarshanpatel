import { z } from 'zod'

/** Strip spaces, dashes and a leading +91 / 0 so we validate the 10-digit Indian mobile number. */
export function normalisePhone(raw: string): string {
  return raw.replace(/[\s-]/g, '').replace(/^(\+?91|0)/, '')
}

export const dateMessage = 'Please choose a preferred date'

export const bookingSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name').max(80, 'Name is too long'),
  phone: z
    .string()
    .transform(normalisePhone)
    .pipe(z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number')),
  hospital: z.string().min(1, 'Please choose a hospital'),
  date: z.string().min(1, dateMessage),
  concern: z.string().trim().max(400, 'Please keep this under 400 characters').optional(),
})

export type BookingInput = z.input<typeof bookingSchema>
export type BookingData = z.output<typeof bookingSchema>
