function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 px-6 py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
          Aya Hosting
        </p>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
          Tailwind CSS is now wired up.
        </h1>
        <p className="text-lg text-slate-300">
          Start building immediately—utility classes are ready to go anywhere in
          the project.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button className="rounded-full bg-slate-100 px-6 py-3 text-base font-medium text-slate-900 transition hover:bg-white">
            Primary action
          </button>
          <button className="rounded-full border border-slate-500 px-6 py-3 text-base font-medium text-slate-100 transition hover:border-slate-300">
            Secondary action
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
