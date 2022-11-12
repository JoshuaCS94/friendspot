import { ComponentMeta } from '@storybook/react'

import { GalleryDialog } from './GalleryDialog'

export default {
  title: 'organisms/GalleryDialog',
  component: GalleryDialog,
} as ComponentMeta<typeof GalleryDialog>

export const Default = () => (
  <GalleryDialog
    open
    onClose={() => {}}
    images={[
      'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/image/5751865d5eda7f7bcbf628febdd56a9bfaee4738',
      'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/image/bd5e75a3cdcd20d91bc1768cea6c469a0472b87d',
      'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/image/b6150fb5f62c88d0639003f63b513fd845527214',
      'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/image/091a479a761216b5b7d94cc3263612add8d2c06d',
      'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/image/c02cf3f314728a76c31758e99e1d9acd183df349',
      'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/image/ab73a346ebbff58e5ae2b1c8b90eab82be46992d',
      'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/image/9191f32c2bb6b5cbb98164f80f4d7586c560674e',
    ]}
  />
)
