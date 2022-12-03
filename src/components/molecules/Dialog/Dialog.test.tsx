import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Dialog } from './Dialog'

describe('Components', () => {
  describe('Dialog', () => {
    it('should show the dialog if "open" is true', () => {
      render(<Dialog open onClose={() => {}} />)

      const dialog = screen.getByRole('dialog')

      expect(dialog).toBeVisible()
    })

    it('should not show the dialog if "open" is false', () => {
      render(<Dialog open={false} onClose={() => {}} />)

      const dialog = screen.queryByRole('dialog')

      expect(dialog).toBeNull()
    })

    it('should call the close callback when clicking the close button', () => {
      const handleClose = jest.fn()

      render(<Dialog open onClose={handleClose} />)

      const dialog = screen.getByRole('dialog')
      const button = within(dialog).getByRole('button')

      userEvent.click(button)

      expect(handleClose).toHaveBeenCalledTimes(1)
    })
  })
})
