// PATH: src/app/why-companies-ask/carbon-attestation-tender/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — CARBON ATTESTATION FOR TENDERS
====================================================== */

export const metadata: Metadata = {
  title: "Carbon attestation for tenders — What is actually requested — Certif-Scope",
  description:
    "Understand why a CO₂e indicator is requested in tenders, what is expected in practice, and when an indicative attestation is acceptable for screening and scoring.",
  alternates: {
    canonical: "https://www.certif-scope.com/why-companies-ask/carbon-attestation-tender",
    languages: {
      en: "https://www.certif-scope.com/why-companies-ask/carbon-attestation-tender",
      fr: "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-appel-offres",
    },
  },
  openGraph: {
    title: "Carbon attestation for tenders — What is actually requested",
    description:
      "Why a CO₂e indicator appears in tenders and how to respond with an indicative, screening-ready document.",
    url: "https://www.certif-scope.com/why-companies-ask/carbon-attestation-tender",
    siteName: "Certif-Scope",
    type: "website",
    locale: "en_US",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function CarbonAttestationTenderEN() {
  return (
    <section
      id="carbon-attestation-tender"
      data-section="carbon-attestation-tender"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (GUIDE) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Carbon attestation for tenders",
            url: "https://www.certif-scope.com/why-companies-ask/carbon-attestation-tender",
            description:
              "Practical guide: why a CO₂e indicator is requested in tenders and how to respond with an indicative, screening-ready attestation.",
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
                  name: "Carbon attestation for tenders",
                  item: "https://www.certif-scope.com/why-companies-ask/carbon-attestation-tender",
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
          Understanding CO₂e requests — Case #2
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Carbon attestation for tenders: what is actually requested
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          A carbon criterion in a tender does not necessarily mean a full carbon
          audit is required. In most cases, buyers want a comparable CO₂e
          indicator across candidates, usable for scoring or internal
          documentation.
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
              1. Why carbon appears in tenders
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Environmental criteria are progressively introduced into public
              and private tenders. This comes mainly from responsible
              procurement policies and the need to document the environmental
              impact of suppliers.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                The real purpose of a carbon criterion
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>compare candidates on a common indicator</li>
                <li>document a purchasing decision</li>
                <li>support internal ESG requirements</li>
                <li>anticipate future expectations</li>
              </ul>
            </div>
          </section>

          {/* 2 */}
          <section id="selection">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2. Scoring criterion vs regulatory obligation
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              In most tenders, carbon is a scoring criterion or an informative
              element, not a regulatory requirement. The distinction matters: a
              scoring criterion often accepts a coherent estimate, while a
              regulatory obligation requires a precise normative framework.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Most common case
                </h3>
                <ul className="list-disc ml-6 text-green-900/90 space-y-2">
                  <li>weighted environmental criterion</li>
                  <li>indicator requested for comparison</li>
                  <li>document attached to the bid</li>
                  <li>no method imposed</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  Less common case
                </h3>
                <ul className="list-disc ml-6 text-red-900/90 space-y-2">
                  <li>explicit ISO requirement or external audit</li>
                  <li>full carbon footprint requested</li>
                  <li>detailed technical evidence required</li>
                  <li>regulatory publication expected</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3 */}
          <section id="expected">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3. What buyers actually expect
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              In a tender, the carbon document should be readable, comparable
              and verifiable. The goal is not maximum scientific precision, but
              consistency across candidates.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Generally accepted format
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>aggregated CO₂e result</li>
                <li>coverage year and issue date</li>
                <li>declared method</li>
                <li>identifiable PDF document</li>
                <li>clear limitation statements</li>
                <li>verification elements</li>
              </ul>
            </div>
          </section>

          {/* 4 */}
          <section id="acceptable">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4. When an indicative attestation is enough
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              An indicative attestation is usually sufficient when the carbon
              criterion is used to differentiate offers or document a decision.
              It becomes insufficient only when the specification explicitly
              requires an audited standard.
            </p>

            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>non-eliminatory environmental criterion</li>
              <li>limited weight in the final score</li>
              <li>no imposed standard</li>
              <li>request for an indicative indicator</li>
            </ul>
          </section>

          {/* 5 */}
          <section id="full-carbon">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5. When a full carbon footprint becomes necessary
            </h2>

            <p className="text-gray-700 leading-relaxed">
              A full carbon footprint is required only when the contracting
              authority explicitly demands a normative framework or external
              assurance. This remains minority in standard tenders, but can
              appear in highly regulated sectors.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              6. Frequently asked questions (tenders)
            </h2>

            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Is it disqualifying not to have a full carbon footprint?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  In most cases, no. The carbon criterion is used to compare
                  offers. A coherent estimate is often sufficient when clearly
                  presented.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Can we provide a spend-based estimate?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, when no specific method is imposed. The condition is to
                  clearly state the method and its limitations.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Why are carbon criteria becoming common?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Organizations need to document responsible procurement
                  decisions and anticipate future ESG expectations, which leads
                  to the progressive inclusion of CO₂e indicators.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="pt-2">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Respond fast to a tender with a clear document
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                When a carbon indicator is requested in a tender, the objective
                is usually a comparison across candidates. A standardized,
                indicative attestation lets you respond without overbuilding the
                process.
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
              <nav aria-label="Tender attestation contents">
                <ul className="space-y-2 text-sm">
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#why">
                      1. Why it is requested
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#selection">
                      2. Criterion vs obligation
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#expected">
                      3. What is expected
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#acceptable">
                      4. When it is enough
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#full-carbon">
                      5. When a full footprint is required
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
                An indicative CO₂e attestation can be used to answer a carbon
                criterion in a tender when the request is for an informative
                indicator. It does not replace an audit or regulatory carbon
                reporting.
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
