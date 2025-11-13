import './globals.css'
import { PropsWithChildren } from 'react'
import appConfig from './config/app.config'
import { TolgeeProvider } from '@tolgee/react'
import { tolgee } from './lib/tolgee/tolgee.config'
import { Meta, Links, Outlet, Scripts, ScrollRestoration } from 'react-router'

export const Layout = (props: PropsWithChildren) => {
  const { children } = props
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{appConfig.appName}</title>
        <Meta />
        <Links />
      </head>
      <body>
        <TolgeeProvider tolgee={tolgee}>{children}</TolgeeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default () => <Outlet />
export { ErrorBoundary } from '@/components/layouts/global-error-boundry'
