// PATH: src/components/de/Footer.tsx
"use client";

import Link from "next/link";

export default function FooterDE() {
  const year = new Date().getFullYear();

  const navLinkClass =
    "text-sm leading-relaxed text-[#64748B] transition-colors duration-300 hover:text-[#0B3A63]";
  const footerButtonBase =
    "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300";
  const footerCardClass =
    "rounded-[24px] border border-[#0B3A63]/10 bg-white p-6 shadow-sm";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      role="contentinfo"
      data-section="footer"
      className="relative overflow-hidden border-t border-[#0B3A63]/8 bg-[#F8FAFC] pt-20 pb-10"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#F8FAFC_0%,#ffffff_100%)]" />
      <div className="absolute left-[-8%] top-10 -z-10 h-56 w-56 rounded-full bg-[#1FB6C1]/6 blur-3xl" />
      <div className="absolute right-[-6%] bottom-0 -z-10 h-72 w-72 rounded-full bg-[#0B3A63]/6 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.15fr_0.95fr_0.95fr_0.95fr]">
          <div className="rounded-[28px] border border-[#0B3A63]/10 bg-white p-7 shadow-[0_18px_40px_rgba(11,58,99,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Certif-Scope Deutschland
            </p>

            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-[#0B3A63]">
              Indikative CO2e-Bescheinigung
              <br />
              zum Weitergeben
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-[#475569]">
              Ein spend-based CO2e-Dokument für Situationen, in denen Einkauf,
              Kunde, Bank, Versicherung oder Vergabe eine lesbare, standardisierte
              und schnell prüfbare Antwort anfordern.
            </p>

            <div className="mt-5 rounded-2xl border border-[#1FB6C1]/16 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                Hauptleitfaden
              </p>
              <Link
                href="/de/co2-bescheinigung-kmu/"
                className="mt-2 inline-flex text-sm font-semibold text-[#0B3A63] underline underline-offset-4 transition-colors hover:text-[#1FB6C1]"
                aria-label="CO2-Bescheinigung für KMU"
              >
                CO2-Bescheinigung für KMU →
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/de/erstellen/"
                className={`${footerButtonBase} bg-[#1FB6C1] text-white shadow-[0_12px_30px_rgba(31,182,193,0.20)] hover:-translate-y-0.5 hover:bg-[#19AAB4]`}
              >
                Erstellen →
              </Link>

              <Link
                href="/de/preise/"
                className={`${footerButtonBase} border border-[#0B3A63] bg-white text-[#0B3A63] hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white`}
              >
                Preise
              </Link>

              <Link
                href="/de/pruefen/"
                className={`${footerButtonBase} border border-[#0B3A63]/14 bg-white text-[#0B3A63] hover:-translate-y-0.5 hover:border-[#0B3A63] hover:bg-[#0B3A63] hover:text-white`}
              >
                Prüfen
              </Link>
            </div>
          </div>

          <nav aria-label="Produktnavigation" className={footerCardClass}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Produkt
            </p>

            <h3 className="mt-3 text-lg font-extrabold text-[#0B3A63]">
              Schnellzugriff
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link className={navLinkClass} href="/de/produkt/">
                  Überblick
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href="/de/co2-bescheinigung/">
                  CO2-Bescheinigung Unternehmen
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href="/de/co2-bescheinigung-kmu/">
                  CO2-Bescheinigung KMU
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href="/de/preise/">
                  Preise
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href="/de/erstellen/">
                  CO2e-Bescheinigung erstellen
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href="/de/pruefen/">
                  Dokument prüfen
                </Link>
              </li>
              <li className="pt-2">
                <Link className={navLinkClass} href="/de/grenzen-und-compliance/">
                  Grenzen &amp; Compliance
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href="/de/methodik/">
                  Methodik (spend-based)
                </Link>
              </li>
            </ul>
          </nav>

          <nav
            aria-label="Praxisfälle CO2e-Anfragen"
            className={footerCardClass}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Praxisfälle
            </p>

            <h3 className="mt-3 text-lg font-extrabold text-[#0B3A63]">
              Leitfäden Deutschland
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link className={navLinkClass} href="/de/co2-bilanz-kmu/">
                  KMU: CO2-Bilanz-Anfrage einordnen
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href="/de/co2-nachweis-lieferanten/">
                  CO2-Nachweis Lieferanten
                </Link>
              </li>
              <li>
                <Link
                  className={navLinkClass}
                  href="/de/co2-angaben-ausschreibung/"
                >
                  Ausschreibung: welche CO2-Angaben liefern
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href="/de/bank-esg-unterlagen-kmu/">
                  Bank ESG-Unterlagen KMU
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href="/de/versicherung-esg-unterlagen-kmu/">
                  Versicherung ESG-Unterlagen KMU
                </Link>
              </li>
              <li className="pt-2">
                <Link className={navLinkClass} href="/de/warum-unternehmen-co2-angaben-anfordern/">
                  Warum Unternehmen CO2-Angaben anfordern
                </Link>
              </li>
              <li>
                <Link
                  className={navLinkClass}
                  href="/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-ausschreibung/"
                >
                  Beispiel Ausschreibung
                </Link>
              </li>
            </ul>
          </nav>

          <nav
            aria-label="Unternehmen und Rechtliches"
            className={footerCardClass}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Unternehmen &amp; Rechtliches
            </p>

            <h3 className="mt-3 text-lg font-extrabold text-[#0B3A63]">
              Informationen
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link className={navLinkClass} href="/de/partner/">
                  Partnerschaften
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href="/de/kontakt/">
                  Kontakt
                </Link>
              </li>
              <li className="pt-2">
                <Link className={navLinkClass} href="/de/impressum/">
                  Impressum
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href="/de/datenschutz/">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href="/de/agb/">
                  AGB
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href="/de/cookies/">
                  Cookies
                </Link>
              </li>
              <li>
                <Link className={navLinkClass} href="/de/datenverarbeitung/">
                  Datenverarbeitung
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 rounded-[24px] border border-[#0B3A63]/10 bg-white/90 p-5 shadow-sm">
          <p className="text-center text-xs leading-relaxed text-[#64748B] md:text-sm">
            Indikative CO2e-Schätzung auf spend-based Grundlage. Kein Audit,
            keine Zertifizierung, kein CSRD-/ESRS-Bericht, ohne vollständige
            Scope-1-/2-/3-Erfassung und kein Ersatz für ein vollständiges
            THG-Inventar. Die Ergebnisse hängen von den Angaben des Nutzers ab.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-5 border-t border-[#0B3A63]/8 pt-8 md:flex-row md:justify-between">
          <p className="text-sm text-[#64748B]">
            © {year} Certif-Scope. Alle Rechte vorbehalten.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center justify-center rounded-xl border border-[#0B3A63] px-4 py-2.5 text-sm font-semibold text-[#0B3A63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] hover:text-white"
            aria-label="Zurück zum Seitenanfang"
          >
            ↑ Nach oben
          </button>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com/de/",
              logo: "https://www.certif-scope.com/logo.png",
            }),
          }}
        />
      </div>
    </footer>
  );
}
