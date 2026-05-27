import {
  Braces,
  Cloud,
  Database,
  Layers3,
  LockKeyhole,
  MonitorSmartphone,
  PanelsTopLeft,
} from 'lucide-react'

import { toolGroups } from './content'

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
    <section className='py-24 sm:py-32' data-reveal data-section='tools'>
      <div className='grid gap-12 lg:grid-cols-[minmax(18rem,0.75fr)_1.4fr]'>
        <div className='max-w-xl'>
          <p className='text-xs font-semibold uppercase tracking-[0.22em] text-accent'>
            Tools
          </p>
          <h2 className='mt-5 text-balance text-3xl font-semibold leading-tight sm:text-5xl'>
            Tools are just where the work happened.
          </h2>
          <p className='mt-6 text-base leading-7 text-muted-foreground'>
            I do not want this to read like a keyword wall. These are the
            buckets I have actually worked across: UI, services, data, identity,
            content systems, delivery, and the glue between them.
          </p>
        </div>
        <div className='space-y-6'>
          {toolGroups.map((group, index) => (
            <section
              className='grid gap-4 border-t border-border/80 pt-5 sm:grid-cols-[2rem_10rem_1fr]'
              data-tool-group
              key={group.label}
            >
              <div className='grid size-8 place-items-center rounded-full border border-border text-accent'>
                {(() => {
                  const Icon = toolIcons[index] ?? Braces
                  return <Icon className='size-4' aria-hidden='true' />
                })()}
              </div>
              <h2 className='text-base font-semibold'>{group.label}</h2>
              <div>
                <p className='text-sm leading-6 text-muted-foreground'>
                  {group.note}
                </p>
                <p className='mt-2 text-sm leading-7 text-foreground/82'>
                  {group.tools.join(' / ')}
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
