"use client";

export default function TrustDE() {
  return (
    <section
      id="trust"
      data-section="trust"
      className="py-24 bg-[#F8FAFC] dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* MICRO LABEL */}
        <p
          className="uppercase text-xs md:text-sm font-medium text-[#64748B] dark:text-gray-400 tracking-wider mb-3"
          data-i18n="trust.label"
        >
          CO₂e-Nachweis — Vertrauen & Verlässlichkeit
        </p>

        {/* TITLE */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] dark:text-gray-100 leading-tight"
          data-i18n="trust.title"
        >
          Für institutionelle Prüfung und externe Verifizierung entwickelt
        </h2>

        {/* INTRO */}
        <p
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          data-i18n="trust.intro"
        >
          Certif-Scope verwendet eine feste Dokumentstruktur, stabile Emissionsfaktor-Referenzen
          und integrierte Verifizierungsinformationen. Prüfer erhalten ein konsistentes und
          vergleichbares Dokument über alle Lieferanten hinweg — weniger manuelle Kontrollen,
          weniger Unklarheiten.
        </p>

        {/* SEPARATOR */}
        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14" />

        {/* INSTITUTIONAL ACCEPTANCE */}
        <p
          className="text-sm text-[#0B3A63]/80 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-16"
          data-i18n="trust.acceptance"
        >
          Typisch genutzt für vorgelagerte Beschaffungs-, Bank- und ESG-Screening-Prozesse
          in europäischen Organisationen.
        </p>

        {/* PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* INTEGRITY BLOCK */}
          <div
            className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1"
            data-i18n="trust.integrity"
          >
            <svg
              aria-hidden="true"
              className="h-12 w-12 text-[#0B3A63] dark:text-gray-200 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z"
              />
            </svg>

            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-2">
              Verifizierbare Integrität
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Jeder Nachweis enthält Verifizierungselemente, mit denen Dritte Authentizität und
              Integrität unabhängig bestätigen können — ohne Benutzerkonten, Datenbanken oder
              gespeicherte Finanzinformationen.
            </p>
          </div>

          {/* STRUCTURE BLOCK */}
          <div
            className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1"
            data-i18n="trust.structure"
          >
            <svg
              aria-hidden="true"
              className="h-12 w-12 text-[#0B3A63] dark:text-gray-200 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>

            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-2">
              Prüfer-orientierte Struktur
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Eingaben, Methodik-Zusammenfassung und Ergebnisse folgen einem vorhersehbaren Layout,
              das dem Vorgehen von Einkauf, Banken und ESG-Teams bei der Lieferantenbewertung
              entspricht.
            </p>
          </div>

          {/* CONSISTENCY BLOCK */}
          <div
            className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1"
            data-i18n="trust.consistency"
          >
            <svg
              aria-hidden="true"
              className="h-12 w-12 text-[#0B3A63] dark:text-gray-200 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h18v4H3V3zm0 7h18v11H3V10zm6 3h6"
              />
            </svg>

            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-2">
              Konsistente und vergleichbare Ergebnisse
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Dokumentierte und stabile Emissionsfaktor-Referenzen sorgen für vergleichbare
              Resultate über verschiedene Bewertungen hinweg — eine belastbare Grundlage für
              institutionelles Screening und automatisierte Vergleiche.
            </p>
          </div>
        </div>

        {/* FOOTNOTE */}
        <p
          className="mt-12 text-center text-xs text-gray-500 dark:text-gray-400"
          data-i18n="trust.footnote"
        >
          Indikatives, ausgabenbasiertes Dokument — kein CSRD/ESRS-Bericht und kein geprüftes
          Emissionsinventar.
        </p>
      </div>
    </section>
  );
            }
