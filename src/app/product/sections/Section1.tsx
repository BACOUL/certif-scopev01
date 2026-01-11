"use client";

export default function Section1() {
  return (
    <section id="s1" className="scroll-mt-24 w-full">
      {/* WRAPPER */}
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl shadow-sm p-10">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-[#0B3A63] mb-6">
          1. Product Overview
        </h2>

        {/* INTRO BLOCK */}
        <p className="text-lg text-slate-700 leading-relaxed mb-8">
          Certif-Scope provides an instant, verifiable CO₂ attestation based on
          standardized expenditure-based calculations. It is designed for
          procurement teams, financial institutions, auditors, and digital
          workflows that require compliant environmental documentation under
          European frameworks (CSRD, GHG Protocol, EU Taxonomy).
        </p>

        {/* KEY TAGLINE / HIGHLIGHT */}
        <div className="p-6 rounded-lg bg-[#15B097]/10 border-l-4 border-[#15B097] mb-10">
          <p className="text-[#0B3A63] font-semibold text-lg">
            Generate a carbon attestation in less than 3 seconds — exportable,
            verifiable and ready for institutional use.
          </p>
        </div>

        {/* 3 FEATURE COLUMNS */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          <div className="p-6 bg-white rounded-xl border border-[#E2E8F0] shadow-sm">
            <h3 className="text-[#0B3A63] font-semibold text-lg mb-2">Instant Results</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Calculations performed immediately and formatted in a professional
              attestation suitable for audits, due diligence, and compliance.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-[#E2E8F0] shadow-sm">
            <h3 className="text-[#0B3A63] font-semibold text-lg mb-2">
              Standardized Methodology
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Built on GHG Protocol principles with transparent factors and
              institutional-grade traceability.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-[#E2E8F0] shadow-sm">
            <h3 className="text-[#0B3A63] font-semibold text-lg mb-2">
              Ready for Integration
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Works with procurement workflows, loan applications, supplier
              assessments, and digital onboarding processes.
            </p>
          </div>
        </div>

        {/* INSTITUTIONAL USE CASE BLOCK */}
        <div className="bg-white p-8 rounded-xl border border-[#E2E8F0] shadow-sm mb-12">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-4">
            Built for Institutional Requirements
          </h3>

          <ul className="space-y-3 text-slate-700">
            <li>• Accepted by procurement teams and corporate buyers</li>
            <li>• Suitable for bank loan applications and financing files</li>
            <li>• Aligns with standard ESG & compliance documentation</li>
            <li>• Compatible with multilingual (EU) regulatory environments</li>
            <li>• Exportable in PDF and digital JSON verification format</li>
          </ul>
        </div>

        {/* CTA BOX */}
        <div className="p-8 rounded-xl bg-[#0B3A63] text-white shadow-md mb-10">
          <h3 className="text-2xl font-semibold mb-3">
            A simple, verifiable CO₂ attestation designed for Europe
          </h3>
          <p className="text-white/80 mb-5">
            Certif-Scope allows any company — regardless of size — to instantly
            provide environmental impact documentation compliant with European
            expectations.
          </p>

          <a
            href="/"
            className="inline-block px-6 py-3 text-sm font-medium bg-[#15B097] text-white rounded-lg shadow hover:bg-[#139a84] transition"
          >
            Learn more on the homepage
          </a>
        </div>

        {/* RETURN BUTTON (UNIFORM ACROSS ALL SECTIONS) */}
        <div className="mt-6">
          <a
            href="#top"
            className="inline-block text-xs font-medium text-[#0B3A63] underline hover:text-[#15B097] transition"
          >
            Back to summary
          </a>
        </div>
      </div>
    </section>
  );
}
