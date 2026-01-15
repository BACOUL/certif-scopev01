import ClientLayout from "./client-layout";
import "../styles/index.css";

export const metadata = {
  title: "Certif-Scope — Instant CO₂e Attestation for SMEs",
  description:
    "Generate a standardized, spend-based CO₂e Attestation in seconds. Verifiable integrity, uniform structure, procurement-ready format. Not a CSRD/ESRS report.",
  keywords: [
    "CO2e attestation",
    "carbon footprint document",
    "spend-based CO2e",
    "procurement ESG",
    "supplier screening",
    "GHG Protocol category 1",
    "emission factors",
    "verification ID",
  ],
  openGraph: {
    title: "Certif-Scope — Instant CO₂e Attestation",
    description:
      "Generate a verifiable, spend-based CO₂e Attestation accepted in procurement and banking workflows across Europe.",
    url: "https://certif-scope.com",
    siteName: "Certif-Scope",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CO₂e Attestation Preview",
      },
    ],
  },
  alternates: {
    canonical: "https://certif-scope.com/",
    languages: {
      en: "https://certif-scope.com/en/",
      fr: "https://certif-scope.com/fr/",
      de: "https://certif-scope.com/de/",
      es: "https://certif-scope.com/es/",
      it: "https://certif-scope.com/it/",
    },
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="alternate" href="https://certif-scope.com/en/" hrefLang="en" />
        <link rel="alternate" href="https://certif-scope.com/fr/" hrefLang="fr" />
        <link rel="alternate" href="https://certif-scope.com/de/" hrefLang="de" />
        <link rel="alternate" href="https://certif-scope.com/es/" hrefLang="es" />
        <link rel="alternate" href="https://certif-scope.com/it/" hrefLang="it" />
        <link rel="alternate" href="https://certif-scope.com/" hrefLang="x-default" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Certif-Scope CO₂e Attestation",
              description:
                "Spend-based CO₂e Attestation for SMEs. Instant, verifiable and structured for procurement and ESG screening.",
              brand: "Certif-Scope",
              offers: {
                "@type": "Offer",
                price: "49.00",
                priceCurrency: "EUR",
                url: "https://certif-scope.com/pricing",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
      </head>

      <body className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <ClientLayout>
          <div className="mx-auto w-full max-w-[1200px] px-4 pt-24">
            {children}
          </div>
        </ClientLayout>
      </body>
    </html>
  );
      }
