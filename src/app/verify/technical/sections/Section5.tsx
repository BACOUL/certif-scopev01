export default function Section5() {
  return (
    <section
      id="verification-scope"
      data-section="verification-scope"
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] mb-4">
          5. What Is Verified (and What Is Not)
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          This section precisely defines the scope of technical verification for
          a Certif-Scope CO₂e attestation, clarifying what the cryptographic
          verification guarantees — and what it deliberately does not.
        </p>
      </header>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <h3 className="text-xl font-bold text-[#0B3A63]">
          What is cryptographically verified
        </h3>

        <p>
          When verifying a Certif-Scope attestation using the public key and
          digital signature, the following elements are strictly verified:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Document integrity</strong>: the PDF content has not been
            altered since it was signed
          </li>
          <li>
            <strong>Issuer authenticity</strong>: the attestation was issued by
            Certif-Scope using its private signing key
          </li>
          <li>
            <strong>Payload consistency</strong>: the signed payload matches the
            visible data shown in the document (company name, year, CO₂e value,
            attestation ID, issue date)
          </li>
          <li>
            <strong>Attestation identifier</strong>: the Attestation ID is
            cryptographically bound to the signed data
          </li>
        </ul>

        <p>
          These guarantees are objective, reproducible, and independent of any
          online system or database.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          What is not verified
        </h3>

        <p>
          The verification process intentionally does <strong>not</strong>
          attempt to validate the following aspects:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Accuracy or completeness of the financial input data</li>
          <li>Correctness of user-declared activity or sector</li>
          <li>Exhaustiveness of emissions sources</li>
          <li>Compliance with CSRD, ESRS, or other regulatory frameworks</li>
          <li>Consistency with Scope 1, 2, or 3 inventories</li>
          <li>Third-party audit or assurance conclusions</li>
        </ul>

        <p>
          These exclusions are not limitations of the cryptography, but
          deliberate product boundaries aligned with the intended use of the
          attestation.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Indicative and non-regulatory nature
        </h3>

        <p>
          Certif-Scope attestations represent an <strong>indicative,
          spend-based CO₂e estimate</strong>. They are designed to support
          standardized information requests, not to replace regulatory
          reporting or audited carbon accounting.
        </p>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            <strong>Important distinction:</strong> An attestation can be
            technically authentic and verifiable while remaining non-regulatory
            and non-audited. These two concepts must not be conflated.
          </p>
        </div>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Why these boundaries exist
        </h3>

        <p>
          Clear verification boundaries ensure that:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Verification remains objective and reproducible</li>
          <li>No implicit regulatory or legal claims are made</li>
          <li>Third parties are not misled about the document’s scope</li>
          <li>The attestation can be used safely in procurement and diligence
              workflows</li>
        </ul>

        <p>
          This explicit scoping is a core design requirement for institutional
          acceptability and long-term trust.
        </p>
      </div>
    </section>
  );
}
