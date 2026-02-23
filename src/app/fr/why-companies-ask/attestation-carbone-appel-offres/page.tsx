// PATH: src/app/fr/why-companies-ask/attestation-carbone-appel-offres/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — BILAN CARBONE APPEL D’OFFRES (PAGE EXISTANTE)
   Objectif : se positionner sur les requêtes "bilan carbone appel d’offres"
   tout en restant subtil (attestation = livrable).
====================================================== */

export const metadata: Metadata = {
  title:
    "Bilan carbone appel d’offres — Ce qui est réellement demandé — Certif-Scope (FR)",
  description:
    "Comprendre ce que signifie “bilan carbone” dans un appel d’offres : indicateur CO₂e attendu, niveaux d’exigence, et quand un document indicatif standardisé suffit.",
  alternates: {
    canonical:
      "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-appel-offres",
    languages: {
      en: "https://www.certif-scope.com/why-companies-ask/carbon-attestation-tender",
      fr: "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-appel-offres",
    },
  },
  openGraph: {
    title: "Bilan carbone appel d’offres — Ce qui est réellement demandé",
    description:
      "Pourquoi un “bilan carbone” apparaît dans les appels d’offres, ce qui est attendu en pratique et comment répondre avec un document CO₂e indicatif adapté au screening.",
    url: "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-appel-offres",
    siteName: "Certif-Scope",
    type: "website",
    locale: "fr_FR",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function CarbonAttestationTenderFR() {
  const pageUrl =
    "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-appel-offres";

  return (
    <section
      id="carbon-attestation-tender"
      data-section="carbon-attestation-tender"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (GUIDE) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Bilan carbone appel d’offres",
            url: pageUrl,
            description:
              "Guide pratique : comprendre ce que recouvre la demande de “bilan carbone” dans un appel d’offres et comment répondre avec un indicateur CO₂e cohérent et un document indicatif adapté au screening.",
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
                  name: "Bilan carbone appel d’offres",
                  item: pageUrl,
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
          Comprendre les demandes “bilan carbone” — Cas n°2
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Bilan carbone en appel d’offres : ce qui est réellement demandé
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Dans un appel d’offres, la mention “bilan carbone” ne signifie pas
          automatiquement qu’un inventaire complet (avec audit) est exigé. Le
          plus souvent, l’acheteur cherche un{" "}
          <strong>indicateur CO₂e comparable</strong> entre candidats, utile
          pour une note environnementale ou pour la documentation interne des
          achats.
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
            Vérifier un document
          </Link>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* MAIN */}
        <div className="lg:col-span-8 space-y-14">
          {/* 1 */}
          <section id="why">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              1. Pourquoi “bilan carbone” apparaît dans les appels d’offres
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Les politiques d’achats responsables se généralisent dans le
              secteur public et privé. Les acheteurs doivent de plus en plus
              <strong> démontrer</strong> qu’ils comparent les offres avec des
              éléments environnementaux, notamment un indicateur CO₂e, afin de
              justifier une décision et d’alimenter leur reporting interne.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Ce que l’acheteur cherche (en pratique)
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>un indicateur CO₂e lisible et comparable</li>
                <li>un justificatif à joindre au dossier</li>
                <li>un élément de notation environnementale</li>
                <li>une base simple pour suivre les progrès fournisseurs</li>
              </ul>
            </div>
          </section>

          {/* 2 */}
          <section id="selection">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2. Critère de notation vs exigence “bilan carbone” formelle
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Le mot “bilan carbone” est souvent employé de manière générique.
              Dans beaucoup de dossiers, il s’agit d’un{" "}
              <strong>critère de comparaison</strong>, pas d’une obligation
              réglementaire ou d’un audit. La différence est essentielle : un
              critère de comparaison accepte une estimation cohérente si la
              méthode est explicitée, alors qu’une exigence formelle impose un
              cadre méthodologique et des justificatifs précis.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Cas le plus fréquent
                </h3>
                <ul className="list-disc ml-6 text-green-900/90 space-y-2">
                  <li>critère environnemental pondéré</li>
                  <li>indicateur demandé à titre comparatif</li>
                  <li>format libre (si cohérent)</li>
                  <li>méthode non imposée ou peu détaillée</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  Cas plus rare
                </h3>
                <ul className="list-disc ml-6 text-red-900/90 space-y-2">
                  <li>référentiel imposé (norme / méthode explicitée)</li>
                  <li>périmètre détaillé demandé</li>
                  <li>éléments de preuve exhaustifs</li>
                  <li>attente d’un audit ou d’une vérification tierce</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3 */}
          <section id="expected">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3. Ce qui est attendu dans le dossier : lisibilité, cohérence,
              traçabilité
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              En appel d’offres, l’enjeu est moins la précision scientifique que
              la capacité à fournir un indicateur{" "}
              <strong>compréhensible, comparable et traçable</strong>. Un
              document clair, daté, avec une méthode expliquée et des limites
              explicites est souvent préférable à un contenu trop technique.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Éléments généralement appréciés
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>résultat CO₂e agrégé (un indicateur unique)</li>
                <li>année de référence + date d’émission</li>
                <li>méthode déclarée (principe et version)</li>
                <li>périmètre et limites clairement indiqués</li>
                <li>document PDF identifiable et partageable</li>
                <li>mécanisme de vérification (intégrité / authenticité)</li>
              </ul>
            </div>
          </section>

          {/* 4 */}
          <section id="acceptable">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4. Quand un document indicatif “bilan carbone” suffit
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Un document indicatif est généralement suffisant lorsque la demande
              vise un <strong>screening</strong> (comparaison des candidats) ou
              une justification interne. Il devient insuffisant uniquement quand
              le cahier des charges impose explicitement un dispositif complet
              (périmètre détaillé, preuves, vérification tierce).
            </p>

            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>critère environnemental non éliminatoire</li>
              <li>pondération limitée dans la note finale</li>
              <li>méthode non imposée ou formulée de manière générale</li>
              <li>demande d’un indicateur CO₂e estimatif</li>
              <li>objectif : comparaison et documentation des achats</li>
            </ul>
          </section>

          {/* 5 */}
          <section id="full-carbon">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5. Quand un bilan carbone complet devient nécessaire
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Un bilan carbone complet est généralement requis lorsque l’appel
              d’offres impose un cadre détaillé, des justificatifs techniques ou
              une vérification externe. Ce cas existe, mais il reste minoritaire
              dans la plupart des consultations généralistes. Lorsqu’une exigence
              formelle est explicitée, il faut aligner le livrable sur le cadre
              demandé et prévoir un délai et un budget adaptés.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              6. Questions fréquentes (bilan carbone & appels d’offres)
            </h2>

            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Est-ce éliminatoire de ne pas avoir de “bilan carbone” ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Le plus souvent, non. Dans de nombreux dossiers, l’indicateur
                  CO₂e sert à comparer les offres. Une estimation cohérente,
                  claire et traçable peut suffire si aucune exigence formelle
                  n’est imposée.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Une estimation spend-based peut-elle être acceptée ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Oui, lorsque l’appel d’offres ne fixe pas une méthode unique.
                  La condition est d’indiquer explicitement la méthode et les
                  limites, afin que l’acheteur comprenne ce que représente
                  l’indicateur.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Pourquoi ces critères apparaissent-ils de plus en plus ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Les organisations doivent documenter des achats responsables,
                  répondre à des attentes ESG internes et structurer la relation
                  fournisseurs. L’indicateur CO₂e devient un élément simple à
                  comparer et à archiver.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="pt-2">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Répondre rapidement à une demande “bilan carbone” dans un appel
                d’offres
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Quand la demande porte sur un indicateur CO₂e pour comparer les
                candidats, l’objectif est souvent de fournir un document clair,
                daté, avec une méthode explicite et des limites visibles — sans
                surdimensionner la démarche.
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
              <nav aria-label="Sommaire bilan carbone appel d’offres">
                <ul className="space-y-2 text-sm">
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#why">
                      1. Pourquoi c’est demandé
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#selection"
                    >
                      2. Critère vs exigence
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#expected"
                    >
                      3. Ce qui est attendu
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#acceptable"
                    >
                      4. Quand ça suffit
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#full-carbon"
                    >
                      5. Quand un bilan complet est requis
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
                Rappel de périmètre
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Ce guide traite des demandes “bilan carbone” rencontrées en
                appel d’offres et des formats indicatifs généralement utilisés
                pour le screening. Il ne remplace pas un audit ni un dispositif
                réglementaire lorsque ceux-ci sont explicitement exigés.
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
