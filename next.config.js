/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: 'https',
        hostname: 'www.figma.com',
      },
    ],
  },
  rewrites: () => [
    {
      source: '/',
      destination: '/friends',
    },
  ],
}

module.exports = nextConfig
