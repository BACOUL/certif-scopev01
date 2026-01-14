"use client";

export default function Section12() {
  return (
    <section
      id="s12"
      data-section="s12"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="p-12 rounded-2xl bg-[#F8FAFC] border border-[#15B097]/30 shadow-md">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]"
          data-i18n="s12.title"
        >
          Data Privacy & GDPR Compliance
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed"
          data-i18n="s12.intro1"
        >
          Certif-Scope processes no personal data. Only anonymous numerical expenditure values are
          used temporarily to generate the CO₂ indicator. No names, emails, identifiers, IP addresses,
          session logs or behavioural metadata are collected, stored or transmitted at any time.
        </p>

        <p
          className="text-gray-700 text-sm mt-4 max-w-4xl leading-relaxed"
          data-i18n="s12.intro2"
        >
          Since no personal data is processed or retained, the workflow falls outside the practical
          scope of GDPR. However, ePrivacy obligations still apply, and Certif-Scope complies fully
          by using no cookies, no trackers and no third-party analytics.
        </p>

        <p
          className="text-gray-700 text-sm mt-4 max-w-4xl leading-relaxed"
          data-i18n="s12.intro3"
        >
          Certif-Scope does not store, transmit or log any user inputs. All processing is ephemeral,
          respecting GDPR Article 5(1)(c) on data minimisation principles.
        </p>
      </div>


      {/* NO TRACKING */}
      <div
        className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md"
        data-i18n="s12.block.notracking"
      >
        <h3 className="text-2xl font-semibold mb-4">
          No Cookies, No Tracking, No Analytics
        </h3>

        <ul className="text-sm text-white/85 space-y-2 leading-relaxed">
          <li>• No analytics or tracking scripts</li>
          <li>• No advertising or marketing cookies</li>
          <li>• No fingerprinting or device profiling</li>
          <li>• No behavioural monitoring</li>
          <li>• No personal data collected or retained</li>
        </ul>

        <p className="mt-4 text-xs text-white/70">
          Fully compliant with GDPR and ePrivacy: no tracking, no cookies, no identifiers.
        </p>
      </div>


      {/* STATELESS */}
      <div
        className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/40 rounded-xl shadow-sm"
        data-i18n="s12.block.stateless"
      >
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Stateless Processing Architecture
        </h3>

        <p className="text-gray-700 text-sm max-w-4xl leading-relaxed">
          Inputs exist only in volatile memory during the calculation phase. Once the PDF is produced,
          all data is destroyed immediately. No databases, logs, diagnostics, backups or cloud services
          store any user-provided information.
        </p>
      </div>


      {/* NO THIRD PARTY */}
      <div
        className="mt-20 p-10 bg-white rounded-xl border border-gray-200 shadow-md"
        data-i18n="s12.block.nothirdparties"
      >
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          No Third-Party Data Transfers
        </h3>

        <p className="text-gray-700 text-sm max-w-4xl leading-relaxed">
          No data is transmitted to external providers. No international transfers (GDPR Chapter V)
          occur. Processing is fully contained within an isolated execution environment with no
          communication to third parties.
        </p>
      </div>


      {/* GDPR RIGHTS NOT APPLICABLE */}
      <div
        className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/40 rounded-xl shadow-sm"
        data-i18n="s12.block.rights"
      >
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          GDPR Data Subject Rights (Not Applicable)
        </h3>

        <p className="text-gray-700 text-sm max-w-4xl leading-relaxed">
          GDPR rights (access, rectification, erasure, portability, restriction, objection) do not
          apply because Certif-Scope does not collect or store any personal data. There is no dataset
          to access or erase, and no processing record involving identifiable information.
        </p>
      </div>


      {/* RETURN */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          data-i18n="s12.return"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
          }
