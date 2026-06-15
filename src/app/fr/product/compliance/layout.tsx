import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conformité et limites juridiques — Certif-Scope",
  description:
    "Cadre de conformité de l’attestation CO₂e Certif-Scope : limites juridiques, non-équivalence CSRD/ESRS, RGPD, usages autorisés et responsabilités.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/product/compliance/",
  },
  openGraph: {
    title: "Conformité et limites juridiques — Certif-Scope",
    description:
      "Cadre de conformité de l’attestation CO₂e Certif-Scope : limites juridiques, non-équivalence CSRD/ESRS, RGPD, usages autorisés et responsabilités.",
    url: "https://www.certif-scope.com/fr/product/compliance/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function ProductComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
