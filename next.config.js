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
    const legacyRedirects = [
      ["/generate", "/fr/generate/"],
      ["/verify", "/fr/verify/"],
      ["/verify/technical", "/fr/verify/technical/"],
      ["/pricing", "/fr/pricing/"],
      ["/product", "/fr/product/"],
      ["/product/methodology", "/fr/product/methodology/"],
      ["/product/compliance", "/fr/product/compliance/"],
      ["/methodology", "/fr/product/methodology/"],
      ["/compliance", "/fr/product/compliance/"],
      ["/partners", "/fr/partners/"],
      ["/contact", "/fr/contact/"],
      ["/legal", "/fr/legal/"],
      ["/privacy", "/fr/privacy/"],
      ["/terms", "/fr/terms/"],
      ["/cookies", "/fr/cookies/"],
      ["/data-processing", "/fr/data-processing/"],
      ["/about", "/fr/"],
    ];

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
      ...legacyRedirects.map(([source, destination]) => ({ source, destination, permanent: true })),
      ...legacyRedirects.map(([source, destination]) => ({ source: "/en" + source, destination, permanent: true })),
      ...legacyRedirects.map(([source, destination]) => ({ source: "/de" + source, destination, permanent: true })),
      { source: "/en/:path*", destination: "/fr/", permanent: true },
      { source: "/de/:path*", destination: "/fr/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
