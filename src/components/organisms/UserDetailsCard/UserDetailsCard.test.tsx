import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { UserDetailsCard, UserDetailsCardProps } from './UserDetailsCard'

const NAME = 'Jeremy Davis'
const TAGS = ['At work', 'Enjoying life', 'Active']
const INFO: UserDetailsCardProps['info'] = {
  bio: 'Test bio',
  location: {
    address: 'Test address',
    city: 'Test city',
    state: 'Test state',
    zipCode: 'Test zip code',
  },
  phone: '+123456789',
}
const IMAGES = [
  'https://randomuser.me/api/portraits/men/1.jpg',
  'https://randomuser.me/api/portraits/men/2.jpg',
  'https://randomuser.me/api/portraits/men/3.jpg',
]

describe('Components', () => {
  describe('UserDetailsCard', () => {
    it('should render the user picture, online status, name and tags and two tabs for info and gallery', () => {
      render(
        <UserDetailsCard
          available
          name={NAME}
          image={IMAGES[0]}
          tags={TAGS}
          info={INFO}
          photos={IMAGES}
          onSelectPhoto={() => {}}
        />
      )

      const name = screen.getByText(NAME)
      const available = screen.getByRole('status')
      const img = screen.getByAltText('user-picture')
      const tags = screen.getByTitle('tags').children
      const tabs = screen.getAllByRole('tab')

      expect(name).toBeInTheDocument()
      expect(available).toBeInTheDocument()
      expect(img).toBeInTheDocument()

      for (let i = 0; i < tags.length; i++)
        expect(tags.item(i)).toHaveTextContent(TAGS[i])

      expect(tabs).toHaveLength(2)
      expect(tabs[0]).toHaveTextContent('Info')
      expect(tabs[1]).toHaveTextContent('Photos')
    })

    it('should render the first tab with user bio, location details and phone', () => {
      render(
        <UserDetailsCard
          available
          name={NAME}
          image={IMAGES[0]}
          tags={TAGS}
          info={INFO}
          photos={IMAGES}
          onSelectPhoto={() => {}}
        />
      )

      const infoTab = screen.getByRole('tabpanel')

      expect(infoTab).toHaveTextContent(INFO.bio)
      expect(infoTab).toHaveTextContent(INFO.phone)
      expect(infoTab).toHaveTextContent(INFO.location.address)
      expect(infoTab).toHaveTextContent(INFO.location.state)
      expect(infoTab).toHaveTextContent(INFO.location.city)
      expect(infoTab).toHaveTextContent(INFO.location.zipCode)
    })

    it('should show the second tab with the gallery after clicking on it', () => {
      render(
        <UserDetailsCard
          available
          name={NAME}
          image={IMAGES[0]}
          tags={TAGS}
          info={INFO}
          photos={IMAGES}
          onSelectPhoto={() => {}}
        />
      )

      const tabs = screen.getAllByRole('tab')

      userEvent.click(tabs[1])

      const galleryTab = screen.getByRole('tabpanel')
      const images = within(galleryTab).getAllByRole('img')

      expect(images).toHaveLength(IMAGES.length)
      images.forEach((img, i) =>
        expect(img).toHaveAccessibleName(`gallery-image-${i}`)
      )
    })

    it('should call the callback when clicking an image with the clicked image as argument', () => {
      const handleSelectPhoto = jest.fn()

      render(
        <UserDetailsCard
          available
          name={NAME}
          image={IMAGES[0]}
          tags={TAGS}
          info={INFO}
          photos={IMAGES}
          onSelectPhoto={handleSelectPhoto}
        />
      )

      const tabs = screen.getAllByRole('tab')

      userEvent.click(tabs[1])

      const img = screen.getByAltText('gallery-image-2')

      userEvent.click(img)

      expect(handleSelectPhoto).toHaveBeenCalledTimes(1)
      expect(handleSelectPhoto).toHaveBeenCalledWith(IMAGES[2])
    })
  })
})
