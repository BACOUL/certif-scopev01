// PATH: src/app/why-companies-ask/co2-requirements-banks-insurers/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — CO₂e REQUIREMENTS (BANKS & INSURERS)
====================================================== */

export const metadata: Metadata = {
  title:
    "CO₂e requirements for banks & insurers — Why it is requested — Certif-Scope",
  description:
    "Understand why banks and insurers request a CO₂e indicator, what is expected in practice (ESG/risk screening), and when an indicative attestation is acceptable.",
  alternates: {
    canonical:
      "https://www.certif-scope.com/why-companies-ask/co2-requirements-banks-insurers",
    languages: {
      en: "https://www.certif-scope.com/why-companies-ask/co2-requirements-banks-insurers",
      fr: "https://www.certif-scope.com/fr/why-companies-ask/exigences-co2-banques-assurances",
    },
  },
  openGraph: {
    title: "CO₂e requirements for banks & insurers — Why it is requested",
    description:
      "Why financial actors request a CO₂e indicator and how to respond with an indicative, standardized and properly scoped document.",
    url: "https://www.certif-scope.com/why-companies-ask/co2-requirements-banks-insurers",
    siteName: "Certif-Scope",
    type: "website",
    locale: "en_US",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function FinanceCO2RequirementsEN() {
  return (
    <section
      id="finance-co2-requirements"
      data-section="finance-co2-requirements"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (GUIDE) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "CO₂e requirements for banks & insurers",
            url: "https://www.certif-scope.com/why-companies-ask/co2-requirements-banks-insurers",
            description:
              "Practical guide: why banks and insurers request a CO₂e indicator (ESG/risk screening) and when an indicative attestation is acceptable.",
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
                  name: "CO₂e requirements for banks & insurers",
                  item:
                    "https://www.certif-scope.com/why-companies-ask/co2-requirements-banks-insurers",
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
          Understanding CO₂e requests — Case #3
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          CO₂e requirements for banks & insurers: why it is requested
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Banks and insurers increasingly request environmental information for
          their internal analyses: risk profiling, ESG consistency, and decision
          documentation. In most cases, this is an informational use (screening)
          and not a carbon audit.
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
          <section id="why">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              1. Why financial actors request a CO₂e indicator
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Financial institutions assess multiple risks: business continuity,
              future costs, sector exposure, sensitivity to public policies, and
              market expectations. CO₂e is used as one indicator among others to
              structure an ESG analysis and document a file (credit, insurance,
              commercial relationship).
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                In practice, the question behind the request
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>is the activity exposed to transition risks?</li>
                <li>is there a minimum level of environmental tracking?</li>
                <li>can we document an internal decision consistently?</li>
              </ul>
            </div>
          </section>

          {/* 2 */}
          <section id="what-it-is-not">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2. What the request is not (in most cases)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              A “CO₂e” request from a bank or insurer is often perceived as a
              regulatory requirement. In reality, it mainly targets an
              indicator for internal ESG policies and scoring grids. This is
              not CSRD/ESRS reporting and not an ISO-audited inventory.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Most common use
                </h3>
                <ul className="list-disc ml-6 text-green-900/90 space-y-2">
                  <li>ESG screening / onboarding</li>
                  <li>documentation for a credit file</li>
                  <li>internal risk analysis</li>
                  <li>standard questionnaire</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  Must be scoped / refused
                </h3>
                <ul className="list-disc ml-6 text-red-900/90 space-y-2">
                  <li>audit or external assurance requirement</li>
                  <li>explicit ISO 14064-1 / audited GHG inventory</li>
                  <li>official CSRD/ESRS reporting</li>
                  <li>request for complete, verified scopes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3 */}
          <section id="expected">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3. What is expected: a readable and reusable document
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              In banking/insurance contexts, teams want a document that is fast
              to read and easy to archive. Perceived quality comes from a
              standard format, an explicit method, and a clearly stated scope.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Elements that increase acceptability
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>aggregated CO₂e result (tCO₂e) + coverage year</li>
                <li>declared method (spend-based) + factor version</li>
                <li>visible clauses: indicative, not audited, not CSRD/ESRS</li>
                <li>unique attestation ID and issue date</li>
                <li>verification link/QR for independent checks</li>
              </ul>
            </div>
          </section>

          {/* 4 */}
          <section id="how-to-answer">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4. How to respond without creating ambiguity
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The best approach is to respond with a properly scoped document:
              clearly state it is an indicative estimate, specify the scope, and
              provide traceability elements. This avoids “audit / compliance”
              interpretations while meeting the operational need.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Recommended wording
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Use:</strong> “indicative CO₂e indicator”, “spend-based
                  estimate”, “informational use / ESG screening”.
                </li>
                <li>
                  <strong>Avoid:</strong> “certified”, “audit”, “CSRD/ESRS compliant”,
                  “regulatory inventory”.
                </li>
              </ul>

              <div className="mt-5 border-t border-gray-200 pt-5">
                <p className="text-sm text-gray-600 leading-relaxed">
                  If the request becomes “audit” or “ISO standard”, ask for the
                  expected framework (standard, external assurance, scopes)
                  before producing any document. An indicative attestation is
                  not the right tool for a full inventory.
                </p>
              </div>
            </div>
          </section>

          {/* 5 */}
          <section id="why-standard">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5. Why standardize: lower friction and cost
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Without a standard, finance/insurance ESG requests create
              back-and-forth: heterogeneous formats, unclear scope, archiving
              issues. A standardized document reduces friction and speeds up
              internal processing, without creating a compliance promise.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
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

          {/* 6 */}
          <section id="faq">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              6. Frequently asked questions (banks & insurers)
            </h2>

            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Is it legally mandatory for an SME?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Not as a direct reporting obligation. The request is most
                  often part of an internal ESG policy (screening) or
                  value-chain data collection. If regulatory reporting is
                  required, the specification should state it explicitly.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Is an indicative attestation accepted?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, when the need is an informational indicator for an
                  internal file and the document explicitly states its limits:
                  estimated, not audited, not CSRD/ESRS.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  What if they ask for “ISO 14064-1”?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  That is a different framework. Ask for the exact scope
                  (scopes, external assurance requirements, organizational
                  boundary) and state that an indicative attestation is not an
                  ISO inventory. In that case, a dedicated process is needed.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="pt-2">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Answer bank/insurer ESG requests without overbuilding
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                If your bank or insurer requests a CO₂e indicator, the need is
                often a readable, archivable document for ESG screening.
                Certif-Scope produces an indicative, structured, traceable and
                verifiable attestation.
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
              <nav aria-label="Banks & insurers contents">
                <ul className="space-y-2 text-sm">
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#why">
                      1. Why it is requested
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#what-it-is-not"
                    >
                      2. What it is not
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#expected">
                      3. What is expected
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
                      href="#why-standard"
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
                Scope reminder
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                In most cases, bank/insurer CO₂e requests are informational
                (ESG screening). An indicative attestation is acceptable if it
                clearly states its limits. It does not replace an audit,
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
