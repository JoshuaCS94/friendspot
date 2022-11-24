import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { UserCard } from './UserCard'

const TAGS = ['At work', 'Enjoying life', 'Active']
const IMG = 'https://randomuser.me/api/portraits/men/1.jpg'
const NAME = 'Jeremy Davis'

describe('Components', () => {
  describe('UserCard', () => {
    it('should render the card with the 4 tags, avatar, name, availability and details button', () => {
      render(<UserCard name={NAME} tags={TAGS} image={IMG} available />)

      const name = screen.getByText(NAME)
      const img = screen.getByAltText('user-picture')
      const available = screen.getByRole('status')
      const tags = screen.getByTitle('tags').children
      const btn = screen.getByRole('button')

      expect(name).toBeInTheDocument()
      expect(available).toBeInTheDocument()
      expect(img).toBeInTheDocument()
      expect(btn).toBeInTheDocument()
      expect(btn).toHaveTextContent('Details')

      for (let i = 0; i < tags.length; i++)
        expect(tags.item(i)).toHaveTextContent(TAGS[i])
    })

    it('should call handler after clicking the details button', () => {
      const handleSeeDetails = jest.fn()

      render(
        <UserCard
          name={NAME}
          tags={TAGS}
          image={IMG}
          available
          onSeeDetails={handleSeeDetails}
        />
      )

      const btn = screen.getByRole('button')

      userEvent.click(btn)

      expect(handleSeeDetails).toHaveBeenCalledTimes(1)
    })
  })
})
