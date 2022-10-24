import { ComponentMeta } from '@storybook/react'

import { Tabs } from './Tabs'

export default {
  title: 'molecules/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>

const TABS = ['Tab 1', 'Tab 2', 'Tab 3', 'Very long tab']

export const Default = () => <Tabs tabs={TABS} />

export const WithContent = () => (
  <Tabs tabs={TABS} classNames={{ containers: { content: 'mt-4' } }}>
    <p>Content 1</p>
    <p>Content 2</p>
    <p>Content 3</p>
    <p>Content 4</p>
  </Tabs>
)
