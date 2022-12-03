import { render, screen } from '@testing-library/react'

import { Image } from './Image'

describe('Components', () => {
  describe('Image', () => {
    it('should render the given image', () => {
      render(
        <Image
          src='https://randomuser.me/api/portraits/men/1.jpg'
          width={128}
          height={128}
          alt='img'
        />
      )

      const el = screen.getByRole('img')

      expect(el).toBeInTheDocument()
    })
  })
})
