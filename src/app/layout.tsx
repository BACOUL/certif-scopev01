import ClientLayout from "./client-layout";
import "../styles/index.css";

/* ⛔️ CRITIQUE — empêche le rendu statique global */
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Certif-Scope — Instant CO₂e Attestation for SMEs",
  description:
    "Generate a standardized, verifiable, spend-based CO₂e Attestation in seconds — accepted in procurement, banking and insurer workflows.",
  alternates: {
    canonical: "https://certif-scope.com/",
    languages: {
      en: "https://certif-scope.com/",
      fr: "https://certif-scope.com/fr/",
      de: "https://certif-scope.com/de/",
      es: "https://certif-scope.com/es/",
      it: "https://certif-scope.com/it/",
    },
  },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Certif-Scope — Instant CO₂e Attestation",
    description:
      "Spend-based CO₂e attestation used across Europe. Standardized, verifiable and ready for procurement workflows.",
    url: "https://certif-scope.com/",
    siteName: "Certif-Scope",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CO₂e Attestation Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* HREFLANG SEO */}
        <link rel="alternate" href="https://certif-scope.com/" hrefLang="en" />
        <link rel="alternate" href="https://certif-scope.com/fr/" hrefLang="fr" />
        <link rel="alternate" href="https://certif-scope.com/de/" hrefLang="de" />
        <link rel="alternate" href="https://certif-scope.com/es/" hrefLang="es" />
        <link rel="alternate" href="https://certif-scope.com/it/" hrefLang="it" />
        <link rel="alternate" href="https://certif-scope.com/" hrefLang="x-default" />

        {/* STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Certif-Scope",
              url: "https://certif-scope.com/",
              logo: "https://certif-scope.com/logo.png",
              description:
                "Spend-based CO₂e attestations used in procurement, banking and ESG workflows across Europe.",
              product: {
                "@type": "Product",
                name: "CO₂e Attestation",
                description:
                  "Instantly generated CO₂e Attestation based on annual spending (€). Includes verification ID and hash.",
                offers: {
                  "@type": "Offer",
                  priceCurrency: "EUR",
                  price: "49",
                  availability: "https://schema.org/InStock",
                  url: "https://certif-scope.com/pricing",
                },
              },
            }),
          }}
        />
      </head>

      <body className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
                }
