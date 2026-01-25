export default function Section3() {
  return (
    <section
      id="signed-data-structure"
      data-section="signed-data-structure"
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] mb-4">
          3. Signed Data Structure
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          This section defines exactly what data is cryptographically signed in
          a Certif-Scope attestation. Understanding this structure is essential
          to correctly verify integrity and authenticity.
        </p>
      </header>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Certif-Scope does not sign the entire PDF file arbitrarily. Instead, it
          signs a <strong>canonical payload</strong>: a strictly defined,
          normalized data structure extracted from the attestation content.
        </p>

        <p>
          This approach ensures that verification is deterministic, independent
          from PDF rendering differences, and reproducible across platforms and
          programming languages.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Canonical payload definition
        </h3>

        <p>
          The canonical payload is a JSON object with fixed keys, fixed ordering,
          and normalized values. Any deviation in structure, ordering, or value
          formatting will produce a different hash and invalidate the signature.
        </p>

        <pre className="bg-white border border-gray-300 rounded-md p-4 text-sm overflow-x-auto text-gray-800">
{`{
  "issuer": "Certif-Scope",
  "standard": "CS-SB-v1",
  "attestationId": "CS-2026-XXXXXXXX",
  "companyName": "Example Company",
  "country": "FR",
  "year": "2026",
  "totalCO2e": "15.2",
  "issuedDate": "2026-01-25T14:32:10.000Z"
}`}
        </pre>

        <p>
          All values are treated as strings in the canonical payload, including
          numeric values. This prevents ambiguity caused by floating-point
          representations or locale-specific formatting.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Hashing process
        </h3>

        <p>
          The canonical payload is serialized using UTF-8 encoding and hashed
          using SHA-256. The resulting hash represents the exact state of the
          signed data.
        </p>

        <p>
          Any modification to:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Field values</li>
          <li>Field names</li>
          <li>Field ordering</li>
          <li>Whitespace or encoding</li>
        </ul>

        <p>
          will produce a different hash and cause signature verification to
          fail.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Relationship to the PDF document
        </h3>

        <p>
          The signed payload corresponds to specific visible fields in the PDF
          document (issuer, entity, year, total CO₂e, attestation identifier,
          and issue date).
        </p>

        <p>
          Visual elements, layout, fonts, and non-signed explanatory text are
          not part of the canonical payload and do not affect verification,
          provided the signed data remains unchanged.
        </p>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            <strong>Important:</strong> The Attestation ID is derived from the
            cryptographic hash of the canonical payload. A mismatch between the
            displayed Attestation ID and the signed payload indicates tampering
            or an invalid document.
          </p>
        </div>

        <p>
          This strict separation between signed data and presentation ensures
          long-term verifiability, even if PDF rendering engines or layouts
          evolve over time.
        </p>
      </div>
    </section>
  );
}
