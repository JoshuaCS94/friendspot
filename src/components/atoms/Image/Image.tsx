import NextImage, { ImageProps as NextImageProps } from 'next/image'

import { cn } from '#utils'

export type ImageProps = NextImageProps

export const Image = ({ className, ...props }: ImageProps) => (
  <div
    className={cn(
      '!rounded [&>span]:!block [&>span]:overflow-hidden',
      className
    )}
  >
    <NextImage {...props} />
  </div>
)
