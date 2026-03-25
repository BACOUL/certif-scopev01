/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  reactStrictMode: true,
  trailingSlash: true,

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },

  experimental: {
    optimizeCss: false,
    optimizePackageImports: ["react", "react-dom"],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "interest-cohort=()" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Domaine canonique : tout vers https://www.certif-scope.com
      {
        source: "/:path*",
        has: [{ type: "host", value: "certif-scope.com" }],
        destination: "https://www.certif-scope.com/:path*",
        permanent: true,
      },

      // Legacy EN -> canonique (EN = /)
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/", destination: "/", permanent: true },

      // Anciennes pages EN
      { source: "/en/about", destination: "/", permanent: true },
      { source: "/en/about/", destination: "/", permanent: true },

      { source: "/en/data-processing", destination: "/", permanent: true },
      { source: "/en/data-processing/", destination: "/", permanent: true },

      { source: "/en/legal", destination: "/", permanent: true },
      { source: "/en/legal/", destination: "/", permanent: true },

      // Tout le reste sous /en/* -> /
      { source: "/en/:path*", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
