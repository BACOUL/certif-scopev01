"use client";

import Image from "next/image";

export default function AttestationPreviewDE() {
  return (
    <section
      id="attestation-preview"
      data-section="attestation-preview"
      className="py-24 bg-[#F8FAFC] dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* SECTION LABEL */}
        <p className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase mb-3">
          CO₂e-Nachweisformat — Standardisiert • Ausgabenbasiert • Überprüfbar
        </p>

        <div className="w-16 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto mb-8" />

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] dark:text-gray-100 leading-tight mb-6">
          Beispielhafte Darstellung des Nachweisformats
        </h2>

        {/* DESCRIPTION */}
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-16">
          Dieses Bild zeigt die standardisierte Struktur und das visuelle Format
          eines Certif-Scope CO₂e-Nachweises. Es dient ausschließlich zur
          Veranschaulichung des Dokumentaufbaus und stellt keinen tatsächlich
          ausgestellten Nachweis dar.  
          Jeder Nachweis wird individuell auf Grundlage der vom Unternehmen
          angegebenen Finanzdaten erstellt.
        </p>

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[600px]">
            <Image
              src="/preview.webp"
              alt="Beispiel eines standardisierten CO₂e-Nachweises von Certif-Scope zur Veranschaulichung des Dokumentformats"
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
          <a
            href="/de/product"
            className="text-sm text-[#0B3A63] dark:text-gray-300 underline hover:text-[#1FB6C1]"
          >
            Vollständige Methodik anzeigen →
          </a>

          {/* DISCLAIMER */}
          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
            Ausschließlich illustratives Beispiel. Indikative Schätzung auf
            Ausgabenbasis. Kein CSRD-/ESRS-Bericht und kein geprüfter
            Treibhausgasinventarbericht.
          </p>

        </div>
      </div>
    </section>
  );
}
