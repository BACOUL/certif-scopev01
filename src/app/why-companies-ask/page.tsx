import type { Metadata } from "next";

/* ======================================================
   SEO METADATA — WHY COMPANIES ASK
====================================================== */

export const metadata: Metadata = {
  title: "Why Companies Ask for a CO₂e Attestation — Certif-Scope",
  description:
    "Institutional reasons why procurement teams, banks and insurers require CO₂e attestations from suppliers, including risk screening, onboarding and scope limits.",
  alternates: {
    canonical: "https://www.certif-scope.com/why-companies-ask",
  },
  openGraph: {
    title: "Why Companies Ask for a CO₂e Attestation — Certif-Scope",
    description:
      "Understand why organizations require standardized CO₂e attestations from suppliers and what these documents are intended — and not intended — to represent.",
    url: "https://www.certif-scope.com/why-companies-ask",
    siteName: "Certif-Scope",
    type: "website",
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
            name: "Why Companies Ask for a CO₂e Attestation",
            url: "https://www.certif-scope.com/why-companies-ask",
            description:
              "Institutional rationale explaining why organizations require CO₂e attestations from suppliers and how they are used.",
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

      {/* CANONICAL PAGE HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          CO₂e Attestation — Supplier Requirement
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Why Companies Ask for It
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Procurement teams, banks, insurers and public institutions increasingly
          require a standardized CO₂e attestation from their suppliers. This page
          explains the institutional rationale behind this request, as well as
          what the attestation represents — and what it does not.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-12">

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Procurement Risk Classification
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Large organizations must classify suppliers according to environmental
            exposure as part of procurement governance and ESG risk frameworks,
            including sustainable procurement standards such as ISO 20400.
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>supplier ESG risk screening</li>
            <li>mandatory environmental indicators in tenders</li>
            <li>alignment with internal procurement policies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Financial Institutions and Regulatory Pressure
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Banks and insurers are subject to increasing environmental risk
            assessment obligations under frameworks such as the EU Taxonomy,
            EBA Guidelines and Solvency II. A standardized CO₂e attestation
            enables documentation of supplier exposure without requiring full
            CSRD or ESRS inventories.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Due Diligence and Vendor Onboarding
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Many organizations require a CO₂e estimate as part of mandatory
            supplier due diligence. The attestation provides a structured and
            verifiable document aligned with institutional onboarding templates.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This allows small and mid-sized suppliers to meet requirements that
            previously required consultants or complex audits.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Accessibility for Non-Technical Suppliers
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Most SMEs cannot produce CSRD or ESRS reports, nor detailed greenhouse
            gas inventories. The attestation delivers an institutional-grade
            indicator using only annual spending data, without technical expertise.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Faster Supplier Approval Cycles
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Supplier approval is often delayed due to missing or inconsistent
            environmental information. A standardized CO₂e document significantly
            reduces review time and accelerates onboarding decisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Immediate and Independent Verification
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>a unique attestation identifier</li>
            <li>embedded document integrity safeguards</li>
            <li>a permanent verification URL</li>
            <li>a QR code usable in institutional systems</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Reviewers can verify authenticity within seconds and confirm that
            the document has not been altered.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Cross-Border Acceptance
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The attestation format is aligned with procurement expectations
            across multiple European jurisdictions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            8. What This Attestation Is Not
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>not a certification</li>
            <li>not an audit</li>
            <li>not an assurance engagement</li>
            <li>not a regulatory carbon report</li>
            <li>not CSRD or ESRS reporting</li>
            <li>not a Scope 1, Scope 2 or Scope 3 inventory</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            9. Legal Scope and Intended Use
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This attestation is indicative only. It does not constitute an audit,
            certification, assurance engagement or legally binding footprint.
          </p>
        </section>

      </div>
    </section>
  );
      }
