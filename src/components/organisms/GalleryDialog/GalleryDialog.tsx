import { useState, useEffect } from 'react'
import { useEventListener } from 'usehooks-ts'

import { Image } from '../../atoms'
import { Dialog, DialogProps } from '../../molecules'

export type GalleryDialogProps = DialogProps & {
  images: string[]
  defaultSelected?: number
}

export const GalleryDialog = ({
  images,
  defaultSelected = 0,
  ...props
}: GalleryDialogProps) => {
  const [selected, setSelected] = useState(defaultSelected)

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowRight':
        setSelected(s => Math.min(images.length - 1, s + 1))
        break
      case 'ArrowLeft':
        setSelected(s => Math.max(0, s - 1))
        break
    }
  }

  useEffect(() => {
    setSelected(defaultSelected)
  }, [defaultSelected])

  useEventListener('keydown', handleKeyDown)

  return (
    <Dialog {...props} classNames={{ container: 'h-[600px] w-[800px] !p-0' }}>
      <Image
        src={images[selected]}
        alt={`gallery-photo-${selected}`}
        width={800}
        height={600}
        objectFit='contain'
      />
    </Dialog>
  )
}
