import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'placehold.it'
      }
    ]
  }
}

export default nextConfig
