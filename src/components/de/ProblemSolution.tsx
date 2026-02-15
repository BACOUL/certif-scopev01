"use client";

export default function ProblemSolutionDE() {
  return (
    <section
      id="problem-solution"
      data-section="problem-solution"
      className="pt-24 pb-24 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* SECTION HEADER — CANONICAL HOME */}
        <header className="max-w-3xl mx-auto text-center mb-20">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-snug mb-4"
            data-i18n="problem.title"
          >
            KMU werden zunehmend aufgefordert, CO₂e-Informationen bereitzustellen —
            ohne die Mittel, um kurzfristig zu reagieren.
          </h2>

          <p
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            data-i18n="problem.description"
          >
            Einkaufsabteilungen, Banken und Versicherer fragen im Rahmen von Onboarding,
            Beschaffung und Risiko-Screening regelmäßig CO₂e-Kennzahlen ab. Ein vollständiges
            Emissionsinventar erfordert detaillierte Aktivitätsdaten, Beratungsaufwand und
            Audits — Ressourcen, die die meisten KMU nicht ad hoc mobilisieren können.
          </p>

          <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto mt-10" />
        </header>

        {/* SOLUTION */}
        <p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed text-center mb-20"
          data-i18n="problem.solution"
        >
          Certif-Scope erstellt einen sofortigen, indikativen, ausgabenbasierten CO₂e-Nachweis,
          der direkt aus den jährlichen Ausgaben erzeugt wird. Ein standardisiertes Format,
          das Prüfer sofort verstehen — unabhängig verifizierbar und in institutionellen
          Workflows nutzbar.
        </p>

        {/* 3 BENEFITS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 text-center">
          {/* BENEFIT 1 */}
          <div
            className="flex flex-col items-center gap-4"
            data-i18n="problem.point1.block"
          >
            <svg
              className="h-14 w-14 text-[#0B3A63]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3
              className="text-xl font-semibold text-[#0B3A63] dark:text-white"
              data-i18n="problem.point1.title"
            >
              Auf institutionelle Prozesse ausgerichtet
            </h3>
            <p
              className="text-sm text-gray-600 dark:text-gray-400 max-w-xs"
              data-i18n="problem.point1.text"
            >
              Entwickelt für Beschaffung, Banken und Versicherungen, die schnelle,
              indikative CO₂e-Werte benötigen.
            </p>
          </div>

          {/* BENEFIT 2 */}
          <div
            className="flex flex-col items-center gap-4"
            data-i18n="problem.point2.block"
          >
            <svg
              className="h-14 w-14 text-[#0B3A63]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-9 4h9m3-14H6a2 2 0 00-2 2v14l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2z"
              />
            </svg>
            <h3
              className="text-xl font-semibold text-[#0B3A63] dark:text-white"
              data-i18n="problem.point2.title"
            >
              Transparente ausgabenbasierte Methode
            </h3>
            <p
              className="text-sm text-gray-600 dark:text-gray-400 max-w-xs"
              data-i18n="problem.point2.text"
            >
              Nutzt jährliche Ausgaben (€) und stabile Emissionsfaktor-Quellen.
              Keine Audits, keine Umfragen, keine operativen Aktivitätsdaten erforderlich.
            </p>
          </div>

          {/* BENEFIT 3 */}
          <div
            className="flex flex-col items-center gap-4"
            data-i18n="problem.point3.block"
          >
            <svg
              className="h-14 w-14 text-[#0B3A63]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm8.485-4.243l-4.95-4.95a1 1 0 00-1.414 0L4.343 12.586a1 1 0 000 1.414l4.95 4.95a1 1 0 001.414 0l9.778-9.778a1 1 0 000-1.414z"
              />
            </svg>
            <h3
              className="text-xl font-semibold text-[#0B3A63] dark:text-white"
              data-i18n="problem.point3.title"
            >
              Konsistent über alle Lieferanten hinweg
            </h3>
            <p
              className="text-sm text-gray-600 dark:text-gray-400 max-w-xs"
              data-i18n="problem.point3.text"
            >
              Eine identische Struktur ermöglicht den schnellen Vergleich von Anbietern
              und reduziert Unklarheiten sowie Prüfzeit.
            </p>
          </div>
        </div>

        {/* LINK */}
        <a
          href="#how-it-works"
          className="block mt-20 text-xs text-center text-[#0B3A63] hover:text-[#1FB6C1] underline"
          data-i18n="problem.link.how"
        >
          Wie der Nachweis erstellt wird →
        </a>
      </div>
    </section>
  );
        }
