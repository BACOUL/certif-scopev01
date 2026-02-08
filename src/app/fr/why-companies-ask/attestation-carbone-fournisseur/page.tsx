// PATH: src/app/fr/why-companies-ask/attestation-carbone-fournisseur/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — ATTESTATION CARBONE FOURNISSEUR
====================================================== */

export const metadata: Metadata = {
  title: "Attestation carbone fournisseur — Ce qui est réellement demandé — Certif-Scope (FR)",
  description:
    "Comprendre quand un client peut demander une attestation CO₂e fournisseur, ce qui est attendu en pratique (screening achats), et comment répondre avec un document indicatif, standardisé et vérifiable.",
  alternates: {
    canonical:
      "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-fournisseur",
    languages: {
      en: "https://www.certif-scope.com/why-companies-ask/supplier-carbon-attestation",
      fr: "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-fournisseur",
    },
  },
  openGraph: {
    title: "Attestation carbone fournisseur — Ce qui est réellement demandé",
    description:
      "Pourquoi les acheteurs demandent une attestation CO₂e fournisseur, ce qui est acceptable (screening) et ce qui ne l’est pas (audit, CSRD/ESRS).",
    url: "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-fournisseur",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function SupplierCarbonAttestationFR() {
  return (
    <section
      id="supplier-carbon-attestation"
      data-section="supplier-carbon-attestation"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (GUIDE) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Attestation carbone fournisseur",
            url: "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-fournisseur",
            description:
              "Guide pratique : pourquoi les acheteurs demandent une attestation CO₂e fournisseur, ce qui est acceptable (screening) et comment répondre avec un document indicatif standardisé.",
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
                  name: "Attestation carbone fournisseur",
                  item: "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-fournisseur",
                },
              ],
            },
          }),
        }}
      />

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* PAGE HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Comprendre les demandes CO₂e — Cas n°1
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Attestation carbone fournisseur : ce qui est réellement demandé
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Dans la majorité des cas, une “attestation carbone fournisseur” n’est pas une exigence
          réglementaire ni un audit. C’est une demande opérationnelle des acheteurs : obtenir un
          indicateur CO₂e simple, cohérent et réutilisable pour le screening ESG, l’onboarding
          fournisseur et les appels d’offres.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/fr/why-companies-ask"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Retour au guide (vue d’ensemble)
          </Link>

          <Link
            href="/fr/product"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Voir le produit
          </Link>

          <Link
            href="/fr/verify"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Vérifier une attestation
          </Link>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* MAIN */}
        <div className="lg:col-span-8 space-y-14">
          {/* 1. WHY */}
          <section id="why">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              1. Pourquoi un acheteur demande une attestation CO₂e à un fournisseur
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Les organisations soumises à des obligations de transparence (ou à des attentes marché)
              doivent collecter des informations environnementales sur leur chaîne de valeur. Dans
              la pratique, cela se traduit par des questionnaires fournisseurs, des critères d’achats
              responsables et des demandes de “preuve” simple pour documenter un dossier interne.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Ce que l’acheteur veut obtenir (très concrètement)
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>un indicateur CO₂e disponible rapidement</li>
                <li>un format documentable et partageable (PDF standard)</li>
                <li>une méthode explicite (même indicative) et stable</li>
                <li>un document réutilisable sur plusieurs demandes</li>
                <li>un minimum de traçabilité (identifiant, date, version)</li>
              </ul>
            </div>
          </section>

          {/* 2. WHAT IS ACCEPTABLE */}
          <section id="acceptable">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2. Dans quels cas c’est acceptable (et dans quels cas ça ne l’est pas)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Une attestation CO₂e “fournisseur” est généralement acceptable quand elle sert au{" "}
              <strong>screening</strong>, à l’<strong>onboarding</strong> ou à une{" "}
              <strong>comparaison interne</strong> (décision achats). Elle ne l’est pas quand elle est
              utilisée comme substitut à un bilan carbone réglementaire ou à une certification.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Acceptable (cas le plus fréquent)
                </h3>
                <ul className="list-disc ml-6 text-green-900/90 space-y-2">
                  <li>questionnaires RSE / ESG fournisseurs</li>
                  <li>pré-qualification avant contrat</li>
                  <li>appel d’offres (critère “carbone” informatif)</li>
                  <li>reporting interne achats responsables</li>
                  <li>demande “un indicateur CO₂e, même estimé”</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  Non acceptable (à refuser / cadrer)
                </h3>
                <ul className="list-disc ml-6 text-red-900/90 space-y-2">
                  <li>demande d’audit, de certification ou d’assurance externe</li>
                  <li>exigence explicite “ISO 14064-1” / “Bilan Carbone®”</li>
                  <li>reporting CSRD / ESRS officiel</li>
                  <li>communication marketing assimilée à une conformité</li>
                  <li>demande de scopes 1–2 complets et vérifiés</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mt-6">
              Si le donneur d’ordre exige un cadre audit ou un standard spécifique, la bonne réponse
              est de clarifier le périmètre attendu (screening vs audit) avant de produire un document.
            </p>
          </section>

          {/* 3. WHAT TO PROVIDE */}
          <section id="what-to-provide">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3. Ce que votre client attend comme “preuve” (format et contenu)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Les acheteurs préfèrent un document qui ressemble à une preuve opérationnelle :
              daté, identifiable, méthodologiquement explicite, et facile à archiver. La valeur n’est
              pas dans la perfection scientifique ; elle est dans la{" "}
              <strong>cohérence</strong> et la <strong>réutilisabilité</strong>.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Checklist minimale (document acceptable en screening)
              </h3>

              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>nom de l’organisation (identification simple)</li>
                <li>année couverte + date d’émission</li>
                <li>résultat CO₂e agrégé (tCO₂e)</li>
                <li>méthode déclarée (ex. spend-based)</li>
                <li>version des facteurs / jeu de facteurs</li>
                <li>identifiant unique + lien/QR de vérification</li>
                <li>clauses visibles : indicatif, non audit, non CSRD/ESRS</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mt-4">
                Un document qui contient ces éléments répond aux besoins typiques des achats
                (screening et dossier interne), sans prétendre à une certification.
              </p>
            </div>
          </section>

          {/* 4. HOW TO ANSWER */}
          <section id="how-to-answer">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4. Comment répondre sans risque (formulations et cadrage)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              La sécurité juridique et la crédibilité reposent sur une chose :{" "}
              <strong>dire clairement ce que le document est</strong> et{" "}
              <strong>ce qu’il n’est pas</strong>. L’objectif est d’éviter qu’un tiers
              interprète l’attestation comme un audit ou une conformité réglementaire.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Formulations recommandées
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>À utiliser :</strong> “attestation CO₂e indicative”, “estimation spend-based”,
                  “document de screening ESG”, “usage achats / onboarding”.
                </li>
                <li>
                  <strong>À éviter :</strong> “certifié”, “conforme CSRD/ESRS”, “audit carbone”, “bilan
                  carbone réglementaire”.
                </li>
              </ul>

              <div className="mt-5 border-t border-gray-200 pt-5">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pour cadrer une demande trop ambitieuse (audit, conformité), la réponse la plus
                  efficace est : “Nous pouvons fournir une estimation indicative standardisée pour
                  screening achats. Si vous exigez un audit ou un standard spécifique, merci de
                  préciser le cadre attendu.”
                </p>
              </div>
            </div>
          </section>

          {/* 5. WHY CERTIF-SCOPE */}
          <section id="why-certif-scope">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5. Pourquoi un document standardisé (et vérifiable) aide réellement
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Le problème des demandes CO₂e fournisseurs n’est pas l’absence de données. Le problème
              est l’absence de format simple, stable et réutilisable. Un document standardisé réduit :
            </p>

            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>le temps passé à répondre à chaque questionnaire</li>
              <li>les incompréhensions sur le périmètre et la méthode</li>
              <li>les aller-retours avec les équipes achats</li>
              <li>le risque d’interprétation “audit / conformité”</li>
            </ul>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Liens utiles
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link className="underline" href="/fr/product">
                    Produit : attestation standardisée
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/fr/product/compliance">
                    Conformité & périmètre (ce que l’attestation n’est pas)
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/fr/product/methodology">
                    Méthodologie (spend-based)
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/fr/verify">
                    Vérifier une attestation (public)
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* 6. QUICK FAQ */}
          <section id="faq">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              6. Questions fréquentes (achats & fournisseurs)
            </h2>

            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Est-ce qu’un acheteur peut exiger un bilan carbone audité ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Oui, contractuellement un donneur d’ordre peut imposer des exigences. En pratique,
                  la majorité des demandes portent sur un indicateur simple pour screening, surtout
                  en phase amont. Si une exigence auditée est formulée, il faut demander le standard
                  attendu et le périmètre exact.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Est-ce que “attestation carbone” veut dire “CSRD/ESRS” ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Non. CSRD/ESRS concerne le reporting des entreprises soumises à l’obligation. Les
                  demandes aux fournisseurs sont le plus souvent une collecte d’information de chaîne
                  de valeur. Une attestation indicative est pertinente uniquement comme document
                  d’information (screening), pas comme reporting réglementaire.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Que faire si on me demande “Scope 1 / 2 / 3” ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Clarifier si l’acheteur veut une information indicative ou une publication auditée.
                  Si la demande est un indicateur pour screening, proposer un document standardisé
                  qui explicite la méthode et les limites. Si la demande exige un inventaire complet,
                  l’attestation indicative n’est pas le bon outil.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="pt-2">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Répondre vite, sans ambiguïté, avec un document standard
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Si votre client vous demande une “attestation carbone fournisseur”, l’objectif est
                généralement un indicateur utilisable en screening achats. Certif-Scope produit une
                attestation indicative, structurée, traçable et vérifiable.
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
                Retour au guide (vue d’ensemble)
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
              <nav aria-label="Sommaire attestation fournisseur">
                <ul className="space-y-2 text-sm">
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#why">
                      1. Pourquoi c’est demandé
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#acceptable">
                      2. Quand c’est acceptable
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#what-to-provide">
                      3. Ce que l’acheteur attend
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#how-to-answer">
                      4. Comment répondre
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#why-certif-scope">
                      5. Pourquoi standardiser
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#faq">
                      6. FAQ
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
                Rappel de périmètre (important)
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Une attestation CO₂e fournisseur est acceptable pour screening et décision achats
                quand elle est présentée comme une estimation indicative avec limites explicites.
                Elle ne remplace pas un audit, une certification, ni un reporting réglementaire.
              </p>

              <div className="mt-5">
                <Link
                  href="/fr/product/compliance"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Conformité & périmètre
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
         }
