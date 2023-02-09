/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    minimumCacheTTL: 60 * 60 * 24 * 365,
    domains: ["cdn.turismo.tectify.io"],
  },
};

module.exports = nextConfig;
