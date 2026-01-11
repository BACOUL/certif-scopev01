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
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-24 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* SIDEBAR — DESKTOP ONLY */}
        <aside className="hidden md:block md:col-span-1">
          <nav className="sticky top-24 space-y-3 text-sm">
            <h3 className="text-lg font-semibold text-[#0B3A63] mb-2">Sections</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li><a href="#s1" className="hover:text-[#0B3A63]">1. Product Overview</a></li>
              <li><a href="#s2" className="hover:text-[#0B3A63] font-medium text-[#0B3A63]">2. Key Benefits Summary</a></li>
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
        <div className="md:col-span-3 space-y-24">

          {/* START PROSE WRAPPER */}
          <div className="prose prose-lg prose-slate max-w-none dark:prose-invert">

            {/* SECTION 1: OVERVIEW */}
            <section id="s1" className="scroll-mt-24">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
                Product Overview
              </h1>

              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-10">
                Certif-Scope enables small and medium enterprises to instantly generate a standardized,
                institution-ready CO₂ attestation, aligned with GHG Protocol principles and accepted by
                procurement, banking, compliance and due diligence teams across Europe.
              </p>

              {/* MOBILE SECTION MENU */}
              <div className="md:hidden mb-14 not-prose">
                <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">Sections</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-base">
                  <li><a href="#s1" className="underline">1. Product Overview</a></li>
                  <li><a href="#s2">2. Key Benefits Summary</a></li>
                  <li><a href="#s3">3. Why the product exists</a></li>
                  {/* ... other links ... */}
                </ul>
              </div>

              {/* CONTENT BOXES S1 - "not-prose" added to prevent typography conflicts in grid cards if needed, but left clean here */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 not-prose">
                <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
                    Designed for institutional workflows
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Structured exactly like required by procurement, compliance and financial reviews.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
                    30-second generation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    No consultant. No delay. Enter expenses → instant verified PDF.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
                    Independent verification
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Each attestation includes a unique verification code + cryptographic hash.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 2: KEY BENEFITS (INTEGRATED) */}
            <section id="s2" className="w-full scroll-mt-24">

              <h2 className="text-3xl md:text-4xl font-bold text-[#0B3A63] mb-8">
                  Key Benefits Summary
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mb-12">
                  Certif-Scope provides a streamlined, verifiable, and institution-ready CO₂ attestation 
                  designed specifically for SMEs that need to meet procurement, banking, insurance and 
                  compliance requirements without engaging consultants or completing long ESG audits. 
                  The system focuses on speed, standardization, and third-party acceptance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 not-prose">

                  {/* BENEFIT 1 */}
                  <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-[#0B3A63] mb-4">
                      Immediate Availability
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Generate a standardized CO₂ attestation within seconds. No consultant delays, 
                      no back-and-forth validation, no manual spreadsheets. Ideal for urgent procurement, 
                      grant applications or onboarding workflows.
                  </p>
                  </div>

                  {/* BENEFIT 2 */}
                  <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-[#0B3A63] mb-4">
                      Standardized & Review-Ready
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      The attestation follows a recognized structure aligned with institutional ESG 
                      evaluation processes. Information is presented clearly: company identity, methodology, 
                      emission factors, results, verification ID and cryptographic signature reference.
                  </p>
                  </div>

                  {/* BENEFIT 3 */}
                  <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-[#0B3A63] mb-4">
                      Independently Verifiable
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Every attestation includes a unique verification identifier and a cryptographic hash, 
                      enabling any third-party (bank, insurer, buyer, compliance officer) to validate 
                      authenticity without needing to contact Certif-Scope. Reduces friction and increases trust.
                  </p>
                  </div>

              </div>

              {/* SECOND BENEFITS ROW */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14 not-prose">

                  {/* BENEFIT 4 */}
                  <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-[#0B3A63] mb-4">
                      Cost-Effective & Scalable
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Avoid expensive ESG consulting packages. Certif-Scope provides an accessible, 
                      repeatable and scalable attestation suitable for SMEs, startups, suppliers and 
                      independent professionals across all industries.
                  </p>
                  </div>

                  {/* BENEFIT 5 */}
                  <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-[#0B3A63] mb-4">
                      Accepted Across Europe
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Structured to match expectations from European procurement offices, banks, insurers, 
                      public institutions and compliance teams. The format ensures clarity and avoids rejection.
                  </p>
                  </div>

                  {/* BENEFIT 6 */}
                  <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-[#0B3A63] mb-4">
                      Transparent Methodology
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Based on well-established emission factors and a documented spend-based methodology. 
                      Every calculation step is described in the attestation for full transparency.
                  </p>
                  </div>

              </div>

            </section>

            {/* PLACEHOLDERS FOR REMAINING SECTIONS */}
            <section id="s3" className="scroll-mt-24"><h2 className="text-2xl font-bold text-[#0B3A63] mb-4">Why the product exists</h2><p className="text-gray-500">Content coming soon...</p></section>
            <section id="s4" className="scroll-mt-24"><h2 className="text-2xl font-bold text-[#0B3A63] mb-4">Solution provided</h2><p className="text-gray-500">Content coming soon...</p></section>
            <section id="s5" className="scroll-mt-24"><h2 className="text-2xl font-bold text-[#0B3A63] mb-4">Use cases</h2><p className="text-gray-500">Content coming soon...</p></section>
            <section id="s6" className="scroll-mt-24"><h2 className="text-2xl font-bold text-[#0B3A63] mb-4">How it works</h2><p className="text-gray-500">Content coming soon...</p></section>
            <section id="s7" className="scroll-mt-24"><h2 className="text-2xl font-bold text-[#0B3A63] mb-4">Value proposition</h2><p className="text-gray-500">Content coming soon...</p></section>
            <section id="s8" className="scroll-mt-24"><h2 className="text-2xl font-bold text-[#0B3A63] mb-4">Security & Verification</h2><p className="text-gray-500">Content coming soon...</p></section>
            <section id="s9" className="scroll-mt-24"><h2 className="text-2xl font-bold text-[#0B3A63] mb-4">Sample PDF</h2><p className="text-gray-500">Content coming soon...</p></section>
            <section id="s10" className="scroll-mt-24"><h2 className="text-2xl font-bold text-[#0B3A63] mb-4">Data Sources</h2><p className="text-gray-500">Content coming soon...</p></section>
            <section id="s11" className="scroll-mt-24"><h2 className="text-2xl font-bold text-[#0B3A63] mb-4">Methodological limitations</h2><p className="text-gray-500">Content coming soon...</p></section>
            <section id="s12" className="scroll-mt-24"><h2 className="text-2xl font-bold text-[#0B3A63] mb-4">Data privacy</h2><p className="text-gray-500">Content coming soon...</p></section>
            <section id="s13" className="scroll-mt-24"><h2 className="text-2xl font-bold text-[#0B3A63] mb-4">Integrations</h2><p className="text-gray-500">Content coming soon...</p></section>
            <section id="s14" className="scroll-mt-24"><h2 className="text-2xl font-bold text-[#0B3A63] mb-4">Industry-specific uses</h2><p className="text-gray-500">Content coming soon...</p></section>
            <section id="s15" className="scroll-mt-24"><h2 className="text-2xl font-bold text-[#0B3A63] mb-4">Maintenance & Updates</h2><p className="text-gray-500">Content coming soon...</p></section>
            <section id="s16" className="scroll-mt-24"><h2 className="text-2xl font-bold text-[#0B3A63] mb-4">Technical FAQ</h2><p className="text-gray-500">Content coming soon...</p></section>

          </div> {/* END PROSE WRAPPER */}

        </div>
      </div>
    </>
  );
}
