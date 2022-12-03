import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from './Button'

describe('Components', () => {
  describe('Button', () => {
    it('should render the value passed into', () => {
      render(<Button>Test Button</Button>)

      const el = screen.getByRole('button')

      expect(el).toBeInTheDocument()
      expect(el).toHaveTextContent('Test Button')
    })

    it('should be disabled', () => {
      render(<Button disabled>Disabled</Button>)

      const el = screen.getByRole('button')

      expect(el).toBeInTheDocument()
      expect(el).toHaveTextContent('Disabled')
      expect(el).toBeDisabled()
    })

    it('should be enabled', () => {
      render(<Button>Enabled</Button>)

      const el = screen.getByRole('button')

      expect(el).toBeInTheDocument()
      expect(el).toHaveTextContent('Enabled')
      expect(el).toBeEnabled()
    })

    it('should call handler of "onClick" event', () => {
      const handleClick = jest.fn()

      render(<Button onClick={handleClick}>Button</Button>)

      const el = screen.getByRole('button')

      userEvent.click(el)

      expect(handleClick).toBeCalled()
    })

    it('should call handler of "onClick" event only once', () => {
      const handleClick = jest.fn()

      render(<Button onClick={handleClick}>Button</Button>)

      const el = screen.getByRole('button')

      userEvent.click(el)

      expect(handleClick).toBeCalledTimes(1)
    })

    it('should not call handler of "onClick" event if disabled', () => {
      const handleClick = jest.fn()

      render(
        <Button disabled onClick={handleClick}>
          Button
        </Button>
      )

      const el = screen.getByRole('button')

      userEvent.click(el)

      expect(handleClick).toHaveBeenCalledTimes(0)
    })
  })
})
