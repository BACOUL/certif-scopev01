"use client";

export default function Section2() {
  return (
    <section
      id="key-benefits"
      data-section="key-benefits"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER — canonical product section */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#1FB6C1]/15 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          data-i18n="s2.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          <span className="mr-2">2.</span>
          Key Benefits Summary
        </h2>

        {/* HARD SCOPE BOUNDARY */}
        <p
          data-i18n="s2.scope"
          className="mt-4 text-sm text-gray-500 leading-relaxed max-w-4xl relative z-10"
        >
          This section summarizes the practical benefits of the CO₂e Attestation.
          It does not describe the calculation method or emission factors.
        </p>

        <p
          data-i18n="s2.intro"
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
        >
          Certif-Scope delivers a standardized CO₂e Attestation designed for
          institutional consumption. Each benefit addresses a concrete
          procurement, compliance or onboarding requirement faced by European
          organizations.
        </p>
      </div>

      {/* BENEFITS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

        {/* BENEFIT 1 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">01</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Immediate Availability
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            The attestation is generated instantly from declared annual spending,
            without requiring operational metrics, physical data collection or
            prior carbon expertise.
          </p>
        </div>

        {/* BENEFIT 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/30 shadow-sm hover:shadow-md transition">
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">02</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Institution-Ready Document
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            The format aligns with supplier onboarding, ESG screening,
            procurement questionnaires and third-party due-diligence processes.
          </p>
        </div>

        {/* BENEFIT 3 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">03</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Clear Validity Reference
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Each attestation includes a unique reference identifier that enables
            third parties to confirm authenticity without accounts or technical tools.
          </p>
        </div>

        {/* BENEFIT 4 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/30 shadow-sm hover:shadow-md transition">
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">04</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Deterministic Consistency
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Identical inputs always produce the same result, ensuring stability,
            comparability and predictable review outcomes.
          </p>
        </div>

        {/* BENEFIT 5 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">05</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Accessible to Non-Experts
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            No sustainability team, consultant or specialized software is required.
            The process is intentionally simple and guided.
          </p>
        </div>

        {/* BENEFIT 6 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/30 shadow-sm hover:shadow-md transition">
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">06</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Multilingual European Coverage
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Available in multiple European languages to support cross-border
            supplier relationships and institutional review workflows.
          </p>
        </div>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s2.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63]
                     text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>
    </section>
  );
      }
