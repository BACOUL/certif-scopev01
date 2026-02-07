import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — POURQUOI LES ENTREPRISES LE DEMANDENT (HUB)
====================================================== */

export const metadata: Metadata = {
  title:
    "Comprendre les demandes d’attestation CO₂e — Guides (FR) — Certif-Scope",
  description:
    "Hub FR : comprendre pourquoi les acheteurs, banques et assureurs demandent une attestation CO₂e, et comment répondre avec un document standardisé (screening, onboarding, limites, vérification).",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/why-companies-ask",
    languages: {
      en: "https://www.certif-scope.com/why-companies-ask",
      fr: "https://www.certif-scope.com/fr/why-companies-ask",
    },
  },
  openGraph: {
    title: "Comprendre les demandes d’attestation CO₂e — Guides (FR) — Certif-Scope",
    description:
      "Pourquoi les organisations demandent une attestation CO₂e et comment l’utiliser correctement (screening, onboarding, verification, limites).",
    url: "https://www.certif-scope.com/fr/why-companies-ask",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
};

/* ======================================================
   ROUTES (ARTICLES)
====================================================== */

const routes = {
  hub: "/fr/why-companies-ask",
  a1: "/fr/why-companies-ask/attestation-co2e-fournisseur",
  a2: "/fr/why-companies-ask/onboarding-fournisseur-co2e",
  a3: "/fr/why-companies-ask/screening-esg-achats-co2e",
  a4: "/fr/why-companies-ask/banques-assureurs-risque-climat-co2e",
  a5: "/fr/why-companies-ask/verifier-attestation-co2e",
  generate: "/fr/generate",
  verify: "/fr/verify",
  product: "/fr/product",
};

/* ======================================================
   PAGE (HUB)
====================================================== */

export default function WhyCompaniesAskHubFR() {
  return (
    <section
      id="why-companies-ask"
      data-section="why-companies-ask"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (HUB) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Comprendre les demandes d’attestation CO₂e",
            url: "https://www.certif-scope.com/fr/why-companies-ask",
            description:
              "Hub de guides expliquant pourquoi les organisations demandent une attestation CO₂e et comment l’utiliser correctement (screening, onboarding, vérification, limites).",
            isPartOf: {
              "@type": "WebSite",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
            },
          }),
        }}
      />

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* EN-TÊTE PAGE */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Guides — Demandes CO₂e (FR)
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Comprendre les demandes d’attestation CO₂e
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Les acheteurs, banques, assureurs et institutions publiques demandent
          de plus en plus un document CO₂e standardisé à leurs fournisseurs.
          Cette section regroupe des guides courts et opérationnels pour
          comprendre le « pourquoi », le périmètre d’usage, et comment répondre
          sans audit ni reporting CSRD/ESRS.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* SUMMARY / QUICK LINKS */}
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-8 shadow-sm">
          <h2 className="text-xl font-bold text-[#0B3A63] mb-3">
            Accès rapide
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
            Commencez par l’article 1 si vous devez répondre à une demande
            client/acheteur/bank/assureur. Les autres articles détaillent les
            usages institutionnels les plus fréquents.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href={routes.a1}
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-[#0B3A63] text-white font-semibold hover:bg-[#092f50] transition"
            >
              Lire le guide principal
            </Link>
            <Link
              href={routes.generate}
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-[#0B3A63] text-[#0B3A63] font-semibold hover:bg-[#0B3A63] hover:text-white transition"
            >
              Générer une attestation
            </Link>
          </div>

          <p className="mt-4 text-xs text-gray-500 leading-relaxed">
            Note : ces guides décrivent des usages institutionnels courants. Ils
            ne constituent pas un conseil juridique, ni une interprétation
            réglementaire.
          </p>
        </div>

        {/* ARTICLES LIST */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-[#0B3A63]">
            Les 5 guides (FR)
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {/* ARTICLE 1 */}
            <article className="p-7 rounded-2xl border border-gray-200 bg-white shadow-sm">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                Guide 1 — Réponse fournisseur
              </p>
              <h3 className="text-xl font-bold text-[#0B3A63] mb-2">
                <Link
                  href={routes.a1}
                  className="hover:underline underline-offset-4"
                >
                  Attestation CO₂e fournisseur : à quoi sert-elle et que mettre
                  dedans
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Le guide “par défaut” pour répondre à une demande CO₂e dans un
                onboarding ou un appel d’offres : périmètre, limites, preuves
                minimales attendues, et erreurs fréquentes à éviter.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={routes.a1}
                  className="text-sm font-semibold text-[#0B3A63] hover:text-[#15B097] transition-colors"
                >
                  Lire →
                </Link>
                <Link
                  href={routes.generate}
                  className="text-sm font-semibold text-[#0B3A63] hover:text-[#15B097] transition-colors"
                >
                  Générer une attestation →
                </Link>
              </div>
            </article>

            {/* ARTICLE 2 */}
            <article className="p-7 rounded-2xl border border-gray-200 bg-[#F8FAFC] shadow-sm">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                Guide 2 — Onboarding
              </p>
              <h3 className="text-xl font-bold text-[#0B3A63] mb-2">
                <Link
                  href={routes.a2}
                  className="hover:underline underline-offset-4"
                >
                  Onboarding fournisseur : pourquoi une estimation CO₂e est
                  demandée
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Comprendre l’usage “vendor onboarding” : document attendu,
                format, cohérence, cycle de validation, et comment réduire le
                temps de revue côté acheteur.
              </p>
              <Link
                href={routes.a2}
                className="text-sm font-semibold text-[#0B3A63] hover:text-[#15B097] transition-colors"
              >
                Lire →
              </Link>
            </article>

            {/* ARTICLE 3 */}
            <article className="p-7 rounded-2xl border border-gray-200 bg-white shadow-sm">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                Guide 3 — Screening ESG
              </p>
              <h3 className="text-xl font-bold text-[#0B3A63] mb-2">
                <Link
                  href={routes.a3}
                  className="hover:underline underline-offset-4"
                >
                  Screening ESG achats : comment les grands comptes classent les
                  fournisseurs
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                À quoi sert un indicateur CO₂e dans le screening achats : tri,
                catégorisation, seuils, et pourquoi la standardisation du format
                compte plus que le niveau de détail.
              </p>
              <Link
                href={routes.a3}
                className="text-sm font-semibold text-[#0B3A63] hover:text-[#15B097] transition-colors"
              >
                Lire →
              </Link>
            </article>

            {/* ARTICLE 4 */}
            <article className="p-7 rounded-2xl border border-gray-200 bg-[#F8FAFC] shadow-sm">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                Guide 4 — Banques & assureurs
              </p>
              <h3 className="text-xl font-bold text-[#0B3A63] mb-2">
                <Link
                  href={routes.a4}
                  className="hover:underline underline-offset-4"
                >
                  Banques et assureurs : pourquoi ils demandent un indicateur
                  CO₂e
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Comprendre l’angle “risque” et “documentation” : pourquoi un
                indicateur CO₂e est demandé même sans audit ni reporting
                CSRD/ESRS, et comment cadrer l’usage correctement.
              </p>
              <Link
                href={routes.a4}
                className="text-sm font-semibold text-[#0B3A63] hover:text-[#15B097] transition-colors"
              >
                Lire →
              </Link>
            </article>

            {/* ARTICLE 5 */}
            <article className="p-7 rounded-2xl border border-gray-200 bg-white shadow-sm">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                Guide 5 — Vérification
              </p>
              <h3 className="text-xl font-bold text-[#0B3A63] mb-2">
                <Link
                  href={routes.a5}
                  className="hover:underline underline-offset-4"
                >
                  Vérifier une attestation CO₂e : ce que les reviewers contrôlent
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Comment un reviewer (procurement / banque / assurance) vérifie
                rapidement l’authenticité et l’intégrité d’un document, et
                quelles preuves minimales rendent une attestation “acceptable”.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={routes.a5}
                  className="text-sm font-semibold text-[#0B3A63] hover:text-[#15B097] transition-colors"
                >
                  Lire →
                </Link>
                <Link
                  href={routes.verify}
                  className="text-sm font-semibold text-[#0B3A63] hover:text-[#15B097] transition-colors"
                >
                  Page “Vérifier une attestation” →
                </Link>
              </div>
            </article>
          </div>
        </div>

        {/* BOUNDARIES / DISCLAIMER */}
        <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-[#0B3A63] mb-3">
            Périmètre et limites
          </h2>
          <ul className="list-disc ml-6 text-sm text-gray-700 space-y-2 leading-relaxed">
            <li>
              Ces guides décrivent un usage institutionnel d’un indicateur CO₂e
              “minimal”, compatible avec des workflows (screening, onboarding,
              due diligence).
            </li>
            <li>
              Ils ne remplacent pas un inventaire GES (Scopes 1–2–3), ni un audit,
              ni un reporting réglementaire (CSRD/ESRS).
            </li>
            <li>
              Une attestation Certif-Scope est indicative et dépend des données
              déclarées par l’utilisateur.
            </li>
          </ul>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href={routes.product}
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition"
            >
              Voir la présentation du produit
            </Link>
            <Link
              href={routes.generate}
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-[#15B097] text-white font-semibold hover:opacity-95 transition"
            >
              Répondre à une demande maintenant
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
