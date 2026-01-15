"use client";

export default function Section4() {
  return (
    <section
      id="s4"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
      data-section="partners-s4"
    >
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-[#0B3A63]/5 pointer-events-none" />

        <h2
          className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"
          data-i18n="partners.s4.title"
        >
          API Integration Model
        </h2>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s4.p1"
        >
          The integration model enables large organisations to embed the CO₂e attestation process
          directly into supplier onboarding portals, procurement dashboards or third-party
          platforms. The API is stateless, deterministic and requires no storage, making it
          suitable for high-volume automation without operational risk.
        </p>

        <p
          className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10"
          data-i18n="partners.s4.p2"
        >
          The process consists of one single client-side computation step and one request to the API
          for attestation issuance. The final document includes a cryptographically verifiable hash
          that can be recomputed offline, eliminating backend lookups or long-term retention of
          sensitive supplier data.
        </p>
      </div>

      <div className="mt-14 space-y-14">

        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200"
          data-i18n="partners.s4.block1"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            1. Stateless Architecture
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The API does not store, retain or log supplier numerical inputs. Only the final
            attestation hash and a deterministic ID can optionally be registered for external
            verification. This ensures GDPR minimalism and removes any dependency on long-term
            infrastructure.
          </p>
        </div>

        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm"
          data-i18n="partners.s4.block2"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            2. Standard Input Schema
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The input fields follow a fixed structure: annual expenses (€) per category, optional
            company metadata (name, sector, country), and the partner’s token. No physical activity
            data is required and no operational KPIs are collected.
          </p>
        </div>

        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200"
          data-i18n="partners.s4.block3"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            3. Deterministic Hash Generation
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Before the request is sent, the supplier’s browser generates a SHA-256 canonicalized JSON
            hash of the attestation content. This hash becomes the verification ID. Partners can
            recompute it offline from the PDF to confirm authenticity without relying on any
            database.
          </p>
        </div>

        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm"
          data-i18n="partners.s4.block4"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            4. Single API Call
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The browser submits the structured data along with the precomputed hash. The API validates
            the format, performs the spend-based calculation and returns a PDF attestation instantly.
            No account creation or authentication is required for SMEs.
          </p>
        </div>

        <div
          className="p-8 bg-white rounded-xl shadow-md border border-gray-200"
          data-i18n="partners.s4.block5"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            5. Offline Verification
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The verification workflow is fully independent: organisations compare the PDF content
            with the expected canonical JSON and recompute the SHA-256 hash locally. If it matches
            the ID embedded in the document, the attestation is confirmed authentic.
          </p>
        </div>

        <div
          className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm"
          data-i18n="partners.s4.block6"
        >
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            6. Integration Use Cases
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The API can be embedded into supplier portals, ERP modules, procurement screening flows,
            onboarding checklists, banking assessment interfaces or insurance underwriting systems,
            enabling automated, standardized requests from SMEs.
          </p>
        </div>
      </div>

      <div
        className="mt-16 bg-[#0B3A63] text-white p-10 rounded-xl shadow-md relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20" />

        <h4 className="text-2xl font-bold relative z-10">
          Compliance Alignment
        </h4>

        <p className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10">
          The integration complies with procurement, ESG and financial-sector expectations by
          providing standardized indicators aligned with spend-based GHG Protocol Category 1
          principles. No Scope 1/2/3 inventory, no audited reporting, and no CSRD/ESRS disclosures are
          generated, ensuring the tool remains within its appropriate methodological boundary.
        </p>
      </div>

      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          data-i18n="partners.s4.return"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
          }
