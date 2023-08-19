/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'standalone',
  swcMinify: true,
  images: {
    unoptimized: false,
    domains: ['cdn.sanity.io']
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    config.cache = true;
    return config;
  },
  experimental: { appDir: true },
  optimizeFonts: true,
};

export default config;
