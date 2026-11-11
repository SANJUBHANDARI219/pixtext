import React from 'react'
import clsx from 'clsx'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'teal' | 'gray'
  className?: string
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant = 'default', className }, ref) => {
    const variantClasses = {
      default: 'bg-gray-100 text-gray-700',
      teal: 'bg-teal-100 text-teal-700',
      gray: 'bg-gray-100 text-gray-700',
    }

    return (
      <span
        ref={ref}
        className={clsx(
          'text-xs',
          'font-medium',
          'px-2',
          'py-1',
          'rounded-sm',
          'inline-block',
          'tracking-wide',
          variantClasses[variant],
          className
        )}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
