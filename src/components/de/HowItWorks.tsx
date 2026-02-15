"use client";

import Link from "next/link";

export default function HowItWorksDE() {
  return (
    <section
      id="how-it-works"
      data-section="how-it-works"
      className="py-24 bg-[#F8FAFC] dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* MICRO LABEL */}
        <p
          className="uppercase text-xs md:text-sm font-medium text-[#64748B] tracking-wider text-center mb-3"
          data-i18n="howitworks.label"
        >
          CO₂e-Nachweis — Prozess
        </p>

        {/* TITLE */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63]"
          data-i18n="howitworks.title"
        >
          So funktioniert es
        </h2>

        {/* INTRO */}
        <p
          className="mt-4 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
          data-i18n="howitworks.intro"
        >
          Ein einfacher Prozess in drei Schritten: jährliche Ausgaben (€) werden in einen
          standardisierten CO₂e-Nachweis umgewandelt — für Beschaffung, Banken,
          Versicherungen und ESG-Screening.
        </p>

        {/* SEPARATOR */}
        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14" />

        {/* 3 STEPS GRID */}
        <div className="grid md:grid-cols-3 gap-14">
          {/* STEP 1 */}
          <div className="text-center px-4" data-i18n="howitworks.step1">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              1
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Jährliche Ausgaben eingeben
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Tragen Sie die jährlichen Ausgaben in vordefinierten Kategorien ein. Es sind
              nur finanzielle Angaben erforderlich — keine Aktivitätsdaten, keine Dokumente,
              keine Audits.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="text-center px-4" data-i18n="howitworks.step2">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              2
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Automatische Berechnung
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Eine standardisierte ausgabenbasierte Methode wird automatisch angewendet,
              um ein konsistentes CO₂e-Ergebnis zu erzeugen — unter Verwendung anerkannter
              Emissionsfaktor-Quellen.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="text-center px-4" data-i18n="howitworks.step3">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              3
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Nachweis herunterladen
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Sie erhalten sofort ein standardisiertes PDF mit aggregiertem CO₂e-Ergebnis,
              den wichtigsten Metadaten sowie integrierten Verifikationsinformationen —
              im review-fähigen Format.
            </p>
          </div>
        </div>

        {/* PRIVACY BY DESIGN — KEY STATEMENT */}
        <p
          className="mt-12 text-center text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          data-i18n="howitworks.privacy.statement"
        >
          Die Berechnungen laufen lokal in Ihrem Browser.
          <br />
          Nur das finale CO₂e-Ergebnis wird zur Ausstellung des Nachweises übertragen.
        </p>

        {/* SECONDARY CTA — DISCREET */}
        <div className="mt-10 text-center">
          <Link
            href="/de/generate"
            data-i18n="howitworks.cta"
            className="inline-block text-sm font-medium text-[#0B3A63] underline hover:text-[#1FB6C1] transition"
          >
            CO₂e-Nachweis erstellen →
          </Link>
        </div>

        {/* FOOTER LINE */}
        <p
          className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400"
          data-i18n="howitworks.footer"
        >
          Der gesamte Prozess dauert weniger als eine Minute.
        </p>
      </div>
    </section>
  );
}
