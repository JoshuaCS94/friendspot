import { render, screen } from '@testing-library/react'

import { Dialog } from './Dialog'

describe('Components', () => {
  describe('Dialog', () => {
    it('should show the dialog if "open" is true', () => {
      render(<Dialog open onClose={() => {}} />)

      const el = screen.queryByRole('dialog')

      expect(el).toBeDefined()
      expect(el).toBeVisible()
    })

    it('should not show the dialog if "open" is false', () => {
      render(<Dialog open={false} onClose={() => {}} />)

      const el = screen.queryByRole('dialog')

      expect(el).toBeNull()
    })
  })
})
