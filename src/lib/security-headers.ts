const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "img-src 'self' data: blob:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self'",
  "worker-src 'self' blob:",
  'upgrade-insecure-requests',
].join('; ')

export const securityHeaders = [
  ['Content-Security-Policy', contentSecurityPolicy],
  ['Cross-Origin-Opener-Policy', 'same-origin'],
  [
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  ],
  ['Referrer-Policy', 'strict-origin-when-cross-origin'],
  ['X-Content-Type-Options', 'nosniff'],
  ['X-Frame-Options', 'DENY'],
] as const
