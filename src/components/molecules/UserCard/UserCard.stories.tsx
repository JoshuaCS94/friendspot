import { ComponentMeta } from '@storybook/react'

import { UserCard } from './UserCard'

export default {
  title: 'molecules/UserCard',
  component: UserCard,
} as ComponentMeta<typeof UserCard>

export const Default = () => (
  <UserCard
    image='https://randomuser.me/api/portraits/men/1.jpg'
    available
    name='Jeremy Davis'
    tags={['At Work']}
    onSeeDetails={() => {}}
  />
)
