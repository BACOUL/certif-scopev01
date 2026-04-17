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
      q: "Le prix faible signifie-t-il que le document est inutile ?",
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
        text: "Évitez de payer pour une démarche complète si le dossier attend seulement un document CO₂e clair, daté et archivable.",
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
      id="bilan-carbone-pme-cout"
      data-section="bilan-carbone-pme-cout"
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
          Cluster FR — Bilan carbone PME : coût
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B3A63] mb-4 leading-tight tracking-tight">
          Combien coûte un bilan carbone pour une PME ?
        </h1>

        <div className="max-w-4xl space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>
              Le prix d’un bilan carbone PME dépend surtout du niveau réellement attendu.
            </strong>
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Dans beaucoup de cas, une PME ne cherche pas un inventaire complet :
            elle doit surtout répondre à un <strong>client</strong>, un{" "}
            <strong>appel d’offres</strong>, une <strong>banque</strong>, un{" "}
            <strong>assureur</strong> ou un <strong>référencement fournisseur</strong>.
          </p>

          <p className="text-base text-gray-600 leading-relaxed">
            La vraie question n’est donc pas seulement “combien ça coûte ?”, mais
            <strong> “quel niveau de réponse faut-il réellement financer ?”</strong>
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-6">
          <h2 className="text-lg font-semibold text-[#0B3A63] mb-3">
            Réponse rapide
          </h2>

          <ul className="list-disc ml-6 text-gray-700 space-y-2 leading-relaxed">
            <li>screening documentaire : coût limité ;</li>
            <li>inventaire complet : coût plus élevé ;</li>
            <li>audit / accompagnement avancé : coût encore supérieur ;</li>
            <li>pour beaucoup de PME, un document de screening suffit à traiter la demande.</li>
          </ul>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/fr/pricing/"
            className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#0B3A63] text-white hover:bg-[#0B3A63]/90 transition-colors font-semibold"
          >
            Voir le prix Certif-Scope →
          </Link>

          <Link
            href="/fr/generate/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Obtenir un document carbone
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
              Pourquoi les prix sont différents et comment savoir si une PME a
              vraiment besoin d’un budget important.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Point clé
            </p>
            <p className="text-gray-700 leading-relaxed">
              Le coût n’est pas lié au mot “bilan carbone”, mais au livrable
              réellement exigé.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Erreur fréquente
            </p>
            <p className="text-gray-700 leading-relaxed">
              Payer une démarche lourde alors qu’un document CO₂e simple et
              cadré aurait suffi pour le dossier.
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
              <nav aria-label="Sommaire coût bilan carbone PME (mobile)">
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <TocItem href="#why-variable" label="Pourquoi les prix varient" />
                  <TocItem href="#what-you-pay" label="Ce que l’on paie vraiment" />
                  <TocItem href="#levels" label="Les grands niveaux de coût" />
                  <TocItem href="#when-simple" label="Quand un document simple suffit" />
                  <TocItem href="#case-example" label="Exemple concret" />
                  <TocItem href="#mistakes" label="Erreurs fréquentes" />
                  <TocItem href="#links" label="Pages utiles" />
                  <TocItem href="#faq" label="FAQ" />
                </ol>
              </nav>
            </div>
          </section>

          <section id="why-variable" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              1) Pourquoi les prix d’un bilan carbone PME varient autant
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Les prix sont très différents parce que le marché regroupe sous le
              même mot “bilan carbone” des réalités très différentes. Entre un
              <strong> document de screening</strong> et un{" "}
              <strong>inventaire complet</strong>, le temps, les données à
              collecter et le niveau d’accompagnement n’ont rien à voir.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Une PME qui cherche un prix doit donc commencer par clarifier
              l’usage réel :
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>réponse à un client ou à un donneur d’ordre ;</li>
                <li>réponse à un appel d’offres ;</li>
                <li>référencement fournisseur ;</li>
                <li>banque / assurance ;</li>
                <li>besoin interne de pilotage approfondi.</li>
              </ul>
            </div>
          </section>

          <section id="what-you-pay" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2) Ce que l’on paie vraiment
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Le prix ne rémunère pas le mot “bilan carbone”, mais le travail
              nécessaire pour produire le livrable demandé.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Dans une démarche simple
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>format standardisé ;</li>
                  <li>méthode cadrée ;</li>
                  <li>document stable ;</li>
                  <li>résultat agrégé ;</li>
                  <li>temps de traitement réduit.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Dans une démarche complète
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
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
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3) Les grands niveaux de coût
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Pour une PME, il est plus utile de raisonner en{" "}
              <strong>niveaux de réponse</strong> qu’en “prix moyen du marché”.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
              <table className="min-w-[720px] w-full text-sm">
                <thead>
                  <tr className="bg-[#F8FAFC]">
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">
                      Niveau
                    </th>
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">
                      Usage
                    </th>
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">
                      Effort
                    </th>
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">
                      Coût relatif
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-4 text-gray-700">Screening documentaire</td>
                    <td className="p-4 text-gray-700">
                      Client, fournisseur, banque, AO générique
                    </td>
                    <td className="p-4 text-gray-700">Faible à modéré</td>
                    <td className="p-4 text-gray-700">Le plus bas</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-700">Inventaire complet</td>
                    <td className="p-4 text-gray-700">
                      Démarche approfondie, pilotage, exigence formelle
                    </td>
                    <td className="p-4 text-gray-700">Élevé</td>
                    <td className="p-4 text-gray-700">Plus élevé</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-700">
                      Audit / accompagnement renforcé
                    </td>
                    <td className="p-4 text-gray-700">
                      Besoin expert, cadre renforcé, vérification
                    </td>
                    <td className="p-4 text-gray-700">Très élevé</td>
                    <td className="p-4 text-gray-700">Le plus élevé</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Ce que cela signifie pour une PME
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Si le dossier attend seulement un indicateur CO₂e clair, daté et
                archivable, il n’est pas rationnel de financer une démarche
                complète conçue pour un autre usage.
              </p>
            </div>
          </section>

          <section id="when-simple" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4) Quand un document simple suffit
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Un document de screening suffit souvent quand la demande est
              générique et documentaire.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Cas typiques
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>questionnaire fournisseur ;</li>
                <li>appel d’offres sans standard détaillé ;</li>
                <li>demande d’un client pour compléter un dossier ;</li>
                <li>banque ou assurance qui attend un indicateur simple ;</li>
                <li>besoin d’un PDF réutilisable rapidement.</li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-[#0B3A63] p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">
                Principe de décision
              </h3>
              <p className="text-white/90 leading-relaxed">
                Ne comparez pas seulement des prix : comparez le niveau de
                réponse réellement nécessaire.
              </p>
            </div>
          </section>

          <section id="case-example" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5) Exemple concret
            </h2>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Une PME reçoit une demande d’un grand client : fournir un bilan
                carbone pour compléter un référencement fournisseur.
              </p>

              <ul className="list-disc ml-6 text-gray-700 space-y-2 leading-relaxed">
                <li>la PME pense d’abord devoir lancer une mission lourde ;</li>
                <li>le dossier n’impose ni standard détaillé ni vérification tierce ;</li>
                <li>le besoin réel est un document CO₂e lisible et archivable ;</li>
                <li>un screening documentaire répond au besoin ;</li>
                <li>la PME évite ainsi un coût inutilement élevé.</li>
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
                  Comparer des prix sans comparer les livrables réellement fournis.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Erreur n°2
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Croire qu’un prix plus élevé signifie automatiquement une
                  réponse plus adaptée au dossier.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Erreur n°3
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Lancer une mission complète alors qu’un document de screening
                  aurait suffi.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Erreur n°4
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Choisir le moins cher sans vérifier si le document sera
                  compréhensible, daté, limité et réutilisable.
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
              </ul>
            </div>
          </section>

          <section id="cta" className="pt-2 scroll-mt-24">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Payer le bon niveau de réponse, pas plus
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Si le dossier relève du screening, Certif-Scope permet de produire
                un document CO₂e indicatif, clair, standardisé et vérifiable,
                sans passer par une démarche plus lourde que nécessaire.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/fr/pricing/"
                  className="inline-block text-sm px-5 py-2.5 rounded-md bg-white text-[#0B3A63] hover:bg-gray-100 transition-colors font-semibold"
                >
                  Voir le prix
                </Link>
                <Link
                  href="/fr/generate/"
                  className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
                >
                  Obtenir un document carbone
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
              FAQ — Combien coûte un bilan carbone pour une PME ?
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
              <nav aria-label="Sommaire coût bilan carbone PME">
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <TocItem href="#why-variable" label="Pourquoi les prix varient" />
                  <TocItem href="#what-you-pay" label="Ce que l’on paie vraiment" />
                  <TocItem href="#levels" label="Les grands niveaux de coût" />
                  <TocItem href="#when-simple" label="Quand un document simple suffit" />
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
                Cette page traite le coût d’un bilan carbone PME sous un angle
                pratique : comparer le niveau de réponse réellement attendu, et ne
                pas financer une démarche plus lourde que nécessaire.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/fr/pricing/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Prix
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
