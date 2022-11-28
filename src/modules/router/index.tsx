import {
  Outlet,
  RouterProvider,
  createReactRouter,
  createRouteConfig
} from '@tanstack/react-router'
import { TanStackRouterDevtools as RouterDevtools } from '@tanstack/react-router-devtools'
import { Footer, Header } from 'modules'
import { StorePage, CategoriesPage } from 'pages'

const rootRoute = createRouteConfig()

const indexRoute = rootRoute.createRoute({
  component: StorePage,
  path: '/'
})

const categoriesRoute = rootRoute.createRoute({
  component: CategoriesPage,
  path: '/categories'
})

const aboutRoute = rootRoute.createRoute({
  component: CategoriesPage,
  path: '/about'
})

const contactRoute = rootRoute.createRoute({
  component: CategoriesPage,
  path: '/contact'
})

export const routes = [indexRoute, categoriesRoute, aboutRoute, contactRoute]
const routeConfig = rootRoute.addChildren(routes)
const router = createReactRouter({ routeConfig })

export const Router: React.FC = () => (
  <RouterProvider router={router}>
    <Header />
    <Outlet />
    <RouterDevtools />
    <Footer />
  </RouterProvider>
)
