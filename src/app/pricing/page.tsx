export const metadata = {
  title: "Pricing — Certif-Scope",
  description: "Simple and transparent fixed pricing. No subscription and no hidden fees.",
};

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-20 pb-24">

      {/* HEADER UNIFORMISÉ */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-[#0B3A63] mb-4">
          Pricing
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Simple and transparent fixed pricing.<br />
          No subscription and no hidden fees.
        </p>
      </div>

      {/* BLOC PRINCIPAL */}
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl font-bold text-[#0B3A63] text-center mb-8">
          One-time attestation pricing
        </h2>

        <p className="text-center text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
          Certif-Scope provides instant, verifiable CO₂e attestations suitable for
          procurement, banking and compliance workflows. Pricing is fixed per attestation.
        </p>

        {/* CARD PRICE */}
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-10 border border-gray-200 dark:border-gray-700">

          {/* PRICE BLOCK IMPROVED */}
          <div className="text-center mb-6">
            <p className="text-6xl font-extrabold text-[#1FB6C1] tracking-tight">
              49€
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Certified CO₂e attestation • Instant PDF • Verification URL + QR code • Cryptographic integrity
            </p>
          </div>

          {/* FEATURES LIST */}
          <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">

            <li className="flex items-start gap-3">
              <span className="text-[#1FB6C1] text-xl">•</span>
              <span>Instant CO₂e estimation</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#1FB6C1] text-xl">•</span>
              <span>Institutional PDF format</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#1FB6C1] text-xl">•</span>
              <span>Unique attestation identifier</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#1FB6C1] text-xl">•</span>
              <span>Cryptographic hash verification</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#1FB6C1] text-xl">•</span>
              <span>Verification link with QR code</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#1FB6C1] text-xl">•</span>
              <span>Permanent read-only access</span>
            </li>

          </ul>

          {/* CTA BUTTON — UNIFORMISÉ */}
          <div className="mt-10 text-center">
            <button
              className="
                bg-[#1FB6C1]
                hover:bg-[#17a2a8]
                text-white
                text-base font-semibold tracking-tight
                px-12 py-4
                rounded-xl
                shadow-lg
                transition
              "
            >
              Generate Attestation
            </button>
          </div>

        </div>

        {/* FOOTER TEXT */}
        <p className="text-gray-600 dark:text-gray-300 mt-10 text-center text-sm">
          No subscription. Pay only when you generate an attestation.
        </p>
      </div>
    </div>
  );
}
