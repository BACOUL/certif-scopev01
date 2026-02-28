// PATH: src/app/fr/scope-1-2-3-explication/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — FR
   Objectif : capter "scope 1 2 3" + intention PME (quoi répondre)
====================================================== */

export const metadata: Metadata = {
  title: "Scopes 1, 2, 3 : explication simple (PME) + quoi répondre | Certif-Scope",
  description:
    "Scopes 1, 2, 3 : comprendre la différence, identifier ce qui est réellement demandé (screening vs inventaire complet) et savoir quoi répondre en PME. Guide clair, dossier-ready.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/scope-1-2-3-explication",
    languages: {
      fr: "https://www.certif-scope.com/fr/scope-1-2-3-explication",
    },
  },
  openGraph: {
    title: "Scopes 1, 2, 3 : explication simple (PME) + quoi répondre",
    description:
      "Guide pratique : scopes 1/2/3, différence screening vs inventaire complet, et réponse sûre pour appels d’offres, fournisseurs, banques/assurances.",
    url: "https://www.certif-scope.com/fr/scope-1-2-3-explication",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function Scopes123ExplanationFR() {
  const pageUrl = "https://www.certif-scope.com/fr/scope-1-2-3-explication";

  const faq = [
    {
      q: "Scopes 1/2/3 : est-ce obligatoire pour une PME ?",
      a: "Le plus souvent, non. Beaucoup de demandes “scopes” proviennent d’un questionnaire fournisseur ou d’un screening ESG. Une ventilation complète par scopes n’est requise que si l’exigence est explicite (cadre, périmètre, méthode, niveau d’assurance).",
    },
    {
      q: "Pourquoi on me demande surtout le Scope 3 ?",
      a: "Parce qu’il couvre la majorité des émissions dans de nombreux secteurs : achats, sous-traitance, transport, déplacements, services, etc. Les grandes entreprises collectent des éléments dans leur chaîne de valeur, ce qui remonte vers les PME.",
    },
    {
      q: "Un résultat CO₂e agrégé peut-il suffire ?",
      a: "Souvent oui, si l’objectif est le screening (comparaison, archivage dossier). La condition : annoncer clairement la méthode, le périmètre, et les limites (non audit, non inventaire complet, non CSRD/ESRS).",
    },
    {
      q: "Certif-Scope fournit-il un Scope 1/2/3 détaillé ?",
      a: "Non. Certif-Scope produit une estimation CO₂e indicative spend-based à partir des dépenses, avec un résultat agrégé et des limites explicites. Cela ne remplace pas un inventaire complet ventilé par scopes.",
    },
    {
      q: "Que répondre si le cahier des charges exige GHG Protocol + scopes ?",
      a: "Il faut vérifier si l’exigence impose un inventaire organisationnel complet (données d’activité, périmètres, hypothèses, preuves). Dans ce cas, une attestation indicative n’est pas adaptée : il faut suivre l’exigence formelle, ou demander une clarification écrite sur le niveau attendu.",
    },
  ];

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil (FR)",
        item: "https://www.certif-scope.com/fr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bilan carbone PME",
        item: "https://www.certif-scope.com/fr/bilan-carbone-pme",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Scopes 1/2/3 : explication",
        item: pageUrl,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Scopes 1, 2, 3 : explication simple (PME) + quoi répondre",
    url: pageUrl,
    description:
      "Guide FR : scopes 1/2/3, différence screening vs inventaire complet, et réponse sûre en PME (fournisseurs, appels d’offres, banques, assurances).",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com",
    },
    breadcrumb: jsonLdBreadcrumb,
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment répondre à une demande de scopes 1/2/3 quand on est une PME",
    description:
      "Process simple pour éviter la confusion : identifier le niveau attendu (screening vs inventaire complet) puis fournir un document cohérent.",
    totalTime: "PT10M",
    step: [
      {
        "@type": "HowToStep",
        name: "Lire l’exigence : screening ou inventaire ?",
        text: "Cherchez un référentiel imposé, un périmètre, une ventilation par scopes, des preuves et un niveau d’assurance. Sans ces éléments, la demande est souvent du screening.",
      },
      {
        "@type": "HowToStep",
        name: "Répondre au bon niveau",
        text: "Pour un screening, fournir un indicateur CO₂e documenté, daté, avec méthode et limites explicites. Pour un inventaire complet, suivre le cahier des charges.",
      },
      {
        "@type": "HowToStep",
        name: "Éviter l’erreur de sur-promesse",
        text: "Ne pas présenter une estimation indicative comme un inventaire complet. Demander une clarification écrite si la demande est ambiguë.",
      },
    ],
  };

  const TocItem = ({ href, label }: { href: string; label: string }) => (
    <li>
      <a className="text-[#0B3A63] hover:underline underline-offset-4" href={href}>
        {label}
      </a>
    </li>
  );

  return (
    <section
      id="scope-1-2-3-explication"
      data-section="scope-1-2-3-explication"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD */}
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

      {/* TOP */}
      <div id="top" />

      {/* HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Guide PME — Scopes 1/2/3 : comprendre et répondre sans se piéger
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B3A63] mb-6 leading-tight">
          Scopes 1, 2, 3 : explication simple (PME) <br />
          <span className="text-[#0B3A63]/90">et quoi répondre quand on vous les demande</span>
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Beaucoup de demandes “bilan carbone” mentionnent les <strong>scopes 1/2/3</strong>.
          Le point clé : distinguer un <strong>screening</strong> (document archivable, indicateur comparable)
          d’un <strong>inventaire complet</strong> (collecte de données d’activité, périmètres, hypothèses, preuves).
          Cette page te donne une lecture claire et une réponse sûre.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/fr/bilan-carbone-pme"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Retour page pilier (bilan carbone PME)
          </Link>

          <Link
            href="/fr/generate"
            className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#15B097] text-white hover:bg-[#12967f] transition-colors font-semibold"
          >
            Générer une attestation (screening) →
          </Link>

          <Link
            href="/fr/difference-bilan-carbone-attestation"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Différence : attestation vs bilan complet
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">Objectif</p>
            <p className="text-gray-700 leading-relaxed">
              Comprendre scopes 1/2/3 et répondre au niveau attendu, sans sur-promesse.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">Ce que tu évites</p>
            <p className="text-gray-700 leading-relaxed">
              Confondre “scope” (structure d’inventaire) avec “document de screening” (dossier-ready).
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">Quand escalader</p>
            <p className="text-gray-700 leading-relaxed">
              Si un standard, un périmètre, une preuve ou une assurance sont explicitement exigés.
            </p>
          </div>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* MAIN */}
        <div className="lg:col-span-8 space-y-14">
          {/* MOBILE TOC */}
          <section className="lg:hidden">
            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">Sommaire</p>
              <nav aria-label="Sommaire scopes 1/2/3 (mobile)">
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <TocItem href="#definition" label="Définition : scopes en une phrase" />
                  <TocItem href="#scope123" label="Scope 1 / 2 / 3 (exemples PME)" />
                  <TocItem href="#screening-vs-inventaire" label="Screening vs inventaire complet" />
                  <TocItem href="#what-to-answer" label="Quoi répondre (templates sûrs)" />
                  <TocItem href="#red-flags" label="Signaux : exigence formelle" />
                  <TocItem href="#scenarios" label="Cas concrets (AO, fournisseur, banque)" />
                  <TocItem href="#faq" label="FAQ" />
                </ol>
              </nav>
            </div>
          </section>

          {/* 1 */}
          <section id="definition" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              1) Définition : scopes 1/2/3 en une phrase
            </h2>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <p className="text-gray-700 leading-relaxed">
                Les <strong>scopes 1/2/3</strong> sont une manière de <strong>structurer un inventaire</strong>
                d’émissions (CO₂e) : <strong>direct</strong> (Scope 1), <strong>énergie achetée</strong> (Scope 2),
                et <strong>chaîne de valeur</strong> (Scope 3).
              </p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Important : une demande qui cite “scopes” ne signifie pas automatiquement qu’un inventaire complet est exigé.
                Beaucoup de demandes restent du <strong>screening</strong> (dossier, comparabilité, archivage).
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">Référence (cadre)</h3>
              <p className="text-gray-700 leading-relaxed">
                Les scopes sont issus de la logique GHG Protocol (cadre international) et sont souvent utilisés dans les
                workflows achats, ESG, banque/assurance. Leur présence dans un questionnaire est fréquente, même sans exigence de vérification.
              </p>
            </div>
          </section>

          {/* 2 */}
          <section id="scope123" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2) Scope 1 / 2 / 3 : exemples concrets (PME)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">Scope 1</p>
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">Émissions directes</h3>
                <ul className="list-disc ml-5 text-gray-700 space-y-2">
                  <li>chauffage au gaz / fioul</li>
                  <li>véhicules détenus (carburant)</li>
                  <li>process internes (cas industriels)</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">Scope 2</p>
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">Énergie achetée</h3>
                <ul className="list-disc ml-5 text-gray-700 space-y-2">
                  <li>électricité des bureaux / sites</li>
                  <li>chaleur/vapeur achetée (si applicable)</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">Scope 3</p>
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">Chaîne de valeur</h3>
                <ul className="list-disc ml-5 text-gray-700 space-y-2">
                  <li>achats & sous-traitance</li>
                  <li>transport & logistique</li>
                  <li>déplacements pro</li>
                  <li>services (IT, conseil, etc.)</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
              <table className="min-w-[760px] w-full text-sm">
                <thead>
                  <tr className="bg-[#F8FAFC]">
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">Ce qui est demandé</th>
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">Ce que ça implique</th>
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">Risque PME</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-4 text-gray-700">“Scopes 1/2/3 (oui/non)”</td>
                    <td className="p-4 text-gray-700">Souvent un questionnaire de screening</td>
                    <td className="p-4 text-gray-700">Sur-interpréter comme un audit exigé</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-700">“Détail par scopes + preuves”</td>
                    <td className="p-4 text-gray-700">Inventaire structuré, collecte d’activité</td>
                    <td className="p-4 text-gray-700">Sous-estimer l’effort et le délai</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-700">“GHG Protocol + périmètre + assurance”</td>
                    <td className="p-4 text-gray-700">Exigence formelle (cadre explicite)</td>
                    <td className="p-4 text-gray-700">Fournir un doc non conforme au cahier des charges</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3 */}
          <section id="screening-vs-inventaire" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3) Screening vs inventaire complet : la règle simple
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Les scopes structurent un inventaire. Mais la plupart des demandes reçues par une PME sont orientées
              <strong> dossier</strong> : un indicateur, une date, une méthode, des limites, et un document archivable.
              Pour décider, cherche des signaux d’exigence formelle.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Screening (le plus fréquent)
                </h3>
                <ul className="list-disc ml-6 text-green-900/90 space-y-2">
                  <li>objectif : comparabilité / archivage</li>
                  <li>format : document simple + limites</li>
                  <li>pas de preuves exhaustives</li>
                  <li>souvent “scope” cité sans détails</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  Inventaire complet (moins fréquent)
                </h3>
                <ul className="list-disc ml-6 text-red-900/90 space-y-2">
                  <li>référentiel imposé + périmètre détaillé</li>
                  <li>collecte de données d’activité</li>
                  <li>justificatifs / hypothèses</li>
                  <li>vérification / assurance demandée</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-[#0B3A63] p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Phrase anti-erreur</h3>
              <p className="text-white/90 leading-relaxed">
                Si le cahier des charges n’impose pas explicitement une méthode + un périmètre + des preuves, traite la demande comme du screening,
                et réponds avec un document clair, daté, méthode + limites visibles.
              </p>
            </div>
          </section>

          {/* 4 */}
          <section id="what-to-answer" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4) Quoi répondre : templates sûrs (PME)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              L’objectif est d’être <strong>honnête</strong>, <strong>cadré</strong> et <strong>dossier-ready</strong>.
              Tu évites deux erreurs : “ne rien fournir” (blocage) et “sur-promettre” (risque contractuel).
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Template A — demande floue (screening)
              </h3>
              <div className="rounded-xl border border-gray-200 bg-[#F8FAFC] p-5">
                <p className="text-gray-700 leading-relaxed">
                  “Nous fournissons un indicateur CO₂e <strong>indicatif</strong> pour l’année [AAAA], destiné au screening.
                  La méthode est déclarée, les limites sont explicites (non audit, non inventaire complet, non CSRD/ESRS),
                  et le document est daté et archivable.”
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/fr/generate"
                  className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#15B097] text-white hover:bg-[#12967f] transition-colors font-semibold"
                >
                  Générer une attestation (screening) →
                </Link>
                <Link
                  href="/fr/verify"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Vérifier un document
                </Link>
                <Link
                  href="/fr/limites-du-modele"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Limites du modèle
                </Link>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Template B — on te demande “scopes”
              </h3>

              <div className="rounded-xl border border-gray-200 bg-[#F8FAFC] p-5">
                <p className="text-gray-700 leading-relaxed">
                  “La demande mentionne scopes 1/2/3. Pouvez-vous confirmer si un <strong>inventaire complet</strong> ventilé par scopes est exigé
                  (périmètre, méthode, preuves, niveau d’assurance), ou si un <strong>document de screening</strong> avec un résultat CO₂e agrégé,
                  méthode + limites explicites est acceptable à ce stade ?”
                </p>
              </div>

              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                Ce template te protège : tu demandes une clarification écrite, sans bloquer la réponse.
              </p>
            </div>
          </section>

          {/* 5 */}
          <section id="red-flags" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5) Signaux : quand c’est une exigence formelle (et pas du screening)
            </h2>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Check-list “exigence formelle”
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>référentiel imposé (méthode, norme, cadre)</li>
                <li>périmètre explicitement défini (organisation, sites, frontières)</li>
                <li>attente de preuves / justificatifs (factures énergie, km, etc.)</li>
                <li>niveau d’assurance / vérification tiers demandé</li>
                <li>livrable précis (format, annexes, table de calcul, protocole)</li>
              </ul>

              <div className="mt-5 border-t border-gray-200 pt-5">
                <p className="text-gray-700 leading-relaxed">
                  Si ces éléments apparaissent, tu n’es plus dans un “simple scope”. Tu es dans une exigence d’inventaire.
                  Dans ce cas, une estimation indicative agrégée ne doit pas être présentée comme un inventaire complet.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/fr/product/compliance"
                    className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                  >
                    Conformité & périmètre (Certif-Scope)
                  </Link>
                  <Link
                    href="/fr/difference-bilan-carbone-attestation"
                    className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Clarifier la différence (important)
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 6 */}
          <section id="scenarios" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              6) Cas concrets : fournisseur, appel d’offres, banque/assurance
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Même vocabulaire (“scopes”), objectifs différents. Identifier le scénario permet d’éviter les réponses incohérentes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-2">
                  Référencement fournisseur
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Souvent : questionnaire standard + archivage interne. Priorité : fournir un document clair (méthode, limites, date).
                </p>
                <div className="mt-4">
                  <Link className="underline text-[#0B3A63]" href="/fr/bilan-carbone-fournisseur">
                    Aller plus loin : bilan carbone fournisseur →
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-2">
                  Appel d’offres
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Souvent : critère de notation (comparabilité). Si aucun référentiel imposé, un document de screening est généralement accepté.
                </p>
                <div className="mt-4">
                  <Link className="underline text-[#0B3A63]" href="/fr/bilan-carbone-appel-offres">
                    Aller plus loin : appel d’offres →
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-2">
                  Banque / assurance (screening ESG)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Souvent : documentation minimale (date, méthode, limites) pour un screening interne et l’archivage.
                </p>
                <div className="mt-4">
                  <Link
                    className="underline text-[#0B3A63]"
                    href="/fr/why-companies-ask/bilan-carbone-banque-assurance"
                  >
                    Aller plus loin : banque / assurance →
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-2">
                  Quand tu dois “dire non”
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Si on exige une ventilation complète par scopes + preuves + assurance, tu dois l’indiquer clairement et demander une clarification
                  sur le niveau attendu, ou aligner une démarche complète.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="pt-2 scroll-mt-24">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Répondre “scopes 1/2/3” sans se piéger : document clair, limites visibles
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Si ta demande est du screening, l’objectif est un document archivable : résultat CO₂e, date, méthode, limites explicites,
                et vérification. Si l’exigence est formelle (périmètre + preuves + assurance), il faut suivre le cahier des charges.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/fr/generate"
                  className="inline-block text-sm px-5 py-2.5 rounded-md bg-white text-[#0B3A63] hover:bg-gray-100 transition-colors font-semibold"
                >
                  Générer mon attestation (screening)
                </Link>
                <Link
                  href="/fr/pricing"
                  className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
                >
                  Voir le prix
                </Link>
                <Link
                  href="/fr/verify"
                  className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
                >
                  Vérifier un document
                </Link>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/fr/bilan-carbone-pme"
                className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
              >
                Retour page pilier
              </Link>
              <a
                href="#top"
                className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Haut de page
              </a>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              FAQ — Scopes 1/2/3 (PME)
            </h2>

            <div className="space-y-6">
              {faq.map((item, idx) => (
                <div
                  key={`${idx}-${item.q}`}
                  className="rounded-2xl border border-gray-200 bg-white p-6"
                >
                  <h3 className="font-semibold text-[#0B3A63] mb-2">{item.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* SIDEBAR */}
        <aside className="lg:col-span-4">
          <div className="sticky top-6 space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">Sommaire</p>
              <nav aria-label="Sommaire scopes 1/2/3">
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <TocItem href="#definition" label="Définition" />
                  <TocItem href="#scope123" label="Scope 1 / 2 / 3" />
                  <TocItem href="#screening-vs-inventaire" label="Screening vs inventaire" />
                  <TocItem href="#what-to-answer" label="Quoi répondre" />
                  <TocItem href="#red-flags" label="Signaux d’exigence" />
                  <TocItem href="#scenarios" label="Cas concrets" />
                  <TocItem href="#faq" label="FAQ" />
                </ol>
              </nav>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">Rappel de périmètre</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Cette page aide à répondre aux demandes “scopes 1/2/3” dans des contextes de screening (achats, AO, banque/assurance).
                Certif-Scope produit une estimation CO₂e indicative spend-based (dépenses × facteurs) avec un résultat agrégé et des limites explicites.
                Ce n’est pas un inventaire complet ventilé par scopes.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/fr/limites-du-modele"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Limites du modèle
                </Link>
                <Link
                  href="/fr/product/compliance"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Conformité & périmètre
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">Pages liées (cluster FR)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <Link className="underline" href="/fr/bilan-carbone-pme">
                    Page pilier : bilan carbone PME
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/fr/bilan-carbone-fournisseur">
                    Bilan carbone fournisseur
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/fr/bilan-carbone-appel-offres">
                    Bilan carbone en appel d’offres
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/fr/difference-bilan-carbone-attestation">
                    Différence : attestation vs bilan complet
                  </Link>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">Accès rapide</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/fr"
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
