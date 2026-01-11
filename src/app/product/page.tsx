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
        <div className="md:col-span-3 space-y-24">

          {/* SECTION 1 */}
          <section id="s1">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
              Product Overview
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-10">
              Certif-Scope enables small and medium enterprises to instantly generate a standardized,
              institution-ready CO₂ attestation, aligned with GHG Protocol principles and accepted by
              procurement, banking, compliance and due diligence teams across Europe.
            </p>

            {/* MOBILE SECTION MENU (NOW PLACED CORRECTLY) */}
            <div className="md:hidden mb-14">
              <h3 className="text-lg font-semibold text-[#0B3A63] mb-3">Sections</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-base">
                <li><a href="#s1" className="underline">1. Product Overview</a></li>
                <li><a href="#s2">2. Key Benefits Summary</a></li>
                <li><a href="#s3">3. Why the product exists</a></li>
                <li><a href="#s4">4. Solution provided</a></li>
                <li><a href="#s5">5. Use cases</a></li>
                <li><a href="#s6">6. How it works</a></li>
                <li><a href="#s7">7. Value proposition</a></li>
                <li><a href="#s8">8. Security & Verification</a></li>
                <li><a href="#s9">9. Sample PDF</a></li>
                <li><a href="#s10">10. Data Sources</a></li>
                <li><a href="#s11">11. Methodological limitations</a></li>
                <li><a href="#s12">12. Data privacy</a></li>
                <li><a href="#s13">13. Integrations</a></li>
                <li><a href="#s14">14. Industry-specific uses</a></li>
                <li><a href="#s15">15. Maintenance & Updates</a></li>
                <li><a href="#s16">16. Technical FAQ</a></li>
              </ul>
            </div>

            {/* CONTENT BOXES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border">
                <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
                  Designed for institutional workflows
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Structured exactly like required by procurement, compliance and financial reviews.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border">
                <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
                  30-second generation
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  No consultant. No delay. Enter expenses → instant verified PDF.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border">
                <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
                  Independent verification
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Each attestation includes a unique verification code + cryptographic hash.
                </p>
              </div>

            </div>

          </section>

          {/* PLACEHOLDERS FOR NEXT SECTIONS */}
          <section id="s2"><h2 className="section-title">Key Benefits Summary</h2></section>
          <section id="s3"><h2 className="section-title">Why the product exists</h2></section>
          <section id="s4"><h2 className="section-title">Solution provided</h2></section>
          <section id="s5"><h2 className="section-title">Use cases</h2></section>
          <section id="s6"><h2 className="section-title">How it works</h2></section>
          <section id="s7"><h2 className="section-title">Value proposition</h2></section>
          <section id="s8"><h2 className="section-title">Security & Verification</h2></section>
          <section id="s9"><h2 className="section-title">Sample PDF</h2></section>
          <section id="s10"><h2 className="section-title">Data Sources</h2></section>
          <section id="s11"><h2 className="section-title">Methodological limitations</h2></section>
          <section id="s12"><h2 className="section-title">Data privacy</h2></section>
          <section id="s13"><h2 className="section-title">Integrations</h2></section>
          <section id="s14"><h2 className="section-title">Industry-specific uses</h2></section>
          <section id="s15"><h2 className="section-title">Maintenance & Updates</h2></section>
          <section id="s16"><h2 className="section-title">Technical FAQ</h2></section>

        </div>
      </div>
    </>
  );
}
