// PATH: src/app/fr/bilan-carbone-fournisseur/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — PAGE FR
   Objectif : capter "bilan carbone fournisseur"
====================================================== */

export const metadata: Metadata = {
  title:
    "Bilan carbone fournisseur : quoi fournir pour être référencé sans audit complet | Certif-Scope",
  description:
    "Bilan carbone fournisseur : comprendre ce que les acheteurs attendent réellement, quoi fournir sans audit complet, et comment produire un document CO₂e indicatif, standardisé et vérifiable.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/bilan-carbone-fournisseur/",
    languages: {
      fr: "https://www.certif-scope.com/fr/bilan-carbone-fournisseur/",
    },
  },
  openGraph: {
    title:
      "Bilan carbone fournisseur : quoi fournir pour être référencé sans audit complet",
    description:
      "Guide PME : répondre aux exigences CO₂e des acheteurs avec un document de screening clair, standardisé et vérifiable.",
    url: "https://www.certif-scope.com/fr/bilan-carbone-fournisseur/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function BilanCarboneFournisseurPageFR() {
  const pageUrl = "https://www.certif-scope.com/fr/bilan-carbone-fournisseur/";

  const faq = [
    {
      q: "Pourquoi un acheteur demande-t-il un bilan carbone fournisseur ?",
      a: "Dans la majorité des cas, l’acheteur cherche un document de screening ESG qu’il peut archiver, comparer et relire rapidement dans le dossier fournisseur. Ce n’est pas forcément une demande d’audit complet.",
    },
    {
      q: "Faut-il un audit carbone complet pour être référencé comme fournisseur ?",
      a: "Non, pas automatiquement. Si le dossier n’impose pas de standard précis, de périmètre détaillé, de preuves techniques ou de vérification tierce, un document CO₂e indicatif peut souvent suffire.",
    },
    {
      q: "Que faut-il mettre dans un document carbone fournisseur ?",
      a: "Un résultat CO₂e agrégé, l’année couverte, la méthode déclarée, les limites explicites, un format PDF stable et une référence ou vérification claire.",
    },
    {
      q: "Pourquoi une attestation indicative peut-elle être suffisante ?",
      a: "Parce que beaucoup de workflows achats attendent surtout un document comparable et réutilisable. L’objectif est souvent documentaire avant d’être technique.",
    },
    {
      q: "Que risque une PME si elle n’a aucun document à fournir ?",
      a: "L’absence de document peut bloquer un référencement, ralentir un renouvellement ou multiplier les allers-retours avec les équipes achats.",
    },
    {
      q: "Le document Certif-Scope remplace-t-il un inventaire complet ?",
      a: "Non. Certif-Scope produit un document CO₂e indicatif spend-based destiné au screening fournisseur. Il ne remplace ni un audit, ni un inventaire complet, ni un reporting CSRD/ESRS.",
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
        name: "Bilan carbone fournisseur",
        item: pageUrl,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bilan carbone fournisseur",
    url: pageUrl,
    description:
      "Guide PME : quoi fournir lorsqu’un acheteur demande un bilan carbone fournisseur, et quand un document CO₂e indicatif suffit.",
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
    name: "Comment répondre à une demande de bilan carbone fournisseur",
    description:
      "Méthode simple pour comprendre ce qu’un acheteur attend réellement et fournir un document CO₂e adapté au référencement fournisseur.",
    totalTime: "PT10M",
    step: [
      {
        "@type": "HowToStep",
        name: "Lire le niveau réellement demandé",
        text: "Vérifiez si l’acheteur demande un simple document de screening ou un cadre plus formel avec standard, preuves ou contrôle tiers.",
      },
      {
        "@type": "HowToStep",
        name: "Préparer un document clair",
        text: "Rassemblez un résultat CO₂e agrégé, l’année couverte, la méthode déclarée et les limites du document.",
      },
      {
        "@type": "HowToStep",
        name: "Fournir un PDF stable et vérifiable",
        text: "Transmettez un document identifiable, lisible et archivable, adapté aux workflows achats et fournisseurs.",
      },
    ],
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
      id="bilan-carbone-fournisseur"
      data-section="bilan-carbone-fournisseur"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />

      <div id="top" />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-12 md:px-8 md:pt-16">
        <header className="mx-auto max-w-5xl">
          <p className="inline-flex items-center gap-3 rounded-full border border-[#0B3A63]/10 bg-white/92 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B3A63]/75 shadow-sm backdrop-blur md:text-xs">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#1FB6C1] shadow-[0_0_0_4px_rgba(31,182,193,0.14)]" />
            Fournisseurs • Screening ESG • Référencement • Document CO₂e
          </p>

          <h1 className="mt-6 max-w-5xl text-3xl font-extrabold leading-[0.96] tracking-[-0.05em] text-[#0B3A63] md:text-5xl">
            Bilan carbone fournisseur :
            <br />
            <span className="relative inline-block">
              quoi fournir
              <span className="absolute bottom-1 left-0 h-3 w-full rounded-full bg-[#1FB6C1]/18" />
            </span>{" "}
            pour être référencé sans audit complet
          </h1>

          <p className="mt-4 text-sm font-medium text-[#0B3A63]/75 md:text-base">
            Référencement fournisseur, renouvellement contractuel, screening ESG
            et document réellement attendu par les acheteurs.
          </p>

          <div className="mt-6 max-w-4xl space-y-4">
            <p className="text-lg leading-relaxed text-[#475569]">
              <strong className="text-[#0B3A63]">
                De nombreuses PME découvrent l’exigence “bilan carbone
                fournisseur” lors d’un référencement ou d’un renouvellement
                contractuel.
              </strong>{" "}
              Dans la majorité des cas, l’acheteur attend un document de
              screening ESG clair, archivable et comparable, pas un audit
              carbone complet.
            </p>

            <p className="text-base leading-relaxed text-[#64748B] md:text-lg">
              La vraie question n’est donc pas seulement{" "}
              <strong className="text-[#0B3A63]">“faut-il répondre ?”</strong>,
              mais surtout{" "}
              <strong className="text-[#0B3A63]">
                “quel document faut-il envoyer pour éviter de bloquer le
                référencement fournisseur ?”
              </strong>
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Cas fréquent
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Un acheteur ou une plateforme fournisseur demande une preuve CO₂e
                pour compléter un dossier ou valider un référencement.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Point clé
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Beaucoup de demandes sont documentaires et comparatives, pas des
                audits complets avec exigences techniques lourdes.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Risque
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                L’absence de document bloque souvent davantage qu’un résultat
                indicatif bien cadré et clairement limité.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 md:p-8">
            <h2 className="text-xl font-extrabold leading-tight text-[#0B3A63] md:text-2xl">
              Réponse rapide
            </h2>

            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                résultat CO₂e agrégé indicatif
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                année couverte et date d’émission
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                méthode déclarée
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                limites explicites et portée du document
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                PDF stable et identifiable
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                référence ou vérification possible
              </li>
            </ul>

            <p className="mt-5 text-sm leading-relaxed text-[#64748B] md:text-base">
              Pour comparer avec un besoin plus large, les pages{" "}
              <Link
                href="/fr/bilan-carbone-pme/"
                className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
              >
                bilan carbone PME
              </Link>
              ,{" "}
              <Link
                href="/fr/bilan-carbone-pme/obligation/"
                className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
              >
                bilan carbone PME obligatoire
              </Link>
              ,{" "}
              <Link
                href="/fr/bilan-carbone-pme/cout/"
                className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
              >
                combien coûte un bilan carbone PME
              </Link>{" "}
              et{" "}
              <Link
                href="/fr/bilan-carbone-pme/exemple/"
                className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
              >
                exemple de bilan carbone PME
              </Link>{" "}
              permettent d’affiner le niveau de réponse attendu.
            </p>
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
              href="/fr/bilan-carbone-appel-offres/"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#0B3A63]/14 bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white"
            >
              Cas appel d’offres
            </Link>
          </div>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="space-y-14 lg:col-span-8">
            <section className="lg:hidden">
              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Sommaire
                </p>
                <nav
                  aria-label="Sommaire bilan carbone fournisseur (mobile)"
                  className="mt-4"
                >
                  <ol className="ml-5 list-decimal space-y-2 text-sm">
                    <TocItem
                      href="#why-buyers-ask"
                      label="Pourquoi les acheteurs le demandent"
                    />
                    <TocItem
                      href="#what-is-expected"
                      label="Ce qui est réellement attendu"
                    />
                    <TocItem
                      href="#mistakes"
                      label="Erreurs fréquentes des PME"
                    />
                    <TocItem
                      href="#rational-response"
                      label="La réponse rationnelle"
                    />
                    <TocItem
                      href="#method"
                      label="Méthode spend-based"
                    />
                    <TocItem
                      href="#verification"
                      label="Vérification indépendante"
                    />
                    <TocItem
                      href="#faq"
                      label="Questions fréquentes"
                    />
                  </ol>
                </nav>
              </div>
            </section>

            <section id="why-buyers-ask" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                1) Pourquoi les acheteurs demandent un bilan carbone fournisseur
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Les grandes entreprises structurent leurs politiques achats
                responsables, gestion du risque et documentation ESG. La collecte
                d’informations CO₂e s’inscrit dans cette logique de dossier
                fournisseur.
              </p>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-8">
                <ul className="ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>référencement fournisseur ;</li>
                  <li>renouvellement contractuel ;</li>
                  <li>politique ESG interne ;</li>
                  <li>exigences de la chaîne de valeur ;</li>
                  <li>standardisation documentaire côté achats.</li>
                </ul>

                <div className="mt-6 rounded-2xl border border-[#1FB6C1]/18 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-5">
                  <p className="text-sm leading-relaxed text-[#475569] md:text-base">
                    <strong className="text-[#0B3A63]">Dans la majorité des cas :</strong>{" "}
                    l’objectif est comparatif et documentaire. L’acheteur veut
                    archiver une preuve CO₂e au bon niveau.
                  </p>
                </div>
              </div>
            </section>

            <section id="what-is-expected" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                2) Ce qui est réellement attendu dans un workflow fournisseur
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Dans beaucoup de cas, l’acheteur n’attend pas un document
                technique maximal. Il attend surtout un document lisible,
                archivable, comparable et réutilisable.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Check-list screening
                  </h3>
                  <ul className="mt-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569]">
                    <li>résultat CO₂e agrégé indicatif ;</li>
                    <li>année couverte ;</li>
                    <li>méthode déclarée ;</li>
                    <li>PDF identifiable ;</li>
                    <li>limites explicites ;</li>
                    <li>vérification possible.</li>
                  </ul>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Ce que cela évite
                  </h3>
                  <ul className="mt-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569]">
                    <li>allers-retours multiples avec les achats ;</li>
                    <li>dossier incomplet ;</li>
                    <li>tableau informel peu exploitable ;</li>
                    <li>ambiguïté sur la portée du résultat.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <p className="text-sm leading-relaxed text-[#475569] md:text-base">
                  <strong className="text-[#0B3A63]">
                    L’absence de document
                  </strong>{" "}
                  bloque souvent davantage qu’un résultat indicatif imparfait mais
                  clairement cadré.
                </p>
              </div>
            </section>

            <section id="mistakes" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                3) Erreurs fréquentes des PME
              </h2>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Erreur n°1
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Lancer un audit complet inutilement alors que l’acheteur
                    attend surtout un document de screening.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Erreur n°2
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Promettre une ventilation exhaustive Scopes 1, 2 et 3 sans
                    capacité réelle à la produire.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Erreur n°3
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Envoyer un tableau non formalisé, sans méthode, sans date et
                    sans limites explicites.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Erreur n°4
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Mélanger attestation indicative, audit réglementaire et
                    inventaire complet dans le même document.
                  </p>
                </div>
              </div>
            </section>

            <section id="rational-response" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                4) Screening fournisseur : la réponse rationnelle
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Une attestation CO₂e indicative spend-based permet souvent une
                réponse rapide, standardisée et réutilisable auprès de plusieurs
                clients. C’est une logique proche de celle détaillée sur la page{" "}
                <Link
                  href="/fr/bilan-carbone-appel-offres/"
                  className="underline underline-offset-4 text-[#0B3A63] transition-colors hover:text-[#1FB6C1]"
                >
                  bilan carbone appel d’offres
                </Link>{" "}
                lorsque la demande reste générique.
              </p>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 md:p-8">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Pourquoi ce format fonctionne
                </h3>
                <ul className="mt-5 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>réponse rapide ;</li>
                  <li>format réutilisable ;</li>
                  <li>document lisible pour les achats ;</li>
                  <li>méthode annoncée ;</li>
                  <li>limites visibles ;</li>
                  <li>vérification possible.</li>
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/fr/generate/"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
                >
                  Générer une attestation
                </Link>

                <Link
                  href="/fr/pricing/"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#0B3A63]/14 bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white"
                >
                  Voir le prix
                </Link>
              </div>
            </section>

            <section id="method" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                5) Méthode spend-based : formule claire
              </h2>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-8">
                <div className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-5">
                  <p className="text-base leading-relaxed text-[#475569] md:text-lg">
                    <strong className="text-[#0B3A63]">CO₂e total</strong> = Σ
                    (dépenses € × facteur d’émission)
                  </p>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-[#64748B] md:text-base">
                  Cette approche est adaptée aux demandes de screening
                  documentaire. Le résultat reste indicatif, dépend des dépenses
                  déclarées et ne remplace pas un inventaire complet ou un audit.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/fr/product/methodology/"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63] px-4 py-2 text-sm font-medium text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
                  >
                    Voir la méthodologie
                  </Link>
                  <Link
                    href="/fr/bilan-carbone-pme/exemple/"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/14 px-4 py-2 text-sm font-medium text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
                  >
                    Voir un exemple
                  </Link>
                </div>
              </div>
            </section>

            <section id="verification" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                6) Vérification indépendante
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                L’attestation comporte un identifiant unique et une vérification
                publique, permettant à un tiers de contrôler l’intégrité du
                document sans compte utilisateur.
              </p>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 md:p-8">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Ce que cela apporte au dossier fournisseur
                </h3>
                <ul className="mt-5 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>document identifiable ;</li>
                  <li>réduction des doutes sur l’intégrité ;</li>
                  <li>archivage plus simple ;</li>
                  <li>lecture plus fluide par un tiers.</li>
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

            <section className="scroll-mt-24">
              <div className="rounded-[30px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_60px_rgba(11,58,99,0.10)] md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Réponse screening fournisseur
                </p>

                <h2 className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl">
                  Répondre à une demande “bilan carbone fournisseur” sans bloquer un contrat
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
                  Produisez une attestation CO₂e indicative spend-based,
                  standardisée et vérifiable, adaptée aux workflows procurement
                  lorsque la demande est du screening.
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

            <section id="faq" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                Questions fréquentes
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
                <nav
                  aria-label="Sommaire bilan carbone fournisseur"
                  className="mt-4"
                >
                  <ol className="ml-5 list-decimal space-y-2 text-sm">
                    <TocItem
                      href="#why-buyers-ask"
                      label="Pourquoi les acheteurs le demandent"
                    />
                    <TocItem
                      href="#what-is-expected"
                      label="Ce qui est réellement attendu"
                    />
                    <TocItem
                      href="#mistakes"
                      label="Erreurs fréquentes"
                    />
                    <TocItem
                      href="#rational-response"
                      label="La réponse rationnelle"
                    />
                    <TocItem
                      href="#method"
                      label="Méthode spend-based"
                    />
                    <TocItem
                      href="#verification"
                      label="Vérification indépendante"
                    />
                    <TocItem
                      href="#faq"
                      label="Questions fréquentes"
                    />
                  </ol>
                </nav>
              </div>

              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Rappel utile
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  Cette page traite le bilan carbone fournisseur sous un angle
                  pratique : comprendre ce que les achats demandent réellement,
                  et répondre avec un document au bon niveau.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/fr/bilan-carbone-pme/obligation/"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63] px-4 py-2 text-sm font-medium text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
                  >
                    Obligation
                  </Link>
                  <Link
                    href="/fr/bilan-carbone-pme/cout/"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/14 px-4 py-2 text-sm font-medium text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
                  >
                    Coût
                  </Link>
                </div>
              </div>

              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Cluster FR
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
                      Bilan carbone appel d’offres
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
                  <Link
                    href="/fr/bilan-carbone-pme/"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/14 px-4 py-2 text-sm font-medium text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
                  >
                    Page pilier
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
