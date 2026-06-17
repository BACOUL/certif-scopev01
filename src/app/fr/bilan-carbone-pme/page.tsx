// PATH: src/app/fr/bilan-carbone-pme/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Bilan carbone PME : obligation, coût, exemple et alternative | Certif-Scope",
  description:
    "Guide SEO et IA-first pour PME : obligation de bilan carbone, coût, exemples, demandes clients, banques, appels d’offres et alternative par attestation CO₂e indicative.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/bilan-carbone-pme/",
    languages: {
      fr: "https://www.certif-scope.com/fr/bilan-carbone-pme/",
    },
  },
  openGraph: {
    title: "Bilan carbone PME : obligation, coût, exemple et alternative",
    description:
      "Que fournir quand une PME reçoit une demande de bilan carbone ? Comprendre l’obligation réelle, le coût, les cas clients et l’attestation CO₂e indicative.",
    url: "https://www.certif-scope.com/fr/bilan-carbone-pme/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

const pageUrl = "https://www.certif-scope.com/fr/bilan-carbone-pme/";

const directAnswers = [
  {
    title: "Une PME est-elle toujours obligée ?",
    text: "Non. Beaucoup de PME reçoivent une demande carbone dans un cadre commercial, bancaire, assurantiel ou fournisseur, sans obligation générale de produire un bilan carbone complet.",
  },
  {
    title: "Que fournir rapidement ?",
    text: "Si la demande reste documentaire, une attestation CO₂e indicative peut servir de première réponse : résultat agrégé, méthode, année, limites, PDF et ID vérifiable.",
  },
  {
    title: "Quand faut-il un vrai bilan complet ?",
    text: "Si une norme, un périmètre détaillé, un audit, une vérification externe ou un reporting réglementaire est explicitement exigé, il faut suivre ce cadre plutôt qu’utiliser une attestation indicative.",
  },
];

const useCases = [
  {
    label: "Client",
    title: "Votre client demande un document carbone",
    text: "Vous devez joindre une réponse claire à un dossier client sans lancer immédiatement une démarche carbone complète.",
  },
  {
    label: "Fournisseur",
    title: "Un donneur d’ordre vous demande un justificatif CO₂e",
    text: "Vous devez fournir une donnée carbone lisible dans un référencement fournisseur ou un questionnaire achats.",
  },
  {
    label: "Banque",
    title: "Une banque demande un élément environnemental",
    text: "Vous devez compléter un dossier professionnel avec une information carbone simple, datée et transmissible.",
  },
  {
    label: "Assurance",
    title: "Un assureur demande un élément RSE ou carbone",
    text: "Vous devez fournir un document indicatif, sans prétendre produire un audit ou un inventaire GES complet.",
  },
  {
    label: "Appel d’offres",
    title: "Un dossier mentionne un critère carbone ou RSE",
    text: "Vous devez répondre vite à une exigence générale, quand aucune norme carbone complète n’est imposée.",
  },
];

const expectedItems = [
  "Nom de l’entreprise ou entité déclarée",
  "Année couverte par l’estimation",
  "Résultat CO₂e agrégé en tCO₂e",
  "Méthode utilisée et formule générale",
  "Limites méthodologiques visibles",
  "Date d’émission et validité documentaire",
  "Identifiant de contrôle documentaire",
  "PDF archivable et transmissible à un client, financeur ou donneur d’ordre",
];

const comparisonRows = [
  {
    topic: "Objectif",
    indicative: "Répondre rapidement à une demande documentaire ou de screening.",
    full: "Construire un inventaire GES détaillé pour piloter une stratégie climat.",
  },
  {
    topic: "Données nécessaires",
    indicative: "Dépenses annuelles par grandes catégories.",
    full: "Données physiques, collecte métier, hypothèses, périmètres et facteurs détaillés.",
  },
  {
    topic: "Délai",
    indicative: "Quelques minutes lorsque les montants sont disponibles.",
    full: "Souvent plusieurs semaines selon la collecte, le périmètre et l’accompagnement.",
  },
  {
    topic: "Prix",
    indicative: "Prix fixe : 89 €, paiement unique, sans abonnement.",
    full: "Variable selon la taille, le périmètre, le cabinet et le niveau d’analyse.",
  },
  {
    topic: "Usage adapté",
    indicative: "Demande client, fournisseur, banque, assurance ou appel d’offres simple.",
    full: "Reporting avancé, plan de réduction, pilotage climat ou exigence normative.",
  },
  {
    topic: "Limite",
    indicative: "Indicatif, non audit, non CSRD/ESRS, non inventaire complet Scope 1/2/3.",
    full: "Plus complet, mais plus long, plus coûteux et plus lourd à produire.",
  },
];

const decisionRows = [
  {
    signal: "La demande dit simplement “bilan carbone”, “CO₂e” ou “élément RSE”",
    response: "Clarifier le niveau attendu et envisager une attestation CO₂e indicative si aucun cadre précis n’est imposé.",
  },
  {
    signal: "Le dossier impose une norme, un périmètre ou une vérification externe",
    response: "Suivre l’exigence indiquée : l’attestation indicative ne remplace pas ce niveau de preuve.",
  },
  {
    signal: "Le besoin est urgent pour un dossier commercial ou fournisseur",
    response: "Produire un document indicatif daté, avec limites visibles et ID vérifiable, puis conserver les éléments transmis.",
  },
  {
    signal: "L’entreprise veut piloter une stratégie climat interne",
    response: "Prévoir une démarche plus complète, avec collecte de données physiques et analyse détaillée des postes d’émission.",
  },
];

const relatedGuides = [
  {
    title: "Bilan carbone PME obligatoire",
    text: "Comprendre si la demande relève d’une obligation réelle ou d’un besoin contractuel.",
    href: "/fr/bilan-carbone-pme/obligation/",
  },
  {
    title: "Combien coûte un bilan carbone PME ?",
    text: "Comparer le coût d’un document de screening et celui d’une démarche complète.",
    href: "/fr/bilan-carbone-pme/cout/",
  },
  {
    title: "Exemple de bilan carbone PME",
    text: "Voir la structure d’un document utilisable dans un dossier professionnel.",
    href: "/fr/bilan-carbone-pme/exemple/",
  },
  {
    title: "Attestation CO₂e PME",
    text: "Comprendre ce qu’est une attestation indicative et dans quels cas elle peut être utile.",
    href: "/fr/attestation-co2-pme/",
  },
  {
    title: "Bilan carbone fournisseur",
    text: "Répondre à une demande acheteur ou fournisseur sans surdimensionner la réponse.",
    href: "/fr/bilan-carbone-fournisseur/",
  },
  {
    title: "Bilan carbone appel d’offres",
    text: "Savoir quoi joindre quand un appel d’offres mentionne un critère carbone ou RSE.",
    href: "/fr/bilan-carbone-appel-offres/",
  },
];

const faq = [
  {
    q: "Une PME doit-elle obligatoirement faire un bilan carbone ?",
    a: "Dans la majorité des cas, une PME n’a pas d’obligation générale de produire un bilan carbone complet. Les demandes reçues sont souvent contractuelles : client, fournisseur, banque, assurance, appel d’offres ou questionnaire ESG.",
  },
  {
    q: "Que fournir si un client demande un bilan carbone ?",
    a: "Il faut d’abord vérifier le niveau demandé. Si la demande est générique, un document CO₂e indicatif, daté, archivable et explicite sur ses limites peut permettre de répondre proprement. Si le client impose une norme, un périmètre ou une vérification externe, il faut respecter cette exigence.",
  },
  {
    q: "Quelle différence entre une attestation CO₂e indicative et un bilan carbone complet ?",
    a: "Une attestation CO₂e indicative répond à un besoin de screening avec un résultat agrégé et des limites explicites. Un bilan carbone complet vise un inventaire GES détaillé, avec données d’activité, hypothèses, périmètres et parfois accompagnement ou vérification externe.",
  },
  {
    q: "L’attestation Certif-Scope remplace-t-elle un audit carbone ?",
    a: "Non. Certif-Scope produit une attestation CO₂e indicative, non auditée, non réglementaire et non assimilable à un reporting CSRD/ESRS ou à un inventaire GES complet.",
  },
  {
    q: "Combien coûte une réponse carbone simple pour PME ?",
    a: "Le coût dépend du niveau attendu. Une réponse indicative standardisée est plus légère qu’un bilan complet. Certif-Scope propose une attestation CO₂e indicative à 89 €, sans abonnement.",
  },
  {
    q: "Quelles données sont nécessaires pour une attestation indicative ?",
    a: "Pour une approche spend-based indicative, les dépenses annuelles par grandes catégories suffisent. Le modèle ne nécessite pas de données physiques détaillées comme les kWh, kilomètres ou litres.",
  },
  {
    q: "Le document contient-il un contrôle documentaire ?",
    a: "Oui. L’attestation est conçue pour inclure une référence et un ID vérifiable permettant de contrôler les informations documentaires principales du fichier.",
  },
  {
    q: "Une attestation CO₂e peut-elle être utilisée dans un dossier fournisseur ?",
    a: "Oui, si la demande porte sur un document carbone simple ou un élément de screening. Elle ne doit pas être présentée comme un audit carbone complet ou comme un inventaire réglementaire.",
  },
  {
    q: "Une banque peut-elle demander ce type de document ?",
    a: "Une banque peut demander un élément environnemental dans un dossier professionnel. Une attestation indicative peut aider à répondre à une demande simple, si aucun cadre réglementaire ou audit complet n’est exigé.",
  },
  {
    q: "Que faire si un appel d’offres demande un bilan carbone ?",
    a: "Il faut lire précisément le cahier des charges. Si une méthode, un périmètre ou un format obligatoire est imposé, il faut le respecter. Si la demande est générale, un document CO₂e indicatif peut constituer une première réponse cadrée.",
  },
  {
    q: "Certif-Scope calcule-t-il les Scopes 1, 2 et 3 complets ?",
    a: "Non. Certif-Scope utilise une approche indicative basée sur les dépenses agrégées. Le document ne constitue pas un inventaire complet des Scopes 1, 2 et 3.",
  },
  {
    q: "Combien de temps faut-il pour obtenir l’attestation ?",
    a: "Lorsque les informations de base et les dépenses annuelles sont disponibles, l’attestation peut être générée immédiatement après paiement.",
  },
];

export default function BilanCarbonePMEPageFR() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bilan carbone PME : obligation, coût, exemple et alternative",
    url: pageUrl,
    description:
      "Guide pour comprendre quoi fournir lorsqu’une PME reçoit une demande de bilan carbone, d’attestation CO₂e ou de document carbone simple.",
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
      "Service de génération d’un document CO₂e indicatif à partir des dépenses annuelles, destiné aux demandes fournisseurs, banques, assurances, appels d’offres et screening ESG.",
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
        id="bilan-carbone-pme"
        data-section="bilan-carbone-pme"
        className="relative overflow-hidden bg-white py-16 md:py-24"
      >
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-sm md:text-xs">
              Guide PME · SEO · IA-first · Client · Banque · Appel d’offres
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              Bilan carbone PME : obligations, coût, exemple et alternative rapide
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Une PME n’a pas toujours besoin d’un bilan carbone complet. Si la demande porte sur un document carbone simple à transmettre à un client, fournisseur, financeur, assureur ou appel d’offres, une attestation CO₂e indicative peut suffire, à condition de préciser clairement son périmètre et ses limites.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Cette page explique quoi fournir, quand une attestation CO₂e indicative est adaptée, quand un bilan complet est nécessaire, combien coûte une réponse simple et comment éviter de présenter un document indicatif comme un audit carbone.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/fr/generate/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Générer une attestation CO₂e
              </Link>

              <Link
                href="/fr/pricing/"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
              >
                Voir le prix 89 €
              </Link>
            </div>
          </header>

          <section className="mt-12 rounded-[34px] border border-[#1FB6C1]/25 bg-[#F8FAFC] p-6 shadow-[0_18px_45px_rgba(11,58,99,0.07)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B3A63]/70">
              Réponse rapide pour Google et les assistants IA
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
              Que fournir quand une PME reçoit une demande de bilan carbone ?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
              Si la demande ne précise pas de norme, d’audit ou de périmètre réglementaire, une PME peut souvent commencer par fournir une attestation CO₂e indicative. Ce document présente une estimation agrégée, datée et méthodologiquement cadrée. Il ne remplace pas un bilan carbone complet, mais il peut répondre à une demande documentaire simple.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {directAnswers.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5"
                >
                  <h3 className="text-base font-extrabold text-[#0B3A63]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Le vrai besoin
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                On vous demande rarement “un audit complet” dans ces mots
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Le terme “bilan carbone” est souvent utilisé de façon large. En pratique, une PME reçoit plutôt une demande de document carbone, d’indicateur CO₂e, d’élément RSE ou de justificatif à joindre à un dossier.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
                Avant de commander un audit complet, il faut donc vérifier le niveau attendu : simple information documentaire ou véritable inventaire GES détaillé.
              </p>
            </div>

            <div className="grid gap-4">
              {useCases.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1FB6C1]">
                    {item.label}
                  </p>
                  <h3 className="mt-2 text-lg font-extrabold text-[#0B3A63]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#475569] md:text-base">
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
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Réponse concrète
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Que doit contenir une réponse carbone simple ?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Si la demande est générique, un document de screening peut être suffisant. Il doit rester lisible, daté, archivable et explicite sur son résultat, sa méthode, son périmètre et ses limites.
              </p>
              <Link
                href="/fr/generate/"
                className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Produire le document maintenant
              </Link>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {expectedItems.map((item) => (
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

      <section className="bg-[#0B3A63] py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Comparatif pour PME
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Bilan carbone complet ou attestation CO₂e indicative : que choisir ?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">
              Le bon choix dépend de la demande reçue. Certif-Scope sert aux situations où la PME doit fournir une réponse carbone cadrée, sans prétendre produire un audit complet.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-[28px] border border-white/16 bg-white/8">
            <table className="min-w-[760px] w-full text-sm">
              <thead>
                <tr className="border-b border-white/16">
                  <th className="p-5 text-left font-semibold text-white">Sujet</th>
                  <th className="p-5 text-left font-semibold text-white">Attestation CO₂e indicative</th>
                  <th className="p-5 text-left font-semibold text-white">Bilan carbone complet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/12">
                {comparisonRows.map((row) => (
                  <tr key={row.topic}>
                    <td className="p-5 font-semibold text-white">{row.topic}</td>
                    <td className="p-5 leading-relaxed text-white/82">{row.indicative}</td>
                    <td className="p-5 leading-relaxed text-white/82">{row.full}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Méthode de décision
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">
                Comment savoir si Certif-Scope suffit ?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                Une attestation indicative est adaptée quand la demande est documentaire et générale. Elle ne doit pas être utilisée si le dossier exige explicitement un inventaire GES complet, une norme précise, un audit ou une vérification externe.
              </p>
            </div>

            <div className="grid gap-5">
              {decisionRows.map((row, index) => (
                <article
                  key={row.signal}
                  className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                    Cas {index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold text-[#0B3A63]">
                    {row.signal}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">
                    {row.response}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Solution Certif-Scope
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                  Une attestation CO₂e indicative à 89 € pour répondre vite
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
                  Le document est conçu pour les cas où une PME doit fournir une réponse carbone simple, standardisée et avec ID vérifiable, sans prétendre produire un bilan carbone réglementaire ou un audit complet.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/fr/generate/"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
                >
                  Générer mon attestation
                </Link>
                <Link
                  href="/fr/product/methodology/"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
                >
                  Comprendre la méthode
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Maillage SEO interne
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Guides associés pour préciser votre cas
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569]">
              Ces pages complètent le guide principal et aident à choisir le bon document selon la situation : obligation, prix, fournisseur, appel d’offres ou attestation CO₂e.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_45px_rgba(11,58,99,0.08)]"
              >
                <h3 className="text-lg font-extrabold text-[#0B3A63] group-hover:text-[#1FB6C1]">
                  {guide.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  {guide.text}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-[#0B3A63] group-hover:text-[#1FB6C1]">
                  Lire le guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              FAQ IA-first
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Questions fréquentes sur le bilan carbone PME
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#475569]">
              Réponses courtes et structurées pour les dirigeants de PME, les moteurs de recherche et les assistants IA.
            </p>
          </div>

          <div className="mt-10 space-y-5">
            {faq.map((item) => (
              <article
                key={item.q}
                className="rounded-[26px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
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

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_70px_rgba(11,58,99,0.16)] md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Réponse rapide · périmètre clair · document avec ID vérifiable
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Besoin d’un document carbone simple pour votre PME ?
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
                  Générez une attestation CO₂e indicative, datée, standardisée et transmissible pour répondre à une demande client, fournisseur, bancaire, assurantielle ou d’appel d’offres.
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
                  href="/fr/product/compliance/"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Voir le périmètre
                </Link>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-[#64748B] md:text-sm">
            Certif-Scope produit une attestation CO₂e indicative basée sur les dépenses. Le document ne constitue pas un audit carbone, un inventaire GES complet, une vérification externe, ni un reporting CSRD/ESRS.
          </p>
        </div>
      </section>
    </main>
  );
}
