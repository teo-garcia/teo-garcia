import { questions } from '../portfolio-content/portfolio-content'
import { SectionIntro } from '../section-intro/section-intro'

export function QuestionsSection() {
  return (
    <section
      className='relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-12'
      data-section='q&a'
      id='questions'
    >
      <div
        className='layer-bloom pointer-events-none absolute left-[-18%] top-1/3 z-0 h-[30rem] w-[40rem]'
        data-bloom
        aria-hidden='true'
      />

      <div className='relative z-10 mx-auto grid max-w-6xl gap-14 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-20'>
        <div className='lg:sticky lg:top-32 lg:self-start'>
          <SectionIntro
            eyebrow={questions.eyebrow}
            note={questions.note}
            title={questions.title}
          />
        </div>

        <dl className='border-t border-border'>
          {questions.items.map((item, index) => (
            <div
              className='group border-b border-border py-8 sm:py-10'
              data-qa-row
              key={item.question}
            >
              <dt className='flex gap-6 text-balance text-xl font-medium leading-[1.25] tracking-[-0.025em] text-foreground sm:text-2xl'>
                <span
                  className='mono-label w-8 shrink-0 pt-1.5 text-faint transition-colors duration-500 group-hover:text-foreground'
                  aria-hidden='true'
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{item.question}</span>
              </dt>
              <dd className='mt-4 max-w-2xl pl-14 text-base leading-[1.75] text-muted-foreground transition-colors duration-500 group-hover:text-foreground/85'>
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
