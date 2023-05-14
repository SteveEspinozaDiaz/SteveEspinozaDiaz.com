/** @type {import("next").NextConfig} */
const nextConfig = {}

module.exports = {
  experimental: { appDir: true, serverActions: true },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
}