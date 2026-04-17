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
        className="text-[#0B3A63] hover:underline underline-offset-4"
      >
        {label}
      </a>
    </li>
  );

  const FAQAnswer = ({ text }: { text: string }) => {
    const idx = text.indexOf(". ");
    const first = idx > 0 ? text.slice(0, idx + 1) : text;
    const rest = idx > 0 ? text.slice(idx + 2) : "";
    return (
      <p className="text-gray-700 leading-relaxed">
        <strong>{first}</strong>
        {rest ? ` ${rest}` : ""}
      </p>
    );
  };

  return (
    <section
      id="bilan-carbone-pme-exemple"
      data-section="bilan-carbone-pme-exemple"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
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

      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Cluster FR — Bilan carbone PME : exemple
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B3A63] mb-4 leading-tight tracking-tight">
          Exemple de bilan carbone PME : à quoi ressemble un document utilisable ?
        </h1>

        <div className="max-w-4xl space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>
              Dans beaucoup de cas PME, un “bilan carbone” demandé ne ressemble pas à un audit complet.
            </strong>
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Il s’agit souvent d’un <strong>document CO₂e lisible</strong>,
            daté, réutilisable et archivable dans un dossier client, fournisseur,
            banque, assurance ou appel d’offres.
          </p>

          <p className="text-base text-gray-600 leading-relaxed">
            Cette page montre à quoi ressemble un exemple de document utile, ce
            qu’il doit contenir, et ce qui le distingue d’un inventaire complet.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-6">
          <h2 className="text-lg font-semibold text-[#0B3A63] mb-3">
            Réponse rapide
          </h2>

          <ul className="list-disc ml-6 text-gray-700 space-y-2 leading-relaxed">
            <li>résultat CO₂e agrégé ;</li>
            <li>année couverte ;</li>
            <li>méthode déclarée ;</li>
            <li>limites visibles ;</li>
            <li>format PDF stable ;</li>
            <li>document compréhensible rapidement.</li>
          </ul>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/fr/generate/"
            className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#0B3A63] text-white hover:bg-[#0B3A63]/90 transition-colors font-semibold"
          >
            Obtenir un document carbone →
          </Link>

          <Link
            href="/fr/pricing/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Voir le prix
          </Link>

          <Link
            href="/fr/bilan-carbone-pme/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Voir la page pilier
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Ce que cette page montre
            </p>
            <p className="text-gray-700 leading-relaxed">
              La structure d’un document carbone PME utilisable dans un dossier,
              sans le confondre avec un inventaire complet.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Utilité
            </p>
            <p className="text-gray-700 leading-relaxed">
              Vérifier le niveau de détail attendu avant de payer ou de lancer une
              démarche plus lourde.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Point clé
            </p>
            <p className="text-gray-700 leading-relaxed">
              Un bon exemple doit être clair, daté, limité et cohérent avec le
              besoin réel du dossier.
            </p>
          </div>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-14">
          <section className="lg:hidden">
            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">
                Sommaire
              </p>
              <nav aria-label="Sommaire exemple bilan carbone PME (mobile)">
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <TocItem href="#what-it-looks-like" label="À quoi ressemble l’exemple" />
                  <TocItem href="#essential-parts" label="Éléments indispensables" />
                  <TocItem href="#not-audit" label="Ce que l’exemple n’est pas" />
                  <TocItem href="#sample-structure" label="Structure type" />
                  <TocItem href="#case-example" label="Exemple concret" />
                  <TocItem href="#mistakes" label="Erreurs fréquentes" />
                  <TocItem href="#links" label="Pages utiles" />
                  <TocItem href="#faq" label="FAQ" />
                </ol>
              </nav>
            </div>
          </section>

          <section id="what-it-looks-like" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              1) À quoi ressemble un exemple de bilan carbone PME
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Dans un contexte PME, un exemple de bilan carbone utile ressemble
              souvent à un <strong>document de screening</strong> :
              un document structuré, lisible, avec un résultat CO₂e, une année
              couverte, une méthode annoncée et des limites explicites.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              L’objectif de cet exemple n’est pas de reproduire un inventaire
              complet, mais de montrer ce qu’un tiers attend souvent dans un
              dossier : un document <strong>compréhensible rapidement</strong> et
              <strong> archivable</strong>.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Ce que l’on reconnaît dans un bon exemple
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
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
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2) Les éléments indispensables dans un exemple de document carbone PME
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Un exemple pertinent doit montrer les bons éléments. C’est cela qui
              permet à une PME de savoir si un format simple peut suffire.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Contenu essentiel
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>résultat CO₂e agrégé ;</li>
                  <li>année couverte ;</li>
                  <li>entité ou organisation concernée ;</li>
                  <li>méthode déclarée ;</li>
                  <li>date d’émission ;</li>
                  <li>référence ou identifiant.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Transparence minimale
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
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
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3) Ce que cet exemple n’est pas
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Un exemple de document carbone PME n’est pas forcément un audit,
              ni un inventaire détaillé ventilé de manière exhaustive. C’est un
              point important pour éviter la confusion.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                À ne pas confondre
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>document de screening ;</li>
                <li>inventaire complet des émissions ;</li>
                <li>audit carbone ;</li>
                <li>reporting réglementaire ;</li>
                <li>document technique très détaillé.</li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-gray-700 leading-relaxed">
                Dans beaucoup de cas PME, le document attendu sert surtout à
                <strong> compléter un dossier</strong>, pas à démontrer un niveau
                d’analyse technique maximal.
              </p>
            </div>
          </section>

          <section id="sample-structure" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4) Structure type d’un exemple utilisable
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Voici à quoi peut ressembler la structure logique d’un document
              carbone PME utilisable.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <ol className="list-decimal ml-6 text-gray-700 space-y-3">
                <li>
                  <strong>Titre du document</strong> — document CO₂e indicatif / attestation / résultat carbone.
                </li>
                <li>
                  <strong>Identification minimale</strong> — nom de l’entité, année couverte.
                </li>
                <li>
                  <strong>Résultat CO₂e</strong> — valeur agrégée lisible.
                </li>
                <li>
                  <strong>Méthode</strong> — principe spend-based ou méthode déclarée.
                </li>
                <li>
                  <strong>Limites</strong> — non audit, non inventaire complet, non CSRD/ESRS.
                </li>
                <li>
                  <strong>Vérification / référence</strong> — identifiant ou contrôle associé.
                </li>
              </ol>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-[#0B3A63] p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">
                Principe de lecture
              </h3>
              <p className="text-white/90 leading-relaxed">
                Un bon exemple ne doit pas impressionner par sa complexité, mais
                rassurer par sa clarté.
              </p>
            </div>
          </section>

          <section id="case-example" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5) Exemple concret
            </h2>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Une PME de services reçoit une demande client : joindre un bilan
                carbone au dossier fournisseur.
              </p>

              <ul className="list-disc ml-6 text-gray-700 space-y-2 leading-relaxed">
                <li>la PME cherche un exemple pour comprendre le niveau attendu ;</li>
                <li>elle constate qu’un document simple, daté et structuré peut suffire ;</li>
                <li>elle n’a pas besoin d’un inventaire technique détaillé pour ce dossier précis ;</li>
                <li>l’exemple sert de repère pour éviter de surdimensionner la réponse.</li>
              </ul>
            </div>
          </section>

          <section id="mistakes" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              6) Erreurs fréquentes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Erreur n°1
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Chercher un exemple très technique alors que le dossier attend
                  seulement un document lisible.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Erreur n°2
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Utiliser un exemple ambigu qui laisse croire à un audit ou à un
                  inventaire complet.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Erreur n°3
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Oublier les limites, la méthode ou l’année couverte.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Erreur n°4
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Croire qu’un exemple doit être complexe pour être crédible.
                </p>
              </div>
            </div>
          </section>

          <section id="links" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              7) Pages utiles pour aller plus loin
            </h2>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <ul className="space-y-3 text-gray-700">
                <li>
                  <Link
                    className="underline text-[#0B3A63]"
                    href="/fr/bilan-carbone-pme/"
                  >
                    Bilan carbone PME : page pilier →
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline text-[#0B3A63]"
                    href="/fr/bilan-carbone-pme/obligation/"
                  >
                    Bilan carbone PME obligatoire →
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline text-[#0B3A63]"
                    href="/fr/bilan-carbone-pme/cout/"
                  >
                    Combien coûte un bilan carbone PME ? →
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline text-[#0B3A63]"
                    href="/fr/pricing/"
                  >
                    Prix →
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <section id="cta" className="pt-2 scroll-mt-24">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Voir un exemple est utile. Répondre proprement est encore mieux.
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Certif-Scope permet de produire un document CO₂e indicatif,
                clair, standardisé, vérifiable et utilisable dans un dossier
                client, fournisseur, banque ou appel d’offres.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/fr/generate/"
                  className="inline-block text-sm px-5 py-2.5 rounded-md bg-white text-[#0B3A63] hover:bg-gray-100 transition-colors font-semibold"
                >
                  Obtenir un document carbone
                </Link>
                <Link
                  href="/fr/pricing/"
                  className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
                >
                  Voir le prix
                </Link>
                <Link
                  href="/verify"
                  className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
                >
                  Vérifier un document
                </Link>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/fr/bilan-carbone-pme/"
                className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
              >
                Revenir à la page pilier
              </Link>
              <a
                href="#top"
                className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Haut de page
              </a>
            </div>
          </section>

          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              FAQ — Exemple de bilan carbone PME
            </h2>

            <div className="space-y-6">
              {faq.map((item, idx) => (
                <div
                  key={`${idx}-${item.q}`}
                  className="rounded-2xl border border-gray-200 bg-white p-6"
                >
                  <h3 className="font-semibold text-[#0B3A63] mb-2">
                    {item.q}
                  </h3>
                  <FAQAnswer text={item.a} />
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-6 space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">
                Sommaire
              </p>
              <nav aria-label="Sommaire exemple bilan carbone PME">
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <TocItem href="#what-it-looks-like" label="À quoi ressemble l’exemple" />
                  <TocItem href="#essential-parts" label="Éléments indispensables" />
                  <TocItem href="#not-audit" label="Ce que l’exemple n’est pas" />
                  <TocItem href="#sample-structure" label="Structure type" />
                  <TocItem href="#case-example" label="Exemple concret" />
                  <TocItem href="#mistakes" label="Erreurs fréquentes" />
                  <TocItem href="#links" label="Pages utiles" />
                  <TocItem href="#faq" label="FAQ" />
                </ol>
              </nav>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Rappel utile
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Cette page montre un exemple de document carbone PME sous un angle
                pratique : voir à quoi ressemble un format utilisable, sans le
                confondre avec un audit ou un inventaire complet.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/fr/generate/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Générer
                </Link>
                <Link
                  href="/fr/pricing/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Prix
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Cluster FR
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <Link className="underline" href="/fr/bilan-carbone-pme/">
                    Bilan carbone PME
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline"
                    href="/fr/bilan-carbone-pme/obligation/"
                  >
                    Bilan carbone PME obligatoire
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline"
                    href="/fr/bilan-carbone-pme/cout/"
                  >
                    Combien coûte un bilan carbone PME ?
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/fr/pricing/">
                    Prix
                  </Link>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">
                Accès rapide
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/fr/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Accueil FR
                </Link>
                <a
                  href="#top"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Haut de page
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
      }
