// PATH: src/app/de/partner/page.tsx

import type { Metadata } from "next";

/* ======================================================
   SEO METADATA - PARTNER (DE)
   Temporary noindex while /de/* remains in staging per docs/localization/de-DE-runtime-seo-policy.md
====================================================== */

const pageUrl = "https://www.certif-scope.com/de/partner/";

export const metadata: Metadata = {
  title: "Partnerschaften & Packs - Certif-Scope",
  description:
    "Erfahren Sie, wie Partner Certif-Scope über vorausbezahlte Packs und Partner-Schlüssel nutzen, um CO2e-Bescheinigungen auf Anfrage zu erstellen, ohne API und ohne Integration.",
  alternates: {
    canonical: pageUrl,
    languages: {
      de: pageUrl,
    },
  },
  openGraph: {
    title: "Partnerschaften & Packs - Certif-Scope",
    description:
      "Partnermodell zur Erstellung von CO2e-Bescheinigungen über vorausbezahlte Packs und einen Partner-Schlüssel. Ohne API, ohne Konto, ohne Integration.",
    url: pageUrl,
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: false, follow: true },
};

function Section1DE() {
  return (
    <section
      id="partner-access-overview"
      data-section="partner-access-overview"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 via-[#1FB6C1]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          <span className="mr-2">1.</span>
          Überblick - Partnerzugang
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10">
          Der Certif-Scope Partnerzugang ist ein kontrolliertes Zugangsmodell für
          Organisationen, die standardisierte CO2e-Bescheinigungen in größerem
          Umfang anfordern, erstellen oder verteilen müssen. Er richtet sich an
          institutionelle Workflows, in denen ein konsistentes Umweltdokument von
          Dritten benötigt wird.
        </p>

        <p className="text-md text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10">
          Der Partnerzugang stellt keine ESG-Software, keine Datenplattform und
          kein Reporting-Tool bereit. Er liefert ein einfaches und prüfbares
          Bescheinigungsformat, das in Procurement-, Risiko- oder
          Compliance-nahe Prozesse eingebunden werden kann, ohne bestehende
          Systeme zu verändern.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-[#1FB6C1]/40 transition-all duration-300">
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">01</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Institutioneller Anwendungsfall
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Der Partnerzugang ist für Banken, Versicherer, größere Unternehmen
            und Einkaufsteams gedacht, die eine standardisierte CO2e-Dokumentation
            von Lieferanten, Kunden oder KMU in operativen Workflows benötigen.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#1FB6C1]/30 shadow-md hover:shadow-lg hover:border-[#1FB6C1]/50 transition-all duration-300">
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">02</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Standardisierte Ausgabe
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Alle über den Partnerzugang erstellten Bescheinigungen folgen einer
            festen Struktur, einer erklärten Methode und demselben
            Prüfformat. Das unterstützt konsistente Einreichungen und reduziert
            Reibung bei der Dokumentenprüfung.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-[#1FB6C1]/40 transition-all duration-300">
          <div className="text-[#1FB6C1] text-4xl font-bold mb-3">03</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Klarer Umfang und sichtbare Grenzen
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Der Partnerzugang stellt ausschließlich indikative, spend-based
            CO2e-Bescheinigungen bereit. Er führt keine externe Prüfung durch,
            speichert keine ESG-Datenplattform und ersetzt weder regulatorisches
            Reporting noch ISO-basierte Inventuren.
          </p>
        </div>
      </div>

      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Zurück zum Inhalt
        </a>
      </div>
    </section>
  );
}

function Section2DE() {
  return (
    <section
      id="packs-and-credits"
      data-section="packs-and-credits"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      <div className="relative p-12 rounded-2xl bg-[#F0FDFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/15 via-[#0B3A63]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          <span className="mr-2">2.</span>
          Packs &amp; Credits
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10">
          Der Partnerzugang zu Certif-Scope basiert auf einem Modell
          vorausbezahlter Credits. Partner kaufen Bescheinigungspacks im Voraus
          und verbrauchen Credits nur dann, wenn eine Bescheinigung erstellt wird.
        </p>

        <p className="text-md text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10">
          Dieser Ansatz ermöglicht planbare Kosten, klare Nutzungskontrolle und
          eine natürliche Einbindung in Einkaufs-, Finanz- und interne
          Freigabeprozesse. Es gibt kein Abonnement, keine wiederkehrenden Kosten
          und keine automatische Abrechnung.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-[#15B097]/40 transition-all duration-300">
          <div className="text-[#15B097] text-4xl font-bold mb-3">01</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Vorausbezahlte Credit-Packs
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Partner kaufen Credit-Packs im Voraus. Ein Credit entspricht einer
            erstellten CO2e-Bescheinigung, ohne versteckte Gebühren und ohne
            variablen Preis.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-md hover:shadow-lg hover:border-[#15B097]/50 transition-all duration-300">
          <div className="text-[#15B097] text-4xl font-bold mb-3">02</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Kontrollierte Nutzung
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Credits werden nur im Moment der Bescheinigungserstellung verbraucht.
            Prüfung, Ansicht und Weitergabe des Dokuments verbrauchen keine
            zusätzlichen Credits.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-[#15B097]/40 transition-all duration-300">
          <div className="text-[#15B097] text-4xl font-bold mb-3">03</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Einkaufsfreundliches Modell
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Vorauszahlung passt zu Unternehmenseinkauf, Budgetfreigabe und
            internen Genehmigungswegen, ohne langfristige vertragliche Bindung.
          </p>
        </div>
      </div>

      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Zurück zum Inhalt
        </a>
      </div>
    </section>
  );
}

function Section3DE() {
  return (
    <section
      id="partner-key-issuance"
      data-section="partner-key-issuance"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 via-[#15B097]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          <span className="mr-2">3.</span>
          Ausgabe des Partner-Schlüssels
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10">
          Ein Partner-Schlüssel wird ausgegeben, nachdem ein vorausbezahltes
          Bescheinigungspack erfolgreich gekauft wurde. Dieser Schlüssel erlaubt
          die Erstellung einer definierten Anzahl von CO2e-Bescheinigungen unter
          Verantwortung eines klar identifizierten Partners.
        </p>

        <p className="text-md text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10">
          Die Ausgabe des Schlüssels ist ein kontrollierter, einmaliger Vorgang.
          Sie erstellt keine Nutzerkonten, kein Dashboard, keine dauerhafte
          Sitzung und erfordert keine technische Integration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-[#15B097]/40 transition-all duration-300">
          <div className="text-[#15B097] text-4xl font-bold mb-3">01</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Nach Zahlungsbestätigung ausgegeben
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Der Partner-Schlüssel wird erst nach erfolgreichem Kauf eines
            vorausbezahlten Packs erstellt. Vor dem Kauf besteht kein Schlüssel.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-md hover:shadow-lg hover:border-[#15B097]/50 transition-all duration-300">
          <div className="text-[#15B097] text-4xl font-bold mb-3">02</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Per E-Mail übermittelt
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Der Partner-Schlüssel wird an die beim Kauf angegebene E-Mail-Adresse
            gesendet. Diese Adresse bezeichnet die für die Nutzung verantwortliche
            Partei.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-[#15B097]/40 transition-all duration-300">
          <div className="text-[#15B097] text-4xl font-bold mb-3">03</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Ein Schlüssel, eine verantwortliche Einheit
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Ein Partner-Schlüssel ist an eine Organisation und eine
            Kontaktadresse gebunden. Er wird nicht in Unterkonten aufgeteilt und
            nicht stillschweigend delegiert.
          </p>
        </div>
      </div>

      <div className="mt-20 p-10 bg-white rounded-xl border border-gray-200 shadow-md">
        <p className="text-gray-700 text-sm leading-relaxed max-w-4xl">
          Der Partner-Schlüssel definiert nur Autorisierungs- und
          Ausgaberechte. Erstellungsablauf, Credit-Verbrauch und
          Wiederherstellungsmechanismen werden in den folgenden Abschnitten
          beschrieben.
        </p>
      </div>

      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Zurück zum Inhalt
        </a>
      </div>
    </section>
  );
}

function Section4DE() {
  return (
    <section
      id="key-validity-and-usage-limits"
      data-section="key-validity-and-usage-limits"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-[#0B3A63]/15 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/8 via-[#15B097]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          <span className="mr-2">4.</span>
          Gültigkeit des Schlüssels &amp; Nutzungsgrenzen
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10">
          Der Partnerzugang wird durch klare Regeln zu Gültigkeit und Nutzung
          begrenzt. Dieser Abschnitt beschreibt die Aktivierungsdauer eines
          Partner-Schlüssels und die Grenzen für die Erstellung von
          Bescheinigungen im Zeitverlauf.
        </p>
      </div>

      <div className="mt-16 p-10 bg-white rounded-xl border border-gray-200 shadow-md max-w-4xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Gültigkeitsdauer des Schlüssels
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Jeder Partner-Schlüssel gilt für eine feste Dauer von{" "}
          <strong>zwölf (12) Monaten</strong> ab dem Ausgabedatum.
        </p>

        <p className="text-gray-700 text-sm leading-relaxed">
          Nach Ablauf dieses Zeitraums wird der Schlüssel deaktiviert und kann
          nicht mehr zur Erstellung neuer CO2e-Bescheinigungen verwendet werden.
        </p>
      </div>

      <div className="mt-16 p-10 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm max-w-4xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Nutzungsgrenzen und Credit-Verbrauch
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Der Partnerzugang funktioniert auf Basis vorausbezahlter Credits. Jede
          Erstellung einer Bescheinigung verbraucht genau{" "}
          <strong>einen Credit</strong>.
        </p>

        <p className="text-gray-700 text-sm leading-relaxed">
          Wenn alle Credits verbraucht sind, wird die Erstellung weiterer
          Bescheinigungen blockiert, auch wenn der Partner-Schlüssel noch in
          seiner Gültigkeitsdauer liegt.
        </p>
      </div>

      <div className="mt-16 p-10 bg-white rounded-xl border border-gray-200 shadow-md max-w-4xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Wirkung von Ablauf oder Verbrauch
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Der Ablauf eines Partner-Schlüssels oder der Verbrauch aller Credits
          betrifft nur die Möglichkeit, neue Bescheinigungen zu erstellen.
        </p>

        <p className="text-gray-700 text-sm leading-relaxed">
          Bereits erstellte Bescheinigungen bleiben unabhängig vom Status des
          Schlüssels weiterhin prüfbar und für die dokumentarische Ablage
          verfügbar.
        </p>
      </div>

      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Zurück zum Inhalt
        </a>
      </div>
    </section>
  );
}

function Section5DE() {
  return (
    <section
      id="recovery-and-security-model"
      data-section="recovery-and-security-model"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#15B097]/15 via-[#0B3A63]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          <span className="mr-2">5.</span>
          Wiederherstellungs- &amp; Sicherheitsmodell
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Die Sicherheit des Partnerzugangs ist bewusst explizit, minimal und
          prüfbar angelegt. Certif-Scope vermeidet Konten, Passwörter und
          Identitätssysteme. Die Zugriffskontrolle beruht auf Token, einer klaren
          Trennung von Rollen und deterministischen Widerrufsregeln.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="text-[#15B097] text-4xl font-bold mb-3">01</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Sicherheit durch reduzierten Umfang
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Es gibt keine Nutzerkonten, keine Passwörter und keine dauerhaften
            Sitzungen. Die Angriffsfläche wird bewusst auf einen
            Partner-Schlüssel mit begrenztem Umfang und begrenzter Laufzeit
            reduziert.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="text-[#15B097] text-4xl font-bold mb-3">02</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Trennung von Schlüssel &amp; Wiederherstellungstoken
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Der Partner-Schlüssel für die Erstellung und das
            Wiederherstellungstoken für eine Neu-Ausgabe sind getrennt. Sie
            werden in zwei separaten E-Mails gesendet und sind nicht
            austauschbar.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="text-[#15B097] text-4xl font-bold mb-3">03</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Kontrollierte Wiederherstellung
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Bei Verlust des Partner-Schlüssels kann ein neuer Schlüssel nur mit
            Wiederherstellungstoken und ursprünglicher E-Mail-Adresse ausgegeben
            werden. Der alte Schlüssel wird dabei widerrufen.
          </p>
        </div>
      </div>

      <div className="mt-20 p-10 bg-white rounded-xl border border-gray-200 shadow-md">
        <h3 className="text-xl font-bold text-[#0B3A63] mb-4">
          Institutionelle Sicherheitsgrundsätze
        </h3>

        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed max-w-4xl">
          <li>
            - Kein Zugriff auf Finanzdaten nach Erstellung der Bescheinigung.
          </li>
          <li>
            - Der Widerruf betrifft bereits ausgestellte Bescheinigungen nicht.
          </li>
          <li>
            - Die Prüfung bleibt auch nach Austausch des Schlüssels möglich.
          </li>
          <li>
            - Keine Abhängigkeit von externen Identitäts- oder
            Authentifizierungssystemen.
          </li>
        </ul>
      </div>

      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Zurück zum Inhalt
        </a>
      </div>
    </section>
  );
}

function Section6DE() {
  return (
    <section
      id="api-and-high-volume-access"
      data-section="api-and-high-volume-access"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-[#0B3A63]/15 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 via-[#64748B]/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          <span className="mr-2">6.</span>
          API &amp; Zugang für hohes Volumen (geplant)
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope ist so gedacht, dass es über Einzel- oder Kleinvolumen
          hinaus wachsen kann. Ein eigenes V2-Modell ist für Organisationen
          vorgesehen, die eine automatisierte Ausgabe und Prüfung von
          CO2e-Bescheinigungen in größerem Volumen benötigen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="text-[#64748B] text-4xl font-bold mb-3">01</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Institutionelle Nutzung in größerem Umfang
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Gedacht für Banken, Versicherer, größere Gruppen und
            Procurement-Plattformen, die viele Lieferanten- oder
            Kundenbescheinigungen über automatisierte Workflows verwalten.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#64748B]/30 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="text-[#64748B] text-4xl font-bold mb-3">02</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Kryptografisches Modell &amp; API (V2)
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Die V2 soll ein API-Modell mit einem privaten Schlüssel für die
            Ausgabe und einem öffentlichen Prüfschlüssel einführen.
            Bescheinigungen sollen auf einem internen Integritätsmechanismus
            (SHA-256) beruhen, damit großvolumige Prüfungen nachvollziehbar
            bleiben.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="text-[#64748B] text-4xl font-bold mb-3">03</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
            Für die V1 nicht erforderlich
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Diese Mechanismen sind in der V1 nicht aktiv und für Standard- oder
            KMU-Anwendungen nicht nötig. Das V1-Modell bleibt auf eine
            menschenlesbare Kennung gestützt und bewusst nicht technisch.
          </p>
        </div>
      </div>

      <div className="mt-20 p-10 bg-white rounded-xl border border-gray-200 shadow-md">
        <h3 className="text-xl font-bold text-[#0B3A63] mb-4">
          Roadmap-Transparenz &amp; aktueller Umfang
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed max-w-4xl">
          API-Zugang, Prüfschlüssel und automatisierte Batch-Workflows sind für
          eine spätere V2 vorgesehen. Daraus ergibt sich kein Zeitplan und keine
          Produktzusage. Dieser Abschnitt dokumentiert nur die geplante
          Entwicklungsrichtung für institutionelle Partner und vermeidet
          Missverständnisse über den aktuellen Umfang der V1.
        </p>
      </div>

      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Zurück zum Inhalt
        </a>
      </div>
    </section>
  );
}

export default function PartnerPageDE() {
  return (
    <section
      id="partners"
      data-section="partners"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Certif-Scope Partner",
            url: pageUrl,
            description:
              "Erklärung des Certif-Scope-Partnermodells über vorausbezahlte Packs und Partner-Schlüssel zur Erstellung von CO2e-Bescheinigungen.",
            isPartOf: {
              "@type": "WebSite",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com/de/",
            },
            inLanguage: "de-DE",
          }),
        }}
      />

      <div id="top" />

      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          CO2e-Bescheinigungen - Partner
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Partner - Packs & Modell mit Partner-Schlüssel
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Diese Seite erklärt, wie Partner Certif-Scope in V1 nutzen: Kauf
          vorausbezahlter Packs, Erhalt eines Partner-Schlüssels und Erstellung
          von CO2e-Bescheinigungen auf Anfrage. Ohne API, ohne Konto, ohne
          Integration.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      <nav
        aria-label="Partnerabschnitte"
        className="mb-16 max-w-4xl p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm"
      >
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#0B3A63] font-medium">
          <li>
            <a href="#s1" className="hover:text-[#15B097] transition">
              1. Überblick über das Partnermodell
            </a>
          </li>
          <li>
            <a href="#s2" className="hover:text-[#15B097] transition">
              2. Packs & Credits
            </a>
          </li>
          <li>
            <a href="#s3" className="hover:text-[#15B097] transition">
              3. Ausgabe des Partner-Schlüssels
            </a>
          </li>
          <li>
            <a href="#s4" className="hover:text-[#15B097] transition">
              4. Gültigkeit & Nutzungsgrenzen
            </a>
          </li>
          <li>
            <a href="#s5" className="hover:text-[#15B097] transition">
              5. Sicherheit & Wiederherstellung
            </a>
          </li>
          <li>
            <a href="#s6" className="hover:text-[#15B097] transition">
              6. API & hoher Umfang (geplant)
            </a>
          </li>
        </ul>
      </nav>

      <div className="max-w-4xl space-y-24">
        <div id="s1" className="scroll-mt-28">
          <Section1DE />
        </div>
        <div id="s2" className="scroll-mt-28">
          <Section2DE />
        </div>
        <div id="s3" className="scroll-mt-28">
          <Section3DE />
        </div>
        <div id="s4" className="scroll-mt-28">
          <Section4DE />
        </div>
        <div id="s5" className="scroll-mt-28">
          <Section5DE />
        </div>
        <div id="s6" className="scroll-mt-28">
          <Section6DE />
        </div>
      </div>
    </section>
  );
}
