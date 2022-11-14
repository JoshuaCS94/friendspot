import { cn } from '#utils'

export type BadgeProps = {
  children: string
  className?: string
}

export const Badge = ({ className, children }: BadgeProps) => (
  <span
    className={cn(
      'h-6 truncate rounded-full border border-indigo-300 px-2 py-1 text-xs text-indigo-300',
      className
    )}
  >
    {children}
  </span>
)
