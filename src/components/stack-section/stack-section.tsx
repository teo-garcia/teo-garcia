import { stack } from '../portfolio-content/portfolio-content'
import { SectionIntro } from '../section-intro/section-intro'

export function StackSection() {
  return (
    <section
      className='surface-band relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-12'
      data-section='stack'
      id='stack'
    >
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

        <div className='mt-16 border-t border-border'>
          {stack.groups.map((group, index) => (
            <section
              className='group grid gap-4 border-b border-border py-7 lg:grid-cols-[3rem_minmax(0,14rem)_minmax(0,1fr)] lg:items-baseline lg:gap-8'
              data-tool-row
              key={group.label}
            >
              <span
                className='mono-label text-faint transition-colors duration-500 group-hover:text-foreground'
                aria-hidden='true'
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              <div>
                <h3 className='text-base font-medium tracking-[-0.015em] text-foreground'>
                  {group.label}
                </h3>
                <p className='mt-2 max-w-xs text-sm leading-[1.6] text-muted-foreground'>
                  {group.note}
                </p>
              </div>

              <ul className='flex flex-wrap items-center gap-x-2 gap-y-2'>
                {group.tools.map((tool) => (
                  <li
                    className='squircle border border-border px-3 py-1 font-mono text-xs text-muted-foreground transition-colors duration-500 group-hover:text-foreground'
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
