/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-Us', 'pt-Br'],
    defaultLocale: 'pt-Br'
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  }
}

module.exports = nextConfig
