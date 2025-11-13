import reactLogo from '@/assets/react.svg'
import { useTranslate } from '@tolgee/react'
import { LanguageSwitcher } from '@/components/common/language-switcher'

export const HeaderSection = () => {
  const { t } = useTranslate()

  return (
    <header className="flex flex-col items-center gap-6 text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.25em] text-white/70 uppercase">
        {t('@t<home.header.badge>')}
      </span>

      <h1 className="text-4xl leading-tight font-semibold text-white sm:text-5xl lg:text-6xl">
        {t('@t<home.header.title.prefix>')}{' '}
        <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
          {t('@t<home.header.title.highlight>')}
        </span>
      </h1>

      <p className="max-w-3xl text-base text-white/80 sm:text-lg">
        {t('@t<home.header.description>')}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_25px_rgb(15,23,42,0.45)] transition hover:translate-y-0.5"
          href="https://github.com/samislam/react-vite-starter"
          target="_blank"
          rel="noreferrer"
        >
          {t('@t<home.header.primaryCta>')}
        </a>

        <a
          className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          href="#features"
        >
          {t('@t<home.header.secondaryCta>')}
        </a>
      </div>

      <LanguageSwitcher className="self-center" />

      <div className="flex flex-wrap items-center justify-center gap-4">
        {stackBadgeKeys.map((badgeKey) => (
          <span
            key={badgeKey}
            className="inline-flex items-center rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-xs font-medium text-white/80"
          >
            {t(badgeKey)}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-left">
        <img
          src={reactLogo}
          alt={t('@t<home.header.reactLogoAlt>')}
          className="h-12 w-12 drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]"
        />
        <div>
          <p className="text-xs tracking-[0.4em] text-white/50 uppercase">
            {t('@t<home.header.subheadingLabel>')}
          </p>
          <p className="text-lg font-semibold text-white">{t('@t<home.header.subheadingTitle>')}</p>
        </div>
      </div>
    </header>
  )
}

const stackBadgeKeys = [
  '@t<home.header.stack.react19>',
  '@t<home.header.stack.vite7>',
  '@t<home.header.stack.ts59>',
  '@t<home.header.stack.tailwind34>',
  '@t<home.header.stack.tolgeeReady>',
  '@t<home.header.stack.eslintPrettier>',
]
