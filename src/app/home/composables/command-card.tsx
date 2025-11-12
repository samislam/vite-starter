import React from 'react'
import { Command } from './commands-section'

export const CommandCard = (props: Command) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs font-semibold tracking-[0.18em] text-white/60 uppercase">
        {props.label}
      </p>
      <code className="mt-3 block font-mono text-sm text-white">{props.value}</code>
    </div>
  )
}
