import { Banner } from '@features/Banner/Banner'
import type { Metadata } from 'next'

const metadata: Metadata = {
  title: 'Home | MG',
}

const HomePage = () => {
  return <Banner />
}

export { metadata }
export default HomePage
