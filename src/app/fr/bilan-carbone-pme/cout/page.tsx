// PATH: src/app/fr/bilan-carbone-pme/cout/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Coût bilan carbone PME : prix, alternatives et attestation CO₂e | Certif-Scope",
  description:
    "Combien coûte un bilan carbone pour une PME ? Comprenez les niveaux de prix, la différence entre audit complet et document CO₂e indicatif, et pourquoi Certif-Scope propose une attestation à 89€.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/bilan-carbone-pme/cout/",
    languages: {
      fr: "https://www.certif-scope.com/fr/bilan-carbone-pme/cout/",
    },
  },
  openGraph: {
    title: "Coût bilan carbone PME : prix, alternatives et attestation CO₂e",
    description:
      "Guide PME : comprendre les niveaux de coût, éviter de surpayer une démarche complète quand un document CO₂e indicatif suffit, et voir le prix Certif-Scope à 89€.",
    url: "https://www.certif-scope.com/fr/bilan-carbone-pme/cout/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

const quickAnswers = [
  {
    title: "Prix variable",
    text: "Le coût dépend du livrable attendu : simple document de screening, inventaire complet, accompagnement ou vérification externe.",
  },
  {
    title: "Erreur fréquente",
    text: "Beaucoup de PME cherchent un prix de bilan carbone alors que leur besoin réel est seulement de fournir un document CO₂e à un tiers.",
  },
  {
    title: "Prix Certif-Scope",
    text: "Certif-Scope propose une attestation CO₂e indicative à 89€, sans abonnement, pour les demandes documentaires simples.",
  },
];

const costDrivers = [
  "Nombre de catégories à analyser et niveau de détail attendu.",
  "Nécessité ou non de collecter des données physiques détaillées.",
  "Périmètre demandé : screening, inventaire complet, scopes détaillés ou audit.",
  "Présence d’un accompagnement, d’ateliers, d’hypothèses et d’allers-retours.",
  "Exigence éventuelle d’une vérification externe ou d’un référentiel imposé.",
];

const comparisonRows = [
  {
    level: "Attestation CO₂e indicative",
    usage: "Demande client, fournisseur, banque, assurance ou appel d’offres simple.",
    effort: "Faible à modéré",
    price: "89€ avec Certif-Scope",
  },
  {
    level: "Inventaire carbone complet",
    usage: "Pilotage interne, stratégie climat, périmètre détaillé, collecte approfondie.",
    effort: "Élevé",
    price: "Plus coûteux et plus long",
  },
  {
    level: "Audit ou vérification externe",
    usage: "Exigence formelle, norme imposée, contrôle tiers ou dossier réglementaire.",
    effort: "Très élevé",
    price: "Coût supérieur selon périmètre",
  },
];

const decisionRows = [
  {
    demand: "Un client demande un document carbone simple",
    answer: "Un document CO₂e indicatif peut souvent suffire si aucune norme n’est imposée.",
  },
  {
    demand: "Un appel d’offres demande une information CO₂e",
    answer: "Il faut lire le DCE. Si le besoin est documentaire, une attestation peut être adaptée.",
  },
  {
    demand: "Le dossier impose un référentiel ou une vérification",
    answer: "Il faut prévoir une démarche plus complète. Certif-Scope ne remplace pas un audit.",
  },
  {
    demand: "La PME veut piloter sa stratégie climat",
    answer: "Un inventaire complet ou un accompagnement spécialisé peut être plus pertinent.",
  },
];

const includedItems = [
  "Attestation PDF CO₂e indicative",
  "Résultat agrégé en tCO₂e",
  "Méthode spend-based déclarée",
  "Année couverte et date d’émission",
  "Limites visibles du document",
  "Identifiant ou vérification documentaire",
  "Prix fixe 89€",
  "Sans abonnement",
];

const mistakes = [
  {
    title: "Comparer des offres qui ne couvrent pas le même besoin",
    text: "Un audit complet, un conseil carbone et une attestation indicative n’ont pas le même objectif ni le même prix.",
  },
  {
    title: "Payer trop lourd pour une demande simple",
    text: "Si le tiers demande seulement un document de screening, une démarche complète peut être disproportionnée.",
  },
  {
    title: "Choisir uniquement le prix le plus bas",
    text: "Le document doit rester clair, daté, vérifiable et explicite sur ses limites.",
  },
  {
    title: "Présenter une estimation comme un audit",
    text: "Une attestation indicative ne doit jamais être vendue comme un inventaire GES complet ou une vérification externe.",
  },
];

const relatedPages = [
  {
    title: "Prix Certif-Scope",
    text: "Voir l’offre à 89€, sans abonnement, pour une attestation CO₂e indicative.",
    href: "/fr/pricing/",
  },
  {
    title: "Bilan carbone PME",
    text: "Comprendre quoi fournir quand une PME reçoit une demande carbone.",
    href: "/fr/bilan-carbone-pme/",
  },
  {
    title: "Bilan carbone PME obligatoire",
    text: "Savoir si la demande relève d’une obligation ou d’un dossier client.",
    href: "/fr/bilan-carbone-pme/obligation/",
  },
];

const faq = [
  {
    q: "Combien coûte un bilan carbone pour une PME ?",
    a: "Le coût dépend du niveau attendu. Un document de screening indicatif coûte beaucoup moins qu’un inventaire complet avec collecte détaillée, accompagnement, hypothèses et éventuelle vérification externe.",
  },
  {
    q: "Pourquoi Certif-Scope coûte 89€ ?",
    a: "Parce que Certif-Scope répond à un besoin précis : produire une attestation CO₂e indicative, standardisée et vérifiable, sans audit complet, sans conseil carbone personnalisé et sans abonnement.",
  },
  {
    q: "Un prix bas signifie-t-il que le document ne vaut rien ?",
    a: "Non. Cela signifie que le document correspond à un usage limité : le screening documentaire. Il peut être utile pour un client, un fournisseur, une banque, un assureur ou un appel d’offres simple.",
  },
  {
    q: "Quand faut-il payer pour une démarche complète ?",
    a: "Quand le dossier impose un référentiel, un périmètre détaillé, des justificatifs techniques, une vérification externe ou quand l’entreprise veut piloter sérieusement sa stratégie climat.",
  },
  {
    q: "L’attestation Certif-Scope remplace-t-elle un bilan carbone complet ?",
    a: "Non. Certif-Scope produit une attestation CO₂e indicative, non auditée, non réglementaire et non assimilable à un inventaire GES complet ou à un reporting CSRD/ESRS.",
  },
];

export default function BilanCarbonePMECoutPageFR() {
  const pageUrl = "https://www.certif-scope.com/fr/bilan-carbone-pme/cout/";

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Coût bilan carbone PME : prix, alternatives et attestation CO₂e",
    url: pageUrl,
    description:
      "Guide PME pour comprendre le coût d’un bilan carbone, comparer les niveaux de réponse et savoir quand une attestation CO₂e indicative peut suffire.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/fr/",
    },
    inLanguage: "fr-FR",
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://www.certif-scope.com/fr/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bilan carbone PME",
        item: "https://www.certif-scope.com/fr/bilan-carbone-pme/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Coût",
        item: pageUrl,
      },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Attestation CO₂e indicative pour PME",
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/fr/",
    },
    areaServed: "FR",
    serviceType: "Attestation CO₂e indicative spend-based",
    description:
      "Service de génération d’une attestation CO₂e indicative à prix fixe pour répondre aux demandes clients, fournisseurs, banques, assurances et appels d’offres.",
    offers: {
      "@type": "Offer",
      price: "89",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://www.certif-scope.com/fr/pricing/",
    },
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <main id="main-content" role="main" className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      <section
        id="bilan-carbone-pme-cout"
        data-section="bilan-carbone-pme-cout"
        className="relative overflow-hidden bg-white py-16 md:py-24"
      >
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-sm md:text-xs">
              Coût · Prix · PME · Attestation CO₂e
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              Coût d’un bilan carbone PME : quel prix payer selon le besoin ?
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Le prix dépend surtout du niveau réellement attendu. Une PME qui doit
              répondre à un client, une banque, un assureur ou un appel d’offres n’a
              pas toujours besoin d’un audit complet.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Cette page aide à distinguer le coût d’un document CO₂e indicatif, le
              coût d’un inventaire complet et le coût d’un audit ou d’une vérification.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/fr/pricing/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Voir le prix Certif-Scope 89€
              </Link>
              <Link
                href="/fr/generate/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
              >
                Générer une attestation
              </Link>
            </div>
          </header>

          <section className="mt-12 grid gap-5 md:grid-cols-3">
            {quickAnswers.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-[0_18px_45px_rgba(11,58,99,0.07)]"
              >
                <h2 className="text-lg font-extrabold text-[#0B3A63]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  {item.text}
                </p>
              </article>
            ))}
          </section>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Pourquoi les prix varient
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                On compare souvent des livrables très différents
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Le mot “bilan carbone” peut désigner une simple pièce documentaire,
                une estimation indicative, un inventaire complet, un accompagnement
                ou un audit. Le coût dépend donc du niveau demandé.
              </p>
            </div>

            <div className="grid gap-4">
              {costDrivers.map((driver) => (
                <div
                  key={driver}
                  className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 text-sm leading-relaxed text-[#475569] shadow-sm md:text-base"
                >
                  <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1]" />
                  {driver}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Comparaison pratique
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Trois niveaux de coût à distinguer
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Pour éviter de payer une démarche disproportionnée, il faut relier le
              prix au besoin réel du dossier.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:hidden">
            {comparisonRows.map((row) => (
              <article
                key={row.level}
                className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-5 shadow-sm"
              >
                <h3 className="text-lg font-extrabold text-[#0B3A63]">
                  {row.level}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  {row.usage}
                </p>
                <div className="mt-4 grid gap-2 text-sm text-[#475569]">
                  <p>
                    <strong className="text-[#0B3A63]">Effort :</strong> {row.effort}
                  </p>
                  <p>
                    <strong className="text-[#0B3A63]">Prix :</strong> {row.price}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 hidden rounded-[28px] border border-[#0B3A63]/10 bg-white shadow-sm md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#0B3A63]/10 bg-[#F8FAFC]">
                  <th className="w-1/4 p-5 text-left font-semibold text-[#0B3A63]">
                    Niveau
                  </th>
                  <th className="w-1/3 p-5 text-left font-semibold text-[#0B3A63]">
                    Usage
                  </th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">
                    Effort
                  </th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">
                    Prix
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0B3A63]/8">
                {comparisonRows.map((row) => (
                  <tr key={row.level}>
                    <td className="p-5 align-top font-semibold text-[#0B3A63]">
                      {row.level}
                    </td>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">
                      {row.usage}
                    </td>
                    <td className="p-5 align-top text-[#475569]">{row.effort}</td>
                    <td className="p-5 align-top font-semibold text-[#0B3A63]">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#0B3A63] py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Décision d’achat
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Quel niveau payer selon votre dossier ?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">
              Le bon prix est celui qui correspond au niveau exigé. Une demande
              simple ne justifie pas toujours une mission complète.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:hidden">
            {decisionRows.map((row) => (
              <article
                key={row.demand}
                className="rounded-[24px] border border-white/16 bg-white/8 p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                  Situation
                </p>
                <h3 className="mt-2 text-lg font-extrabold leading-snug text-white">
                  {row.demand}
                </h3>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                  Réponse recommandée
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/84">
                  {row.answer}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 hidden rounded-[28px] border border-white/16 bg-white/8 md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/16">
                  <th className="w-1/2 p-5 text-left font-semibold text-white">
                    Situation
                  </th>
                  <th className="w-1/2 p-5 text-left font-semibold text-white">
                    Réponse recommandée
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/12">
                {decisionRows.map((row) => (
                  <tr key={row.demand}>
                    <td className="p-5 align-top font-semibold text-white">
                      {row.demand}
                    </td>
                    <td className="p-5 align-top leading-relaxed text-white/82">
                      {row.answer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Ce qui est inclus
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Ce que couvre l’attestation Certif-Scope à 89€
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Le prix correspond à un document CO₂e indicatif, standardisé et
                vérifiable. Il ne correspond pas à un audit, à un conseil carbone
                personnalisé ou à un inventaire complet.
              </p>
              <Link
                href="/fr/pricing/"
                className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Voir l’offre à 89€
              </Link>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {includedItems.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-4 text-sm leading-relaxed text-[#475569]"
                >
                  <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Erreurs à éviter
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">
                Les erreurs qui faussent la comparaison de prix
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                La bonne comparaison ne se fait pas seulement sur le prix affiché,
                mais sur le type de preuve réellement demandé.
              </p>
            </div>

            <div className="grid gap-5">
              {mistakes.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-extrabold text-[#0B3A63]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_70px_rgba(11,58,99,0.16)] md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Prix fixe · PDF vérifiable · sans abonnement
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Besoin d’un document CO₂e sans financer un audit complet ?
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
                  Générez une attestation CO₂e indicative à 89€, avec méthode
                  déclarée, limites visibles et format PDF transmissible.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/fr/generate/"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90"
                >
                  Générer mon attestation
                </Link>
                <Link
                  href="/fr/pricing/"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Voir le prix
                </Link>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-[#64748B] md:text-sm">
            Certif-Scope produit une attestation CO₂e indicative basée sur les
            dépenses. Le document ne constitue pas un audit carbone, un inventaire
            GES complet, une vérification externe, ni un reporting CSRD/ESRS.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Pages liées
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Continuer selon votre besoin
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(11,58,99,0.08)]"
              >
                <h3 className="text-lg font-extrabold text-[#0B3A63] group-hover:text-[#1FB6C1]">
                  {page.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  {page.text}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-[#0B3A63] group-hover:text-[#1FB6C1]">
                  Lire →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Questions fréquentes sur le coût d’un bilan carbone PME
            </h2>
          </div>

          <div className="mt-10 space-y-5">
            {faq.map((item) => (
              <article
                key={item.q}
                className="rounded-[26px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm"
              >
                <h3 className="text-lg font-extrabold text-[#0B3A63]">
                  {item.q}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
