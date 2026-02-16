import type { Metadata } from "next";
import GenerateAttestationButton from "@/components/GenerateAttestationButton";

/* ======================================================
   SEO METADATA — PRICING (DE)
====================================================== */

export const metadata: Metadata = {
  title: "Preise — Certif-Scope",
  description:
    "Transparente Preise für standardisierte CO₂e-Bescheinigungen. Kein Abonnement. Gültigkeit 1 Jahr.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/pricing",
    languages: {
      en: "https://www.certif-scope.com/pricing",
      fr: "https://www.certif-scope.com/fr/pricing",
      de: "https://www.certif-scope.com/de/pricing",
    },
  },
  openGraph: {
    title: "Preise — Certif-Scope",
    description:
      "Transparente Preise für standardisierte CO₂e-Bescheinigungen. Kein Abonnement. Gültigkeit 1 Jahr.",
    url: "https://www.certif-scope.com/de/pricing",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function PricingPageDE() {
  return (
    <section
      id="pricing"
      data-section="pricing"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (STRICT, NON-PRODUCT) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Preise — Certif-Scope",
            url: "https://www.certif-scope.com/de/pricing",
            description:
              "Preisinformationen für standardisierte, indikative CO₂e-Bescheinigungen (spend-based). Keine Abonnements. Gültigkeit 1 Jahr.",
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
          CO₂e-Bescheinigung — Preise
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Einfach. Transparent. Ohne Abo.
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Fester Preis pro CO₂e-Bescheinigung. Kein Abonnement. Gültigkeit: 1
          Jahr. Jedes Dokument enthält integrierte Verifikation und
          Integritätsschutz.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* SINGLE */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 text-center flex flex-col">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Einzelbescheinigung
          </h2>

          <p className="text-5xl font-extrabold text-[#1FB6C1] mb-1 tracking-tight">
            89€
          </p>
          <p className="text-sm text-gray-500 mb-4">Gültig 1 Jahr</p>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Sofort-PDF • QR-Verifikation • Integrierter Integritätsschutz
          </p>

          <ul className="text-left mx-auto max-w-xs space-y-2 text-gray-700 text-sm mb-8">
            <li>• Standardisierte CO₂e-PDF-Bescheinigung</li>
            <li>• Eindeutige Verifikations-ID</li>
            <li>• QR-Code zur Verifikation</li>
            <li>• Datensatzname + Version</li>
            <li>• Gültigkeit: 1 Jahr</li>
          </ul>

          <GenerateAttestationButton />
        </div>

        {/* PACK 5 */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 text-center flex flex-col">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Paket mit 5
          </h2>

          <p className="text-4xl font-extrabold text-[#0B3A63] mb-1">349€</p>
          <p className="text-sm text-gray-500 mb-4">(69€ pro Bescheinigung)</p>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Für wiederkehrende oder professionelle Nutzung.
          </p>

          <a
            href="/api/checkout-pack?pack=5"
            className="bg-[#0B3A63] hover:bg-[#092f50] text-white font-semibold px-10 py-3 rounded-xl mt-auto text-center rounded-xl"
          >
            Paket mit 5 kaufen
          </a>
        </div>

        {/* PACK 10 */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 text-center flex flex-col">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Paket mit 10
          </h2>

          <p className="text-4xl font-extrabold text-[#0B3A63] mb-1">590€</p>
          <p className="text-sm text-gray-500 mb-4">(59€ pro Bescheinigung)</p>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Ideal bei regelmäßigem jährlichem Bedarf.
          </p>

          <a
            href="/api/checkout-pack?pack=10"
            className="bg-[#0B3A63] hover:bg-[#092f50] text-white font-semibold px-10 py-3 rounded-xl mt-auto text-center rounded-xl"
          >
            Paket mit 10 kaufen
          </a>
        </div>

        {/* PACK 50 */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 text-center flex flex-col col-span-full lg:col-span-1 mx-auto">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Paket mit 50
          </h2>

          <p className="text-4xl font-extrabold text-[#0B3A63] mb-1">2,450€</p>
          <p className="text-sm text-gray-500 mb-4">(49€ pro Bescheinigung)</p>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Für große Lieferanten-Ökosysteme konzipiert.
          </p>

          <a
            href="/api/checkout-pack?pack=50"
            className="bg-[#0B3A63] hover:bg-[#092f50] text-white font-semibold px-10 py-3 rounded-xl mt-auto text-center rounded-xl"
          >
            Paket mit 50 kaufen
          </a>
        </div>

        {/* ENTERPRISE */}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-10 text-center col-span-full flex flex-col">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Enterprise & API
          </h2>

          <p className="text-4xl font-extrabold text-gray-400 mb-3">
            Demnächst verfügbar
          </p>

          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
            Automatisierte Ausstellung und Integrationen für große Plattformen.
          </p>

          <button
            disabled
            className="px-10 py-3 rounded-xl font-semibold text-white bg-gray-400 cursor-not-allowed mx-auto"
          >
            Enterprise-Zugang — Q2 2026
          </button>
        </div>
      </div>

      <p className="text-gray-600 text-center text-xs mt-12 leading-relaxed">
        Nur indikative spend-based Berechnung. Nicht auditiert.
      </p>
    </section>
  );
}
