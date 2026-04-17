// PATH: src/app/fr/bilan-carbone-pme/modele-pdf/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — CLUSTER FR
   Cible : "modèle bilan carbone PDF" / "document carbone PME PDF"
====================================================== */

export const metadata: Metadata = {
  title:
    "Modèle PDF : document carbone PME utilisable dans un dossier | Certif-Scope",
  description:
    "Modèle PDF de document carbone PME : à quoi doit ressembler un format utilisable pour un client, un fournisseur, une banque, une assurance ou un appel d’offres, sans le confondre avec un audit complet.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/bilan-carbone-pme/modele-pdf/",
    languages: {
      fr: "https://www.certif-scope.com/fr/bilan-carbone-pme/modele-pdf/",
    },
  },
  openGraph: {
    title:
      "Modèle PDF : document carbone PME utilisable dans un dossier",
    description:
      "Voir le format attendu d’un document carbone PME PDF : ce qu’il doit contenir, ce qu’il ne doit pas promettre, et dans quels cas ce type de document suffit.",
    url: "https://www.certif-scope.com/fr/bilan-carbone-pme/modele-pdf/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function BilanCarbonePMEModelePDFPageFR() {
  const pageUrl =
    "https://www.certif-scope.com/fr/bilan-carbone-pme/modele-pdf/";

  const faq = [
    {
      q: "À quoi ressemble un modèle PDF de document carbone PME ?",
      a: "Un modèle PDF de document carbone PME doit être simple, lisible et utilisable dans un dossier. Il contient généralement un résultat CO₂e agrégé, l’année couverte, la méthode déclarée, les limites explicites et un format stable pouvant être partagé ou archivé.",
    },
    {
      q: "Ce modèle PDF remplace-t-il un audit ou un inventaire complet ?",
      a: "Non. Un modèle PDF de screening ne remplace pas un audit, un inventaire complet des émissions ou un reporting réglementaire. Il sert à répondre à une demande documentaire lorsque le niveau attendu reste générique.",
    },
    {
      q: "Pourquoi chercher un modèle PDF avant de répondre à une demande ?",
      a: "Parce que beaucoup de PME veulent vérifier le format attendu avant de s’engager. Un modèle PDF aide à comprendre si le besoin réel est un document clair et archivable, ou une démarche beaucoup plus lourde.",
    },
    {
      q: "Que doit contenir un bon PDF carbone PME ?",
      a: "Il doit contenir un titre clair, l’année couverte, une identification minimale de l’entreprise, un résultat CO₂e agrégé, la méthode, les limites du document et, idéalement, un identifiant ou un moyen de vérification.",
    },
    {
      q: "Dans quels cas ce type de PDF suffit-il ?",
      a: "Souvent dans les cas de screening : client, référencement fournisseur, banque, assurance, appel d’offres sans exigence méthodologique détaillée, ou besoin d’un document rapide à joindre à un dossier.",
    },
    {
      q: "Que faut-il éviter dans un modèle PDF ?",
      a: "Il faut éviter tout flou sur la portée du document : ne pas laisser croire qu’il s’agit d’un audit, masquer les limites, ou présenter un résultat indicatif comme un inventaire complet réglementaire.",
    },
    {
      q: "Pourquoi un format PDF compte-t-il autant ?",
      a: "Parce qu’un PDF est facile à transmettre, à archiver et à réutiliser dans un dossier. En pratique, beaucoup de demandes B2B attendent surtout un document stable, lisible et partageable.",
    },
    {
      q: "Le document Certif-Scope suit-il cette logique de modèle PDF ?",
      a: "Oui. Certif-Scope vise un document CO₂e indicatif, standardisé, vérifiable, réutilisable et adapté aux situations de screening, sans se présenter comme un audit ou un inventaire complet.",
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
        name: "Modèle PDF",
        item: pageUrl,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Modèle PDF : document carbone PME",
    url: pageUrl,
    description:
      "Modèle PDF de document carbone PME : voir le format attendu, son contenu utile et ce qui le distingue d’un audit complet.",
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
    name: "Comment lire un modèle PDF de document carbone PME",
    description:
      "Méthode simple pour vérifier si un modèle PDF correspond à un besoin de screening documentaire ou à une demande plus lourde.",
    totalTime: "PT10M",
    step: [
      {
        "@type": "HowToStep",
        name: "Vérifier le format attendu",
        text: "Assurez-vous que le besoin est bien un document PDF lisible, stable et archivable dans un dossier.",
      },
      {
        "@type": "HowToStep",
        name: "Contrôler les éléments essentiels",
        text: "Vérifiez la présence du résultat CO₂e, de l’année couverte, de la méthode, des limites et de l’identification minimale.",
      },
      {
        "@type": "HowToStep",
        name: "Comparer avec votre dossier réel",
        text: "Si le dossier n’impose ni standard détaillé ni vérification tierce, un modèle PDF de screening peut souvent suffire.",
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
      id="bilan-carbone-pme-modele-pdf"
      data-section="bilan-carbone-pme-modele-pdf"
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
          Cluster FR — Bilan carbone PME : modèle PDF
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B3A63] mb-4 leading-tight tracking-tight">
          Modèle PDF : document carbone PME utilisable dans un dossier
        </h1>

        <div className="max-w-4xl space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>
              Dans beaucoup de cas PME, le besoin réel n’est pas un audit
              complet, mais un PDF clair, stable et archivable.
            </strong>
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Ce type de document est souvent demandé par un{" "}
            <strong>client</strong>, un <strong>acheteur</strong>, une{" "}
            <strong>banque</strong>, un <strong>assureur</strong> ou dans un{" "}
            <strong>appel d’offres</strong>, lorsque le niveau attendu relève du
            screening documentaire.
          </p>

          <p className="text-base text-gray-600 leading-relaxed">
            Cette page montre à quoi doit ressembler un bon modèle PDF de
            document carbone PME, ce qu’il doit contenir, et ce qu’il ne faut
            pas lui faire dire.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-6">
          <h2 className="text-lg font-semibold text-[#0B3A63] mb-3">
            Réponse rapide
          </h2>

          <ul className="list-disc ml-6 text-gray-700 space-y-2 leading-relaxed">
            <li>format PDF stable et partageable ;</li>
            <li>résultat CO₂e agrégé ;</li>
            <li>année couverte et date d’émission ;</li>
            <li>méthode déclarée ;</li>
            <li>limites visibles ;</li>
            <li>document lisible et archivable.</li>
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
              Ce que cette page répond
            </p>
            <p className="text-gray-700 leading-relaxed">
              À quoi doit ressembler un PDF carbone PME utilisable dans un
              dossier client, fournisseur, banque ou appel d’offres.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Point clé
            </p>
            <p className="text-gray-700 leading-relaxed">
              Le bon modèle PDF n’est pas le plus complexe, mais le plus clair,
              le plus cohérent et le plus facile à archiver.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Erreur fréquente
            </p>
            <p className="text-gray-700 leading-relaxed">
              Chercher un format trop technique alors que le dossier attend
              seulement un document simple, stable et réutilisable.
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
              <nav aria-label="Sommaire modèle pdf bilan carbone PME (mobile)">
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <TocItem href="#what-it-is" label="Ce qu’est ce modèle PDF" />
                  <TocItem href="#what-it-contains" label="Ce qu’il doit contenir" />
                  <TocItem href="#what-it-is-not" label="Ce qu’il n’est pas" />
                  <TocItem href="#sample-layout" label="Structure type du PDF" />
                  <TocItem href="#case-example" label="Exemple concret" />
                  <TocItem href="#mistakes" label="Erreurs fréquentes" />
                  <TocItem href="#links" label="Pages utiles" />
                  <TocItem href="#faq" label="FAQ" />
                </ol>
              </nav>
            </div>
          </section>

          <section id="what-it-is" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              1) Ce qu’est un modèle PDF de document carbone PME
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Un modèle PDF de document carbone PME est un{" "}
              <strong>format de présentation</strong> destiné à transmettre un
              résultat CO₂e de manière claire, datée et réutilisable. Dans un
              contexte PME, il répond souvent à une logique de{" "}
              <strong>screening documentaire</strong>.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Ce modèle PDF n’a pas pour objectif de reproduire toute la
              complexité d’un inventaire complet. Il sert surtout à fournir un
              document qui puisse être :
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>partagé rapidement ;</li>
                <li>archivé dans un dossier ;</li>
                <li>compris sans ambiguïté ;</li>
                <li>rattaché à une année ;</li>
                <li>lu par un tiers non spécialiste.</li>
              </ul>
            </div>
          </section>

          <section id="what-it-contains" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2) Ce qu’un bon modèle PDF doit contenir
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Un bon PDF doit contenir les éléments que le lecteur cherche
              réellement. Il ne doit ni manquer d’informations essentielles, ni
              devenir inutilement technique.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Éléments indispensables
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>titre clair du document ;</li>
                  <li>année couverte ;</li>
                  <li>identification minimale de l’entreprise ;</li>
                  <li>résultat CO₂e agrégé ;</li>
                  <li>date d’émission ;</li>
                  <li>méthode déclarée.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Transparence minimale
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>limites du document ;</li>
                  <li>non audit ;</li>
                  <li>non inventaire complet ;</li>
                  <li>non CSRD/ESRS ;</li>
                  <li>référence ou identifiant ;</li>
                  <li>moyen de vérification si disponible.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="what-it-is-not" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3) Ce que ce modèle PDF n’est pas
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              C’est un point essentiel. Beaucoup de confusion vient du fait que
              l’on attend d’un simple PDF ce qu’on attendrait d’un audit ou d’un
              inventaire détaillé.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                À ne pas confondre
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>modèle PDF de screening ;</li>
                <li>audit carbone ;</li>
                <li>inventaire complet des émissions ;</li>
                <li>reporting réglementaire ;</li>
                <li>livrable technique détaillé avec preuves étendues.</li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-gray-700 leading-relaxed">
                Dans beaucoup de situations PME, le besoin porte sur un{" "}
                <strong>document clair et partageable</strong>, pas sur une
                démonstration technique exhaustive.
              </p>
            </div>
          </section>

          <section id="sample-layout" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4) Structure type d’un modèle PDF utilisable
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Un bon modèle PDF suit une structure simple, lisible et stable.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <ol className="list-decimal ml-6 text-gray-700 space-y-3">
                <li>
                  <strong>Titre du document</strong> — document CO₂e indicatif,
                  résultat carbone ou attestation.
                </li>
                <li>
                  <strong>Référence de l’entité</strong> — identification
                  minimale utile au dossier.
                </li>
                <li>
                  <strong>Année couverte</strong> — pour éviter toute ambiguïté
                  temporelle.
                </li>
                <li>
                  <strong>Résultat CO₂e</strong> — valeur agrégée lisible.
                </li>
                <li>
                  <strong>Méthode déclarée</strong> — spend-based ou autre
                  méthode annoncée.
                </li>
                <li>
                  <strong>Limites du document</strong> — non audit, non
                  inventaire complet, non CSRD/ESRS.
                </li>
                <li>
                  <strong>Vérification / identifiant</strong> — si un contrôle ou
                  une référence est disponible.
                </li>
              </ol>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-[#0B3A63] p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">
                Principe de lecture
              </h3>
              <p className="text-white/90 leading-relaxed">
                Un bon PDF se juge sur sa clarté, sa cohérence et sa capacité à
                être archivé sans discussion supplémentaire.
              </p>
            </div>
          </section>

          <section id="case-example" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5) Exemple concret
            </h2>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Une PME reçoit une demande fournisseur : joindre un document
                carbone au dossier.
              </p>

              <ul className="list-disc ml-6 text-gray-700 space-y-2 leading-relaxed">
                <li>elle cherche d’abord un modèle PDF pour comprendre le format attendu ;</li>
                <li>elle constate que le besoin est surtout un document lisible et daté ;</li>
                <li>le dossier ne demande pas de standard détaillé ni d’audit ;</li>
                <li>un PDF indicatif, clair, méthodologiquement cadré, suffit à répondre ;</li>
                <li>elle évite ainsi une réponse trop lourde pour le besoin réel.</li>
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
                  Chercher un modèle PDF trop complexe alors que le dossier attend
                  un format simple et lisible.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Erreur n°2
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Oublier les limites du document ou laisser croire qu’il s’agit
                  d’un audit complet.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Erreur n°3
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Produire un PDF sans année couverte, sans méthode ou sans
                  structure claire.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Erreur n°4
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Penser que le PDF n’a pas d’importance alors qu’il est souvent
                  le livrable effectivement lu et archivé.
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
                    href="/fr/bilan-carbone-pme/exemple/"
                  >
                    Exemple de bilan carbone PME →
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <section id="cta" className="pt-2 scroll-mt-24">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Le bon modèle PDF est celui qui répond vraiment au dossier
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Certif-Scope permet de produire un document CO₂e indicatif,
                standardisé, lisible, vérifiable et réutilisable dans un dossier
                client, fournisseur, banque, assurance ou appel d’offres.
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
              FAQ — Modèle PDF : document carbone PME
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
              <nav aria-label="Sommaire modèle pdf bilan carbone PME">
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <TocItem href="#what-it-is" label="Ce qu’est ce modèle PDF" />
                  <TocItem href="#what-it-contains" label="Ce qu’il doit contenir" />
                  <TocItem href="#what-it-is-not" label="Ce qu’il n’est pas" />
                  <TocItem href="#sample-layout" label="Structure type du PDF" />
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
                Cette page traite le format PDF d’un document carbone PME sous un
                angle pratique : montrer le bon niveau de clarté, de structure et
                de transparence pour un usage de screening.
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
                  <Link
                    className="underline"
                    href="/fr/bilan-carbone-pme/exemple/"
                  >
                    Exemple de bilan carbone PME
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
