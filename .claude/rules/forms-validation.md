# Forms and Validation Rules - antd Form + Zod

## Stack
- **antd `Form`** (themed via ConfigProvider) for layout, labels, error display, and controls (`Input`, `Select`, `DatePicker`, `Checkbox`).
- **Zod** is the single validation schema, used on the client and again in the server action/route handler.
- React Hook Form is installed but not required; do not mix it with antd `Form` in one form. Query the antd MCP (`antd info Form`, `antd demo`) before building.
- Radix controls and `react-day-picker` are not used for forms; use antd `Select` and `DatePicker`.

## Schema (shared)
```ts
// lib/validation/booking.ts
import { z } from 'zod'

export const BookingSchema = z.object({
  name: z.string().trim().min(1, 'Enter your name').max(80),
  phone: z.string().trim().regex(/^(\+91[\s-]?)?[6-9]\d{9}$/, 'Enter a valid mobile number'),
  hospital: z.string().min(1, 'Choose a hospital'),
  date: z.string().min(1, 'Choose a preferred date'),
  concern: z.string().trim().max(500).optional(),
  consent: z.literal(true, { error: 'Please agree to be contacted' }),
})
export type BookingInput = z.infer<typeof BookingSchema>
```
Zod 4 syntax (`error:` option). Hospital options come from `lib/data` and include only `verified: true` hospitals.

## Client form
```tsx
'use client' // antd Form needs client state
import { Form, Input, Select, DatePicker, Checkbox } from 'antd'
import { createSchemaRule } from '@/lib/validation/antd-zod'

const rule = createSchemaRule(BookingSchema)

<Form<BookingInput> layout="vertical" onFinish={submit} requiredMark="optional">
  <Form.Item name="name" label="Full name" rules={[rule]}>
    <Input autoComplete="name" />
  </Form.Item>
  <Form.Item name="phone" label="Mobile number" rules={[rule]}>
    <Input type="tel" inputMode="tel" autoComplete="tel" />
  </Form.Item>
```
`createSchemaRule` is a small helper that validates one field with `schema.shape[name]` / `safeParse` and returns the message. Confirm Form/Rule props with the antd MCP before writing it.

## Server
The server action or route handler re-parses with `BookingSchema.safeParse`; never trust client validation. Return field errors, not stack traces. No PII in logs, no `console.log`. Rate-limit or honeypot against spam.

## UX and accessibility
- Visible `Form.Item` labels; placeholders never replace labels. Errors inline under the field (antd `help`), not in a toast that covers content.
- `type="tel"` / `inputMode` / `autoComplete` set per field; controls >= 44px; submit button full width on mobile.
- Date picker blocks past dates (`disabledDate`). Dropdowns must not be clipped on 375px (check `getPopupContainer`).
- Consent checkbox text states how contact will be used; privacy note next to the submit button.
- CTA labels are actions: "Request Appointment", sending state "Sending...". Never "Submit".
- Offer the WhatsApp alternative beside the form.
- Success state confirms what happens next ("We will call you to confirm") with no guarantee of a time slot.
- Do not collect more than needed; no medical history in the booking form.
