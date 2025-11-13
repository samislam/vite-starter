import { FeatureCardContent } from '@/app/home/composables/features-section'

export const FeatureCard = (props: FeatureCardContent) => {
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
