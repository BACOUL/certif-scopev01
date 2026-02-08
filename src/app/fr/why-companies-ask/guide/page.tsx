// PATH: src/app/fr/why-companies-ask/guide/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — VUE D’ENSEMBLE (GUIDE)
====================================================== */

export const metadata: Metadata = {
  title: "Vue d’ensemble (guide) — Comprendre les demandes CO₂e — Certif-Scope (FR)",
  description:
    "Vue d’ensemble : identifier rapidement le type de demande CO₂e (fournisseur, appel d’offres, banque/assurance, PME), comprendre ce qui est acceptable (screening) et accéder aux guides correspondants.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/why-companies-ask/guide",
    languages: {
      fr: "https://www.certif-scope.com/fr/why-companies-ask/guide",
      en: "https://www.certif-scope.com/why-companies-ask/guide",
    },
  },
  openGraph: {
    title: "Vue d’ensemble (guide) — Comprendre les demandes CO₂e",
    description:
      "Guide d’orientation : quel type de demande CO₂e avez-vous reçu et quelle réponse est attendue (screening vs audit).",
    url: "https://www.certif-scope.com/fr/why-companies-ask/guide",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function WhyCompaniesAskOverviewGuideFR() {
  return (
    <section
      id="why-companies-ask-guide"
      data-section="why-companies-ask-guide"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (HUB GUIDE) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Vue d’ensemble (guide) — Comprendre les demandes CO₂e",
            url: "https://www.certif-scope.com/fr/why-companies-ask/guide",
            description:
              "Vue d’ensemble : orienter rapidement une demande CO₂e (fournisseur, appel d’offres, banque/assurance, PME) et accéder aux guides dédiés.",
            isPartOf: {
              "@type": "WebSite",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
            },
            breadcrumb: {
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
                  name: "Vue d’ensemble (guide)",
                  item: "https://www.certif-scope.com/fr/why-companies-ask/guide",
                },
              ],
            },
          }),
        }}
      />

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Comprendre les demandes CO₂e — Vue d’ensemble
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Vue d’ensemble (guide)
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Cette page sert de guide d’orientation. Elle vous aide à identifier le type de demande CO₂e
          que vous avez reçu, à comprendre ce qui est attendu en pratique, et à accéder rapidement
          au guide adapté. Dans la majorité des cas, la demande vise un{" "}
          <strong>usage informatif (screening)</strong>, pas un audit ni un reporting réglementaire.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/fr/why-companies-ask"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Pourquoi les entreprises le demandent
          </Link>
          <Link
            href="/fr/product"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Voir le produit
          </Link>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* MAIN */}
        <div className="lg:col-span-8 space-y-14">
          {/* 1. QUICK DIAG */}
          <section id="diagnostic">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              1. Diagnostic rapide : quel type de demande avez-vous reçu ?
            </h2>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <p className="text-gray-700 leading-relaxed mb-5">
                Si la demande contient l’un des éléments ci-dessous, vous pouvez identifier le cas
                en quelques secondes :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                    Cas A — Achats / client
                  </p>
                  <p className="font-semibold text-[#0B3A63] mb-2">
                    “Merci de fournir une attestation carbone fournisseur”
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    Demande typique d’onboarding ou de questionnaire ESG fournisseur.
                  </p>
                  <Link
                    href="/fr/why-companies-ask/attestation-carbone-fournisseur"
                    className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                  >
                    Ouvrir le guide “Fournisseur”
                  </Link>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                    Cas B — Appel d’offres
                  </p>
                  <p className="font-semibold text-[#0B3A63] mb-2">
                    “Critère carbone dans un appel d’offres / RFP”
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    Critère de comparaison, pièce attendue pour notation ou dossier.
                  </p>
                  <Link
                    href="/fr/why-companies-ask/attestation-carbone-appel-offres"
                    className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                  >
                    Ouvrir le guide “Appel d’offres”
                  </Link>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                    Cas C — Banque / assurance
                  </p>
                  <p className="font-semibold text-[#0B3A63] mb-2">
                    “Questionnaire ESG / CO₂e pour dossier crédit / assurance”
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    Usage informatif (screening) pour analyse interne de risque.
                  </p>
                  <Link
                    href="/fr/why-companies-ask/exigences-co2-banques-assurances"
                    className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                  >
                    Ouvrir le guide “Banques & assurances”
                  </Link>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                    Cas D — PME (sans bilan carbone)
                  </p>
                  <p className="font-semibold text-[#0B3A63] mb-2">
                    “Je n’ai pas de bilan carbone, que dois-je fournir ?”
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    Explication pédagogique : attestation indicative vs inventaire complet.
                  </p>
                  <Link
                    href="/fr/why-companies-ask/attestation-carbone-pme"
                    className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                  >
                    Ouvrir le guide “PME”
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 2. WHAT IS ACCEPTABLE */}
          <section id="acceptable">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2. Ce qui est acceptable dans la majorité des cas (screening)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              La plupart des demandes CO₂e sont des demandes de screening : un indicateur simple,
              cohérent et archivable. Un document est généralement acceptable s’il est présenté
              comme une estimation indicative avec périmètre et limites explicites.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Acceptable (screening / dossier)
                </h3>
                <ul className="list-disc ml-6 text-green-900/90 space-y-2">
                  <li>questionnaires ESG fournisseurs</li>
                  <li>onboarding achats</li>
                  <li>appel d’offres (critère informatif)</li>
                  <li>dossier banque / assurance (analyse interne)</li>
                  <li>preuve minimale à archiver</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  À cadrer / non adapté
                </h3>
                <ul className="list-disc ml-6 text-red-900/90 space-y-2">
                  <li>audit, certification, assurance externe</li>
                  <li>exigence explicite ISO 14064-1</li>
                  <li>reporting CSRD / ESRS officiel</li>
                  <li>inventaire complet scopes 1–2–3 vérifiés</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. WHAT TO PROVIDE */}
          <section id="what-to-provide">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3. Contenu minimal recommandé (preuve CO₂e réutilisable)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Pour éviter les allers-retours, le document doit être lisible et réutilisable :
              un résultat agrégé, une méthode déclarée, un périmètre annoncé, des limites,
              et des éléments de traçabilité.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Checklist “preuve minimale”
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>nom de l’organisation (identification simple)</li>
                <li>année couverte + date d’émission</li>
                <li>résultat CO₂e agrégé (tCO₂e)</li>
                <li>méthode déclarée (ex. spend-based) + version des facteurs</li>
                <li>périmètre annoncé (ce qui est inclus/exclu)</li>
                <li>clauses visibles : indicatif, non audit, non CSRD/ESRS</li>
                <li>traçabilité : identifiant unique + lien/QR de vérification</li>
              </ul>

              <div className="mt-5">
                <Link
                  href="/fr/why-companies-ask/preuve-carbone-entreprise"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Lire : “Preuve carbone d’entreprise”
                </Link>
              </div>
            </div>
          </section>

          {/* 4. NEXT STEPS */}
          <section id="next-steps">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4. Accéder aux guides par cas
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Chaque page ci-dessous répond à une intention distincte et détaille ce qui est attendu,
              les formulations à utiliser, et les cas à cadrer.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#64748B] mb-1">
                    Cas A
                  </p>
                  <p className="text-lg font-semibold text-[#0B3A63]">
                    Attestation carbone fournisseur
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mt-1">
                    Onboarding / questionnaire ESG client — demande la plus fréquente.
                  </p>
                </div>
                <Link
                  href="/fr/why-companies-ask/attestation-carbone-fournisseur"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Ouvrir
                </Link>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#64748B] mb-1">
                    Cas B
                  </p>
                  <p className="text-lg font-semibold text-[#0B3A63]">
                    Attestation carbone appel d’offres
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mt-1">
                    Critère carbone dans une RFP — comparaison et notation.
                  </p>
                </div>
                <Link
                  href="/fr/why-companies-ask/attestation-carbone-appel-offres"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Ouvrir
                </Link>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#64748B] mb-1">
                    Cas C
                  </p>
                  <p className="text-lg font-semibold text-[#0B3A63]">
                    Exigences CO₂e banques & assurances
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mt-1">
                    Dossier / risque ESG — usage informatif (screening).
                  </p>
                </div>
                <Link
                  href="/fr/why-companies-ask/exigences-co2-banques-assurances"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Ouvrir
                </Link>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#64748B] mb-1">
                    Cas D
                  </p>
                  <p className="text-lg font-semibold text-[#0B3A63]">
                    Attestation carbone pour PME
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mt-1">
                    Page pédagogique : que fournir quand on n’a pas de bilan carbone.
                  </p>
                </div>
                <Link
                  href="/fr/why-companies-ask/attestation-carbone-pme"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Ouvrir
                </Link>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#64748B] mb-1">
                    Synthèse
                  </p>
                  <p className="text-lg font-semibold text-[#0B3A63]">
                    Preuve carbone d’entreprise
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mt-1">
                    Définition et checklist “preuve minimale” (screening) + cas à cadrer.
                  </p>
                </div>
                <Link
                  href="/fr/why-companies-ask/preuve-carbone-entreprise"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Ouvrir
                </Link>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="pt-2">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Besoin d’un document CO₂e clair et réutilisable ?
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Certif-Scope produit une attestation CO₂e indicative, standardisée, traçable et
                vérifiable, conçue pour les workflows d’achats, banques, assurances et screening ESG.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/fr/pricing"
                  className="inline-block text-sm px-5 py-2.5 rounded-md bg-white text-[#0B3A63] hover:bg-gray-100 transition-colors font-semibold"
                >
                  Voir le prix
                </Link>
                <Link
                  href="/fr/product"
                  className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
                >
                  Comprendre le produit
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/fr/why-companies-ask"
                className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
              >
                Retour à “Pourquoi les entreprises le demandent”
              </Link>
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
              <nav aria-label="Sommaire guide">
                <ul className="space-y-2 text-sm">
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#diagnostic">
                      1. Diagnostic rapide
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#acceptable">
                      2. Ce qui est acceptable
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#what-to-provide">
                      3. Contenu minimal
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#next-steps">
                      4. Guides par cas
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#cta">
                      Aller plus loin
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Rappel important
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Cette vue d’ensemble est un guide d’orientation. Les détails de calcul et la
                méthodologie complète sont décrits dans la page Méthodologie du produit.
              </p>

              <div className="mt-5">
                <Link
                  href="/fr/product/methodology"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Méthodologie
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
      }
