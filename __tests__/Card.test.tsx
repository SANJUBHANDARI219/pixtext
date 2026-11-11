import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from '@/app/components/Card'

describe('Card', () => {
  it('renders card with correct styles', () => {
    render(<Card>Card content</Card>)
    const card = screen.getByText('Card content').closest('div')
    expect(card).toHaveClass('bg-white')
    expect(card).toHaveClass('border')
    expect(card).toHaveClass('border-gray-200')
    expect(card).toHaveClass('rounded-lg')
    expect(card).toHaveClass('p-6')
    expect(card).toHaveClass('shadow-md')
  })

  it('accepts custom className', () => {
    render(<Card className="custom-class">Content</Card>)
    const card = screen.getByText('Content').closest('div')
    expect(card).toHaveClass('custom-class')
    expect(card).toHaveClass('bg-white')
  })

  it('renders children correctly', () => {
    render(
      <Card>
        <h2>Heading</h2>
        <p>Paragraph</p>
      </Card>
    )
    expect(screen.getByText('Heading')).toBeInTheDocument()
    expect(screen.getByText('Paragraph')).toBeInTheDocument()
  })
})
