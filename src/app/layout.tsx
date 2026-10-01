import type { Metadata } from "next";
import ClientLayout from "./client-layout";
import { headers } from "next/headers";
import { isEuLocale } from "@/lib/eu-locales-core";
import "../styles/index.css";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Certif-Scope — Attestation CO₂e indicative pour PME",
  description:
    "Certif-Scope aide les PME à préparer un document CO₂e indicatif, standardisé et vérifiable pour les demandes documentaires simples.",
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
    title: "Certif-Scope — Attestation CO₂e indicative pour PME",
    description:
      "Document CO₂e indicatif, standardisé et vérifiable pour les demandes documentaires des PME.",
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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.certif-scope.com/og-image.png"],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const requestedLocale = (await headers()).get("x-site-locale") || "fr";
  const locale = isEuLocale(requestedLocale) ? requestedLocale : "fr";

  return (
    <html lang={locale} className="light" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com/",
              logo: "https://www.certif-scope.com/logo.png",
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
              inLanguage: locale,
            }),
          }}
        />
      </head>

      <body className="bg-white text-gray-800">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
