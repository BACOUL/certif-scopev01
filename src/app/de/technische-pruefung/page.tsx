import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technische PDF-Prüfung CO₂e | Certif-Scope Deutschland",
  description:
    "Technische Dokumentation zur Prüfung der Echtheit und Integrität einer Certif-Scope CO₂e-Bescheinigung, einschließlich signiertem PDF, öffentlichem Prüfschlüssel und Offline-Verfahren.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/technische-pruefung/",
    languages: {
      de: "https://www.certif-scope.com/de/technische-pruefung/",
    },
  },
  openGraph: {
    title: "Technische PDF-Prüfung CO₂e | Certif-Scope Deutschland",
    description:
      "Technischer Leitfaden zur Prüfung der Echtheit und dokumentarischen Integrität von Certif-Scope CO₂e-Bescheinigungen.",
    url: "https://www.certif-scope.com/de/technische-pruefung/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: false, follow: true },
};

function Section1() {
  return (
    <section
      id="verification-model"
      data-section="verification-model"
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] mb-4">
          1. Überblick über das Prüfmodell
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Dieser Abschnitt beschreibt das Prüfmodell von Certif-Scope. Er
          erklärt, was eine CO₂e-Bescheinigung ist, wie Vertrauen hergestellt
          wird und warum die technische Prüfung unabhängig, offline und ohne
          externen Dienst möglich ist.
        </p>
      </header>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Eine Certif-Scope CO₂e-Bescheinigung wird als{" "}
          <strong>digital signiertes PDF-Dokument</strong> ausgestellt. Dieses
          PDF ist das zentrale Prüfobjekt. Es wird kein Online-Register, keine
          API, keine Blockchain und keine externe Datenbank benötigt.
        </p>

        <p>
          Die Prüfung beruht auf einer{" "}
          <strong>deterministischen kryptografischen Signatur</strong>, die bei
          der Ausstellung erzeugt wird. Jede Änderung am Dokument, selbst auf
          Byte-Ebene, führt dazu, dass die Signatur nicht mehr zur geprüften
          Nutzlast passt.
        </p>

        <p>
          Das Prüfmodell vermeidet nach der Ausstellung bewusst eine Abhängigkeit
          von Certif-Scope-Infrastruktur. Dadurch gilt:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Das Dokument bleibt prüfbar, auch wenn Certif-Scope zeitweise nicht
            erreichbar ist.
          </li>
          <li>Die Prüfung kann offline durchgeführt werden.</li>
          <li>
            Es müssen keine personenbezogenen oder finanziellen Daten abgefragt
            werden.
          </li>
          <li>
            Dritte benötigen kein Konto und keine besondere Autorisierung.
          </li>
        </ul>

        <p>
          Vertrauen wird über einen{" "}
          <strong>eindeutigen öffentlichen Prüfschlüssel</strong> hergestellt,
          den Certif-Scope veröffentlicht. Dieser Schlüssel ermöglicht es jeder
          empfangenden Stelle zu prüfen, ob:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>die Bescheinigung von Certif-Scope ausgestellt wurde,</li>
          <li>der Inhalt seit der Ausstellung nicht verändert wurde,</li>
          <li>
            die Dokument-ID mit der signierten technischen Nutzlast
            übereinstimmt.
          </li>
        </ul>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            <strong>Wichtig:</strong> Die technische Prüfung bestätigt die{" "}
            <strong>Echtheit und Integrität</strong> des Dokuments. Sie prüft
            nicht die wirtschaftlichen Eingabedaten des Nutzers und ist keine
            externe fachliche Prüfung, keine Assurance-Leistung und keine
            Bewertung regulatorischer Anerkennung.
          </p>
        </div>
      </div>
    </section>
  );
}

function Section2() {
  return (
    <section
      id="cryptographic-foundations"
      data-section="cryptographic-foundations"
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] mb-4">
          2. Kryptografische Grundlagen
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Dieser Abschnitt beschreibt die kryptografischen Bausteine, mit denen
          Certif-Scope-Bescheinigungen abgesichert werden. Er erklärt die
          eingesetzten Algorithmen, ihre Rolle in der Prüfung und die Gründe für
          ihre Auswahl.
        </p>
      </header>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Jede Certif-Scope-Bescheinigung wird durch{" "}
          <strong>asymmetrische Kryptografie</strong> geschützt. Der Aussteller
          signiert das Dokument mit einem privaten Schlüssel, während Dritte die
          Signatur mit dem passenden öffentlichen Schlüssel prüfen können.
        </p>

        <p>
          Das kryptografische Modell ist bewusst einfach, deterministisch und auf
          breit etablierten Standards aufgebaut. Ziel sind langfristige
          Prüfbarkeit und eine robuste Interoperabilität.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Eingesetzte Algorithmen
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Hash-Funktion:</strong> SHA-256, um aus der kanonischen
            Nutzlast einen Fingerprint fester Länge zu erzeugen.
          </li>
          <li>
            <strong>Signaturalgorithmus:</strong> Ed25519, um den Fingerprint zu
            signieren und Echtheit sowie Integrität zu prüfen.
          </li>
          <li>
            <strong>Codierung:</strong> Base64 für die Darstellung des
            öffentlichen Schlüssels und der Signatur.
          </li>
        </ul>

        <p>Diese Algorithmen wurden gewählt, weil sie:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>kryptografisch belastbar und breit geprüft sind,</li>
          <li>effizient und für eine Offline-Prüfung geeignet sind,</li>
          <li>von gängigen Kryptografie-Bibliotheken unterstützt werden,</li>
          <li>stabil sind und nicht kurzfristig als überholt gelten.</li>
        </ul>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Deterministisches Signaturmodell
        </h3>

        <p>
          Certif-Scope verwendet einen deterministischen Signaturansatz. Eine
          identische kanonische Nutzlast erzeugt denselben Fingerprint und dieselbe
          Dokument-ID. Dadurch wird die Prüfung reproduzierbar und unabhängig von
          serverseitigem Zustand.
        </p>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            <strong>Sicherheitshinweis:</strong> Der private Signaturschlüssel
            wird nicht in das PDF eingebettet, nicht übertragen und nicht
            offengelegt. Für die Prüfung werden nur die erzeugte Signatur und der
            öffentliche Prüfschlüssel benötigt.
          </p>
        </div>

        <p>
          Die kryptografische Ebene stellt sicher, dass Änderungen am signierten
          Inhalt des Dokuments, einschließlich Daten, Metadaten oder
          signaturrelevanter Formatierung, bei der Prüfung sichtbar werden.
        </p>
      </div>
    </section>
  );
}

function Section3() {
  return (
    <section
      id="signed-data-structure"
      data-section="signed-data-structure"
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] mb-4">
          3. Struktur der signierten Daten
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Dieser Abschnitt definiert, welche Daten in einer
          Certif-Scope-Bescheinigung kryptografisch signiert werden. Das
          Verständnis dieser Struktur ist entscheidend, um Integrität und
          Echtheit des Dokuments korrekt zu prüfen.
        </p>
      </header>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Certif-Scope signiert nicht beliebig das gesamte PDF. Signiert wird
          eine <strong>kanonische Nutzlast</strong>: eine streng definierte und
          normalisierte Datenstruktur, die aus dem Inhalt der Bescheinigung
          abgeleitet wird.
        </p>

        <p>
          Dieser Ansatz ermöglicht eine deterministische Prüfung, unabhängig von
          Unterschieden in PDF-Renderern, Plattformen oder Programmiersprachen.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Definition der kanonischen Nutzlast
        </h3>

        <p>
          Die kanonische Nutzlast ist ein JSON-Objekt mit festen Schlüsseln,
          fester Reihenfolge und normalisierten Werten. Jede Änderung an
          Struktur, Reihenfolge oder Wertformat erzeugt einen anderen
          Fingerprint und macht die Signaturprüfung negativ.
        </p>

        <pre className="bg-white border border-gray-300 rounded-md p-4 text-sm overflow-x-auto text-gray-800">
{`{
  "issuer": "Certif-Scope",
  "standard": "CS-SB-v1",
  "attestationId": "CS-2026-XXXXXXXX",
  "companyName": "Example Company",
  "country": "DE",
  "year": "2026",
  "totalCO2e": "15.2",
  "issuedDate": "2026-01-25T14:32:10.000Z"
}`}
        </pre>

        <p>
          Alle Werte werden in der kanonischen Nutzlast als Zeichenketten
          behandelt, auch numerische Werte. Das vermeidet Mehrdeutigkeiten durch
          Gleitkommazahlen oder regionale Zahlenformate.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Hash-Prozess
        </h3>

        <p>
          Die kanonische Nutzlast wird in UTF-8 serialisiert und anschließend mit
          SHA-256 gehasht. Der resultierende Fingerprint beschreibt den exakten
          Zustand der signierten Daten.
        </p>

        <p>Jede Änderung an:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Feldwerten,</li>
          <li>Feldnamen,</li>
          <li>Feldreihenfolge,</li>
          <li>Leerzeichen oder Codierung,</li>
        </ul>

        <p>
          erzeugt einen abweichenden Fingerprint und lässt die
          Signaturprüfung scheitern.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Beziehung zum PDF-Dokument
        </h3>

        <p>
          Die signierte Nutzlast entspricht sichtbaren Feldern des PDF-Dokuments:
          Aussteller, Unternehmen, Jahr, CO₂e-Gesamtwert, Dokument-ID und
          Ausstellungsdatum.
        </p>

        <p>
          Visuelle Elemente, Layout, Schriftarten oder nicht signierte
          Erläuterungstexte gehören nicht zur kanonischen Nutzlast und
          beeinflussen die Prüfung nicht, solange die signierten Daten unverändert
          bleiben.
        </p>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            <strong>Wichtig:</strong> Die Dokument-ID wird aus dem
            kryptografischen Fingerprint der kanonischen Nutzlast abgeleitet.
            Jede Abweichung zwischen sichtbarer ID und signierten Daten weist auf
            eine Veränderung oder eine ungültige Bescheinigung hin.
          </p>
        </div>

        <p>
          Die klare Trennung zwischen signierten Daten und ihrer Darstellung
          schützt die langfristige Prüfbarkeit, auch wenn PDF-Renderer oder
          Layouts sich im Laufe der Zeit ändern.
        </p>
      </div>
    </section>
  );
}

function Section4() {
  return (
    <section
      id="public-key-and-trust"
      data-section="public-key-and-trust"
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] mb-4">
          4. Öffentlicher Schlüssel und Vertrauensmodell
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Dieser Abschnitt erklärt, wie Vertrauen in Certif-Scope-Bescheinigungen
          hergestellt wird und wie der öffentliche Prüfschlüssel eine
          Echtheitsprüfung ohne Online-Dienst ermöglicht.
        </p>
      </header>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Certif-Scope verwendet ein{" "}
          <strong>asymmetrisches kryptografisches Modell</strong> auf Basis des
          digitalen Signaturalgorithmus Ed25519.
        </p>

        <p>
          In diesem Modell werden Bescheinigungen mit einem{" "}
          <strong>privaten Schlüssel</strong> signiert, den ausschließlich
          Certif-Scope kontrolliert. Die Prüfung erfolgt mit dem zugehörigen{" "}
          <strong>öffentlichen Schlüssel</strong>, der frei verteilt werden kann.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Rolle des öffentlichen Schlüssels
        </h3>

        <p>Der öffentliche Schlüssel ermöglicht Dritten zu prüfen, dass:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>die Bescheinigung von Certif-Scope ausgestellt wurde,</li>
          <li>
            die signierten Daten seit der Ausstellung nicht verändert wurden,
          </li>
          <li>die Signatur exakt zur signierten Nutzlast passt.</li>
        </ul>

        <p>
          Der öffentliche Schlüssel kann <strong>keine</strong> neuen
          Bescheinigungen erzeugen und keine Signaturen erstellen. Er dient
          ausschließlich der Prüfung.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Beständigkeit des Schlüssels und Kontinuität
        </h3>

        <p>
          Certif-Scope arbeitet mit einem{" "}
          <strong>eindeutigen und langfristigen öffentlichen Prüfschlüssel</strong>.
          Dieser Schlüssel ist:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>öffentlich zugänglich,</li>
          <li>für bereits ausgestellte Bescheinigungen nicht stillschweigend ersetzt,</li>
          <li>für Offline-Prüfungen und spätere Kontrollen nutzbar.</li>
        </ul>

        <p>
          Nach der Ausstellung hängt die Prüfbarkeit einer Bescheinigung nicht
          mehr vom laufenden Betrieb von Servern, APIs oder Datenbanken von
          Certif-Scope ab.
        </p>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            <strong>Gestaltungsprinzip:</strong> Eine empfangende Stelle soll eine
            Bescheinigung auch Jahre nach der Ausstellung mit dem PDF und dem
            öffentlichen Schlüssel prüfen können.
          </p>
        </div>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Herstellung von Vertrauen
        </h3>

        <p>
          Vertrauen in eine Certif-Scope-Bescheinigung beruht auf:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>dem initialen Vertrauen in Certif-Scope als Aussteller,</li>
          <li>der unabhängigen Signaturprüfung mit dem öffentlichen Schlüssel,</li>
          <li>
            der Kohärenz zwischen den signierten Daten und den sichtbaren
            Dokumentinformationen.
          </li>
        </ul>

        <p>
          Certif-Scope betreibt keine Certificate Authority, kein öffentliches
          Register und keine Widerrufsliste. Das Modell ist bewusst einfach und
          transparent.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Was der öffentliche Schlüssel nicht bestätigt
        </h3>

        <p>
          Wichtig ist die Trennung zwischen{" "}
          <strong>technischer Echtheit</strong> und{" "}
          <strong>inhaltlicher Bewertung</strong>.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Der öffentliche Schlüssel prüft die Integrität des Dokuments.</li>
          <li>Er bestätigt nicht die Richtigkeit der Eingabedaten.</li>
          <li>Er bestätigt keine regulatorische Anerkennung.</li>
          <li>Er ersetzt keine externe fachliche Prüfung oder Assurance-Leistung.</li>
        </ul>

        <p>
          Diese Grenzen sind ausdrücklich gewollt, damit der Prüfmechanismus
          robust, nachvollziehbar und klar abgegrenzt bleibt.
        </p>
      </div>
    </section>
  );
}

function Section5() {
  return (
    <section
      id="verification-scope"
      data-section="verification-scope"
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] mb-4">
          5. Was geprüft wird und was nicht
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Dieser Abschnitt definiert den Umfang der technischen Prüfung einer
          Certif-Scope CO₂e-Bescheinigung. Er grenzt ab, was die
          kryptografische Prüfung bestätigt und was bewusst nicht abgedeckt ist.
        </p>
      </header>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Kryptografisch geprüfte Elemente
        </h3>

        <p>
          Bei einer Prüfung mit öffentlichem Schlüssel und digitaler Signatur
          werden die folgenden Elemente streng technisch geprüft:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Dokumentintegrität:</strong> Der relevante signierte Inhalt
            des PDF wurde seit der Signatur nicht verändert.
          </li>
          <li>
            <strong>Echtheit des Ausstellers:</strong> Die Bescheinigung wurde
            mit dem privaten Schlüssel von Certif-Scope ausgestellt.
          </li>
          <li>
            <strong>Datenkohärenz:</strong> Die signierte Nutzlast passt zu den
            sichtbaren Angaben im Dokument, etwa Unternehmen, Jahr, CO₂e-Wert,
            Dokument-ID und Ausstellungsdatum.
          </li>
          <li>
            <strong>Dokument-ID:</strong> Die ID ist kryptografisch mit den
            signierten Daten verbunden.
          </li>
        </ul>

        <p>
          Diese Aussagen sind objektiv, reproduzierbar und unabhängig von
          Online-Systemen oder Datenbanken.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Nicht geprüfte Elemente
        </h3>

        <p>
          Der Prüfprozess bewertet bewusst <strong>nicht</strong> die folgenden
          Punkte:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Richtigkeit oder Vollständigkeit der eingegebenen Finanzdaten,</li>
          <li>Gültigkeit der angegebenen Tätigkeit oder Branche,</li>
          <li>Vollständigkeit der Emissionsquellen,</li>
          <li>regulatorische CSRD-/ESRS-Berichterstattung oder andere Pflichten,</li>
          <li>Kohärenz mit Scope-1-, Scope-2- oder Scope-3-Inventaren,</li>
          <li>Vorliegen einer externen fachlichen Prüfung oder Assurance-Leistung.</li>
        </ul>

        <p>
          Diese Ausschlüsse sind keine technischen Lücken, sondern bewusste
          funktionale Grenzen entsprechend dem vorgesehenen Einsatz der
          Bescheinigung.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Indikativer und nicht regulatorischer Charakter
        </h3>

        <p>
          Certif-Scope-Bescheinigungen sind eine{" "}
          <strong>indikative, ausgabenbasierte CO₂e-Schätzung</strong>. Sie sind
          für standardisierte Informationsanfragen gedacht und ersetzen keine
          regulatorische Berichterstattung und kein vollständiges
          Treibhausgasinventar.
        </p>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            <strong>Wichtige Abgrenzung:</strong> Eine Bescheinigung kann
            technisch echt und prüfbar sein und zugleich nicht regulatorisch
            anerkannt und nicht extern fachlich geprüft sein. Diese Ebenen müssen
            getrennt bleiben.
          </p>
        </div>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-6">
          Warum diese Grenzen bestehen
        </h3>

        <p>
          Ein klarer Prüfumfang hilft dabei:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>eine objektive und reproduzierbare Prüfung zu ermöglichen,</li>
          <li>implizite regulatorische Schlussfolgerungen zu vermeiden,</li>
          <li>Fehlinterpretationen durch Dritte zu begrenzen,</li>
          <li>
            eine sichere Nutzung in Beschaffung, Due Diligence und einfachen
            Dokumentationsprozessen zu unterstützen.
          </li>
        </ul>

        <p>
          Diese Abgrenzung ist zentral für institutionelle Nachvollziehbarkeit
          und langfristiges Vertrauen.
        </p>
      </div>
    </section>
  );
}

function Section6() {
  return (
    <section
      id="verification-workflows"
      data-section="verification-workflows"
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] mb-4">
          6. Prüfabläufe
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Dieser Abschnitt beschreibt praktische Prüfabläufe für unterschiedliche
          Nutzergruppen. Alle stützen sich auf dieselben kryptografischen
          Grundlagen, unterscheiden sich aber in Werkzeugen und technischer Tiefe.
        </p>
      </header>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Überblick über die Prüfmodi
        </h3>

        <p>
          Certif-Scope unterstützt mehrere Prüfmodi, damit sowohl nicht
          technische Empfänger als auch Institutionen und technische Teams mit
          dem Dokument arbeiten können.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Standardprüfung im PDF-Reader</strong> für Einkauf, Banken,
            Versicherungen und Dossierprüfung.
          </li>
          <li>
            <strong>Manuelle kryptografische Prüfung</strong> für technische
            Prüfer und Sicherheitsteams.
          </li>
          <li>
            <strong>Automatisierte oder skriptbasierte Prüfung</strong> für
            Entwickler und interne Kontrollsysteme.
          </li>
        </ul>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-8">
          Ablauf A — Standardprüfung der PDF-Signatur
        </h3>

        <p>
          Dieser Ablauf ist für die meisten Empfänger einer Bescheinigung
          vorgesehen.
        </p>

        <ol className="list-decimal pl-6 space-y-2">
          <li>PDF-Datei in einem gängigen PDF-Reader öffnen.</li>
          <li>Signatur- oder Sicherheitsbereich des Readers aufrufen.</li>
          <li>Digitale Signatur prüfen.</li>
          <li>
            Kontrollieren, dass das Dokument als signiert und unverändert
            angezeigt wird.
          </li>
        </ol>

        <p>
          Der PDF-Reader führt die kryptografischen Kontrollen anhand der
          eingebetteten Signatur und der Schlüsselinformationen durch.
        </p>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            Dieser Ablauf kann ausreichen, um Echtheit und Integrität des
            Dokuments in Beschaffungs-, Bank-, Versicherungs- oder
            Due-Diligence-Kontexten zu dokumentieren.
          </p>
        </div>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-8">
          Ablauf B — Manuelle kryptografische Prüfung
        </h3>

        <p>
          Dieser Ablauf richtet sich an fortgeschrittene Nutzer, die den
          Prüfprozess ausdrücklich nachvollziehen möchten.
        </p>

        <p>Typische Schritte:</p>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Signierte Nutzlast aus dem PDF extrahieren.</li>
          <li>Digitale Signatur extrahieren.</li>
          <li>Hash der kanonischen Nutzlast erneut berechnen.</li>
          <li>Ed25519-Signatur mit dem öffentlichen Schlüssel prüfen.</li>
        </ol>

        <p>
          Dieser Prozess ist vollständig offline und auf verschiedenen
          Plattformen reproduzierbar.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-8">
          Ablauf C — Automatisierte oder skriptbasierte Prüfung
        </h3>

        <p>
          Organisationen, die viele Bescheinigungen bearbeiten, können die
          Prüfung über Skripte oder interne Werkzeuge automatisieren.
        </p>

        <p>Wichtige Eigenschaften:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>keine Abhängigkeit von Certif-Scope-Servern,</li>
          <li>Prüfung mehrerer Dokumente möglich,</li>
          <li>deterministische Ergebnisse,</li>
          <li>
            Integration in interne Kontroll- oder Dokumentationsprozesse möglich.
          </li>
        </ul>

        <p>
          Beispielhafte Umsetzungen mit Python, Node.js und Kommandozeile werden
          im nächsten Abschnitt beschrieben.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63] mt-8">
          Warum mehrere Abläufe unterstützt werden
        </h3>

        <p>
          Die parallele Unterstützung mehrerer Prüfmodi ermöglicht:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>eine einfache Prüfung für nicht technische Nutzer,</li>
          <li>eine detaillierte Kontrolle für Institutionen,</li>
          <li>technische Integration ohne Anbieterabhängigkeit,</li>
          <li>
            Prüfung auch ohne verfügbare Certif-Scope-Infrastruktur.
          </li>
        </ul>

        <p>
          Alle Abläufe beruhen auf derselben kryptografischen Grundlage. Nur
          Werkzeuge und Benutzeroberfläche unterscheiden sich.
        </p>
      </div>
    </section>
  );
}

function Section7() {
  return (
    <section
      id="step-by-step-verification"
      data-section="step-by-step-verification"
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] mb-4">
          7. Prüfung Schritt für Schritt (CLI & Code)
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Dieser Abschnitt enthält konkrete, reproduzierbare Hinweise zur
          Prüfung einer Certif-Scope-Bescheinigung mit Kommandozeilenwerkzeugen
          und Codebeispielen. Er richtet sich an technische Prüfer, Entwickler
          und interne Kontrollteams.
        </p>
      </header>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <h3 className="text-xl font-bold text-[#0B3A63]">Voraussetzungen</h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>das originale PDF der Bescheinigung,</li>
          <li>Zugriff auf ein Terminal unter Linux, macOS, Windows oder Termux,</li>
          <li>Standard-Kryptografiewerkzeuge wie OpenSSL oder gleichwertige Tools,</li>
          <li>den öffentlichen Certif-Scope-Prüfschlüssel.</li>
        </ul>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            Alle Schritte können offline durchgeführt werden. Es ist kein
            Netzwerkzugriff auf Certif-Scope-Systeme erforderlich.
          </p>
        </div>

        <h3 className="text-xl font-bold text-[#0B3A63]">
          Schritt 1 — Originales PDF verwenden
        </h3>

        <p>
          Arbeiten Sie mit dem PDF in der ursprünglichen Form, in der es
          ausgestellt wurde. Jede Änderung, erneute Speicherung, Optimierung oder
          Konvertierung kann die Signaturprüfung beeinflussen.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63]">
          Schritt 2 — Prüfung mit einem PDF-Reader
        </h3>

        <p>
          Öffnen Sie das PDF in einem Reader, der digitale Signaturen unterstützt,
          zum Beispiel Adobe Acrobat oder Foxit.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Signatur- oder Sicherheitsbereich öffnen,</li>
          <li>bestätigen, dass das Dokument als signiert angezeigt wird,</li>
          <li>prüfen, ob der Signaturstatus als gültig angezeigt wird.</li>
        </ul>

        <p>
          Dieser Schritt bestätigt, soweit vom PDF-Reader unterstützt, die
          Echtheit des Ausstellers und die Integrität des unveränderten Inhalts.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63]">
          Schritt 3 — Integritätskontrolle per Hash (CLI-Beispiel)
        </h3>

        <p>
          Für eine explizite Integritätskontrolle kann der SHA-256-Hash der
          lokalen PDF-Datei berechnet und mit dem im Dokument oder Referenzsystem
          angegebenen Fingerprint verglichen werden.
        </p>

        <p className="font-semibold">Beispiel (Hash-Vergleich):</p>

        <pre className="text-sm bg-white border border-gray-300 rounded-md p-4 overflow-x-auto font-mono">
{`# SHA-256-Hash des PDF berechnen
sha256sum certif-scope-bescheinigung.pdf`}
        </pre>

        <p>
          Vergleichen Sie das Ergebnis mit dem erwarteten Fingerprint, sofern
          dieser im Dokument oder in einem Referenzprozess angegeben ist.
        </p>

        <div className="bg-[#FFF7ED] border-l-4 border-[#F59E0B] p-4 text-sm">
          <p>
            Ein identischer Hash bestätigt die Dateiintegrität, weist aber für
            sich allein nicht die Echtheit des Ausstellers nach. Für eine
            weitergehende Kontrolle ist die Signaturprüfung erforderlich.
          </p>
        </div>

        <h3 className="text-xl font-bold text-[#0B3A63]">
          Schritt 4 — Kryptografische Signaturprüfung (fortgeschritten)
        </h3>

        <p>
          Die fortgeschrittene Prüfung kontrolliert die Ed25519-Signatur gegen
          die kanonische Nutzlast und den öffentlichen Certif-Scope-Schlüssel.
        </p>

        <p>Dieser Ablauf umfasst typischerweise:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>signierte Nutzlast aus dem PDF extrahieren,</li>
          <li>Signatur auslesen und Base64-decodieren,</li>
          <li>Signatur mit dem öffentlichen Schlüssel prüfen.</li>
        </ul>

        <p>
          Die Umsetzung kann je nach internen Anforderungen mit Python, Node.js
          oder spezialisierten Kryptografiewerkzeugen erfolgen.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63]">
          Beispiel — Prüfung in Python (konzeptuell)
        </h3>

        <pre className="text-sm bg-white border border-gray-300 rounded-md p-4 overflow-x-auto font-mono">
{`from nacl.signing import VerifyKey
import base64

public_key_b64 = "MCowBQYDK2VwAyEAbKp2pg4wmzE5Kqo9tEwv7JJjxQyT2cBmwiLLHp4cSac="
verify_key = VerifyKey(base64.b64decode(public_key_b64))

payload = b"...bytes der kanonischen Nutzlast..."
signature = base64.b64decode("...signature...")

verify_key.verify(payload, signature)
`}
        </pre>

        <p>
          Ist die Prüfung erfolgreich, bestätigt dies, dass die Nutzlast von
          Certif-Scope signiert wurde und seitdem nicht verändert wurde.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63]">
          Hinweise für Termux und mobile Umgebungen
        </h3>

        <p>Die gleichen Schritte gelten auch in Termux auf Android:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>PDF auf das Gerät übertragen,</li>
          <li>erforderliche Pakete installieren, etwa openssl, python, libsodium,</li>
          <li>dieselben Hash- und Signaturkontrollen ausführen.</li>
        </ul>

        <p>
          Die Prüfergebnisse sind auf allen Plattformen gleich, wenn dieselben
          Eingabedaten und Algorithmen verwendet werden.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63]">
          Ergebnis der Prüfung
        </h3>

        <p>Eine vollständig geprüfte Bescheinigung bestätigt technisch:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Das Dokument wurde von Certif-Scope ausgestellt.</li>
          <li>Der signierte Inhalt wurde nicht verändert.</li>
          <li>Die Dokument-ID passt zur signierten Nutzlast.</li>
          <li>Die Prüfung ist unabhängig und offline durchführbar.</li>
        </ul>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            Für die technische Prüfung ist kein Online-Dienst und keine
            zusätzliche Vertrauensannahme in eine Certif-Scope-Datenbank
            erforderlich.
          </p>
        </div>
      </div>
    </section>
  );
}

function Section8() {
  return (
    <section
      id="security-assumptions"
      data-section="security-assumptions"
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3A63] mb-4">
          8. Sicherheitsannahmen und Bedrohungsmodell
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Dieser Abschnitt legt die Sicherheitsannahmen, das Bedrohungsmodell und
          die Vertrauensgrenzen für Certif-Scope CO₂e-Bescheinigungen offen. Er
          beschreibt, was das System schützt, was es nicht schützt und wie die
          Prüfung in institutionellen Kontexten einzuordnen ist.
        </p>
      </header>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <h3 className="text-xl font-bold text-[#0B3A63]">
          Zentrale Sicherheitsannahmen
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Der private Signaturschlüssel von Certif-Scope bleibt vertraulich
            und wird nicht kompromittiert.
          </li>
          <li>
            Der veröffentlichte öffentliche Prüfschlüssel ist authentisch und
            wurde nicht ersetzt.
          </li>
          <li>
            Die kryptografischen Standards Ed25519 und SHA-256 bleiben gegenüber
            praktischen Angriffen belastbar.
          </li>
          <li>
            Prüfende Stellen arbeiten mit dem unveränderten Original-PDF.
          </li>
        </ul>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            Diese Annahmen sind ausdrücklich benannt und überprüfbar. Eine
            implizite Abhängigkeit von Certif-Scope-Infrastruktur, Datenbanken
            oder APIs ist für die Prüfung nicht erforderlich.
          </p>
        </div>

        <h3 className="text-xl font-bold text-[#0B3A63]">
          Vertrauensgrenzen
        </h3>

        <p>
          Certif-Scope setzt die Vertrauensgrenze auf Ebene des signierten
          PDF-Dokuments:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Das PDF ist das zentrale Vertrauensobjekt.</li>
          <li>
            Kein Online-Register und kein Validierungs-Endpunkt ist autoritativ.
          </li>
          <li>
            Die Prüfung hängt nicht von der Verfügbarkeit von Certif-Scope ab.
          </li>
        </ul>

        <p>
          Nach der Ausstellung besteht die Bescheinigung unabhängig vom
          laufenden Betrieb des Ausstellers fort.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63]">
          Bedrohungsmodell
        </h3>

        <p>Die folgenden Szenarien werden ausdrücklich berücksichtigt:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Änderung des PDF-Inhalts nach der Ausstellung,</li>
          <li>Verfälschung einer Bescheinigung durch veränderte Daten,</li>
          <li>Wiederverwendung einer bereits ausgestellten Bescheinigung,</li>
          <li>Verwechslung oder missbräuchliche Darstellung des Ausstellers.</li>
        </ul>

        <p>
          Diese Risiken werden durch die kryptografische Signatur der
          Bescheinigungsnutzlast begrenzt.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63]">
          Risiken außerhalb des Prüfumfangs
        </h3>

        <p>
          Die folgenden Risiken liegen bewusst außerhalb des technischen
          Prüfumfangs und werden durch das Bescheinigungssystem nicht bewertet:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>fehlerhafte oder irreführende Eingabedaten des Nutzers,</li>
          <li>unrichtige Buchhaltungs- oder Aktivitätsdaten an der Quelle,</li>
          <li>fehlerhafte Interpretation der Ergebnisse durch Dritte,</li>
          <li>
            regulatorische oder werbliche Nutzung außerhalb des erklärten
            Dokumentationsumfangs.
          </li>
        </ul>

        <div className="bg-[#FFF7ED] border-l-4 border-[#F59E0B] p-4 text-sm">
          <p>
            Die kryptografische Prüfung bestätigt Integrität und Echtheit, nicht
            die fachliche Richtigkeit der zugrunde liegenden Geschäftsdaten.
          </p>
        </div>

        <h3 className="text-xl font-bold text-[#0B3A63]">
          Schlüsselverwaltung und Rotation
        </h3>

        <p>
          Certif-Scope verwendet einen Aussteller-Signaturschlüssel pro
          Ausstellungsmodell oder Version.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Der öffentliche Schlüssel wird veröffentlicht und bleibt für die
            jeweilige Version nachvollziehbar.
          </li>
          <li>Eine Schlüsselrotation führt zu einer neuen Bescheinigungsversion.</li>
          <li>Ältere Bescheinigungen bleiben weiterhin prüfbar.</li>
        </ul>

        <p>
          Dieses Modell verhindert stillschweigende Vertrauensänderungen und
          erhält die langfristige Prüfbarkeit.
        </p>

        <h3 className="text-xl font-bold text-[#0B3A63]">
          Einordnung in institutionellen Kontexten
        </h3>

        <p>
          Für Einkauf, Banken, Versicherungen und technische Prüfer bestätigt die
          Prüfung:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Das Dokument ist technisch echt und nicht verändert.</li>
          <li>Der Aussteller ist eindeutig identifizierbar.</li>
          <li>
            Die Bescheinigung passt zu einem bestimmten Ausstellungsereignis.
          </li>
        </ul>

        <p>
          Die Prüfung bedeutet <strong>nicht</strong>, dass der CO₂e-Wert
          regulatorisch anerkannt ist, eine externe Assurance-Leistung ersetzt
          oder ein vollständiges Emissionsreporting darstellt.
        </p>

        <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4 text-sm">
          <p>
            Dieses transparente Bedrohungsmodell unterstützt Nachvollziehbarkeit
            und institutionelle Akzeptanz in europäischen Dokumentationsprozessen.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function TechnicalVerifyPageDE() {
  return (
    <section
      id="verify-technical"
      data-section="verify-technical"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Technische Prüfung von CO₂e-Bescheinigungen",
            description:
              "Technische Dokumentation zur Prüfung der Echtheit und dokumentarischen Integrität von Certif-Scope CO₂e-Bescheinigungen.",
            url: "https://www.certif-scope.com/de/technische-pruefung/",
            isPartOf: {
              "@type": "WebSite",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
            },
          }),
        }}
      />

      <div id="top" />

      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          CO₂e-Bescheinigung — technische Prüfung
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Leitfaden zur technischen Prüfung
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Diese Seite erklärt auf Implementierungsebene, wie eine Certif-Scope
          CO₂e-Bescheinigung technisch geprüft werden kann. Sie richtet sich an
          Entwickler, Sicherheitsteams und technische Prüfer, die Echtheit und
          Integrität des Dokuments nachvollziehen müssen, auch offline.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      <nav
        aria-label="Abschnitte der technischen Prüfung"
        className="mb-16 max-w-4xl p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm"
      >
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#0B3A63] font-medium">
          <li>
            <a href="#verification-model">
              1. Überblick über das Prüfmodell
            </a>
          </li>
          <li>
            <a href="#cryptographic-foundations">
              2. Kryptografische Grundlagen
            </a>
          </li>
          <li>
            <a href="#signed-data-structure">
              3. Struktur der signierten Daten
            </a>
          </li>
          <li>
            <a href="#public-key-and-trust">
              4. Öffentlicher Schlüssel und Vertrauensmodell
            </a>
          </li>
          <li>
            <a href="#verification-scope">
              5. Was geprüft wird und was nicht
            </a>
          </li>
          <li>
            <a href="#verification-workflows">6. Prüfabläufe</a>
          </li>
          <li>
            <a href="#step-by-step-verification">
              7. Prüfung Schritt für Schritt (CLI & Code)
            </a>
          </li>
          <li>
            <a href="#security-assumptions">
              8. Sicherheitsannahmen und Bedrohungsmodell
            </a>
          </li>
        </ul>
      </nav>

      <div className="max-w-4xl mx-auto space-y-24">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </div>
    </section>
  );
}
