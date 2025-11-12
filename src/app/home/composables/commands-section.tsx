import { CommandCard } from './command-card'

export const CommandsSection = () => {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {commands.map((command) => (
        <CommandCard key={command.label} {...command} />
      ))}
    </section>
  )
}

export type Command = { label: string; value: string }

const commands: Command[] = [
  { label: 'Install dependencies', value: 'pnpm install' },
  { label: 'Start dev server', value: 'pnpm dev' },
  { label: 'Run lint checks', value: 'pnpm lint' },
  { label: 'Create production build', value: 'pnpm build' },
]
