// PATH: src/app/fr/bilan-carbone-pme/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — PAGE PILIER FR (FR-FIRST)
   Objectif : dominer "bilan carbone PME" + intentions associées
====================================================== */

export const metadata: Metadata = {
  title:
    "Bilan carbone PME : est-ce obligatoire et que fournir quand on vous le demande ? | Certif-Scope",
  description:
    "Bilan carbone PME (France) : est-ce obligatoire, que fournir quand un client, un appel d’offres, une banque ou un assureur vous le demande, et comment répondre sans audit complet. Guide clair + checklist + FAQ.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/bilan-carbone-pme/",
    languages: {
      fr: "https://www.certif-scope.com/fr/bilan-carbone-pme/",
    },
  },
  openGraph: {
    title:
      "Bilan carbone PME : est-ce obligatoire et que fournir quand on vous le demande ?",
    description:
      "Client, appel d’offres, banque, assurance : ce qu’une PME doit réellement fournir quand on lui demande un bilan carbone, sans surdimensionner la réponse.",
    url: "https://www.certif-scope.com/fr/bilan-carbone-pme/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

/* ======================================================
   PAGE PILIER FR — "BILAN CARBONE PME"
   Design: institutionnel premium, palette logo strict
   Palette: Bleu #0B3A63 (dominant) / Turquoise #15B097 (accent) / Fond #F8FAFC
====================================================== */

export default function BilanCarbonePMEPageFR() {
  const pageUrl = "https://www.certif-scope.com/fr/bilan-carbone-pme/";

  const faq = [
    {
      q: "Qu’est-ce qu’un bilan carbone pour une PME ?",
      a: "Un bilan carbone est une estimation des émissions de gaz à effet de serre (CO₂e) d’une entreprise sur une période (souvent une année). En PME, une demande “bilan carbone” vise fréquemment un document de screening (indicateur + PDF cadré) plutôt qu’un inventaire complet détaillé.",
    },
    {
      q: "Bilan carbone PME : est-ce obligatoire en France ?",
      a: "Pour la majorité des PME, non. Des obligations existent pour des structures spécifiques, mais la plupart des demandes reçues par les PME sont contractuelles ou documentaires (clients, appels d’offres, banque/assurance).",
    },
    {
      q: "Que fournir quand on n’a pas de bilan carbone complet ?",
      a: "Un document simple et cadré suffit souvent. Il doit contenir un résultat CO₂e agrégé (indicatif), l’année couverte, la méthode déclarée, les limites (non audit, non inventaire complet, non CSRD/ESRS) et un moyen de vérification (ID + contrôle public).",
    },
    {
      q: "Quelle est la différence entre estimation indicative et bilan carbone complet ?",
      a: "Une estimation indicative sert à répondre vite à une demande de screening avec un résultat agrégé et des limites explicites. Un bilan carbone complet vise un inventaire détaillé (données d’activité, périmètres, hypothèses) et peut exiger un accompagnement spécialisé et/ou une vérification.",
    },
    {
      q: "Est-ce acceptable pour un appel d’offres ou un donneur d’ordre ?",
      a: "Souvent oui, si la demande vise un indicateur de screening et si le document annonce clairement son périmètre et ses limites. Si l’appel d’offres impose explicitement un standard, un périmètre ou une vérification, il faut suivre ce cadre.",
    },
    {
      q: "Que faire si on me demande Scope 1 / 2 / 3 ?",
      a: "Clarifiez d’abord si l’objectif est du screening ou un inventaire complet. Certif-Scope produit une estimation indicative spend-based (à partir des dépenses) avec un résultat agrégé : cela ne remplace pas un inventaire complet ventilé par scopes.",
    },
    {
      q: "Combien coûte un bilan carbone pour une PME ?",
      a: "Cela dépend du niveau attendu. Un inventaire complet (collecte de données d’activité, périmètres, hypothèses) est plus long et plus coûteux qu’un document de screening. Certif-Scope vise une réponse rapide de type screening avec un prix fixe, sans abonnement.",
    },
    {
      q: "Quelles données sont nécessaires pour une estimation indicative ?",
      a: "Des dépenses annuelles par catégories suffisent. Aucune donnée d’activité (kWh, km, litres) n’est requise pour ce modèle spend-based.",
    },
    {
      q: "Comment la confidentialité est-elle assurée ?",
      a: "Les calculs sont effectués localement dans le navigateur. Les dépenses détaillées ne sont pas envoyées. Seuls le résultat CO₂e final agrégé et des métadonnées non sensibles servent à émettre l’attestation.",
    },
    {
      q: "Le document est-il vérifiable par un tiers ?",
      a: "Oui. Le document est conçu pour être contrôlé indépendamment via un identifiant et un mécanisme de vérification public, sans compte et sans accès privé.",
    },
    {
      q: "Quelle est la validité d’une attestation ?",
      a: "Une attestation est généralement liée à une année donnée. Il est recommandé d’émettre une attestation par année couverte et de réémettre si l’année change ou si les données évoluent.",
    },
    {
      q: "Puis-je réémettre si je perds le PDF ?",
      a: "Oui, une réémission est possible. Le modèle est conçu pour ne pas stocker vos documents : la responsabilité de conservation du PDF reste côté entreprise.",
    },
  ];

  /* ---------------- JSON-LD ---------------- */

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
      "Bilan carbone PME (France) : est-ce obligatoire, que fournir quand on vous le demande, et comment répondre proprement sans audit complet. Guide clair + checklist + FAQ.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com",
    },
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Indicateur CO₂e indicatif (spend-based) pour PME",
    provider: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com",
    },
    areaServed: "FR",
    serviceType: "Indicateur CO₂e indicatif (screening)",
    description:
      "Service de génération d’un indicateur CO₂e indicatif (modèle spend-based) à partir des dépenses annuelles, destiné aux workflows achats, banque, assurance et screening ESG. Ce service ne constitue pas un audit, ni un inventaire complet, ni un reporting CSRD/ESRS.",
    offers: {
      "@type": "Offer",
      price: "89",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://www.certif-scope.com/fr/pricing/",
    },
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment répondre à une demande de bilan carbone quand on est une PME",
    description:
      "Process en 3 étapes pour produire un indicateur CO₂e indicatif à partir des dépenses annuelles, dans un format standardisé et vérifiable.",
    totalTime: "PT10M",
    step: [
      {
        "@type": "HowToStep",
        name: "Renseigner les dépenses annuelles",
        text: "Indiquez vos dépenses annuelles par catégories. Aucune donnée d’activité (kWh, km, litres) n’est requise pour ce modèle.",
      },
      {
        "@type": "HowToStep",
        name: "Calcul automatique spend-based",
        text: "Le modèle spend-based applique une formule (dépenses € × facteur d’émission) pour produire un résultat CO₂e agrégé.",
      },
      {
        "@type": "HowToStep",
        name: "Télécharger le document standardisé",
        text: "Téléchargez un PDF standardisé contenant le résultat CO₂e agrégé, l’année couverte, la méthode, les limites et les informations de vérification.",
      },
    ],
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

  const TocItem = ({ href, label }: { href: string; label: string }) => (
    <li>
      <a
        className="text-[#0B3A63] hover:underline underline-offset-4"
        href={href}
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
      id="bilan-carbone-pme"
      data-section="bilan-carbone-pme"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — Organization + WebPage + Breadcrumb + Service + HowTo + FAQ */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Page de référence (France) — Bilan carbone PME : obligation, coût et
          quoi fournir quand on vous le demande
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B3A63] mb-4 leading-tight tracking-tight">
          Bilan carbone PME : est-ce obligatoire et que fournir quand on vous le
          demande ?
        </h1>

        {/* SNIPPET-READY QUICK ANSWER */}
        <div className="max-w-4xl space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>
              On vous demande un bilan carbone pour un client, un appel d’offres,
              une banque ou un référencement fournisseur ?
            </strong>
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Pour la majorité des PME, le bilan carbone n’est pas une obligation
            générale. En pratique, la demande vise souvent un{" "}
            <strong>document de screening</strong> : un{" "}
            <strong>indicateur CO₂e</strong>, une{" "}
            <strong>méthode déclarée</strong>, des{" "}
            <strong>limites explicites</strong> et un{" "}
            <strong>format PDF utilisable dans un dossier</strong>.
          </p>

          <p className="text-base text-gray-600 leading-relaxed">
            Cette page explique ce qu’il faut réellement fournir, quand un
            document simple suffit, et dans quels cas un inventaire complet est
            nécessaire.
          </p>
        </div>

        {/* REAL-LIFE SITUATION BLOCK */}
        <div className="mt-6 rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-6">
          <h2 className="text-lg font-semibold text-[#0B3A63] mb-3">
            Dans la pratique, la demande ressemble souvent à ça
          </h2>

          <ul className="list-disc ml-6 text-gray-700 space-y-2 leading-relaxed">
            <li>
              un client demande un bilan carbone pour continuer un référencement
              fournisseur ;
            </li>
            <li>
              un appel d’offres mentionne un critère environnemental ou CO₂ ;
            </li>
            <li>
              une banque ou un assureur demande un indicateur ESG simple ;
            </li>
            <li>
              la PME n’a aucun document prêt et ne sait pas si un audit complet
              est réellement exigé.
            </li>
          </ul>

          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Dans ces cas, la vraie question n’est pas seulement{" "}
            <strong>“est-ce obligatoire ?”</strong>, mais surtout
            <strong> “qu’est-ce qu’il faut fournir maintenant ?”</strong>
          </p>
        </div>

        {/* QUICK TABLE */}
        <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table className="min-w-[720px] w-full text-sm">
            <thead>
              <tr className="bg-[#F8FAFC]">
                <th className="text-left p-4 font-semibold text-[#0B3A63]">
                  Question
                </th>
                <th className="text-left p-4 font-semibold text-[#0B3A63]">
                  Réponse rapide (PME)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-4 text-gray-700">Est-ce obligatoire ?</td>
                <td className="p-4 text-gray-700">
                  Généralement non, sauf cas spécifiques. La plupart des demandes
                  sont contractuelles (dossier fournisseur / appel d’offres /
                  banque).
                </td>
              </tr>
              <tr>
                <td className="p-4 text-gray-700">Combien ça coûte ?</td>
                <td className="p-4 text-gray-700">
                  Très variable selon le niveau : screening (document court) vs
                  inventaire complet (collecte détaillée). Certif-Scope = prix
                  fixe.
                </td>
              </tr>
              <tr>
                <td className="p-4 text-gray-700">Combien de temps ?</td>
                <td className="p-4 text-gray-700">
                  Screening : rapide. Inventaire complet : semaines ou mois
                  selon périmètre et données.
                </td>
              </tr>
              <tr>
                <td className="p-4 text-gray-700">Que faut-il fournir ?</td>
                <td className="p-4 text-gray-700">
                  Résultat CO₂e agrégé + année + méthode + limites + document
                  PDF + vérification (ID).
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/fr/generate/"
            className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#0B3A63] text-white hover:bg-[#0B3A63]/90 transition-colors font-semibold"
          >
            Obtenir un document carbone utilisable →
          </Link>

          <Link
            href="/fr/pricing/"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Voir le prix
          </Link>

          <Link
            href="/verify"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Vérifier un document
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Pour qui ?
            </p>
            <p className="text-gray-700 leading-relaxed">
              PME qui doivent répondre vite à une demande CO₂e (onboarding
              fournisseur, appel d’offres, banque/assurance).
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Ce que c’est
            </p>
            <p className="text-gray-700 leading-relaxed">
              Un document CO₂e <strong>indicatif</strong> (spend-based),
              standardisé, réutilisable, avec limites explicites.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
              Ce que ce n’est pas
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ni audit, ni inventaire complet, ni reporting réglementaire
              CSRD/ESRS, ni ventilation exhaustive par scopes.
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
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">
                Sommaire
              </p>
              <nav aria-label="Sommaire bilan carbone PME (mobile)">
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <TocItem href="#definition" label="Définition (PME)" />
                  <TocItem
                    href="#obligations"
                    label="Obligation : comment lire la demande"
                  />
                  <TocItem
                    href="#why-asked"
                    label="Pourquoi on le demande aux PME"
                  />
                  <TocItem href="#case-example" label="Exemple concret" />
                  <TocItem
                    href="#expected"
                    label="Ce qui est attendu (screening)"
                  />
                  <TocItem
                    href="#difference"
                    label="Indicatif vs inventaire complet"
                  />
                  <TocItem href="#scopes" label="Scopes 1/2/3 : quoi répondre" />
                  <TocItem href="#cost" label="Coût, délais, effort" />
                  <TocItem
                    href="#method"
                    label="Méthode spend-based (formule + limites)"
                  />
                  <TocItem
                    href="#sources"
                    label="Sources & standards (contexte)"
                  />
                  <TocItem
                    href="#verification"
                    label="Vérification et archivage"
                  />
                  <TocItem
                    href="#privacy"
                    label="Confidentialité (privacy-by-design)"
                  />
                  <TocItem href="#guides" label="Guides détaillés" />
                  <TocItem href="#faq" label="FAQ" />
                </ol>
              </nav>
            </div>
          </section>

          {/* 1 */}
          <section id="definition" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              1) Définition : bilan carbone “PME” (ce que le mot recouvre
              vraiment)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Un bilan carbone est une estimation des émissions de gaz à effet de
              serre d’une entreprise (CO₂e) sur une période donnée (souvent une
              année). Dans la pratique, quand une PME dit “on me demande un
              bilan carbone”, la demande correspond le plus souvent à un{" "}
              <strong>document de screening</strong> (un indicateur et un PDF
              archivable), pas à une démarche complète.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Screening (le plus fréquent)
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>
                    objectif : dossier-ready (achats, AO, banque/assurance)
                  </li>
                  <li>résultat CO₂e agrégé + méthode déclarée</li>
                  <li>limites visibles et assumées</li>
                  <li>format standard, réutilisable</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Inventaire complet (moins fréquent)
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>objectif : inventaire détaillé / pilotage</li>
                  <li>données d’activité, périmètres, hypothèses</li>
                  <li>parfois vérification / assurance</li>
                  <li>coût et délai plus élevés</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2 */}
          <section id="obligations" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2) Obligation : comment lire une demande “bilan carbone” sans se
              tromper
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Pour une PME, la question la plus utile n’est pas “est-ce
              obligatoire en général ?” mais “qu’est-ce qui est attendu{" "}
              <strong>dans ce dossier</strong> ?”. Une exigence formelle doit
              être explicite : standard imposé, périmètre, justificatifs,
              niveau de vérification.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Check-list : screening ou exigence formelle ?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-[#0B3A63]/15 bg-white p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="inline-flex items-center justify-center w-2.5 h-2.5 rounded-full bg-[#15B097]"
                      aria-hidden
                    />
                    <h4 className="font-semibold text-[#0B3A63]">
                      Signaux “screening”
                    </h4>
                  </div>
                  <ul className="list-disc ml-6 text-gray-700 space-y-2">
                    <li>questionnaire générique</li>
                    <li>format “PDF à joindre” sans détails</li>
                    <li>aucune preuve demandée</li>
                    <li>méthode non imposée ou vague</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-[#0B3A63]/15 bg-white p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="inline-flex items-center justify-center w-2.5 h-2.5 rounded-full bg-[#0B3A63]"
                      aria-hidden
                    />
                    <h4 className="font-semibold text-[#0B3A63]">
                      Signaux “exigence formelle”
                    </h4>
                  </div>
                  <ul className="list-disc ml-6 text-gray-700 space-y-2">
                    <li>standard imposé + périmètre défini</li>
                    <li>preuves / annexes demandées</li>
                    <li>vérification tierce / assurance</li>
                    <li>livrable détaillé (table de calcul, protocole)</li>
                  </ul>
                </div>
              </div>

              <p className="mt-5 text-sm text-gray-600 leading-relaxed">
                Si le cahier des charges n’impose pas clairement un standard +
                un périmètre + des preuves, la demande est très souvent du
                screening. L’erreur coûteuse est de surdimensionner la réponse.
              </p>
            </div>
          </section>

          {/* 3 */}
          <section id="why-asked" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3) Pourquoi on demande un bilan carbone aux PME ?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Les demandes “bilan carbone” sont souvent liées à des workflows
              internes : achats responsables, gestion des risques, politiques
              ESG, documentation de dossier. Elles remontent vers les PME via la
              chaîne de valeur.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-2">
                  Achats / référencement fournisseur
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Besoin d’un document archivable et comparable pour le dossier
                  fournisseur, sans forcément exiger un audit.
                </p>
                <div className="mt-4">
                  <Link
                    className="underline text-[#0B3A63]"
                    href="/fr/why-companies-ask/"
                  >
                    Pourquoi on vous le demande →
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-2">
                  Appels d’offres
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Critère de comparaison et justificatif à joindre. La priorité :
                  cohérence, lisibilité et limites explicites.
                </p>
                <div className="mt-4">
                  <Link
                    className="underline text-[#0B3A63]"
                    href="/fr/bilan-carbone-appel-offres/"
                  >
                    Bilan carbone appel d’offres →
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-2">
                  Banque / assurance
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Screening ESG / risque : un document lisible et daté, utile
                  pour l’archivage interne.
                </p>
                <div className="mt-4">
                  <Link
                    className="underline text-[#0B3A63]"
                    href="/fr/why-companies-ask/"
                  >
                    Pourquoi c’est demandé (banque/assurance) →
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-2">
                  Chaîne de valeur
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Les donneurs d’ordre structurent leurs données fournisseurs.
                  Les PME sont sollicitées pour fournir un indicateur minimal,
                  cohérent et réutilisable.
                </p>
              </div>
            </div>
          </section>

          {/* 4 */}
          <section id="case-example" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4) Exemple concret : une PME à qui l’on demande un bilan carbone
            </h2>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Cas typique : une PME SaaS, agence ou cabinet B2B répond à un
                appel d’offres ou finalise un onboarding fournisseur. Le client
                demande un bilan carbone.
              </p>

              <ul className="list-disc ml-6 text-gray-700 space-y-2 leading-relaxed">
                <li>l’entreprise n’a pas d’inventaire complet disponible ;</li>
                <li>le dossier doit avancer vite ;</li>
                <li>
                  aucun standard détaillé ni vérification tierce n’est
                  explicitement exigé ;
                </li>
                <li>
                  ce qu’il faut surtout fournir, c’est un document lisible,
                  cohérent et archivable.
                </li>
              </ul>

              <p className="mt-4 text-gray-700 leading-relaxed">
                Dans ce type de situation, un{" "}
                <strong>document de screening</strong> avec résultat CO₂e
                agrégé, méthode déclarée, limites explicites et vérification
                suffit souvent à débloquer le dossier.
              </p>
            </div>
          </section>

          {/* 5 */}
          <section id="expected" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5) Ce qui est attendu (screening) : un document dossier-ready
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Un bon document de screening répond à un besoin simple : être
              archivé dans un dossier et compris rapidement. Il doit être
              explicite sur sa méthode et ses limites.
            </p>

            <div className="mb-6 rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Ce que l’acheteur veut réellement dans la majorité des cas
              </h3>

              <ul className="list-disc ml-6 text-gray-700 space-y-2 leading-relaxed">
                <li>un chiffre CO₂e compréhensible rapidement ;</li>
                <li>
                  un document structuré qui peut être archivé dans le dossier ;
                </li>
                <li>une méthode expliquée simplement ;</li>
                <li>des limites visibles pour éviter toute ambiguïté ;</li>
                <li>un format partageable sans aller-retour inutile.</li>
              </ul>

              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                Dans beaucoup de dossiers PME, le besoin est avant tout
                documentaire et comparatif, pas un audit complet.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Checklist de réponse (PME)
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>
                  <strong>résultat CO₂e agrégé</strong> (indicatif) + unité
                </li>
                <li>
                  <strong>année couverte</strong> + date d’émission
                </li>
                <li>
                  <strong>méthode déclarée</strong> (principe + version)
                </li>
                <li>
                  <strong>périmètre annoncé</strong> (ce qui est inclus / exclu)
                </li>
                <li>
                  <strong>limites visibles</strong> (non audit, non inventaire
                  complet, non CSRD/ESRS)
                </li>
                <li>
                  <strong>PDF standard</strong> (identifiable, partageable)
                </li>
                <li>
                  <strong>vérification</strong> (ID + contrôle public)
                </li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-[#0B3A63] p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">
                Phrase anti-ambiguïté
              </h3>
              <p className="text-white/90 leading-relaxed">
                “Document CO₂e indicatif destiné au screening : méthode
                déclarée, limites explicites, vérification disponible. Ce
                document ne constitue pas un audit, ni un inventaire complet, ni
                un reporting CSRD/ESRS.”
              </p>
            </div>
          </section>

          {/* 6 */}
          <section id="difference" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              6) Estimation indicative vs inventaire complet : choisir le bon
              niveau
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              L’objectif est de répondre au niveau attendu, sans sur-promesse.
              Une estimation indicative permet d’éviter les blocages dans un
              dossier. Un inventaire complet est pertinent si une exigence
              formelle est écrite ou si l’entreprise vise un pilotage
              approfondi.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
              <table className="min-w-[720px] w-full text-sm">
                <thead>
                  <tr className="bg-[#F8FAFC]">
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">
                      Niveau
                    </th>
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">
                      But
                    </th>
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">
                      Données
                    </th>
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">
                      Délai
                    </th>
                    <th className="text-left p-4 font-semibold text-[#0B3A63]">
                      Quand l’utiliser
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-4 text-gray-700">Screening (indicatif)</td>
                    <td className="p-4 text-gray-700">Document dossier-ready</td>
                    <td className="p-4 text-gray-700">Dépenses annuelles</td>
                    <td className="p-4 text-gray-700">Rapide</td>
                    <td className="p-4 text-gray-700">
                      Achats, AO (screening), banque/assurance
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-700">Inventaire complet</td>
                    <td className="p-4 text-gray-700">
                      Inventaire détaillé / pilotage
                    </td>
                    <td className="p-4 text-gray-700">
                      Données d’activité + périmètres
                    </td>
                    <td className="p-4 text-gray-700">Semaines / mois</td>
                    <td className="p-4 text-gray-700">
                      Exigence formelle / démarche approfondie
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/fr/pricing/"
                className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
              >
                Prix : réponse screening (PME) →
              </Link>
              <Link
                href="/fr/product/methodology/"
                className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Méthodologie (spend-based) →
              </Link>
            </div>
          </section>

          {/* 7 */}
          <section id="scopes" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              7) Scopes 1 / 2 / 3 : quoi répondre en PME
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Une mention “scopes 1/2/3” peut être un simple champ dans un
              questionnaire, ou une exigence réelle d’inventaire. La réponse la
              plus sûre est de clarifier le niveau attendu, puis de fournir un
              document cohérent (ou d’escalader si un inventaire complet est
              exigé).
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Réponse sûre (à copier-coller)
              </h3>
              <div className="rounded-xl border border-gray-200 bg-[#F8FAFC] p-5">
                <p className="text-gray-700 leading-relaxed">
                  “Pouvez-vous confirmer si un{" "}
                  <strong>inventaire complet</strong> ventilé par scopes est
                  exigé (périmètre, méthode, preuves, niveau d’assurance), ou
                  si un <strong>document de screening</strong> avec un résultat
                  CO₂e agrégé, méthode déclarée et limites explicites est
                  acceptable à ce stade ?”
                </p>
              </div>

              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                Cette formulation protège la PME : elle répond sans
                sur-promesse et déclenche une clarification écrite.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/fr/scope-1-2-3-explication/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Scopes 1/2/3 : explication (PME)
                </Link>
                <Link
                  href="/fr/generate/"
                  className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#0B3A63] text-white hover:bg-[#0B3A63]/90 transition-colors font-semibold"
                >
                  Produire un document (screening) →
                </Link>
              </div>
            </div>
          </section>

          {/* 8 */}
          <section id="cost" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              8) Coût, délais, effort : comment comparer (PME)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Le coût d’un bilan carbone dépend du niveau attendu. Pour une
              demande de screening, la priorité est un document clair et
              réutilisable. Pour une exigence formelle, il faut prévoir une
              démarche complète.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Méthode de décision (pragmatique)
              </h3>
              <ol className="list-decimal ml-6 text-gray-700 space-y-2">
                <li>Lire le cahier des charges : standard imposé ou non ?</li>
                <li>Si non imposé : produire un document de screening propre.</li>
                <li>
                  Si imposé : chiffrer une démarche complète et demander le
                  délai attendu.
                </li>
              </ol>
            </div>
          </section>

          {/* 9 */}
          <section id="method" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              9) Méthode spend-based : formule explicite et limites
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Certif-Scope produit une estimation indicative basée sur les
              dépenses (spend-based). Le principe est simple : des dépenses
              annuelles par catégories, multipliées par des facteurs d’émission
              (par euro), puis agrégées.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Formule
              </h3>
              <div className="rounded-xl border border-gray-200 bg-[#F8FAFC] p-5">
                <p className="text-gray-700 leading-relaxed">
                  <strong>CO₂e total (t)</strong> = Σ (dépenses catégorie{" "}
                  <em>i</em> en € × facteur d’émission <em>i</em>)
                </p>
              </div>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h4 className="font-semibold text-[#0B3A63] mb-2">
                    Ce que ça permet
                  </h4>
                  <ul className="list-disc ml-6 text-gray-700 space-y-2">
                    <li>répondre vite à une demande de screening</li>
                    <li>documenter une méthode simple et stable</li>
                    <li>produire un résultat agrégé comparable</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h4 className="font-semibold text-[#0B3A63] mb-2">
                    Limites (à annoncer)
                  </h4>
                  <ul className="list-disc ml-6 text-gray-700 space-y-2">
                    <li>indicatif, dépendant des dépenses déclarées</li>
                    <li>pas de données physiques (kWh, km, litres)</li>
                    <li>pas d’inventaire complet, pas d’audit</li>
                    <li>pas de reporting CSRD/ESRS</li>
                    <li>pas de ventilation exhaustive par scopes</li>
                  </ul>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/fr/product/methodology/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Méthodologie (détails)
                </Link>
                <Link
                  href="/fr/product/methodology/compliance/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Conformité & périmètre
                </Link>
              </div>
            </div>
          </section>

          {/* 10 */}
          <section id="sources" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              10) Sources & standards : le contexte (sans sur-promesse)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Selon les dossiers, le vocabulaire varie (GHG Protocol, ISO,
              scopes, facteurs). L’essentiel, côté PME, est de produire un
              document clair et de ne pas confondre screening et inventaire
              complet.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Références citées (contexte)
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>GHG Protocol (référence de principe de comptabilisation)</li>
                <li>ISO 14064-1 (cadre de quantification et déclaration)</li>
                <li>
                  Sources de facteurs (selon version et périmètre de facteurs)
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                La page “Méthodologie” détaille le modèle spend-based, les
                limites et les versions.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/fr/product/methodology/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Méthodologie : détails & limites
                </Link>
              </div>
            </div>
          </section>

          {/* 11 */}
          <section id="verification" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              11) Vérification et archivage : rendre le document “accepté en
              dossier”
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              En B2B, un document utile doit être vérifiable : un identifiant,
              un mécanisme de contrôle et un format stable. L’objectif est
              l’archivage et la réduction des allers-retours.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Ce que la vérification apporte
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>
                  preuve d’authenticité (document émis par l’émetteur déclaré)
                </li>
                <li>preuve d’intégrité (document non modifié)</li>
                <li>référence dossier (ID unique)</li>
                <li>contrôle simple, sans compte</li>
              </ul>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/verify"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Vérifier un document
                </Link>
                <Link
                  href="/fr/why-companies-ask/attestation-carbone-appel-offres/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Attestation carbone (appel d’offres) →
                </Link>
              </div>
            </div>
          </section>

          {/* 12 */}
          <section id="privacy" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              12) Confidentialité : calcul local et minimisation des données
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Pour limiter l’exposition de données sensibles, les calculs sont
              réalisés localement dans le navigateur. Les dépenses détaillées ne
              sont pas envoyées. Le système est conçu pour fonctionner sans
              stockage des documents.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                En pratique
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>calcul côté navigateur (privacy-by-design)</li>
                <li>pas de transfert de dépenses détaillées</li>
                <li>pas de stockage du PDF côté serveur</li>
                <li>réémission possible si nécessaire</li>
              </ul>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/fr/privacy/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Politique de confidentialité
                </Link>
                <Link
                  href="/fr/data-processing/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Traitement des données
                </Link>
              </div>
            </div>
          </section>

          {/* GUIDES (HUB) */}
          <section id="guides" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              13) Guides détaillés (cluster FR)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Ces guides détaillent chaque intention (obligation, coût, exemple,
              modèle PDF, appel d’offres) pour construire un cluster SEO
              cohérent autour de “bilan carbone PME”.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-5">
                  <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                    Déjà disponible
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
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
                        href="/fr/why-companies-ask/attestation-carbone-appel-offres/"
                      >
                        Attestation carbone (appel d’offres) →
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                    Cluster détaillé
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      <Link
                        className="underline text-[#0B3A63]"
                        href="/fr/bilan-carbone-pme/obligation/"
                      >
                        Bilan carbone PME : est-ce obligatoire ? →
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
                        Exemple de bilan carbone PME (format dossier) →
                      </Link>
                    </li>
                    <li className="flex items-center justify-between gap-3">
                      <span className="text-gray-700">
                        Modèle PDF : document carbone PME
                      </span>
                      <span className="text-xs px-2 py-1 rounded-md border border-gray-200 text-gray-600">
                        bientôt
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs text-gray-600 leading-relaxed">
                    Recommandation SEO : publier ces pages sous{" "}
                    <code>/fr/bilan-carbone-pme/…</code> pour concentrer
                    l’autorité du cluster.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="pt-2 scroll-mt-24">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Répondre à une demande “bilan carbone PME” avec un document
                clair (screening)
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Certif-Scope produit un indicateur CO₂e indicatif (spend-based)
                à partir des dépenses annuelles. Document standardisé,
                réutilisable, vérifiable. Limites visibles : non audit, non
                inventaire complet, non CSRD/ESRS.
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
                href="/fr/why-companies-ask/"
                className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
              >
                Pourquoi on vous le demande
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
              FAQ — Bilan carbone PME
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

        {/* SIDEBAR */}
        <aside className="lg:col-span-4">
          <div className="sticky top-6 space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">
                Sommaire
              </p>
              <nav aria-label="Sommaire bilan carbone PME">
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <TocItem href="#definition" label="Définition" />
                  <TocItem
                    href="#obligations"
                    label="Obligation : lire la demande"
                  />
                  <TocItem href="#why-asked" label="Pourquoi c’est demandé" />
                  <TocItem href="#case-example" label="Exemple concret" />
                  <TocItem href="#expected" label="Ce qui est attendu" />
                  <TocItem
                    href="#difference"
                    label="Indicatif vs inventaire"
                  />
                  <TocItem href="#scopes" label="Scopes 1/2/3" />
                  <TocItem href="#cost" label="Coût, délais, effort" />
                  <TocItem href="#method" label="Méthode spend-based" />
                  <TocItem href="#sources" label="Sources & standards" />
                  <TocItem href="#verification" label="Vérification" />
                  <TocItem href="#privacy" label="Confidentialité" />
                  <TocItem href="#guides" label="Guides détaillés" />
                  <TocItem href="#faq" label="FAQ" />
                </ol>
              </nav>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Rappel de périmètre
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Cette page cible les demandes “bilan carbone PME” liées au
                screening (achats, banque, assurance, appels d’offres lorsque la
                demande est générique). Certif-Scope produit une estimation
                indicative spend-based à partir des dépenses. Ce document ne
                remplace pas un audit ni un inventaire complet, et ne constitue
                pas un reporting CSRD/ESRS.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/fr/product/methodology/compliance/"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Conformité & périmètre
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
                Cluster FR (liens utiles)
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
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
                    href="/fr/scope-1-2-3-explication/"
                  >
                    Scopes 1/2/3 : explication
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline"
                    href="/fr/why-companies-ask/attestation-carbone-appel-offres/"
                  >
                    Attestation carbone (appel d’offres)
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/fr/why-companies-ask/">
                    Pourquoi on vous le demande
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/fr/pricing/">
                    Prix (réponse screening)
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
