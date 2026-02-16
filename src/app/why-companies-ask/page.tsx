import type { Metadata } from "next";

/* ======================================================
   SEO METADATA — WHY COMPANIES ASK
====================================================== */

export const metadata: Metadata = {
  title: "Why companies ask for a CO₂e attestation — Certif-Scope",
  description:
    "Understand why procurement teams, banks and insurers request standardized CO₂e attestations from suppliers: risk screening, onboarding, and acceptable use boundaries.",
  alternates: {
    canonical: "https://www.certif-scope.com/why-companies-ask",
    languages: {
      en: "https://www.certif-scope.com/why-companies-ask",
      fr: "https://www.certif-scope.com/fr/why-companies-ask",
      de: "https://www.certif-scope.com/de/why-companies-ask",
    },
  },
  openGraph: {
    title: "Why companies ask for a CO₂e attestation — Certif-Scope",
    description:
      "Institutional reasons behind standardized CO₂e attestation requests, and what these documents represent — and do not represent.",
    url: "https://www.certif-scope.com/why-companies-ask",
    siteName: "Certif-Scope",
    type: "website",
    locale: "en_US",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function WhyCompaniesAskPage() {
  return (
    <section
      id="why-companies-ask"
      data-section="why-companies-ask"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (STRICT, NON-PRODUCT) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Why companies ask for a CO₂e attestation",
            url: "https://www.certif-scope.com/why-companies-ask",
            description:
              "Institutional explanation of why organizations request standardized CO₂e attestations from suppliers, and how these documents are used.",
            isPartOf: {
              "@type": "WebSite",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
            },
          }),
        }}
      />

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          CO₂e attestation — Supplier requirement
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Why companies ask for it
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Procurement teams, banks, insurers and public institutions increasingly
          request a standardized CO₂e attestation from their suppliers. This page
          explains the institutional reasons behind this request, and what this
          attestation truly represents — and what it does not.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Supplier risk classification
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Large organizations must classify suppliers based on environmental
            exposure as part of procurement governance and ESG policies, including
            responsible purchasing frameworks such as ISO 20400.
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>ESG supplier screening</li>
            <li>environmental indicators required in tenders</li>
            <li>alignment with internal procurement policies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Regulatory pressure on financial institutions
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Banks and insurers are expected to integrate environmental risks into
            their analysis processes under frameworks such as the EU Taxonomy,
            EBA guidelines, or Solvency II. A standardized CO₂e attestation helps
            document exposure without requiring full CSRD or ESRS reporting.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Due diligence and supplier onboarding
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Many organizations request a CO₂e estimate as part of supplier due
            diligence. The attestation provides a structured and verifiable
            document compatible with institutional onboarding patterns.
          </p>
          <p className="text-gray-700 leading-relaxed">
            It enables SMEs to respond to requirements that previously implied
            long processes or costly audits.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Accessibility for non-technical suppliers
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Most SMEs cannot produce CSRD/ESRS reporting or a full greenhouse gas
            inventory. The attestation provides an institutional-grade indicator
            derived from annual spending data only, without requiring technical
            expertise.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Faster supplier approval cycles
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Supplier approval is often delayed by missing or inconsistent
            environmental information. A standardized CO₂e document reduces
            review time and supports onboarding decisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Immediate and independent verification
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>unique attestation identifier</li>
            <li>integrity guarantees embedded in the document</li>
            <li>permanent verification URL</li>
            <li>QR code usable in institutional workflows</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Reviewers can verify the authenticity in seconds and confirm that the
            document has not been altered.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Cross-border usability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The attestation format is aligned with expectations from procurement
            teams and financial institutions across multiple European
            jurisdictions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            8. What this attestation is not
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>it is not a certification</li>
            <li>it is not an audit</li>
            <li>it is not an assurance engagement</li>
            <li>it is not a regulatory carbon report</li>
            <li>it is not CSRD or ESRS reporting</li>
            <li>it is not a Scope 1, Scope 2 or Scope 3 inventory</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            9. Legal scope and intended use
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This attestation is indicative only. It is not an audit, not a
            certification, not an assurance engagement, and not a legally binding
            carbon footprint.
          </p>
        </section>
      </div>
    </section>
  );
               }
