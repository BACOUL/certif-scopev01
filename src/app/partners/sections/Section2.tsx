"use client";

export default function Section2() {
  return (
    <section
      id="s2"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
      data-section="partners-s2"
    >

      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-[#0B3A63]/5 pointer-events-none" />

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
          data-i18n="partners.s2.title"
        >
          Regulatory Drivers for Large Groups
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s2.p1"
        >
          Large corporations face increasing regulatory pressure to assess and monitor the
          environmental performance of their value chain. Procurement and compliance teams must
          obtain CO₂e information from suppliers to comply with due-diligence, risk-screening and
          sustainability reporting obligations.
        </p>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s2.p2"
        >
          Certif-Scope enables large groups to streamline this requirement by providing a unified,
          verification-ready CO₂e indicator, generated directly by suppliers through a deterministic
          client-side process. This minimizes compliance friction while ensuring institutional
          alignment and reproducibility.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">

        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200"
          data-i18n="partners.s2.a"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            CSRD & ESRS Requirements
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            CSRD and ESRS impose transparency expectations across supply chains. Even when SMEs are
            not directly in scope of CSRD, large corporations must obtain environmental indicators
            from them for consolidated reporting and risk analysis.
          </p>
        </div>

        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm"
          data-i18n="partners.s2.b"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Banking, Insurance & Risk Models
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Financial institutions increasingly require standardized CO₂e indicators from suppliers
            to evaluate sector, climate exposure and environmental risk—especially in credit,
            underwriting and procurement workflows.
          </p>
        </div>

        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200"
          data-i18n="partners.s2.c"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Supply-Chain Due Diligence
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Large groups must document supplier-level environmental information as part of
            procurement due-diligence. Missing CO₂e data slows onboarding, increases administrative
            burden and generates compliance exposure.
          </p>
        </div>

        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm"
          data-i18n="partners.s2.d"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            EU Expectations on Third-Party Screening
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            EU regulatory frameworks expect large companies to evaluate the environmental exposure
            of third parties. A standardized, reproducible, stateless CO₂e indicator simplifies the
            entire screening process and helps maintain audit trails.
          </p>
        </div>
      </div>

      <div className="mt-16 p-8 bg-white rounded-xl border border-gray-300 shadow-md">
        <h4 className="text-xl font-bold text-[#0B3A63] mb-3">
          Clarification of Regulatory Position
        </h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          Certif-Scope does not replace CSRD, ESRS or full GHG reporting. It provides a consistent,
          spend-based indicator designed for procurement screening and institutional workflows where
          a fast, standardized CO₂e figure is required from suppliers that do not track physical
          emissions.
        </p>
      </div>

      <div
        className="mt-16 bg-[#0B3A63] text-white p-10 rounded-xl shadow-md relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20" />

        <h4 className="text-2xl font-bold relative z-10">
          Why This Matters for Corporations
        </h4>

        <p className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10">
          Without a standardized supplier CO₂e indicator, onboarding slows down, compliance steps
          multiply, and risk models degrade. Certif-Scope provides a deterministic method that allows
          large groups to collect homogeneous data from thousands of suppliers with minimal effort.
        </p>
      </div>

      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          data-i18n="partners.s2.return"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
}
