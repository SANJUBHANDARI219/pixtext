import React from 'react'
import clsx from 'clsx'

interface CardProps {
  children: React.ReactNode
  className?: string
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'bg-white',
          'border',
          'border-gray-200',
          'rounded-lg',
          'p-6',
          'shadow-md',
          'hover:shadow-lg',
          'transition-shadow',
          className
        )}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
