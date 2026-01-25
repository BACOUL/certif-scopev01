export default function Section1() {
  return (
    <section
      id="verification-model"
      data-section="verification-model"
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] mb-4">
          1. Verification Model Overview
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          This section explains the global verification model used by
          Certif-Scope. It defines what an attestation is, how trust is
          established, and why verification can be performed independently,
          offline, and without any external service.
        </p>
      </header>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          A Certif-Scope CO₂e attestation is issued as a{" "}
          <strong>digitally signed PDF document</strong>. The PDF file itself is
          the sole object of verification. No online registry, API, blockchain,
          or external database is required.
        </p>

        <p>
          Verification is based on a{" "}
          <strong>deterministic cryptographic signature</strong> applied at the
          time of issuance. Any modification to the document — even a single
          byte — invalidates the signature.
        </p>

        <p>
          The verification model deliberately avoids dependency on Certif-Scope
          infrastructure after issuance. This ensures that:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>The document remains verifiable if Certif-Scope is unavailable</li>
          <li>Verification can be performed offline</li>
          <li>No personal or financial data needs to be queried</li>
          <li>Third parties do not need an account or permission</li>
        </ul>

        <p>
          Trust is established through a{" "}
          <strong>single public verification key</strong> published by
          Certif-Scope. This key allows any party to verify that:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>The attestation was issued by Certif-Scope</li>
          <li>The content has not been altered since issuance</li>
          <li>The Attestation ID matches the signed payload</li>
        </ul>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            <strong>Important:</strong> Verification confirms the{" "}
            <strong>authenticity and integrity</strong> of the document. It does
            not validate the economic data provided by the user, nor does it
            constitute an audit, assurance engagement, or regulatory compliance
            assessment.
          </p>
        </div>
      </div>
    </section>
  );
}
