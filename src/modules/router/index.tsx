import {
  Outlet,
  RouterProvider,
  createReactRouter,
  createRouteConfig
} from '@tanstack/react-router'
import { TanStackRouterDevtools as RouterDevtools } from '@tanstack/react-router-devtools'
import { Footer, Header } from 'modules'
import { StorePage, CategoriesPage, AdminPage, ContactPage } from 'pages'
import { AboutPage } from 'pages/about'
import { OrderPage } from 'pages/order'

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
  component: AboutPage,
  path: '/about'
})

const contactRoute = rootRoute.createRoute({
  component: ContactPage,
  path: '/contact'
})

const orderRoute = rootRoute.createRoute({
  component: OrderPage,
  path: '/order'
})

const adminRoute = rootRoute.createRoute({
  component: AdminPage,
  path: '/admin'
})

export const routes = [
  indexRoute,
  categoriesRoute,
  aboutRoute,
  contactRoute,
  adminRoute,
  orderRoute
]
const routeConfig = rootRoute.addChildren(routes)
const router = createReactRouter({ routeConfig })

export const Router: React.FC = () => {
  return (
    <RouterProvider router={router}>
      <Header />
      <Outlet />
      <RouterDevtools />
      <Footer />
    </RouterProvider>
  )
}
