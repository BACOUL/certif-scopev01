// PATH: src/app/why-companies-ask/carbon-attestation-smes/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

/* ======================================================
   SEO METADATA — CARBON ATTESTATION FOR SMES
====================================================== */

export const metadata: Metadata = {
  title:
    "Carbon attestation for SMEs — What to provide without a full carbon footprint — Certif-Scope",
  description:
    "SME guide: why a CO₂e attestation is requested, what is actually expected (screening), and how to respond with a standardized indicative estimate without an audit.",
  alternates: {
    canonical:
      "https://www.certif-scope.com/why-companies-ask/carbon-attestation-smes",
    languages: {
      en: "https://www.certif-scope.com/why-companies-ask/carbon-attestation-smes",
      fr: "https://www.certif-scope.com/fr/why-companies-ask/attestation-carbone-pme",
    },
  },
  openGraph: {
    title:
      "Carbon attestation for SMEs — What to provide without a full footprint",
    description:
      "Why SMEs receive CO₂e requests and how to respond with an indicative, scoped and reusable attestation.",
    url: "https://www.certif-scope.com/why-companies-ask/carbon-attestation-smes",
    siteName: "Certif-Scope",
    type: "website",
    locale: "en_US",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function CarbonAttestationSMEsEN() {
  return (
    <section
      id="carbon-attestation-smes"
      data-section="carbon-attestation-smes"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (GUIDE) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Carbon attestation for SMEs",
            url: "https://www.certif-scope.com/why-companies-ask/carbon-attestation-smes",
            description:
              "SME guide: understand why you are asked for a CO₂e attestation, what is expected in practice, and how to respond with a standardized indicative estimate.",
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
                  name: "Carbon attestation for SMEs",
                  item: "https://www.certif-scope.com/why-companies-ask/carbon-attestation-smes",
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
          Understanding CO₂e requests — Case #4
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Carbon attestation for SMEs: what to provide without a full carbon
          footprint
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Many SMEs now receive CO₂e requests from clients, procurement teams,
          banks or insurers. In most cases, this is not a regulatory obligation
          and not an audit: you are being asked for a simple indicator for
          screening and internal documentation.
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
              1. Why SMEs receive CO₂e requests
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Even if your company is not subject to mandatory ESG reporting,
              your partners (customers, contracting authorities, financial
              institutions) may be, or they may apply internal responsible
              procurement policies. They therefore collect environmental
              information across their value chain.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                The most common situation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You are not being asked to “be compliant”. You are being asked
                to provide a simple, reusable and documentable CO₂e indicator,
                to avoid incomplete files or endless questionnaires.
              </p>
            </div>
          </section>

          {/* 2 */}
          <section id="what-is-expected">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              2. What is actually expected (in most cases)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              A “carbon attestation” request is often vague. In practice, the
              need is straightforward: a document that allows a third party to
              tick a box (“CO₂e information available”) and archive minimal
              evidence.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                What the reviewer wants to check quickly
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>an aggregated CO₂e result (indicative)</li>
                <li>a coverage year + an issue date</li>
                <li>a declared method (e.g., spend-based)</li>
                <li>a standard, identifiable PDF document</li>
                <li>clear limitations (not audited, not CSRD/ESRS)</li>
                <li>a verification link/QR (independent check)</li>
              </ul>
            </div>
          </section>

          {/* 3 */}
          <section id="difference">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              3. Indicative attestation vs full carbon footprint: understand
              the difference
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              SMEs often confuse a “carbon attestation” with an “audited carbon
              footprint”. These are two different objects. An indicative
              attestation serves screening. A full footprint supports a detailed
              inventory (often costly).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Indicative attestation (screening)
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>goal: answer a third-party request quickly</li>
                  <li>aggregated result + declared method</li>
                  <li>explicit limitations</li>
                  <li>fits workflows (procurement, banking, insurance)</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                  Full carbon footprint (inventory)
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>goal: detailed inventory and steering</li>
                  <li>physical data, scopes, assumptions</li>
                  <li>often audit / verification</li>
                  <li>significant cost and lead time</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mt-6">
              In “onboarding / screening” contexts, a full audit is rarely
              required. If an audited standard is explicitly imposed, ask for
              the expected framework (standard, boundary, scopes).
            </p>
          </section>

          {/* 4 */}
          <section id="how-to-respond">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              4. How to respond effectively (without overbuilding)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The best response is the one that reduces friction: a standard,
              readable, reusable document that clearly states its scope and
              limitations. This helps avoid being “blocked” by repeated
              requests.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] p-6">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">
                Safe wording (copy-ready)
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Use:</strong> “indicative CO₂e attestation”, “spend-based
                  estimate”, “ESG screening use”, “not audited”.
                </li>
                <li>
                  <strong>Avoid:</strong> “certified”, “CSRD/ESRS compliant”, “carbon
                  audit”, “regulatory inventory”.
                </li>
              </ul>

              <div className="mt-5 border-t border-gray-200 pt-5">
                <p className="text-sm text-gray-600 leading-relaxed">
                  If a third party requires a standard (ISO, audit), ask for:
                  the exact standard, organizational boundary, expected scopes,
                  and assurance level. Without those, the request is usually
                  screening.
                </p>
              </div>
            </div>
          </section>

          {/* 5 */}
          <section id="why-standardize">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              5. Why standardization saves time (and increases credibility)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              SMEs lose time when they respond case-by-case: different files,
              unclear methods, missing dates or boundaries. A standardized
              document helps you answer faster and reduces back-and-forth.
            </p>

            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>fewer manual questionnaires</li>
              <li>less ambiguity about scope</li>
              <li>a reusable format across multiple requests</li>
              <li>minimal evidence that can be archived</li>
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
                    Compliance & scope
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/product/methodology">
                    Methodology (spend-based)
                  </Link>
                </li>
                <li>
                  <Link className="underline" href="/verify">
                    Verify an attestation
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* 6 */}
          <section id="faq">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
              6. Frequently asked questions (SMEs)
            </h2>

            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Do I have to produce a full carbon footprint?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  In most cases, no. Requests received by SMEs are usually
                  screening-related (procurement, banking, insurance). If an
                  audit or a standard is explicitly required, the specification
                  should state it.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  Can an estimate be accepted?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, when the request is for an informative indicator and the
                  document clearly states its limitations: indicative, not
                  audited, not CSRD/ESRS, not a complete inventory.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-[#0B3A63] mb-2">
                  What if my client insists on “Scope 1/2/3”?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ask whether the goal is screening information or a full
                  inventory. If a full inventory is required, an indicative
                  attestation is not the right tool. If it is screening, a
                  scoped and standardized attestation usually fits.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="pt-2">
            <div className="rounded-2xl border border-gray-200 bg-[#0B3A63] p-8 text-white">
              <h2 className="text-2xl font-extrabold mb-3">
                Answer CO₂e requests without an audit, with a clear document
              </h2>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                If you are an SME and you are asked for a “carbon attestation”,
                the need is often a simple screening indicator. Certif-Scope
                produces an indicative, standardized, traceable and verifiable
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
              <nav aria-label="SME attestation contents">
                <ul className="space-y-2 text-sm">
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#why">
                      1. Why SMEs receive requests
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#what-is-expected"
                    >
                      2. What is expected
                    </a>
                  </li>
                  <li>
                    <a className="text-[#0B3A63] hover:underline" href="#difference">
                      3. Attestation vs footprint
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#how-to-respond"
                    >
                      4. How to respond
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#0B3A63] hover:underline"
                      href="#why-standardize"
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
                Most requests sent to SMEs are screening use cases (procurement,
                banking, insurance). An indicative attestation is acceptable if
                it clearly states its limitations. It does not replace an audit
                or a complete emissions inventory.
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
