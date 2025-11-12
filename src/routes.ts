import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  // Define your routes and layouts here...
  index('app/home/home.page.tsx'),
  route('*', 'components/layouts/global-not-found.tsx'),
] satisfies RouteConfig
