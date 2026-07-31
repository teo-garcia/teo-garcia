import {
  Braces,
  Cloud,
  Database,
  Layers3,
  LockKeyhole,
  MonitorSmartphone,
  PanelsTopLeft,
} from 'lucide-react'

import { toolGroups } from '../home-page/content'

const toolIcons = [
  Braces,
  MonitorSmartphone,
  Layers3,
  Database,
  LockKeyhole,
  Cloud,
  PanelsTopLeft,
]

export function ToolsSection() {
  return (
    <section
      className='bg-secondary/70 px-5 py-20 sm:px-8 sm:py-24 lg:px-12'
      data-reveal
      data-section='tools'
      id='stack'
    >
      <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[13rem_minmax(0,1fr)]'>
        <aside>
          <p className='text-xs font-semibold uppercase tracking-[0.22em] text-accent'>
            Stack
          </p>
          <div
            className='mt-5 h-px w-8 origin-left bg-accent'
            data-section-rule
          />
          <p className='mt-8 max-w-44 text-sm leading-7 text-muted-foreground'>
            The tools I reach for most days.
          </p>
        </aside>

        <div className='grid gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-3'>
          {toolGroups.map((group, index) => (
            <section
              className='grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-l border-border/80 pl-5'
              data-tool-row
              key={group.label}
            >
              <div className='pt-1 text-foreground'>
                {(() => {
                  const Icon = toolIcons[index] ?? Braces
                  return <Icon className='size-7' aria-hidden='true' />
                })()}
              </div>
              <div>
                <h2 className='text-sm font-semibold'>{group.label}</h2>
                <p className='mt-3 text-sm leading-6 text-muted-foreground'>
                  {group.note}
                </p>
                <p className='mt-3 text-sm leading-6 text-foreground/78'>
                  {group.tools}
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
