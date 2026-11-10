import React from 'react'
import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, disabled, ...props }, ref) => {
    const variantClasses = {
      primary: 'bg-teal-500 text-white hover:bg-teal-600 active:bg-teal-700',
      secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400',
    }

    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    }

    const disabledClasses = disabled ? 'bg-gray-300 text-gray-400 cursor-not-allowed hover:bg-gray-300' : ''

    const baseClasses = 'rounded-lg font-medium transition-colors focus:outline-teal-500 focus:outline-2 focus:outline-offset-2 min-h-11 min-w-11'

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={clsx(
          baseClasses,
          !disabled && variantClasses[variant],
          disabled && disabledClasses,
          sizeClasses[size],
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export default Button
