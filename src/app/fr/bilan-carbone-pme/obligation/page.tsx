// PATH: src/app/fr/bilan-carbone-pme/obligation/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — CLUSTER FR
   Cible : "bilan carbone PME obligatoire"
====================================================== */

export const metadata: Metadata = {
  title:
    "Bilan carbone PME obligatoire : est-ce une obligation en France ? | Certif-Scope",
  description:
    "Bilan carbone PME obligatoire ? Ce qui est réellement imposé en France, ce qui relève d’une demande client ou d’un appel d’offres, et quoi fournir sans audit complet quand un document CO₂e est demandé.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/bilan-carbone-pme/obligation/",
    languages: {
      fr: "https://www.certif-scope.com/fr/bilan-carbone-pme/obligation/",
    },
  },
  openGraph: {
    title:
      "Bilan carbone PME obligatoire : est-ce une obligation en France ?",
    description:
      "PME : bilan carbone obligatoire ou simple demande documentaire ? Comprendre ce qui est réellement attendu et quoi fournir dans un dossier client, fournisseur, banque ou appel d’offres.",
    url: "https://www.certif-scope.com/fr/bilan-carbone-pme/obligation/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function BilanCarbonePMEObligationPageFR() {
  const pageUrl =
    "https://www.certif-scope.com/fr/bilan-carbone-pme/obligation/";

  const faq = [
    {
      q: "Le bilan carbone est-il obligatoire pour une PME en France ?",
      a: "Pour la majorité des PME, non. En pratique, la plupart des demandes reçues relèvent d’un besoin contractuel ou documentaire (client, appel d’offres, banque, assurance), et non d’une obligation générale applicable à toutes les PME.",
    },
    {
      q: "Pourquoi un client peut-il demander un bilan carbone si ce n’est pas obligatoire ?",
      a: "Parce qu’un client, un acheteur ou un donneur d’ordre peut intégrer un critère environnemental dans son processus fournisseur. Cela ne crée pas automatiquement une obligation réglementaire générale, mais une exigence de dossier à traiter correctement.",
    },
    {
      q: "Une mention 'bilan carbone' dans un appel d’offres signifie-t-elle qu’un audit complet est requis ?",
      a: "Pas nécessairement. Si le dossier n’impose pas clairement un standard, un périmètre, des preuves ou une vérification, la demande correspond souvent à du screening et non à un inventaire complet.",
    },
    {
      q: "Que faire si on me demande un bilan carbone et que je n’en ai pas ?",
      a: "Il faut d’abord vérifier si la demande est réellement une exigence formelle ou un besoin de screening. Dans beaucoup de cas, un document CO₂e indicatif, cadré, daté, avec méthode déclarée et limites explicites, suffit à répondre proprement.",
    },
    {
      q: "Quelle différence entre obligation réglementaire et exigence contractuelle ?",
      a: "Une obligation réglementaire découle d’un cadre légal applicable. Une exigence contractuelle vient d’un client, d’un cahier des charges, d’un référencement fournisseur ou d’un processus bancaire/assurantiel. Pour une PME, la seconde est souvent beaucoup plus fréquente dans la pratique.",
    },
    {
      q: "Que doit contenir un document acceptable quand la demande est du screening ?",
      a: "Un résultat CO₂e agrégé, l’année couverte, la méthode déclarée, les limites explicites, un PDF stable et un moyen de vérification. L’objectif est d’être lisible, archivable et cohérent dans un dossier.",
    },
    {
      q: "Le document Certif-Scope remplace-t-il un audit ou un inventaire complet ?",
      a: "Non. Certif-Scope produit une estimation indicative spend-based destinée au screening. Ce document ne remplace ni un audit, ni un inventaire complet, ni un reporting CSRD/ESRS.",
    },
    {
      q: "Comment savoir si je dois escalader vers une démarche complète ?",
      a: "Il faut lire le dossier : si un standard, un périmètre détaillé, des preuves, des annexes ou une vérification tierce sont explicitement exigés, une démarche plus complète peut être nécessaire. Sinon, un document de screening suffit souvent.",
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
        name: "Obligation",
        item: pageUrl,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bilan carbone PME obligatoire",
    url: pageUrl,
    description:
      "Bilan carbone PME obligatoire ? Comprendre ce qui est réellement imposé, ce qui relève d’une exigence client, et quoi fournir sans audit complet.",
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
    name: "Comment répondre à une demande de bilan carbone quand on est une PME",
    description:
      "Méthode simple pour distinguer obligation réelle et demande de screening, puis produire une réponse documentaire adaptée.",
    totalTime: "PT10M",
    step: [
      {
        "@type": "HowToStep",
        name: "Lire le niveau réellement exigé",
        text: "Vérifiez si le dossier impose un standard, un périmètre, des preuves ou une vérification tierce.",
      },
      {
        "@type": "HowToStep",
        name: "Distinguer exigence formelle et screening",
        text: "Si la demande reste générique, il s’agit souvent d’un besoin de screening documentaire plutôt que d’un inventaire complet.",
      },
      {
        "@type": "HowToStep",
        name: "Produire un document clair et daté",
        text: "Fournissez un document CO₂e indicatif avec résultat agrégé, année, méthode, limites et vérification.",
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
      id="bilan-carbone-pme-obligation"
      data-section="bilan-carbone-pme-obligation"
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
          Cluster FR — Bilan carbone PME : obligation
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B3A63] mb-4 leading-tight tracking-tight">
          Bilan carbone PME obligatoire : est-ce une obligation en France ?
        </h1>

        <div className="max-w-4xl space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>
              Pour la majorité des PME, le bilan carbone n’est pas une obligation
              générale en France.
            </strong>
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            En pratique, quand une PME se demande si le bilan carbone est
            obligatoire, la situation réelle est souvent différente : la demande
            vient d’un <strong>client</strong>, d’un{" "}
            <strong>appel d’offres</strong>, d’un{" "}
            <strong>référencement fournisseur</strong>, d’une{" "}
            <strong>banque</strong> ou d’un <strong>assureur</strong>.
          </p>

          <p className="text-base text-gray-600 leading-relaxed">
            La vraie question n’est donc pas seulement “est-ce obligatoire ?”,
            mais surtout : <strong>qu’est-ce qui est réellement attendu dans le dossier ?</strong>
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-6">
          <h2 className="text-lg font-semibold text-[#0B3A63] mb-3">
            Réponse rapide
          </h2>

          <ul className="list-disc ml-6 text-gray-700 space-y-2 leading-relaxed">
            <li>obligation générale pour toutes les PME : <strong>non</strong> ;</li>
            <li>demande client / donneur d’ordre / banque : <strong>fréquent</strong> ;</li>
            <li>audit complet automatiquement requis : <strong>non</strong> ;</li>
            <li>document de screening souvent suffisant : <strong>oui</strong>, si le dossier ne demande pas plus.</li>
          </ul>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/fr/generate/"
            className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#0B3A63] text-white hover:bg-[#0B3A63]/90 transition-colors font-semibold"
          >
            Obtenir un document carbone utilisable →
          </Link>

          <Link
            href="/fr/bilan-carbone-pme/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Voir la page pilier
          </Link>

          <Link
            href="/fr/pricing/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Voir le prix
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Ce que cette page répond
            </p>
            <p className="text-gray-700 leading-relaxed">
              Si une PME est légalement tenue de produire un bilan carbone, ou si
              la demande est surtout documentaire.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Cas les plus fréquents
            </p>
            <p className="text-gray-700 leading-relaxed">
              Appels d’offres, clients, banques, assurances, achats
              responsables, référencement fournisseur.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Point clé
            </p>
            <p className="text-gray-700 leading-relaxed">
              Une demande de “bilan carbone” n’implique pas automatiquement un
              audit complet ni un inventaire détaillé.
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
              <nav aria-label="Sommaire obligation bilan carbone PME (mobile)">
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <TocItem href="#general-rule" label="La règle générale" />
                  <TocItem href="#confusion" label="Pourquoi il y a confusion" />
                  <TocItem href="#contractual" label="Exigence contractuelle vs obligation" />
                  <TocItem href="#check" label="Comment vérifier ce qui est exigé" />
                  <TocItem href="#what-to-send" label="Que fournir en pratique" />
                  <TocItem href="#case-example" label="Exemple concret" />
                  <TocItem href="#mistakes" label="Erreurs fréquentes" />
                  <TocItem href="#links" label="Pages utiles" />
                  <TocItem href="#faq" label="FAQ" />
                </ol>
              </nav>
            </div>
          </section>

          <section id="general-rule" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              1) La règle générale : pour une PME, le bilan carbone n’est pas automatiquement obligatoire
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Lorsqu’une PME cherche “bilan carbone obligatoire”, elle cherche
              souvent une réponse simple. La réponse utile est la suivante :
              <strong> pour la majorité des PME, il n’existe pas d’obligation générale de produire un bilan carbone complet simplement parce qu’elles sont des PME.</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              En revanche, une PME peut se retrouver face à une demande très
              concrète dans un dossier commercial, fournisseur, bancaire ou
              assurantiel. C’est ce décalage qui crée la confusion : le mot
              “obligatoire” est utilisé, alors que la demande relève souvent d’un
              <strong> besoin documentaire</strong>.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                À retenir
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>obligation générale pour toutes les PME : non ;</li>
                <li>demande dans un dossier client ou fournisseur : fréquent ;</li>
                <li>audit complet requis à chaque fois : non ;</li>
                <li>screening documentaire suffisant dans beaucoup de cas : oui.</li>
              </ul>
            </div>
          </section>

          <section id="confusion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2) Pourquoi il y a confusion autour du mot “obligatoire”
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Dans la pratique, les PME entendent souvent : “il nous faut votre
              bilan carbone”. Cette formulation donne l’impression d’une
              obligation absolue, alors qu’elle correspond fréquemment à un
              besoin de <strong>comparaison</strong>, de{" "}
              <strong>screening</strong> ou de <strong>documentation</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Ce que la PME entend
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>“Le bilan carbone est obligatoire.”</li>
                  <li>“Il faut absolument fournir un bilan carbone.”</li>
                  <li>“Sans cela, le dossier ne passe pas.”</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Ce que le dossier veut souvent réellement
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>un indicateur CO₂e ;</li>
                  <li>un document simple et daté ;</li>
                  <li>une méthode déclarée ;</li>
                  <li>un format archivable dans le dossier.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="contractual" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3) Exigence contractuelle vs obligation réglementaire
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              C’est la distinction la plus importante. Une{" "}
              <strong>obligation réglementaire</strong> découle d’un cadre légal
              applicable. Une <strong>exigence contractuelle</strong> vient d’un
              client, d’un appel d’offres, d’un référencement fournisseur, d’une
              banque ou d’un assureur.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
              <table className="min-w-[720px] w-full text-sm">
                <thead>
                  <tr className="bg-[#F8FAFC]">
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">
                      Type de demande
                    </th>
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">
                      Origine
                    </th>
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">
                      Ce qu’il faut faire
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-4 text-gray-700">Obligation réglementaire</td>
                    <td className="p-4 text-gray-700">Cadre légal explicite</td>
                    <td className="p-4 text-gray-700">
                      Vérifier le périmètre, le standard et les justificatifs exigés
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-700">Exigence contractuelle</td>
                    <td className="p-4 text-gray-700">
                      Client, appel d’offres, achats, banque, assurance
                    </td>
                    <td className="p-4 text-gray-700">
                      Lire le niveau réellement demandé et répondre au bon niveau
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-700">Screening documentaire</td>
                    <td className="p-4 text-gray-700">
                      Questionnaire générique ou dossier fournisseur
                    </td>
                    <td className="p-4 text-gray-700">
                      Fournir un document CO₂e clair, daté, limité et vérifiable
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="check" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4) Comment vérifier ce qui est réellement exigé
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              La bonne approche n’est pas de supposer qu’un audit complet est
              requis. Il faut lire le dossier et identifier les signaux
              objectifs.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Signaux d’une demande de screening
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>demande générique de “bilan carbone” ;</li>
                <li>aucun standard clairement imposé ;</li>
                <li>pas de table de calcul demandée ;</li>
                <li>pas de preuve tierce ou d’assurance exigée ;</li>
                <li>besoin d’un PDF ou d’un document à joindre rapidement.</li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Signaux d’une exigence formelle
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>standard explicitement mentionné ;</li>
                <li>périmètre détaillé ;</li>
                <li>preuves ou annexes exigées ;</li>
                <li>niveau d’assurance ou vérification tierce requis ;</li>
                <li>livrable technique attendu.</li>
              </ul>
            </div>
          </section>

          <section id="what-to-send" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5) Que fournir en pratique quand ce n’est pas une obligation générale ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Quand la demande relève du screening, la réponse utile est un
              document CO₂e propre, explicite et archivable. L’objectif n’est pas
              de sur-promettre, mais de répondre au niveau attendu.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Ce que doit contenir le document
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>résultat CO₂e agrégé ;</li>
                <li>année couverte ;</li>
                <li>méthode déclarée ;</li>
                <li>limites visibles ;</li>
                <li>format PDF stable ;</li>
                <li>identifiant ou vérification.</li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-[#0B3A63] p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">
                Principe de prudence
              </h3>
              <p className="text-white/90 leading-relaxed">
                Répondez au besoin réel du dossier, sans présenter un document de
                screening comme un audit ou un inventaire complet.
              </p>
            </div>
          </section>

          <section id="case-example" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              6) Exemple concret
            </h2>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Une PME de services B2B finalise son référencement chez un grand
                compte. Le client demande un “bilan carbone”.
              </p>

              <ul className="list-disc ml-6 text-gray-700 space-y-2 leading-relaxed">
                <li>la PME pense d’abord qu’un audit complet est obligatoire ;</li>
                <li>en lisant le dossier, elle constate qu’aucun standard détaillé n’est imposé ;</li>
                <li>le besoin réel est un document de screening à joindre ;</li>
                <li>elle fournit un document CO₂e indicatif, daté, avec méthode et limites ;</li>
                <li>le dossier peut avancer sans attendre une démarche lourde.</li>
              </ul>
            </div>
          </section>

          <section id="mistakes" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              7) Erreurs fréquentes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Erreur n°1
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Penser qu’une demande générique de bilan carbone impose
                  automatiquement un inventaire complet.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Erreur n°2
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Fournir un document ambigu, sans méthode, sans limites et sans
                  cadre clair.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Erreur n°3
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Attendre trop longtemps avant de clarifier le niveau réellement
                  demandé dans le dossier.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Erreur n°4
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Surdimensionner la réponse alors qu’un screening cohérent aurait
                  suffi.
                </p>
              </div>
            </div>
          </section>

          <section id="links" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              8) Pages utiles pour aller plus loin
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
                    href="/fr/bilan-carbone-appel-offres/"
                  >
                    Bilan carbone PME pour appel d’offres →
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline text-[#0B3A63]"
                    href="/fr/why-companies-ask/"
                  >
                    Pourquoi on vous le demande →
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline text-[#0B3A63]"
                    href="/fr/pricing/"
                  >
                    Prix : réponse screening →
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <section id="cta" className="pt-2 scroll-mt-24">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Une demande de bilan carbone ne signifie pas toujours audit complet
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Si le dossier relève du screening, Certif-Scope permet de produire
                un document CO₂e indicatif, clair, réutilisable et vérifiable,
                avec méthode déclarée et limites explicites.
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
              FAQ — Bilan carbone PME obligatoire
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
              <nav aria-label="Sommaire obligation bilan carbone PME">
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <TocItem href="#general-rule" label="La règle générale" />
                  <TocItem href="#confusion" label="Pourquoi il y a confusion" />
                  <TocItem
                    href="#contractual"
                    label="Exigence contractuelle vs obligation"
                  />
                  <TocItem
                    href="#check"
                    label="Comment vérifier ce qui est exigé"
                  />
                  <TocItem href="#what-to-send" label="Que fournir en pratique" />
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
                Cette page traite la question “bilan carbone PME obligatoire ?”
                sous l’angle pratique : distinguer obligation réelle, exigence
                contractuelle et besoin de screening. Certif-Scope ne remplace pas
                un audit ni un inventaire complet.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/fr/bilan-carbone-pme/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Page pilier
                </Link>
                <Link
                  href="/fr/product/methodology/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Méthodologie
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Cluster FR
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <Link
                    className="underline"
                    href="/fr/bilan-carbone-pme/"
                  >
                    Bilan carbone PME
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline"
                    href="/fr/bilan-carbone-appel-offres/"
                  >
                    Bilan carbone PME pour appel d’offres
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline"
                    href="/fr/why-companies-ask/"
                  >
                    Pourquoi on vous le demande
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
