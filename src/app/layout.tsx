import type { Metadata } from "next";
import ClientLayout from "./client-layout";
import "../styles/index.css";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "CO₂e Attestation for SMEs | Banks & Procurement – Certif-Scope",
  description:
    "Generate a standardized, spend-based CO₂e attestation for SMEs. Used to respond to requests from banks, insurers and procurement — without a full carbon audit.",
  alternates: {
    canonical: "https://www.certif-scope.com/",
    languages: {
      en: "https://www.certif-scope.com/",
      fr: "https://www.certif-scope.com/fr",
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-933198701"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
              window.gtag('js', new Date());
              window.gtag('config', 'AW-933198701');
            `,
          }}
        />

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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com/",
              inLanguage: "en",
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
