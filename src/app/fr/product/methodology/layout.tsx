import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Méthodologie de l’attestation CO₂e — Certif-Scope",
  description:
    "Méthodologie de l’attestation CO₂e Certif-Scope : modèle spend-based, facteurs d’émission, logique de calcul, limites et cadre d’utilisation.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/product/methodology/",
  },
  openGraph: {
    title: "Méthodologie de l’attestation CO₂e — Certif-Scope",
    description:
      "Méthodologie de l’attestation CO₂e Certif-Scope : modèle spend-based, facteurs d’émission, logique de calcul, limites et cadre d’utilisation.",
    url: "https://www.certif-scope.com/fr/product/methodology/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function ProductMethodologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
