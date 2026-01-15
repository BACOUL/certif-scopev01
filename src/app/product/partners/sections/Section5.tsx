"use client";

export default function Section5() {
  return (
    <section
      id="s5"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
      data-section="partners-s5"
    >

      {/* HEADER */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-[#0B3A63]/5 pointer-events-none" />

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
          data-i18n="partners.s5.title"
        >
          Token System & Security Model
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s5.p1"
        >
          Large organisations receive secure API tokens that act as prepaid capacity to issue
          CO₂e attestations for their SME suppliers. Tokens are not linked to user accounts, do not
          track identities, and do not store any supplier data. They serve a single purpose: authorise
          attestation generation within a controlled volume.
        </p>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s5.p2"
        >
          This model ensures a clear separation of responsibilities: the corporation triggers the
          process, the SME inputs its own financial data, and Certif-Scope returns a deterministic,
          verifiable document without logging sensitive information or maintaining persistent
          databases.
        </p>
      </div>

      {/* CONTENT BLOCKS */}
      <div className="mt-14 space-y-14">

        {/* BLOCK 1 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            1. Token Definition
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Each token represents the right to generate one attestation. Tokens do not expire and are
            not tied to specific SMEs. A partner can pre-purchase volume packs and consume them
            over time as suppliers complete the attestation workflow.
          </p>
        </div>

        {/* BLOCK 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            2. Prepaid, Consumption-Based Model
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Tokens are deducted only when a PDF is successfully generated. Failed or incomplete
            submissions do not consume tokens. This makes the model predictable for high-volume
            procurement ecosystems and avoids subscription lock-in.
          </p>
        </div>

        {/* BLOCK 3 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            3. Stateless Token Verification
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The API does not maintain a backend database. The token is cryptographically encoded with
            the validity parameters (quantity, issuer, batch ID). The server only verifies the
            signature, never storing usage logs or supplier identifiers.
          </p>
        </div>

        {/* BLOCK 4 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            4. Cryptographic Validation
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Each token includes a signed payload using asymmetric keys (public/private). Partners
            receive only the public portion for verification. Certif-Scope never needs to store token
            metadata: validity is confirmed through signature integrity.
          </p>
        </div>

        {/* BLOCK 5 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            5. No Supplier Tracking
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Tokens are never associated with SMEs. Suppliers remain anonymous to Certif-Scope.
            Only the partner knows which SME used a token, ensuring GDPR minimal processing and strict
            role separation between requester, issuer and verifier.
          </p>
        </div>

        {/* BLOCK 6 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            6. Loss and Recovery of Tokens
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Tokens are provided in digitally signed batch files. If a partner loses access, the batch
            can be regenerated on request by reissuing a new signed series and invalidating the old
            ones. No operational data is ever lost since no usage history is stored.
          </p>
        </div>

        {/* BLOCK 7 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            7. Security Scope & Boundaries
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The token system is not an authentication layer, identity registry or access-control
            mechanism. It only validates prepaid capacity. Supplier data never transits through the
            backend in identifiable form, and no persistent logs are created.
          </p>
        </div>

      </div>

      {/* COMPLIANCE BOX */}
      <div className="mt-16 bg-[#0B3A63] text-white p-10 rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20" />

        <h4 className="text-2xl font-bold relative z-10">
          Compliance Alignment
        </h4>

        <p className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10">
          The token architecture respects EU procurement expectations by ensuring: no
          supplier-identifiable data is collected; verification remains offline; cryptographic
          signatures provide integrity; and tokens carry no hidden logic beyond prepaid issuance
          rights. No Scope 1/2/3 reporting and no CSRD/ESRS disclosures are generated.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          data-i18n="partners.s5.return"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
        }
