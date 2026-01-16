"use client";

export default function Section6() {
  return (
    <section
      id="s6"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
      data-section="s6"
    >

      {/* HEADER BLOCK */}
      <div className="p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-md">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]"
          data-i18n="s6.title"
        >
          Usage Scenarios
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed"
          data-i18n="s6.intro"
        >
          The CO₂e Attestation is designed for real-world institutional workflows where 
          a simplified, verification-ready indicator is required. It helps SMEs provide 
          consistent climate information during onboarding, procurement checks, banking 
          assessments and insurance evaluations.
        </p>
      </div>

      {/* SCENARIO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        {/* PROCUREMENT */}
        <div
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm"
          data-i18n="s6.procurement.block"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s6.procurement.title">
            Procurement Requirements
          </h3>

          <p className="mt-3 text-sm text-gray-700 leading-relaxed" data-i18n="s6.procurement.text">
            Large companies request basic CO₂-related indicators from suppliers to complete 
            their ESG documentation. The standardized layout fits onboarding forms and 
            tender submissions without extra work for the SME.
          </p>
        </div>

        {/* BANKING */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm"
          data-i18n="s6.banking.block"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s6.banking.title">
            Banking & Credit Exposure
          </h3>

          <p className="mt-3 text-sm text-gray-700 leading-relaxed" data-i18n="s6.banking.text">
            Banks evaluate environmental exposure for credit risk assessments. An indicative 
            CO₂e figure allows them to complete internal checklists without requiring full 
            ESG reporting from the SME.
          </p>
        </div>

        {/* INSURANCE */}
        <div
          className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm"
          data-i18n="s6.insurance.block"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s6.insurance.title">
            Insurance Underwriting
          </h3>

          <p className="mt-3 text-sm text-gray-700 leading-relaxed" data-i18n="s6.insurance.text">
            Insurers increasingly require environmental indicators during underwriting. 
            The Attestation provides a clear, consistent reference point aligned with 
            the simplified risk models used for SMEs.
          </p>
        </div>

        {/* PUBLIC TENDERS */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm"
          data-i18n="s6.public.block"
        >
          <h3 className="text-2xl font-semibold text-[#0B3A63]" data-i18n="s6.public.title">
            Public Tender Submissions
          </h3>

          <p className="mt-3 text-sm text-gray-700 leading-relaxed" data-i18n="s6.public.text">
            Many tender processes request an environmental indicator. The Attestation 
            ensures SMEs can submit a standardized, verifiable document without needing 
            audited emissions data.
          </p>
        </div>
      </div>

      {/* REVIEWER WORKFLOW */}
      <div
        className="mt-20 p-10 rounded-xl bg-white border border-gray-200 shadow-md"
        data-i18n="s6.reviewer.block"
      >
        <h3
          className="text-2xl font-semibold text-[#0B3A63] mb-4"
          data-i18n="s6.reviewer.title"
        >
          How Reviewers Use the Document
        </h3>

        <ol className="space-y-3 text-sm text-gray-700 leading-relaxed max-w-4xl">

          <li data-i18n="s6.reviewer.step1">
            1. Reviewer identifies the emitting categories and total CO₂e value displayed on page 1.
          </li>

          <li data-i18n="s6.reviewer.step2">
            2. Reviewer checks the versioned emission dataset reference in the metadata block.
          </li>

          <li data-i18n="s6.reviewer.step3">
            3. Reviewer scans the QR code or enters the Verification ID on the verification page.
          </li>

          <li data-i18n="s6.reviewer.step4">
            4. System confirms document integrity by recomputing the hash.
          </li>

          <li data-i18n="s6.reviewer.step5">
            5. Reviewer accepts the attestation as a simplified but standardized indicator.
          </li>

        </ol>
      </div>

      {/* CLEAR LIMITATION REMINDER */}
      <div
        className="mt-16 p-10 rounded-xl bg-[#0B3A63] text-white shadow-lg relative overflow-hidden"
        data-i18n="s6.reminder.block"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent opacity-20"
          aria-hidden="true"
        />

        <h3 className="text-2xl font-semibold mb-4 relative z-10" data-i18n="s6.reminder.title">
          Clarification of Purpose
        </h3>

        <p
          className="text-white/90 text-sm leading-relaxed max-w-4xl relative z-10"
          data-i18n="s6.reminder.text"
        >
          These scenarios illustrate where a simplified, verification-ready CO₂e indicator 
          is sufficient. The Attestation is not intended for full regulatory disclosures, 
          audited GHG inventories or lifecycle assessments.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s6.return"
          aria-label="Back to summary"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
        }
