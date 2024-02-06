const jobs = [
  {
    name: 'Pragma',
    logo: 'PR',
    date: '2018',
  },
  {
    name: 'Globant',
    logo: 'GL',
    date: '2018 - 2020',
  },
  {
    name: 'Huge',
    logo: 'HU',
    date: '2020 - 2021',
  },
  {
    name: 'Matter Supply',
    logo: 'MS',
    date: '2022',
  },
  {
    name: 'Gorilla Logic',
    logo: 'GL',
    date: '2022 - Now',
  },
  // {
  //   name: 'Your company',
  //   logo: '?',
  //   date: '',
  // },
]

const JobsExperience = () => {
  return (
    <section className="mx-auto flex w-10/12 flex-col gap-y-2 md:w-9/12 lg:w-10/12 lg:gap-y-8 xl:w-9/12">
      <h2 className="pb-12 text-6xl font-bold ">Work Experience:</h2>

      <ul className="mx-auto grid w-full grid-cols-2 items-start justify-center gap-y-8 md:grid-cols-3 md:gap-12 xl:w-10/12 xl:grid-cols-5 xl:gap-x-24">
        {jobs.map((job) => {
          return (
            <li
              className="flex flex-col items-center justify-center gap-y-4 md:gap-y-4 lg:gap-y-6"
              key={job.name}
            >
              <p className="flex size-24 items-center justify-center rounded-full border-8 border-slate-400 bg-slate-900 text-center text-5xl font-bold text-slate-200 dark:bg-slate-200 dark:text-slate-900 xl:size-32 xl:text-6xl">
                {job.logo}
              </p>
              <h3 className="text-center text-3xl font-bold">{job.name}</h3>
              <span className="text-center text-xl">{job.date}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export { JobsExperience }
