import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { GalleryDialog } from './GalleryDialog'

const IMAGES = [
  'https://randomuser.me/api/portraits/men/1.jpg',
  'https://randomuser.me/api/portraits/men/2.jpg',
  'https://randomuser.me/api/portraits/men/3.jpg',
]

describe('Components', () => {
  describe('GalleryDialog', () => {
    it('should render the only image', () => {
      render(<GalleryDialog open images={[IMAGES[0]]} onClose={() => {}} />)

      const img = screen.getByRole('img')

      expect(img).toBeInTheDocument()
      expect(img).toBeVisible()
    })

    it('should render only one image', () => {
      render(<GalleryDialog open images={IMAGES} onClose={() => {}} />)

      const images = screen.getAllByRole('img')

      expect(images).toHaveLength(1)
    })

    it('should render the 2nd image', () => {
      render(
        <GalleryDialog
          open
          images={IMAGES}
          defaultSelected={1}
          onClose={() => {}}
        />
      )

      const img = screen.getByRole('img')

      expect(img).toHaveAccessibleName('gallery-image-1')
    })

    it('should render next image after pressing right when current image is not the last one', () => {
      render(
        <GalleryDialog
          open
          images={IMAGES}
          defaultSelected={0}
          onClose={() => {}}
        />
      )

      userEvent.keyboard('[ArrowRight]')

      const img = screen.getByRole('img')

      expect(img).toHaveAccessibleName('gallery-image-1')
    })

    it('should still render the last image after pressing right if current image is the last one', () => {
      render(
        <GalleryDialog
          open
          images={IMAGES}
          defaultSelected={IMAGES.length - 1}
          onClose={() => {}}
        />
      )

      userEvent.keyboard('[ArrowRight]')

      const img = screen.getByRole('img')

      expect(img).toHaveAccessibleName(`gallery-image-${IMAGES.length - 1}`)
    })

    it('should render previous image after pressing left if current image is not the first one', () => {
      render(
        <GalleryDialog
          open
          images={IMAGES}
          defaultSelected={2}
          onClose={() => {}}
        />
      )

      userEvent.keyboard('[ArrowLeft]')

      const img = screen.getByRole('img')

      expect(img).toHaveAccessibleName('gallery-image-1')
    })

    it('should still render the first image after pressing left if current image is the first one', () => {
      render(
        <GalleryDialog
          open
          images={IMAGES}
          defaultSelected={0}
          onClose={() => {}}
        />
      )

      userEvent.keyboard('[ArrowLeft]')

      const img = screen.getByRole('img')

      expect(img).toHaveAccessibleName(`gallery-image-0`)
    })
  })
})
