import { work } from '../portfolio-content/portfolio-content'
import { SectionIntro } from '../section-intro/section-intro'

export function WorkSection() {
  return (
    <section
      className='surface-band relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-12'
      data-section='work'
      id='work'
    >
      <div
        className='rule-fade absolute inset-x-0 top-0 z-10'
        aria-hidden='true'
      />
      <div
        className='layer-bloom pointer-events-none absolute right-[-12%] top-[8%] z-0 h-[32rem] w-[44rem]'
        data-bloom
        aria-hidden='true'
      />

      <div className='relative z-10 mx-auto max-w-6xl'>
        <SectionIntro
          eyebrow={work.eyebrow}
          note={work.note}
          title={work.title}
        />

        <ol className='mt-16 border-t border-border'>
          {work.items.map((item) => (
            <li
              className='group relative border-b border-border'
              data-work-row
              key={item.company}
            >
              <div
                className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100'
                style={{ background: 'var(--panel)' }}
                aria-hidden='true'
              />
              <article className='relative grid gap-5 px-1 py-9 sm:px-4 lg:grid-cols-[7rem_minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-10'>
                <p className='mono-label pt-1.5 text-faint transition-colors duration-500 group-hover:text-foreground'>
                  {item.years}
                </p>

                <div>
                  <h3 className='text-xl font-medium tracking-[-0.025em] sm:text-2xl'>
                    {item.company}
                  </h3>
                  <p className='mt-1.5 text-sm text-muted-foreground'>
                    {item.title}
                  </p>
                  <p className='mono-label mt-3 text-faint'>{item.via}</p>
                </div>

                <div>
                  <p className='max-w-2xl text-base leading-[1.75] text-muted-foreground transition-colors duration-500 group-hover:text-foreground/85'>
                    {item.summary}
                  </p>
                  <ul className='mt-5 flex flex-wrap gap-2'>
                    {item.stack.map((tool) => (
                      <li
                        className='squircle border border-border px-3 py-1 font-mono text-[0.6875rem] tracking-[0.02em] text-muted-foreground transition-colors duration-500 group-hover:border-border-strong group-hover:text-foreground'
                        key={tool}
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
