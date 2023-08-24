'use client'

import Image from 'next/image'

const props = {
  title: 'Hey!',
  description:
    "I'm Mateo Garcia, a Senior Software Engineer from Medellin, Colombia. With 7 years of experience, I craft web solutions that merge elegant design with flawless functionality.",
}

const Welcome = () => {
  const { title, description } = props
  return (
    <section className="mx-auto flex h-full w-11/12 flex-col items-center  gap-y-12  md:w-9/12 lg:w-10/12 lg:flex-row-reverse lg:justify-between xl:w-9/12">
      <div className="relative h-[360px] w-[320px] lg:h-96 lg:w-80 xl:h-[500px] xl:w-[450px] ">
        <Image
          alt=""
          src="https://placehold.co/450x500/94a3b8/f8fafc/png?text=Profile\nPic"
          fill
          className="rounded-lg shadow-lg shadow-slate-300 dark:shadow-slate-500"
        />
      </div>
      <div className="flex flex-col items-center gap-y-8 lg:w-6/12 lg:items-start lg:gap-y-6 xl:gap-y-12">
        <h1 className="text-center text-8xl font-bold md:text-9xl xl:w-auto">
          {title}
          {/* <span className="text-blue-400">!</span> */}
        </h1>
        <p className="text-center text-lg md:text-2xl  lg:text-left lg:text-2xl">
          {description}
        </p>
      </div>
    </section>
  )
}

export { Welcome }
