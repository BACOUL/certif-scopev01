// PATH: src/components/AttestationPreview/index.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

export default function AttestationPreview() {
  const pathname = usePathname();

  const isFR = useMemo(() => {
    if (!pathname) return false;
    return pathname === "/fr" || pathname.startsWith("/fr/");
  }, [pathname]);

  const productHref = useMemo(() => {
    return isFR ? "/fr/product" : "/product";
  }, [isFR]);

  return (
    <section
      id="attestation-preview"
      data-section="attestation-preview"
      className="py-24 bg-[#F8FAFC] dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* SECTION LABEL */}
        <p
          data-i18n="preview.label"
          className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase mb-3"
        >
          CO₂e Attestation Format — Standardized • Spend-Based • Verifiable
        </p>

        <div className="w-16 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto mb-8" />

        {/* TITLE */}
        <h2
          data-i18n="preview.title"
          className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] dark:text-gray-100 leading-tight mb-6"
        >
          Illustrative example of the attestation format
        </h2>

        {/* DESCRIPTION */}
        <p
          data-i18n="preview.description"
          className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-16"
        >
          This image illustrates the standardized structure and visual format of a Certif-Scope
          CO₂e attestation. It is provided for layout and readability purposes only and does not
          represent an actual issued document. Each attestation is generated individually based
          on user-provided data.
        </p>

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[600px]">
            <Image
              src="/preview.webp"
              alt="Illustrative example of the standardized Certif-Scope CO₂e attestation format, shown for layout and structure only"
              width={1200}
              height={800}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 600px"
              className="rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
            />
          </div>
        </div>

        {/* INTERNAL LINK + DISCLAIMER */}
        <div className="mt-12 flex flex-col items-center">
          {/* INTERNAL NAVIGATION LINK */}
          <Link
            href={productHref}
            data-i18n="preview.methodologyLink"
            className="text-sm text-[#0B3A63] dark:text-gray-300 underline hover:text-[#1FB6C1]"
          >
            See full methodology →
          </Link>

          {/* DISCLAIMER */}
          <p
            data-i18n="preview.disclaimer"
            className="mt-4 text-xs text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed"
          >
            Illustrative example only. Indicative spend-based estimate. Not a CSRD/ESRS report and
            not a substitute for an audited greenhouse gas inventory.
          </p>
        </div>
      </div>
    </section>
  );
}
