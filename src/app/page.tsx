import type { Metadata } from 'next'
import { TechStack } from '@features/TechStack/TechStack'
import { Welcome } from '@features/Welcome/Welcome'
import { JobsExperience } from '@features/JobsExperience/JobsExperience'

const metadata: Metadata = {
  title: 'Home | MG',
}

const HomePage = () => {
  return (
    <div className="flex flex-col gap-y-12 pb-12 pt-4 lg:gap-y-24 lg:py-24">
      <Welcome />
      <TechStack />
      <JobsExperience />
    </div>
  )
}

export { metadata }
export default HomePage
