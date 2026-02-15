"use client";

export default function FeaturesDE() {
  return (
    <section
      id="features"
      data-section="features"
      className="pt-24 pb-24 bg-[#F8FAFC] dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* SECTION HEADER — CANONICAL HOME */}
        <header className="max-w-3xl mx-auto text-center mb-20">
          <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
            CO₂e-Nachweis — Inhalt
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4">
            Was der CO₂e-Nachweis enthält
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Ein standardisierter, indikativ berechneter CO₂e-Nachweis für Beschaffung,
            Banken, Versicherungen und ESG-Screening. Jedes Dokument folgt einer festen,
            reproduzierbaren Struktur und basiert ausschließlich auf den angegebenen
            Jahresausgaben (€).
          </p>

          <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto mt-10" />
        </header>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* SUMMARY PAGE */}
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Übersicht
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                Aggregiertes CO₂e-Ergebnis, Referenzjahr, methodischer Rahmen und
                wesentliche Metadaten in einem einheitlichen, prüfbaren Layout für
                institutionelles Screening und Vergleichbarkeit.
              </p>
            </div>
          </div>

          {/* METHODOLOGY OVERVIEW */}
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Methodik-Überblick
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                Beschreibung der ausgabenbasierten Methode auf hoher Ebene
                (Rahmen, Annahmen, Referenzen). Detaillierte Berechnungslogik und
                technische Definitionen sind separat dokumentiert.
              </p>
            </div>
          </div>

          {/* EMISSION FACTOR SOURCES */}
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Quellen der Emissionsfaktoren
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                Referenzierte Quellen der Emissionsfaktoren mit Datensatz-Versionierung
                und Veröffentlichungsjahr (ADEME, DEFRA, IPCC) für Transparenz,
                Reproduzierbarkeit und institutionelle Akzeptanz.
              </p>
            </div>
          </div>

          {/* VERIFICATION & INTEGRITY */}
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1FB6C1]/10 text-[#1FB6C1] flex-shrink-0">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0B3A63]">
                Verifizierung & Integrität
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                Integrierte Verifizierungselemente ermöglichen eine unabhängige Prüfung
                von Authentizität und Integrität durch Dritte — ohne Plattformabhängigkeit
                und ohne Datenspeicherung. Keine finanziellen Eingabedaten werden
                gespeichert oder übertragen.
              </p>
            </div>
          </div>
        </div>

        {/* INTERNAL LINK */}
        <div className="text-center mt-14">
          <a
            href="/de/product/methodology"
            className="text-[#0B3A63] dark:text-gray-300 underline text-sm hover:text-[#1FB6C1]"
          >
            Vollständige Methodik ansehen →
          </a>
        </div>

        {/* DISCLAIMER */}
        <p className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          Indikative Schätzung auf Ausgabenbasis. Kein CSRD-/ESRS-konformer Bericht
          und kein Ersatz für ein verifiziertes oder geprüftes
          Treibhausgasinventar. Ergebnisse hängen vollständig von den angegebenen
          Finanzdaten ab.
        </p>
      </div>
    </section>
  );
}
