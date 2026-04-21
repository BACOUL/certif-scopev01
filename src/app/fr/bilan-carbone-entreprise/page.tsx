// PATH: src/app/fr/bilan-carbone-entreprise/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — PAGE FR
   Objectif : capter "bilan carbone entreprise"
====================================================== */

export const metadata: Metadata = {
  title:
    "Bilan carbone entreprise : est-ce obligatoire, combien ça coûte et que fournir ? | Certif-Scope",
  description:
    "Bilan carbone entreprise : comprendre ce qui est réellement demandé, est-ce obligatoire, combien cela coûte, et quel document fournir selon qu’il s’agisse d’un client, d’un appel d’offres, d’un fournisseur, d’une banque ou d’un assureur.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/bilan-carbone-entreprise/",
    languages: {
      fr: "https://www.certif-scope.com/fr/bilan-carbone-entreprise/",
    },
  },
  openGraph: {
    title:
      "Bilan carbone entreprise : est-ce obligatoire, combien ça coûte et que fournir ?",
    description:
      "Guide entreprise : obligation, coût, document à fournir et différence entre réponse de screening et inventaire complet.",
    url: "https://www.certif-scope.com/fr/bilan-carbone-entreprise/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function BilanCarboneEntreprisePageFR() {
  const pageUrl = "https://www.certif-scope.com/fr/bilan-carbone-entreprise/";

  const faq = [
    {
      q: "Qu’est-ce qu’un bilan carbone entreprise ?",
      a: "Un bilan carbone entreprise est une estimation des émissions de gaz à effet de serre liées à l’activité d’une entreprise sur une période donnée. Selon le contexte, cela peut désigner un simple document de screening ou un inventaire beaucoup plus complet.",
    },
    {
      q: "Le bilan carbone entreprise est-il obligatoire ?",
      a: "Pas de manière générale pour toutes les entreprises. En pratique, beaucoup de demandes viennent surtout d’un client, d’un appel d’offres, d’un référencement fournisseur, d’une banque ou d’un assureur.",
    },
    {
      q: "Combien coûte un bilan carbone entreprise ?",
      a: "Le coût dépend du niveau attendu. Une réponse de screening reste plus simple et moins coûteuse qu’un inventaire complet avec périmètre détaillé, données d’activité et vérification.",
    },
    {
      q: "Que doit contenir un document carbone entreprise ?",
      a: "Un résultat CO₂e, une année couverte, une méthode déclarée, des limites explicites, un format stable et un mécanisme de vérification lorsqu’il s’agit d’un document de screening.",
    },
    {
      q: "Quelle différence entre une entreprise et une PME sur ce sujet ?",
      a: "Le principe est le même, mais la page bilan carbone PME cible plus précisément les petites et moyennes entreprises confrontées à des demandes documentaires fréquentes.",
    },
    {
      q: "Quand un document simple suffit-il ?",
      a: "Lorsque la demande est générique, documentaire et orientée screening : fournisseur, appel d’offres, banque, assurance, ou besoin d’un justificatif CO₂e archivable.",
    },
    {
      q: "Quand faut-il aller vers une démarche plus lourde ?",
      a: "Lorsqu’un standard, un périmètre précis, des preuves, une ventilation détaillée ou une vérification tierce sont explicitement exigés.",
    },
    {
      q: "Une attestation carbone entreprise est-elle vérifiable ?",
      a: "Oui, si elle intègre un identifiant unique et une logique de contrôle permettant à un tiers de vérifier son authenticité et son intégrité.",
    },
  ];

  const relatedPages = [
    {
      title: "Bilan carbone PME",
      text: "La page pilier la plus importante pour les besoins des petites et moyennes entreprises.",
      href: "/fr/bilan-carbone-pme/",
      cta: "Voir la page PME",
    },
    {
      title: "Attestation carbone",
      text: "Le bon point d’entrée quand la demande réelle porte sur un document CO₂e de screening.",
      href: "/fr/attestation-carbone/",
      cta: "Voir l’attestation carbone",
    },
    {
      title: "Bilan carbone appel d’offres",
      text: "Quand un critère carbone apparaît dans une consultation ou un dossier marché.",
      href: "/fr/bilan-carbone-appel-offres/",
      cta: "Voir le guide appel d’offres",
    },
    {
      title: "Bilan carbone fournisseur",
      text: "Quand l’enjeu est le référencement fournisseur, la conformité dossier ou le screening achats.",
      href: "/fr/bilan-carbone-fournisseur/",
      cta: "Voir le guide fournisseur",
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
        name: "Bilan carbone entreprise",
        item: pageUrl,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bilan carbone entreprise",
    url: pageUrl,
    description:
      "Bilan carbone entreprise : est-ce obligatoire, combien ça coûte et que fournir selon le contexte réel de la demande.",
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
    name: "Document CO₂e indicatif pour entreprise",
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com",
    },
    areaServed: "FR",
    serviceType: "Indicateur CO₂e indicatif (screening)",
    description:
      "Service de génération d’un document CO₂e indicatif spend-based destiné aux entreprises ayant besoin d’une réponse documentaire claire, archivable et vérifiable.",
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
      id="bilan-carbone-entreprise"
      data-section="bilan-carbone-entreprise"
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
        <header className="mx-auto max-w-5xl">
          <p className="inline-flex items-center gap-3 rounded-full border border-[#0B3A63]/10 bg-white/92 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B3A63]/75 shadow-sm backdrop-blur md:text-xs">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1] shadow-[0_0_0_4px_rgba(31,182,193,0.14)]" />
            Entreprise • CO₂e • Obligation • Coût • Screening
          </p>

          <h1 className="mt-6 max-w-5xl text-3xl font-extrabold leading-[0.96] tracking-[-0.05em] text-[#0B3A63] md:text-5xl">
            Bilan carbone entreprise :
            <br />
            <span className="relative inline-block">
              est-ce obligatoire
              <span className="absolute bottom-1 left-0 h-3 w-full rounded-full bg-[#1FB6C1]/18" />
            </span>{" "}
            combien ça coûte et que fournir ?
          </h1>

          <p className="mt-4 text-sm font-medium text-[#0B3A63]/75 md:text-base">
            Vue d’ensemble pour comprendre le niveau réellement attendu dans un
            dossier carbone entreprise.
          </p>

          <div className="mt-6 max-w-4xl space-y-4">
            <p className="text-lg leading-relaxed text-[#475569]">
              <strong className="text-[#0B3A63]">
                Le terme “bilan carbone entreprise” recouvre des réalités très
                différentes.
              </strong>{" "}
              Dans certains cas, il s’agit d’un document CO₂e de screening
              destiné à être joint à un dossier. Dans d’autres, il s’agit d’une
              démarche plus complète avec périmètre détaillé, données d’activité
              et attentes plus lourdes.
            </p>

            <p className="text-base leading-relaxed text-[#64748B] md:text-lg">
              Cette page sert de point d’entrée large. Elle permet ensuite
              d’orienter vers la bonne sous-page :{" "}
              <Link
                href="/fr/bilan-carbone-pme/"
                className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
              >
                bilan carbone PME
              </Link>
              ,{" "}
              <Link
                href="/fr/attestation-carbone/"
                className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
              >
                attestation carbone
              </Link>
              ,{" "}
              <Link
                href="/fr/bilan-carbone-appel-offres/"
                className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
              >
                appel d’offres
              </Link>{" "}
              ou{" "}
              <Link
                href="/fr/bilan-carbone-fournisseur/"
                className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
              >
                fournisseur
              </Link>
              .
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Question n°1
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                La demande vise-t-elle un document de screening ou un bilan plus
                complet ?
              </p>
            </div>

            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Question n°2
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Le besoin vient-il d’un client, d’un appel d’offres, d’un
                référencement fournisseur ou d’une banque ?
              </p>
            </div>

            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Question n°3
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Le dossier impose-t-il réellement un standard, un périmètre et
                des preuves détaillées ?
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/fr/generate/"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
            >
              Obtenir un document carbone →
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

        <section className="mx-auto mt-12 max-w-5xl">
          <div className="rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 md:p-8">
            <h2 className="text-2xl font-extrabold leading-tight text-[#0B3A63]">
              Dans la pratique, la demande “bilan carbone entreprise” vise
              souvent l’un de ces cas
            </h2>

            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                un client demande un justificatif CO₂e dans un dossier ;
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                un appel d’offres mentionne un critère environnemental ;
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                un référencement fournisseur bloque sans document carbone ;
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                une banque ou un assureur demande un indicateur ESG simple.
              </li>
            </ul>

            <p className="mt-5 text-sm leading-relaxed text-[#64748B] md:text-base">
              Le point décisif est donc de comprendre{" "}
              <strong className="text-[#0B3A63]">
                ce que le dossier attend réellement
              </strong>
              , et non de supposer automatiquement qu’un bilan complet est requis.
            </p>
          </div>
        </section>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="space-y-14 lg:col-span-8">
            <section className="lg:hidden">
              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Sommaire
                </p>
                <nav
                  aria-label="Sommaire mobile bilan carbone entreprise"
                  className="mt-4"
                >
                  <ol className="ml-5 list-decimal space-y-2 text-sm">
                    <TocItem href="#definition" label="Qu’est-ce qu’un bilan carbone entreprise ?" />
                    <TocItem href="#obligation" label="Est-ce obligatoire ?" />
                    <TocItem href="#what-is-expected" label="Ce qui est réellement attendu" />
                    <TocItem href="#difference" label="Document simple ou démarche complète" />
                    <TocItem href="#cost" label="Combien ça coûte" />
                    <TocItem href="#best-entry" label="Quelle page lire ensuite" />
                    <TocItem href="#related-guides" label="Guides associés" />
                    <TocItem href="#faq" label="FAQ" />
                  </ol>
                </nav>
              </div>
            </section>

            <section id="definition" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                1) Qu’est-ce qu’un bilan carbone entreprise ?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Un bilan carbone entreprise est une estimation des émissions de
                gaz à effet de serre liées à l’activité d’une entreprise sur une
                période donnée. Mais dans la pratique, ce terme regroupe des
                niveaux de réponse très différents.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Sens courant dans un dossier
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Souvent, on attend un document CO₂e lisible, archivable,
                    daté et réutilisable pour un dossier client, fournisseur ou
                    banque.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Sens plus technique
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Dans d’autres cas, le terme désigne un inventaire plus
                    complet avec données d’activité, périmètre détaillé et cadre
                    méthodologique plus lourd.
                  </p>
                </div>
              </div>
            </section>

            <section id="obligation" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                2) Bilan carbone entreprise : est-ce obligatoire ?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Pas de manière générale pour toutes les entreprises. Très
                souvent, la demande est surtout documentaire : elle vient d’un
                client, d’un référencement fournisseur, d’un appel d’offres,
                d’une banque ou d’un assureur.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
                Si le besoin concerne spécifiquement une petite ou moyenne
                structure, la page{" "}
                <Link
                  href="/fr/bilan-carbone-pme/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  bilan carbone PME
                </Link>{" "}
                est plus précise. Si la vraie question porte sur l’obligation,
                alors la page{" "}
                <Link
                  href="/fr/bilan-carbone-pme/obligation/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  bilan carbone PME obligatoire
                </Link>{" "}
                permet d’aller directement au cœur du sujet.
              </p>
            </section>

            <section id="what-is-expected" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                3) Ce qui est réellement attendu dans beaucoup de dossiers
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Dans de nombreux cas, l’attente réelle n’est pas un inventaire
                détaillé, mais un document simple et propre au bon niveau.
              </p>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-8">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Ce que le dossier veut souvent
                </h3>
                <ul className="mt-5 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>un résultat CO₂e compréhensible rapidement ;</li>
                  <li>une année couverte ;</li>
                  <li>une méthode déclarée ;</li>
                  <li>des limites explicites ;</li>
                  <li>un PDF stable et archivable ;</li>
                  <li>une vérification ou un identifiant.</li>
                </ul>

                <div className="mt-6 rounded-2xl border border-[#1FB6C1]/18 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-5">
                  <p className="text-sm leading-relaxed text-[#475569] md:text-base">
                    Dans ces cas, la meilleure page d’entrée n’est pas toujours
                    “bilan carbone entreprise”, mais souvent{" "}
                    <Link
                      href="/fr/attestation-carbone/"
                      className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                    >
                      attestation carbone
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </section>

            <section id="difference" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                4) Document simple ou démarche complète ?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Le bon niveau de réponse dépend du niveau d’exigence du dossier.
                Il ne faut ni sous-répondre, ni payer pour une démarche beaucoup
                plus lourde que nécessaire.
              </p>

              <div className="mt-6 overflow-x-auto rounded-[28px] border border-[#0B3A63]/10 bg-white shadow-sm">
                <table className="min-w-[720px] w-full text-sm">
                  <thead>
                    <tr className="bg-[#F8FAFC]">
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Niveau
                      </th>
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Usage
                      </th>
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Complexité
                      </th>
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Cas typique
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#0B3A63]/8">
                    <tr>
                      <td className="p-4 text-[#475569]">Document de screening</td>
                      <td className="p-4 text-[#475569]">
                        Réponse dossier-ready
                      </td>
                      <td className="p-4 text-[#475569]">Faible à modérée</td>
                      <td className="p-4 text-[#475569]">
                        Client, fournisseur, banque, assurance, AO générique
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 text-[#475569]">Inventaire complet</td>
                      <td className="p-4 text-[#475569]">
                        Analyse plus approfondie
                      </td>
                      <td className="p-4 text-[#475569]">Élevée</td>
                      <td className="p-4 text-[#475569]">
                        Standard imposé, périmètre détaillé, preuve renforcée
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="cost" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                5) Combien coûte un bilan carbone entreprise ?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Le coût varie fortement selon le niveau attendu. Une réponse de
                screening est plus simple, plus rapide et moins coûteuse qu’une
                démarche complète avec collecte détaillée, arbitrages et
                périmètre plus large.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
                Pour comprendre la logique de prix en détail, la page{" "}
                <Link
                  href="/fr/bilan-carbone-pme/cout/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  combien coûte un bilan carbone PME
                </Link>{" "}
                est la plus utile.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/fr/pricing/"
                  className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
                >
                  Voir le prix →
                </Link>
              </div>
            </section>

            <section id="best-entry" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                6) Quelle page faut-il lire ensuite ?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Cette page est volontairement large. La suite dépend du contexte
                réel de la demande.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Si tu es une PME
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Va sur{" "}
                    <Link
                      href="/fr/bilan-carbone-pme/"
                      className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                    >
                      bilan carbone PME
                    </Link>
                    .
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Si tu veux un document à transmettre
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Va sur{" "}
                    <Link
                      href="/fr/attestation-carbone/"
                      className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                    >
                      attestation carbone
                    </Link>
                    .
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Si c’est un appel d’offres
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Va sur{" "}
                    <Link
                      href="/fr/bilan-carbone-appel-offres/"
                      className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                    >
                      bilan carbone appel d’offres
                    </Link>
                    .
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Si c’est un dossier fournisseur
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Va sur{" "}
                    <Link
                      href="/fr/bilan-carbone-fournisseur/"
                      className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                    >
                      bilan carbone fournisseur
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </section>

            <section id="related-guides" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                7) Guides associés
              </h2>

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
                  Réponse screening
                </p>

                <h2 className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl">
                  Produire un document carbone entreprise clair et vérifiable
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
                  Certif-Scope permet de générer un document CO₂e indicatif
                  destiné aux dossiers clients, fournisseurs, appels d’offres,
                  banques et assurances, sans le présenter comme un audit ou un
                  inventaire complet.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/fr/generate/"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100"
                  >
                    Obtenir un document carbone
                  </Link>

                  <Link
                    href="/fr/attestation-carbone/"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    Voir l’attestation carbone
                  </Link>
                </div>
              </div>
            </section>

            <section id="faq" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                FAQ — Bilan carbone entreprise
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

          <aside className="lg:col-span-4">
            <div className="sticky top-6 space-y-6">
              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Sommaire
                </p>

                <nav aria-label="Sommaire bilan carbone entreprise" className="mt-4">
                  <ol className="ml-5 list-decimal space-y-2 text-sm">
                    <TocItem href="#definition" label="Qu’est-ce qu’un bilan carbone entreprise ?" />
                    <TocItem href="#obligation" label="Est-ce obligatoire ?" />
                    <TocItem href="#what-is-expected" label="Ce qui est réellement attendu" />
                    <TocItem href="#difference" label="Document simple ou démarche complète" />
                    <TocItem href="#cost" label="Combien ça coûte" />
                    <TocItem href="#best-entry" label="Quelle page lire ensuite" />
                    <TocItem href="#related-guides" label="Guides associés" />
                    <TocItem href="#faq" label="FAQ" />
                  </ol>
                </nav>
              </div>

              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Rappel utile
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  Cette page est une entrée large autour de “bilan carbone
                  entreprise”. Pour les besoins de screening, les pages PME,
                  attestation, fournisseur et appel d’offres sont souvent plus
                  directement utiles.
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
                      href="/fr/attestation-carbone/"
                    >
                      Attestation carbone
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
                  <li>
                    <Link
                      className="underline underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                      href="/fr/pricing/"
                    >
                      Prix
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
