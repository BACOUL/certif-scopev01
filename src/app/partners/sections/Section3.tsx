"use client";

export default function Section3() {
  return (
    <section
      id="partner-usage-workflow"
      data-section="partner-usage-workflow"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 via-[#15B097]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          data-i18n="partners.s3.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          <span className="mr-2">3.</span>
          Partner Usage Workflow
        </h2>

        <p
          data-i18n="partners.s3.paragraph1"
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
        >
          Certif-Scope is designed for real partner workflows where CO₂ information is
          requested under time pressure. Partners generate attestations on demand using
          a single access key, without onboarding end-clients, managing accounts or storing data.
        </p>
      </div>

      {/* 3-STEP WORKFLOW GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

        {/* STEP 1 */}
        <div
          data-i18n="partners.s3.step1.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-[#15B097]/40 transition-all duration-300"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">01</div>
          <h3
            data-i18n="partners.s3.step1.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Receive a CO₂ Request
          </h3>
          <p
            data-i18n="partners.s3.step1.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Partners receive CO₂ indicator requests from clients, suppliers, banks,
            insurers or procurement teams as part of onboarding, tenders or compliance checks.
          </p>
        </div>

        {/* STEP 2 */}
        <div
          data-i18n="partners.s3.step2.block"
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-md hover:shadow-lg hover:border-[#15B097]/50 transition-all duration-300"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">02</div>
          <h3
            data-i18n="partners.s3.step2.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Generate the Attestation
          </h3>
          <p
            data-i18n="partners.s3.step2.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            Using their partner access key, the attestation is generated in less than
            one minute based on declared annual spending (€). Each generation consumes one credit.
          </p>
        </div>

        {/* STEP 3 */}
        <div
          data-i18n="partners.s3.step3.block"
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-[#15B097]/40 transition-all duration-300"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">03</div>
          <h3
            data-i18n="partners.s3.step3.title"
            className="text-xl font-semibold text-[#0B3A63] mb-2"
          >
            Deliver a Verifiable PDF
          </h3>
          <p
            data-i18n="partners.s3.step3.text"
            className="text-gray-600 text-sm leading-relaxed"
          >
            The resulting PDF is delivered to the requesting party. Verification works
            independently via embedded integrity metadata, online or offline, without any account.
          </p>
        </div>

      </div>

      {/* WORKFLOW RECAP */}
      <div
        data-i18n="partners.s3.recap.block"
        className="mt-20 p-10 bg-white rounded-xl border border-gray-200 shadow-md"
      >
        <h3
          data-i18n="partners.s3.recap.title"
          className="text-xl font-bold text-[#0B3A63] mb-4"
        >
          Partner Workflow in Practice
        </h3>

        <p
          data-i18n="partners.s3.recap.text"
          className="text-gray-700 text-sm leading-relaxed"
        >
          CO₂ request received → Attestation generated → PDF delivered → Independent verification.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="partners.s3.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>
    </section>
  );
}
