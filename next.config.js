/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['mongoose'],
  },
  images: {
    remotePatterns: [
      {
        hostname: 'img.clerk.com',
      },
      {
        hostname: 'cdn.weatherapi.com',
      },
      {
        hostname: 'undefined',
      },
      {
        hostname: 'utfs.io',
      },
    ],
  },
};

module.exports = nextConfig;
