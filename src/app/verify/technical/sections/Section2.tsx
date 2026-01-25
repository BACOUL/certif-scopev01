export default function Section2() {
  return (
    <section
      id="cryptographic-foundations"
      data-section="cryptographic-foundations"
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] mb-4">
          2. Cryptographic Foundations
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          This section describes the cryptographic primitives used to secure
          Certif-Scope attestations. It explains the algorithms involved, their
          role in the verification process, and why they were selected.
        </p>
      </header>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Each Certif-Scope attestation is protected using{" "}
          <strong>asymmetric cryptography</strong>. This allows the issuer to
          sign a document with a private key, while any third party can verify
          the signature using a corresponding public key.
        </p>

        <p>
          The cryptographic system is intentionally simple, deterministic, and
          based on widely adopted standards to ensure long-term verifiability
          and interoperability.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Algorithms used
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Hash function:</strong> SHA-256, used to produce a fixed-size
            digest of the canonical payload.
          </li>
          <li>
            <strong>Signature algorithm:</strong> Ed25519, used to sign the hash
            and ensure authenticity and integrity.
          </li>
          <li>
            <strong>Encoding:</strong> Base64 for public key and signature
            representation.
          </li>
        </ul>

        <p>
          These algorithms were selected because they are:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Cryptographically strong and well-reviewed</li>
          <li>Efficient and suitable for offline verification</li>
          <li>Supported by common cryptographic libraries</li>
          <li>Stable and unlikely to be deprecated in the near future</li>
        </ul>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Deterministic signing model
        </h3>

        <p>
          Certif-Scope uses a deterministic signing approach. The same canonical
          payload will always produce the same hash and the same Attestation ID.
          This ensures reproducibility and makes verification independent from
          any server-side state.
        </p>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            <strong>Security note:</strong> The private signing key is never
            embedded in the PDF, never transmitted, and never exposed. Only the
            resulting signature and the public verification key are required
            for verification.
          </p>
        </div>

        <p>
          The cryptographic layer guarantees that any change to the document
          content — including metadata, values, or formatting affecting the
          signed payload — will invalidate the signature during verification.
        </p>
      </div>
    </section>
  );
}
