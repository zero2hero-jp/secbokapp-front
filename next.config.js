/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production'
// const prefixPath = !isProd ? '/' : ''
const nextConfig = {
  reactStrictMode: true,
  // assetPrefix: prefixPath,
  basePath: "",
  swcMinify: true,
}

module.exports = nextConfig
