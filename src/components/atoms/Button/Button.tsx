import { cn } from '#utils'

export type ButtonProps = JSX.IntrinsicElements['button']

export const Button = ({ disabled, children, className, ...props }: ButtonProps) => (
  <button
    className={cn(
      'rounded border px-5 py-2',
      disabled
        ? 'border-slate-300 bg-slate-50 text-slate-400'
        : 'border-blue-700 bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
      className
    )}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
)
