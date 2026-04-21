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
      a: "Pour la majorité des PME, non. En pratique, la plupart des demandes reçues relèvent d’un besoin contractuel ou documentaire, comme un client, un appel d’offres, une banque, un assureur ou un référencement fournisseur, et non d’une obligation générale applicable à toutes les PME.",
    },
    {
      q: "Pourquoi un client peut-il demander un bilan carbone si ce n’est pas une obligation générale ?",
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
      a: "Une obligation réglementaire découle d’un cadre légal applicable. Une exigence contractuelle vient d’un client, d’un cahier des charges, d’un référencement fournisseur ou d’un processus bancaire ou assurantiel. Pour une PME, la seconde est souvent beaucoup plus fréquente dans la pratique.",
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
      a: "Il faut lire le dossier. Si un standard, un périmètre détaillé, des preuves, des annexes ou une vérification tierce sont explicitement exigés, une démarche plus complète peut être nécessaire. Sinon, un document de screening suffit souvent.",
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
        className="text-[#0B3A63] transition-colors hover:text-[#1FB6C1] hover:underline underline-offset-4"
      >
        {label}
      </a>
    </li>
  );

  return (
    <section
      id="bilan-carbone-pme-obligation"
      data-section="bilan-carbone-pme-obligation"
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
            Cluster FR • Obligation • PME • Screening
          </p>

          <h1 className="mt-6 max-w-5xl text-3xl font-extrabold leading-[0.96] tracking-[-0.05em] text-[#0B3A63] md:text-5xl">
            Bilan carbone PME :
            <br />
            <span className="relative inline-block">
              est-ce obligatoire
              <span className="absolute bottom-1 left-0 h-3 w-full rounded-full bg-[#1FB6C1]/18" />
            </span>{" "}
            en France ?
          </h1>

          <p className="mt-4 text-sm font-medium text-[#0B3A63]/75 md:text-base">
            Obligation générale, exigence client, appel d’offres, référencement
            fournisseur et document réellement attendu.
          </p>

          <div className="mt-6 max-w-4xl space-y-4">
            <p className="text-lg leading-relaxed text-[#475569]">
              <strong className="text-[#0B3A63]">
                Pour la majorité des PME, le bilan carbone n’est pas une
                obligation générale.
              </strong>{" "}
              Dans la pratique, la demande vient surtout d’un client, d’un
              appel d’offres, d’un référencement fournisseur, d’une banque ou
              d’un assureur.
            </p>

            <p className="text-base leading-relaxed text-[#64748B] md:text-lg">
              La vraie question n’est donc pas seulement{" "}
              <strong className="text-[#0B3A63]">
                “est-ce obligatoire ?”
              </strong>
              , mais surtout{" "}
              <strong className="text-[#0B3A63]">
                “qu’est-ce qui est réellement attendu dans le dossier ?”
              </strong>
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Obligation générale
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Non pour la majorité des PME. Il ne faut pas confondre obligation
                générale et demande de dossier.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Cas fréquents
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Client, appel d’offres, banque, assurance, questionnaire ESG,
                référencement fournisseur.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Point clé
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Une demande de “bilan carbone” n’implique pas automatiquement un
                audit complet ni un inventaire détaillé.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 md:p-8">
            <h2 className="text-xl font-extrabold leading-tight text-[#0B3A63] md:text-2xl">
              Réponse rapide
            </h2>

            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                obligation générale pour toutes les PME :{" "}
                <strong className="text-[#0B3A63]">non</strong>
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                demande client / donneur d’ordre / banque :{" "}
                <strong className="text-[#0B3A63]">fréquent</strong>
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                audit complet automatiquement requis :{" "}
                <strong className="text-[#0B3A63]">non</strong>
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                document de screening souvent suffisant :{" "}
                <strong className="text-[#0B3A63]">oui</strong>, si le dossier ne
                demande pas plus
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
              href="/fr/bilan-carbone-pme/"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
            >
              Voir la page pilier
            </Link>

            <Link
              href="/fr/pricing/"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#0B3A63]/14 bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white"
            >
              Voir le prix
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
                <nav aria-label="Sommaire obligation bilan carbone PME (mobile)" className="mt-4">
                  <ol className="ml-5 list-decimal space-y-2 text-sm">
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
                    <TocItem href="#faq" label="FAQ" />
                  </ol>
                </nav>
              </div>
            </section>

            <section id="general-rule" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                1) La règle générale : pour une PME, le bilan carbone n’est pas
                automatiquement obligatoire
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Lorsqu’une PME cherche “bilan carbone obligatoire”, elle cherche
                souvent une réponse simple. La réponse utile est la suivante :
                <strong className="text-[#0B3A63]">
                  {" "}
                  pour la majorité des PME, il n’existe pas d’obligation générale
                  de produire un bilan carbone complet simplement parce qu’elles
                  sont des PME.
                </strong>
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
                En revanche, une PME peut se retrouver face à une demande très
                concrète dans un dossier commercial, fournisseur, bancaire ou
                assurantiel. C’est ce décalage qui crée la confusion : le mot
                “obligatoire” est utilisé, alors que la demande relève souvent
                d’un <strong className="text-[#0B3A63]">besoin documentaire</strong>.
              </p>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  À retenir
                </h3>
                <ul className="mt-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>obligation générale pour toutes les PME : non ;</li>
                  <li>demande dans un dossier client ou fournisseur : fréquent ;</li>
                  <li>audit complet requis à chaque fois : non ;</li>
                  <li>screening documentaire suffisant dans beaucoup de cas : oui.</li>
                </ul>
              </div>
            </section>

            <section id="confusion" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                2) Pourquoi il y a confusion autour du mot “obligatoire”
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Dans la pratique, les PME entendent souvent : “il nous faut votre
                bilan carbone”. Cette formulation donne l’impression d’une
                obligation absolue, alors qu’elle correspond fréquemment à un
                besoin de <strong className="text-[#0B3A63]">comparaison</strong>,
                de <strong className="text-[#0B3A63]"> screening</strong> ou de{" "}
                <strong className="text-[#0B3A63]">documentation</strong>.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Ce que la PME entend
                  </h3>
                  <ul className="mt-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569]">
                    <li>“Le bilan carbone est obligatoire.”</li>
                    <li>“Il faut absolument fournir un bilan carbone.”</li>
                    <li>“Sans cela, le dossier ne passe pas.”</li>
                  </ul>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Ce que le dossier veut souvent réellement
                  </h3>
                  <ul className="mt-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569]">
                    <li>un indicateur CO₂e ;</li>
                    <li>un document simple et daté ;</li>
                    <li>une méthode déclarée ;</li>
                    <li>un format archivable dans le dossier.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="contractual" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                3) Exigence contractuelle vs obligation réglementaire
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                C’est la distinction la plus importante. Une{" "}
                <strong className="text-[#0B3A63]">
                  obligation réglementaire
                </strong>{" "}
                découle d’un cadre légal applicable. Une{" "}
                <strong className="text-[#0B3A63]">
                  exigence contractuelle
                </strong>{" "}
                vient d’un client, d’un appel d’offres, d’un référencement
                fournisseur, d’une banque ou d’un assureur.
              </p>

              <div className="mt-6 overflow-x-auto rounded-[28px] border border-[#0B3A63]/10 bg-white shadow-sm">
                <table className="min-w-[720px] w-full text-sm">
                  <thead>
                    <tr className="bg-[#F8FAFC]">
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Type de demande
                      </th>
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Origine
                      </th>
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Ce qu’il faut faire
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#0B3A63]/8">
                    <tr>
                      <td className="p-4 text-[#475569]">Obligation réglementaire</td>
                      <td className="p-4 text-[#475569]">Cadre légal explicite</td>
                      <td className="p-4 text-[#475569]">
                        Vérifier le périmètre, le standard et les justificatifs exigés
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 text-[#475569]">Exigence contractuelle</td>
                      <td className="p-4 text-[#475569]">
                        Client, appel d’offres, achats, banque, assurance
                      </td>
                      <td className="p-4 text-[#475569]">
                        Lire le niveau réellement demandé et répondre au bon niveau
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 text-[#475569]">Screening documentaire</td>
                      <td className="p-4 text-[#475569]">
                        Questionnaire générique ou dossier fournisseur
                      </td>
                      <td className="p-4 text-[#475569]">
                        Fournir un document CO₂e clair, daté, limité et vérifiable
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="check" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                4) Comment vérifier ce qui est réellement exigé
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                La bonne approche n’est pas de supposer qu’un audit complet est
                requis. Il faut lire le dossier et identifier les signaux
                objectifs.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Signaux d’une demande de screening
                  </h3>
                  <ul className="mt-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569]">
                    <li>demande générique de “bilan carbone” ;</li>
                    <li>aucun standard clairement imposé ;</li>
                    <li>pas de table de calcul demandée ;</li>
                    <li>pas de preuve tierce ou d’assurance exigée ;</li>
                    <li>besoin d’un PDF à joindre rapidement.</li>
                  </ul>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Signaux d’une exigence formelle
                  </h3>
                  <ul className="mt-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569]">
                    <li>standard explicitement mentionné ;</li>
                    <li>périmètre détaillé ;</li>
                    <li>preuves ou annexes exigées ;</li>
                    <li>vérification tierce requise ;</li>
                    <li>livrable technique attendu.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="what-to-send" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                5) Que fournir en pratique quand ce n’est pas une obligation générale ?
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Quand la demande relève du screening, la réponse utile est un
                document CO₂e propre, explicite et archivable. L’objectif n’est
                pas de sur-promettre, mais de répondre au niveau attendu.
              </p>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-8">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Ce que doit contenir le document
                </h3>
                <ul className="mt-5 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>résultat CO₂e agrégé ;</li>
                  <li>année couverte ;</li>
                  <li>méthode déclarée ;</li>
                  <li>limites visibles ;</li>
                  <li>format PDF stable ;</li>
                  <li>identifiant ou vérification.</li>
                </ul>

                <div className="mt-6 rounded-2xl border border-[#1FB6C1]/18 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-5">
                  <p className="text-sm leading-relaxed text-[#475569] md:text-base">
                    <strong className="text-[#0B3A63]">
                      Principe de prudence :
                    </strong>{" "}
                    répondez au besoin réel du dossier, sans présenter un
                    document de screening comme un audit ou un inventaire complet.
                  </p>
                </div>
              </div>
            </section>

            <section id="case-example" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                6) Exemple concret
              </h2>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-8">
                <p className="text-base leading-relaxed text-[#475569] md:text-lg">
                  Une PME de services B2B finalise son référencement chez un
                  grand compte. Le client demande un “bilan carbone”.
                </p>

                <ul className="mt-5 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>la PME pense d’abord qu’un audit complet est obligatoire ;</li>
                  <li>en lisant le dossier, elle constate qu’aucun standard détaillé n’est imposé ;</li>
                  <li>le besoin réel est un document de screening à joindre ;</li>
                  <li>elle fournit un document CO₂e indicatif, daté, avec méthode et limites ;</li>
                  <li>le dossier peut avancer sans attendre une démarche lourde.</li>
                </ul>
              </div>
            </section>

            <section id="mistakes" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                7) Erreurs fréquentes
              </h2>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Erreur n°1
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Penser qu’une demande générique de bilan carbone impose
                    automatiquement un inventaire complet.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Erreur n°2
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Fournir un document ambigu, sans méthode, sans limites et sans
                    cadre clair.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Erreur n°3
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Attendre trop longtemps avant de clarifier le niveau réellement
                    demandé dans le dossier.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Erreur n°4
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Surdimensionner la réponse alors qu’un screening cohérent aurait
                    suffi.
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
                  Une demande de bilan carbone ne signifie pas toujours audit complet
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
                  Si le dossier relève du screening, Certif-Scope permet de produire
                  un document CO₂e indicatif, clair, réutilisable et vérifiable,
                  avec méthode déclarée et limites explicites.
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
                FAQ — Bilan carbone PME obligatoire
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
                <nav aria-label="Sommaire obligation bilan carbone PME" className="mt-4">
                  <ol className="ml-5 list-decimal space-y-2 text-sm">
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
                    <TocItem href="#faq" label="FAQ" />
                  </ol>
                </nav>
              </div>

              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Rappel utile
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  Cette page traite la question “bilan carbone PME obligatoire ?”
                  sous l’angle pratique : distinguer obligation réelle, exigence
                  contractuelle et besoin de screening. Certif-Scope ne remplace
                  pas un audit ni un inventaire complet.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/fr/bilan-carbone-pme/"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63] px-4 py-2 text-sm font-medium text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
                  >
                    Page pilier
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
                      href="/fr/bilan-carbone-appel-offres/"
                    >
                      Bilan carbone PME pour appel d’offres
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                      href="/fr/why-companies-ask/"
                    >
                      Pourquoi on vous le demande
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
