import React from 'react'
import { render, screen } from '@testing-library/react'
import Badge from '@/app/components/Badge'

describe('Badge', () => {
  it('renders default badge', () => {
    render(<Badge>Default</Badge>)
    const badge = screen.getByText('Default')
    expect(badge).toHaveClass('text-xs')
    expect(badge).toHaveClass('font-medium')
  })

  it('renders teal variant', () => {
    render(<Badge variant="teal">Teal</Badge>)
    const badge = screen.getByText('Teal')
    expect(badge).toHaveClass('bg-teal-100')
    expect(badge).toHaveClass('text-teal-700')
  })

  it('renders gray variant', () => {
    render(<Badge variant="gray">Gray</Badge>)
    const badge = screen.getByText('Gray')
    expect(badge).toHaveClass('bg-gray-100')
    expect(badge).toHaveClass('text-gray-700')
  })

  it('accepts custom className', () => {
    render(<Badge className="custom">Custom</Badge>)
    const badge = screen.getByText('Custom')
    expect(badge).toHaveClass('custom')
  })
})
