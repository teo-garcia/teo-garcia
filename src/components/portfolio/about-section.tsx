import { about, assets } from './content'

export function AboutSection() {
  return (
    <section
      className='relative isolate overflow-hidden bg-[#08251f] px-5 py-20 text-[#f5f2ea] sm:px-8 sm:py-24 lg:px-12'
      data-reveal
      data-section='shape'
      id='approach'
    >
      <img
        alt={assets.botanicalBand.alt}
        className='pointer-events-none absolute inset-y-0 right-0 z-[-2] h-full w-full object-cover object-right opacity-50 mix-blend-screen lg:w-[58%]'
        data-parallax-image
        src={assets.botanicalBand.src}
      />
      <div
        className='absolute inset-0 z-[-1] bg-[linear-gradient(90deg,rgb(8_37_31)_0%,rgb(8_37_31_/_0.96)_38%,rgb(8_37_31_/_0.72)_68%,rgb(8_37_31_/_0.44)_100%)]'
        aria-hidden='true'
      />
      <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[12rem_minmax(0,1fr)_18rem] lg:items-center'>
        <div className='border-r border-white/25 pr-8'>
          <p className='text-xs font-semibold uppercase tracking-[0.22em] text-[#a6cfc0]'>
            {about.eyebrow}
          </p>
          <div
            className='mt-5 h-px w-8 origin-left bg-[#a6cfc0]'
            data-section-rule
          />
          <p className='mt-7 max-w-48 text-sm leading-7 text-[#d9e3dc]'>
            {about.note}
          </p>
        </div>
        <div className='max-w-4xl'>
          <p
            className='text-balance text-3xl font-medium leading-[1.16] tracking-[-0.03em] sm:text-4xl lg:text-5xl'
            data-line-reveal
          >
            {about.title}
          </p>
          <p
            className='mt-6 max-w-2xl text-xl leading-8 text-[#d9e3dc]'
            data-line-reveal
          >
            {about.body}
          </p>
        </div>
        <div className='hidden h-48 border-l border-white/25 lg:block' />
      </div>
    </section>
  )
}
