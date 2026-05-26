import './src/styles/app.css'

import { afterAll, afterEach, beforeAll } from 'vitest'

let server: typeof import('./src/lib/mocks/node').server | undefined

if (!('document' in globalThis)) {
  beforeAll(async () => {
    const mswNode = await import('./src/lib/mocks/node')
    server = mswNode.server
    server.listen({ onUnhandledRequest: 'bypass' })
  })

  afterEach(() => {
    server?.resetHandlers()
  })

  afterAll(() => {
    server?.close()
  })
}
