import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES, EMISSION_FACTORS, FACTOR_VERSION, METHODOLOGY } from "@/lib/indicative-model";
export const metadata: Metadata = {
  title: "Méthodologie spend-based CO₂e PME | Certif-Scope",
  description:
    "Comprendre la méthodologie Certif-Scope : estimation CO₂e indicative basée sur les dépenses, facteurs d’émission, limites, confidentialité et cadre non audit / non CSRD.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/product/methodology/",
    languages: {
      fr: "https://www.certif-scope.com/fr/product/methodology/",
    },
  },
  openGraph: {
    title: "Méthodologie spend-based CO₂e PME | Certif-Scope",
    description:
      "Méthode spend-based, facteurs d’émission, calcul indicatif, limites et confidentialité de l’attestation CO₂e Certif-Scope.",
    url: "https://www.certif-scope.com/fr/product/methodology/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function MethodologyPage() {
  return <section className="mx-auto max-w-7xl px-6 py-8 md:py-12">
    <header className="mb-8 max-w-3xl"><p className="text-sm text-[#64748B]">Méthode et périmètre</p><h1 className="mt-3 text-3xl font-bold text-[#0B3A63]">Comment votre estimation CO₂e est calculée</h1><p className="mt-4 text-gray-700">Certif-Scope convertit sept catégories de dépenses en une estimation indicative. Le résultat couvre uniquement les dépenses renseignées, pas l’ensemble des émissions de l’entreprise.</p></header>
    <div className="max-w-4xl space-y-8">
      <section><h2 className="text-xl font-bold text-[#0B3A63]">1. Données utilisées</h2><p className="mt-3 text-gray-700">Utilisez les dépenses externes annuelles hors taxes, en euros, pour la même année. Une dépense ne doit être saisie qu’une fois. Les salaires, taxes et opérations internes sont exclus. Le secteur déclaré sert à identifier l’activité : il ne modifie pas les coefficients.</p><p className="mt-3 text-gray-700">Un montant nul est différent d’un montant inconnu. Le formulaire demande de compléter les sept catégories ; ne remplacez pas une donnée inconnue par zéro.</p></section>
      <section><h2 className="text-xl font-bold text-[#0B3A63]">2. Catégories et coefficients utilisés</h2><p className="mt-3 text-gray-700">Version : {FACTOR_VERSION}. Les valeurs ci-dessous sont les coefficients internes actuellement utilisés. Cette publication n’atteste ni d’une certification ni d’une validation externe de ces coefficients. Une source primaire et une année de données externes ne sont pas documentées pour chaque valeur ; ces coefficients ne doivent donc pas être présentés comme des facteurs certifiés ou directement issus d’une base officielle.</p>
      <div className="mt-4 overflow-x-auto rounded-xl border"><table className="w-full text-left text-sm"><caption className="sr-only">Coefficients internes en kilogrammes de CO₂e par euro hors taxes</caption><thead className="bg-[#F8FAFC]"><tr><th scope="col" className="p-3">Catégorie</th><th scope="col" className="p-3">Dépenses incluses</th><th scope="col" className="p-3">kg CO₂e / €</th></tr></thead><tbody>{CATEGORIES.map(item => <tr key={item.key} className="border-t"><th scope="row" className="p-3 font-medium">{item.label}</th><td className="p-3">{item.includes}</td><td className="p-3">{EMISSION_FACTORS[item.key].toLocaleString("fr-FR")}</td></tr>)}</tbody></table></div></section>
      <section><h2 className="text-xl font-bold text-[#0B3A63]">3. Formule et exemple</h2><p className="mt-3 text-gray-700">Chaque montant est multiplié par le coefficient de sa catégorie. La somme en kilogrammes est divisée par 1 000 pour obtenir des tonnes, puis arrondie à une décimale.</p><p className="mt-3 rounded-xl bg-[#F8FAFC] p-4">1 000 € de services numériques × 0,30 = 300 kg CO₂e = 0,3 tCO₂e, si toutes les autres catégories sont nulles.</p><p className="mt-3 text-sm text-gray-600">Modèle : {METHODOLOGY}. Deux saisies identiques avec ces mêmes coefficients donnent le même résultat ; cela ne démontre pas la précision environnementale de l’estimation.</p></section>
      <section><h2 className="text-xl font-bold text-[#0B3A63]">4. Ce que le résultat ne couvre pas</h2><ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700"><li>Les émissions directes de Scope 1 et l’électricité de Scope 2.</li><li>Un inventaire exhaustif du Scope 3 ou une empreinte produit.</li><li>Une validation des factures, des données saisies ou des émissions réelles.</li><li>Un audit, une certification ou un reporting réglementaire.</li></ul><p className="mt-3 text-gray-700">Les prix et les catégories agrégées peuvent varier sans refléter la variation des émissions physiques. Aucun intervalle d’incertitude validé n’est fourni.</p></section>
      <section><h2 className="text-xl font-bold text-[#0B3A63]">5. Données et vérification</h2><p className="mt-3 text-gray-700">Le calcul des dépenses est réalisé dans votre navigateur. La génération du PDF utilise le résultat agrégé et les informations qui figurent dans le document. La vérification documentaire ne valide pas l’exactitude des dépenses ni les émissions réelles.</p><Link href="/fr/privacy/" className="mt-3 inline-block font-semibold text-[#0B3A63] underline">Lire la politique de confidentialité</Link></section>
      <section className="rounded-xl border bg-[#F8FAFC] p-5"><h2 className="text-xl font-bold text-[#0B3A63]">Avant de commander</h2><p className="mt-3 text-gray-700">Transmettez l’exemple à votre destinataire et demandez si cette méthode et ce périmètre répondent à sa demande. Son acceptation n’est pas garantie.</p><div className="mt-4 flex flex-wrap gap-5"><a href="/api/sample" className="font-semibold underline text-[#0B3A63]">Voir l’exemple</a><Link href="/fr/contact/" className="font-semibold underline text-[#0B3A63]">Poser une question</Link><Link href="/fr/generate/" className="font-semibold underline text-[#0B3A63]">Préparer mon document</Link></div></section>
    </div>
  </section>;
}
