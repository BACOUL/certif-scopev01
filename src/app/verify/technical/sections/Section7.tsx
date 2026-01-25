export default function Section7() {
  return (
    <section
      id="step-by-step-verification"
      data-section="step-by-step-verification"
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] mb-4">
          7. Step-by-Step Verification (CLI & Code)
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          This section provides concrete, reproducible instructions to verify a
          Certif-Scope attestation from start to finish using command-line tools
          and code. These steps are suitable for auditors, developers and
          compliance teams.
        </p>
      </header>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        {/* PREREQUISITES */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Prerequisites
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>The original attestation PDF file</li>
          <li>Access to a terminal (Linux, macOS, Windows, or Termux)</li>
          <li>Standard cryptographic tooling (OpenSSL or equivalent)</li>
          <li>The Certif-Scope public verification key</li>
        </ul>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            All verification steps are performed offline. No network access to
            Certif-Scope systems is required.
          </p>
        </div>

        {/* STEP 1 */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Step 1 — Obtain the original PDF
        </h3>

        <p>
          Ensure that you are working with the original PDF file as delivered by
          the issuer. Any modification, re-save, or conversion invalidates the
          signature.
        </p>

        {/* STEP 2 */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Step 2 — Verify using a standard PDF reader
        </h3>

        <p>
          Open the PDF in a viewer supporting digital signatures (e.g. Adobe
          Acrobat, Foxit).
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Open the “Signature” or “Security” panel</li>
          <li>Confirm the document is marked as signed</li>
          <li>Validate that the signature status is “valid”</li>
        </ul>

        <p>
          This confirms both authenticity (issuer) and integrity (unchanged
          content).
        </p>

        {/* STEP 3 */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Step 3 — Manual verification via CLI (example)
        </h3>

        <p>
          For explicit verification, the signed payload hash printed in the PDF
          can be compared against a locally computed hash.
        </p>

        <p className="font-semibold">
          Example (hash comparison):
        </p>

        <pre className="text-sm bg-white border border-gray-300 rounded-md p-4 overflow-x-auto font-mono">
{`# Compute SHA-256 hash of the PDF
sha256sum certif-scope-attestation.pdf`}
        </pre>

        <p>
          Confirm that the resulting hash matches the hash displayed in the
          attestation document.
        </p>

        <div className="bg-[#FFF7ED] border-l-4 border-[#F59E0B] p-4 text-sm">
          <p>
            Matching hashes confirm document integrity but do not alone prove
            issuer authenticity. Signature verification is required for full
            validation.
          </p>
        </div>

        {/* STEP 4 */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Step 4 — Cryptographic signature verification (advanced)
        </h3>

        <p>
          Advanced verification involves checking the Ed25519 signature against
          the canonical payload using the Certif-Scope public key.
        </p>

        <p>
          This typically includes:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Extracting the signed payload</li>
          <li>Decoding the Base64 signature</li>
          <li>Verifying the signature with the public key</li>
        </ul>

        <p>
          This process may be implemented using Python, Node.js or dedicated
          cryptographic tools.
        </p>

        {/* PYTHON EXAMPLE */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Example — Verification in Python (conceptual)
        </h3>

        <pre className="text-sm bg-white border border-gray-300 rounded-md p-4 overflow-x-auto font-mono">
{`from nacl.signing import VerifyKey
import base64

public_key_b64 = "MCowBQYDK2VwAyEAbKp2pg4wmzE5Kqo9tEwv7JJjxQyT2cBmwiLLHp4cSac="
verify_key = VerifyKey(base64.b64decode(public_key_b64))

payload = b"...canonical payload bytes..."
signature = base64.b64decode("...signature...")

verify_key.verify(payload, signature)
`}
        </pre>

        <p>
          A successful verification confirms that the payload was signed by
          Certif-Scope and has not been altered.
        </p>

        {/* TERMUX */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Notes on Termux and mobile environments
        </h3>

        <p>
          The same verification steps apply in Termux on Android:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Transfer the PDF file to the device</li>
          <li>Install required packages (openssl, python, libsodium)</li>
          <li>Run the same hash and signature checks</li>
        </ul>

        <p>
          Verification results are identical across platforms.
        </p>

        {/* FINAL */}
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Verification outcome
        </h3>

        <p>
          A fully verified attestation confirms:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>The document was issued by Certif-Scope</li>
          <li>The content has not been modified</li>
          <li>The attestation identifier is authentic</li>
          <li>The verification is independent and offline</li>
        </ul>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            No additional trust assumptions or online services are required to
            complete verification.
          </p>
        </div>
      </div>
    </section>
  );
          }
