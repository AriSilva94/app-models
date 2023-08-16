/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
    ],
    minimumCacheTTL: 15000000,
  },
};

module.exports = nextConfig;
