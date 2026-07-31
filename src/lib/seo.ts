import { env } from './env'

const publicUrl = env.publicUrl.replace(/\/$/, '')

export const siteMetadata = {
  description:
    'Mateo Garcia is a senior software engineer who makes complicated software feel obvious — auth, permissions, integrations, and the legacy services nobody wants to open.',
  name: 'Mateo Garcia',
  shortName: 'Mateo Garcia',
  url: publicUrl,
} as const

export const getCanonicalUrl = (path = '/') => {
  return new URL(path, siteMetadata.url).toString()
}
