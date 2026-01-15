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
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 to-[#15B097]/10 pointer-events-none" />

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
          data-i18n="partners.s7.title"
        >
          Deployment Workflow
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s7.p1"
        >
          Certif-Scope is deployed in four deterministic phases: credential provisioning,
          environment activation, supplier linking, and automated attestation generation. The
          workflow is optimised for enterprise procurement, banking networks, insurance platforms,
          and compliance systems requiring predictable integration steps and verified outputs.
        </p>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s7.p2"
        >
          All steps operate without backend dependency on Certif-Scope servers; the API remains
          stateless and verification is fully offline. This supports regulatory alignment with CSRD,
          ESRS, ISO 14064-1, ISO 14083, and EU procurement controls without requiring supplier data
          storage.
        </p>
      </div>

      {/* WORKFLOW STEPS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">

        {/* STEP 1 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">1. Enterprise Activation</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The partner receives a dedicated API key and a volume pack allocation. No identity
            binding is stored. All keys are cryptographically signed and the verification mechanism
            is independent from Certif-Scope availability.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">2. Supplier Linking</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The partner generates unique supplier tokens (non-personal, non-identifying). Suppliers
            use these tokens to generate attestations locally. No supplier data transit through the
            Certif-Scope infrastructure, ensuring GDPR minimal processing.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">3. Local Attestation Generation</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Suppliers enter spending amounts. The system applies the spend-based method
            (EUR × Emission Factor) using standardised public emission factor libraries (ADEME, DEFRA,
            IPCC). No physical data or Scope 1–2 calculations are required.
          </p>
        </div>

        {/* STEP 4 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">4. Automated Verification Workflow</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Once generated, each attestation includes a SHA-256 hash, timestamp, sector mapping,
            factor source, and calculation trace. Auditors can verify files offline without
            contacting Certif-Scope, satisfying procurement, banking, and insurance requirements.
          </p>
        </div>
      </div>

      {/* SLA-READY OUTPUT */}
      <div className="mt-16 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20" />

        <h4 className="text-2xl font-bold relative z-10">
          SLA-Ready from Day One
        </h4>

        <p className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10">
          The workflow is designed to guarantee deterministic behaviour under high load, support
          long-term archival, and enable full traceability without server retention. All generated
          attestations remain usable and verifiable even if Certif-Scope ceases operation, ensuring
          compliance resilience across multiple jurisdictions.
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
