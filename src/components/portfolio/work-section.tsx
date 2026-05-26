import { work } from './content'

export function WorkSection() {
  return (
    <section className='border-t border-border py-12' data-reveal>
      <p className='text-sm font-semibold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300'>
        Work
      </p>
      <div className='mt-7 divide-y divide-border'>
        {work.map((item) => (
          <article className='py-8 first:pt-0 last:pb-0' key={item.title}>
            <div className='flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between'>
              <p>{item.company}</p>
              <p>{item.dates}</p>
            </div>
            <h2 className='mt-3 text-balance font-["Space_Grotesk"] text-3xl font-semibold tracking-[-0.04em]'>
              {item.title}
            </h2>
            <p className='mt-4 max-w-2xl leading-7 text-muted-foreground'>
              {item.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
