export const metadata = {
  title: "Data Processing Overview — Certif-Scope",
  description:
    "High-level overview of how Certif-Scope processes data, including data flows, retention logic and GDPR-aligned responsibilities.",
};

export default function DataProcessingPage() {
  return (
    <div id="data-processing-page" className="max-w-7xl mx-auto px-6 pt-8 pb-24">

      {/* HEADER */}
      <div className="w-full mb-12">
        <h1
          data-i18n="dataproc.title"
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4"
        >
          Data Processing Overview
        </h1>

        <p
          data-i18n="dataproc.intro"
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl"
        >
          This document provides a high-level, non-contractual overview of how
          Certif-Scope processes data. It is intended to support transparency,
          institutional review and compliance assessment, and complements the
          Privacy Policy.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-12">

        {/* SECTION 1 */}
        <section>
          <h2
            data-i18n="dataproc.section1.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            1. Purpose of This Document
          </h2>

          <p
            data-i18n="dataproc.section1.text"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            This Data Processing Overview describes, in practical terms, how
            information flows through Certif-Scope systems. It does not replace
            the Privacy Policy and does not constitute a Data Processing
            Agreement (DPA). Its purpose is to clarify processing logic for
            users, partners and institutional reviewers.
          </p>
        </section>

        {/* SECTION 2 */}
        <section>
          <h2
            data-i18n="dataproc.section2.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            2. High-Level Data Flow
          </h2>

          <p
            data-i18n="dataproc.section2.text1"
            className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
          >
            Certif-Scope operates on a stateless and deterministic processing
            model. Data flows are limited to the strict minimum required to
            generate and verify a CO₂e Attestation.
          </p>

          <p
            data-i18n="dataproc.section2.text2"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Typical flow:
            <br />
            User input → In-memory computation → PDF generation → User download
            <br />
            Verification metadata is embedded directly in the generated document
            and does not rely on a database lookup.
          </p>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2
            data-i18n="dataproc.section3.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            3. Categories of Data Processed
          </h2>

          <ul
            data-i18n="dataproc.section3.list"
            className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2"
          >
            <li>Contact data (email address)</li>
            <li>Optional organization identification</li>
            <li>Declared annual spending (€) for CO₂e calculation</li>
            <li>Technical metadata (hash, timestamp, dataset version)</li>
            <li>Minimal technical logs for security and abuse prevention</li>
          </ul>

          <p
            data-i18n="dataproc.section3.note"
            className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4"
          >
            No behavioral profiling, cross-service enrichment or secondary use
            of data is performed.
          </p>
        </section>

        {/* SECTION 4 */}
        <section>
          <h2
            data-i18n="dataproc.section4.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            4. Processing Characteristics
          </h2>

          <ul
            data-i18n="dataproc.section4.list"
            className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2"
          >
            <li>Deterministic and reproducible calculations</li>
            <li>Stateless processing (no persistent input storage)</li>
            <li>User-initiated actions only</li>
            <li>Single-purpose use (attestation generation and verification)</li>
            <li>Time-limited in-memory handling</li>
          </ul>
        </section>

        {/* SECTION 5 */}
        <section>
          <h2
            data-i18n="dataproc.section5.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            5. Storage & Retention Logic
          </h2>

          <p
            data-i18n="dataproc.section5.text1"
            className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
          >
            Financial input values used for CO₂e calculation are processed in
            memory only and are never stored in databases.
          </p>

          <p
            data-i18n="dataproc.section5.text2"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Generated PDFs are delivered to the user and not retained by
            Certif-Scope. Email communications may be stored for up to 12 months
            for support and operational purposes.
          </p>
        </section>

        {/* SECTION 6 */}
        <section>
          <h2
            data-i18n="dataproc.section6.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            6. Processors & Infrastructure
          </h2>

          <p
            data-i18n="dataproc.section6.text1"
            className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3"
          >
            Certif-Scope relies on a limited number of technical processors:
          </p>

          <ul
            data-i18n="dataproc.section6.list"
            className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2"
          >
            <li>Hosting infrastructure (e.g. Vercel)</li>
            <li>Email delivery services</li>
            <li>Payment processing providers (where applicable)</li>
          </ul>

          <p
            data-i18n="dataproc.section6.text2"
            className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4"
          >
            All processors operate under GDPR-aligned contractual safeguards.
          </p>
        </section>

        {/* SECTION 7 */}
        <section>
          <h2
            data-i18n="dataproc.section7.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            7. Roles & Responsibilities
          </h2>

          <p
            data-i18n="dataproc.section7.text"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Certif-Scope acts as data controller for the processing operations
            required to deliver the service. Users remain responsible for the
            accuracy and lawfulness of the information they submit. No joint
            controllership is implied.
          </p>
        </section>

        {/* SECTION 8 */}
        <section>
          <h2
            data-i18n="dataproc.section8.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            8. Non-Contractual Nature
          </h2>

          <p
            data-i18n="dataproc.section8.text"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            This document is provided for informational purposes only. It does
            not constitute a Data Processing Agreement (DPA) and does not modify
            contractual or legal obligations defined elsewhere.
          </p>
        </section>

        {/* SECTION 9 */}
        <section>
          <h2
            data-i18n="dataproc.section9.title"
            className="text-2xl font-bold text-[#0B3A63] mb-4"
          >
            9. Updates & Contact
          </h2>

          <p
            data-i18n="dataproc.section9.text"
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            This overview may be updated to reflect technical or regulatory
            changes. For questions related to data processing, contact:
            <br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>

      </div>
    </div>
  );
        }
