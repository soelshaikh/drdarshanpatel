'use client' // scroll state, mobile drawer

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Drawer } from 'antd'
import { Button } from '@/components/ui/Button'
import { IconButton } from '@/components/ui/IconButton'
import { Logo } from '@/components/ui/Logo'
import { PillNav } from '@/components/ui/PillNav'
import { CloseOutlined, MenuOutlined, PhoneOutlined } from '@/components/ui/icons'
import { bookHref, contact, primaryNav } from '@/lib/data/site'
import { doctorData } from '@/lib/data/doctor'
import { cn } from '@/lib/utils'

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  // Drawer is open only for the path it was opened on, so navigating closes it without an effect
  const [openPath, setOpenPath] = useState<string | null>(null)
  const open = openPath === pathname
  const setOpen = (v: boolean) => setOpenPath(v ? pathname : null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={cn('fixed inset-x-0 top-0 z-[var(--z-sticky)] px-3 pt-3 sm:px-6', className)}>
      <div
        className={cn(
          'glass glass-tint mx-auto flex max-w-[1200px] items-center justify-between gap-4 rounded-full',
          'pl-3 pr-2 transition-[height] duration-[var(--duration-interact)] [transition-timing-function:var(--ease-interact)]',
          scrolled ? 'h-14' : 'h-16',
        )}
      >
        <Link
          href="/"
          aria-label={`${doctorData.fullName} - home`}
          className="flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary-hover"
        >
          <Logo />
          <span className="hidden leading-tight sm:block">
            <span className="block font-heading text-[15px] font-bold text-text-hi">{doctorData.fullName}</span>
            <span className="block text-xs text-text-lo">Urologist, Ahmedabad</span>
          </span>
        </Link>

        <PillNav items={primaryNav} className="hidden border-0 bg-transparent p-0 shadow-none lg:flex" />

        <div className="flex items-center gap-2">
          <IconButton label={`Call ${contact.phoneDisplay}`} href={contact.phoneHref} className="hidden sm:inline-flex">
            <PhoneOutlined />
          </IconButton>
          <Button href={bookHref} variant="glass" size="sm" className="hidden sm:inline-flex">
            Book Appointment
          </Button>
          <IconButton label="Open menu" onClick={() => setOpen(true)} className="lg:hidden">
            <MenuOutlined />
          </IconButton>
        </div>
      </div>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        placement="right"
        size="default"
        title={<span className="font-heading font-bold">Menu</span>}
        closeIcon={<CloseOutlined aria-label="Close menu" />}
        styles={{ body: { padding: 16 } }}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl px-4 py-3 text-lg font-medium text-text-hi hover:bg-glass-strong focus-visible:outline-2 focus-visible:outline-primary-hover"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-6 flex flex-col gap-3">
          <Button href={bookHref} size="lg">
            Book Appointment
          </Button>
          <Button href={contact.phoneHref} variant="glass" size="lg">
            <PhoneOutlined aria-hidden="true" /> {contact.phoneDisplay}
          </Button>
        </div>
      </Drawer>
    </header>
  )
}
