"use client";

export default function Section4() {
  return (
    <section
      id="s4"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
      data-section="partners-s4"
    >

      {/* HEADER */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-[#0B3A63]/5 pointer-events-none"
          aria-hidden="true"
        />

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
          data-i18n="partners.s4.title"
        >
          Partner Licensing & Access Code System
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s4.intro"
        >
          Partners purchase prepaid units and distribute secure, single-use access codes to their 
          suppliers. These codes allow SMEs to generate an Attestation at no cost, while enabling 
          large organisations to deploy the system at scale without managing accounts, credentials 
          or sensitive supplier data.
        </p>
      </div>

      {/* GRID OF PRINCIPLES */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* PRINCIPLE 1 */}
        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
          data-i18n="partners.s4.p1"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            1. Prepaid Units
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            The organisation acquires a batch of units (e.g., 1 000 attestations). Each unit corresponds 
            to exactly one Attestation generation event.
          </p>
        </div>

        {/* PRINCIPLE 2 */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm hover:shadow-md transition"
          data-i18n="partners.s4.p2"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            2. Secure Access Code Creation
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Each prepaid unit is converted into a single-use access code, generated cryptographically 
            and not guessable. Codes are never stored in plaintext.
          </p>
        </div>

        {/* PRINCIPLE 3 */}
        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
          data-i18n="partners.s4.p3"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            3. Supplier Usage Mapping
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            The partner distributes codes to suppliers, who redeem them once. No supplier account,
            identification or data storage is required at any time.
          </p>
        </div>

        {/* PRINCIPLE 4 */}
        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
          data-i18n="partners.s4.p4"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            4. Single-Use Enforcement
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            After one Attestation is generated, the code becomes invalid. Attempts to reuse it are 
            automatically rejected by a hash-based validation mechanism.
          </p>
        </div>

        {/* PRINCIPLE 5 */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm hover:shadow-md transition"
          data-i18n="partners.s4.p5"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            5. Fully Stateless Validation
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Validation uses cryptographic signatures, not a database lookup. This eliminates 
            GDPR liability and prevents unauthorised correlation of supplier activity.
          </p>
        </div>

        {/* PRINCIPLE 6 */}
        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
          data-i18n="partners.s4.p6"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            6. Offline Verifiable Outputs
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Every generated Attestation carries a deterministic hash. Partners recompute the hash 
            independently to confirm integrity without requesting supplier information.
          </p>
        </div>

      </div>

      {/* TECHNICAL ARCH BLOCK */}
      <div
        className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-lg relative overflow-hidden"
        data-i18n="partners.s4.arch"
      >
        <div
          className="absolute inset-0 bg-gradient-to-tr from-[#15B097]/40 to-transparent opacity-20"
          aria-hidden="true"
        />

        <h3 className="text-2xl font-bold relative z-10">Technical Safeguards</h3>

        <ul className="mt-6 space-y-3 text-white/90 text-sm leading-relaxed relative z-10">
          <li>Codes are derived using a salted cryptographic generator.</li>
          <li>No plaintext code is stored or transmitted after generation.</li>
          <li>Redemption uses deterministic signature verification.</li>
          <li>Impossible to brute-force or enumerate valid codes.</li>
          <li>No central database → zero personally identifiable information.</li>
          <li>Auditable cryptographic artifacts allow long-term proof of issuance.</li>
        </ul>
      </div>

      {/* COMPLIANCE BLOCK */}
      <div
        className="mt-14 p-8 bg-white rounded-xl border border-gray-300 shadow-md"
        data-i18n="partners.s4.compliance"
      >
        <h4 className="text-xl font-bold text-[#0B3A63] mb-3">
          Compliance & Risk Reduction for Large Organisations
        </h4>

        <p className="text-gray-700 text-sm leading-relaxed">
          The licensing system ensures suppliers can produce verifiable CO₂e information without 
          exposing financial details, while partners remain compliant with procurement ESG checks 
          and due-diligence obligations. The cryptographic enforcement prevents code misuse and 
          eliminates the need for identity processing under GDPR.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          aria-label="Back to section summary"
          data-i18n="partners.s4.return"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
      }
