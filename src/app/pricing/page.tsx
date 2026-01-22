import GenerateAttestationButton from "@/components/GenerateAttestationButton";

export const metadata = {
  title: "Pricing — Certif-Scope",
  description:
    "Transparent pricing for standardized CO₂e Attestations. No subscription. Validity 1 year.",
};

export default function PricingPage() {
  return (
    <section
      id="pricing"
      data-section="pricing"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* MICRO LABEL */}
      <p className="uppercase text-xs md:text-sm font-medium text-[#64748B] tracking-wider text-center mb-3">
        CO₂e Attestations — Pricing
      </p>

      {/* HEADING */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63]">
        Simple, Transparent Pricing
      </h1>

      <p className="text-center text-gray-600 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
        Fixed price per attestation. No subscription. Validity 1 year.
        Spend-based method with built-in verification included in every PDF.
      </p>

      {/* SEPARATOR */}
      <div className="w-20 h-[2px] bg-gray-300 mx-auto my-12" />

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* SINGLE ATTESTATION — ACTIVE */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 text-center flex flex-col">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Single Attestation
          </h3>

          <p className="text-5xl font-extrabold text-[#1FB6C1] mb-1 tracking-tight">
            89€
          </p>
          <p className="text-sm text-gray-500 mb-4">Validity 1 year</p>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Instant PDF • Verification QR • Embedded integrity safeguards
          </p>

          <ul className="text-left mx-auto max-w-xs space-y-2 text-gray-700 text-sm mb-8">
            <li>• Standardized CO₂e PDF</li>
            <li>• Unique verification ID</li>
            <li>• QR code verification</li>
            <li>• Dataset name + version</li>
            <li>• Validity 1 year</li>
          </ul>

          <GenerateAttestationButton />
        </div>

        {/* PACK 5 — DISABLED */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 text-center flex flex-col">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Pack of 5
          </h3>

          <p className="text-4xl font-extrabold text-gray-400 mb-1">
            349€
          </p>
          <p className="text-sm text-gray-500 mb-4">
            (69€ per attestation)
          </p>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            For recurring or professional usage.
          </p>

          <button
            disabled
            className="bg-gray-300 text-gray-600 font-semibold px-10 py-3 rounded-xl cursor-not-allowed mt-auto"
          >
            Available after purchase
          </button>
        </div>

        {/* PACK 10 — DISABLED */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 text-center flex flex-col">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Pack of 10
          </h3>

          <p className="text-4xl font-extrabold text-gray-400 mb-1">
            590€
          </p>
          <p className="text-sm text-gray-500 mb-4">
            (59€ per attestation)
          </p>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Ideal for steady annual demand.
          </p>

          <button
            disabled
            className="bg-gray-300 text-gray-600 font-semibold px-10 py-3 rounded-xl cursor-not-allowed mt-auto"
          >
            Available after purchase
          </button>
        </div>

        {/* PACK 50 — DISABLED */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 text-center flex flex-col col-span-full lg:col-span-1 mx-auto">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Pack of 50
          </h3>

          <p className="text-4xl font-extrabold text-gray-400 mb-1">
            2,450€
          </p>
          <p className="text-sm text-gray-500 mb-4">
            (49€ per attestation)
          </p>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Designed for large supplier ecosystems.
          </p>

          <button
            disabled
            className="bg-gray-300 text-gray-600 font-semibold px-10 py-3 rounded-xl cursor-not-allowed mt-auto"
          >
            Available after purchase
          </button>
        </div>

        {/* ENTERPRISE */}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-10 text-center col-span-full flex flex-col">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Enterprise & API
          </h3>

          <p className="text-4xl font-extrabold text-gray-400 mb-3">
            Coming Soon
          </p>

          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
            Automated issuance and integrations for large platforms.
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
      <p className="text-gray-600 text-center text-xs mt-12 leading-relaxed">
        Spend-based indicative calculation only. Not audited.
      </p>
    </section>
  );
}
