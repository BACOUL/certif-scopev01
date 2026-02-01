import ClientLayout from "./client-layout";
import "../styles/index.css";

/* ======================================================
   GLOBAL APP CONFIG
   - force-dynamic conservé volontairement
   - un seul layout pour EN + FR
====================================================== */
export const dynamic = "force-dynamic";
export const revalidate = 0;

/* ======================================================
   DEFAULT METADATA (EN — langue canonique)
   Les pages /fr ont leur propre metadata
====================================================== */
export const metadata = {
  title: "CO₂e Attestation for SMEs | Banks & Procurement – Certif-Scope",
  description:
    "Generate a standardized, spend-based CO₂e attestation for SMEs. Used to respond to requests from banks, insurers and procurement — without a full carbon audit.",
  alternates: {
    canonical: "https://www.certif-scope.com/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "CO₂e Attestation for SMEs – Certif-Scope",
    description:
      "Standardized, spend-based CO₂e attestation for SMEs. Independently verifiable and used in banking, insurance and procurement workflows.",
    url: "https://www.certif-scope.com/",
    siteName: "Certif-Scope",
    images: [
      {
        url: "https://www.certif-scope.com/og-image.png",
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
    images: ["https://www.certif-scope.com/og-image.png"],
  },
};

/* ======================================================
   ROOT LAYOUT
   ⚠️ Pas de lang ici → géré dynamiquement dans ClientLayout
====================================================== */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        {/* JSON-LD — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com/",
              logo: "https://www.certif-scope.com/logo.png",
              description:
                "Spend-based CO₂e attestations used in procurement, banking and ESG workflows across Europe.",
            }),
          }}
        />

        {/* JSON-LD — Product */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "CO₂e Attestation",
              description:
                "Instantly generated spend-based CO₂e attestation based on annual spending (€). Includes verification ID and integrity hash.",
              image: "https://www.certif-scope.com/preview.png",
              brand: {
                "@type": "Brand",
                name: "Certif-Scope",
              },
              offers: {
                "@type": "Offer",
                url: "https://www.certif-scope.com/pricing",
                priceCurrency: "EUR",
                price: "49",
                availability: "https://schema.org/InStock",
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
