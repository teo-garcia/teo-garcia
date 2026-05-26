export function AboutSection() {
  return (
    <section className='border-t border-border py-12' data-reveal>
      <p className='text-sm font-semibold uppercase tracking-[0.16em] text-teal-600 dark:text-teal-300'>
        About
      </p>
      <div className='mt-6 space-y-5 text-xl leading-9 text-foreground/90'>
        <p>
          I have worked across marketing platforms, travel, banking, campaigns,
          multilingual launches, and a few systems that were older than the
          assumptions around them.
        </p>
        <p>
          The part I care about is usually before the solution has a name:
          asking better questions, finding the real constraint, and leaving code
          that does not punish the next person.
        </p>
      </div>
    </section>
  )
}
