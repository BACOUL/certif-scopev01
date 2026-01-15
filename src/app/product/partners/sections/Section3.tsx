"use client";

export default function Section3() {
  return (
    <section
      id="s3"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
      data-section="partners-s3"
    >

      {/* HEADER BLOCK */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-[#0B3A63]/5 pointer-events-none"
          aria-hidden="true"
        />

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
          data-i18n="partners.s3.title"
        >
          Supplier Workflow — Simple, Fast and Standardized
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s3.intro"
        >
          Large organisations distribute prepaid access codes to their suppliers. Each supplier
          generates an Attestation in minutes through a guided, client-side flow requiring only
          annual spending (€), with no login, no data storage and no onboarding friction.
        </p>
      </div>

      {/* STEP-BY-STEP FLOW */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* STEP 1 */}
        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
          data-i18n="partners.s3.step1"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-4">01</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Supplier Receives a Prepaid Access Code
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            The partner organisation distributes a unique usage code to each supplier. 
            This code unlocks the generation of one Attestation at no cost for the SME.
          </p>
        </div>

        {/* STEP 2 */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm hover:shadow-md transition"
          data-i18n="partners.s3.step2"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-4">02</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            SME Inputs Annual Spending (€)
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            The supplier enters annual expenditure figures. All processing occurs client-side, 
            without any server storing raw financial information.
          </p>
        </div>

        {/* STEP 3 */}
        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
          data-i18n="partners.s3.step3"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-4">03</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Attestation Generated Instantly
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            The platform produces a standardized CO₂e Attestation with a deterministic hash, 
            ensuring integrity and verification by any partner organisation.
          </p>
        </div>

      </div>

      {/* VERIFICATION BLOCK */}
      <div
        className="mt-16 p-10 bg-[#0B3A63] text-white rounded-xl shadow-lg relative overflow-hidden"
        data-i18n="partners.s3.verification"
      >
        <div
          className="absolute inset-0 bg-gradient-to-tr from-[#15B097]/40 to-transparent opacity-20"
          aria-hidden="true"
        />

        <h4 className="text-2xl font-bold relative z-10">
          Verification Process for the Partner
        </h4>

        <ul className="mt-5 space-y-3 text-white/90 text-sm leading-relaxed relative z-10">
          <li>A unique verification ID is embedded in every Attestation.</li>
          <li>Partners recompute the integrity hash offline to confirm authenticity.</li>
          <li>No accounts, authentication or database lookups required.</li>
          <li>No supplier data is stored by Certif-Scope at any time.</li>
          <li>Document consistency is guaranteed by a deterministic generation engine.</li>
        </ul>
      </div>

      {/* COMPLIANCE NOTE */}
      <div
        className="mt-14 p-8 bg-white rounded-xl border border-gray-300 shadow-md"
        data-i18n="partners.s3.note"
      >
        <h4 className="text-xl font-bold text-[#0B3A63] mb-3">
          Why This Flow Is CSRD/ESRS-Aligned (Without Being Regulatory Reporting)
        </h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          The workflow ensures suppliers provide structured, comparable and verifiable CO₂e
          information in response to procurement or financing requests. It does not generate 
          CSRD/ESRS-compliant disclosures but supports supply-chain environmental assessment 
          obligations by ensuring a minimum level of documentation for all suppliers.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          aria-label="Back to section summary"
          data-i18n="partners.s3.return"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
          }
