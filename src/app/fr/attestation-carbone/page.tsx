// PATH: src/app/fr/attestation-carbone/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — PAGE CONVERSION / CLUSTER FR
   Objectif : capter "attestation carbone"
====================================================== */

export const metadata: Metadata = {
  title:
    "Attestation carbone entreprise : document CO₂e simple, vérifiable et utilisable | Certif-Scope",
  description:
    "Attestation carbone entreprise : document CO₂e indicatif pour répondre à un client, un appel d’offres ou un référencement fournisseur. Format clair, standardisé, vérifiable et sans audit complet.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/attestation-carbone/",
    languages: {
      fr: "https://www.certif-scope.com/fr/attestation-carbone/",
    },
  },
  openGraph: {
    title:
      "Attestation carbone entreprise : document CO₂e simple, vérifiable et utilisable",
    description:
      "Répondre rapidement à une demande carbone : attestation CO₂e indicative, claire, datée, vérifiable et adaptée aux dossiers PME.",
    url: "https://www.certif-scope.com/fr/attestation-carbone/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function AttestationCarbonePageFR() {
  const pageUrl = "https://www.certif-scope.com/fr/attestation-carbone/";

  const faq = [
    {
      q: "Qu’est-ce qu’une attestation carbone ?",
      a: "Une attestation carbone est un document CO₂e qui présente un résultat d’émissions, une méthode, une année couverte et des limites explicites. Elle est souvent utilisée pour répondre à une demande client, fournisseur ou appel d’offres.",
    },
    {
      q: "Une attestation carbone remplace-t-elle un bilan carbone complet ?",
      a: "Non. Une attestation carbone sert à répondre à un besoin de screening documentaire. Elle ne remplace pas un inventaire complet ni un audit réglementaire.",
    },
    {
      q: "Dans quels cas une attestation carbone suffit-elle ?",
      a: "Dans la majorité des cas PME : référencement fournisseur, appel d’offres sans exigence technique détaillée, demande d’un client, banque ou assurance.",
    },
    {
      q: "Que contient une attestation carbone ?",
      a: "Un résultat CO₂e agrégé, une année couverte, une méthode déclarée, des limites explicites, un identifiant et un mécanisme de vérification.",
    },
    {
      q: "L’attestation carbone est-elle vérifiable ?",
      a: "Oui. Elle contient un identifiant unique et peut être vérifiée indépendamment pour garantir son intégrité.",
    },
    {
      q: "Une attestation carbone est-elle acceptable pour un appel d’offres ?",
      a: "Souvent oui, si la demande relève du screening. Si le cahier des charges impose un standard précis, un périmètre détaillé ou une vérification tierce, il faut suivre ce cadre.",
    },
    {
      q: "Pourquoi une PME choisit-elle une attestation carbone plutôt qu’un bilan complet ?",
      a: "Parce qu’une attestation carbone permet souvent de répondre plus vite, avec un format clair, archivable et réutilisable, lorsque le besoin réel du dossier est documentaire.",
    },
    {
      q: "Quelles données faut-il pour produire une attestation carbone indicative ?",
      a: "Des dépenses annuelles par catégories suffisent pour un modèle spend-based. Les données physiques détaillées ne sont pas nécessaires pour ce type de document.",
    },
  ];

  const relatedPages = [
    {
      title: "Bilan carbone PME",
      text: "Comprendre l’ensemble du sujet : obligation, coût, différence entre document indicatif et bilan plus complet.",
      href: "/fr/bilan-carbone-pme/",
      cta: "Voir la page pilier",
    },
    {
      title: "Bilan carbone appel d’offres",
      text: "Savoir quoi joindre dans un dossier quand un critère carbone ou ESG apparaît dans une consultation.",
      href: "/fr/bilan-carbone-appel-offres/",
      cta: "Voir le cas appel d’offres",
    },
    {
      title: "Bilan carbone fournisseur",
      text: "Répondre à une demande d’acheteur ou de référencement fournisseur avec un document CO₂e au bon niveau.",
      href: "/fr/bilan-carbone-fournisseur/",
      cta: "Voir le cas fournisseur",
    },
    {
      title: "Méthodologie",
      text: "Comprendre la logique spend-based, la formule utilisée et les limites du document.",
      href: "/fr/product/methodology/",
      cta: "Voir la méthodologie",
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
        name: "Attestation carbone",
        item: pageUrl,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Attestation carbone entreprise",
    url: pageUrl,
    description:
      "Attestation carbone entreprise : document CO₂e simple, vérifiable et utilisable pour répondre à une demande client, fournisseur ou appel d’offres.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com",
    },
    inLanguage: "fr-FR",
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Attestation carbone indicative pour entreprise",
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com",
    },
    areaServed: "FR",
    serviceType: "Document CO₂e indicatif (screening)",
    description:
      "Service de génération d’une attestation carbone indicative spend-based destinée aux workflows fournisseurs, appels d’offres, banque, assurance et screening ESG.",
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

  const TocItem = ({ href, label }: { href: string; label: string }) => (
    <li>
      <a
        href={href}
        className="text-[#0B3A63] transition-colors hover:text-[#1FB6C1] hover:underline underline-offset-4"
      >
        {label}
      </a>
    </li>
  );

  return (
    <section
      id="attestation-carbone"
      data-section="attestation-carbone"
      className="relative overflow-hidden bg-white"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#F8FAFC_100%)]" />
      <div className="absolute left-[-8%] top-24 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
      <div className="absolute right-[-6%] top-40 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      <div id="top" />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-12 md:px-8 md:pt-16">
        {/* HERO / HEADER */}
        <header className="mx-auto max-w-5xl">
          <p className="inline-flex items-center gap-3 rounded-full border border-[#0B3A63]/10 bg-white/92 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B3A63]/75 shadow-sm backdrop-blur md:text-xs">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1] shadow-[0_0_0_4px_rgba(31,182,193,0.14)]" />
            Attestation carbone • PME • Fournisseur • Appel d’offres
          </p>

          <h1 className="mt-6 max-w-5xl text-3xl font-extrabold leading-[0.96] tracking-[-0.05em] text-[#0B3A63] md:text-5xl">
            Attestation carbone entreprise :
            <br />
            <span className="relative inline-block">
              document CO₂e simple
              <span className="absolute bottom-1 left-0 h-3 w-full rounded-full bg-[#1FB6C1]/18" />
            </span>{" "}
            vérifiable et utilisable
          </h1>

          <p className="mt-4 text-sm font-medium text-[#0B3A63]/75 md:text-base">
            Réponse rapide à une demande client, fournisseur, banque, assurance
            ou appel d’offres.
          </p>

          <div className="mt-6 max-w-4xl space-y-4">
            <p className="text-lg leading-relaxed text-[#475569]">
              <strong className="text-[#0B3A63]">
                Une attestation carbone permet de répondre rapidement à une
                demande documentaire
              </strong>{" "}
              avec un document CO₂e clair, daté, archivable et vérifiable,
              sans lancer automatiquement un audit complet.
            </p>

            <p className="text-base leading-relaxed text-[#64748B] md:text-lg">
              Dans beaucoup de cas PME, ce que l’on demande réellement n’est pas
              un inventaire détaillé, mais un document de screening au bon
              niveau. Cette page explique quand une attestation carbone suffit,
              ce qu’elle doit contenir, et comment elle se distingue d’un{" "}
              <Link
                href="/fr/bilan-carbone-pme/"
                className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
              >
                bilan carbone PME
              </Link>{" "}
              plus large ou d’un travail plus complet.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Ce que c’est
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Un document CO₂e indicatif avec résultat, année, méthode,
                limites explicites et vérification.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Quand c’est utile
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Référencement fournisseur, appel d’offres, demande client,
                banque, assurance ou screening ESG.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Ce que ce n’est pas
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Ni audit réglementaire, ni inventaire complet, ni reporting
                CSRD/ESRS.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/fr/generate/"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
            >
              Générer mon attestation →
            </Link>

            <Link
              href="/fr/pricing/"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
            >
              Voir le prix
            </Link>

            <Link
              href="/fr/verify"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#0B3A63]/14 bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white"
            >
              Vérifier un document
            </Link>
          </div>
        </header>

        {/* QUICK USE CASE BLOCK */}
        <section className="mx-auto mt-12 max-w-5xl">
          <div className="rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 md:p-8">
            <h2 className="text-2xl font-extrabold leading-tight text-[#0B3A63]">
              Dans la pratique, une attestation carbone est souvent demandée ici
            </h2>

            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                un client veut un document carbone pour compléter un dossier ;
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                un référencement fournisseur bloque faute de justificatif CO₂e ;
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                un appel d’offres mentionne un critère environnemental ;
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                une banque ou un assureur demande un document ESG lisible.
              </li>
            </ul>

            <p className="mt-5 text-sm leading-relaxed text-[#64748B] md:text-base">
              Dans ces cas, la vraie question n’est pas toujours{" "}
              <strong className="text-[#0B3A63]">
                “faut-il un bilan complet ?”
              </strong>{" "}
              mais souvent{" "}
              <strong className="text-[#0B3A63]">
                “quel document faut-il envoyer maintenant ?”
              </strong>
            </p>
          </div>
        </section>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* MAIN */}
          <div className="space-y-14 lg:col-span-8">
            {/* MOBILE TOC */}
            <section className="lg:hidden">
              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Sommaire
                </p>
                <nav aria-label="Sommaire mobile attestation carbone" className="mt-4">
                  <ol className="ml-5 list-decimal space-y-2 text-sm">
                    <TocItem href="#definition" label="Qu’est-ce qu’une attestation carbone ?" />
                    <TocItem href="#when-sufficient" label="Quand une attestation suffit" />
                    <TocItem href="#content" label="Ce que doit contenir le document" />
                    <TocItem href="#difference" label="Attestation vs bilan complet" />
                    <TocItem href="#use-cases" label="Cas client, fournisseur et AO" />
                    <TocItem href="#verification" label="Vérification" />
                    <TocItem href="#related-guides" label="Guides associés" />
                    <TocItem href="#faq" label="FAQ" />
                  </ol>
                </nav>
              </div>
            </section>

            {/* 1 */}
            <section id="definition" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                1) Qu’est-ce qu’une attestation carbone ?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Une attestation carbone est un{" "}
                <strong className="text-[#0B3A63]">document CO₂e</strong> qui
                présente un résultat, une année couverte, une méthode déclarée et
                des limites explicites. Son rôle principal est de fournir une
                réponse documentaire claire, lisible et archivable.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
                Pour une PME, elle sert souvent à répondre rapidement à une
                demande externe, là où un inventaire complet serait trop long,
                trop coûteux ou simplement non exigé. Si tu cherches la vue
                d’ensemble, la page{" "}
                <Link
                  href="/fr/bilan-carbone-pme/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  bilan carbone PME
                </Link>{" "}
                explique ce cadrage global.
              </p>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-8">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Ce qu’un tiers comprend immédiatement dans une bonne attestation
                </h3>
                <ul className="mt-5 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>le résultat CO₂e communiqué ;</li>
                  <li>la période couverte ;</li>
                  <li>la méthode utilisée ;</li>
                  <li>les limites du document ;</li>
                  <li>son identité documentaire et sa vérification.</li>
                </ul>
              </div>
            </section>

            {/* 2 */}
            <section id="when-sufficient" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                2) Quand une attestation carbone suffit
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Une attestation carbone suffit souvent lorsque la demande relève du{" "}
                <strong className="text-[#0B3A63]">screening documentaire</strong>.
                Autrement dit, on attend un document archivable et comparable,
                pas un livrable technique exhaustif.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Souvent suffisant
                  </h3>
                  <ul className="mt-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569]">
                    <li>référencement fournisseur ;</li>
                    <li>appel d’offres sans standard imposé ;</li>
                    <li>demande client générique ;</li>
                    <li>banque ou assurance en lecture ESG ;</li>
                    <li>besoin d’un PDF rapide à transmettre.</li>
                  </ul>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Souvent insuffisant seul
                  </h3>
                  <ul className="mt-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569]">
                    <li>standard explicitement imposé ;</li>
                    <li>périmètre détaillé exigé ;</li>
                    <li>preuves techniques demandées ;</li>
                    <li>vérification tierce imposée ;</li>
                    <li>inventaire complet attendu noir sur blanc.</li>
                  </ul>
                </div>
              </div>

              <p className="mt-6 text-base leading-relaxed text-[#475569] md:text-lg">
                Si la question principale est l’obligation ou non, le guide{" "}
                <Link
                  href="/fr/bilan-carbone-pme/obligation/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  bilan carbone PME obligatoire
                </Link>{" "}
                aide à distinguer l’exigence formelle du simple besoin de dossier.
              </p>
            </section>

            {/* 3 */}
            <section id="content" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                3) Ce que doit contenir une attestation carbone
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Une bonne attestation carbone n’a pas besoin d’être longue, mais
                elle doit être claire, stable et sans ambiguïté sur sa portée.
              </p>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-8">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Check-list du document
                </h3>

                <ul className="mt-5 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>résultat CO₂e agrégé ;</li>
                  <li>année couverte et date d’émission ;</li>
                  <li>méthode déclarée ;</li>
                  <li>limites explicites ;</li>
                  <li>PDF standardisé ;</li>
                  <li>identifiant unique ;</li>
                  <li>logique de vérification.</li>
                </ul>

                <div className="mt-6 rounded-2xl border border-[#1FB6C1]/18 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-5">
                  <p className="text-sm leading-relaxed text-[#475569] md:text-base">
                    <strong className="text-[#0B3A63]">
                      Point important :
                    </strong>{" "}
                    le document doit annoncer clairement qu’il s’agit d’une
                    attestation indicative de screening, et non d’un audit ou d’un
                    inventaire complet.
                  </p>
                </div>
              </div>
            </section>

            {/* 4 */}
            <section id="difference" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                4) Attestation carbone ou bilan carbone complet ?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Une attestation carbone et un bilan carbone complet ne répondent
                pas au même objectif. Le bon choix dépend du niveau réellement
                attendu dans le dossier.
              </p>

              <div className="mt-6 overflow-x-auto rounded-[28px] border border-[#0B3A63]/10 bg-white shadow-sm">
                <table className="min-w-[720px] w-full text-sm">
                  <thead>
                    <tr className="bg-[#F8FAFC]">
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Type
                      </th>
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Usage
                      </th>
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Données
                      </th>
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Complexité
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#0B3A63]/8">
                    <tr>
                      <td className="p-4 text-[#475569]">Attestation carbone</td>
                      <td className="p-4 text-[#475569]">Screening / dossier</td>
                      <td className="p-4 text-[#475569]">Dépenses annuelles</td>
                      <td className="p-4 text-[#475569]">Faible à modérée</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-[#475569]">Bilan carbone complet</td>
                      <td className="p-4 text-[#475569]">
                        Analyse approfondie / inventaire
                      </td>
                      <td className="p-4 text-[#475569]">
                        Données d’activité, périmètres, hypothèses
                      </td>
                      <td className="p-4 text-[#475569]">Élevée</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-base leading-relaxed text-[#475569] md:text-lg">
                Pour approfondir le sujet du coût, consulte aussi{" "}
                <Link
                  href="/fr/bilan-carbone-pme/cout/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  combien coûte un bilan carbone PME
                </Link>
                , et pour voir à quoi ressemble le document final, consulte{" "}
                <Link
                  href="/fr/bilan-carbone-pme/exemple/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  exemple de bilan carbone PME
                </Link>
                .
              </p>
            </section>

            {/* 5 */}
            <section id="use-cases" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                5) Cas client, fournisseur, banque et appel d’offres
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Le mot “attestation carbone” revient souvent dans des situations
                très concrètes. L’intérêt du document dépend du contexte dans
                lequel il est demandé.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Demande client
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Le client veut un document simple pour compléter son dossier
                    fournisseur ou son évaluation ESG.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Référencement fournisseur
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Le document sert à éviter un blocage administratif et à
                    fournir une preuve CO₂e au bon niveau.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Banque ou assurance
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    L’attestation permet une lecture rapide d’un indicateur
                    environnemental dans un cadre de screening.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Appel d’offres
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Le document peut suffire lorsque le cahier des charges ne
                    demande pas un référentiel détaillé ou une vérification tierce.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/fr/bilan-carbone-fournisseur/"
                  className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
                >
                  Voir le cas fournisseur →
                </Link>
                <Link
                  href="/fr/bilan-carbone-appel-offres/"
                  className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63]/14 bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white"
                >
                  Voir le cas appel d’offres →
                </Link>
              </div>
            </section>

            {/* 6 */}
            <section id="verification" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                6) Vérification : pourquoi c’est essentiel
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Une attestation carbone utile ne doit pas seulement être lisible :
                elle doit aussi être identifiable et contrôlable. C’est ce qui la
                rend plus crédible dans un dossier.
              </p>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 md:p-8">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Ce que la vérification apporte
                </h3>
                <ul className="mt-5 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>référence documentaire claire ;</li>
                  <li>contrôle plus simple par un tiers ;</li>
                  <li>réduction des doutes sur l’intégrité du document ;</li>
                  <li>meilleure archivabilité dans un dossier.</li>
                </ul>

                <div className="mt-6">
                  <Link
                    href="/fr/verify"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
                  >
                    Vérifier un document
                  </Link>
                </div>
              </div>
            </section>

            {/* RELATED GUIDES */}
            <section id="related-guides" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                7) Guides associés
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                L’attestation carbone est une porte d’entrée très concrète. Les
                pages ci-dessous permettent d’approfondir selon le contexte réel
                du dossier.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {relatedPages.map((page) => (
                  <div
                    key={page.href}
                    className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-[#0B3A63]">
                      {page.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                      {page.text}
                    </p>
                    <div className="mt-5">
                      <Link
                        href={page.href}
                        className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63]/14 bg-white px-4 py-2.5 text-sm font-semibold text-[#0B3A63] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white"
                      >
                        {page.cta} →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_60px_rgba(11,58,99,0.10)] md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Réponse immédiate
                </p>

                <h2 className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl">
                  Produire une attestation carbone claire, standardisée et vérifiable
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
                  Certif-Scope permet de générer un document CO₂e indicatif
                  adapté aux workflows clients, fournisseurs, appels d’offres,
                  banque et assurance, avec méthode déclarée et limites visibles.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
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
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                FAQ — Attestation carbone
              </h2>

              <div className="mt-6 space-y-5">
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
            </section>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4">
            <div className="sticky top-6 space-y-6">
              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Sommaire
                </p>

                <nav aria-label="Sommaire attestation carbone" className="mt-4">
                  <ol className="ml-5 list-decimal space-y-2 text-sm">
                    <TocItem href="#definition" label="Qu’est-ce qu’une attestation carbone ?" />
                    <TocItem href="#when-sufficient" label="Quand une attestation suffit" />
                    <TocItem href="#content" label="Ce que doit contenir le document" />
                    <TocItem href="#difference" label="Attestation vs bilan complet" />
                    <TocItem href="#use-cases" label="Cas client, fournisseur et AO" />
                    <TocItem href="#verification" label="Vérification" />
                    <TocItem href="#related-guides" label="Guides associés" />
                    <TocItem href="#faq" label="FAQ" />
                  </ol>
                </nav>
              </div>

              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Rappel de périmètre
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  Cette page traite l’attestation carbone comme document CO₂e de
                  screening. Elle ne remplace pas un audit ni un inventaire
                  complet, et ne constitue pas un reporting CSRD/ESRS.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/fr/product/methodology/"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63] px-4 py-2 text-sm font-medium text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
                  >
                    Méthodologie
                  </Link>
                  <Link
                    href="/fr/product/compliance/"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/14 px-4 py-2 text-sm font-medium text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
                  >
                    Conformité
                  </Link>
                </div>
              </div>

              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Liens utiles
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#475569]">
                  <li>
                    <Link
                      className="underline underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                      href="/fr/bilan-carbone-pme/"
                    >
                      Bilan carbone PME
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                      href="/fr/bilan-carbone-pme/obligation/"
                    >
                      Bilan carbone PME obligatoire
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                      href="/fr/bilan-carbone-pme/cout/"
                    >
                      Combien coûte un bilan carbone PME ?
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                      href="/fr/bilan-carbone-appel-offres/"
                    >
                      Bilan carbone appel d’offres
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                      href="/fr/bilan-carbone-fournisseur/"
                    >
                      Bilan carbone fournisseur
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Accès rapide
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/fr/"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/14 px-4 py-2 text-sm font-medium text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
                  >
                    Accueil FR
                  </Link>
                  <a
                    href="#top"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/14 px-4 py-2 text-sm font-medium text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
                  >
                    Haut de page
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
             }
