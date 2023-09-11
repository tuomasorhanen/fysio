/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'standalone',
  swcMinify: true,
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    domains: ['cdn.sanity.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    config.cache = true;
    return config;
  },
  experimental: { appDir: true },
  optimizeFonts: true,
};

export default config;
