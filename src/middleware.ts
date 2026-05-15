import { defineMiddleware } from 'astro:middleware'

import { securityHeaders } from './lib/security-headers'

export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next()

  for (const [key, value] of securityHeaders) {
    response.headers.set(key, value)
  }

  return response
})
