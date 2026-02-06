// src/app/fr/verify/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — VERIFY (FR)
====================================================== */

export const metadata: Metadata = {
  title: "Vérifier une attestation — Certif-Scope",
  description:
    "Vérifiez l’authenticité et l’intégrité d’une attestation CO₂e Certif-Scope. Vérification publique, indépendante et possible hors ligne.",
  alternates: {
    canonical: "https://www.certif-scope.com/fr/verify",
  },
  openGraph: {
    title: "Vérifier une attestation — Certif-Scope",
    description:
      "Vérification publique d’une attestation CO₂e Certif-Scope : authenticité, intégrité et limites de la vérification.",
    url: "https://www.certif-scope.com/fr/verify",
    siteName: "Certif-Scope",
    type: "website",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function VerifyFRPage() {
  return (
    <section
      id="verify"
      data-section="verify"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WEBPAGE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Vérifier une attestation CO₂e",
            description:
              "Page publique de vérification d’une attestation CO₂e Certif-Scope, avec explication des garanties techniques et de leurs limites.",
            url: "https://www.certif-scope.com/fr/verify",
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

      {/* HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Attestation CO₂e — Vérification
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Vérifier une attestation
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Cette page explique comment vérifier l’authenticité et l’intégrité
          d’une attestation CO₂e Certif-Scope. La vérification confirme que le
          document n’a pas été modifié depuis son émission et qu’il provient de
          Certif-Scope. Elle ne valide pas l’exactitude des données financières
          fournies par l’utilisateur et ne constitue pas un audit.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="p-10 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#0B3A63] mb-4">
            Vérification simple (lecteur PDF)
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ouvrez le PDF dans un lecteur supportant les signatures numériques
            (ex. Adobe Acrobat, Foxit). Accédez au panneau “Signature” ou
            “Sécurité” et vérifiez que le document est indiqué comme “signé” et
            “non modifié”.
          </p>
        </div>

        <div className="p-10 bg-white border border-gray-200 rounded-2xl shadow-md">
          <h2 className="text-2xl font-extrabold text-[#0B3A63] mb-4">
            Vérification technique (hors ligne)
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Pour les équipes techniques (audit, sécurité, développeurs), une
            procédure de vérification complète (modèle de signature, clé
            publique, structure signée, étapes CLI & code) est disponible.
          </p>

          <div className="mt-6">
            <Link
              href="/fr/verify/techincal"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#0B3A63] text-white font-semibold hover:opacity-95 transition"
            >
              Ouvrir le guide de vérification technique
            </Link>
            <p className="mt-3 text-sm text-gray-600">
              Vérification indépendante, possible hors ligne, sans API ni compte.
            </p>
          </div>
        </div>

        <div className="p-10 bg-[#0B3A63] text-white rounded-2xl shadow-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20 pointer-events-none" />
          <h2 className="text-2xl font-extrabold relative z-10 mb-4">
            Limites de la vérification
          </h2>
          <ul className="relative z-10 space-y-2 text-white/90 leading-relaxed">
            <li>
              • La vérification confirme l’intégrité et l’authenticité du
              document.
            </li>
            <li>
              • Elle ne confirme pas l’exactitude ni l’exhaustivité des données
              de dépenses fournies.
            </li>
            <li>
              • Elle ne constitue pas une conformité CSRD/ESRS, ni un inventaire
              GES ISO 14064-1, ni un audit.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
