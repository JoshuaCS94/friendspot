export type ButtonProps = JSX.IntrinsicElements['button']

export const Button = ({ children }: ButtonProps) => (
  <button className='rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 active:bg-blue-800'>{children}</button>
)
