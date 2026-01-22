import GenerateAttestationButton from "@/components/GenerateAttestationButton";

export const metadata = {
  title: "Pricing — Certif-Scope",
  description:
    "Transparent pricing for standardized CO₂e Attestations. Fixed price, no subscription, validity one year.",
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
        CO₂e Attestation — Pricing
      </p>

      {/* HEADING */}
      <h1
        data-i18n="pricing.title"
        className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63]"
      >
        Simple, Transparent Pricing
      </h1>

      <p
        data-i18n="pricing.intro"
        className="text-center text-gray-600 text-lg mt-4 max-w-2xl mx-auto leading-relaxed"
      >
        One fixed price per attestation. No subscription.  
        Designed for institutional procurement, banking and ESG screening workflows.
      </p>

      {/* SEPARATOR */}
      <div className="w-20 h-[2px] bg-gray-300 mx-auto my-12" />

      {/* PRICING CARD */}
      <div className="max-w-xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-12 text-center flex flex-col">
          <h2
            data-i18n="pricing.single.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            Standard CO₂e Attestation
          </h2>

          <div className="mb-2">
            <span className="text-5xl font-extrabold text-[#1FB6C1] tracking-tight">
              89€
            </span>
          </div>

          <p
            data-i18n="pricing.single.validity"
            className="text-sm text-gray-500 mb-6"
          >
            Valid for one (1) year from date of issue
          </p>

          {/* INCLUDED */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-[#0B3A63] mb-3">
              What’s included
            </p>

            <ul className="text-left mx-auto max-w-sm space-y-2 text-gray-700 text-sm leading-relaxed">
              <li>• Standardized institutional-grade PDF</li>
              <li>• Spend-based CO₂e result (indicative)</li>
              <li>• Unique attestation identifier</li>
              <li>• Verification link and QR code</li>
              <li>• Embedded integrity safeguards</li>
              <li>• Dataset name and version</li>
            </ul>
          </div>

          {/* CTA */}
          <GenerateAttestationButton />

          {/* VALIDITY CLARIFICATION */}
          <p
            data-i18n="pricing.validity.note"
            className="text-xs text-gray-500 mt-6 leading-relaxed max-w-sm mx-auto"
          >
            The attestation is valid for one (1) year from the date of issue.
            No renewal, update or recalculation is included.
            A new attestation requires a new purchase.
          </p>
        </div>
      </div>

      {/* WHAT THIS IS NOT */}
      <div className="max-w-2xl mx-auto mt-14 text-center">
        <p className="text-sm font-semibold text-[#0B3A63] mb-2">
          What this attestation is not
        </p>

        <p className="text-xs text-gray-600 leading-relaxed">
          This document is not a certification, not an audit, not a CSRD or ESRS report,
          not a Scope 1–2–3 inventory, and not a regulated emissions disclosure.
          It is an indicative, spend-based CO₂e attestation intended for supplier
          screening and institutional review.
        </p>
      </div>

      {/* FOOTER DISCLAIMER */}
      <p className="text-gray-600 text-center text-xs mt-12 leading-relaxed max-w-2xl mx-auto">
        Indicative spend-based calculation only. Accuracy depends entirely on
        user-provided financial inputs. Not audited.
      </p>
    </section>
  );
            }
