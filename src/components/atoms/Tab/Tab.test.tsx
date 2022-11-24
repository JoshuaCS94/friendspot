import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Tab } from './Tab'

describe('Components', () => {
  describe('Tab', () => {
    it('should render the text passed into', () => {
      render(<Tab active>Test Tab</Tab>)

      const el = screen.getByRole('tab')

      expect(el).toBeInTheDocument()
      expect(el).toHaveTextContent('Test Tab')
    })

    it('should call handler of "onClick" event only once', () => {
      const handleClick = jest.fn()

      render(
        <Tab active onClick={handleClick}>
          Test Tab
        </Tab>
      )

      const el = screen.getByRole('tab')

      userEvent.click(el)

      expect(handleClick).toBeCalled()
      expect(handleClick).toBeCalledTimes(1)
    })
  })
})
