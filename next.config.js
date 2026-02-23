/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  reactStrictMode: true,

  // ✅ Normalise les URLs en /fr/ /de/ etc.
  trailingSlash: true,

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
      // ✅ Normalisation i18n (évite erreurs "redirection" /de)
      { source: "/fr", destination: "/fr/", permanent: true },
      { source: "/de", destination: "/de/", permanent: true },

      // 💥 Redirections propres pour anciens chemins EN
      { source: "/en/about", destination: "/", permanent: true },
      { source: "/en/data-processing", destination: "/", permanent: true },
      { source: "/en/legal", destination: "/", permanent: true },

      // 🧭 /en as alias redirect vers /
      { source: "/en", destination: "/", permanent: true },

      // 📦 tous les autres anciens /en/* redirigent vers / (anglais canonique)
      { source: "/en/:path*", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
