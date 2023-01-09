import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'
import { queryClient } from 'common/query-client'
import { Router } from 'modules'

import 'react-toastify/dist/ReactToastify.css'

export const App: React.FC = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Router />
      </CartProvider>
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  </BrowserRouter>
)
