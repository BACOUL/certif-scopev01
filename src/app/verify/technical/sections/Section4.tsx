export default function Section4() {
  return (
    <section
      id="public-key-and-trust"
      data-section="public-key-and-trust"
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] mb-4">
          4. Public Key & Trust Model
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          This section explains how trust is established in Certif-Scope
          attestations and how the public verification key is used to validate
          authenticity without relying on any online service.
        </p>
      </header>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Certif-Scope uses an <strong>asymmetric cryptographic model</strong>
          based on the Ed25519 digital signature algorithm.
        </p>

        <p>
          In this model, attestations are signed using a <strong>private key</strong>
          held exclusively by Certif-Scope, while verification is performed using
          a corresponding <strong>public key</strong> that is freely distributed.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Role of the public key
        </h3>

        <p>
          The public key allows any third party to verify that:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>The attestation was issued by Certif-Scope</li>
          <li>The signed data has not been modified since issuance</li>
          <li>The signature corresponds exactly to the signed payload</li>
        </ul>

        <p>
          The public key <strong>does not allow</strong> anyone to generate new
          attestations or signatures. It is used exclusively for verification.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Key immutability and continuity
        </h3>

        <p>
          Certif-Scope operates with a <strong>single, long-term public
          verification key</strong>. This key is:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Publicly disclosed</li>
          <li>Never rotated or revoked for issued attestations</li>
          <li>Valid for offline and long-term verification</li>
        </ul>

        <p>
          Once an attestation is issued, its verifiability does not depend on the
          continued operation of Certif-Scope servers, APIs, or databases.
        </p>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            <strong>Design principle:</strong> A third party must be able to
            verify an attestation ten years later, with only the PDF file and
            the public key — even if Certif-Scope no longer exists.
          </p>
        </div>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Trust establishment
        </h3>

        <p>
          Trust in a Certif-Scope attestation is established through:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Initial trust in Certif-Scope as the issuer</li>
          <li>Independent verification of the signature using the public key</li>
          <li>Consistency between the signed payload and visible document data</li>
        </ul>

        <p>
          Certif-Scope does not operate a certificate authority (CA), public
          registry, or revocation list. The model is intentionally simple and
          transparent.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          What the public key does not guarantee
        </h3>

        <p>
          It is important to distinguish <strong>technical authenticity</strong>
          from <strong>content validity</strong>.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>The public key verifies the integrity of the document</li>
          <li>It does not validate the accuracy of input data</li>
          <li>It does not certify regulatory compliance</li>
          <li>It does not replace audits or assurance engagements</li>
        </ul>

        <p>
          These boundaries are explicit and intentional, ensuring that the
          verification mechanism is robust, auditable, and not misleading.
        </p>
      </div>
    </section>
  );
}
