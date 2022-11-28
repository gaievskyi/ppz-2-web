// eslint-disable-next-line import/named
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Router } from 'modules'

const queryClient = new QueryClient()

export const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Router />
    <ReactQueryDevtools position="bottom-right" />
  </QueryClientProvider>
)
