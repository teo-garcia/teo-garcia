/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true, typedRoutes: true },
  images: {
    domains: ['placehold.co'],
  },
}

module.exports = nextConfig
