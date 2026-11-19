'use client' // @ant-design/icons is not marked as a client module; re-export so Server Components can use it

/**
 * Single entry point for icons. Server Components must import icons from here,
 * never from '@ant-design/icons' directly (it calls createContext and fails on the server).
 * Add icons to this list as needed.
 */
export {
  HeartOutlined,
  ExperimentOutlined,
  LeftOutlined,
  RightOutlined,
  ArrowRightOutlined,
  WhatsAppOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  MailOutlined,
  MenuOutlined,
  CloseOutlined,
  SafetyCertificateOutlined,
  MedicineBoxOutlined,
  ThunderboltOutlined,
  EyeOutlined,
  VideoCameraOutlined,
  SafetyOutlined,
  CheckCircleOutlined,
  WarningOutlined,
} from '@ant-design/icons'

interface PhoneOutlinedProps {
  className?: string
  'aria-hidden'?: boolean | 'true' | 'false'
}

/** Upright handset (the antd one is drawn tilted and reads as wrong). Same size behaviour as antd icons: 1em, currentColor. */
export function PhoneOutlined({ className, 'aria-hidden': ariaHidden }: PhoneOutlinedProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
      aria-hidden={ariaHidden ?? true}
      focusable='false'
    >
      <path d='M5 4h3.5l1.8 4.5-2.3 1.5a11 11 0 0 0 6 6l1.5-2.3L20 15.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z' />
    </svg>
  )
}
