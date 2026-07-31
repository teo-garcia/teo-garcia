export function SectionIntro({
  eyebrow,
  note,
  title,
}: {
  eyebrow: string
  note: string
  title: string
}) {
  return (
    <div className='max-w-md'>
      <p className='mono-label text-faint'>{eyebrow}</p>
      <h2
        className='mt-5 text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl'
        data-line-reveal
      >
        {title}
      </h2>
      <div
        className='mt-6 h-px w-16 origin-left bg-border-strong'
        data-section-rule
      />
      <p className='mt-6 max-w-xs text-sm leading-[1.7] text-muted-foreground'>
        {note}
      </p>
    </div>
  )
}
