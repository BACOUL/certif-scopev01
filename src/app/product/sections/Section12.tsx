"use client";

export default function Section12() {
  return (
    <section
      id="s12"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Data Privacy & GDPR */}
      <div className="p-12 rounded-2xl bg-[#F8FAFC] border border-[#15B097]/30 shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          12. Data Privacy & GDPR Compliance
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed">
          Certif-Scope operates under strict GDPR principles: data minimisation, stateless
          processing, no retention of personal information, and no transfer to third parties.
          Only anonymous numerical expenditure values are processed, solely for generating
          a CO₂ indicator. No user identity, IP address, session metadata or behavioural
          information is stored.
        </p>

        <p className="text-gray-700 text-sm mt-4 max-w-4xl leading-relaxed">
          Certif-Scope does not use cookies, analytics trackers, advertising scripts or
          fingerprinting technologies. No profiling or automated decision-making is applied.
        </p>
      </div>



      {/* BLOCK — Legal Basis */}
      <div className="mt-20 p-10 bg-white rounded-xl border border-gray-200 shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Legal Basis for Processing (GDPR Articles 5 & 6)
        </h3>

        <ul className="text-sm text-gray-700 space-y-3 leading-relaxed">
          <li>
            • <strong>Consent — GDPR Art. 6(1)(a):</strong> the user voluntarily provides
            expenditure values to generate a CO₂ indicator.  
          </li>

          <li>
            • <strong>Legitimate Interest — GDPR Art. 6(1)(f):</strong> institutions (banks,
            insurers, procurement) require standardized environmental indicators for
            due-diligence, screening and risk evaluation.  
          </li>

          <li>
            • <strong>Data Minimisation — GDPR Art. 5:</strong> only numerical values are
            processed; no identity, contact details, IP addresses or usage analytics are stored.  
          </li>
        </ul>
      </div>



      {/* BLOCK — No Tracking / No Cookies */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold mb-4">
          No Cookies, No Tracking, No Analytics
        </h3>

        <ul className="text-sm text-white/85 space-y-2 leading-relaxed">
          <li>• No analytics (Google Analytics, Matomo, Mixpanel)</li>
          <li>• No tracking pixels (Facebook Pixel, LinkedIn Insight)</li>
          <li>• No session tracking or behavioural profiling</li>
          <li>• No advertising or marketing cookies</li>
          <li>• No fingerprinting, no device profiling</li>
        </ul>

        <p className="mt-4 text-xs text-white/70">
          As no optional or tracking cookies are used, a cookie banner is not required under GDPR and ePrivacy Directive.
        </p>
      </div>



      {/* BLOCK — Stateless Processing */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/40 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Stateless Processing Architecture
        </h3>

        <p className="text-gray-700 text-sm max-w-4xl leading-relaxed">
          No persistent storage is used. Inputs exist only in memory during processing and are
          immediately discarded after generating the PDF. No logs, no backups, no databases and
          no servers retain user data. This architecture eliminates typical GDPR exposure points
          such as breaches, retention risks and unauthorized reuse.
        </p>
      </div>



      {/* BLOCK — No Third Parties */}
      <div className="mt-20 p-10 bg-white rounded-xl border border-gray-200 shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          No Third-Party Data Transfers
        </h3>

        <p className="text-gray-700 text-sm max-w-4xl leading-relaxed">
          Data is never shared with third parties. No cloud storage providers receive user data.
          No international transfers occur under GDPR Chapter V. The processing is fully contained
          within a stateless, ephemeral execution environment.
        </p>
      </div>



      {/* BLOCK — User Rights */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/40 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          User Rights Under GDPR
        </h3>

        <ul className="text-sm text-gray-700 space-y-2 leading-relaxed">
          <li>• Right of access (Art. 15)</li>
          <li>• Right to rectification (Art. 16)</li>
          <li>• Right to erasure — not applicable because no data is stored</li>
          <li>• Right to restrict processing (Art. 18)</li>
          <li>• Right to object (Art. 21)</li>
        </ul>

        <p className="mt-3 text-xs text-gray-600">
          Most rights do not apply because data is never stored, processed continuously or retained.
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
