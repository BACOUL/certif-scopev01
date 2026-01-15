"use client";

export default function Section3() {
  return (
    <section
      id="s3"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
      data-section="partners-s3"
    >

      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-[#0B3A63]/5 pointer-events-none" />

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
          data-i18n="partners.s3.title"
        >
          Benefits for Large Corporations
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s3.p1"
        >
          Large organisations benefit from a unified, verification-ready CO₂e attestation that
          simplifies procurement and compliance processes. Instead of collecting inconsistent
          documents from thousands of suppliers, Certif-Scope provides a deterministic, standardized
          output format generated directly from supplier inputs.
        </p>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s3.p2"
        >
          This approach reduces administrative workload, improves environmental risk modelling and
          enables faster onboarding cycles for procurement and financial processes, while ensuring
          traceable integrity through hash-based verification.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">

        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200"
          data-i18n="partners.s3.a"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            1. Scalable Supplier Data Collection
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Collect uniform CO₂e indicators from thousands of SMEs with minimal friction. Suppliers
            generate their attestation instantly without requiring complex environmental reporting
            systems.
          </p>
        </div>

        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm"
          data-i18n="partners.s3.b"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            2. Reduced Compliance Burden
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Procurement, ESG and legal teams avoid manual follow-up and repeated validation steps.
            Partners can verify authenticity offline using the deterministic hash ID embedded in
            each document.
          </p>
        </div>

        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200"
          data-i18n="partners.s3.c"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            3. Better Environmental Risk Modelling
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Homogeneous supplier-level indicators improve the quality of climate exposure analysis
            used in procurement scoring, supplier segmentation and financial risk models.
          </p>
        </div>

        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm"
          data-i18n="partners.s3.d"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            4. Instant Authenticity Verification
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Verification ID allows recomputing the hash independently from the PDF content. No
            database lookup, no account creation, no data retention, ensuring auditability and
            long-term validation.
          </p>
        </div>

        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200"
          data-i18n="partners.s3.e"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            5. Faster Onboarding & Procurement Cycles
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            SMEs can respond immediately to buyer requests, eliminating weeks of delay caused by
            missing or inconsistent carbon documentation.
          </p>
        </div>

        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm"
          data-i18n="partners.s3.f"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            6. Zero Infrastructure Required
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Large groups do not need to host, store or process supplier environmental data. The
            attestation is generated client-side and validated offline, ensuring GDPR minimalism.
          </p>
        </div>
      </div>

      <div className="mt-16 p-8 bg-white rounded-xl border border-gray-300 shadow-md">
        <h4 className="text-xl font-bold text-[#0B3A63] mb-3">
          What This Enables
        </h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          Large corporations can implement a uniform supplier sustainability requirement without
          imposing heavy reporting obligations. Certif-Scope creates a repeatable, scalable and
          verifiable data flow aligned with procurement compliance needs.
        </p>
      </div>

      <div
        className="mt-16 bg-[#0B3A63] text-white p-10 rounded-xl shadow-md relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20" />

        <h4 className="text-2xl font-bold relative z-10">
          Institutional Impact
        </h4>

        <p className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10">
          By standardizing supplier CO₂e attestations, large groups reduce procurement bottlenecks,
          ensure compliance alignment and improve environmental traceability across their value
          chain. The result is a more efficient and transparent ecosystem with consistent inputs for
          screening and risk modelling.
        </p>
      </div>

      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          data-i18n="partners.s3.return"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
}
