import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ALL_FRIENDS } from '#mocks/data/friends'

import FriendsPage, { getStaticProps } from '../index.page'

const push = jest.fn()

jest.mock('next/router', () => ({
  useRouter: () => ({
    push,
  }),
}))

beforeEach(() => push.mockReset())

describe('Pages', () => {
  describe('friends/', () => {
    describe('getStaticProps', () => {
      it('should return the list of friends in the props', async () => {
        const props = await getStaticProps({})

        expect('props' in props).toBeTruthy()

        if ('props' in props) expect(props.props.friends).toEqual(ALL_FRIENDS)
      })
    })

    it('should render the list of friends', () => {
      render(<FriendsPage friends={ALL_FRIENDS} />)

      const friends = screen.getByTitle('friends').children

      expect(friends).toHaveLength(ALL_FRIENDS.length)
    })

    it('should navigate to details of the 2nd friend when clicking its button', () => {
      render(<FriendsPage friends={ALL_FRIENDS} />)

      const button = screen.getAllByRole('button')[1]

      userEvent.click(button)

      expect(push).toHaveBeenCalledTimes(1)
      expect(push).toHaveBeenCalledWith(`/friends/${ALL_FRIENDS[1].id}`)
    })
  })
})
