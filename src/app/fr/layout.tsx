import "../../styles/index.css";

/* ======================================================
   CONFIG FR
====================================================== */
export const dynamic = "force-dynamic";
export const revalidate = 0;

/* ======================================================
   METADATA FR — SEO GOOGLE
====================================================== */
export const metadata = {
  title: "Attestation CO₂e pour PME | Certif-Scope",
  description:
    "Générez une attestation CO₂e indicative basée sur les dépenses, utilisée pour les appels d’offres, les banques et le screening ESG. Format standardisé, vérifiable indépendamment. Document non réglementaire.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr",
    languages: {
      en: "https://www.certif-scope.com/",
      fr: "https://www.certif-scope.com/fr",
    },
  },
  openGraph: {
    title: "Attestation CO₂e pour PME | Certif-Scope",
    description:
      "Attestation CO₂e indicative pour appels d’offres, banques et analyses ESG. Format standardisé, vérifiable indépendamment.",
    url: "https://www.certif-scope.com/fr",
    siteName: "Certif-Scope",
    locale: "fr_FR",
    type: "website",
  },
};

/* ======================================================
   LAYOUT FR
   ⚠️ AUCUN ClientLayout ICI
   ⚠️ PAS DE HEADER / FOOTER
====================================================== */
export default function FRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        {children}
      </body>
    </html>
  );
}
