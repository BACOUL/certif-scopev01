"use client";

export default function Section1() {
  return (
    <section
      id="s1"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
      data-section="partners-s1"
    >

      {/* HEADER BLOCK — Institutional, premium */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-[#0B3A63]/5 pointer-events-none"
          aria-hidden="true"
        />

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
          data-i18n="partners.s1.title"
        >
          Partnership Overview
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s1.paragraph1"
        >
          Certif-Scope provides large organisations with a standardized, automated way to collect
          CO₂e Attestations from their suppliers, subcontractors and partner networks. Instead of
          requesting heterogeneous documents, following up manually or waiting for complex audits,
          your procurement, ESG or compliance teams receive a consistent, instantly verifiable
          document format from every supplier.
        </p>

        <p
          className="text-md text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s1.paragraph2"
        >
          The partnership model enables organizations to issue prepaid access codes to suppliers.
          Each supplier redeems a unique code, inputs annual spending (€) client-side, generates the
          Attestation, and the result becomes independently verifiable using a deterministic
          cryptographic hash — without requiring any stored supplier data.
        </p>
      </div>

      {/* 3-Column Grid — Why It Matters for Large Organisations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

        {/* CARD 1 */}
        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
          data-i18n="partners.s1.card1"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">01</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Uniform Supplier Documentation
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            All suppliers deliver the same standardized CO₂e Attestation format with identical
            structure, fields and verification logic — eliminating inconsistent ESG documentation.
          </p>
        </div>

        {/* CARD 2 */}
        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm hover:shadow-md transition"
          data-i18n="partners.s1.card2"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">02</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Zero Data Storage Risk
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Certif-Scope does not store supplier financial data. The Attestation is generated
            fully client-side and validated offline via hash recomputation, removing GDPR risk
            and eliminating the need for supplier databases.
          </p>
        </div>

        {/* CARD 3 */}
        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
          data-i18n="partners.s1.card3"
        >
          <div className="text-[#15B097] text-4xl font-bold mb-3">03</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Automated Compliance Acquisition
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Each acess code corresponds to one Attestation. Your teams track usage volumes,
            while suppliers generate compliant documents without requiring training or support.
          </p>
        </div>

      </div>

      {/* CONTEXT BLOCK — Institutional Needs (EU Corporate Requirements) */}
      <div
        className="mt-16 bg-[#0B3A63] text-white p-10 rounded-xl shadow-md relative overflow-hidden"
        data-i18n="partners.s1.context"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"
          aria-hidden="true"
        />

        <h4 className="text-2xl font-bold relative z-10">
          Why Large Organisations Need This
        </h4>

        <p
          className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10"
        >
          EU regulations (CSRD, ESRS, supply-chain risk assessment obligations) require large
          companies to demonstrate supplier environmental screening. Certif-Scope simplifies this
          task by enabling every supplier — regardless of size — to provide a consistent,
          verification-ready CO₂e Attestation without audits, portals or onboarding costs.
        </p>
      </div>

      {/* RETURN TO SUMMARY */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          aria-label="Back to section summary"
          data-i18n="partners.s1.return"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
}
