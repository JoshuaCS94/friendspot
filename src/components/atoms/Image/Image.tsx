import NextImage, { ImageProps as NextImageProps } from 'next/image'

import { cn } from '#utils'

export type ImageProps = NextImageProps

export const Image = ({ className, ...props }: ImageProps) => (
  <span
    className={cn(
      'inline-block h-fit w-fit [&>span]:!block [&>span]:overflow-hidden [&>span]:!rounded',
      className
    )}
  >
    <NextImage {...props} />
  </span>
)
