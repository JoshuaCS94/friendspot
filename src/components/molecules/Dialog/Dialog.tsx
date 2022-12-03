import { Fragment, PropsWithChildren } from 'react'
import { Dialog as HeadlessDialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import { cn } from '#utils/misc'

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
    <Transition.Root show={open} as={Fragment}>
      <HeadlessDialog
        as='div'
        className={cn('fixed inset-0 z-10 overflow-y-auto', classNames?.root)}
        onClose={onClose}
      >
        <div className='flex min-h-screen items-center justify-center px-4 py-4 text-center'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500/75 transition-opacity'>
              <button
                className='absolute right-8 top-8 rounded bg-gray-400 p-2 text-white hover:bg-gray-500'
                onClick={onClose}
              >
                <XMarkIcon width={16} height={16} />
              </button>
            </div>
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <HeadlessDialog.Panel
              className={cn(
                'transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:p-6 sm:align-middle',
                classNames?.container
              )}
            >
              {children}
            </HeadlessDialog.Panel>
          </Transition.Child>
        </div>
      </HeadlessDialog>
    </Transition.Root>
  )
}
