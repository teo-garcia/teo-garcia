import { toolGroups } from './content'

export function ToolsSection() {
  return (
    <section className='py-24 sm:py-32' data-reveal data-section='tools'>
      <div className='grid gap-12 lg:grid-cols-[minmax(18rem,0.75fr)_1.6fr]'>
        <div className='max-w-xl'>
          <p className='text-xs font-semibold uppercase tracking-[0.22em] text-accent'>
            Tools
          </p>
          <h2 className='mt-5 text-balance font-serif text-5xl font-semibold leading-none sm:text-7xl'>
            The toolset is wide because the work has been wide.
          </h2>
          <p className='mt-6 text-base leading-7 text-muted-foreground'>
            The list stays grounded in shipped work: identity, CMS cleanup,
            campaign automation, product surfaces, data, and integrations.
          </p>
        </div>
        <div className='grid gap-x-10 gap-y-8 sm:grid-cols-2'>
          {toolGroups.map((group) => (
            <section
              className='border-t border-border/80 pt-5'
              data-tool-group
              key={group.label}
            >
              <h2 className='font-serif text-2xl font-semibold'>
                {group.label}
              </h2>
              <p className='mt-3 text-sm leading-7 text-muted-foreground sm:text-base'>
                {group.tools.join(' / ')}
              </p>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
