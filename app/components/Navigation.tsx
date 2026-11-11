'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

interface NavigationProps {
  currentPath?: string
  className?: string
}

const Navigation: React.FC<NavigationProps> = ({ currentPath, className }) => {
  const pathname = usePathname()
  const activePath = currentPath || pathname

  const navLinks = [
    { href: '/pricing', label: 'Pricing' },
    { href: '/features', label: 'Features' },
    { href: '/faq', label: 'FAQ' },
  ]

  return (
    <nav
      role="navigation"
      className={clsx(
        'bg-white',
        'border-b',
        'border-gray-200',
        'px-6',
        'py-4',
        'flex',
        'justify-between',
        'items-center',
        className
      )}
    >
      <Link href="/" className="text-2xl font-bold text-gray-900">
        PixText
      </Link>

      <div className="flex gap-8">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              'font-medium',
              'transition-colors',
              activePath === href ? 'text-teal-600' : 'text-gray-700 hover:text-gray-900'
            )}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
