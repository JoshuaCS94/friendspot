import { useEffect } from 'react'
import { useKeenSlider } from 'keen-slider/react'

import { Image } from '../../atoms'
import { Dialog, DialogProps } from '../../molecules'

export type GalleryDialogProps = DialogProps & {
  images: string[]
  selected?: number
}

export const GalleryDialog = ({
  images,
  selected = 1,
  ...props
}: GalleryDialogProps) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>()

  useEffect(() => {
    instanceRef.current?.moveToIdx(selected)
  }, [instanceRef, selected])

  return (
    <Dialog {...props} classNames={{ container: 'h-[600px] w-[800px] !p-0' }}>
      <div ref={sliderRef} className='keen-slider'>
        {images.map(i => (
          <div
            key={i}
            className='keen-slider__slide !max-w-full shrink-0 [&>span]:!block'
          >
            <Image
              src={i}
              alt='gallery-photo'
              width={800}
              height={600}
              objectFit='contain'
            />
          </div>
        ))}
      </div>
    </Dialog>
  )
}
