/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
