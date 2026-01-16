"use client";

export const metadata = {
  title: "Pricing — Certif-Scope",
  description: "Transparent pricing for standardized CO₂e Attestations. No subscription. Validity 1 year.",
};

export default function PricingPage() {
  return (
    <section
      id="pricing"
      data-section="pricing"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* MICRO LABEL */}
      <p
        data-i18n="pricing.label"
        className="uppercase text-xs md:text-sm font-medium text-[#64748B] tracking-wider text-center mb-3"
      >
        CO₂e Attestations — Pricing
      </p>

      {/* HEADING */}
      <h1
        data-i18n="pricing.title"
        className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63]"
      >
        Simple, Transparent Pricing
      </h1>

      <p
        data-i18n="pricing.description"
        className="text-center text-gray-600 dark:text-gray-300 text-lg mt-4 max-w-2xl mx-auto leading-relaxed"
      >
        Fixed price per attestation. No subscription. Validity 1 year. Spend-based method with full
        verification metadata included in every PDF.
      </p>

      {/* SEPARATOR */}
      <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-12" />

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* SINGLE ATTESTATION */}
        <div
          data-i18n="pricing.single"
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-10 text-center flex flex-col"
        >
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">Single Attestation</h3>

          <p className="text-5xl font-extrabold text-primary mb-1 tracking-tight">89€</p>
          <p className="text-sm text-gray-500 mb-4">Validity 1 year</p>

          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
            Instant PDF • Verification QR • Integrity hash • Stable emission dataset
          </p>

          {/* INCLUDED BLOCK */}
          <ul className="text-left mx-auto max-w-xs space-y-2 text-gray-700 dark:text-gray-300 text-sm mb-8">
            <li>• Standardized CO₂e PDF</li>
            <li>• Unique verification ID</li>
            <li>• Cryptographic integrity hash</li>
            <li>• QR link for offline validation</li>
            <li>• Dataset name + version</li>
            <li>• Validity 1 year</li>
          </ul>

          <a
            href="#assessment"
            data-i18n="pricing.single.cta"
            className="bg-[#1FB6C1] hover:bg-[#17a2a8] text-white font-semibold px-10 py-3 rounded-xl shadow-md text-center transition mt-auto"
          >
            Generate Attestation
          </a>
        </div>

        {/* PACK 5 */}
        <div
          data-i18n="pricing.pack5"
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-10 text-center flex flex-col"
        >
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">Pack of 5</h3>

          <p className="text-4xl font-extrabold text-primary mb-1 tracking-tight">349€</p>
          <p className="text-sm text-gray-500 mb-4">(69€ per attestation)</p>

          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
            Recommended for accountants, consultants or recurring procurement requests.
          </p>

          <a
            href="#assessment"
            data-i18n="pricing.pack5.cta"
            className="bg-[#0B3A63] hover:bg-[#083253] text-white font-semibold px-10 py-3 rounded-xl shadow-md transition mt-auto"
          >
            Use Pack
          </a>
        </div>

        {/* PACK 10 */}
        <div
          data-i18n="pricing.pack10"
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-10 text-center flex flex-col"
        >
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">Pack of 10</h3>

          <p className="text-4xl font-extrabold text-primary mb-1 tracking-tight">590€</p>
          <p className="text-sm text-gray-500 mb-4">(59€ per attestation)</p>

          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
            Ideal for organisations with a steady flow of supplier or banking requests.
          </p>

          <a
            href="#assessment"
            data-i18n="pricing.pack10.cta"
            className="bg-[#0B3A63] hover:bg-[#083253] text-white font-semibold px-10 py-3 rounded-xl shadow-md transition mt-auto"
          >
            Use Pack
          </a>
        </div>

        {/* PACK 50 */}
        <div
          data-i18n="pricing.pack50"
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-10 text-center flex flex-col col-span-full lg:col-span-1 mx-auto"
        >
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">Pack of 50</h3>

          <p className="text-4xl font-extrabold text-primary mb-1 tracking-tight">2,450€</p>
          <p className="text-sm text-gray-500 mb-4">(49€ per attestation)</p>

          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
            For large groups managing a wide supplier base and predictable annual demands.
          </p>

          <a
            href="#assessment"
            data-i18n="pricing.pack50.cta"
            className="bg-[#0B3A63] hover:bg-[#083253] text-white font-semibold px-10 py-3 rounded-xl shadow-md transition mt-auto"
          >
            Use Pack
          </a>
        </div>

        {/* ENTERPRISE BLOCK */}
        <div
          data-i18n="pricing.enterprise"
          className="bg-gray-100 dark:bg-gray-900 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-10 text-center col-span-full flex flex-col"
        >
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">Enterprise & API</h3>

          <p className="text-4xl font-extrabold text-gray-400 mb-3 tracking-tight">Coming Soon</p>

          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
            High-volume issuance, token-based authentication, automated onboarding, and SLA
            guarantees for large platforms and corporate procurement networks.
          </p>

          <button
            disabled
            className="px-10 py-3 rounded-xl font-semibold text-white bg-gray-400 cursor-not-allowed mx-auto"
          >
            Enterprise Access — Q2 2026
          </button>
        </div>
      </div>

      {/* FOOTER DISCLAIMER */}
      <p
        data-i18n="pricing.footer"
        className="text-gray-600 dark:text-gray-300 text-center text-xs mt-12 leading-relaxed"
      >
        Spend-based indicative calculation only. Validity 1 year. Not audited. Not CSRD/ESRS-compliant.
      </p>
    </section>
  );
}
