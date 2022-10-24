import { ComponentMeta } from '@storybook/react'

import { Image } from './Image'
import testImg from './test-img.png'

export default {
  title: 'atoms/Image',
  component: Image,
} as ComponentMeta<typeof Image>

export const Size24x24 = () => <Image src={testImg} width={24} height={24} alt='test-image' />

export const Size32x32 = () => <Image src={testImg} width={32} height={32} alt='test-image' />

export const Size48x48 = () => <Image src={testImg} width={48} height={48} alt='test-image' />
