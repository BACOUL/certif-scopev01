// PATH: src/app/fr/bilan-carbone-pme/exemple/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — CLUSTER FR
   Cible : "exemple bilan carbone PME"
====================================================== */

export const metadata: Metadata = {
  title:
    "Exemple de bilan carbone PME : à quoi ressemble un document utilisable ? | Certif-Scope",
  description:
    "Exemple de bilan carbone PME : structure d’un document CO₂e utilisable dans un dossier client, fournisseur, banque ou appel d’offres, et différence avec un inventaire complet.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/bilan-carbone-pme/exemple/",
    languages: {
      fr: "https://www.certif-scope.com/fr/bilan-carbone-pme/exemple/",
    },
  },
  openGraph: {
    title:
      "Exemple de bilan carbone PME : à quoi ressemble un document utilisable ?",
    description:
      "Voir à quoi ressemble un exemple de bilan carbone PME, ce qu’un document doit contenir, et dans quels cas un format simple suffit pour répondre à une demande.",
    url: "https://www.certif-scope.com/fr/bilan-carbone-pme/exemple/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function BilanCarbonePMEExemplePageFR() {
  const pageUrl = "https://www.certif-scope.com/fr/bilan-carbone-pme/exemple/";

  const faq = [
    {
      q: "À quoi ressemble un exemple de bilan carbone PME ?",
      a: "Dans beaucoup de cas PME, il s’agit d’un document CO₂e indicatif avec un résultat agrégé, l’année couverte, la méthode déclarée, les limites explicites et un format PDF stable. Ce n’est pas forcément un inventaire complet détaillé.",
    },
    {
      q: "Un exemple de bilan carbone PME doit-il forcément contenir les scopes 1, 2 et 3 détaillés ?",
      a: "Non. Si la demande relève du screening, un résultat agrégé avec méthode et limites peut suffire. Une ventilation détaillée par scopes correspond à une logique d’inventaire plus complète.",
    },
    {
      q: "Que regarde un client dans un exemple de document carbone PME ?",
      a: "Il regarde surtout si le document est lisible, daté, cohérent, archivable, et s’il indique clairement la méthode utilisée et les limites du résultat.",
    },
    {
      q: "Pourquoi chercher un exemple avant d’acheter ou de produire un document ?",
      a: "Parce qu’une PME veut généralement vérifier le niveau de détail attendu. Voir un exemple permet de comprendre si un format simple suffit ou si une démarche beaucoup plus lourde est nécessaire.",
    },
    {
      q: "Un exemple de bilan carbone PME est-il la même chose qu’un modèle PDF ?",
      a: "Non. Un exemple montre à quoi peut ressembler un document utilisable ; un modèle PDF est un format type ou un gabarit plus directement réutilisable.",
    },
    {
      q: "Que faut-il éviter dans un exemple de document carbone PME ?",
      a: "Il faut éviter l’ambiguïté : ne pas faire passer un document de screening pour un audit complet, ne pas masquer les limites, et ne pas laisser croire à une portée réglementaire qu’il n’a pas.",
    },
    {
      q: "Dans quel cas un exemple simple est-il suffisant pour décider ?",
      a: "Quand l’objectif est de répondre à un client, un référencement fournisseur, une banque, une assurance ou un appel d’offres sans exigence méthodologique détaillée.",
    },
    {
      q: "Le document Certif-Scope ressemble-t-il à ce type d’exemple ?",
      a: "Oui, dans le sens où Certif-Scope vise un document CO₂e indicatif, clair, standardisé, vérifiable et réutilisable dans un dossier. Il ne remplace pas un inventaire complet ni un audit.",
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
        name: "Exemple",
        item: pageUrl,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Exemple de bilan carbone PME",
    url: pageUrl,
    description:
      "Exemple de bilan carbone PME : voir à quoi ressemble un document utilisable, ce qu’il doit contenir et ce qui le distingue d’un inventaire complet.",
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
    name: "Comment lire un exemple de bilan carbone PME",
    description:
      "Méthode simple pour comprendre ce qu’un exemple de document doit contenir et à quel usage il correspond.",
    totalTime: "PT10M",
    step: [
      {
        "@type": "HowToStep",
        name: "Vérifier l’objectif du document",
        text: "Déterminez si l’exemple correspond à un besoin de screening ou à un inventaire complet.",
      },
      {
        "@type": "HowToStep",
        name: "Identifier les éléments essentiels",
        text: "Résultat CO₂e, année couverte, méthode, limites, format stable et vérification éventuelle.",
      },
      {
        "@type": "HowToStep",
        name: "Comparer avec votre besoin réel",
        text: "Assurez-vous que le niveau de détail correspond à ce que votre client, votre banque ou votre appel d’offres attend réellement.",
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
      id="bilan-carbone-pme-exemple"
      data-section="bilan-carbone-pme-exemple"
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
            Cluster FR • Exemple • PME • Document CO₂e
          </p>

          <h1 className="mt-6 max-w-5xl text-3xl font-extrabold leading-[0.96] tracking-[-0.05em] text-[#0B3A63] md:text-5xl">
            Exemple de bilan carbone PME :
            <br />
            <span className="relative inline-block">
              à quoi ressemble
              <span className="absolute bottom-1 left-0 h-3 w-full rounded-full bg-[#1FB6C1]/18" />
            </span>{" "}
            un document utilisable ?
          </h1>

          <p className="mt-4 text-sm font-medium text-[#0B3A63]/75 md:text-base">
            Exemple de document CO₂e, structure attendue, lecture rapide par un
            client, une banque, un assureur ou un dossier fournisseur.
          </p>

          <div className="mt-6 max-w-4xl space-y-4">
            <p className="text-lg leading-relaxed text-[#475569]">
              <strong className="text-[#0B3A63]">
                Dans beaucoup de cas PME, un “bilan carbone” demandé ne ressemble
                pas à un audit complet.
              </strong>{" "}
              Il s’agit souvent d’un document CO₂e lisible, daté, réutilisable et
              archivable dans un dossier client, fournisseur, banque, assurance
              ou appel d’offres.
            </p>

            <p className="text-base leading-relaxed text-[#64748B] md:text-lg">
              Cette page montre à quoi ressemble un exemple de document utile,
              ce qu’il doit contenir, et ce qui le distingue d’un inventaire
              complet.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Ce que cette page montre
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                La structure d’un document carbone PME utilisable dans un dossier,
                sans le confondre avec un inventaire complet.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Utilité
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Vérifier le niveau de détail attendu avant de payer ou de lancer
                une démarche plus lourde.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Point clé
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Un bon exemple doit être clair, daté, limité et cohérent avec le
                besoin réel du dossier.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 md:p-8">
            <h2 className="text-xl font-extrabold leading-tight text-[#0B3A63] md:text-2xl">
              Réponse rapide
            </h2>

            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                résultat CO₂e agrégé
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                année couverte
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                méthode déclarée
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                limites visibles
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                format PDF stable
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                document compréhensible rapidement
              </li>
            </ul>
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
              href="/fr/bilan-carbone-pme/"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#0B3A63]/14 bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white"
            >
              Voir la page pilier
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
                <nav aria-label="Sommaire exemple bilan carbone PME (mobile)" className="mt-4">
                  <ol className="ml-5 list-decimal space-y-2 text-sm">
                    <TocItem href="#what-it-looks-like" label="À quoi ressemble l’exemple" />
                    <TocItem href="#essential-parts" label="Éléments indispensables" />
                    <TocItem href="#not-audit" label="Ce que l’exemple n’est pas" />
                    <TocItem href="#sample-structure" label="Structure type" />
                    <TocItem href="#case-example" label="Exemple concret" />
                    <TocItem href="#mistakes" label="Erreurs fréquentes" />
                    <TocItem href="#faq" label="FAQ" />
                  </ol>
                </nav>
              </div>
            </section>

            <section id="what-it-looks-like" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                1) À quoi ressemble un exemple de bilan carbone PME
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Dans un contexte PME, un exemple de bilan carbone utile ressemble
                souvent à un <strong className="text-[#0B3A63]">document de screening</strong> :
                un document structuré, lisible, avec un résultat CO₂e, une année
                couverte, une méthode annoncée et des limites explicites.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
                L’objectif de cet exemple n’est pas de reproduire un inventaire
                complet, mais de montrer ce qu’un tiers attend souvent dans un
                dossier : un document{" "}
                <strong className="text-[#0B3A63]">compréhensible rapidement</strong>{" "}
                et <strong className="text-[#0B3A63]">archivable</strong>.
              </p>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-8">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Ce que l’on reconnaît dans un bon exemple
                </h3>
                <ul className="mt-5 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>titre clair ;</li>
                  <li>année et date d’émission ;</li>
                  <li>résultat CO₂e lisible ;</li>
                  <li>méthode indiquée ;</li>
                  <li>périmètre et limites visibles ;</li>
                  <li>format stable, partageable et réutilisable.</li>
                </ul>
              </div>
            </section>

            <section id="essential-parts" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                2) Les éléments indispensables dans un exemple de document carbone PME
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Un exemple pertinent doit montrer les bons éléments. C’est cela
                qui permet à une PME de savoir si un format simple peut suffire.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Contenu essentiel
                  </h3>
                  <ul className="mt-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569]">
                    <li>résultat CO₂e agrégé ;</li>
                    <li>année couverte ;</li>
                    <li>entité ou organisation concernée ;</li>
                    <li>méthode déclarée ;</li>
                    <li>date d’émission ;</li>
                    <li>référence ou identifiant.</li>
                  </ul>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Transparence minimale
                  </h3>
                  <ul className="mt-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569]">
                    <li>document indicatif ;</li>
                    <li>non audit ;</li>
                    <li>non inventaire complet ;</li>
                    <li>limites méthodologiques ;</li>
                    <li>portée du document clairement annoncée.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="not-audit" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                3) Ce que cet exemple n’est pas
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Un exemple de document carbone PME n’est pas forcément un audit,
                ni un inventaire détaillé ventilé de manière exhaustive. C’est un
                point important pour éviter la confusion.
              </p>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 md:p-8">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  À ne pas confondre
                </h3>
                <ul className="mt-5 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>document de screening ;</li>
                  <li>inventaire complet des émissions ;</li>
                  <li>audit carbone ;</li>
                  <li>reporting réglementaire ;</li>
                  <li>document technique très détaillé.</li>
                </ul>
              </div>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <p className="text-sm leading-relaxed text-[#475569] md:text-base">
                  Dans beaucoup de cas PME, le document attendu sert surtout à
                  <strong className="text-[#0B3A63]"> compléter un dossier</strong>,
                  pas à démontrer un niveau d’analyse technique maximal.
                </p>
              </div>
            </section>

            <section id="sample-structure" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                4) Structure type d’un exemple utilisable
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Voici à quoi peut ressembler la structure logique d’un document
                carbone PME utilisable.
              </p>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-8">
                <ol className="ml-6 list-decimal space-y-3 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>
                    <strong>Titre du document</strong> — document CO₂e indicatif,
                    attestation, résultat carbone.
                  </li>
                  <li>
                    <strong>Identification minimale</strong> — nom de l’entité,
                    année couverte.
                  </li>
                  <li>
                    <strong>Résultat CO₂e</strong> — valeur agrégée lisible.
                  </li>
                  <li>
                    <strong>Méthode</strong> — principe spend-based ou méthode déclarée.
                  </li>
                  <li>
                    <strong>Limites</strong> — non audit, non inventaire complet,
                    non CSRD/ESRS.
                  </li>
                  <li>
                    <strong>Vérification / référence</strong> — identifiant ou contrôle associé.
                  </li>
                </ol>

                <div className="mt-6 rounded-2xl border border-[#1FB6C1]/18 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-5">
                  <p className="text-sm leading-relaxed text-[#475569] md:text-base">
                    <strong className="text-[#0B3A63]">Principe de lecture :</strong>{" "}
                    un bon exemple ne doit pas impressionner par sa complexité,
                    mais rassurer par sa clarté.
                  </p>
                </div>
              </div>
            </section>

            <section id="case-example" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                5) Exemple concret
              </h2>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-8">
                <p className="text-base leading-relaxed text-[#475569] md:text-lg">
                  Une PME de services reçoit une demande client : joindre un bilan
                  carbone au dossier fournisseur.
                </p>

                <ul className="mt-5 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>la PME cherche un exemple pour comprendre le niveau attendu ;</li>
                  <li>elle constate qu’un document simple, daté et structuré peut suffire ;</li>
                  <li>elle n’a pas besoin d’un inventaire technique détaillé pour ce dossier précis ;</li>
                  <li>l’exemple sert de repère pour éviter de surdimensionner la réponse.</li>
                </ul>
              </div>
            </section>

            <section id="mistakes" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                6) Erreurs fréquentes
              </h2>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Erreur n°1
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Chercher un exemple très technique alors que le dossier attend
                    seulement un document lisible.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Erreur n°2
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Utiliser un exemple ambigu qui laisse croire à un audit ou à
                    un inventaire complet.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Erreur n°3
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Oublier les limites, la méthode ou l’année couverte.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Erreur n°4
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Croire qu’un exemple doit être complexe pour être crédible.
                  </p>
                </div>
              </div>
            </section>

            <section className="scroll-mt-24">
              <div className="rounded-[30px] border border-[#0B3A63]/10 bg-[#0B3A63] p-8 text-white shadow-[0_25px_60px_rgba(11,58,99,0.10)] md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Réponse screening
                </p>

                <h2 className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl">
                  Voir un exemple est utile. Répondre proprement est encore mieux.
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
                  Certif-Scope permet de produire un document CO₂e indicatif,
                  clair, standardisé, vérifiable et utilisable dans un dossier
                  client, fournisseur, banque ou appel d’offres.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/fr/generate/"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100"
                  >
                    Obtenir un document carbone
                  </Link>
                  <Link
                    href="/fr/pricing/"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    Voir le prix
                  </Link>
                  <Link
                    href="/fr/verify"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    Vérifier un document
                  </Link>
                </div>
              </div>
            </section>

            <section id="faq" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                FAQ — Exemple de bilan carbone PME
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
                <nav aria-label="Sommaire exemple bilan carbone PME" className="mt-4">
                  <ol className="ml-5 list-decimal space-y-2 text-sm">
                    <TocItem href="#what-it-looks-like" label="À quoi ressemble l’exemple" />
                    <TocItem href="#essential-parts" label="Éléments indispensables" />
                    <TocItem href="#not-audit" label="Ce que l’exemple n’est pas" />
                    <TocItem href="#sample-structure" label="Structure type" />
                    <TocItem href="#case-example" label="Exemple concret" />
                    <TocItem href="#mistakes" label="Erreurs fréquentes" />
                    <TocItem href="#faq" label="FAQ" />
                  </ol>
                </nav>
              </div>

              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Rappel utile
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  Cette page montre un exemple de document carbone PME sous un
                  angle pratique : voir à quoi ressemble un format utilisable,
                  sans le confondre avec un audit ou un inventaire complet.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/fr/generate/"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63] px-4 py-2 text-sm font-medium text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
                  >
                    Générer
                  </Link>
                  <Link
                    href="/fr/pricing/"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/14 px-4 py-2 text-sm font-medium text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
                  >
                    Prix
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
