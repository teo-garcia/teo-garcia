import { env } from './env'

const publicUrl = env.publicUrl.replace(/\/$/, '')

export const siteMetadata = {
  description:
    'Mateo Garcia is a senior software engineer who works across the stack, turning unclear requirements into software people can actually use.',
  name: 'Mateo Garcia',
  shortName: 'Mateo Garcia',
  url: publicUrl,
} as const

export const getCanonicalUrl = (path = '/') => {
  return new URL(path, siteMetadata.url).toString()
}
