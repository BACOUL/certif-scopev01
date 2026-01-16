"use client";

import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import Section7 from "./sections/Section7";

export default function ProductPage() {
  return (
    <div
      id="product-overview"
      data-section="product-overview"
      className="max-w-7xl mx-auto px-6 pt-8 pb-24"
    >
      {/* HEADER */}
      <div className="w-full mb-12">
        <h1
          data-i18n="product.h1"
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4"
        >
          CO₂e Attestation — Full Product Overview
        </h1>
      </div>

      {/* SECTIONS */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
}
