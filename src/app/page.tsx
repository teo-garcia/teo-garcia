import type { Metadata } from 'next'
import { JobsExperience } from 'features/JobsExperience/JobsExperience'
import { TechStack } from 'features/TechStack/TechStack'
import { Welcome } from 'features/Welcome/Welcome'

const metadata: Metadata = {
  title: 'Home | MG',
}

const HomePage = () => {
  return (
    <div className="relative z-10 flex flex-col gap-y-24 pb-12 pt-4 lg:gap-y-24 lg:py-24">
      <Welcome />
      <TechStack />
      <JobsExperience />
    </div>
  )
}

export { metadata }
export default HomePage
