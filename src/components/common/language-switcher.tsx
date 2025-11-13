import clsx from 'clsx'
import appConfig from '@/config/app.config'
import { useLocale } from '@/hooks/use-locale'
import { AppLanguages } from '@/types/app.types'

type LanguageSwitcherProps = {
  className?: string
}

const languageLabels: Record<AppLanguages, string> = {
  en: 'EN',
  ar: 'AR',
  tr: 'TR',
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { locale, setLanguage } = useLocale()

  return (
    <div
      className={clsx(
        'inline-flex items-center rounded-full border border-white/20 bg-white/5 p-1 text-xs font-semibold text-white/80 backdrop-blur',
        className,
      )}
      role="group"
      aria-label="Language switcher"
    >
      {appConfig.languages.map((lang) => {
        const isActive = locale === lang
        return (
          <button
            key={lang}
            type="button"
            aria-pressed={isActive}
            className={clsx(
              'rounded-full px-3 py-1 transition',
              isActive
                ? 'bg-white text-slate-950 shadow hover:bg-white'
                : 'text-white/70 hover:text-white',
            )}
            onClick={() => {
              if (!isActive) {
                void setLanguage(lang)
              }
            }}
          >
            {languageLabels[lang]}
          </button>
        )
      })}
    </div>
  )
}
