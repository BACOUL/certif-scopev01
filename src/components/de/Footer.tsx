"use client";

import Link from "next/link";

export default function FooterDE() {
  return (
    <footer
      id="footer"
      role="contentinfo"
      data-section="footer"
      className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 pt-14 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRANDING */}
          <div>
            <h2 className="text-xl font-bold text-[#0B3A63] dark:text-gray-100 mb-4">
              Certif-Scope
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Ausgabenbasierter CO₂e-Nachweis für Beschaffung, Banken,
              Versicherungen und ESG-Screening. Standardisierte, konsistente und
              überprüfbare Dokumentation.
            </p>
          </div>

          {/* PRODUCT */}
          <nav aria-label="Produktnavigation">
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4">
              Produkt
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/product">Überblick</Link>
              </li>
              <li>
                <Link href="/product/methodology">Methodik</Link>
              </li>
              <li>
                <Link href="/product/compliance">Compliance & Umfang</Link>
              </li>
              <li>
                <Link href="/verify">Nachweis verifizieren</Link>
              </li>
            </ul>
          </nav>

          {/* COMPANY */}
          <nav aria-label="Unternehmensnavigation">
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4">
              Unternehmen
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/partners">Partnerschaften</Link>
              </li>
              <li>
                <Link href="/de/why-companies-ask">
                  Warum Unternehmen danach fragen
                </Link>
              </li>
              <li>
                <Link href="/contact">Kontakt</Link>
              </li>
            </ul>
          </nav>

          {/* LEGAL */}
          <nav aria-label="Rechtliches">
            <h3 className="text-lg font-semibold text-[#0B3A63] dark:text-gray-100 mb-4">
              Rechtliches
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/legal">Impressum / Rechtlicher Hinweis</Link>
              </li>
              <li>
                <Link href="/privacy">Datenschutzerklärung</Link>
              </li>
              <li>
                <Link href="/terms">Nutzungsbedingungen</Link>
              </li>
              <li>
                <Link href="/cookies">Cookie-Richtlinie</Link>
              </li>
              <li>
                <Link href="/data-processing">
                  Datenverarbeitung (Überblick)
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* DISCLAIMER */}
        <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
          Indikative CO₂e-Schätzung auf Ausgabenbasis. Nicht geprüft, nicht
          CSRD-/ESRS-konform, ohne Scopes 1–2 und kein Ersatz für ein
          vollständiges Treibhausgasinventar. Ergebnisse hängen vollständig von
          den angegebenen Daten ab.
        </div>

        {/* COPYRIGHT */}
        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Certif-Scope. Alle Rechte vorbehalten.
          </p>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
              logo: "https://www.certif-scope.com/logo.png",
            }),
          }}
        />
      </div>
    </footer>
  );
            }
