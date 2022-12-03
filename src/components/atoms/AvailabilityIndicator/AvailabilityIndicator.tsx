import { cn } from '#utils/misc'

export type AvailabilityIndicatorProps = {
  available: boolean
  className?: string
}

export const AvailabilityIndicator = ({
  available,
  className,
}: AvailabilityIndicatorProps) => (
  <div
    title='availability'
    role='status'
    className={cn(
      'h-3 w-3 rounded-full border-2 border-white',
      available ? 'bg-green-400' : 'bg-gray-400',
      className
    )}
  />
)
