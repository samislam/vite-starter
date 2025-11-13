import { FeaturesSection } from './composables/features-section'
import { ResourcesSection } from './composables/resources-section'
import { HeaderSection } from './composables/header-section'

const Page = () => {
  return (
    <div className="relative isolate overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 mx-auto h-96 max-w-4xl rounded-full bg-linear-to-b from-cyan-500/40 via-blue-500/25 to-transparent blur-[130px]" />
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-16 lg:px-10 lg:py-20">
        <HeaderSection />
        <FeaturesSection />
        <ResourcesSection />
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
