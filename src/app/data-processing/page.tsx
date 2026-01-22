export const metadata = {
  title: "Data Processing Overview — Certif-Scope",
  description:
    "High-level overview of Certif-Scope data processing practices, including data flows, retention logic and GDPR-aligned roles and responsibilities.",
};

export default function DataProcessingPage() {
  return (
    <section
      id="data-processing"
      data-section="data-processing"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* CANONICAL PAGE HEADER — IDENTICAL TO PRODUCT / PRICING / PRIVACY / CONTACT / COOKIE */}
      <header className="mb-14">
        <p
          data-i18n="dataproc.label"
          className="uppercase text-xs tracking-wider text-[#64748B] mb-3"
        >
          Data Protection & GDPR
        </p>

        <h1
          data-i18n="dataproc.title"
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6"
        >
          Data Processing Overview
        </h1>

        <p
          data-i18n="dataproc.intro"
          className="text-lg text-gray-700 leading-relaxed max-w-3xl"
        >
          This document provides a high-level, non-contractual overview of how
          Certif-Scope processes data. It is intended for transparency,
          institutional review and compliance assessment, and complements the
          Privacy Policy.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENT — CANONICAL WIDTH */}
      <div className="max-w-4xl mx-auto space-y-14">
        {/* SECTION 1 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Purpose and Scope
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This Data Processing Overview describes the practical data handling
            logic of Certif-Scope. It does not replace the Privacy Policy and does
            not constitute a Data Processing Agreement (DPA). Its sole purpose
            is to explain how data flows through the service at a high level.
          </p>
        </section>

        {/* SECTION 2 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. High-Level Data Flow
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope operates a stateless and deterministic processing model.
            Data flows are intentionally limited to what is strictly necessary
            to generate and verify a CO₂e Attestation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Typical processing sequence:
            <br />
            User input → In-memory computation → PDF generation → User download
            <br />
            Verification elements are embedded directly in the generated
            document and do not rely on database lookups.
          </p>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Categories of Data Processed
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Contact data (email address)</li>
            <li>Optional organization identification data</li>
            <li>Declared annual spending (€) used for CO₂e calculation</li>
            <li>Technical metadata (hash, timestamp, dataset version)</li>
            <li>Minimal technical logs for security and abuse prevention</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            No behavioral profiling, user tracking, enrichment or secondary use
            of data is performed.
          </p>
        </section>

        {/* SECTION 4 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Processing Characteristics
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Deterministic and reproducible calculations</li>
            <li>Stateless processing with no persistent input storage</li>
            <li>User-initiated actions only</li>
            <li>Single-purpose processing (attestation issuance and verification)</li>
            <li>Time-limited in-memory handling</li>
          </ul>
        </section>

        {/* SECTION 5 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Storage and Retention
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Financial input data used for CO₂e calculation is processed in
            memory only and is never stored in persistent databases.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Generated PDF attestations are delivered directly to the user and
            are not retained by Certif-Scope. Email communications may be stored
            for up to twelve (12) months for support and operational purposes.
          </p>
        </section>

        {/* SECTION 6 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Processors and Infrastructure
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Certif-Scope relies on a limited number of technical processors:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Hosting and deployment infrastructure (e.g. Vercel)</li>
            <li>Email delivery services</li>
            <li>Payment processing providers (where applicable)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            All processors operate under GDPR-aligned contractual safeguards.
          </p>
        </section>

        {/* SECTION 7 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Roles and Responsibilities
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Certif-Scope acts as data controller for the processing operations
            required to deliver the service. Users remain responsible for the
            accuracy, relevance and lawfulness of the information they submit.
            No joint controllership is implied.
          </p>
        </section>

        {/* SECTION 8 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            8. Non-Contractual Nature
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This document is provided for informational purposes only. It does
            not constitute a Data Processing Agreement (DPA) and does not modify
            any contractual or legal obligations defined elsewhere.
          </p>
        </section>

        {/* SECTION 9 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            9. Updates and Contact
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This overview may be updated to reflect technical, operational or
            regulatory changes. For questions related to data processing, contact:
            <br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>
      </div>
    </section>
  );
            }
