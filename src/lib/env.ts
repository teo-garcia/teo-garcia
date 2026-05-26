import { z } from 'zod'

const envSchema = z.object({
  DEV: z.boolean(),
  PROD: z.boolean(),
  SSR: z.boolean(),
  PUBLIC_SITE_URL: z
    .string()
    .default('http://localhost:4321')
    .refine((value) => {
      try {
        new URL(value)
        return true
      } catch {
        return false
      }
    }, 'PUBLIC_SITE_URL must be a valid URL'),
})

const parsedEnv = envSchema.parse({
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD,
  SSR: import.meta.env.SSR,
  PUBLIC_SITE_URL: import.meta.env.PUBLIC_SITE_URL,
})

export const env = {
  appEnv: parsedEnv.DEV ? 'development' : 'production',
  isDevelopment: parsedEnv.DEV,
  isProduction: parsedEnv.PROD,
  isServer: parsedEnv.SSR,
  isDev: parsedEnv.DEV,
  isProd: parsedEnv.PROD,
  publicUrl: parsedEnv.PUBLIC_SITE_URL,
} as const
