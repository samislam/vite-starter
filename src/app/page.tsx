import reactLogo from '@/assets/react.svg'
import { Code2, Layers3, Palette, PlugZap } from 'lucide-react'
import { ShieldCheck, Sparkles, type LucideIcon } from 'lucide-react'

const features: Array<{
  icon: LucideIcon
  title: string
  description: string
}> = [
  {
    icon: Sparkles,
    title: 'Opinionated defaults',
    description:
      'React 19, TypeScript, Vite 7, and Tailwind CSS ship preconfigured so you can focus on product work instead of tooling.',
  },
  {
    icon: Code2,
    title: 'Developer tooling',
    description:
      'ESLint, Prettier (with Tailwind sorting), and ready-to-run scripts keep your commits neat and repeatable.',
  },
  {
    icon: PlugZap,
    title: 'Localization ready',
    description:
      'Tolgee client scaffolding and CLI scripts are already wired up whenever you are ready to translate copy.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe by design',
    description:
      'Strict TypeScript settings, React StrictMode, and sensible lint rules catch issues long before production.',
  },
  {
    icon: Layers3,
    title: 'Composable structure',
    description:
      'A batteries-included src tree with app, components, hooks, and utils directories scales with your project.',
  },
  {
    icon: Palette,
    title: 'Utility-first styling',
    description:
      'TailwindCSS is ready out-of-the-box with PostCSS so you can ship polished UI without touching config.',
  },
]

const commands = [
  { label: 'Install dependencies', value: 'pnpm install' },
  { label: 'Start dev server', value: 'pnpm dev' },
  { label: 'Run lint checks', value: 'pnpm lint' },
  { label: 'Create production build', value: 'pnpm build' },
]

const stackBadges = [
  'React 19',
  'Vite 7',
  'TypeScript 5.9',
  'Tailwind CSS 3.4',
  'Tolgee Ready',
  'ESLint + Prettier',
]

const resources = [
  {
    label: 'Vite Documentation',
    href: 'https://vite.dev/guide/',
    description: 'Understand how Vite handles dev, build, and previews.',
  },
  {
    label: 'React Quick Start',
    href: 'https://react.dev/learn',
    description: 'Refresh modern React patterns, hooks, and compiler plans.',
  },
  {
    label: 'TailwindCSS Docs',
    href: 'https://tailwindcss.com/docs/installation',
    description: 'Browse utility classes and component recipes.',
  },
]

const CommandCard = (props: (typeof commands)[number]) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
        {props.label}
      </p>
      <code className="mt-3 block font-mono text-sm text-white">{props.value}</code>
    </div>
  )
}

const FeatureCard = (props: (typeof features)[number]) => {
  const Icon = props.icon
  return (
    <div className="group rounded-3xl border border-white/5 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10">
      <div className="mb-4 inline-flex items-center justify-center rounded-2xl border border-white/15 bg-slate-900/60 p-3 text-white">
        <Icon className="h-5 w-5 transition group-hover:text-cyan-300" />
      </div>
      <p className="text-lg font-semibold">{props.title}</p>
      <p className="mt-2 text-sm text-white/70">{props.description}</p>
    </div>
  )
}

const Page = () => {
  return (
    <div className="relative isolate overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-[-10rem] -z-10 mx-auto h-[24rem] max-w-4xl rounded-full bg-gradient-to-b from-cyan-500/40 via-blue-500/25 to-transparent blur-[130px]" />

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-16 lg:px-10 lg:py-20">
        <header className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            React Vite Starter
          </span>

          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hello from the{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
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
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Kickstart</p>
              <p className="text-lg font-semibold text-white">Modern React project scaffolding</p>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {commands.map((command) => (
            <CommandCard key={command.label} {...command} />
          ))}
        </section>

        <section id="features" className="space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              Why this starter?
            </p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Everything you need to ship fast
            </h2>
            <p className="text-sm text-white/70">
              Opinionated but flexible. Swap any tool or extend the stack without redoing the
              plumbing work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/5 bg-white/5 p-8 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              Next steps
            </p>
            <h3 className="text-2xl font-semibold text-white">From idea to prototype in minutes</h3>
            <p className="text-sm text-white/75">
              Use this starter as a hello page, onboarding doc, or QA checklist. The faster everyone
              on the team can get into the app, the better your next release will be.
            </p>
            <ul className="list-inside list-disc text-sm text-white/75">
              <li>Copy this repo or scaffold your own via Git.</li>
              <li>Run the commands above to install dependencies and start dev mode.</li>
              <li>
                Tweak{' '}
                <code className="rounded bg-white/10 px-1 py-0.5 text-xs">src/app/layout.tsx</code>{' '}
                or drop in your own routes.
              </li>
              <li>Keep the scripts handy for linting, formatting, and Tolgee localization.</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/60 p-6">
            <p className="text-sm font-semibold text-white">Handy links</p>
            <div className="space-y-4">
              {resources.map((resource) => (
                <a
                  key={resource.href}
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl border border-white/5 bg-white/5 p-4 transition hover:border-white/30 hover:bg-white/10"
                >
                  <p className="text-base font-semibold text-white">{resource.label}</p>
                  <p className="text-sm text-white/70">{resource.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-white/5 pt-8 text-center text-sm text-white/70">
          <p>
            Built with ❤️ using the React Vite Starter template. Swap this hello page with your
            first feature!
          </p>
        </footer>
      </div>
    </div>
  )
}
export default Page
