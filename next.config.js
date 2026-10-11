/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Allows production builds to complete even if ESLint warnings occur
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignores strict type-check failures on build if necessary
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.heroui.chat",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

module.exports = nextConfig;