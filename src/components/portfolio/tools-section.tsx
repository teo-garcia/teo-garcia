import { tools } from './content'

export function ToolsSection() {
  return (
    <section className='border-t border-border py-12' data-reveal>
      <p className='text-sm font-semibold uppercase tracking-[0.16em] text-teal-600 dark:text-teal-300'>
        Tools I have used
      </p>
      <div className='mt-6 flex flex-wrap gap-2'>
        {tools.map((tool) => (
          <span
            className='rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground'
            key={tool}
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  )
}
