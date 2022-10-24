import { ComponentMeta } from '@storybook/react'

import { AvailabilityIndicator } from './AvailabilityIndicator'

export default {
  title: 'atoms/AvailabilityIndicator',
  component: AvailabilityIndicator,
} as ComponentMeta<typeof AvailabilityIndicator>

export const Available = () => <AvailabilityIndicator available />

export const Unavailable = () => <AvailabilityIndicator available={false} />

export const Available20x20 = () => <AvailabilityIndicator available className='h-5 w-5' />

export const Unavailable20x20 = () => <AvailabilityIndicator available={false} className='h-5 w-5' />
