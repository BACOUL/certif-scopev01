export default function Section8() {
  return (
    <section
      id="security-assumptions"
      data-section="security-assumptions"
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] mb-4">
          8. Security Assumptions & Threat Model
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          This section defines the explicit security assumptions, threat model
          and trust boundaries underlying Certif-Scope CO₂e attestations. It
          clarifies what the system protects against, what it does not, and how
          verification should be interpreted in institutional contexts.
        </p>
      </header>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        {/* CORE ASSUMPTIONS */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Core security assumptions
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            The Certif-Scope private signing key remains confidential and is not
            compromised.
          </li>
          <li>
            The public verification key published by Certif-Scope is authentic
            and has not been substituted.
          </li>
          <li>
            Standard cryptographic primitives (Ed25519, SHA-256) are secure
            against practical attacks.
          </li>
          <li>
            Verifiers operate on the original PDF file without modification.
          </li>
        </ul>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            These assumptions are explicit and verifiable. No hidden trust in
            Certif-Scope infrastructure, databases or APIs is required.
          </p>
        </div>

        {/* TRUST BOUNDARIES */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Trust boundaries
        </h3>

        <p>
          Certif-Scope establishes a strict trust boundary at the signed PDF
          document:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>The PDF is the sole object of trust</li>
          <li>No online registry or validation endpoint is authoritative</li>
          <li>Verification does not rely on availability of Certif-Scope</li>
        </ul>

        <p>
          Once issued, the attestation exists independently of the issuer.
        </p>

        {/* THREAT MODEL */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Threat model
        </h3>

        <p>
          The following threat scenarios are explicitly considered:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Modification of PDF content after issuance</li>
          <li>Forgery of an attestation using altered data</li>
          <li>Replay or reuse of a previously issued attestation</li>
          <li>Misrepresentation of the issuer identity</li>
        </ul>

        <p>
          All these attacks are mitigated by cryptographic signing of the
          attestation payload.
        </p>

        {/* OUT OF SCOPE */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Out-of-scope threats
        </h3>

        <p>
          The following risks are explicitly out of scope and not mitigated by
          the attestation system:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Incorrect or misleading input data provided by the user</li>
          <li>Fraudulent financial or activity data at source</li>
          <li>Misinterpretation of results by third parties</li>
          <li>Regulatory misuse beyond the declared scope</li>
        </ul>

        <div className="bg-[#FFF7ED] border-l-4 border-[#F59E0B] p-4 text-sm">
          <p>
            Cryptographic verification ensures integrity and authenticity, not
            factual accuracy of underlying business data.
          </p>
        </div>

        {/* KEY MANAGEMENT */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Key management and rotation
        </h3>

        <p>
          Certif-Scope uses a single issuer signing key per issuance version.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>The public key is published and immutable for a given version</li>
          <li>Key rotation implies a new attestation version</li>
          <li>Old attestations remain verifiable indefinitely</li>
        </ul>

        <p>
          This model prevents silent trust changes and preserves long-term
          verifiability.
        </p>

        {/* INSTITUTIONAL USE */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Interpretation for institutional use
        </h3>

        <p>
          For procurement teams, banks, insurers and auditors, verification
          confirms:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>The document is authentic and untampered</li>
          <li>The issuer is uniquely identifiable</li>
          <li>The attestation corresponds to a specific issuance event</li>
        </ul>

        <p>
          Verification does <strong>not</strong> imply regulatory compliance,
          audit assurance, or completeness of emissions reporting.
        </p>

        {/* FINAL */}
        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            This explicit threat model is designed to be transparent, auditable
            and acceptable in European institutional and compliance contexts.
          </p>
        </div>
      </div>
    </section>
  );
          }
