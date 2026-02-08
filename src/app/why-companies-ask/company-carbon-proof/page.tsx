// PATH: src/app/why-companies-ask/company-carbon-proof/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — COMPANY CARBON PROOF
====================================================== */

export const metadata: Metadata = {
  title:
    "Company carbon proof — Minimal CO₂e proof format — Certif-Scope",
  description:
    "Understand what a company carbon proof is (minimal CO₂e proof), when it is requested, and how to provide a standardized, indicative and verifiable document without claiming an audit.",
  alternates: {
    canonical: "https://www.certif-scope.com/why-companies-ask/company-carbon-proof",
    languages: {
      en: "https://www.certif-scope.com/why-companies-ask/company-carbon-proof",
      fr: "https://www.certif-scope.com/fr/why-companies-ask/preuve-carbone-entreprise",
    },
  },
  openGraph: {
    title: "Company carbon proof — Minimal CO₂e proof format",
    description:
      "Why “carbon proof” is requested and how to respond with an indicative, standardized and verifiable document (screening).",
    url: "https://www.certif-scope.com/why-companies-ask/company-carbon-proof",
    siteName: "Certif-Scope",
    type: "website",
    locale: "en_US",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function CompanyCarbonProofEN() {
  return (
    <section
      id="company-carbon-proof"
      data-section="company-carbon-proof"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (GUIDE) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Company carbon proof",
            url: "https://www.certif-scope.com/why-companies-ask/company-carbon-proof",
            description:
              "Guide: understand the notion of company carbon proof (minimal CO₂e proof) and how to provide a standardized, indicative and verifiable document.",
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
                  name: "Company carbon proof",
                  item: "https://www.certif-scope.com/why-companies-ask/company-carbon-proof",
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
          Understanding CO₂e requests — “Proof” overview
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Company carbon proof: what it means (and what to provide)
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          A “carbon proof” is not necessarily an audit or a full carbon footprint.
          In many workflows (procurement, banking, insurance), it means a minimal proof:
          a readable, archivable document stating an indicative CO₂e result, a declared
          method, and explicit limits.
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
          {/* 1 */}
          <section id="definition">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              1. Definition: what “carbon proof” means in practice
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              In B2B exchanges, “carbon proof” is often a non-standard expression.
              It generally refers to a document that allows a third party to confirm
              that a CO₂e indicator exists, that it was produced under a stated method,
              and that it can be archived in a file.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Two proof levels that must not be confused
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>
                  <strong>Minimal proof (screening):</strong> indicative CO₂e indicator + method + limits.
                </li>
                <li>
                  <strong>Strong proof (audit/assurance):</strong> detailed inventory + external verification.
                </li>
              </ul>
            </div>
          </section>

          {/* 2 */}
          <section id="why-requested">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2. Why carbon proof is requested
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The request rarely targets “perfect accuracy”. It targets the ability
              to provide a reusable document for workflows: supplier qualification,
              credit file documentation, insurer analysis, or ESG questionnaires.
              Without minimal proof, organizations end up with informal statements
              that are hard to compare.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                  Procurement
                </p>
                <p className="font-semibold text-[#0B3A63] mb-2">
                  Supplier screening
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Compare candidates, qualify suppliers, archive minimal proof.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                  Banking
                </p>
                <p className="font-semibold text-[#0B3A63] mb-2">
                  File / risk view
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Informational ESG indicator to document an internal decision.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                  Insurance
                </p>
                <p className="font-semibold text-[#0B3A63] mb-2">
                  Exposure overview
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Sector exposure and environmental profile consistency checks.
                </p>
              </div>
            </div>
          </section>

          {/* 3 */}
          <section id="what-to-provide">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3. What to provide: the minimal content of an acceptable proof
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              To be useful, carbon proof must be readable and comparable.
              It must also be properly scoped: explicitly state it is an indicative
              estimate for screening, without claiming an audit or regulatory reporting.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                “Minimal proof” checklist (screening)
              </h3>

              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>simple entity identification (name)</li>
                <li>coverage year + issue date</li>
                <li>aggregated CO₂e result (tCO₂e) and unit</li>
                <li>declared method (e.g., spend-based) + factor set/version</li>
                <li>stated scope (what is included/excluded)</li>
                <li>visible clauses: indicative, not audited, not CSRD/ESRS</li>
                <li>traceability: unique ID, verification link/QR</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mt-4">
                This checklist does not replace a full inventory, but it matches
                the most frequent operational needs.
              </p>
            </div>
          </section>

          {/* 4 */}
          <section id="verification">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4. What makes proof “credible”: traceability and verification
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              For screening, credibility is not an audit. It is the ability to
              provide a standard, stable, and checkable document. Reviewers want
              to verify integrity and origin without needing to contact someone.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Simple trust signals (screening)
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>unique attestation identifier</li>
                <li>public verification link</li>
                <li>date and format version</li>
                <li>explicit scope and limitation statements</li>
              </ul>

              <div className="mt-5">
                <Link
                  href="/verify"
                  className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
                >
                  Verify an attestation
                </Link>
              </div>
            </div>
          </section>

          {/* 5 */}
          <section id="when-not-enough">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5. When minimal proof is not enough (cases to scope)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Minimal proof is useful for screening. It is not appropriate when the
              request explicitly requires a standard, external verification, or a
              detailed inventory. In that case, ask for the exact framework
              (standard, scope boundary, scopes, assurance level).
            </p>

            <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">
                Examples that require refusing or scoping
              </h3>
              <ul className="list-disc ml-6 text-red-900/90 space-y-2">
                <li>“carbon audit” / “external assurance”</li>
                <li>“ISO 14064-1 mandatory”</li>
                <li>official CSRD/ESRS reporting</li>
                <li>requirement for a full verified scopes 1–2–3 inventory</li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Useful links
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link className="underline" href="/product/compliance">
                    Compliance & scope
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/product/methodology">
                    Methodology (spend-based)
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/why-companies-ask/supplier-carbon-attestation">
                    Supplier case
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/why-companies-ask/carbon-attestation-tender">
                    Tender case
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/why-companies-ask/co2-requirements-banks-insurers">
                    Banks & insurers case
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* 6 */}
          <section id="faq">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              6. Frequently asked questions (carbon proof)
            </h2>

            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Does “carbon proof” mean an audited carbon footprint?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Not automatically. The term is often used generically. The first
                  step is to identify the expected level: screening (minimal proof)
                  or audit (strong proof). In many cases, it is screening.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Is it acceptable to provide an estimate?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, when the request targets an informational indicator and the
                  document clearly states its limits: indicative estimate, not audited,
                  not CSRD/ESRS.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  What most improves acceptability?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A standard format, a declared method, explicit limits, and simple
                  verification (ID + link/QR). That is what makes the document usable
                  in institutional workflows.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="pt-2">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Provide minimal carbon proof that is clear and verifiable
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                When someone asks for “carbon proof”, the need is often a screening
                document: indicative, standardized, archivable and checkable.
                Certif-Scope produces a properly scoped, traceable and verifiable
                CO₂e attestation.
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
              <nav aria-label="Company carbon proof contents">
                <ul className="space-y-2 text-sm">
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#definition">
                      1. Definition
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#why-requested">
                      2. Why it is requested
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#what-to-provide">
                      3. Minimal content
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#verification">
                      4. Traceability & verification
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#when-not-enough">
                      5. When it is not enough
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
                Scope reminder
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Minimal carbon proof is useful for screening (procurement, banking,
                insurance) when presented as an indicative estimate with explicit
                limits. It does not replace an audit or a full emissions inventory.
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
