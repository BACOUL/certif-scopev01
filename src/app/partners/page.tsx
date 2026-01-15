"use client";

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
    <div
      id="partners-overview"
      data-section="partners-overview"
      className="max-w-7xl mx-auto px-6 pt-8 pb-24"
    >

      <div className="w-full mb-12">
        <h1
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4"
          data-i18n="partners.h1"
        >
          Partnership Program — Enterprise Integration
        </h1>

        <p
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl"
          data-i18n="partners.intro"
        >
          The Certif-Scope Partnership Program enables large corporations, procurement networks,
          banks, insurers and industry platforms to issue CO₂e attestations on behalf of their SME
          suppliers. The integration provides a secure, deterministic, verification-ready workflow
          with automated hash-based authenticity checks and client-side data integrity.
        </p>
