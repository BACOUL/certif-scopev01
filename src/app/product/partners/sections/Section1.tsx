"use client";

export default function Section1() {
  return (
    <section
      id="s1"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
      data-section="partners-s1"
    >

      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-[#0B3A63]/5 pointer-events-none" />

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
          data-i18n="partners.s1.title"
        >
          Partnership Model Overview
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s1.p1"
        >
          The partnership model enables large corporations, procurement networks, insurers, banks,
          and digital platforms to automatically issue CO₂e attestations for their SME suppliers.
          This eliminates manual collection, reduces procurement friction, and ensures a unified,
          standardized document format fully aligned with institutional expectations.
        </p>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s1.p2"
        >
          Large groups integrate a deterministic attestation engine directly into their supplier
          onboarding workflows. SMEs provide only annual spending figures, which remain on the
          client side. The attestation is generated instantly and signed using a cryptographic hash,
          allowing offline verification without any stored data.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200"
          data-i18n="partners.s1.card1.block"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">01</div>
          <h3
            className="text-xl font-semibold text-[#0B3A63] mb-2"
            data-i18n="partners.s1.card1.title"
          >
            Fully Automated Workflow
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            SMEs upload spending data, attestations are generated automatically, and verification
            remains offline and stateless.
          </p>
        </div>

        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm"
          data-i18n="partners.s1.card2.block"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">02</div>
          <h3
            className="text-xl font-semibold text-[#0B3A63] mb-2"
            data-i18n="partners.s1.card2.title"
          >
            Centralized Standard for SMEs
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Every supplier receives the same structure, format, and validation logic, enabling
            procurement teams to compare emissions instantly.
          </p>
        </div>

        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200"
          data-i18n="partners.s1.card3.block"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">03</div>
          <h3
            className="text-xl font-semibold text-[#0B3A63] mb-2"
            data-i18n="partners.s1.card3.title"
          >
            No Stored Data
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            All calculations run client-side. No database, no retention, full compliance with
            minimal-processing GDPR requirements.
          </p>
        </div>
      </div>

      <div
        className="mt-16 p-8 bg-white rounded-xl border border-gray-300 shadow-md"
        data-i18n="partners.s1.limitation.block"
      >
        <h4 className="text-xl font-bold text-[#0B3A63] mb-3">
          Scope Clarification
        </h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          The attestation is not a CSRD/ESRS disclosure, not an audited GHG inventory, and not a
          lifecycle assessment. It is a standardized, spend-based indicator designed specifically
          for procurement screening, banking risk evaluation, and supplier compliance workflows.
        </p>
      </div>

      <div
        className="mt-16 bg-[#0B3A63] text-white p-10 rounded-xl shadow-md relative overflow-hidden"
        data-i18n="partners.s1.highlight.block"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20" />

        <h4 className="text-2xl font-bold relative z-10">
          Why It Matters for Corporations
        </h4>

        <p
          className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10"
          data-i18n="partners.s1.highlight.text"
        >
          Large organisations need scalable, standardized and fast CO₂e data from thousands of
          suppliers. Manual requests block supply chains, delay contracts, and create institutional
          risks. The partnership model solves this by automating standardized attestations at scale.
        </p>
      </div>

      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          data-i18n="partners.s1.return"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
      }
