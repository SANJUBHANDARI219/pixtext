import React from 'react'
import { render, screen } from '@testing-library/react'
import Navigation from '@/app/components/Navigation'

describe('Navigation', () => {
  it('renders navigation bar', () => {
    render(<Navigation />)
    expect(screen.getByText('PixText')).toBeInTheDocument()
  })

  it('renders nav links', () => {
    render(<Navigation />)
    expect(screen.getByRole('link', { name: /pricing/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /features/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /faq/i })).toBeInTheDocument()
  })

  it('has correct nav links href', () => {
    render(<Navigation />)
    expect(screen.getByRole('link', { name: /pricing/i })).toHaveAttribute('href', '/pricing')
    expect(screen.getByRole('link', { name: /features/i })).toHaveAttribute('href', '/features')
    expect(screen.getByRole('link', { name: /faq/i })).toHaveAttribute('href', '/faq')
  })

  it('marks active link when currentPath matches', () => {
    render(<Navigation currentPath="/pricing" />)
    const pricingLink = screen.getByRole('link', { name: /pricing/i })
    expect(pricingLink).toHaveClass('text-teal-600')
  })

  it('renders with proper navigation styling', () => {
    render(<Navigation />)
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveClass('bg-white')
    expect(nav).toHaveClass('border-b')
    expect(nav).toHaveClass('border-gray-200')
  })
})
