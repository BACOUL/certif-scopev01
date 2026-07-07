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
    // Désactivé volontairement
    optimizeCss: false,
    optimizePackageImports: ["react", "react-dom"],
  },

  compiler: {
    // Supprime tous les console.* en production
    removeConsole: process.env.NODE_ENV === "production",
  },

  async redirects() {
    return [
      // Canonical host/language entry points and legacy root URLs.
      {
        source: "/pricing",
        destination: "/fr/pricing/",
        permanent: true,
      },
      {
        source: "/product",
        destination: "/fr/product/",
        permanent: true,
      },
      {
        source: "/product/methodology",
        destination: "/fr/product/methodology/",
        permanent: true,
      },
      {
        source: "/product/methodology/compliance",
        destination: "/fr/product/compliance/",
        permanent: true,
      },
      {
        source: "/why-companies-ask",
        destination: "/fr/why-companies-ask/",
        permanent: true,
      },

      // FR trailing-slash normalization for URLs already seen by Google.
      {
        source: "/fr/pricing",
        destination: "/fr/pricing/",
        permanent: true,
      },
      {
        source: "/fr/generate",
        destination: "/fr/generate/",
        permanent: true,
      },
      {
        source: "/fr/verify",
        destination: "/fr/verify/",
        permanent: true,
      },
      {
        source: "/fr/bilan-carbone-pme",
        destination: "/fr/bilan-carbone-pme/",
        permanent: true,
      },
      {
        source: "/fr/bilan-carbone-appel-offres",
        destination: "/fr/bilan-carbone-appel-offres/",
        permanent: true,
      },
      {
        source: "/fr/product",
        destination: "/fr/product/",
        permanent: true,
      },
      {
        source: "/fr/product/methodology",
        destination: "/fr/product/methodology/",
        permanent: true,
      },
      {
        source: "/fr/product/compliance",
        destination: "/fr/product/compliance/",
        permanent: true,
      },
      {
        source: "/fr/product/methodology/compliance",
        destination: "/fr/product/compliance/",
        permanent: true,
      },
      {
        source: "/fr/product/methodology/compliance/",
        destination: "/fr/product/compliance/",
        permanent: true,
      },
      {
        source: "/fr/why-companies-ask/attestation-carbone-appel-offres",
        destination: "/fr/why-companies-ask/attestation-carbone-appel-offres/",
        permanent: true,
      },
      {
        source: "/fr/why-companies-ask/attestation-carbone-fournisseur",
        destination: "/fr/why-companies-ask/attestation-carbone-fournisseur/",
        permanent: true,
      },
      {
        source: "/fr/why-companies-ask/exigences-co2-banques-assurances",
        destination: "/fr/why-companies-ask/exigences-co2-banques-assurances/",
        permanent: true,
      },
      {
        source: "/fr/scope-1-2-3-explication",
        destination: "/fr/scope-1-2-3-explication/",
        permanent: true,
      },

      // DE legacy English slugs and canonical German slugs.
      {
        source: "/de/pricing",
        destination: "/de/preise/",
        permanent: true,
      },
      {
        source: "/de/pricing/",
        destination: "/de/preise/",
        permanent: true,
      },
      {
        source: "/de/generate",
        destination: "/de/erstellen/",
        permanent: true,
      },
      {
        source: "/de/generate/",
        destination: "/de/erstellen/",
        permanent: true,
      },
      {
        source: "/de/verify",
        destination: "/de/pruefen/",
        permanent: true,
      },
      {
        source: "/de/verify/",
        destination: "/de/pruefen/",
        permanent: true,
      },
      {
        source: "/de/co2-bilanz-kmu",
        destination: "/de/co2-bilanz-kmu/",
        permanent: true,
      },
      {
        source: "/de/methodik",
        destination: "/de/methodik/",
        permanent: true,
      },
      {
        source: "/de/grenzen-und-compliance",
        destination: "/de/grenzen-und-compliance/",
        permanent: true,
      },
      {
        source: "/de/warum-unternehmen-co2-angaben-anfordern",
        destination: "/de/warum-unternehmen-co2-angaben-anfordern/",
        permanent: true,
      },

      // Legacy English guide URLs mapped to the FR canonical equivalents.
      {
        source: "/why-companies-ask/company-carbon-proof",
        destination: "/fr/why-companies-ask/preuve-carbone-entreprise/",
        permanent: true,
      },
      {
        source: "/why-companies-ask/carbon-attestation-tender",
        destination: "/fr/why-companies-ask/attestation-carbone-appel-offres/",
        permanent: true,
      },
      {
        source: "/why-companies-ask/supplier-carbon-attestation",
        destination: "/fr/why-companies-ask/attestation-carbone-fournisseur/",
        permanent: true,
      },
      {
        source: "/why-companies-ask/carbon-attestation-smes",
        destination: "/fr/why-companies-ask/attestation-carbone-pme/",
        permanent: true,
      },
      {
        source: "/why-companies-ask/co2-requirements-banks-insurers",
        destination: "/fr/why-companies-ask/exigences-co2-banques-assurances/",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "interest-cohort=()",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;