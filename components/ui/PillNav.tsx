'use client' // needs usePathname for the active pill

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export interface NavItem {
  label: string
  href: string
}

interface PillNavProps {
  items: NavItem[]
  className?: string
}

export function PillNav({ items, className }: PillNavProps) {
  const pathname = usePathname()
  return (
    <nav aria-label="Primary" className={cn('glass flex items-center gap-1 rounded-full p-1.5', className)}>
      {items.map((item) => {
        const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? 'page' : undefined}
            className={cn(
              'inline-flex min-h-11 items-center rounded-full px-4 text-[15px] font-medium transition-colors duration-[var(--duration-interact)]',
              'focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary-hover',
              active ? 'bg-primary text-text-on-primary' : 'text-text-mid hover:text-text-hi',
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
