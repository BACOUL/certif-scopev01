// PATH: src/app/fr/bilan-carbone-pme/cout/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — CLUSTER FR
   Cible : "combien coûte un bilan carbone PME"
====================================================== */

export const metadata: Metadata = {
  title:
    "Combien coûte un bilan carbone pour une PME ? | Certif-Scope",
  description:
    "Prix d’un bilan carbone PME : ce qui fait varier le coût, différence entre screening documentaire et inventaire complet, et quel niveau choisir selon le dossier à traiter.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/bilan-carbone-pme/cout/",
    languages: {
      fr: "https://www.certif-scope.com/fr/bilan-carbone-pme/cout/",
    },
  },
  openGraph: {
    title: "Combien coûte un bilan carbone pour une PME ?",
    description:
      "Comprendre le prix d’un bilan carbone PME : ce qui dépend du niveau attendu, quand un document simple suffit, et quand une démarche plus lourde est nécessaire.",
    url: "https://www.certif-scope.com/fr/bilan-carbone-pme/cout/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function BilanCarbonePMECoutPageFR() {
  const pageUrl = "https://www.certif-scope.com/fr/bilan-carbone-pme/cout/";

  const faq = [
    {
      q: "Combien coûte un bilan carbone pour une PME ?",
      a: "Le coût dépend du niveau attendu. Un document de screening pour répondre à une demande client ou fournisseur coûte beaucoup moins qu’un inventaire complet avec collecte détaillée, périmètre étendu et accompagnement spécialisé.",
    },
    {
      q: "Pourquoi les prix sont-ils très variables ?",
      a: "Parce que le marché mélange souvent des besoins très différents : screening documentaire rapide, estimation indicative, inventaire complet, accompagnement méthodologique, vérification ou audit. Le prix dépend donc du livrable réellement attendu.",
    },
    {
      q: "Un appel d’offres impose-t-il toujours un bilan carbone complet ?",
      a: "Non. Dans beaucoup de cas, l’appel d’offres demande surtout un document clair, comparable et archivable. Si le standard, le périmètre, les preuves et la vérification ne sont pas explicitement exigés, un screening peut suffire.",
    },
    {
      q: "Que paie-t-on réellement dans une démarche complète ?",
      a: "On paie généralement la collecte des données, la structuration du périmètre, les hypothèses, la méthodologie, les échanges, la mise en forme du livrable et parfois un niveau de vérification supplémentaire.",
    },
    {
      q: "Quand un document simple est-il suffisant ?",
      a: "Quand la demande est générique, documentaire et orientée screening : client, référencement fournisseur, banque, assurance, appel d’offres sans exigence méthodologique détaillée.",
    },
    {
      q: "Pourquoi Certif-Scope coûte-t-il moins qu’un accompagnement complet ?",
      a: "Parce que Certif-Scope vise un besoin précis : produire un document CO₂e indicatif spend-based, standardisé et réutilisable, sans démarche d’audit, sans inventaire complet et sans accompagnement lourd.",
    },
    {
      q: "Le prix plus faible signifie-t-il que le document est inutile ?",
      a: "Non. Cela signifie surtout que le document répond à un autre usage : le screening. Il n’a pas vocation à remplacer un inventaire complet, mais à traiter rapidement une demande documentaire claire.",
    },
    {
      q: "Comment savoir quel niveau choisir ?",
      a: "Il faut lire le dossier : si un standard précis, un périmètre détaillé, des preuves ou une vérification sont imposés, une démarche plus complète peut être nécessaire. Sinon, un document de screening suffit souvent.",
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
        name: "Coût",
        item: pageUrl,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Combien coûte un bilan carbone pour une PME ?",
    url: pageUrl,
    description:
      "Prix d’un bilan carbone PME : différence entre screening et inventaire complet, et quel niveau choisir selon le dossier.",
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
    name: "Comment comparer le coût d’un bilan carbone PME",
    description:
      "Méthode simple pour distinguer besoin de screening et démarche complète, puis choisir le bon niveau de dépense.",
    totalTime: "PT10M",
    step: [
      {
        "@type": "HowToStep",
        name: "Identifier le niveau attendu",
        text: "Vérifiez si le dossier exige un standard, un périmètre détaillé, des preuves ou une vérification tierce.",
      },
      {
        "@type": "HowToStep",
        name: "Comparer screening et inventaire complet",
        text: "Un screening documentaire répond à une demande simple ; un inventaire complet implique une collecte plus lourde et un coût supérieur.",
      },
      {
        "@type": "HowToStep",
        name: "Choisir la réponse adaptée",
        text: "Évitez de financer une démarche complète si le dossier attend seulement un document CO₂e clair, daté et archivable.",
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
      id="bilan-carbone-pme-cout"
      data-section="bilan-carbone-pme-cout"
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
            Cluster FR • Coût • PME • Screening
          </p>

          <h1 className="mt-6 max-w-5xl text-3xl font-extrabold leading-[0.96] tracking-[-0.05em] text-[#0B3A63] md:text-5xl">
            Combien coûte
            <br />
            <span className="relative inline-block">
              un bilan carbone
              <span className="absolute bottom-1 left-0 h-3 w-full rounded-full bg-[#1FB6C1]/18" />
            </span>{" "}
            pour une PME ?
          </h1>

          <p className="mt-4 text-sm font-medium text-[#0B3A63]/75 md:text-base">
            Screening documentaire, inventaire complet, appel d’offres,
            référencement fournisseur et niveau de réponse réellement attendu.
          </p>

          <div className="mt-6 max-w-4xl space-y-4">
            <p className="text-lg leading-relaxed text-[#475569]">
              <strong className="text-[#0B3A63]">
                Le prix d’un bilan carbone PME dépend surtout du niveau réellement attendu.
              </strong>{" "}
              Dans beaucoup de cas, une PME ne cherche pas un inventaire complet :
              elle doit surtout répondre à un client, un appel d’offres, une banque,
              un assureur ou un référencement fournisseur.
            </p>

            <p className="text-base leading-relaxed text-[#64748B] md:text-lg">
              La vraie question n’est donc pas seulement{" "}
              <strong className="text-[#0B3A63]">“combien ça coûte ?”</strong>,
              mais surtout{" "}
              <strong className="text-[#0B3A63]">
                “quel niveau de réponse faut-il réellement financer ?”
              </strong>
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Point clé
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Le coût n’est pas lié au mot “bilan carbone”, mais au livrable
                réellement exigé dans le dossier.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Cas fréquent
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Pour beaucoup de PME, un document CO₂e clair, daté et archivable
                suffit à traiter la demande.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Erreur classique
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Financer une démarche lourde alors qu’un screening cohérent
                aurait suffi.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 md:p-8">
            <h2 className="text-xl font-extrabold leading-tight text-[#0B3A63] md:text-2xl">
              Réponse rapide
            </h2>

            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                screening documentaire :{" "}
                <strong className="text-[#0B3A63]">coût limité</strong>
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                inventaire complet :{" "}
                <strong className="text-[#0B3A63]">coût plus élevé</strong>
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                audit / accompagnement avancé :{" "}
                <strong className="text-[#0B3A63]">coût encore supérieur</strong>
              </li>
              <li className="rounded-2xl border border-[#0B3A63]/10 bg-white p-4 text-sm leading-relaxed text-[#475569]">
                pour beaucoup de PME, un document de screening suffit à traiter
                la demande
              </li>
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/fr/pricing/"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#1FB6C1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
            >
              Voir le prix Certif-Scope →
            </Link>

            <Link
              href="/fr/generate/"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#0B3A63] bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
            >
              Obtenir un document carbone
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
                <nav aria-label="Sommaire coût bilan carbone PME (mobile)" className="mt-4">
                  <ol className="ml-5 list-decimal space-y-2 text-sm">
                    <TocItem href="#why-variable" label="Pourquoi les prix varient" />
                    <TocItem href="#what-you-pay" label="Ce que l’on paie vraiment" />
                    <TocItem href="#levels" label="Les grands niveaux de coût" />
                    <TocItem href="#when-simple" label="Quand un document simple suffit" />
                    <TocItem href="#case-example" label="Exemple concret" />
                    <TocItem href="#mistakes" label="Erreurs fréquentes" />
                    <TocItem href="#faq" label="FAQ" />
                  </ol>
                </nav>
              </div>
            </section>

            <section id="why-variable" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                1) Pourquoi les prix d’un bilan carbone PME varient autant
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Les prix sont très différents parce que le marché regroupe sous le
                même mot “bilan carbone” des réalités très différentes. Entre un
                <strong className="text-[#0B3A63]"> document de screening</strong>{" "}
                et un <strong className="text-[#0B3A63]">inventaire complet</strong>,
                le temps, les données à collecter et le niveau d’accompagnement
                n’ont rien à voir.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
                Une PME qui cherche un prix doit donc commencer par clarifier
                l’usage réel :
              </p>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                <ul className="ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>réponse à un client ou à un donneur d’ordre ;</li>
                  <li>réponse à un appel d’offres ;</li>
                  <li>référencement fournisseur ;</li>
                  <li>banque / assurance ;</li>
                  <li>besoin interne de pilotage approfondi.</li>
                </ul>
              </div>
            </section>

            <section id="what-you-pay" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                2) Ce que l’on paie vraiment
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Le prix ne rémunère pas le mot “bilan carbone”, mais le travail
                nécessaire pour produire le livrable demandé.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Dans une démarche simple
                  </h3>
                  <ul className="mt-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569]">
                    <li>format standardisé ;</li>
                    <li>méthode cadrée ;</li>
                    <li>document stable ;</li>
                    <li>résultat agrégé ;</li>
                    <li>temps de traitement réduit.</li>
                  </ul>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Dans une démarche complète
                  </h3>
                  <ul className="mt-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569]">
                    <li>collecte de nombreuses données ;</li>
                    <li>travail sur le périmètre ;</li>
                    <li>hypothèses et arbitrages ;</li>
                    <li>allers-retours avec l’entreprise ;</li>
                    <li>livrable plus détaillé ;</li>
                    <li>éventuelle vérification supplémentaire.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="levels" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                3) Les grands niveaux de coût
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Pour une PME, il est plus utile de raisonner en{" "}
                <strong className="text-[#0B3A63]">niveaux de réponse</strong>{" "}
                qu’en “prix moyen du marché”.
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
                        Effort
                      </th>
                      <th className="p-4 text-left font-semibold text-[#0B3A63]">
                        Coût relatif
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#0B3A63]/8">
                    <tr>
                      <td className="p-4 text-[#475569]">Screening documentaire</td>
                      <td className="p-4 text-[#475569]">
                        Client, fournisseur, banque, AO générique
                      </td>
                      <td className="p-4 text-[#475569]">Faible à modéré</td>
                      <td className="p-4 text-[#475569]">Le plus bas</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-[#475569]">Inventaire complet</td>
                      <td className="p-4 text-[#475569]">
                        Démarche approfondie, pilotage, exigence formelle
                      </td>
                      <td className="p-4 text-[#475569]">Élevé</td>
                      <td className="p-4 text-[#475569]">Plus élevé</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-[#475569]">
                        Audit / accompagnement renforcé
                      </td>
                      <td className="p-4 text-[#475569]">
                        Besoin expert, cadre renforcé, vérification
                      </td>
                      <td className="p-4 text-[#475569]">Très élevé</td>
                      <td className="p-4 text-[#475569]">Le plus élevé</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6 md:p-8">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Ce que cela signifie pour une PME
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#475569] md:text-base">
                  Si le dossier attend seulement un indicateur CO₂e clair, daté et
                  archivable, il n’est pas rationnel de financer une démarche
                  complète conçue pour un autre usage.
                </p>
              </div>
            </section>

            <section id="when-simple" className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
                4) Quand un document simple suffit
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                Un document de screening suffit souvent quand la demande est
                générique et documentaire.
              </p>

              <div className="mt-6 rounded-[28px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-8">
                <h3 className="text-lg font-semibold text-[#0B3A63]">
                  Cas typiques
                </h3>
                <ul className="mt-5 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>questionnaire fournisseur ;</li>
                  <li>appel d’offres sans standard détaillé ;</li>
                  <li>demande d’un client pour compléter un dossier ;</li>
                  <li>banque ou assurance qui attend un indicateur simple ;</li>
                  <li>besoin d’un PDF réutilisable rapidement.</li>
                </ul>

                <div className="mt-6 rounded-2xl border border-[#1FB6C1]/18 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-5">
                  <p className="text-sm leading-relaxed text-[#475569] md:text-base">
                    <strong className="text-[#0B3A63]">
                      Principe de décision :
                    </strong>{" "}
                    ne comparez pas seulement des prix. Comparez le niveau de
                    réponse réellement nécessaire.
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
                  Une PME reçoit une demande d’un grand client : fournir un bilan
                  carbone pour compléter un référencement fournisseur.
                </p>

                <ul className="mt-5 ml-6 list-disc space-y-2 text-sm leading-relaxed text-[#475569] md:text-base">
                  <li>la PME pense d’abord devoir lancer une mission lourde ;</li>
                  <li>le dossier n’impose ni standard détaillé ni vérification tierce ;</li>
                  <li>le besoin réel est un document CO₂e lisible et archivable ;</li>
                  <li>un screening documentaire répond au besoin ;</li>
                  <li>la PME évite ainsi un coût inutilement élevé.</li>
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
                    Comparer des prix sans comparer les livrables réellement fournis.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Erreur n°2
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Croire qu’un prix plus élevé signifie automatiquement une
                    réponse plus adaptée au dossier.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Erreur n°3
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Lancer une mission complète alors qu’un document de screening
                    aurait suffi.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0B3A63]">
                    Erreur n°4
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    Choisir le moins cher sans vérifier si le document sera
                    compréhensible, daté, limité et réutilisable.
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
                  Payer le bon niveau de réponse, pas plus
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
                  Si le dossier relève du screening, Certif-Scope permet de produire
                  un document CO₂e indicatif, clair, standardisé et vérifiable,
                  sans passer par une démarche plus lourde que nécessaire.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/fr/pricing/"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100"
                  >
                    Voir le prix
                  </Link>
                  <Link
                    href="/fr/generate/"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    Obtenir un document carbone
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
                FAQ — Combien coûte un bilan carbone pour une PME ?
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
                <nav aria-label="Sommaire coût bilan carbone PME" className="mt-4">
                  <ol className="ml-5 list-decimal space-y-2 text-sm">
                    <TocItem href="#why-variable" label="Pourquoi les prix varient" />
                    <TocItem href="#what-you-pay" label="Ce que l’on paie vraiment" />
                    <TocItem href="#levels" label="Les grands niveaux de coût" />
                    <TocItem href="#when-simple" label="Quand un document simple suffit" />
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
                  Cette page traite le coût d’un bilan carbone PME sous un angle
                  pratique : comparer le niveau de réponse réellement attendu, et
                  ne pas financer une démarche plus lourde que nécessaire.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/fr/pricing/"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63] px-4 py-2 text-sm font-medium text-[#0B3A63] transition-colors hover:bg-[#0B3A63] hover:text-white"
                  >
                    Prix
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
                      href="/fr/bilan-carbone-pme/obligation/"
                    >
                      Bilan carbone PME obligatoire
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
