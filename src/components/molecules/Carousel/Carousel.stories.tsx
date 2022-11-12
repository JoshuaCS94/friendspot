import { ComponentMeta } from '@storybook/react'

import { Image } from '../../atoms'
import { Carousel } from './Carousel'

export default {
  title: 'molecules/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>

const IMAGES = [
  'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/image/5751865d5eda7f7bcbf628febdd56a9bfaee4738',
  'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/image/bd5e75a3cdcd20d91bc1768cea6c469a0472b87d',
  'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/image/b6150fb5f62c88d0639003f63b513fd845527214',
  'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/image/091a479a761216b5b7d94cc3263612add8d2c06d',
  'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/image/c02cf3f314728a76c31758e99e1d9acd183df349',
  'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/image/ab73a346ebbff58e5ae2b1c8b90eab82be46992d',
  'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/image/9191f32c2bb6b5cbb98164f80f4d7586c560674e',
]

export const Default = () => (
  <Carousel
    classNames={{
      root: 'w-[400px]',
    }}
  >
    {IMAGES.map(i => (
      <Image
        key={i}
        src={i}
        alt='carousel-image'
        width={400}
        height={300}
        objectFit='contain'
        className='shrink-0'
      />
    ))}
  </Carousel>
)
