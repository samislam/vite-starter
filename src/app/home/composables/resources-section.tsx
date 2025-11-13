import { useTranslate } from '@tolgee/react'

export const ResourcesSection = () => {
  const { t } = useTranslate()

  return (
    <section className="grid gap-6 rounded-3xl border border-white/5 bg-white/5 p-8 lg:grid-cols-2">
      <div className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.4em] text-white/60 uppercase">
          {t('@t<home.resources.eyebrow>')}
        </p>
        <h3 className="text-2xl font-semibold text-white">{t('@t<home.resources.heading>')}</h3>
        <p className="text-sm text-white/75">{t('@t<home.resources.description>')}</p>
        <ul className="list-inside list-disc text-sm text-white/75">
          <li>{t('@t<home.resources.steps.copyRepo>')}</li>
          <li>{t('@t<home.resources.steps.runCommands>')}</li>
          <li>
            {t('@t<home.resources.steps.tweakPrefix>')}{' '}
            <code className="rounded bg-white/10 px-1 py-0.5 text-xs">src/app/layout.tsx</code>{' '}
            {t('@t<home.resources.steps.tweakSuffix>')}
          </li>
          <li>{t('@t<home.resources.steps.keepScripts>')}</li>
        </ul>
      </div>

      <div className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/60 p-6">
        <p className="text-sm font-semibold text-white">{t('@t<home.resources.links.heading>')}</p>
        <div className="space-y-4">
          {resourceLinks.map((resource) => (
            <a
              key={resource.href}
              href={resource.href}
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl border border-white/5 bg-white/5 p-4 transition hover:border-white/30 hover:bg-white/10"
            >
              <p className="text-base font-semibold text-white">{t(resource.labelKey)}</p>
              <p className="text-sm text-white/70">{t(resource.descriptionKey)}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

const resourceLinks = [
  {
    labelKey: '@t<home.resources.links.vite.label>',
    href: 'https://vite.dev/guide/',
    descriptionKey: '@t<home.resources.links.vite.description>',
  },
  {
    labelKey: '@t<home.resources.links.react.label>',
    href: 'https://react.dev/learn',
    descriptionKey: '@t<home.resources.links.react.description>',
  },
  {
    labelKey: '@t<home.resources.links.tailwind.label>',
    href: 'https://tailwindcss.com/docs/installation',
    descriptionKey: '@t<home.resources.links.tailwind.description>',
  },
]
