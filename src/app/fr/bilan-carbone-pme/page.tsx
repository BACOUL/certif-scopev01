// PATH: src/app/fr/bilan-carbone-pme/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — PAGE PILIER FR
   Objectif : "bilan carbone PME" + obligation + coût + quoi fournir
====================================================== */

export const metadata: Metadata = {
  title:
    "Bilan carbone PME : est-ce obligatoire, combien ça coûte et que fournir ? | Certif-Scope",
  description:
    "Bilan carbone PME (France) : est-ce obligatoire, combien ça coûte, que fournir quand un client, un appel d’offres, une banque ou un assureur le demande, et comment répondre proprement sans audit complet. Guide clair, checklist et FAQ.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/bilan-carbone-pme/",
    languages: {
      fr: "https://www.certif-scope.com/fr/bilan-carbone-pme/",
    },
  },
  openGraph: {
    title:
      "Bilan carbone PME : est-ce obligatoire, combien ça coûte et que fournir ?",
    description:
      "Guide PME : obligation, coût, attentes réelles d’un client ou d’un appel d’offres, et différence entre document de screening et inventaire complet.",
    url: "https://www.certif-scope.com/fr/bilan-carbone-pme/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function BilanCarbonePMEPageFR() {
  const pageUrl = "https://www.certif-scope.com/fr/bilan-carbone-pme/";

  const faq = [
    {
      q: "Qu’est-ce qu’un bilan carbone pour une PME ?",
      a: "Un bilan carbone est une estimation des émissions de gaz à effet de serre d’une entreprise sur une période, souvent une année. Pour une PME, la demande vise souvent un document de screening — indicateur CO₂e, méthode déclarée, limites explicites et format archivable — plutôt qu’un inventaire complet détaillé.",
    },
    {
      q: "Le bilan carbone est-il obligatoire pour une PME ?",
      a: "Dans la majorité des cas, non. Pour beaucoup de PME, les demandes reçues sont surtout contractuelles ou documentaires : référencement fournisseur, appel d’offres, banque, assurance ou questionnaire ESG.",
    },
    {
      q: "Que faut-il fournir quand on n’a pas de bilan carbone complet ?",
      a: "Souvent, un document simple et cadré suffit : résultat CO₂e agrégé, année couverte, méthode déclarée, limites visibles, PDF standardisé et identifiant de vérification.",
    },
    {
      q: "Quelle différence entre une estimation indicative et un bilan carbone complet ?",
      a: "Une estimation indicative sert à répondre vite à une demande de screening avec un résultat agrégé et des limites explicites. Un bilan complet vise un inventaire détaillé avec données d’activité, périmètres, hypothèses et parfois vérification externe.",
    },
    {
      q: "Combien coûte un bilan carbone PME ?",
      a: "Le coût dépend du niveau attendu. Une réponse de screening est plus simple, plus rapide et moins coûteuse qu’un inventaire complet avec collecte détaillée et cadrage plus lourd.",
    },
    {
      q: "Est-ce acceptable pour un appel d’offres ?",
      a: "Souvent oui, si le besoin réel est un document de screening. Si le cahier des charges impose un standard, un périmètre ou un niveau de preuve précis, il faut suivre ce cadre.",
    },
    {
      q: "Quelles données faut-il pour une estimation indicative ?",
      a: "Des dépenses annuelles par catégories suffisent pour un modèle spend-based. Aucune donnée physique détaillée, comme les kWh, kilomètres ou litres, n’est requise pour ce type de réponse.",
    },
    {
      q: "Le document est-il vérifiable ?",
      a: "Oui. Le document est conçu pour comporter un identifiant et une logique de contrôle public permettant à un tiers de vérifier l’authenticité et l’intégrité du fichier.",
    },
  ];

  const relatedGuides = [
    {
      title: "Bilan carbone PME obligatoire",
      text: "Comprendre si la demande relève d’une obligation réelle ou d’un simple besoin de screening.",
      href: "/fr/bilan-carbone-pme/obligation/",
      cta: "Lire le guide obligation",
    },
    {
      title: "Combien coûte un bilan carbone PME ?",
      text: "Comparer le coût d’un document de screening et celui d’un inventaire plus complet.",
      href: "/fr/bilan-carbone-pme/cout/",
      cta: "Lire le guide coût",
    },
    {
      title: "Exemple de bilan carbone PME",
      text: "Voir à quoi ressemble un document utilisable dans un dossier client, fournisseur ou banque.",
      href: "/fr/bilan-carbone-pme/exemple/",
      cta: "Voir un exemple",
    },
    {
      title: "Bilan carbone appel d’offres",
      text: "Savoir quoi joindre quand un appel d’offres mentionne un critère carbone ou ESG.",
      href: "/fr/bilan-carbone-appel-offres/",
      cta: "Lire le guide appel d’offres",
    },
    {
      title: "Bilan carbone fournisseur",
      text: "Répondre à un référencement fournisseur avec un document CO₂e au bon niveau.",
      href: "/fr/bilan-carbone-fournisseur/",
      cta: "Lire le guide fournisseur",
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
        item: pageUrl,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bilan carbone PME",
    url: pageUrl,
    description:
      "Bilan carbone PME : est-ce obligatoire, combien ça coûte et que fournir quand on vous le demande. Guide clair, checklist et FAQ.",
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
    name: "Document CO₂e indicatif pour PME",
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com",
    },
    areaServed: "FR",
    serviceType: "Indicateur CO₂e indicatif (screening)",
    description:
      "Service de génération d’un document CO₂e indicatif spend-based à partir des dépenses annuelles, destiné aux workflows achats, appels d’offres, banque, assurance et screening ESG.",
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
      id="bilan-carbone-pme"
      data-section="bilan-carbone-pme"
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
            Guide PME • Obligation • Coût • Que fournir
          </p>

          <h1 className="mt-6 max-w-5xl text-3xl font-extrabold leading-[0.96] tracking-[-0.05em] text-[#0B3A63] md:text-5xl">
            Bilan carbone PME :
            <br />
            <span className="relative inline-block">
              est-ce obligatoire
              <span className="absolute bottom-1 left-0 h-3 w-full rounded-full bg-[#1FB6C1]/18" />
            </span>{" "}
            et que faut-il vraiment fournir ?
          </h1>

          <p className="mt-4 text-sm font-medium text-[#0B3A63]/75 md:text-base">
            Obligation, coût, appel d’offres, référencement fournisseur et
            document utilisable immédiatement.
          </p>

          <div className="mt-6 max-w-4xl space-y-4">
            <p className="text-lg leading-relaxed text-[#475569]">
              <strong className="text-[#0B3A63]">
                Pour la majorité des PME, le bilan carbone n’est pas une
                obligation générale.
              </strong>{" "}
              En pratique, la demande vise souvent un document de screening :
              un résultat CO₂e, une méthode déclarée, des limites explicites et
              un format PDF archivable.
            </p>

            <p className="text-base leading-relaxed text-[#64748B] md:text-lg">
              Cette page pilier centralise ce qu’une PME doit réellement
              comprendre : quand un document simple suffit, quand un bilan plus
              complet est nécessaire,{" "}
              <Link
                href="/fr/bilan-carbone-pme/cout/"
                className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
              >
                combien coûte un bilan carbone PME
              </Link>
              , si le{" "}
              <Link
                href="/fr/bilan-carbone-pme/obligation/"
                className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
              >
                bilan carbone PME est obligatoire
              </Link>
              , et quoi transmettre sans surdimensionner la réponse.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Est-ce obligatoire ?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Généralement non pour la majorité des PME. Les demandes sont
                souvent contractuelles, documentaires ou liées au screening.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Que fournir ?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Un document CO₂e clair avec résultat agrégé, méthode, limites,
                PDF standardisé et vérification.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Combien ça coûte ?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Le coût dépend du niveau attendu : screening rapide ou démarche
                complète avec cadrage plus lourd.
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
              Dans la pratique, la demande ressemble souvent à ça
            </h2>

            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                un client demande un bilan carbone pour finaliser un
                référencement fournisseur ;
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                un appel d’offres mentionne un critère carbone ou ESG ;
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                une banque ou un assureur demande un indicateur environnemental
                simple ;
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                la PME n’a aucun document prêt et ne sait pas si un audit complet
                est réellement exigé.
              </li>
            </ul>

            <p className="mt-5 text-sm leading-relaxed text-[#64748B] md:text-base">
              La vraie question n’est donc pas seulement{" "}
              <strong className="text-[#0B3A63]">
                “est-ce obligatoire ?”
              </strong>{" "}
              mais surtout{" "}
              <strong className="text-[#0B3A63]">
                “qu’est-ce qu’il faut fournir maintenant ?”
              </strong>
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
                <nav aria-label="Sommaire mobile bilan carbone PME" className="mt-4">
                  <ol className="ml-5 list-decimal space-y-2 text-sm">
                    <TocItem href="#definition" label="Qu’est-ce qu’un bilan carbone PME ?" />
                    <TocItem href="#obligation" label="Est-ce obligatoire ?" />
                    <TocItem href="#why-asked" label="Pourquoi on vous le demande" />
                    <TocItem href="#expected" label="Que fournir concrètement" />
                    <TocItem href="#difference" label="Document indicatif vs bilan complet" />
                    <TocItem href="#cost" label="Combien ça coûte" />
                    <TocItem href="#related-guides" label="Guides associés" />
                    <TocItem href="#faq" label="FAQ" />
                  </ol>
                </nav>
              </div>
            </section>

            <section>
              <div className="overflow-x-auto rounded-[28px] border border-[#0B3A63]/10 bg-white shadow-sm">
                <table className="min-w-[720px] w-full text-sm">
                  <thead>
                    <tr className="bg-[#F8FAFC]">
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Question
                      </th>
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Réponse rapide (PME)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#0B3A63]/8">
                    <tr>
                      <td className="p-4 text-[#475569]">Est-ce obligatoire ?</td>
                      <td className="p-4 text-[#475569]">
                        Généralement non. La plupart des demandes reçues par les PME
                        sont liées aux dossiers fournisseurs, appels d’offres,
                        banques ou assurances.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 text-[#475569]">Que faut-il fournir ?</td>
                      <td className="p-4 text-[#475569]">
                        Résultat CO₂e agrégé, année, méthode déclarée, limites
                        explicites, PDF standardisé et vérification.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 text-[#475569]">Combien ça coûte ?</td>
                      <td className="p-4 text-[#475569]">
                        Cela dépend du niveau attendu : screening rapide ou
                        inventaire complet. Une réponse de screening reste bien
                        plus légère.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 text-[#475569]">Combien de temps ?</td>
                      <td className="p-4 text-[#475569]">
                        Une réponse de screening peut être produite rapidement.
                        Une démarche complète demande davantage de cadrage,
                        collecte et temps.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="definition" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                1) Qu’est-ce qu’un bilan carbone pour une PME ?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Un bilan carbone est une estimation des émissions de gaz à effet de
                serre d’une entreprise sur une période donnée, souvent une année.
                En PME, quand un client ou un dossier demande un “bilan carbone”,
                la demande vise souvent un{" "}
                <strong className="text-[#0B3A63]">
                  document de screening
                </strong>{" "}
                plutôt qu’un inventaire complet détaillé.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
                Si tu veux voir à quoi ressemble concrètement ce type de format,
                la page{" "}
                <Link
                  href="/fr/bilan-carbone-pme/exemple/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  exemple de bilan carbone PME
                </Link>{" "}
                montre la structure typique d’un document utilisable dans un
                dossier.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Le cas le plus fréquent
                  </h3>
                  <ul className="mt-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569]">
                    <li>objectif : répondre vite à un dossier ;</li>
                    <li>résultat CO₂e agrégé + méthode déclarée ;</li>
                    <li>limites visibles et assumées ;</li>
                    <li>format PDF partageable et archivable.</li>
                  </ul>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Le cas plus exigeant
                  </h3>
                  <ul className="mt-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569]">
                    <li>inventaire plus détaillé ;</li>
                    <li>données d’activité, périmètres, hypothèses ;</li>
                    <li>parfois standard imposé ;</li>
                    <li>parfois vérification ou assurance.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="obligation" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                2) Bilan carbone PME : est-ce obligatoire ?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Pour la majorité des PME,{" "}
                <strong className="text-[#0B3A63]">
                  non, ce n’est pas une obligation générale
                </strong>
                . En pratique, les demandes arrivent surtout via des workflows
                externes : référencement fournisseur, appel d’offres, banque,
                assurance ou questionnaire ESG.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
                Pour détailler ce point, le guide{" "}
                <Link
                  href="/fr/bilan-carbone-pme/obligation/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  bilan carbone PME obligatoire
                </Link>{" "}
                explique comment distinguer une exigence formelle d’un simple
                besoin de screening documentaire.
              </p>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 md:p-8">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Comment lire correctement la demande
                </h3>

                <div className="mt-5 grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-[#0B3A63]/10 bg-white p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                      Signaux “screening”
                    </p>
                    <ul className="mt-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569]">
                      <li>questionnaire générique ;</li>
                      <li>format PDF demandé sans détail ;</li>
                      <li>aucune preuve technique exigée ;</li>
                      <li>méthode non imposée ou vague.</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-[#0B3A63]/10 bg-white p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                      Signaux “exigence formelle”
                    </p>
                    <ul className="mt-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569]">
                      <li>standard explicitement imposé ;</li>
                      <li>périmètre ou ventilation exigés ;</li>
                      <li>preuves ou annexes demandées ;</li>
                      <li>vérification tierce mentionnée.</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-[#64748B]">
                  Tant que le cahier des charges n’impose pas clairement un
                  standard, un périmètre et un niveau de preuve, la demande est
                  souvent du screening. L’erreur coûteuse consiste à produire une
                  réponse beaucoup plus lourde que nécessaire.
                </p>
              </div>
            </section>

            <section id="why-asked" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                3) Pourquoi on demande un bilan carbone aux PME
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                La plupart du temps, la demande vient de la chaîne de valeur.
                Les grands comptes, les acheteurs, les banques ou les assureurs
                cherchent un document simple, comparable et archivable, sans
                nécessairement exiger un inventaire carbone complet.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
                Deux cas reviennent très souvent : le{" "}
                <Link
                  href="/fr/bilan-carbone-fournisseur/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  bilan carbone fournisseur
                </Link>{" "}
                lors d’un référencement, et le{" "}
                <Link
                  href="/fr/bilan-carbone-appel-offres/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  bilan carbone appel d’offres
                </Link>{" "}
                lorsqu’un critère CO₂ ou ESG apparaît dans le dossier.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Référencement fournisseur
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Besoin d’un document clair pour compléter un dossier,
                    comparer plusieurs fournisseurs et archiver un justificatif.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Appel d’offres
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Critère environnemental ou CO₂ dans le dossier, sans exiger
                    forcément un audit détaillé.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Banque / assurance
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Screening ESG ou lecture du risque avec besoin d’un document
                    lisible, daté et réutilisable.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Chaîne de valeur
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Les donneurs d’ordre structurent leurs données fournisseurs
                    et demandent aux PME un indicateur minimal, cohérent et
                    exploitable rapidement.
                  </p>
                </div>
              </div>
            </section>

            <section id="expected" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                4) Que fournir concrètement quand on vous le demande ?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Dans la majorité des cas, ce qui est attendu n’est pas un audit
                complet, mais un{" "}
                <strong className="text-[#0B3A63]">
                  document CO₂e dossier-ready
                </strong>
                . Il doit pouvoir être lu vite, archivé dans un dossier et compris
                sans ambiguïté.
              </p>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-8">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Checklist de réponse pour une PME
                </h3>

                <ul className="mt-5 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>un résultat CO₂e agrégé, avec unité ;</li>
                  <li>l’année couverte et la date d’émission ;</li>
                  <li>la méthode déclarée ;</li>
                  <li>les limites visibles et assumées ;</li>
                  <li>un PDF standardisé et transmissible ;</li>
                  <li>un identifiant et une logique de vérification.</li>
                </ul>

                <div className="mt-6 rounded-2xl border border-[#1FB6C1]/18 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-5">
                  <p className="text-sm leading-relaxed text-[#475569] md:text-base">
                    <strong className="text-[#0B3A63]">
                      Phrase de cadrage utile :
                    </strong>{" "}
                    document CO₂e indicatif destiné au screening, avec méthode
                    déclarée, limites explicites et vérification disponible. Ce
                    document ne constitue ni un audit, ni un inventaire complet,
                    ni un reporting CSRD/ESRS.
                  </p>
                </div>
              </div>

              <p className="mt-6 text-base leading-relaxed text-[#475569] md:text-lg">
                Si tu veux une lecture plus ciblée selon le contexte, consulte
                aussi{" "}
                <Link
                  href="/fr/bilan-carbone-fournisseur/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  bilan carbone fournisseur
                </Link>{" "}
                pour le référencement, ou{" "}
                <Link
                  href="/fr/bilan-carbone-appel-offres/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  bilan carbone appel d’offres
                </Link>{" "}
                pour un dossier de consultation.
              </p>
            </section>

            <section id="difference" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                5) Document indicatif ou bilan carbone complet : comment choisir
                le bon niveau
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Le bon choix n’est pas toujours le plus complet. Il faut répondre
                au niveau attendu, sans sur-promesse ni sous-réponse.
              </p>

              <div className="mt-6 overflow-x-auto rounded-[28px] border border-[#0B3A63]/10 bg-white shadow-sm">
                <table className="min-w-[720px] w-full text-sm">
                  <thead>
                    <tr className="bg-[#F8FAFC]">
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Niveau
                      </th>
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Objectif
                      </th>
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Données
                      </th>
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Délai / effort
                      </th>
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Quand l’utiliser
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#0B3A63]/8">
                    <tr>
                      <td className="p-4 text-[#475569]">Document indicatif</td>
                      <td className="p-4 text-[#475569]">Réponse de screening</td>
                      <td className="p-4 text-[#475569]">Dépenses annuelles</td>
                      <td className="p-4 text-[#475569]">Rapide et léger</td>
                      <td className="p-4 text-[#475569]">
                        Référencement fournisseur, appel d’offres, banque,
                        assurance
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 text-[#475569]">Bilan complet</td>
                      <td className="p-4 text-[#475569]">
                        Inventaire détaillé / pilotage
                      </td>
                      <td className="p-4 text-[#475569]">
                        Données d’activité, périmètres, hypothèses
                      </td>
                      <td className="p-4 text-[#475569]">Plus long et plus coûteux</td>
                      <td className="p-4 text-[#475569]">
                        Exigence formelle, standard imposé, besoin approfondi
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-base leading-relaxed text-[#475569] md:text-lg">
                Pour visualiser la différence au niveau du document lui-même, la
                page{" "}
                <Link
                  href="/fr/bilan-carbone-pme/exemple/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  exemple de bilan carbone PME
                </Link>{" "}
                aide à voir ce qu’un tiers lit réellement dans un dossier.
              </p>
            </section>

            <section id="cost" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                6) Combien coûte un bilan carbone PME ?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Il n’existe pas un coût unique, car tout dépend du niveau attendu.
                Plus le besoin porte sur un inventaire complet, plus l’effort,
                le délai et le coût montent. À l’inverse, une réponse de
                screening vise avant tout un document clair et rapide à produire.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
                Le guide{" "}
                <Link
                  href="/fr/bilan-carbone-pme/cout/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  combien coûte un bilan carbone PME
                </Link>{" "}
                détaille ce qui fait varier le prix et pourquoi il faut comparer
                des niveaux de réponse, pas seulement des montants.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Quand un format simple suffit
                  </h3>
                  <ul className="mt-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569]">
                    <li>demande fournisseur ou onboarding ;</li>
                    <li>appel d’offres sans standard imposé ;</li>
                    <li>banque / assurance en lecture ESG ;</li>
                    <li>besoin d’un document archivable rapidement.</li>
                  </ul>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Quand il faut prévoir plus lourd
                  </h3>
                  <ul className="mt-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569]">
                    <li>standard explicitement imposé ;</li>
                    <li>périmètre détaillé demandé ;</li>
                    <li>preuves ou ventilation exigées ;</li>
                    <li>vérification tierce requise.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/fr/pricing/"
                  className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
                >
                  Voir le prix de la réponse screening →
                </Link>
              </div>
            </section>

            <section
              id="related-guides"
              className="scroll-mt-24"
            >
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                7) Guides associés pour aller plus loin
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Cette page pilier sert de point d’entrée. Les guides ci-dessous
                couvrent les intentions de recherche les plus proches du besoin
                réel d’une PME.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {relatedGuides.map((guide) => (
                  <div
                    key={guide.href}
                    className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-[#0B3A63]">
                      {guide.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                      {guide.text}
                    </p>
                    <div className="mt-5">
                      <Link
                        href={guide.href}
                        className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63]/14 bg-white px-4 py-2.5 text-sm font-semibold text-[#0B3A63] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white"
                      >
                        {guide.cta} →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 md:p-8">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Questions fréquentes liées
                </h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/fr/bilan-carbone-pme/obligation/"
                    className="rounded-full border border-[#0B3A63]/12 bg-white px-4 py-2 text-xs font-medium text-[#0B3A63] shadow-sm md:text-sm"
                  >
                    bilan carbone PME obligatoire
                  </Link>
                  <Link
                    href="/fr/bilan-carbone-pme/cout/"
                    className="rounded-full border border-[#0B3A63]/12 bg-white px-4 py-2 text-xs font-medium text-[#0B3A63] shadow-sm md:text-sm"
                  >
                    combien coûte un bilan carbone PME
                  </Link>
                  <Link
                    href="/fr/bilan-carbone-pme/exemple/"
                    className="rounded-full border border-[#0B3A63]/12 bg-white px-4 py-2 text-xs font-medium text-[#0B3A63] shadow-sm md:text-sm"
                  >
                    exemple de bilan carbone PME
                  </Link>
                  <Link
                    href="/fr/bilan-carbone-appel-offres/"
                    className="rounded-full border border-[#0B3A63]/12 bg-white px-4 py-2 text-xs font-medium text-[#0B3A63] shadow-sm md:text-sm"
                  >
                    bilan carbone appel d’offres
                  </Link>
                  <Link
                    href="/fr/bilan-carbone-fournisseur/"
                    className="rounded-full border border-[#0B3A63]/12 bg-white px-4 py-2 text-xs font-medium text-[#0B3A63] shadow-sm md:text-sm"
                  >
                    bilan carbone fournisseur
                  </Link>
                </div>
              </div>
            </section>

            <section className="scroll-mt-24">
              <div className="rounded-[30px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_60px_rgba(11,58,99,0.10)] md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Réponse screening
                </p>

                <h2 className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl">
                  Produire un document carbone clair, standardisé et vérifiable
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
                  Certif-Scope produit un document CO₂e indicatif spend-based à
                  partir des dépenses annuelles. Il est conçu pour répondre
                  proprement à une demande fournisseur, un appel d’offres, une
                  banque ou une assurance, sans présenter ce document comme un
                  audit ou un inventaire complet.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/fr/generate/"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100"
                  >
                    Obtenir un document carbone
                  </Link>

                  <Link
                    href="/fr/bilan-carbone-appel-offres/"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    Cas appel d’offres
                  </Link>

                  <Link
                    href="/fr/bilan-carbone-fournisseur/"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    Cas fournisseur
                  </Link>
                </div>
              </div>
            </section>

            <section id="faq" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                FAQ — Bilan carbone PME
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

                <nav aria-label="Sommaire bilan carbone PME" className="mt-4">
                  <ol className="ml-5 list-decimal space-y-2 text-sm">
                    <TocItem href="#definition" label="Qu’est-ce qu’un bilan carbone PME ?" />
                    <TocItem href="#obligation" label="Est-ce obligatoire ?" />
                    <TocItem href="#why-asked" label="Pourquoi on vous le demande" />
                    <TocItem href="#expected" label="Que fournir concrètement" />
                    <TocItem href="#difference" label="Document indicatif vs bilan complet" />
                    <TocItem href="#cost" label="Combien ça coûte" />
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
                  Cette page cible les demandes “bilan carbone PME” liées au
                  screening : fournisseur, appel d’offres, banque, assurance,
                  questionnaire ESG. Le document présenté ici ne remplace pas un
                  audit ni un inventaire complet.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/fr/product/compliance/"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63] px-4 py-2 text-sm font-medium text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
                  >
                    Conformité
                  </Link>
                  <Link
                    href="/fr/product/methodology/"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/14 px-4 py-2 text-sm font-medium text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
                  >
                    Méthodologie
                  </Link>
                </div>
              </div>

              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Guides liés au cluster
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#475569]">
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
                      href="/fr/bilan-carbone-pme/exemple/"
                    >
                      Exemple de bilan carbone PME
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                      href="/fr/bilan-carbone-appel-offres/"
                    >
                      Bilan carbone PME pour appel d’offres
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
