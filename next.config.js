/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 360,
  },
};

module.exports = nextConfig;
