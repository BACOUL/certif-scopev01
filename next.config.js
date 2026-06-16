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
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "certif-scope.com" }],
        destination: "https://www.certif-scope.com/:path*",
        permanent: true,
      },
      { source: "/", destination: "/fr/", permanent: true },
      { source: "/en", destination: "/fr/", permanent: true },
      { source: "/de", destination: "/fr/", permanent: true },
      { source: "/generate", destination: "/fr/generate/", permanent: true },
      { source: "/verify", destination: "/fr/verify/", permanent: true },
      { source: "/verify/technical", destination: "/fr/verify/technical/", permanent: true },
      { source: "/pricing", destination: "/fr/pricing/", permanent: true },
      { source: "/product", destination: "/fr/product/", permanent: true },
      { source: "/product/methodology", destination: "/fr/product/methodology/", permanent: true },
      { source: "/product/compliance", destination: "/fr/product/compliance/", permanent: true },
      { source: "/partners", destination: "/fr/partners/", permanent: true },
      { source: "/contact", destination: "/fr/contact/", permanent: true },
      { source: "/legal", destination: "/fr/legal/", permanent: true },
      { source: "/privacy", destination: "/fr/privacy/", permanent: true },
      { source: "/terms", destination: "/fr/terms/", permanent: true },
      { source: "/cookies", destination: "/fr/cookies/", permanent: true },
      { source: "/data-processing", destination: "/fr/data-processing/", permanent: true },
      { source: "/about", destination: "/fr/", permanent: true },
      { source: "/en/:path*", destination: "/fr/", permanent: true },
      { source: "/de/:path*", destination: "/fr/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
