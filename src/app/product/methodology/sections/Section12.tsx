"use client";

export default function Section12() {
  return (
    <section
      id="s12"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Institutional GDPR framing */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-300 rounded-2xl shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 to-[#15B097]/10 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          12. Data Privacy & GDPR Conformity
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          This section describes the personal data governance model, GDPR compliance
          obligations, minimisation rules and legal bases applicable to Certif-Scope.
          The processing architecture follows a strict privacy-by-design principle:
          no persistence, no profiling, and no disclosure to third parties.
        </p>
      </div>



      {/* BLOCK — Legal Basis */}
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Applicable Legal Basis
        </h3>

        <ul className="text-gray-700 text-sm leading-relaxed space-y-2">
          <li>• Processing relies on <strong>legitimate interest</strong> (GDPR Art.6(1)(f)) for institutional evaluation.</li>
          <li>• Explicit consent (Art.6(1)(a)) applies when users voluntarily submit expenditure data.</li>
          <li>• No sensitive-data processing (Art.9) is performed under any circumstance.</li>
          <li>• No automated profiling or scoring of individuals.</li>
        </ul>
      </div>



      {/* BLOCK — Data Minimisation */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Data Minimisation Principles
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Certif-Scope applies strict minimisation rules aligned with GDPR Art.5(1)(c):
          only essential financial indicators are processed, and nothing more.
        </p>

        <ul className="text-gray-700 text-sm leading-relaxed space-y-2">
          <li>• No user identity is required to compute emissions.</li>
          <li>• No personally identifiable information (PII) is stored.</li>
          <li>• All processing occurs in-memory without persistence.</li>
          <li>• No behavioural or analytics tracking is used.</li>
        </ul>
      </div>



      {/* BLOCK — No Cookies / No Tracking */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Cookies & Tracking Policy
        </h3>

        <ul className="text-gray-700 text-sm leading-relaxed space-y-2">
          <li>• No cookies are used for analytics or profiling.</li>
          <li>• No third-party trackers, pixels or behavioural scripts.</li>
          <li>• Optional session cookies are functional only and non-identifiable.</li>
          <li>• No cross-site sharing of data with external services.</li>
        </ul>
      </div>



      {/* BLOCK — Data Retention Rules */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/20 to-transparent pointer-events-none"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Retention, Storage & Deletion Policy
        </h3>

        <ul className="mt-4 text-white/90 text-sm space-y-2 relative z-10">
          <li>• No server-side retention of submitted financial data.</li>
          <li>• No logs containing user inputs are stored.</li>
          <li>• No backups include user-provided values.</li>
          <li>• Deletion is automatic at the end of the computation cycle.</li>
        </ul>
      </div>



      {/* BLOCK — Third-Party Access Restrictions */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Third-Party Access Restrictions
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Data isolation is enforced at all times. No direct or indirect access to
          user inputs is granted to external providers.
        </p>

        <ul className="text-gray-700 text-sm space-y-2 leading-relaxed">
          <li>• No transfer to cloud analytics vendors.</li>
          <li>• No sharing with ad networks or marketing tools.</li>
          <li>• No subcontracted processing of financial inputs.</li>
          <li>• No external storage of any kind.</li>
        </ul>
      </div>



      {/* BLOCK — Institutional Compliance Fit */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Institutional Compliance Fit
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <li>• Fully compatible with GDPR, ISO/IEC 29100 and EU procurement privacy rules.</li>
          <li>• No personal data means no DPIA requirement for institutions.</li>
          <li>• Compliant with banking confidentiality and risk screening workflows.</li>
          <li>• Suitable for public procurement documentation with zero PII exposure.</li>
        </ul>
      </div>



      {/* RETURN BUTTON */}
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
