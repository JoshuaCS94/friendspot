import { PropsWithChildren } from 'react'
import { Dialog as HeadlessDialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import { cn } from '#utils'

export type DialogProps = PropsWithChildren<{
  open: boolean
  onClose(): void
  classNames?: Partial<{
    root: string
    container: string
  }>
}>

export const Dialog = ({
  open,
  onClose,
  classNames,
  children,
}: DialogProps) => {
  return (
    <HeadlessDialog
      as='div'
      className={cn('fixed inset-0 z-10 overflow-y-auto', classNames?.root)}
      onClose={onClose}
      open={open}
    >
      <div className='flex min-h-screen items-center justify-center px-4 py-4 text-center'>
        <HeadlessDialog.Overlay className='fixed inset-0 bg-gray-500/75 transition-opacity'>
          <button
            className='absolute right-8 top-8 rounded bg-gray-400 p-2 text-white hover:bg-gray-500'
            onClick={onClose}
          >
            <XMarkIcon width={16} height={16} />
          </button>
        </HeadlessDialog.Overlay>
        <div
          className={cn(
            'transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:p-6 sm:align-middle',
            classNames?.container
          )}
        >
          {children}
        </div>
      </div>
    </HeadlessDialog>
  )
}
