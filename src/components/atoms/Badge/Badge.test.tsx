import { render, screen } from '@testing-library/react'

import { Badge } from './Badge'

describe('Components', () => {
  describe('Badge', () => {
    it('should render the value passed into', () => {
      render(<Badge>Test Badge</Badge>)

      const el = screen.getByText('Test Badge')

      expect(el).toBeInTheDocument()
    })
  })
})
