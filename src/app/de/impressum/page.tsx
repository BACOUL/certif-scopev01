import type { Metadata } from "next";

/* ======================================================
   SEO METADATA - IMPRESSUM
   Temporary noindex while /de/* remains in staging per docs/localization/de-DE-runtime-seo-policy.md
====================================================== */

export const metadata: Metadata = {
  title: "Impressum | Certif-Scope",
  description:
    "Rechtliche Angaben zu Herausgeber, Hosting, geistigem Eigentum, Haftungsgrenzen und Datenverarbeitungsgrundsaetzen von Certif-Scope.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/impressum/",
    languages: {
      de: "https://www.certif-scope.com/de/impressum/",
    },
  },
  openGraph: {
    title: "Impressum | Certif-Scope",
    description:
      "Rechtliche Angaben zu Herausgeber, Hosting, Haftungsgrenzen und Datenverarbeitungsgrundsaetzen von Certif-Scope.",
    url: "https://www.certif-scope.com/de/impressum/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: false, follow: true },
};

/* ======================================================
   PAGE
====================================================== */

export default function ImpressumPageDE() {
  return (
    <section
      id="legal"
      data-section="legal"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD - WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Impressum",
            url: "https://www.certif-scope.com/de/impressum/",
            description:
              "Impressum und rechtliche Angaben zum Herausgeber und zum rechtlichen Rahmen von Certif-Scope.",
            isPartOf: {
              "@type": "WebSite",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
            },
            inLanguage: "de-DE",
          }),
        }}
      />

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
                name: "Impressum",
                item: "https://www.certif-scope.com/de/impressum/",
              },
            ],
          }),
        }}
      />

      {/* SEITENKOPF */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Rechtliche Angaben
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Impressum
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Rechtliche Angaben zum Herausgeber der Website, zum Hosting, zum
          geistigen Eigentum, zu Haftungsgrenzen und zu den
          Datenverarbeitungsgrundsaetzen von Certif-Scope.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* INHALT */}
      <div className="max-w-4xl mx-auto space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Angaben zum Herausgeber
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Diese Website wird von folgendem Einzelunternehmer betrieben:
          </p>

          <ul className="text-gray-700 space-y-2 text-sm leading-relaxed">
            <li><strong>Name:</strong> Jeason Alexandre Bacoul</li>
            <li><strong>Handelsname:</strong> TimeProofs</li>
            <li><strong>Rechtsform:</strong> Einzelunternehmer (Frankreich)</li>
            <li><strong>SIREN:</strong> 999356439</li>
            <li>
              <strong>Adresse:</strong> 3 rue de l'Eglise de Louppy,
              55000 Les Hauts-de-Chee, Frankreich
            </li>
            <li>
              <strong>Umsatzsteuerregelung:</strong> franzoesische
              Kleinunternehmerregelung (Umsatzsteuer nicht anwendbar)
            </li>
            <li><strong>Kontakt-E-Mail:</strong> contact@certif-scope.com</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Verantwortlicher fuer die Veroeffentlichung
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Verantwortlicher fuer die Veroeffentlichung und rechtlicher Vertreter
            der Website ist Jeason Alexandre Bacoul.
            <br />
            Kontakt: <strong>contact@certif-scope.com</strong>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Hosting
          </h2>

          <p className="text-gray-700 leading-relaxed mb-2">
            Die Website wird gehostet von:
          </p>

          <p className="text-gray-700 leading-relaxed">
            Vercel Inc.<br />
            440 N Barranca Ave #4133<br />
            Covina, CA 91723<br />
            Vereinigte Staaten
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Geistiges Eigentum
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Saemtliche Inhalte dieser Website, einschliesslich Texte, Struktur,
            Design, visuelle Identitaet und Code, sind durch die jeweils
            anwendbaren Vorschriften zum geistigen Eigentum geschuetzt. Jede
            Vervielfaeltigung, Aenderung oder Weiterverbreitung ohne vorherige
            schriftliche Zustimmung ist untersagt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Haftungsbegrenzung
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope stellt deterministische CO2e-Berechnungen auf Grundlage
            von Ausgaben bereit, die vom Nutzer angegeben werden. Der Betreiber
            haftet nicht fuer:
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-2 text-sm">
            <li>unrichtige, unvollstaendige oder irrefuehrende Angaben der Nutzer</li>
            <li>die Auslegung oder Nutzung von Bescheinigungen durch Dritte</li>
            <li>Entscheidungen von Beschaffungs-, Finanz- oder sonstigen Stellen</li>
            <li>jede Nutzung ausserhalb des indikativen und nicht regulatorischen Rahmens</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-4">
            Certif-Scope-Bescheinigungen sind indikative Schaetzungen auf
            Grundlage einer spend-based Methode. Sie sind weder CSRD- oder
            ESRS-Berichte noch fachliche Treibhausgas-Pruefungen oder regulatorische
            Emissionsinventare.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Speicherung und Datenverarbeitung
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Certif-Scope folgt einem privacy-by-design-Modell und arbeitet ohne
            dauerhafte Speicherung der Eingabedaten. Vom Nutzer eingegebene
            Finanzdaten werden voruebergehend im Arbeitsspeicher fuer die
            Berechnung verarbeitet und nicht in Datenbanken gespeichert. Die
            Pruefmechanismen beruhen nicht auf einer Speicherung von Dokumenten
            oder auf Nutzerkonten.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Meldung von Missbrauch oder technischen Problemen
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Zur Meldung rechtswidriger Inhalte, missbraeuchlicher Nutzung des
            Dienstes oder technischer Probleme wenden Sie sich bitte an:
            <br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>
      </div>
    </section>
  );
}
