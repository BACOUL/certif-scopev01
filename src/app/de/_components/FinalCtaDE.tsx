import Link from "next/link";

export function FinalCtaDE() {
  return (
    <section
      id="final-cta"
      data-section="final-cta"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-28"
      aria-label="Finaler Aufruf zur Aktion"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#F8FAFC_0%,#ffffff_100%)]" />
      <div className="absolute left-[-8%] top-16 -z-10 h-60 w-60 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
      <div className="absolute right-[-6%] bottom-10 -z-10 h-80 w-80 rounded-full bg-[#0B3A63]/6 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[30px] border border-[#0B3A63]/10 bg-white p-8 shadow-[0_25px_60px_rgba(11,58,99,0.10)] md:p-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#0B3A63]/70 md:text-sm">
                Schnelle Antwort — standardisiertes Format
              </p>

              <h2 className="text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
                Eine indikative CO2e-Bescheinigung erstellen, klar und prüfbar
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#0B3A63]/80">
                Wenn Ihre Anfrage Lieferanten-Screening, Ausschreibung, Bank- oder
                Versicherungsunterlagen betrifft, zählt ein lesbares, archivierbares
                und kohärentes Dokument: aggregiertes CO2e-Ergebnis, Jahr, deklarierte
                Methode, klare Grenzen und Prüflogik.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/de/erstellen/"
                  className="inline-flex items-center justify-center rounded-xl bg-[#1FB6C1] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63]"
                >
                  CO2e-Bescheinigung erstellen →
                </Link>

                <Link
                  href="/de/preise/"
                  className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63] px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
                >
                  Preis ansehen
                </Link>

                <Link
                  href="/de/co2-bescheinigung-kmu/"
                  className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63]/20 px-4 py-3 text-sm font-medium text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F8FAFC]"
                >
                  KMU-Seite lesen →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-[24px] border border-[#0B3A63]/10 bg-[#F8FAFC] p-6">
                <h3 className="mb-3 text-lg font-semibold text-[#0B3A63]">
                  Rahmen der Bescheinigung
                </h3>

                <ul className="ml-6 list-disc space-y-2 text-sm text-[#0B3A63]/80">
                  <li>indikative spend-based Schätzung</li>
                  <li>aggregiertes Ergebnis in tCO2e</li>
                  <li>standardisiertes und prüfbares Dokument</li>
                  <li>kein Audit, kein vollständiges THG-Inventar</li>
                  <li>kein CSRD-/ESRS-Reporting</li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/de/pruefen/"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/20 px-4 py-2 text-sm text-[#0B3A63] transition-colors hover:bg-white"
                  >
                    Prüfen →
                  </Link>

                  <Link
                    href="/de/datenschutz/"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/20 px-4 py-2 text-sm text-[#0B3A63] transition-colors hover:bg-white"
                  >
                    Datenschutz →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#main-content"
              className="inline-flex items-center justify-center rounded-lg border border-[#0B3A63]/20 px-4 py-2 text-sm text-[#0B3A63] transition-colors hover:bg-[#F8FAFC]"
            >
              Nach oben
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
