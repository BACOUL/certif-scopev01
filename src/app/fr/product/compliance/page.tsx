import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Conformité et limites de l’attestation CO₂e | Certif-Scope",
  description:
    "Cadre légal de l’attestation CO₂e Certif-Scope : document indicatif, non audit, non inventaire GES complet, non reporting CSRD/ESRS, responsabilités et limites d’usage.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/product/compliance/",
    languages: {
      fr: "https://www.certif-scope.com/fr/product/compliance/",
      en: "https://www.certif-scope.com/en/product/compliance/",
      de: "https://www.certif-scope.com/de/grenzen-und-compliance/",
      "x-default": "https://www.certif-scope.com/fr/product/compliance/",
    },
  },
  openGraph: {
    title: "Conformité et limites de l’attestation CO₂e | Certif-Scope",
    description:
      "Limites juridiques, responsabilités, usages autorisés et non-équivalence réglementaire de l’attestation CO₂e indicative Certif-Scope.",
    url: "https://www.certif-scope.com/fr/product/compliance/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function CompliancePage() {
  return <section className="mx-auto max-w-7xl px-6 py-8 md:py-12"><div className="max-w-4xl space-y-8">
    <header><p className="text-sm text-[#64748B]">Périmètre du service</p><h1 className="mt-3 text-3xl font-bold text-[#0B3A63]">Les usages et les limites du document</h1><p className="mt-4 text-gray-700">Certif-Scope fournit une estimation CO₂e indicative fondée sur des dépenses déclarées, dans un PDF daté et vérifiable. Le service ne certifie pas les émissions de votre entreprise.</p></header>
    <section><h2 className="text-xl font-bold text-[#0B3A63]">Une information préliminaire, sous réserve d’acceptation</h2><p className="mt-3 text-gray-700">Le PDF peut être proposé comme pièce indicative à un client, un acheteur ou un autre destinataire qui accepte explicitement ce périmètre. Il ne remplace pas le document ou la méthode exigés par un cahier des charges. L’absence de norme mentionnée ne constitue pas une garantie d’acceptation.</p></section>
    <section><h2 className="text-xl font-bold text-[#0B3A63]">Quand choisir une démarche plus complète</h2><ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700"><li>Un bilan complet ou une ventilation détaillée des Scopes 1, 2 et 3 est exigé.</li><li>Une norme, une certification, une vérification externe ou une méthode précise est imposée.</li><li>Le dossier exige un reporting réglementaire ou une démonstration de performance environnementale.</li></ul></section>
    <section><h2 className="text-xl font-bold text-[#0B3A63]">Ce que la vérification documentaire signifie</h2><p className="mt-3 text-gray-700">Selon le mode utilisé, elle contrôle les éléments d’authenticité et d’intégrité du document. Elle ne contrôle pas les factures ni les dépenses et ne constitue pas un audit indépendant des émissions.</p></section>
    <section><h2 className="text-xl font-bold text-[#0B3A63]">Présentation et transmission</h2><p className="mt-3 text-gray-700">Transmettez le document avec ses limites visibles. Ne le présentez pas comme une certification, un bilan exhaustif, une preuve de conformité ou une allégation de performance environnementale. Vous restez responsable de l’exactitude de vos déclarations.</p></section>
    <section><h2 className="text-xl font-bold text-[#0B3A63]">Année de référence et durée documentaire</h2><p className="mt-3 text-gray-700">L’année de référence désigne la période des dépenses déclarées. La durée de douze mois affichée est une convention documentaire de Certif-Scope, pas une validité réglementaire ni une garantie d’acceptation pendant cette période.</p></section>
    <div className="flex flex-wrap gap-5"><a href="/api/sample" className="font-semibold underline text-[#0B3A63]">Voir l’exemple</a><Link href="/fr/product/methodology/" className="font-semibold underline text-[#0B3A63]">Comprendre le calcul</Link><Link href="/fr/contact/" className="font-semibold underline text-[#0B3A63]">Demander une précision</Link><Link href="/fr/terms/" className="font-semibold underline text-[#0B3A63]">Conditions du service</Link></div>
  </div></section>;
}
