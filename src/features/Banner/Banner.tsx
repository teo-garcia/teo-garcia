'use client'
import { useQuery } from '@tanstack/react-query'
import { FaReact } from 'react-icons/fa'

const fetcher = () =>
  fetch('/api')
    .then((res) => res.json())
    .then((res) => res)

const Banner = () => {
  const { data, isLoading } = useQuery(['mock query'], fetcher)

  if (isLoading) return null

  const { title } = data
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-y-16 bg-amber-300 transition-colors duration-500 ease-in-out dark:bg-amber-700">
      <FaReact className="h-48 w-48 animate-[spin_5s_linear_infinite] text-black dark:text-white xl:h-64 xl:w-64" />
      <h1 className="text-center text-9xl font-bold text-black dark:text-white md:w-2/3 md:text-8xl lg:w-1/2 xl:w-auto xl:text-9xl">
        {title}
      </h1>
    </section>
  )
}

export { Banner }
