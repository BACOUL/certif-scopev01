import type { Metadata } from "next";

/* ======================================================
   SEO METADATA - KONTAKT
====================================================== */

export const metadata: Metadata = {
  title: "Kontakt - Certif-Scope",
  description:
    "Kontaktieren Sie Certif-Scope fuer Support, institutionelle Anfragen oder allgemeine Informationen zu CO2e-Bescheinigungen.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/kontakt/",
    languages: {
      de: "https://www.certif-scope.com/de/kontakt/",
      fr: "https://www.certif-scope.com/fr/contact/",
    },
  },
  openGraph: {
    title: "Kontakt - Certif-Scope",
    description:
      "Kontaktieren Sie Certif-Scope fuer Support, institutionelle Anfragen oder allgemeine Informationen zu CO2e-Bescheinigungen.",
    url: "https://www.certif-scope.com/de/kontakt/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

export default function KontaktPageDE() {
  return (
    <section
      id="contact"
      data-section="contact"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* SEITENKOPF - KANONISCHE AUSRICHTUNG */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Kontakt & Anfragen
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Kontakt
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Diese Seite enthaelt die offiziellen Kontaktinformationen von
          Certif-Scope, einschliesslich Support, institutionellen Anfragen und
          allgemeinen Fragen zu CO2e-Bescheinigungen und Methodik.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* INHALT - KANONISCHE BREITE */}
      <div className="max-w-4xl space-y-14">
        {/* SECTION 1 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Kontaktadressen
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope kann je nach Art Ihrer Anfrage ueber die folgenden
            offiziellen E-Mail-Adressen kontaktiert werden:
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>
              <strong>support@certif-scope.com</strong> - technischer Support,
              Erstellung von Bescheinigungen, Zugang und Nutzung
            </li>
            <li>
              <strong>contact@certif-scope.com</strong> - institutionelle,
              methodische oder allgemeine Anfragen
            </li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Bearbeitung von Anfragen
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Nachrichten werden ausschliesslich bearbeitet, um auf die erhaltene
            Anfrage zu antworten. Certif-Scope betreibt kein Ticketsystem und
            erstellt keine Nutzerkonten.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Austausch per E-Mail kann fuer betriebliche und Supportzwecke fuer
            einen begrenzten Zeitraum aufbewahrt werden, gemaess den
            Datenschutzhinweisen.
          </p>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Datenschutz
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Bitte senden Sie keine sensiblen personenbezogenen Daten und keine
            vertraulichen Finanzinformationen in Ihren Nachrichten.
            Certif-Scope verarbeitet nur die Informationen, die fuer die
            Bearbeitung Ihrer Anfrage erforderlich sind.
          </p>
        </section>
      </div>
    </section>
  );
}
