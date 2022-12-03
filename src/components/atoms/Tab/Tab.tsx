import { PropsWithChildren } from 'react'

import { cn } from '#utils/misc'

export type TabProps = PropsWithChildren<{
  active: boolean
  className?: string
  onClick?: () => void
}>

export const Tab = ({ active, onClick, className, children }: TabProps) => (
  <span
    role='tab'
    aria-selected={active}
    className={cn(
      'relative cursor-pointer px-4 py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded after:bg-black hover:bg-gray-200 active:bg-gray-300',
      active ? 'text-black after:visible' : 'text-gray-600 after:invisible',
      className
    )}
    onClick={onClick}
  >
    {children}
  </span>
)
