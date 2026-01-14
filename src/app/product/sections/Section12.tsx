"use client";

export default function Section12() {
  return (
    <section
      id="s12"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Data Privacy */}
      <div className="p-12 rounded-2xl bg-[#F8FAFC] border border-[#15B097]/30 shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          12. Data Privacy & GDPR Compliance
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          Certif-Scope processes no personal data. Only anonymous numerical expenditure values
          are used temporarily to generate the CO₂ indicator. No names, emails, identifiers,
          IP addresses, session logs or behavioural metadata are collected, stored or transmitted.
        </p>

        <p className="text-gray-700 text-sm mt-4 max-w-4xl leading-relaxed">
          Because no personal data is processed, the workflow falls outside the scope of GDPR.
          This ensures full conformity with institutional data-handling requirements in banking,
          insurance, procurement, ESG due-diligence and public-sector environments.
        </p>
      </div>



      {/* BLOCK — ePrivacy & No Tracking */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold mb-4">
          No Cookies, No Tracking, No Analytics
        </h3>

        <ul className="text-sm text-white/85 space-y-2 leading-relaxed">
          <li>• No analytics tools or tracking scripts</li>
          <li>• No advertising or marketing cookies</li>
          <li>• No fingerprinting or device identification</li>
          <li>• No session tracking or behavioural profiling</li>
          <li>• No personal data entered, collected or retained</li>
        </ul>

        <p className="mt-4 text-xs text-white/70">
          Compliant with GDPR and ePrivacy Directive: no tracking, no storage, no cookies.
        </p>
      </div>



      {/* BLOCK — Stateless Architecture */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/40 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Stateless Processing Architecture
        </h3>

        <p className="text-gray-700 text-sm max-w-4xl leading-relaxed">
          Processing occurs in a fully ephemeral execution environment. Inputs exist only in
          memory during computation and are discarded immediately after generating the PDF.
          No databases, logs, backups or cloud storage retain any user information.
        </p>
      </div>



      {/* BLOCK — No Third-Party Transfers */}
      <div className="mt-20 p-10 bg-white rounded-xl border border-gray-200 shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          No Third-Party Data Transfers
        </h3>

        <p className="text-gray-700 text-sm max-w-4xl leading-relaxed">
          No data is transmitted to third parties. No cloud provider receives user inputs.
          No international transfers occur under GDPR Chapter V. Processing remains fully
          contained and isolated within the execution environment.
        </p>
      </div>



      {/* BLOCK — GDPR Rights Not Applicable */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/40 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          GDPR Data Subject Rights (Not Applicable)
        </h3>

        <p className="text-gray-700 text-sm max-w-4xl leading-relaxed">
          GDPR data subject rights (access, rectification, erasure, portability, restriction,
          objection) do not apply because Certif-Scope does not process, store or retain any
          personal data. No information exists that could identify a user or be retrieved.
        </p>
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
