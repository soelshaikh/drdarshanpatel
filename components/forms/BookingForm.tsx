'use client' // antd Form state and WhatsApp hand-off

import { useState } from 'react'
import { Alert, DatePicker, Form, Input, Select } from 'antd'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { Button } from '@/components/ui/Button'
import { bookingSchema, dateMessage, normalisePhone, type BookingInput } from '@/lib/validation/booking'

interface HospitalOption {
  value: string
  label: string
}

interface BookingFormProps {
  hospitals: HospitalOption[]
  /** Digits only, with country code, e.g. 919099019151 */
  whatsappNumber: string
}

interface FormValues {
  name?: string
  phone?: string
  hospital?: string
  date?: Dayjs
  concern?: string
}

type FieldName = keyof BookingInput

/** Validates one field with the shared Zod schema so client and any future server action agree. */
function zodRule(field: FieldName) {
  return {
    validator: (_: unknown, value: unknown) => {
      const shape = bookingSchema.shape[field]
      // Untouched required fields arrive as undefined: validate them as empty text so the friendly message shows
      const input = value === undefined || value === null ? (field === 'concern' ? undefined : '') : String(value)
      const result = shape.safeParse(input)
      return result.success ? Promise.resolve() : Promise.reject(new Error(result.error.issues[0]?.message))
    },
  }
}

export function BookingForm({ hospitals, whatsappNumber }: BookingFormProps) {
  const [form] = Form.useForm<FormValues>()
  const [sent, setSent] = useState(false)

  function onFinish(values: FormValues) {
    const parsed = bookingSchema.safeParse({
      name: values.name ?? '',
      phone: values.phone ?? '',
      hospital: values.hospital ?? '',
      date: values.date ? values.date.format('DD MMM YYYY') : '',
      concern: values.concern,
    })
    if (!parsed.success) return
    const d = parsed.data
    const text = [
      'Hello Dr. Darshan Patel, I would like to book an appointment.',
      `Name: ${d.name}`,
      `Phone: ${normalisePhone(d.phone)}`,
      `Hospital: ${d.hospital}`,
      `Preferred date: ${d.date}`,
      d.concern ? `Concern: ${d.concern}` : null,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <Form<FormValues>
      form={form}
      layout="vertical"
      requiredMark={false}
      onFinish={onFinish}
      onValuesChange={() => sent && setSent(false)}
      autoComplete="on"
      size="large"
    >
      <Form.Item label="Your name" name="name" rules={[zodRule('name')]}>
        <Input placeholder="Full name" autoComplete="name" />
      </Form.Item>

      <Form.Item label="Mobile number" name="phone" rules={[zodRule('phone')]}>
        <Input placeholder="10-digit mobile number" type="tel" inputMode="tel" autoComplete="tel" />
      </Form.Item>

      <div className="grid gap-x-4 sm:grid-cols-2">
        <Form.Item label="Hospital" name="hospital" rules={[zodRule('hospital')]}>
          <Select placeholder="Choose a hospital" options={hospitals} />
        </Form.Item>
        <Form.Item
          label="Preferred date"
          name="date"
          rules={[{ required: true, message: dateMessage }]}
        >
          <DatePicker className="w-full" format="DD MMM YYYY" disabledDate={(d) => d.isBefore(dayjs(), 'day')} />
        </Form.Item>
      </div>

      <Form.Item label="What is bothering you? (optional)" name="concern" rules={[zodRule('concern')]}>
        <Input.TextArea rows={4} maxLength={400} showCount placeholder="For example: kidney stone pain for 3 days" />
      </Form.Item>

      {sent && (
        <Alert
          type="success"
          showIcon
          className="mb-4"
          message="Your message is ready in WhatsApp"
          description="Press send in WhatsApp to finish. The clinic will confirm your time by phone or WhatsApp."
        />
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Book on WhatsApp
      </Button>
      <p className="mt-4 text-sm text-text-lo">
        Your message opens in WhatsApp, so share only what you are comfortable with. For severe pain, or if you cannot pass urine, go to an emergency room. Do not wait for a booking.
      </p>
    </Form>
  )
}
