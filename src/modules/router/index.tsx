import {
  Outlet,
  RouterProvider,
  createReactRouter,
  createRouteConfig
} from '@tanstack/react-router'
import { TanStackRouterDevtools as RouterDevtools } from '@tanstack/react-router-devtools'
import { Header } from 'modules'
import { WelcomePage, StorePage } from 'pages'

const rootRoute = createRouteConfig()

const indexRoute = rootRoute.createRoute({
  component: WelcomePage,
  path: '/'
})

const aboutRoute = rootRoute.createRoute({
  component: StorePage,
  path: '/store'
})

const routeConfig = rootRoute.addChildren([indexRoute, aboutRoute])

const router = createReactRouter({ routeConfig })

export const Router: React.FC = () => (
  <RouterProvider router={router}>
    <Header />
    <Outlet />
    <RouterDevtools />
  </RouterProvider>
)
