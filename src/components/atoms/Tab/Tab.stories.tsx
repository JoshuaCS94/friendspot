import { ComponentMeta } from '@storybook/react'

import { Tab } from './Tab'

export default {
  title: 'atoms/Tab',
  component: Tab,
} as ComponentMeta<typeof Tab>

export const Active = () => <Tab active>Tab</Tab>

export const Inactive = () => <Tab active={false}>Tab</Tab>
