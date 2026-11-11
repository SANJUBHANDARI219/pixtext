import React from 'react'
import Link from 'next/link'
import Button from './Button'
import clsx from 'clsx'

interface HeroProps {
  title: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  className?: string
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaHref,
  className,
}) => {
  return (
    <section
      className={clsx(
        'py-24',
        'px-6',
        'text-center',
        'bg-gradient-to-b',
        'from-white',
        'to-gray-50',
        className
      )}
    >
      <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
        {title}
      </h1>

      {subtitle && (
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}

      {ctaText && ctaHref && (
        <Link href={ctaHref}>
          <Button variant="primary" size="lg">
            {ctaText}
          </Button>
        </Link>
      )}
    </section>
  )
}

export default Hero
