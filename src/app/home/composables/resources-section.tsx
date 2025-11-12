export const ResourcesSection = () => {
  return (
    <section className="grid gap-6 rounded-3xl border border-white/5 bg-white/5 p-8 lg:grid-cols-2">
      <div className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.4em] text-white/60 uppercase">Next steps</p>
        <h3 className="text-2xl font-semibold text-white">From idea to prototype in minutes</h3>
        <p className="text-sm text-white/75">
          Use this starter as a hello page, onboarding doc, or QA checklist. The faster everyone on
          the team can get into the app, the better your next release will be.
        </p>
        <ul className="list-inside list-disc text-sm text-white/75">
          <li>Copy this repo or scaffold your own via Git.</li>
          <li>Run the commands above to install dependencies and start dev mode.</li>
          <li>
            Tweak{' '}
            <code className="rounded bg-white/10 px-1 py-0.5 text-xs">src/app/layout.tsx</code> or
            drop in your own routes.
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
  )
}

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
