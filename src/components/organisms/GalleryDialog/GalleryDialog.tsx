import { Image } from '../../atoms'
import { Carousel, Dialog, DialogProps } from '../../molecules'

export type GalleryDialogProps = DialogProps & {
  images: string[]
  selected?: number
}

export const GalleryDialog = ({
  images,
  selected = 0,
  ...props
}: GalleryDialogProps) => {
  return (
    <Dialog {...props} classNames={{ container: 'h-[600px] w-[800px] !p-0' }}>
      <Carousel defaultSelected={selected}>
        {images.map(i => (
          <Image
            key={i}
            src={i}
            alt='gallery-photo'
            width={800}
            height={600}
            objectFit='contain'
          />
        ))}
      </Carousel>
    </Dialog>
  )
}
