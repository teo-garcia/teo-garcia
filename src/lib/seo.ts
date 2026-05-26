import { env } from './env'

const publicUrl = env.publicUrl.replace(/\/$/, '')

export const siteMetadata = {
  description:
    'Mateo Garcia is a senior software engineer focused on turning unclear requirements, legacy behavior, and production pressure into systems teams can reason about.',
  name: 'Mateo Garcia',
  shortName: 'Mateo Garcia',
  url: publicUrl,
} as const

export const getCanonicalUrl = (path = '/') => {
  return new URL(path, siteMetadata.url).toString()
}
