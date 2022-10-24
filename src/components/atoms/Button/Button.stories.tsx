import { ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Default = () => <Button>Button</Button>

export const Disabled = () => <Button disabled>Button</Button>