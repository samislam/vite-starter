import { Link } from 'react-router'

const NotFound = () => (
  <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-950 px-6 text-center text-slate-100">
    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">404</p>
    <h1 className="text-4xl font-semibold sm:text-5xl">Page not found</h1>
    <p className="max-w-lg text-sm text-slate-300 sm:text-base">
      The page you&apos;re looking for doesn&apos;t exist or has moved. Check the address or head
      back to a known page.
    </p>
    <Link
      to="/"
      className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow transition hover:translate-y-0.5"
    >
      Go home
    </Link>
  </main>
)

export default NotFound
