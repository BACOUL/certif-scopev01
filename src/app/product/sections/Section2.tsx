"use client";

export default function Section2() {
  return (
    <section
      id="s2"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* UNIQUE HEADER LAYOUT — horizontal split */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-10 flex flex-col md:flex-row gap-10">

        {/* LEFT TEXT AREA */}
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold text-[#0B3A63] leading-tight mb-4">
            Section 2 — Key Benefits Summary
          </h2>

          <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
            Certif-Scope offers a unique combination of speed, institutional acceptance,
            standardized formatting and independent verification. The platform gives 
            SMEs a ready-to-submit CO₂ attestation without the delays or costs usually 
            associated with sustainability reporting. Each benefit is designed to answer 
            a specific need expressed by banks, procurement teams, insurers, investors 
            and compliance officers across Europe.
          </p>
        </div>

        {/* RIGHT SIDE VISUAL PANEL */}
        <div className="flex-1 grid grid-cols-1 gap-4">
          <div className="bg-[#0B3A63] text-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold">Procurement-ready</h3>
            <p className="text-white/85 text-sm mt-1">
              Fully structured for supplier onboarding workflows.
            </p>
          </div>

          <div className="bg-[#15B097] text-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold">Risk-scoring compatible</h3>
            <p className="text-white/85 text-sm mt-1">
              Integrates seamlessly into banking and insurance evaluation.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-xl shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-[#0B3A63]">Instant availability</h3>
            <p className="text-gray-700 text-sm mt-1">
              Generated in less than 30 seconds — no consultant required.
            </p>
          </div>
        </div>

      </div>

      {/* BENEFIT GRID — 6 detailed institutional benefits */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            1. Standardized and Consistent
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Certif-Scope ensures identical formatting, terminology and structure across 
            all attestations, reducing the risk of rejection from procurement or compliance 
            reviewers who expect clear, consistent documentation.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl border border-[#15B097]/30 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            2. Independent Verification Capability
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Each document includes a cryptographic integrity seal and a unique verification ID. 
            Institutions authenticate authenticity without requiring access to Certif-Scope servers.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            3. Institutionally Meaningful Indicators
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Indicators are presented in a structure aligned with typical European workflows 
            (procurement, banking, risk scoring, insurance, grant eligibility), ensuring 
            operational relevance.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            4. Zero Operational Friction
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            No multi-week validation, no consultation cycles and no external dependencies. 
            Users enter data and instantly obtain the final document.
          </p>
        </div>

        <div class="p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            5. Designed for Cross-European Acceptance
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Language-neutral structure, clear fields and universal terminology support 
            usage across EU states and multilingual review teams.
          </p>
        </div>

        <div className="p-8 bg-[#15B097]/10 rounded-xl border border-[#15B097]/40 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63]">
            6. Perfectly Scalable
          </h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Suitable for one-time submissions or recurring monthly/annual updates without 
            the need for external professionals or increasing costs.
          </p>
        </div>

      </div>

      {/* ANALYST INSIGHT BLOCK — unique to this section */}
      <div className="mt-20 bg-[#0B3A63] text-white p-10 rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h4 className="text-xl font-bold mb-4 relative z-10">
          Institutional Assessment Insight
        </h4>
        <p className="text-white/90 max-w-4xl leading-relaxed relative z-10">
          Reviewers prefer documents that are immediate to understand, consistent across 
          suppliers and require no clarification. Certif-Scope eliminates subjective variations 
          and provides a format that aligns with compliance, procurement, legal and risk-analysis 
          workflows in large organizations.
        </p>

        <a
          href="https://commission.europa.eu/legal-notice_en"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-white/80 text-sm mt-4 inline-block relative z-10"
        >
          EU institutional guidance →
        </a>
      </div>

      {/* RETURN BUTTON — IDENTICAL ACROSS ALL SECTIONS */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
}
