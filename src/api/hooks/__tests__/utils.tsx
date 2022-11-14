import { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const createWrapper = () => {
  const client = new QueryClient()

  // eslint-disable-next-line react/display-name
  return ({ children }: PropsWithChildren<{}>) => (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  )
}
