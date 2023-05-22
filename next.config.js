/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.photos'
      }
    ],
    domains: ['https://picsum.photos/']
  }
};

module.exports = nextConfig;
