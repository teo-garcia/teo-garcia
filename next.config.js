/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { typedRoutes: true },
  images: {
    domains: ['placehold.co'],
  },
}

module.exports = nextConfig
