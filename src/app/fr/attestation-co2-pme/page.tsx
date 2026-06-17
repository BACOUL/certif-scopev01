// PATH: src/app/fr/attestation-co2-pme/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Attestation CO₂e PME à 89€ : PDF vérifiable | Certif-Scope",
  description:
    "Générez une attestation CO₂e indicative pour PME à 89€, sans abonnement. PDF vérifiable pour client, fournisseur, banque, assurance ou appel d’offres. Non audit, non CSRD.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/attestation-co2-pme/",
    languages: {
      fr: "https://www.certif-scope.com/fr/attestation-co2-pme/",
    },
  },
  openGraph: {
    title: "Attestation CO₂e PME à 89€ : PDF vérifiable",
    description:
      "Un document CO₂e indicatif, clair et vérifiable pour répondre rapidement à une demande client, fournisseur, banque, assurance ou appel d’offres.",
    url: "https://www.certif-scope.com/fr/attestation-co2-pme/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

const directBenefits = [
  {
    title: "Prix fixe 89€",
    text: "Un prix simple, sans abonnement, pour générer une attestation CO₂e indicative utilisable dans un dossier professionnel.",
  },
  {
    title: "PDF vérifiable",
    text: "Un document clair, daté, archivable et conçu pour être transmis à un client, une banque, un assureur ou un acheteur.",
  },
  {
    title: "Sans audit complet",
    text: "Pour les demandes documentaires simples, lorsque le dossier ne demande pas une vérification externe ou un inventaire GES complet.",
  },
];

const useCases = [
  "Un client demande un document carbone simple avant de vous référencer.",
  "Un fournisseur ou donneur d’ordre demande une information CO₂e.",
  "Une banque demande un élément environnemental dans un dossier professionnel.",
  "Un assureur demande une information carbone ou RSE.",
  "Un appel d’offres demande un document CO₂e sans imposer de norme complète.",
  "Une plateforme achats demande une pièce carbone à téléverser.",
];

const includedItems = [
  "Attestation PDF CO₂e indicative",
  "Résultat carbone agrégé en tCO₂e",
  "Année ou période couverte",
  "Méthode spend-based déclarée",
  "Limites méthodologiques visibles",
  "Date d’émission",
  "Identifiant ou logique de vérification",
  "Mention non audit / non inventaire GES complet",
];

const decisionRows = [
  {
    demand: "Le tiers demande une attestation CO₂e simple",
    answer: "Certif-Scope est adapté si la demande est documentaire et sans norme complète imposée.",
  },
  {
    demand: "Le dossier demande un bilan carbone complet ou vérifié",
    answer: "Il faut suivre cette exigence. Certif-Scope ne remplace pas un audit ou une vérification externe.",
  },
  {
    demand: "Vous devez répondre vite à un client ou un appel d’offres",
    answer: "Une attestation indicative peut aider à éviter un dossier vide ou une réponse trop floue.",
  },
  {
    demand: "Vous voulez piloter votre stratégie climat en profondeur",
    answer: "Un inventaire carbone complet ou un accompagnement spécialisé peut être plus pertinent.",
  },
];

const comparisons = [
  {
    label: "Certif-Scope",
    scope: "Attestation CO₂e indicative",
    bestFor: "Demande client, fournisseur, banque, assurance ou appel d’offres simple.",
    limit: "Ne remplace pas un audit ni un inventaire GES complet.",
  },
  {
    label: "Bilan carbone complet",
    scope: "Inventaire détaillé",
    bestFor: "Pilotage interne, stratégie climat ou exigence formelle détaillée.",
    limit: "Plus long, plus coûteux, souvent disproportionné pour une simple pièce documentaire.",
  },
  {
    label: "Audit / vérification externe",
    scope: "Contrôle ou assurance tiers",
    bestFor: "Dossier imposant une norme, une vérification ou une assurance indépendante.",
    limit: "Non nécessaire si le besoin est seulement une attestation indicative simple.",
  },
];

const processSteps = [
  {
    title: "Vérifiez la demande",
    text: "Lisez si le dossier demande une attestation, un indicateur CO₂e, un bilan carbone complet ou une vérification externe.",
  },
  {
    title: "Choisissez le bon niveau",
    text: "Si le besoin est documentaire et sans norme imposée, une attestation CO₂e indicative peut être suffisante.",
  },
  {
    title: "Générez le PDF",
    text: "Produisez un document clair, daté, avec résultat, méthode, limites et informations de vérification.",
  },
];

const mistakes = [
  {
    title: "Présenter l’attestation comme un audit",
    text: "Le document doit rester clairement présenté comme indicatif, non réglementaire, non audit et non inventaire GES complet.",
  },
  {
    title: "Envoyer un fichier sans méthode",
    text: "Un document CO₂e utile doit indiquer comment le résultat a été estimé et quelles limites s’appliquent.",
  },
  {
    title: "Surpayer une démarche complète pour une demande simple",
    text: "Si le tiers demande seulement une pièce documentaire, une solution plus légère peut être proportionnée.",
  },
  {
    title: "Répondre trop tard",
    text: "Les demandes carbone arrivent souvent au moment du dossier. Un document simple peut éviter un blocage administratif.",
  },
];

const relatedPages = [
  {
    title: "Générer l’attestation",
    text: "Accéder directement au générateur Certif-Scope.",
    href: "/fr/generate/",
  },
  {
    title: "Prix Certif-Scope",
    text: "Voir l’offre à 89€, sans abonnement.",
    href: "/fr/pricing/",
  },
  {
    title: "Exemple de document CO₂e",
    text: "Voir ce que contient une attestation indicative.",
    href: "/fr/bilan-carbone-pme/exemple/",
  },
];

const faq = [
  {
    q: "Qu’est-ce qu’une attestation CO₂e PME ?",
    a: "C’est un document qui présente une estimation CO₂e indicative pour une PME, avec résultat agrégé, méthode déclarée, année couverte, date d’émission, limites et logique de vérification documentaire.",
  },
  {
    q: "Combien coûte l’attestation Certif-Scope ?",
    a: "L’attestation Certif-Scope coûte 89€, sans abonnement. Ce prix correspond à un document CO₂e indicatif, pas à un audit carbone complet ni à une mission de conseil.",
  },
  {
    q: "Dans quels cas utiliser une attestation CO₂e ?",
    a: "Elle peut être utilisée pour répondre à une demande client, fournisseur, banque, assurance, appel d’offres ou plateforme achats lorsque le besoin est documentaire et sans norme complète imposée.",
  },
  {
    q: "L’attestation remplace-t-elle un bilan carbone complet ?",
    a: "Non. Certif-Scope produit une attestation CO₂e indicative, non auditée, non réglementaire et non assimilable à un inventaire GES complet ou à un reporting CSRD/ESRS.",
  },
  {
    q: "Le document est-il vérifiable ?",
    a: "Le document est conçu pour être archivable et vérifiable selon la logique Certif-Scope. Il doit permettre au tiers de contrôler l’intégrité documentaire et de comprendre le périmètre de l’attestation.",
  },
];

export default function AttestationCo2PmePageFR() {
  const pageUrl = "https://www.certif-scope.com/fr/attestation-co2-pme/";

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Attestation CO₂e PME à 89€ : PDF vérifiable",
    url: pageUrl,
    description:
      "Page commerciale pour générer une attestation CO₂e indicative à 89€ destinée aux PME devant répondre à une demande client, fournisseur, banque, assurance ou appel d’offres.",
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
        name: "Attestation CO₂e PME",
        item: pageUrl,
      },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Attestation CO₂e PME",
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/fr/",
    },
    areaServed: "FR",
    serviceType: "Attestation CO₂e indicative spend-based",
    description:
      "Génération d’une attestation CO₂e indicative pour PME, au format PDF, avec méthode déclarée, limites visibles et logique de vérification documentaire.",
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

      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
        <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
        <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <header className="mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center justify-center rounded-full border border-[#0B3A63]/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-sm md:text-xs">
              Attestation CO₂e · PME · PDF vérifiable · 89€
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0B3A63] md:text-6xl">
              Attestation CO₂e PME à 89€ pour répondre à une demande carbone
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#475569] md:text-xl">
              Générez un document CO₂e indicatif, clair et transmissible lorsqu’un
              client, un fournisseur, une banque, un assureur ou un appel d’offres
              vous demande une information carbone simple.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] md:text-base">
              Certif-Scope ne remplace pas un audit carbone complet. Il sert aux
              demandes documentaires simples, quand le tiers attend un PDF lisible,
              daté, archivable et vérifiable.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/fr/generate/"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#1FB6C1] px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Générer mon attestation
              </Link>
              <Link
                href="/fr/pricing/"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-7 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
              >
                Voir le prix 89€
              </Link>
            </div>
          </header>

          <section className="mt-12 grid gap-5 md:grid-cols-3">
            {directBenefits.map((item) => (
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
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Cas d’usage
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Quand utiliser une attestation CO₂e PME ?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                L’attestation est utile quand le besoin est administratif ou
                commercial : le tiers veut une pièce carbone lisible, pas forcément
                une mission carbone complète.
              </p>
            </div>

            <div className="grid gap-4">
              {useCases.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 text-sm leading-relaxed text-[#475569] shadow-sm md:text-base"
                >
                  <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1]" />
                  {item}
                </div>
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
                Contenu du PDF
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Ce que contient l’attestation
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Le document est conçu pour être compris rapidement : résultat,
                méthode, période, limites et vérification documentaire.
              </p>
              <Link
                href="/fr/bilan-carbone-pme/exemple/"
                className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
              >
                Voir un exemple de document
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

      <section className="bg-[#0B3A63] py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Bon niveau de réponse
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Quand l’attestation suffit, et quand elle ne suffit pas
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/82 md:text-lg">
              La valeur du document vient de son cadrage. Il doit répondre à une
              demande simple, sans prétendre couvrir un niveau de preuve supérieur.
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
                  Réponse
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
                    Réponse
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
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Comparaison
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Attestation CO₂e, bilan carbone complet ou audit : ne pas confondre
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
              Certif-Scope cible un besoin précis : produire un document indicatif
              clair pour une demande professionnelle simple.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:hidden">
            {comparisons.map((row) => (
              <article
                key={row.label}
                className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-5 shadow-sm"
              >
                <h3 className="text-lg font-extrabold text-[#0B3A63]">
                  {row.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  <strong className="text-[#0B3A63]">Périmètre :</strong> {row.scope}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                  <strong className="text-[#0B3A63]">Adapté pour :</strong> {row.bestFor}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                  <strong className="text-[#0B3A63]">Limite :</strong> {row.limit}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 hidden rounded-[28px] border border-[#0B3A63]/10 bg-white shadow-sm md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#0B3A63]/10 bg-[#F8FAFC]">
                  <th className="w-1/5 p-5 text-left font-semibold text-[#0B3A63]">
                    Option
                  </th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">
                    Périmètre
                  </th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">
                    Adapté pour
                  </th>
                  <th className="p-5 text-left font-semibold text-[#0B3A63]">
                    Limite
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0B3A63]/8">
                {comparisons.map((row) => (
                  <tr key={row.label}>
                    <td className="p-5 align-top font-semibold text-[#0B3A63]">
                      {row.label}
                    </td>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">
                      {row.scope}
                    </td>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">
                      {row.bestFor}
                    </td>
                    <td className="p-5 align-top leading-relaxed text-[#475569]">
                      {row.limit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Processus simple
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                  Comment l’utiliser correctement ?
                </h2>
              </div>

              <div className="grid gap-5">
                {processSteps.map((step, index) => (
                  <article
                    key={step.title}
                    className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                      Étape {index + 1}
                    </p>
                    <h3 className="mt-2 text-lg font-extrabold text-[#0B3A63]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                      {step.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Erreurs à éviter
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63]">
                Les erreurs à éviter avec une attestation CO₂e
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569]">
                La page doit vendre clairement, mais le document doit rester prudent
                et exact dans sa portée.
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
                  Prêt à générer votre attestation CO₂e ?
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
                  Produisez une attestation CO₂e indicative à 89€, avec méthode
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
                  Voir le prix 89€
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
              Questions fréquentes sur l’attestation CO₂e PME
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
