"use client";

export default function Section7() {
  return (
    <section
      id="s7"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* SECTION HEADER */}
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold text-[#0B3A63]">
          Value Proposition & Differentiation
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mt-4">
          Certif-Scope delivers a unique combination of speed, compliance alignment,
          independent verification and a standardized institutional format. Designed
          specifically for SMEs across Europe, it bridges the gap between complex
          environmental reporting and the immediate needs of procurement, banking
          and risk assessment workflows.
        </p>
      </div>

      {/* FEATURE MATRIX GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14">

        {/* LEFT – MATRIX TABLE */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-6">
            What Makes Certif-Scope Unique
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-700">
              <thead>
                <tr className="bg-[#F8FAFC] border-b border-gray-200">
                  <th className="py-3 px-4 font-semibold text-[#0B3A63]">Capability</th>
                  <th className="py-3 px-4 font-semibold text-[#0B3A63]">Certif-Scope</th>
                  <th className="py-3 px-4 font-semibold text-[#0B3A63]">Traditional Audit</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4">Generation Time</td>
                  <td className="py-3 px-4 text-[#15B097] font-bold">30 seconds</td>
                  <td className="py-3 px-4">3–8 weeks</td>
                </tr>

                <tr className="border-b">
                  <td className="py-3 px-4">Cost</td>
                  <td className="py-3 px-4 text-[#15B097] font-bold">Flat & affordable</td>
                  <td className="py-3 px-4">€2,000–€20,000</td>
                </tr>

                <tr className="border-b">
                  <td className="py-3 px-4">Compliance Acceptance</td>
                  <td className="py-3 px-4 text-[#15B097] font-bold">Europe-wide</td>
                  <td className="py-3 px-4">Varies by provider</td>
                </tr>

                <tr className="border-b">
                  <td className="py-3 px-4">Third-party Verification</td>
                  <td className="py-3 px-4 text-[#15B097] font-bold">Yes — cryptographic</td>
                  <td className="py-3 px-4">Often not included</td>
                </tr>

                <tr>
                  <td className="py-3 px-4">Reproducibility</td>
                  <td className="py-3 px-4 text-[#15B097] font-bold">Deterministic</td>
                  <td className="py-3 px-4">Consultant-dependent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT – VALUE HIGHLIGHT CARD */}
        <div className="p-10 bg-[#0B3A63] text-white rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent opacity-40"></div>

          <h3 className="text-3xl font-bold relative z-10 mb-4">
            A Clear Competitive Advantage
          </h3>

          <p className="text-white/90 leading-relaxed relative z-10 mb-6 max-w-xl">
            Certif-Scope eliminates the delays, subjectivity and high costs associated
            with traditional ESG reporting. It provides a standardized, verifiable and
            repeatable output that institutions can rely on instantly, without human
            interpretation or manual validation.
          </p>

          <ul className="text-white/90 text-sm space-y-3 relative z-10">
            <li>• Instant institutional approval</li>
            <li>• Automated methodology compliance</li>
            <li>• Removes consultant dependency</li>
            <li>• Fully reproducible calculations</li>
            <li>• Perfect for procurement onboarding</li>
            <li>• Designed for European regulatory alignment</li>
          </ul>
        </div>
      </div>

      {/* STRATEGIC BENEFIT STRIP */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097] rounded-xl shadow-sm">
        <h4 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Why Institutions Prefer Certif-Scope
        </h4>

        <p className="text-gray-700 max-w-4xl">
          Banks, insurers, procurement departments and grant evaluators increasingly
          require standardized, credible environmental documentation. Certif-Scope
          delivers exactly this — and does it instantly. The standardized structure
          reduces friction, accelerates risk assessment workflows, and removes
          uncertainties linked to consultant-generated data.
        </p>
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
