"use client";

export default function Section4() {
  return (
    <section
      id="s4"
      data-section="s4"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="p-12 rounded-2xl bg-white border border-gray-200 shadow-md">
        <h2
          data-i18n="s4.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] mb-6"
        >
          What’s Included in the PDF
        </h2>

        <p
          data-i18n="s4.intro"
          className="text-lg text-gray-700 max-w-4xl leading-relaxed"
        >
          The Certif-Scope PDF is designed for procurement, compliance and banking workflows.
          It contains a clear set of standardized elements, making it easy for institutions
          to evaluate, archive and verify. Each component follows a stable layout, ensuring
          readability in English, French, German, Spanish and Italian.
        </p>
      </div>

      {/* BLOCK 1 — STRUCTURE */}
      <div
        data-i18n="s4.structure.block"
        className="mt-16 p-10 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm"
      >
        <h3
          data-i18n="s4.structure.title"
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
        >
          1. Standardized Document Structure
        </h3>

        <p
          data-i18n="s4.structure.text"
          className="text-gray-700 text-sm leading-relaxed max-w-4xl"
        >
          The PDF follows a strict and predictable order so reviewers can quickly locate
          key information. This improves acceptance in supplier portals and banking due
          diligence workflows.
        </p>

        <ul className="mt-4 text-sm text-gray-700 space-y-2">
          <li data-i18n="s4.structure.item1">• Header with company identification</li>
          <li data-i18n="s4.structure.item2">• Annual spending value (input)</li>
          <li data-i18n="s4.structure.item3">• CO₂e estimation result (output)</li>
          <li data-i18n="s4.structure.item4">• Category segmentation table</li>
          <li data-i18n="s4.structure.item5">• Method summary (financial-based)</li>
          <li data-i18n="s4.structure.item6">• Unique verification ID</li>
        </ul>
      </div>

      {/* BLOCK 2 — INDICATORS */}
      <div
        data-i18n="s4.indicators.block"
        className="mt-16 p-10 bg-white rounded-xl border border-gray-200 shadow-md"
      >
        <h3
          data-i18n="s4.indicators.title"
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
        >
          2. Key CO₂e Indicators Included
        </h3>

        <p
          data-i18n="s4.indicators.text"
          className="text-gray-700 text-sm leading-relaxed max-w-4xl"
        >
          Certif-Scope includes a concise set of indicators that institutions typically expect,
          without requiring physical activity data or a full emissions inventory.
        </p>

        <ul className="mt-4 text-sm text-gray-700 space-y-2">
          <li data-i18n="s4.indicators.item1">• Total CO₂e value (tCO₂e)</li>
          <li data-i18n="s4.indicators.item2">• Breakdown by expense category</li>
          <li data-i18n="s4.indicators.item3">• Emission factors version used</li>
          <li data-i18n="s4.indicators.item4">• Computation timestamp</li>
          <li data-i18n="s4.indicators.item5">• Confidence range (spend-based)</li>
        </ul>
      </div>

      {/* BLOCK 3 — VERIFICATION */}
      <div
        data-i18n="s4.verification.block"
        className="mt-16 p-10 rounded-xl bg-[#0B3A63] text-white shadow-md relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/30 to-transparent opacity-20" />

        <h3
          data-i18n="s4.verification.title"
          className="text-2xl font-semibold mb-4 relative z-10"
        >
          3. Verification Elements Embedded
        </h3>

        <p
          data-i18n="s4.verification.text"
          className="text-white/90 text-sm leading-relaxed max-w-4xl relative z-10"
        >
          Each PDF includes embedded integrity elements. These allow partners or institutions
          to validate authenticity with or without internet access.
        </p>

        <ul className="mt-4 text-white/90 text-sm relative z-10 space-y-2">
          <li data-i18n="s4.verification.item1">• Unique attestation ID</li>
          <li data-i18n="s4.verification.item2">• Deterministic cryptographic hash</li>
          <li data-i18n="s4.verification.item3">• QR code linked to verification page</li>
          <li data-i18n="s4.verification.item4">• Offline verification instructions</li>
        </ul>
      </div>

      {/* BLOCK 4 — LIMITATION NOTE */}
      <div
        data-i18n="s4.limitations.block"
        className="mt-16 p-10 rounded-xl bg-[#F8FAFC] border border-[#0B3A63]/25 shadow-sm"
      >
        <h3
          data-i18n="s4.limitations.title"
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
        >
          4. Important Clarification
        </h3>

        <p
          data-i18n="s4.limitations.text"
          className="text-gray-700 max-w-4xl leading-relaxed text-sm"
        >
          The PDF does not represent a CSRD/ESRS disclosure, an audited carbon inventory,
          nor a lifecycle analysis. It provides a standardized, spend-based indicative
          estimate suitable for procurement reviews, onboarding checklists and simplified
          compliance workflows.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s4.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>
    </section>
  );
      }
