import reactLogo from '@/assets/react.svg'

export const HeaderSection = () => {
  return (
    <header className="flex flex-col items-center gap-6 text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.25em] text-white/70 uppercase">
        React Vite Starter
      </span>

      <h1 className="text-4xl leading-tight font-semibold text-white sm:text-5xl lg:text-6xl">
        Hello from the{' '}
        <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
          React Vite Starter
        </span>
      </h1>

      <p className="max-w-3xl text-base text-white/80 sm:text-lg">
        This friendly landing page is proof that everything is wired up. Replace it whenever
        you&apos;re ready, or keep it around as a quick-reference for scripts, stack, and docs.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_25px_rgb(15,23,42,0.45)] transition hover:translate-y-0.5"
          href="https://github.com/samislam/react-vite-starter"
          target="_blank"
          rel="noreferrer"
        >
          View repository
        </a>

        <a
          className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          href="#features"
        >
          Explore features
        </a>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {stackBadges.map((badge) => (
          <span
            key={badge}
            className="inline-flex items-center rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-xs font-medium text-white/80"
          >
            {badge}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-left">
        <img
          src={reactLogo}
          alt="React logo"
          className="h-12 w-12 drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]"
        />
        <div>
          <p className="text-xs tracking-[0.4em] text-white/50 uppercase">Kickstart</p>
          <p className="text-lg font-semibold text-white">Modern React project scaffolding</p>
        </div>
      </div>
    </header>
  )
}

const stackBadges = [
  'React 19',
  'Vite 7',
  'TypeScript 5.9',
  'Tailwind CSS 3.4',
  'Tolgee Ready',
  'ESLint + Prettier',
]
