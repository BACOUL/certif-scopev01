// PATH: src/app/why-companies-ask/supplier-carbon-attestation/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — SUPPLIER CARBON ATTESTATION
====================================================== */

export const metadata: Metadata = {
  title:
    "Supplier carbon attestation — What is actually requested — Certif-Scope",
  description:
    "Understand when a customer may request a supplier CO₂e attestation, what is expected in practice (procurement screening), and how to respond with an indicative, standardized and verifiable document.",
  alternates: {
    canonical:
      "https://www.certif-scope.com/why-companies-ask/supplier-carbon-attestation",
    languages: {
      en: "https://www.certif-scope.com/why-companies-ask/supplier-carbon-attestation",
      fr: "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-fournisseur",
    },
  },
  openGraph: {
    title: "Supplier carbon attestation — What is actually requested",
    description:
      "Why procurement teams request a supplier CO₂e attestation, what is acceptable for screening, and what is not (audit, CSRD/ESRS).",
    url: "https://www.certif-scope.com/why-companies-ask/supplier-carbon-attestation",
    siteName: "Certif-Scope",
    type: "website",
    locale: "en_US",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function SupplierCarbonAttestationEN() {
  return (
    <section
      id="supplier-carbon-attestation"
      data-section="supplier-carbon-attestation"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (GUIDE) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Supplier carbon attestation",
            url: "https://www.certif-scope.com/why-companies-ask/supplier-carbon-attestation",
            description:
              "Practical guide: why procurement teams request a supplier CO₂e attestation, what is acceptable for screening, and how to respond with a standardized indicative document.",
            isPartOf: {
              "@type": "WebSite",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Why companies ask",
                  item: "https://www.certif-scope.com/why-companies-ask",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Supplier carbon attestation",
                  item: "https://www.certif-scope.com/why-companies-ask/supplier-carbon-attestation",
                },
              ],
            },
          }),
        }}
      />

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* PAGE HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Understanding CO₂e requests — Case #1
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Supplier carbon attestation: what is actually requested
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          In most situations, a “supplier carbon attestation” is not a legal
          obligation and not an audit. It is an operational request from
          procurement teams: obtain a simple, consistent and reusable CO₂e
          indicator for ESG screening, supplier onboarding and tenders.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/why-companies-ask"
            className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
          >
            Back to the guide
          </Link>

          <Link
            href="/product"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            View the product
          </Link>

          <Link
            href="/verify"
            className="inline-block text-sm px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Verify an attestation
          </Link>
        </div>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* MAIN */}
        <div className="lg:col-span-8 space-y-14">
          {/* 1. WHY */}
          <section id="why">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              1. Why buyers request a supplier CO₂e attestation
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Organizations facing transparency obligations (or market
              expectations) need environmental information across their value
              chain. In practice, this becomes supplier questionnaires,
              responsible procurement criteria, and simple “proof” documents to
              support internal files.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                What the buyer wants (very concretely)
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>a CO₂e indicator available quickly</li>
                <li>a documentable and shareable format (standard PDF)</li>
                <li>an explicit method (even if indicative) and stable</li>
                <li>a document reusable across multiple requests</li>
                <li>minimum traceability (ID, date, version)</li>
              </ul>
            </div>
          </section>

          {/* 2. WHAT IS ACCEPTABLE */}
          <section id="acceptable">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2. When it is acceptable (and when it is not)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              A supplier CO₂e attestation is generally acceptable when used for{" "}
              <strong>screening</strong>, <strong>onboarding</strong> or{" "}
              <strong>internal comparison</strong> (procurement decision). It is
              not acceptable when used as a substitute for regulatory reporting
              or certification.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Acceptable (most common)
                </h3>
                <ul className="list-disc ml-6 text-green-900/90 space-y-2">
                  <li>supplier ESG / CSR questionnaires</li>
                  <li>pre-qualification before contracting</li>
                  <li>tender (informative “carbon” criterion)</li>
                  <li>internal responsible procurement reporting</li>
                  <li>request for “a CO₂e indicator, even estimated”</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  Not acceptable (must be scoped or refused)
                </h3>
                <ul className="list-disc ml-6 text-red-900/90 space-y-2">
                  <li>request for audit, certification, or external assurance</li>
                  <li>explicit “ISO 14064-1” / audited footprint requirement</li>
                  <li>official CSRD / ESRS reporting</li>
                  <li>marketing claims implying compliance</li>
                  <li>full, verified Scopes 1–2 (and beyond)</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mt-6">
              If a contracting party requires an audit or a specific standard,
              the right move is to clarify the expected scope (screening vs
              audited reporting) before producing any document.
            </p>
          </section>

          {/* 3. WHAT TO PROVIDE */}
          <section id="what-to-provide">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3. What your customer expects as “proof” (format and content)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Buyers prefer a document that looks like operational evidence:
              dated, identifiable, methodologically explicit, and easy to
              archive. The value is not maximum scientific precision; it is{" "}
              <strong>consistency</strong> and <strong>reusability</strong>.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Minimal checklist (screening-ready document)
              </h3>

              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>organization name (simple identification)</li>
                <li>coverage year and issue date</li>
                <li>aggregated CO₂e result (tCO₂e)</li>
                <li>declared method (e.g., spend-based)</li>
                <li>factor set / factor version</li>
                <li>unique ID + verification link/QR</li>
                <li>visible clauses: indicative, not audited, not CSRD/ESRS</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mt-4">
                A document with these elements typically satisfies procurement
                screening and internal file requirements, without claiming
                certification.
              </p>
            </div>
          </section>

          {/* 4. HOW TO ANSWER */}
          <section id="how-to-answer">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4. How to respond safely (wording and scoping)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Legal safety and credibility rely on one thing:{" "}
              <strong>state clearly what the document is</strong> and{" "}
              <strong>what it is not</strong>. The goal is to avoid third parties
              interpreting the attestation as an audit or regulatory compliance.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Recommended wording
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Use:</strong> “indicative CO₂e attestation”, “spend-based estimate”,
                  “ESG screening document”, “procurement / onboarding use”.
                </li>
                <li>
                  <strong>Avoid:</strong> “certified”, “CSRD/ESRS compliant”, “carbon audit”,
                  “regulatory carbon inventory”.
                </li>
              </ul>

              <div className="mt-5 border-t border-gray-200 pt-5">
                <p className="text-sm text-gray-600 leading-relaxed">
                  To scope an over-ambitious request (audit, compliance), the
                  most effective answer is: “We can provide a standardized,
                  indicative estimate for procurement screening. If you require
                  an audit or a specific standard, please specify the expected
                  framework and scope.”
                </p>
              </div>
            </div>
          </section>

          {/* 5. WHY CERTIF-SCOPE */}
          <section id="why-certif-scope">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5. Why a standardized (and verifiable) document actually helps
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              The problem with supplier CO₂e requests is not missing data. It is
              the lack of a simple, stable, reusable format. Standardization
              reduces:
            </p>

            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>time spent answering each questionnaire</li>
              <li>misunderstandings about scope and method</li>
              <li>back-and-forth with procurement teams</li>
              <li>risk of “audit / compliance” misinterpretation</li>
            </ul>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Useful links
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link className="underline" href="/product">
                    Product: standardized attestation
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/product/compliance">
                    Compliance & scope (what it is not)
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/product/methodology">
                    Methodology (spend-based)
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/verify">
                    Verify an attestation (public)
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* 6. QUICK FAQ */}
          <section id="faq">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              6. Frequently asked questions (procurement & suppliers)
            </h2>

            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Can a buyer require an audited carbon footprint?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, contractually a buyer can impose requirements. In
                  practice, most requests target a simple indicator for
                  screening, especially early in the process. If an audited
                  requirement is stated, ask for the exact standard and scope.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Does “carbon attestation” mean “CSRD/ESRS”?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  No. CSRD/ESRS applies to companies under the reporting
                  obligation. Supplier requests are most often value-chain data
                  collection. An indicative attestation is relevant only as an
                  informational document (screening), not as regulatory
                  reporting.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  What if they ask for “Scope 1 / 2 / 3”?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Clarify whether the buyer wants an indicative screening
                  indicator or audited publication. If the request is for
                  screening, provide a standardized document stating method and
                  limitations. If a full inventory is required, an indicative
                  attestation is not the right tool.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="pt-2">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Respond fast, without ambiguity, with a standard document
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                If a customer asks for a “supplier carbon attestation”, the goal
                is usually a procurement screening indicator. Certif-Scope
                produces an indicative, structured, traceable and verifiable
                attestation.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/pricing"
                  className="inline-block text-sm px-5 py-2.5 rounded-md bg-white text-[#0B3A63] hover:bg-gray-100 transition-colors font-semibold"
                >
                  View pricing
                </Link>
                <Link
                  href="/product"
                  className="inline-block text-sm px-5 py-2.5 rounded-md border border-white/40 text-white hover:bg-white/10 transition-colors"
                >
                  Understand the product
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/why-companies-ask"
                className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
              >
                Back to the guide
              </Link>
            </div>
          </section>
        </div>

        {/* SIDEBAR */}
        <aside className="lg:col-span-4">
          <div className="sticky top-6 space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-[#64748B] mb-3">
                Table of contents
              </p>
              <nav aria-label="Supplier attestation contents">
                <ul className="space-y-2 text-sm">
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#why">
                      1. Why it is requested
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#acceptable">
                      2. When it is acceptable
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#what-to-provide"
                    >
                      3. What buyers expect
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#how-to-answer"
                    >
                      4. How to respond
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#why-certif-scope"
                    >
                      5. Why standardize
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#faq">
                      6. FAQ
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#cta">
                      Next step
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Scope reminder (important)
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                A supplier CO₂e attestation is acceptable for screening and
                procurement decisions when presented as an indicative estimate
                with explicit limitations. It does not replace an audit,
                certification, or regulatory reporting.
              </p>

              <div className="mt-5">
                <Link
                  href="/product/compliance"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Compliance & scope
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
            }
