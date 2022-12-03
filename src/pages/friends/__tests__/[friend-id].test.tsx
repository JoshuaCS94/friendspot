import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ALL_FRIENDS, FRIEND_DETAILS } from '#mocks/data/friends'

import FriendDetailsPage, {
  getStaticProps,
  getStaticPaths,
} from '../[friend-id].page'

const push = jest.fn()

jest.mock('next/router', () => ({
  useRouter: () => ({
    push,
  }),
}))

beforeEach(() => push.mockReset())

describe('Pages', () => {
  describe('friends/<id>', () => {
    describe('getStaticProps', () => {
      it('should return the details of the friend with ID 6 in the props', async () => {
        const props = await getStaticProps({ params: { 'friend-id': '6' } })

        expect('props' in props).toBeTruthy()

        if ('props' in props) expect(props.props.friend).toEqual(FRIEND_DETAILS)
      })
    })

    describe('getStaticPaths', () => {
      it('should generate one path for every friend', async () => {
        const { paths } = await getStaticPaths({})

        expect(paths).toBeTruthy()

        expect(paths).toHaveLength(ALL_FRIENDS.length)

        paths.forEach((p, i) => {
          expect(typeof p === 'object').toBeTruthy()
          if (typeof p === 'object')
            expect(p.params['friend-id']).toBe(ALL_FRIENDS[i].id.toString())
        })
      })
    })

    it('should render the friend details', () => {
      render(<FriendDetailsPage friend={FRIEND_DETAILS} />)
    })

    it('should show the 2nd image in a modal when clicking on it', () => {
      render(<FriendDetailsPage friend={FRIEND_DETAILS} />)

      userEvent.click(screen.getAllByRole('tab')[1])
      userEvent.click(screen.getByAltText('gallery-image-1'))

      const dialog = screen.getByRole('dialog')
      const img = within(dialog).getByAltText('gallery-image-1')

      expect(dialog).toBeVisible()
      expect(img).toBeInTheDocument()
    })

    it('should hide gallery dialog after clicking the close button', () => {
      render(<FriendDetailsPage friend={FRIEND_DETAILS} />)

      userEvent.click(screen.getAllByRole('tab')[1])
      userEvent.click(screen.getByAltText('gallery-image-1'))

      const dialog = screen.getByRole('dialog')
      const button = within(dialog).getByRole('button')

      userEvent.click(button)

      expect(dialog).not.toBeVisible()
    })
  })
})
