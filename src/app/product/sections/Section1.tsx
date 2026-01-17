"use client";

export default function Section1() {
  return (
    <section
      id="product-overview"
      data-section="product-overview"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 via-[#1FB6C1]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2
          data-i18n="s1.title"
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
        >
          <span className="mr-2">1.</span>
          Product Overview
        </h2>

        <p
          data-i18n="s1.paragraph1"
          className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10"
        >
          Certif-Scope provides a standardized CO₂e Attestation based exclusively on
          annual spending (€). It is designed for SMEs that receive carbon-related
          requests from clients, procurement teams, banks, or insurers, but do not
          have the resources for CSRD/ESRS reporting, full greenhouse gas inventories,
          or physical activity data tracking.
        </p>

        <p
          data-i18n="s1.paragraph2"
          className="text-lg text-gray-700 max-w-3xl mt-4 leading-relaxed relative z-10"
        >
          The attestation delivers a clear, consistent, and institution-readable
          document that can be shared with third parties. Its validity can be
          confirmed simply using a unique attestation reference ID, without accounts,
          complex procedures, or technical expertise.
        </p>

        <p
          data-i18n="s1.paragraph3"
          className="text-lg text-gray-700 max-w-3xl mt-4 leading-relaxed relative z-10"
        >
          Certif-Scope is not a certification body and does not replace regulatory
          reporting or audits. It provides a practical, verifiable document that
          answers common CO₂e disclosure requests while remaining accessible to SMEs
          and compatible with institutional review.
        </p>
      </div>
    </section>
  );
}
