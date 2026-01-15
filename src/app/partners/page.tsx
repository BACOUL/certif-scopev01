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

export default function PartnersPage() {
  return (
    <>
      <Breadcrumb
        pageName="Partnerships"
        description="Enterprise integration framework for corporations, procurement networks, insurers and institutional platforms."
      />

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">

          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-[#0B3A63]">
              Partnership Program — Enterprise Integration
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
              Certif-Scope enables large organizations to issue, verify and distribute 
              CO₂e attestations for SME suppliers through a secure, deterministic 
              integration with automated hash-based verification.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-10 border border-gray-200 dark:border-gray-700 mb-20">
            <h2 className="text-2xl font-bold text-[#0B3A63] mb-6">
              Sections
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              <li><a href="#s1" className="underline">1. Overview of Partnership Model</a></li>
              <li><a href="#s2">2. Regulatory Drivers</a></li>
              <li><a href="#s3">3. Benefits for Large Groups</a></li>
              <li><a href="#s4">4. API Integration Model</a></li>
              <li><a href="#s5">5. Token System & Security</a></li>
              <li><a href="#s6">6. Pricing & Volume Packs</a></li>
              <li><a href="#s7">7. Deployment Workflow</a></li>
              <li><a href="#s8">8. SLA, Support & Maintenance</a></li>
            </ul>
          </div>

          {/* Sections */}
          <div className="space-y-24">
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
          </div>

        </div>
      </section>
    </>
  );
}
