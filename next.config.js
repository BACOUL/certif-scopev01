/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  experimental: {
    optimizeCss: true,                     // inline critical CSS
    optimizePackageImports: ["react", "react-dom"], // supprime ancien JS + polyfills inutiles
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  reactStrictMode: true,
};

module.exports = nextConfig;
