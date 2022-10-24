import { ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Default = () => <Button>Button</Button>

export const Disabled = () => <Button disabled>Button</Button>
