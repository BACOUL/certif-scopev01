import ClientLayout from "./client-layout";
import "../styles/index.css";

/* ⛔️ NOTE
   Le mode force-dynamic est conservé volontairement.
   Optimisation SEO/statique à traiter plus tard.
*/
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Certif-Scope — Instant CO₂e Attestation for SMEs",
  description:
    "Generate a standardized, verifiable, spend-based CO₂e attestation in seconds for procurement, banking and insurer workflows.",
  alternates: {
    canonical: "https://www.certif-scope.com/",
  },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Certif-Scope — Instant CO₂e Attestation",
    description:
      "Instant spend-based CO₂e attestation. Standardized, verifiable and ready for procurement workflows.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD — HOME ONLY (Organization + WebSite) */}
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
      </head>

      <body className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
