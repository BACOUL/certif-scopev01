"use client";

export default function Section7() {
  return (
    <section
      id="s7"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
      data-section="partners-s7"
    >

      {/* HEADER */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-[#0B3A63]/10 pointer-events-none"
          aria-hidden="true"
        />

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
          data-i18n="partners.s7.title"
        >
          Supplier Workflow — Step-by-Step
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s7.intro"
        >
          This section explains how a supplier generates a CO₂e Attestation when requested by a
          partner organisation. The flow is designed to minimise friction and eliminate technical
          complexity. No account creation, no login and no stored financial data.
        </p>
      </div>


      {/* 4-STEP DIAGRAM */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">

        {/* STEP 1 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="text-[#15B097] text-3xl font-extrabold mb-3">01</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Supplier receives link
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            The partner provides a secure, prepaid link or one-time code. No login or platform
            account is needed.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <div className="text-[#15B097] text-3xl font-extrabold mb-3">02</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Supplier enters annual spending
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Only aggregated annual spending (€) per category is required. No invoices, no receipts,
            no operational or personal data.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="text-[#15B097] text-3xl font-extrabold mb-3">03</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Engine generates attestation
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            A deterministic CO₂e Attestation is generated instantly using validated monetary
            emission factors. A SHA-256 integrity signature is computed client-side.
          </p>
        </div>

        {/* STEP 4 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <div className="text-[#15B097] text-3xl font-extrabold mb-3">04</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Supplier downloads & submits
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            The supplier downloads a standardized PDF and forwards it to the requesting organisation
            or uploads it to the procurement platform.
          </p>
        </div>
      </div>


      {/* DETAILED FLOW BLOCK */}
      <div
        className="mt-20 p-10 bg-white rounded-xl border border-gray-300 shadow-md"
        data-i18n="partners.s7.details"
      >
        <h3 className="text-2xl font-bold text-[#0B3A63] mb-6">
          Detailed Workflow
        </h3>

        <ol className="space-y-6 text-gray-700 text-sm leading-relaxed list-decimal pl-5">
          <li>
            Supplier accesses a prepaid link or code provided by the partner (bank, insurer,
            procurement team or public authority).
          </li>
          <li>
            Supplier reads the standardised instructions describing the spend-based model and
            methodological boundaries.
          </li>
          <li>
            Supplier enters aggregated annual spending figures only (EUR), without document
            uploads or sensitive operational metrics.
          </li>
          <li>
            The local browser engine converts the input into indicative CO₂e values using fixed
            emission factors aligned with GHG Protocol monetary ratios.
          </li>
          <li>
            A deterministic SHA-256 hash is computed client-side to produce a verifiable signature.
          </li>
          <li>
            A PDF is generated instantly, embedding the hash, a verification ID and a structured
            emissions summary.
          </li>
          <li>
            Supplier downloads the PDF and submits it to the requestor without any platform
            storage.
          </li>
        </ol>
      </div>


      {/* ZERO DATA RETENTION */}
      <div
        className="mt-16 p-8 bg-[#0B3A63] text-white rounded-xl shadow-md"
        data-i18n="partners.s7.privacy"
      >
        <h4 className="text-xl font-bold mb-3">No Data Retention</h4>
        <p className="text-white/90 text-sm leading-relaxed">
          All calculations and hashing occur locally in the supplier’s browser. No spending data,
          no company information and no input values are transmitted or stored. Partners do not
          receive any financial details — only the final PDF provided by the supplier.
        </p>
      </div>


      {/* COMPLIANCE */}
      <div
        className="mt-16 p-8 bg-white rounded-xl border border-gray-300 shadow-md"
        data-i18n="partners.s7.compliance"
      >
        <h4 className="text-xl font-bold text-[#0B3A63] mb-3">Compliance Alignment</h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          This workflow is aligned with EU procurement requirements, ESG questionnaires and
          due-diligence processes. It provides a structured indicator without claiming CSRD, ESRS
          or ISO-14064 compliance. The deterministic hash allows independent verification without
          storing sensitive inputs.
        </p>
      </div>


      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          data-i18n="partners.s7.return"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
        }
