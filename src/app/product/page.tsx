"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";

import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import Section7 from "./sections/Section7";
import Section8 from "./sections/Section8";
import Section9 from "./sections/Section9";
import Section10 from "./sections/Section10";
import Section11 from "./sections/Section11";
import Section12 from "./sections/Section12";
import Section13 from "./sections/Section13";
import Section14 from "./sections/Section14";
import Section15 from "./sections/Section15";
import Section16 from "./sections/Section16";

export default function ProductPage() {
  return (
    <>
      <Breadcrumb
        pageName="Product Overview"
        description="Instant CO₂ attestation designed for procurement, banking and compliance workflows."
      />

      {/* MAIN LAYOUT WRAPPER */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-24 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* SIDEBAR — DESKTOP */}
        <aside className="hidden md:block md:col-span-1">
          <nav className="sticky top-24 space-y-3 text-sm">
            <h3 className="text-lg font-semibold text-[#0B3A63] mb-2">Sections</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li><a href="#s1">1. Product Overview</a></li>
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
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <div className="md:col-span-3 space-y-24">

          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Section8 />
          <Section9 />
          <Section10 />
          <Section11 />
          <Section12 />
          <Section13 />
          <Section14 />
          <Section15 />
          <Section16 />

        </div>
      </div>
    </>
  );
}
