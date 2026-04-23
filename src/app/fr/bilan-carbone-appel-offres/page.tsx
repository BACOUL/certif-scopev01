// PATH: src/app/fr/bilan-carbone-appel-offres/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — PAGE SATELLITE FR / ADS READY
   Objectif : capter "bilan carbone appel d’offres"
   Angle : PME / réponse rapide / document à joindre
====================================================== */

export const metadata: Metadata = {
  title:
    "Bilan carbone appel d’offres : que fournir quand on est une PME ? | Certif-Scope",
  description:
    "On vous demande un bilan carbone pour un appel d’offres ? Comprenez ce qui est réellement attendu et fournissez un document CO₂e clair, utilisable et vérifiable, sans audit complet.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/bilan-carbone-appel-offres/",
    languages: {
      fr: "https://www.certif-scope.com/fr/bilan-carbone-appel-offres/",
    },
  },
  openGraph: {
    title:
      "Bilan carbone appel d’offres : que fournir quand on est une PME ?",
    description:
      "Répondez à une demande de bilan carbone en appel d’offres avec un document CO₂e clair, utilisable et vérifiable, quand un audit complet n’est pas explicitement exigé.",
    url: "https://www.certif-scope.com/fr/bilan-carbone-appel-offres/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function BilanCarboneAppelOffresFR() {
  const pageUrl = "https://www.certif-scope.com/fr/bilan-carbone-appel-offres/";

  const faq = [
    {
      q: "Le bilan carbone est-il obligatoire dans un appel d’offres ?",
      a: "Non, pas automatiquement. Dans beaucoup de dossiers, il s’agit surtout d’un critère environnemental de comparaison ou de screening. Une exigence formelle, comme un standard imposé, un périmètre détaillé ou une vérification tierce, doit être clairement mentionnée dans le cahier des charges.",
    },
    {
      q: "Une estimation indicative peut-elle suffire ?",
      a: "Oui, lorsque la méthode n’est pas imposée et que l’acheteur cherche surtout un indicateur CO₂e comparable entre candidats. Le document doit alors annoncer clairement la méthode utilisée et ses limites.",
    },
    {
      q: "Que faut-il mettre dans le dossier ?",
      a: "Un résultat CO₂e agrégé, l’année couverte, la méthode déclarée, les limites explicites, un PDF identifiable et un mécanisme de vérification ou une référence claire.",
    },
    {
      q: "Quand faut-il un inventaire complet ?",
      a: "Quand le dossier impose explicitement un référentiel, un périmètre détaillé, des justificatifs techniques, une ventilation précise ou une vérification tierce. Dans ce cas, un simple document de screening ne suffit plus.",
    },
    {
      q: "Le document est-il adapté aux PME ?",
      a: "Oui. L’objectif est de fournir un document lisible, archivable et exploitable dans un dossier, sans lancer une démarche plus lourde que nécessaire quand le besoin réel reste documentaire.",
    },
    {
      q: "Comment savoir si l’acheteur attend un screening ou une exigence formelle ?",
      a: "Il faut lire le cahier des charges : si aucun standard précis, périmètre détaillé, preuve technique ou contrôle tiers n’est imposé, la demande relève souvent du screening documentaire.",
    },
  ];

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Certif-Scope",
    url: "https://www.certif-scope.com",
    logo: "https://www.certif-scope.com/assets/logo.png",
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil (FR)",
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
        name: "Bilan carbone appel d’offres",
        item: pageUrl,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bilan carbone appel d’offres",
    url: pageUrl,
    description:
      "Comment répondre à une demande de bilan carbone en appel d’offres quand on est une PME et qu’un document indicatif suffit.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com",
    },
    inLanguage: "fr-FR",
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

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment répondre à une demande de bilan carbone dans un appel d’offres",
    description:
      "Méthode simple pour distinguer un besoin de screening d’une exigence formelle, puis fournir le bon document dans le dossier.",
    totalTime: "PT10M",
    step: [
      {
        "@type": "HowToStep",
        name: "Lire le niveau réellement exigé",
        text: "Vérifiez si le cahier des charges impose un standard, un périmètre détaillé, des justificatifs techniques ou une vérification tierce.",
      },
      {
        "@type": "HowToStep",
        name: "Distinguer screening et exigence formelle",
        text: "Si la demande reste générique et vise un critère de comparaison, il s’agit souvent d’un besoin de screening documentaire.",
      },
      {
        "@type": "HowToStep",
        name: "Joindre un document clair et exploitable",
        text: "Fournissez un document CO₂e avec résultat agrégé, année, méthode, limites explicites et format PDF identifiable.",
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
      url: "https://www.certif-scope.com",
    },
    areaServed: "FR",
    serviceType: "Document CO₂e indicatif pour screening fournisseurs et appels d’offres",
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "89",
      availability: "https://schema.org/InStock",
      url: "https://www.certif-scope.com/fr/pricing/",
    },
  };

  const BackToSummaryButton = () => (
    <a
      href="#summary"
      className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
    >
      Retour au sommaire
    </a>
  );

  return (
    <section
      id="bilan-carbone-appel-offres"
      data-section="bilan-carbone-appel-offres"
      className="relative overflow-hidden bg-white"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
      <div className="absolute left-[-10%] top-16 -z-10 h-72 w-72 rounded-full bg-[#1FB6C1]/8 blur-3xl" />
      <div className="absolute right-[-8%] top-28 -z-10 h-96 w-96 rounded-full bg-[#0B3A63]/8 blur-3xl" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />

      <div id="top" />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 md:px-8 md:pt-14">
        <header className="mx-auto max-w-6xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#0B3A63]/10 bg-white/92 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B3A63]/75 shadow-sm backdrop-blur md:text-xs">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1] shadow-[0_0_0_4px_rgba(31,182,193,0.14)]" />
            Appels d’offres • PME • Document CO₂e • Réponse rapide
          </div>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] text-[#0B3A63] md:text-6xl">
                On vous demande un{" "}
                <span className="relative inline-block">
                  bilan carbone
                  <span className="absolute bottom-1 left-0 h-3 w-full rounded-full bg-[#1FB6C1]/18" />
                </span>{" "}
                pour un appel d’offres ?
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#475569] md:text-xl">
                Fournissez un document CO₂e{" "}
                <strong className="text-[#0B3A63]">clair</strong>,{" "}
                <strong className="text-[#0B3A63]">utilisable</strong> et{" "}
                <strong className="text-[#0B3A63]">vérifiable</strong>, sans audit
                complet lorsque le dossier attend surtout un indicateur de
                screening.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/fr/generate/"
                  className="inline-flex min-h-[54px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
                >
                  Générer mon attestation
                </Link>

                <Link
                  href="/fr/pricing/"
                  className="inline-flex min-h-[54px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
                >
                  Voir le prix
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  "Prix fixe",
                  "Sans abonnement",
                  "PDF identifiable",
                  "Vérification tierce",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#0B3A63]/10 bg-white px-4 py-3 text-sm font-medium text-[#0B3A63] shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[28px] border border-[#1FB6C1]/18 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-6">
                <p className="text-sm leading-relaxed text-[#475569] md:text-base">
                  <strong className="text-[#0B3A63]">Dans beaucoup d’appels d’offres,</strong>{" "}
                  la mention “bilan carbone” ne signifie pas qu’un audit complet est
                  exigé. L’acheteur cherche souvent surtout un{" "}
                  <strong className="text-[#0B3A63]">
                    indicateur CO₂e comparable entre candidats
                  </strong>
                  , présenté dans un document clair et archivable.
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="relative rounded-[34px] border border-[#0B3A63]/10 bg-white p-3 shadow-[0_30px_80px_rgba(11,58,99,0.10)]">
                <div className="rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 border-b border-[#0B3A63]/10 pb-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                        Certif-Scope
                      </p>
                      <p className="mt-1 text-lg font-extrabold text-[#0B3A63]">
                        Attestation CO₂e indicative
                      </p>
                    </div>
                    <div className="rounded-xl border border-[#0B3A63]/10 bg-white px-3 py-2 text-right shadow-sm">
                      <p className="text-[11px] uppercase tracking-[0.14em] text-[#64748B]">
                        ID
                      </p>
                      <p className="text-xs font-semibold text-[#0B3A63]">
                        CS-2026-000145
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-[#1FB6C1]/16 bg-white p-5 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                      Résultat
                    </p>
                    <p className="mt-2 text-4xl font-extrabold tracking-[-0.04em] text-[#0B3A63] md:text-5xl">
                      128 tCO₂e
                    </p>
                    <p className="mt-2 text-sm text-[#475569]">
                      Année couverte : 2025
                    </p>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 shadow-sm">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                        Méthodologie
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[#0B3A63]">
                        Spend-based
                      </p>
                      <p className="mt-1 text-sm text-[#475569]">
                        Dépenses × facteurs d’émission
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 shadow-sm">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                        Sources
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[#0B3A63]">
                        ADEME / DEFRA
                      </p>
                      <p className="mt-1 text-sm text-[#475569]">
                        Versionnées et documentées
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-[#0B3A63]/10 bg-white p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                      Portée du document
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                      Document indicatif de screening. Non audit, non CSRD/ESRS,
                      non inventaire complet GHG.
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-[#0B3A63]/10 bg-white p-4 shadow-sm">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                        Vérification
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[#0B3A63]">
                        Vérifiable par un tiers
                      </p>
                    </div>
                    <div className="h-14 w-14 rounded-xl border border-[#0B3A63]/10 bg-[linear-gradient(135deg,#F8FAFC_0%,#ffffff_100%)] shadow-inner" />
                  </div>
                </div>
              </div>

              <div className="absolute -left-3 top-8 rounded-2xl border border-[#1FB6C1]/20 bg-white px-4 py-3 shadow-lg md:-left-10">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                  Utilisable
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0B3A63]">
                  En appel d’offres
                </p>
              </div>

              <div className="absolute -right-3 top-24 rounded-2xl border border-[#1FB6C1]/20 bg-white px-4 py-3 shadow-lg md:-right-10">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                  Résultat
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0B3A63]">
                  Clair et exploitable
                </p>
              </div>

              <div className="absolute -left-3 bottom-28 rounded-2xl border border-[#1FB6C1]/20 bg-white px-4 py-3 shadow-lg md:-left-10">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                  Méthode
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0B3A63]">
                  Indiquée et visible
                </p>
              </div>

              <div className="absolute -right-3 bottom-10 rounded-2xl border border-[#1FB6C1]/20 bg-white px-4 py-3 shadow-lg md:-right-10">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                  Vérification
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0B3A63]">
                  Par un tiers
                </p>
              </div>
            </div>
          </div>
        </header>

        <div id="summary" className="mt-16 rounded-[30px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
            Sommaire rapide
          </p>
          <ol className="mt-5 grid gap-3 text-sm text-[#0B3A63] md:grid-cols-2">
            <li>
              <a className="hover:underline underline-offset-4" href="#situation">
                1. La situation réelle dans un appel d’offres
              </a>
            </li>
            <li>
              <a className="hover:underline underline-offset-4" href="#what-to-send">
                2. Ce que vous pouvez fournir immédiatement
              </a>
            </li>
            <li>
              <a className="hover:underline underline-offset-4" href="#screening-vs-formal">
                3. Screening vs exigence formelle
              </a>
            </li>
            <li>
              <a className="hover:underline underline-offset-4" href="#how-it-works">
                4. Comment ça fonctionne
              </a>
            </li>
            <li>
              <a className="hover:underline underline-offset-4" href="#when-complete">
                5. Quand un inventaire complet devient nécessaire
              </a>
            </li>
            <li>
              <a className="hover:underline underline-offset-4" href="#faq">
                6. Questions fréquentes
              </a>
            </li>
          </ol>
        </div>

        <div className="mt-14 space-y-20">
          <section id="situation" className="scroll-mt-24">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  1. La situation réelle
                </p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                  Ce que l’acheteur attend le plus souvent
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                  Dans beaucoup de dossiers, la mention “bilan carbone” sert surtout à
                  comparer les candidats sur un critère environnemental. L’acheteur
                  attend alors un{" "}
                  <strong className="text-[#0B3A63]">
                    document CO₂e lisible, daté et exploitable
                  </strong>
                  , pas nécessairement un audit complet.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
                  La vraie question n’est donc pas seulement{" "}
                  <strong className="text-[#0B3A63]">
                    “faut-il répondre ?”
                  </strong>
                  , mais surtout{" "}
                  <strong className="text-[#0B3A63]">
                    “quel document faut-il joindre pour répondre correctement sans
                    surdimensionner la démarche ?”
                  </strong>
                </p>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                    Cas le plus fréquent
                  </p>
                  <ul className="mt-4 ml-5 list-disc space-y-2 text-sm leading-relaxed text-[#475569]">
                    <li>critère environnemental pondéré ;</li>
                    <li>comparaison entre candidats ;</li>
                    <li>méthode non imposée ;</li>
                    <li>document attendu surtout pour le dossier.</li>
                  </ul>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                    Erreur fréquente
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Lancer une mission lourde alors qu’un document de screening bien
                    cadré aurait suffi pour le dossier.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <BackToSummaryButton />
            </div>
          </section>

          <section id="what-to-send" className="scroll-mt-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              2. Ce que vous pouvez fournir immédiatement
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Le bon niveau de document pour répondre vite
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[
                "Résultat CO₂e agrégé",
                "Année couverte et date d’émission",
                "Méthode déclarée",
                "Limites explicites",
                "PDF identifiable et partageable",
                "Mécanisme de vérification ou référence claire",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
                >
                  <p className="text-base font-semibold text-[#0B3A63]">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[28px] border border-[#1FB6C1]/18 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-6 md:p-8">
              <p className="text-base leading-relaxed text-[#475569] md:text-lg">
                <strong className="text-[#0B3A63]">Objectif :</strong> fournir un
                document que l’acheteur peut comprendre, archiver et comparer
                rapidement, sans ambiguïté sur sa portée.
              </p>
            </div>

            <div className="mt-8">
              <BackToSummaryButton />
            </div>
          </section>

          <section id="screening-vs-formal" className="scroll-mt-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              3. Screening vs exigence formelle
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Comment savoir si un document simple suffit
            </h2>

            <p className="mt-5 max-w-4xl text-base leading-relaxed text-[#475569] md:text-lg">
              Le terme “bilan carbone” est souvent utilisé de manière générique dans les
              appels d’offres. Dans beaucoup de cas, il s’agit d’un{" "}
              <strong className="text-[#0B3A63]">besoin de screening documentaire</strong>,
              pas d’une obligation imposant automatiquement un référentiel précis ou
              une vérification tierce.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#0B3A63]">
                  Quand un document de screening suffit souvent
                </h3>
                <ul className="mt-5 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>la méthode n’est pas imposée ;</li>
                  <li>le dossier parle d’un critère environnemental ;</li>
                  <li>l’acheteur cherche surtout un indicateur comparable ;</li>
                  <li>aucun contrôle tiers n’est mentionné ;</li>
                  <li>le document est demandé pour le dossier fournisseur.</li>
                </ul>
              </div>

              <div className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#0B3A63]">
                  Quand il faut escalader vers un niveau plus complet
                </h3>
                <ul className="mt-5 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>référentiel explicitement imposé ;</li>
                  <li>périmètre détaillé demandé ;</li>
                  <li>annexes techniques requises ;</li>
                  <li>ventilation précise attendue ;</li>
                  <li>vérification externe ou tierce annoncée.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <BackToSummaryButton />
            </div>
          </section>

          <section id="how-it-works" className="scroll-mt-24">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_60px_rgba(11,58,99,0.10)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                4. Comment ça fonctionne
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
                Répondre rapidement avec un document exploitable
              </h2>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                <div className="rounded-[24px] border border-white/12 bg-white/8 p-6">
                  <p className="text-sm font-semibold text-white/70">Étape 1</p>
                  <p className="mt-2 text-lg font-semibold">Vous renseignez vos données</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    Saisie simple adaptée à une PME, sans demander une démarche lourde
                    si le besoin reste documentaire.
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/12 bg-white/8 p-6">
                  <p className="text-sm font-semibold text-white/70">Étape 2</p>
                  <p className="mt-2 text-lg font-semibold">
                    Le document CO₂e est structuré
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    Résultat agrégé, méthode, limites et éléments de vérification sont
                    présentés dans un format clair.
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/12 bg-white/8 p-6">
                  <p className="text-sm font-semibold text-white/70">Étape 3</p>
                  <p className="mt-2 text-lg font-semibold">
                    Vous joignez le PDF au dossier
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    Vous répondez proprement à la demande quand un indicateur CO₂e
                    utilisable suffit.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/fr/generate/"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100"
                >
                  Générer mon attestation
                </Link>

                <Link
                  href="/fr/pricing/"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Voir le prix
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <BackToSummaryButton />
            </div>
          </section>

          <section id="when-complete" className="scroll-mt-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              5. Quand un inventaire complet devient nécessaire
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Les signaux qui indiquent qu’un document indicatif ne suffit plus
            </h2>

            <p className="mt-5 max-w-4xl text-base leading-relaxed text-[#475569] md:text-lg">
              Si le cahier des charges impose explicitement un standard, un périmètre
              détaillé, des justificatifs techniques ou une vérification externe,
              une estimation indicative ne suffit plus. Il faut alors aligner le
              livrable sur le niveau réellement exigé.
            </p>

            <div className="mt-8 rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 md:p-8">
              <ul className="ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                <li>référentiel clairement imposé ;</li>
                <li>périmètre détaillé ou ventilation attendue ;</li>
                <li>annexes techniques ou preuves requises ;</li>
                <li>contrôle externe ou vérification tierce annoncée ;</li>
                <li>livrable explicitement plus large qu’un simple screening.</li>
              </ul>
            </div>

            <p className="mt-6 text-base leading-relaxed text-[#475569] md:text-lg">
              C’est aussi ce qui explique pourquoi le{" "}
              <Link
                href="/fr/bilan-carbone-pme/cout/"
                className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
              >
                coût d’un bilan carbone PME
              </Link>{" "}
              peut varier fortement : un document de screening et un inventaire
              complet ne correspondent pas au même niveau d’effort.
            </p>

            <div className="mt-8">
              <BackToSummaryButton />
            </div>
          </section>

          <section className="scroll-mt-24">
            <div className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                En résumé
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Si l’appel d’offres attend surtout un indicateur CO₂e, il faut un
                document clair — pas forcément une mission lourde.
              </h2>
              <p className="mt-5 max-w-4xl text-base leading-relaxed text-[#475569] md:text-lg">
                Certif-Scope aide les PME à fournir un document CO₂e indicatif,
                lisible et vérifiable, adapté aux situations où la demande relève
                surtout du screening fournisseur ou du dossier d’appel d’offres.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/fr/generate/"
                  className="inline-flex min-h-[54px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
                >
                  Générer mon attestation
                </Link>

                <Link
                  href="/fr/pricing/"
                  className="inline-flex min-h-[54px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
                >
                  Voir le prix
                </Link>
              </div>
            </div>
          </section>

          <section id="faq" className="scroll-mt-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              6. Questions fréquentes
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
              Ce que les PME demandent le plus souvent
            </h2>

            <div className="mt-8 space-y-5">
              {faq.map((item) => (
                <div
                  key={item.q}
                  className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    {item.q}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-base">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <BackToSummaryButton />
            </div>
          </section>

          <section className="scroll-mt-24">
            <div className="grid gap-6 rounded-[30px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm md:grid-cols-2 md:p-8">
              <div>
                <h2 className="text-2xl font-extrabold text-[#0B3A63]">
                  Aller plus loin
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#475569]">
                  Pour les PME qui veulent comprendre le cadre plus large, ces pages
                  détaillent l’obligation, le coût et un exemple de document.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Link
                  href="/fr/bilan-carbone-pme/"
                  className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm font-medium text-[#0B3A63] shadow-sm transition-colors hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white"
                >
                  Bilan carbone PME
                </Link>
                <Link
                  href="/fr/bilan-carbone-pme/obligation/"
                  className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm font-medium text-[#0B3A63] shadow-sm transition-colors hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white"
                >
                  Obligation
                </Link>
                <Link
                  href="/fr/bilan-carbone-pme/cout/"
                  className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm font-medium text-[#0B3A63] shadow-sm transition-colors hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white"
                >
                  Coût
                </Link>
                <Link
                  href="/fr/bilan-carbone-pme/exemple/"
                  className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm font-medium text-[#0B3A63] shadow-sm transition-colors hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white"
                >
                  Exemple
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
                   }
