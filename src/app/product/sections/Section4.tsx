"use client";

export default function Section4() {
  return (
    <section
      id="attestation-pdf-contents"
      data-section="attestation-pdf-contents"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER — Soft Blue + subtle gradient */}
      <div className="relative p-12 rounded-2xl bg-[#F0F4F8] border border-[#0B3A63]/15 shadow-md overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          data-i18n="s4.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          <span className="mr-2">4.</span>
          What’s Included in the CO₂e Attestation PDF
        </h2>

        <p
          data-i18n="s4.intro"
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
        >
          The CO₂e Attestation is delivered as a standardized, institution-ready
          PDF document. Each element is intentionally structured to support
          procurement review, financial risk assessment and supplier onboarding.
        </p>

        {/* SCOPE BOUNDARY — CANONICAL */}
        <p
          data-i18n="s4.scope"
          className="mt-4 text-gray-600 text-sm max-w-4xl leading-relaxed relative z-10"
        >
          This section describes the structure and content of the delivered
          document. The calculation methodology is described separately.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s4.block1.title"
          >
            1. CO₂e Result Summary
          </h3>
          <p
            className="text-sm text-gray-700 mt-3 leading-relaxed"
            data-i18n="s4.block1.text"
          >
            A single aggregated CO₂e value expressed in tonnes of CO₂ equivalent,
            presented in a clear and unambiguous format for institutional review.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition">
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s4.block2.title"
          >
            2. Declared Scope Overview
          </h3>
          <p
            className="text-sm text-gray-700 mt-3 leading-relaxed"
            data-i18n="s4.block2.text"
          >
            A high-level overview of the declared categories, providing contextual
            clarity without disclosing detailed financial or operational data.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s4.block3.title"
          >
            3. Normative References
          </h3>
          <p
            className="text-sm text-gray-700 mt-3 leading-relaxed"
            data-i18n="s4.block3.text"
          >
            Explicit references to recognized European and international
            sustainability frameworks, allowing reviewers to understand the
            conceptual basis of the indicator without technical detail.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition">
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s4.block4.title"
          >
            4. Verification Reference & QR Code
          </h3>
          <p
            className="text-sm text-gray-700 mt-3 leading-relaxed"
            data-i18n="s4.block4.text"
          >
            A unique attestation identifier and QR code enabling third parties
            to verify authenticity and document integrity through the public
            verification page.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s4.block5.title"
          >
            5. Institutional Metadata
          </h3>
          <p
            className="text-sm text-gray-700 mt-3 leading-relaxed"
            data-i18n="s4.block5.text"
          >
            Issuance date, validity period, declared reference year and basic
            organizational identifiers required for audit trails and internal
            compliance processes.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/20 shadow-sm hover:shadow-md transition">
          <h3
            className="text-2xl font-semibold text-[#0B3A63]"
            data-i18n="s4.block6.title"
          >
            6. Usage Limitations Statement
          </h3>
          <p
            className="text-sm text-gray-700 mt-3 leading-relaxed"
            data-i18n="s4.block6.text"
          >
            A clear statement defining the indicative nature of the document and
            its intended use, preventing misinterpretation as a regulatory
            report, audit or certification.
          </p>
        </div>
      </div>

      {/* FOOTNOTE */}
      <div className="mt-20 p-8 rounded-xl bg-[#F0FDFC] border border-[#1FB6C1]/30 shadow-sm">
        <h4
          className="text-xl font-semibold text-[#0B3A63] mb-2"
          data-i18n="s4.note.title"
        >
          Institutional Usage Note
        </h4>

        <p
          className="text-sm text-gray-700 leading-relaxed max-w-4xl"
          data-i18n="s4.note.text"
        >
          This attestation is designed for supplier assessment, procurement
          screening and financial risk review. It does not replace regulatory
          sustainability reporting or audited greenhouse gas inventories.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63]
                     text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>
    </section>
  );
      }
