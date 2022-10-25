import { ComponentMeta } from '@storybook/react'

import { UserCard } from './UserCard'
import testImg from '../../_images/test-img.png'

export default {
  title: 'molecules/UserCard',
  component: UserCard,
} as ComponentMeta<typeof UserCard>

export const Default = () => (
  <UserCard image={testImg} available name='Jeremy Davis' tags={['At Work']} onSeeDetails={() => {}} />
)
