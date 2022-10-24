import { ComponentMeta } from '@storybook/react'

import { Badge } from './Badge'

export default {
  title: 'atoms/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>

export const Default = () => <Badge>At Work</Badge>
