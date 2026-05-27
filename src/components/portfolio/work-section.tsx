import { work } from './content'

export function WorkSection() {
  return (
    <section className='py-24 sm:py-32' data-reveal data-section='work'>
      <div>
        <div className='max-w-3xl'>
          <p className='text-xs font-semibold uppercase tracking-[0.22em] text-accent'>
            Work
          </p>
          <h2 className='mt-5 text-balance font-serif text-5xl font-semibold leading-none sm:text-7xl'>
            A few places where the work got clearer.
          </h2>
          <p className='mt-6 max-w-2xl text-base leading-7 text-muted-foreground'>
            Not square cards. Just a clean record of problems, constraints, and
            the kind of systems Mateo has had to make understandable.
          </p>
        </div>
        <div className='mt-12 divide-y divide-border/70 border-y border-border/70'>
          {work.map((item, index) => (
            <article
              className='grid gap-5 py-8 transition-colors hover:text-foreground lg:grid-cols-[10rem_1fr] lg:gap-10'
              data-work-item
              key={item.title}
            >
              <div className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                <p className='text-accent'>
                  {String(index + 1).padStart(2, '0')}
                </p>
                <p className='mt-4'>{item.company}</p>
                <p className='mt-1'>{item.dates}</p>
              </div>
              <div className='max-w-4xl'>
                <h3 className='text-balance font-serif text-3xl font-semibold leading-tight sm:text-4xl'>
                  {item.title}
                </h3>
                <p className='mt-4 max-w-3xl text-base leading-7 text-muted-foreground'>
                  {item.summary}
                </p>
                <ul className='mt-5 grid gap-2 text-sm leading-6 text-foreground/82 sm:grid-cols-3'>
                  {item.proof.map((proof) => (
                    <li className='border-l border-accent/50 pl-3' key={proof}>
                      {proof}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
