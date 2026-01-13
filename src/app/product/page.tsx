"use client";

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
    <div className="max-w-7xl mx-auto px-6 pt-24 pb-24">

      {/* FULL-WIDTH SUMMARY AT TOP */}
      <div className="w-full p-8 mb-24 bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Product Overview — Sections
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
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

      {/* MAIN CONTENT — SECTIONS */}
      <div className="space-y-24">
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
  );
}
