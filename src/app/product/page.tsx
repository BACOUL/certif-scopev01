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

          {/* SECTION 1 — FULL VERSION */}
          <section id="s1" className="max-w-6xl">

            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
              Product Overview
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-10">
              Certif-Scope enables small and medium enterprises across Europe to instantly generate a
              standardized and institution-ready CO₂ attestation. Built around the GHG Protocol
              spend-based methodology, each attestation provides a verifiable environmental indicator
              aligned with procurement workflows, banking due diligence, insurer requirements,
              supply-chain onboarding, and ESG transparency requests.
            </p>

            {/* MOBILE SECTION MENU */}
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

            {/* CARDS — Expanded version */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
                  Designed for institutional workflows
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  The attestation mirrors the structure expected by financial institutions,
                  procurement departments and compliance reviewers.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
                  Instant generation
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  No consultants. No long audits. Enter expenses and download a verified PDF instantly.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
                  Independent verification
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Each document contains a verification ID and cryptographic hash ensuring authenticity.
                </p>
              </div>

            </div>

            {/* WHY THIS PRODUCT EXISTS */}
            <div className="mt-20 max-w-4xl">

              <h2 className="text-2xl md:text-3xl font-bold text-[#0B3A63] mb-5">
                Why this product exists
              </h2>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                SMEs now face environmental disclosure requirements for banking, procurement,
                insurance, logistics, and ESG reporting. They require formal CO₂ indicators.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Traditional carbon audits take 3-6 weeks and cost thousands of euros. Certif-Scope
                offers a fast, transparent, and standardized alternative suitable for institutional
                review.
              </p>

              <ul className="mt-6 space-y-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                <li>• Institutions require CO₂ data for compliance</li>
                <li>• Banks use CO₂ indicators in risk evaluation</li>
                <li>• Procurement demands standardized CO₂ metrics</li>
                <li>• SMEs lack internal environmental expertise</li>
              </ul>

            </div>

          </section>

          {/* PLACEHOLDERS FOR OTHER SECTIONS */}
          <section id="s2"><h2>Key Benefits Summary</h2></section>
          <section id="s3"><h2>Why the product exists</h2></section>
          <section id="s4"><h2>Solution provided</h2></section>
          <section id="s5"><h2>Use cases</h2></section>
          <section id="s6"><h2>How it works</h2></section>
          <section id="s7"><h2>Value proposition</h2></section>
          <section id="s8"><h2>Security & Verification</h2></section>
          <section id="s9"><h2>Sample PDF</h2></section>
          <section id="s10"><h2>Data Sources</h2></section>
          <section id="s11"><h2>Methodological limitations</h2></section>
          <section id="s12"><h2>Data privacy</h2></section>
          <section id="s13"><h2>Integrations</h2></section>
          <section id="s14"><h2>Industry-specific uses</h2></section>
          <section id="s15"><h2>Maintenance & Updates</h2></section>
          <section id="s16"><h2>Technical FAQ</h2></section>

        </div>
      </div>
    </>
  );
}
