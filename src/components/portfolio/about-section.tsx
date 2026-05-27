import { assets, about } from './content'

export function AboutSection() {
  return (
    <section className='py-24 sm:py-32' data-reveal data-section='shape'>
      <div className='grid gap-10 border-y border-border/70 py-12 lg:grid-cols-[16rem_1fr_15rem] lg:py-20'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.22em] text-accent'>
            Shape
          </p>
          <p className='mt-5 max-w-60 text-sm leading-6 text-muted-foreground'>
            Useful software starts before the solution has a neat name.
          </p>
        </div>
        <div className='max-w-3xl space-y-6 text-2xl font-medium leading-[1.2] text-foreground/92 sm:text-4xl'>
          {about.map((paragraph) => (
            <p className='text-balance' data-line-reveal key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
        <img
          alt={assets.fern.alt}
          className='hidden aspect-[4/5] w-full self-end rounded-sm border border-border/60 object-cover opacity-80 mix-blend-multiply grayscale dark:mix-blend-screen lg:block'
          data-section-image
          src={assets.fern.src}
        />
      </div>
    </section>
  )
}
