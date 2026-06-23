import type { Metadata } from "next";

/* ======================================================
   SEO METADATA - COOKIES
====================================================== */

export const metadata: Metadata = {
  title: "Cookie-Hinweise | Certif-Scope",
  description:
    "Cookie-Hinweise von Certif-Scope: begrenzte Nutzung streng notwendiger Cookies, keine Marketing-Cookies und keine verhaltensbezogenen Analytics.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/cookies/",
    languages: {
      de: "https://www.certif-scope.com/de/cookies/",
      fr: "https://www.certif-scope.com/fr/cookies/",
    },
  },
  openGraph: {
    title: "Cookie-Hinweise | Certif-Scope",
    description:
      "Cookie-Hinweise von Certif-Scope mit Fokus auf streng notwendige technische Cookies und ohne Marketingtracking.",
    url: "https://www.certif-scope.com/de/cookies/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

export default function CookieHinweisePageDE() {
  return (
    <section
      id="cookie-policy"
      data-section="cookie-policy"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Startseite",
                item: "https://www.certif-scope.com/de/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Cookies",
                item: "https://www.certif-scope.com/de/cookies/",
              },
            ],
          }),
        }}
      />

      {/* SEITENKOPF - KANONISCHE AUSRICHTUNG */}
      <header className="mb-14">
        <p
          className="uppercase text-xs tracking-wider text-[#64748B] mb-3"
        >
          Datenschutz & ePrivacy
        </p>

        <h1
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6"
        >
          Cookie-Hinweise
        </h1>

        <p
          className="text-lg text-gray-700 leading-relaxed max-w-3xl"
        >
          Diese Cookie-Hinweise erklaeren, wie Certif-Scope Cookies und
          aehnliche Technologien verwendet. Certif-Scope verfolgt einen strikten
          Ansatz der Datenminimierung und beruecksichtigt DSGVO-Grundsaetze
          sowie europaeische ePrivacy-Anforderungen.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* INHALT - KANONISCHE BREITE */}
      <div className="max-w-4xl mx-auto space-y-14">
        {/* SECTION 1 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Was Cookies sind
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Cookies sind kleine Textdateien, die beim Besuch einer Website auf
            Ihrem Geraet gespeichert werden. Sie werden typischerweise eingesetzt,
            um den wesentlichen Betrieb der Website, Sicherheitsmechanismen und
            grundlegende technische Praeferenzen zu ermoeglichen.
          </p>
        </section>

        {/* SECTION 2 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Nutzung von Cookies durch Certif-Scope
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Certif-Scope verwendet nur eine sehr begrenzte Zahl streng
            notwendiger Cookies fuer den technischen Betrieb und die Sicherheit
            der Website. Es werden keine Werbe-Cookies, Profiling-Cookies,
            seitenuebergreifenden Tracking-Cookies, verhaltensbezogenen
            Analytics-Cookies oder Marketing-Cookies eingesetzt.
          </p>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Cookie-Kategorien
          </h2>

          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Streng notwendige Cookies
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Diese Cookies sind fuer den ordnungsgemaessen Betrieb der Website
            erforderlich. Sie ermoeglichen insbesondere Sicherheitsfunktionen,
            Navigation und wesentliche technische Ablaeufe. Eine Deaktivierung
            kann die normale Funktion der Website beeintraechtigen.
          </p>

          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Analyse- und Tracking-Cookies
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Certif-Scope verwendet keine Analyse-Cookies, keine
            Reichweitenmessung und kein Tracking, das Nutzer identifiziert oder
            ihr Verhalten ueber verschiedene Websites hinweg auswertet.
          </p>
        </section>

        {/* SECTION 4 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Drittanbieter-Dienste
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Certif-Scope bindet keine Werbe- oder Tracking-Dienste ein.
            Drittanbieter-Dienste werden nur genutzt, wenn sie fuer den Betrieb
            des Dienstes erforderlich sind: Hosting und Deployment,
            Zahlungsabwicklung ueber Stripe, transaktionale E-Mails ueber
            Resend, technischer Status von Zugangsschluesseln und Paketguthaben
            ueber Cloudflare KV sowie technische PDF-Konvertierung ueber
            PDFShift.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Zahlungen werden von Stripe auf eigener Infrastruktur verarbeitet;
            Certif-Scope speichert keine Zahlungsdaten. PDFShift erhaelt nur die
            Informationen, die fuer die technische Erstellung der
            PDF-Bescheinigung erforderlich sind, wenn diese Konvertierung
            benoetigt wird. Diese Dienste werden von Certif-Scope nicht fuer
            Marketing, Werbung oder Verhaltensanalyse eingesetzt.
          </p>
        </section>

        {/* SECTION 5 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Aufbewahrungsdauer von Cookies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Die von Certif-Scope verwendeten Cookies sind hauptsaechlich
            Session-Cookies, die beim Schliessen des Browsers geloescht werden.
            Notwendige technische Cookies haben eine begrenzte Lebensdauer und
            werden nicht laenger aufbewahrt, als fuer den jeweiligen Zweck
            erforderlich ist.
          </p>
        </section>

        {/* SECTION 6 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Verwaltung von Cookies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Sie koennen Cookies ueber die Einstellungen Ihres Browsers steuern
            oder deaktivieren. Die Deaktivierung streng notwendiger Cookies kann
            jedoch die Verfuegbarkeit oder Funktion einzelner Teile der Website
            beeintraechtigen.
          </p>
        </section>

        {/* SECTION 7 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Aktualisierung dieser Hinweise
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Diese Cookie-Hinweise koennen aktualisiert werden, um rechtliche,
            technische oder betriebliche Entwicklungen abzubilden. Wesentliche
            Aenderungen werden auf dieser Seite veroeffentlicht.
          </p>
        </section>

        {/* SECTION 8 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            8. Kontakt
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Bei Fragen zu diesen Hinweisen koennen Sie uns kontaktieren:
            <br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>
      </div>
    </section>
  );
}
