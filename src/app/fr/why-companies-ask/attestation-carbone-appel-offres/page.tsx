// PATH: src/app/fr/why-companies-ask/attestation-carbone-appel-offres/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — BILAN CARBONE APPEL D’OFFRES (GUIDE)
   Objectif : se positionner sur "bilan carbone appel d’offres" / "attestation carbone appel d’offres"
   + intention PME : quoi fournir sans audit complet, sans sur-promesse.
====================================================== */

export const metadata: Metadata = {
  title:
    "Bilan carbone en appel d’offres : ce qui est demandé + quoi fournir (PME) | Certif-Scope",
  description:
    "Appel d’offres : comprendre ce que “bilan carbone” signifie vraiment (screening vs inventaire complet), quoi fournir en PME sans audit, et comment éviter la sur-promesse. Document CO₂e indicatif, standardisé et vérifiable.",
  alternates: {
    canonical:
      "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-appel-offres",
    languages: {
      en: "https://www.certif-scope.com/why-companies-ask/carbon-attestation-tender",
      fr: "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-appel-offres",
    },
  },
  openGraph: {
    title: "Bilan carbone en appel d’offres : ce qui est réellement demandé (PME)",
    description:
      "Guide pratique : screening vs inventaire complet, ce qui est attendu dans un dossier, et quoi fournir sans audit (document CO₂e indicatif, standardisé, vérifiable).",
    url: "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-appel-offres",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function CarbonAttestationTenderFR() {
  const pageUrl =
    "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-appel-offres";

  const faq = [
    {
      q: "Est-ce éliminatoire de ne pas avoir de “bilan carbone” en appel d’offres ?",
      a: "Le plus souvent, non. Dans beaucoup de dossiers, l’indicateur CO₂e sert à comparer les offres. Si aucune exigence formelle (référentiel, périmètre, preuves, assurance) n’est imposée, une estimation cohérente, datée et cadrée peut suffire.",
    },
    {
      q: "Une estimation spend-based (dépenses × facteurs) peut-elle être acceptée ?",
      a: "Oui lorsque la méthode n’est pas imposée et que l’objectif est le screening. Il faut annoncer clairement la méthode et ses limites (indicatif, non audit, non inventaire complet, non CSRD/ESRS).",
    },
    {
      q: "Comment savoir si on exige un inventaire complet (Scopes 1/2/3) ?",
      a: "Cherchez des signaux d’exigence formelle : référentiel imposé (ex. GHG Protocol), périmètre détaillé, justificatifs attendus, et/ou vérification tierce. Sans ces éléments, la demande est souvent du screening.",
    },
    {
      q: "Que répondre si le cahier des charges mentionne “ISO 14064-1” ?",
      a: "Cela correspond à un cadre différent et plus exigeant. Demandez une clarification écrite sur le périmètre, les données attendues et le niveau d’assurance. Une estimation indicative agrégée ne doit pas être présentée comme un inventaire ISO.",
    },
    {
      q: "Que fournir concrètement au format dossier ?",
      a: "Un PDF clair et archivable : résultat CO₂e agrégé (tCO₂e), année couverte, méthode déclarée, limites explicites, date d’émission, identifiant et mécanisme de vérification (intégrité/authenticité).",
    },
  ];

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Pourquoi les entreprises le demandent",
        item: "https://www.certif-scope.com/fr/why-companies-ask",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bilan carbone en appel d’offres",
        item: pageUrl,
      },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bilan carbone en appel d’offres : ce qui est réellement demandé (PME)",
    url: pageUrl,
    description:
      "Guide pratique : comprendre ce que recouvre la demande de “bilan carbone” dans un appel d’offres et comment répondre avec un indicateur CO₂e cohérent, daté et archivable (screening).",
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
    name: "Comment répondre à une demande “bilan carbone” en appel d’offres (PME)",
    description:
      "Process en 3 étapes pour répondre au bon niveau (screening vs inventaire complet) et fournir un document dossier-ready.",
    totalTime: "PT15M",
    step: [
      {
        "@type": "HowToStep",
        name: "Lire l’exigence : screening ou inventaire complet ?",
        text: "Cherchez un référentiel imposé, un périmètre détaillé, des preuves attendues et un niveau d’assurance. Sans ces éléments, la demande est souvent du screening.",
      },
      {
        "@type": "HowToStep",
        name: "Fournir un document clair et archivable",
        text: "Produisez un PDF avec un résultat CO₂e agrégé, l’année couverte, la méthode déclarée, les limites explicites, une date et un identifiant.",
      },
      {
        "@type": "HowToStep",
        name: "Éviter la sur-promesse",
        text: "Ne présentez pas une estimation indicative comme un audit ou un inventaire complet. Demandez une clarification écrite si une norme ou un périmètre est mentionné sans détail.",
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
      id="carbon-attestation-tender"
      data-section="carbon-attestation-tender"
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
          Comprendre les demandes “bilan carbone” — Appels d’offres (screening)
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B3A63] mb-6 leading-tight">
          Bilan carbone en appel d’offres : <br />
          <span className="text-[#0B3A63]/90">
            ce qui est réellement demandé, et quoi fournir en PME sans audit complet
          </span>
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Dans un appel d’offres, “bilan carbone” est souvent un mot générique.
          Le plus fréquent : un besoin de <strong>screening</strong> (comparaison, archivage,
          justification achats) et non un inventaire complet avec preuves et vérification.
          Cette page te donne une lecture simple et une réponse dossier-ready.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/fr/why-companies-ask"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Retour au guide (vue d’ensemble)
          </Link>

          <Link
            href="/fr/generate"
            className="inline-block text-sm px-5 py-2.5 rounded-md bg-[#15B097] text-white hover:bg-[#12967f] transition-colors font-semibold"
          >
            Générer une attestation (screening) →
          </Link>

          <Link
            href="/fr/verify"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Vérifier un document
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">Ce que l’acheteur veut</p>
            <p className="text-gray-700 leading-relaxed">
              Un indicateur CO₂e lisible + un justificatif archivable pour le dossier.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">Ce qui rend acceptable</p>
            <p className="text-gray-700 leading-relaxed">
              Méthode déclarée, périmètre annoncé, limites visibles, document standard.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">Quand escalader</p>
            <p className="text-gray-700 leading-relaxed">
              Référentiel imposé, preuves attendues, périmètre détaillé, assurance demandée.
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
              <nav aria-label="Sommaire bilan carbone appel d’offres (mobile)">
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <TocItem href="#why" label="Pourquoi c’est demandé" />
                  <TocItem href="#criterion-vs-formal" label="Critère vs exigence formelle" />
                  <TocItem href="#what-expected" label="Ce qui est attendu dans le dossier" />
                  <TocItem href="#what-to-provide" label="Quoi fournir (checklist + modèle)" />
                  <TocItem href="#red-flags" label="Signaux d’exigence formelle" />
                  <TocItem href="#faq" label="FAQ" />
                </ol>
              </nav>
            </div>
          </section>

          {/* 1 */}
          <section id="why" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              1) Pourquoi “bilan carbone” apparaît dans les appels d’offres
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Les politiques d’achats responsables se généralisent. Les acheteurs doivent documenter
              une comparaison environnementale et archiver un justificatif cohérent. Le CO₂e devient
              un indicateur simple à intégrer dans une grille, même lorsque le cahier des charges reste générique.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Ce que l’acheteur cherche (en pratique)
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>un indicateur CO₂e lisible et comparable</li>
                <li>un document à joindre / archiver dans le dossier</li>
                <li>un élément de notation environnementale</li>
                <li>une base simple pour suivre les fournisseurs</li>
              </ul>
            </div>
          </section>

          {/* 2 */}
          <section id="criterion-vs-formal" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2) Critère de notation vs exigence “bilan carbone” formelle
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Le point clé : un critère de notation accepte souvent une estimation cohérente si la méthode
              et les limites sont explicites. Une exigence formelle, elle, impose un cadre méthodologique,
              un périmètre, et parfois des preuves / une vérification.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Screening (le plus fréquent)
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>critère environnemental pondéré</li>
                  <li>indicateur demandé à titre comparatif</li>
                  <li>méthode non imposée ou formulée largement</li>
                  <li>peu ou pas de preuves attendues</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Exigence formelle (moins fréquent)
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>référentiel imposé (norme / protocole)</li>
                  <li>périmètre détaillé demandé</li>
                  <li>éléments de preuve / justificatifs</li>
                  <li>attente d’une vérification tierce</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-[#0B3A63] p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Règle anti-erreur</h3>
              <p className="text-white/90 leading-relaxed">
                Si le cahier des charges n’impose pas explicitement une méthode + un périmètre + des preuves,
                traite la demande comme du screening et réponds avec un document clair, daté, méthode + limites visibles.
              </p>
            </div>
          </section>

          {/* 3 */}
          <section id="what-expected" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3) Ce qui est attendu dans le dossier : lisibilité, cohérence, traçabilité
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              En appel d’offres, l’enjeu est opérationnel : fournir un indicateur compréhensible et un document
              archivable. La crédibilité vient d’un format standard, d’une méthode annoncée, d’un périmètre explicite
              et de limites assumées.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Checklist dossier-ready (screening)
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>résultat CO₂e agrégé (tCO₂e) + année couverte</li>
                <li>méthode déclarée (principe + version des facteurs)</li>
                <li>limites visibles : indicatif, non audit, non inventaire complet, non CSRD/ESRS</li>
                <li>date d’émission + identifiant unique</li>
                <li>mécanisme de vérification (intégrité / authenticité)</li>
                <li>PDF identifiable, partageable, facile à joindre</li>
              </ul>
            </div>
          </section>

          {/* 4 */}
          <section id="what-to-provide" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4) Quoi fournir : modèle de réponse simple (PME)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              L’objectif est de répondre vite, sans se piéger : fournir un document clair, puis escalader uniquement
              si une exigence formelle est écrite.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Modèle de formulation (à copier-coller)
              </h3>
              <div className="rounded-xl border border-gray-200 bg-[#F8FAFC] p-5">
                <p className="text-gray-700 leading-relaxed">
                  “Nous fournissons un indicateur CO₂e <strong>indicatif</strong> pour l’année [AAAA], destiné au screening
                  (comparaison / dossier). La méthode est déclarée, le périmètre et les limites sont explicites (non audit,
                  non inventaire complet, non CSRD/ESRS). Le document est daté, identifiable et vérifiable.”
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
                  href="/fr/bilan-carbone-pme"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Page pilier : bilan carbone PME
                </Link>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Si le dossier mentionne “scopes”
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Demande de clarification écrite (sans bloquer) :
              </p>
              <div className="mt-3 rounded-xl border border-gray-200 bg-white p-5">
                <p className="text-gray-700 leading-relaxed">
                  “Pouvez-vous confirmer si un inventaire complet ventilé par scopes est exigé (périmètre, méthode,
                  preuves, niveau d’assurance), ou si un document de screening avec un résultat CO₂e agrégé,
                  méthode + limites explicites est acceptable à ce stade ?”
                </p>
              </div>
            </div>
          </section>

          {/* 5 */}
          <section id="red-flags" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5) Signaux : quand un bilan carbone complet devient nécessaire
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Le bilan complet devient nécessaire lorsque l’appel d’offres impose explicitement un cadre et un niveau
              de justification. Dans ce cas, il faut aligner le livrable sur l’exigence et prévoir délai + budget.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Check-list “exigence formelle”
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>référentiel imposé (GHG Protocol, ISO 14064-1, etc.)</li>
                <li>périmètre défini (organisation, sites, frontières)</li>
                <li>justificatifs attendus (énergie, km, achats, etc.)</li>
                <li>ventilation par scopes 1/2/3 exigée + détail</li>
                <li>vérification / assurance demandée (tiers)</li>
                <li>livrable précis (annexes, table de calcul, preuves)</li>
              </ul>

              <div className="mt-5 border-t border-gray-200 pt-5">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Dans ce scénario, une estimation indicative agrégée ne doit pas être présentée comme un inventaire complet.
                  La stratégie sûre : demander la clarification écrite et s’aligner sur le cadre si l’exigence est confirmée.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/fr/scope-1-2-3-explication"
                    className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                  >
                    Scopes 1/2/3 : explication (PME)
                  </Link>
                  <Link
                    href="/fr/product/compliance"
                    className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Conformité & périmètre
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              6) FAQ — Bilan carbone en appel d’offres
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

          {/* CTA */}
          <section id="cta" className="pt-2 scroll-mt-24">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Répondre rapidement à une demande “bilan carbone” en appel d’offres
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Si l’objectif est le screening, un document clair et archivable est souvent suffisant :
                résultat CO₂e agrégé, année, méthode + limites explicites, identifiant et vérification.
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
                href="/fr/why-companies-ask"
                className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
              >
                Retour au guide (vue d’ensemble)
              </Link>
              <a
                href="#top"
                className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Haut de page
              </a>
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
              <nav aria-label="Sommaire bilan carbone appel d’offres">
                <ol className="space-y-2 text-sm list-decimal ml-5">
                  <TocItem href="#why" label="Pourquoi c’est demandé" />
                  <TocItem href="#criterion-vs-formal" label="Critère vs exigence" />
                  <TocItem href="#what-expected" label="Ce qui est attendu" />
                  <TocItem href="#what-to-provide" label="Quoi fournir" />
                  <TocItem href="#red-flags" label="Signaux d’exigence" />
                  <TocItem href="#faq" label="FAQ" />
                  <TocItem href="#cta" label="Aller plus loin" />
                </ol>
              </nav>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Rappel de périmètre
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Ce guide traite des demandes “bilan carbone” en appel d’offres lorsqu’elles visent le screening
                (comparaison, archivage, justification achats). Il ne remplace pas un audit ni un dispositif
                réglementaire lorsque ceux-ci sont explicitement exigés.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/fr/product/compliance"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Conformité & périmètre
                </Link>
                <Link
                  href="/fr/bilan-carbone-pme"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Page pilier : bilan carbone PME
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Pages liées (cluster FR)
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <Link className="underline" href="/fr/bilan-carbone-pme">
                    Bilan carbone PME (page pilier)
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/fr/scope-1-2-3-explication">
                    Scopes 1/2/3 : explication
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/fr/why-companies-ask/exigences-co2-banques-assurances">
                    Banque / assurance : exigences CO₂e
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
