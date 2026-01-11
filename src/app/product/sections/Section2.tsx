"use client";

export default function Section2() {
  return (
    <section
      id="s2"
      className="scroll-mt-24 bg-[#E8F3FA] py-20 border-y border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#0B3A63]">
            Key Benefits Summary
          </h2>
          <p className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Certif-Scope offers fast, standardized and verifiable CO₂ attestations 
            designed to satisfy procurement, banking, ESG, risk evaluation and 
            compliance requirements across Europe — without consultants, rework or delays.
          </p>
        </div>

        {/* MAIN FEATURE GRID (Premium layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LARGE FEATURE CARD – LEFT */}
          <div className="p-10 rounded-3xl bg-white shadow-xl border border-slate-200">
            <h3 className="text-2xl font-semibold text-[#1E90FF] mb-4">
              Instant and Automated
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Generate a fully structured CO₂ attestation in under 30 seconds.
              No manual spreadsheets, no consultant delays, no multi-week processing.
              Ideal for urgent procurement onboarding, partner verification or 
              loan applications requiring immediate documentation.
            </p>
            <ul className="space-y-3 text-slate-700 text-sm">
              <li>• Instant calculation and PDF export</li>
              <li>• No human validation required</li>
              <li>• Can be repeated at any time without extra cost</li>
              <li>• Perfect for small teams with limited ESG resources</li>
            </ul>
          </div>

          {/* 4 SMALL CARDS – RIGHT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="p-6 rounded-2xl bg-white shadow-md border border-slate-200">
              <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
                Standardized Format
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Document structure fully aligned with European procurement and ESG review frameworks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-md border border-slate-200">
              <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
                Accepted by Institutions
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Banks, insurers, buyers and public institutions can instantly review and validate.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-md border border-slate-200">
              <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
                Independently Verifiable
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Includes a verification ID and cryptographic hash for offline authenticity checks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-md border border-slate-200">
              <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
                Transparent Methodology
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                All emission factors and calculations documented clearly inside the attestation.
              </p>
            </div>

          </div>
        </div>

        {/* RETURN TO SUMMARY (DISCRET) */}
        <div className="text-right mt-12">
          <a
            href="#top"
            className="text-[#0B3A63] text-sm opacity-60 hover:opacity-100 underline"
          >
            Return to summary
          </a>
        </div>
      </div>
    </section>
  );
}
