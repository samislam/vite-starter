import { FeatureCard } from './feature-card'
import { Code2, Layers3, Palette, PlugZap, ShieldCheck, Sparkles, LucideIcon } from 'lucide-react'

export const FeaturesSection = () => {
  return (
    <section id="features" className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs font-semibold tracking-[0.4em] text-white/60 uppercase">
          Why this starter?
        </p>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Everything you need to ship fast
        </h2>
        <p className="text-sm text-white/70">
          Opinionated but flexible. Swap any tool or extend the stack without redoing the plumbing
          work.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  )
}

export type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
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
