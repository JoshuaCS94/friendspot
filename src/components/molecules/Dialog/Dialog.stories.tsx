import { ComponentMeta } from '@storybook/react'

import { Dialog } from './Dialog'

export default {
  title: 'organisms/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>

export const Default = () => (
  <Dialog open onClose={() => {}}>
    <div>A dialog</div>
  </Dialog>
)
