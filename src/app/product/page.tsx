"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";

export default function ProductPage() {
  return (
    <>
      <Breadcrumb
        pageName="Product Overview"
        description="Instant CO₂ attestation designed for procurement, banking and compliance workflows."
      />

      {/* MAIN LAYOUT WRAPPER */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-24 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* SIDEBAR — DESKTOP ONLY */}
        <aside className="hidden md:block md:col-span-1 sticky top-24 self-start">
          <nav className="space-y-3 text-sm">
            <h3 className="text-lg font-semibold text-[#0B3A63] mb-2">Sections</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li><a href="#s1" className="hover:text-[#0B3A63]">1. Product Overview</a></li>
              <li><a href="#s2" className="hover:text-[#0B3A63]">2. Key Benefits Summary</a></li>
              <li><a href="#s3" className="hover:text-[#0B3A63]">3. Why the product exists</a></li>
              <li><a href="#s4" className="hover:text-[#0B3A63]">4. Solution provided</a></li>
              <li><a href="#s5" className="hover:text-[#0B3A63]">5. Use cases</a></li>
              <li><a href="#s6" className="hover:text-[#0B3A63]">6. How it works</a></li>
              <li><a href="#s7" className="hover:text-[#0B3A63]">7. Value proposition</a></li>
              <li><a href="#s8" className="hover:text-[#0B3A63]">8. Security & Verification</a></li>
              <li><a href="#s9" className="hover:text-[#0B3A63]">9. Sample PDF</a></li>
              <li><a href="#s10" className="hover:text-[#0B3A63]">10. Data Sources</a></li>
              <li><a href="#s11" className="hover:text-[#0B3A63]">11. Methodological limitations</a></li>
              <li><a href="#s12" className="hover:text-[#0B3A63]">12. Data privacy</a></li>
              <li><a href="#s13" className="hover:text-[#0B3A63]">13. Integrations</a></li>
              <li><a href="#s14" className="hover:text-[#0B3A63]">14. Industry-specific uses</a></li>
              <li><a href="#s15" className="hover:text-[#0B3A63]">15. Maintenance & Updates</a></li>
              <li><a href="#s16" className="hover:text-[#0B3A63]">16. Technical FAQ</a></li>
            </ul>
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <div className="md:col-span-3 space-y-32">

          {/* GLOBAL PROSE WRAPPER FOR TEXT ONLY */}
          <div className="prose prose-lg prose-slate max-w-none dark:prose-invert">

            {/* SECTION 1: PRODUCT OVERVIEW */}
            <section id="s1" className="scroll-mt-24">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-8">
                Product Overview
              </h1>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed w-full md:max-w-3xl mb-10">
                Certif-Scope enables small and medium enterprises to instantly generate a standardized,
                institution-ready CO₂ attestation, aligned with GHG Protocol principles and accepted by
                procurement, banking, compliance and due diligence teams across Europe.
              </p>

              {/* MOBILE SOMMAIRE */}
              <div className="md:hidden mb-12 not-prose">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">Sections</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-base">
                  <li><a href="#s1" className="underline">1. Product Overview</a></li>
                  <li><a href="#s2">2. Key Benefits Summary</a></li>
                  <li><a href="#s3">3. Why the product exists</a></li>
                  <li><a href="#s4">4. Solution provided</a></li>
                </ul>
              </div>

              {/* SECTION 1 CONTENT CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 not-prose">
                <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">Designed for institutional workflows</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Structured exactly like required by procurement, compliance and financial reviews.</p>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">30-second generation</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">No consultant. No waiting. Enter expenses → instant verified PDF.</p>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">Independent verification</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Each document includes a unique verification code + cryptographic hash.</p>
                </div>
              </div>
            </section>

            {/* SECTION 2: KEY BENEFITS SUMMARY (FULLY DEVELOPED) */}
            <section id="s2" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B3A63] mb-8">
                Key Benefits Summary
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed w-full md:max-w-3xl mb-12">
                Certif-Scope provides a streamlined, verifiable, and institution-ready CO₂ attestation 
                designed specifically for SMEs requiring fast, standardized, replicable compliance documentation. 
                The system removes delays and reduces friction in procurement, onboarding, financing and due diligence.
              </p>

              {/* FIRST BENEFIT ROW */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 not-prose">

                <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border">
                  <h3 className="text-xl font-semibold text-[#0B3A63] mb-4">Immediate Availability</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Generate a standardized CO₂ indicator in seconds. Perfect for urgent submissions, 
                    tender responses, grant applications and supplier onboarding.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border">
                  <h3 className="text-xl font-semibold text-[#0B3A63] mb-4">Standardized & Review-Ready</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    The attestation layout matches expectations from procurement, ESG compliance and financial evaluators.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border">
                  <h3 className="text-xl font-semibold text-[#0B3A63] mb-4">Independently Verifiable</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Each PDF includes a unique verification identifier & a cryptographic integrity signature.
                  </p>
                </div>

              </div>

              {/* SECOND BENEFIT ROW */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14 not-prose">

                <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border">
                  <h3 className="text-xl font-semibold text-[#0B3A63] mb-4">Cost-Effective & Scalable</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Avoid expensive ESG consulting. Certif-Scope is affordable and repeatable for any size of business.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border">
                  <h3 className="text-xl font-semibold text-[#0B3A63] mb-4">Accepted Across Europe</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    The structure follows mainstream acceptance criteria from European financial and procurement bodies.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border">
                  <h3 className="text-xl font-semibold text-[#0B3A63] mb-4">Transparent Methodology</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Uses published emission factors and a clear spend-based calculation methodology.
                  </p>
                </div>

              </div>
            </section>

            {/* PLACEHOLDERS FOR NEXT SECTIONS */}
            <section id="s3" className="scroll-mt-24"><h2>Why the product exists</h2><p>Content coming soon…</p></section>
            <section id="s4" className="scroll-mt-24"><h2>Solution provided</h2><p>Content coming soon…</p></section>
            <section id="s5" className="scroll-mt-24"><h2>Use cases</h2><p>Content coming soon…</p></section>
            <section id="s6" className="scroll-mt-24"><h2>How it works</h2><p>Content coming soon…</p></section>
            <section id="s7" className="scroll-mt-24"><h2>Value proposition</h2><p>Content coming soon…</p></section>
            <section id="s8" className="scroll-mt-24"><h2>Security & Verification</h2><p>Content coming soon…</p></section>
            <section id="s9" className="scroll-mt-24"><h2>Sample PDF</h2><p>Content coming soon…</p></section>
            <section id="s10" className="scroll-mt-24"><h2>Data Sources</h2><p>Content coming soon…</p></section>
            <section id="s11" className="scroll-mt-24"><h2>Methodological limitations</h2><p>Content coming soon…</p></section>
            <section id="s12" className="scroll-mt-24"><h2>Data privacy</h2><p>Content coming soon…</p></section>
            <section id="s13" className="scroll-mt-24"><h2>Integrations</h2><p>Content coming soon…</p></section>
            <section id="s14" className="scroll-mt-24"><h2>Industry-specific uses</h2><p>Content coming soon…</p></section>
            <section id="s15" className="scroll-mt-24"><h2>Maintenance & Updates</h2><p>Content coming soon…</p></section>
            <section id="s16" className="scroll-mt-24"><h2>Technical FAQ</h2><p>Content coming soon…</p></section>

          </div>
        </div>
      </div>
    </>
  );
}
