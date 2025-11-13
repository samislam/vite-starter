import { useTranslate } from '@tolgee/react'
import { FeatureCard } from './feature-card'
import { Code2, Layers3, Palette, PlugZap, ShieldCheck, Sparkles, LucideIcon } from 'lucide-react'

export const FeaturesSection = () => {
  const { t } = useTranslate()

  return (
    <section id="features" className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs font-semibold tracking-[0.4em] text-white/60 uppercase">
          {t('@t<home.features.eyebrow>')}
        </p>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          {t('@t<home.features.heading>')}
        </h2>
        <p className="text-sm text-white/70">
          {t('@t<home.features.description>')}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {featureDefinitions.map((feature) => (
          <FeatureCard
            key={feature.titleKey}
            icon={feature.icon}
            title={t(feature.titleKey)}
            description={t(feature.descriptionKey)}
          />
        ))}
      </div>
    </section>
  )
}

export type FeatureCardContent = {
  icon: LucideIcon
  title: string
  description: string
}

type FeatureDefinition = {
  icon: LucideIcon
  titleKey: string
  descriptionKey: string
}

const featureDefinitions: FeatureDefinition[] = [
  {
    icon: Sparkles,
    titleKey: '@t<home.features.cards.opinionatedDefaults.title>',
    descriptionKey: '@t<home.features.cards.opinionatedDefaults.description>',
  },
  {
    icon: Code2,
    titleKey: '@t<home.features.cards.developerTooling.title>',
    descriptionKey: '@t<home.features.cards.developerTooling.description>',
  },
  {
    icon: PlugZap,
    titleKey: '@t<home.features.cards.localizationReady.title>',
    descriptionKey: '@t<home.features.cards.localizationReady.description>',
  },
  {
    icon: ShieldCheck,
    titleKey: '@t<home.features.cards.safeByDesign.title>',
    descriptionKey: '@t<home.features.cards.safeByDesign.description>',
  },
  {
    icon: Layers3,
    titleKey: '@t<home.features.cards.composableStructure.title>',
    descriptionKey: '@t<home.features.cards.composableStructure.description>',
  },
  {
    icon: Palette,
    titleKey: '@t<home.features.cards.utilityFirstStyling.title>',
    descriptionKey: '@t<home.features.cards.utilityFirstStyling.description>',
  },
]
