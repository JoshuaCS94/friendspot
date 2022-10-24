import { PropsWithChildren } from 'react'

import { cn } from '#utils'

export type TabProps = PropsWithChildren<{
  active: boolean
  className?: string
}>

export const Tab = ({ active, className, children }: TabProps) => (
  <button
    className={cn(
      ' relative px-4 py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:rounded after:bg-black hover:bg-gray-200 active:bg-gray-300',
      active ? 'text-black after:visible' : 'text-gray-600 after:invisible',
      className
    )}
  >
    {children}
  </button>
)
