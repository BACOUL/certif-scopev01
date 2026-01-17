/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,

  reactStrictMode: true,

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
    // ⚠️ OBLIGATOIRE : désactive Turbopack pour les API server (PDF, Puppeteer)
    turbo: false,

    // Optimisations safe
    optimizeCss: true,
    optimizePackageImports: ["react", "react-dom"],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

module.exports = nextConfig;
