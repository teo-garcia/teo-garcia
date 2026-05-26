import { env } from './env'

const publicUrl = env.publicUrl.replace(/\/$/, '')

export const siteMetadata = {
  description:
    'Production-ready Astro template with React islands, theme support, health checks, tests, and Docker defaults.',
  name: 'React Template Astro',
  shortName: 'RTA',
  url: publicUrl,
} as const

export const getCanonicalUrl = (path = '/') => {
  return new URL(path, siteMetadata.url).toString()
}
