export const metadata = {
  title: "Pricing — Certif-Scope",
  description: "Transparent one-time pricing for CO₂e attestations. No subscription, no hidden fees.",
};

export default function PricingPage() {
  return (
    <div
      id="pricing-page"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4">
          Pricing
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Simple one-time pricing. No subscription, no commitment.  
          Instant delivery • Institutional format • Verification guaranteed.
        </p>
      </div>

      {/* PRICING GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {/* PLAN 1 — SINGLE ATTESTATION */}
        <div className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
          <h3 className="text-xl font-bold mb-3 text-[#0B3A63]">
            Single Attestation
          </h3>

          <p className="text-5xl font-extrabold text-[#1FB6C1] mb-4">
            89€
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Instant CO₂e attestation in PDF • Unique ID • QR verification • Cryptographic hash
          </p>

          <ul className="text-left text-gray-700 dark:text-gray-300 space-y-2 mb-8 mx-auto max-w-xs">
            <li>• Instant PDF generation</li>
            <li>• Verification QR code</li>
            <li>• Permanent read-only access</li>
            <li>• Fully standardized format</li>
          </ul>

          <a
            href="/#assessment"
            className="bg-[#1FB6C1] hover:bg-[#17a2a8] text-white font-semibold px-10 py-3 rounded-xl shadow-md block transition"
          >
            Generate Attestation
          </a>
        </div>

        {/* PLAN 2 — SME PACK */}
        <div className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
          <h3 className="text-xl font-bold mb-3 text-[#0B3A63]">
            SME Pack (5 Attestations)
          </h3>

          <p className="text-5xl font-extrabold text-[#1FB6C1] mb-4">
            349€
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            For companies managing multiple suppliers or internal entities.
          </p>

          <ul className="text-left text-gray-700 dark:text-gray-300 space-y-2 mb-8 mx-auto max-w-xs">
            <li>• 5 independent PDFs</li>
            <li>• Discounted rate</li>
            <li>• Multi-entity support</li>
            <li>• Unified procurement format</li>
          </ul>

          <a
            href="/contact"
            className="bg-[#0B3A63] hover:bg-[#083253] text-white font-semibold px-10 py-3 rounded-xl shadow-md block transition"
          >
            Request Access
          </a>
        </div>

        {/* PLAN 3 — PARTNER PROGRAM */}
        <div className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 opacity-60 text-center">
          <h3 className="text-xl font-bold mb-3 text-[#0B3A63]">
            Partner Program (API + Volume)
          </h3>

          <p className="text-5xl font-extrabold text-gray-400 mb-4">
            Coming Soon
          </p>

          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Automated issuance for banks, insurers, procurement platforms and ERP vendors.
          </p>

          <ul className="text-left text-gray-500 dark:text-gray-400 space-y-2 mb-8 mx-auto max-w-xs">
            <li>• Automated generation API</li>
            <li>• Volume pricing</li>
            <li>• Direct integration</li>
            <li>• Dashboard for audits</li>
          </ul>

          <span className="bg-white border border-gray-400 text-gray-500 font-semibold px-10 py-3 rounded-xl block cursor-not-allowed">
            Coming Soon
          </span>
        </div>
      </div>

      {/* FOOTNOTE */}
      <p className="text-center text-gray-500 dark:text-gray-400 mt-12 text-sm">
        All prices are one-time payments. No subscription, no recurring charges.
      </p>
    </div>
  );
}
