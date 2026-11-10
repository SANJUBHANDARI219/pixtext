import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '@/app/components/Button'

describe('Button', () => {
  it('renders primary button with correct styles', () => {
    render(<Button variant="primary">Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-teal-500')
    expect(button).toHaveClass('text-white')
  })

  it('renders secondary button with correct styles', () => {
    render(<Button variant="secondary">Secondary</Button>)
    const button = screen.getByRole('button', { name: /secondary/i })
    expect(button).toHaveClass('bg-gray-200')
    expect(button).toHaveClass('text-gray-900')
  })

  it('applies disabled styles when disabled', () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole('button', { name: /disabled/i })
    expect(button).toBeDisabled()
    expect(button).toHaveClass('bg-gray-300')
    expect(button).toHaveClass('text-gray-400')
  })

  it('has min 44x44px touch target', () => {
    render(<Button>Touch</Button>)
    const button = screen.getByRole('button', { name: /touch/i })
    expect(button).toHaveClass('min-h-11')
    expect(button).toHaveClass('min-w-11')
  })

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup()
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    await user.click(screen.getByRole('button', { name: /click/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders with focus state outline', () => {
    render(<Button>Focusable</Button>)
    const button = screen.getByRole('button', { name: /focusable/i })
    expect(button).toHaveClass('focus:outline-teal-500')
  })
})
