import type { OpenNextConfig } from 'open-next/types/open-next.js'

const config: OpenNextConfig = {
  default: {
    override: {
      wrapper: 'cloudflare',
      converter: 'edge'
      // Unused implementation
      // incrementalCache: 'dummy',
      // tagCache: 'dummy',
      // queue: 'dummy'
    }
  },

  middleware: {
    external: true,
    override: {
      wrapper: 'cloudflare',
      converter: 'edge'
      // proxyExternalRequest: 'fetch'
    }
  }
}

export default config
