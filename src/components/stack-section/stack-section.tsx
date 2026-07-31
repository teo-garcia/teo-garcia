import { stack } from '../portfolio-content/portfolio-content'
import { SectionIntro } from '../section-intro/section-intro'

const METER_STEPS = [1, 2, 3, 4]

export function StackSection() {
  return (
    <section
      className='relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-12'
      data-section='stack'
      id='stack'
    >
      <div
        className='rule-fade absolute inset-x-0 top-0 z-10'
        aria-hidden='true'
      />
      <div
        className='layer-bloom pointer-events-none absolute left-1/2 top-[-10%] z-0 h-[34rem] w-[52rem] -translate-x-1/2'
        data-bloom
        aria-hidden='true'
      />

      <div className='relative z-10 mx-auto max-w-6xl'>
        <SectionIntro
          eyebrow={stack.eyebrow}
          note={stack.note}
          title={stack.title}
        />

        <div className='mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {stack.groups.map((group) => (
            <section
              className='panel group rounded-xl p-6 transition-colors duration-500 hover:border-border-strong'
              data-tool-row
              key={group.label}
            >
              <header className='flex items-start justify-between gap-4'>
                <h3 className='text-sm font-medium tracking-[-0.01em] text-foreground'>
                  {group.label}
                </h3>
                <span
                  className='flex shrink-0 items-center gap-1 pt-1'
                  role='img'
                  aria-label={`Reach-for frequency ${group.weight} of 4`}
                >
                  {METER_STEPS.map((step) => (
                    <span
                      className={`h-3 w-0.5 rounded-full transition-colors duration-500 ${
                        step <= group.weight
                          ? 'bg-foreground'
                          : 'bg-border-strong'
                      }`}
                      key={step}
                    />
                  ))}
                </span>
              </header>

              <p className='mt-4 text-sm leading-[1.7] text-muted-foreground'>
                {group.note}
              </p>

              <ul className='mt-6 flex flex-wrap gap-x-3 gap-y-2 border-t border-border pt-5'>
                {group.tools.map((tool) => (
                  <li
                    className='font-mono text-xs tracking-[0.01em] text-foreground/70 transition-colors duration-500 group-hover:text-foreground'
                    key={tool}
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
