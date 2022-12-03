import { render, screen } from '@testing-library/react'

import { AvailabilityIndicator } from './AvailabilityIndicator'

describe('Components', () => {
  describe('AvailabilityIndicator', () => {
    it('should render an indicator with proper role and title if available', () => {
      render(<AvailabilityIndicator available />)

      const el = screen.getByRole('status')

      expect(el).toBeInTheDocument()
      expect(el).toHaveAttribute('title', 'availability')
    })

    it('should render an indicator with proper role and title if not available', () => {
      render(<AvailabilityIndicator available={false} />)

      const el = screen.getByRole('status')

      expect(el).toBeInTheDocument()
      expect(el).toHaveAttribute('title', 'availability')
    })

    it('should render a green indicator if available', () => {
      render(<AvailabilityIndicator available />)

      const el = screen.getByRole('status')

      expect(el.className).toContain('bg-green-400')
    })

    it('should render a gray indicator if unavailable', () => {
      render(<AvailabilityIndicator available={false} />)

      const el = screen.getByRole('status')

      expect(el.className).toContain('bg-gray-400')
    })
  })
})
