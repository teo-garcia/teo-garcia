import type { Metadata } from 'next'
import { TechStackBanner } from '@features/TechStackBanner/TechStackBanner'
import { WelcomeBanner } from '@features/WelcomeBanner/WelcomeBanner'

const metadata: Metadata = {
  title: 'Home | MG',
}

const HomePage = () => {
  return (
    <div className="flex flex-col gap-y-12 py-4 lg:gap-y-24 lg:py-24">
      <WelcomeBanner />
      <TechStackBanner />
    </div>
  )
}

export { metadata }
export default HomePage
