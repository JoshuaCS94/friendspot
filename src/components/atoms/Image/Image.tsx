import NextImage, { ImageProps as NextImageProps } from 'next/image'

import { cn } from '#utils'

export type ImageProps = NextImageProps

export const Image = ({ className, ...props }: ImageProps) => (
  <NextImage className={cn('rounded', className)} {...props} />
)
