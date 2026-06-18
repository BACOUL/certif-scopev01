// PATH: src/app/de/verify/technical/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

const CERTIFSCOPE_PUBLIC_KEY_BASE64 =
  "MCowBQYDK2VwAyEAbKp2pg4wmzE5Kqo9tEwv7JJjxQyT2cBmwiLLHp4cSac=";

const sections = [
  { href: "#verification-model", label: "1. Überblick über das Verifizierungsmodell" },
  { href: "#cryptographic-foundations", label: "2. Kryptografische Grundlagen" },
  { href: "#signed-data-structure", label: "3. Struktur der signierten Daten" },
  { href: "#public-key-and-trust", label: "4. Öffentlicher Schlüssel und Vertrauensmodell" },
  { href: "#verification-scope", label: "5. Was verifiziert wird — und was nicht" },
  { href: "#verification-workflows", label: "6. Verifizierungsabläufe" },
  { href: "#step-by-step-verification", label: "7. Schritt-für-Schritt-Prüfung" },
  { href: "#security-assumptions", label: "8. Sicherheitsannahmen und Bedrohungsmodell" },
];

export const metadata: Metadata = {
  title: "Technische Verifizierung CO₂e-PDF | Certif-Scope",
  description:
    "Technische Dokumentation zur Prüfung der Authentizität und Integrität einer Certif-Scope CO₂e-Bescheinigung: signiertes PDF, öffentlicher Prüfschlüssel, QR-Code und Offline-Prüfung.",
  alternates: {
    canonical: "https://www.certif-scope.com/de/verify/technical/",
    languages: {
      de: "https://www.certif-scope.com/de/verify/technical/",
      fr: "https://www.certif-scope.com/fr/verify/technical/",
    },
  },
  openGraph: {
    title: "Technische Verifizierung CO₂e-PDF | Certif-Scope",
    description:
      "Technische Anleitung zur dokumentarischen Prüfung von Certif-Scope CO₂e-Bescheinigungen mit QR-Code, signiertem PDF und öffentlichem Schlüssel.",
    url: "https://www.certif-scope.com/de/verify/technical/",
    siteName: "Certif-Scope",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

export default function VerifyTechnicalPageDE() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Technische Verifizierung von Certif-Scope CO₂e-Bescheinigungen",
    name: "Technische Verifizierung CO₂e-PDF",
    url: "https://www.certif-scope.com/de/verify/technical/",
    description:
      "Technische Dokumentation zur Prüfung von Authentizität und Integrität einer Certif-Scope CO₂e-Bescheinigung.",
    isPartOf: {
      "@type": "WebSite",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/de/",
    },
    publisher: {
      "@type": "Organization",
      name: "Certif-Scope",
      url: "https://www.certif-scope.com/de/",
    },
    inLanguage: "de-DE",
  };

  return (
    <main id="main-content" role="main" className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />

      <section id="verify-technical" data-section="verify-technical" className="mx-auto max-w-7xl px-6 pb-24 pt-12">
        <div id="top" />

        <header className="mb-14 rounded-3xl border border-[#E2E8F0] bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF8FA] px-6 py-10 shadow-sm md:px-10 md:py-14">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[#64748B]">
            CO₂e-Bescheinigung — technische Verifizierung
          </p>
          <h1 className="mb-6 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-5xl">
            Technischer Leitfaden zur Verifizierung
          </h1>
          <p className="max-w-4xl text-lg leading-relaxed text-gray-700">
            Diese Seite erklärt auf Implementierungsebene, wie eine Certif-Scope CO₂e-Bescheinigung technisch geprüft werden kann. Sie richtet sich an Entwickler, Sicherheitsteams, technische Prüfer und Organisationen, die die Authentizität und Integrität eines Dokuments nachvollziehen müssen — auch ohne Zugriff auf ein Certif-Scope-Konto.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex rounded-full border border-[#D7E7EC] bg-white px-4 py-2 text-sm font-medium text-[#0B3A63]">
              QR-Code
            </span>
            <span className="inline-flex rounded-full border border-[#D7E7EC] bg-white px-4 py-2 text-sm font-medium text-[#0B3A63]">
              Signiertes PDF
            </span>
            <span className="inline-flex rounded-full border border-[#D7E7EC] bg-white px-4 py-2 text-sm font-medium text-[#0B3A63]">
              Ed25519-Prüfschlüssel
            </span>
            <span className="inline-flex rounded-full border border-[#D7E7EC] bg-white px-4 py-2 text-sm font-medium text-[#0B3A63]">
              Offline-Verifizierung
            </span>
          </div>
        </header>

        <nav aria-label="Abschnitte der technischen Verifizierung" className="mb-16 max-w-4xl rounded-xl border border-gray-200 bg-[#F8FAFC] p-6 shadow-sm">
          <ul className="grid grid-cols-1 gap-3 text-sm font-medium text-[#0B3A63] md:grid-cols-2">
            {sections.map((section) => (
              <li key={section.href}>
                <a href={section.href} className="underline-offset-4 hover:underline">
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mx-auto max-w-4xl space-y-24">
          <TechnicalSection id="verification-model" eyebrow="Abschnitt 1" title="Überblick über das Verifizierungsmodell">
            <p>
              Certif-Scope verwendet ein dokumentarisches Verifizierungsmodell. Ziel ist nicht, eine CO₂-Berechnung fachlich neu zu auditieren, sondern zu prüfen, ob eine vorliegende Bescheinigung mit den von Certif-Scope ausgestellten Kontrollelementen übereinstimmt.
            </p>
            <p>
              Die Verifizierung kann über zwei Ebenen erfolgen: eine schnelle QR-Code-Prüfung und eine technische Prüfung des signierten Original-PDF. Der QR-Code erleichtert den Zugriff auf Basisinformationen. Die PDF-Prüfung erlaubt eine stärkere Kontrolle von Integrität und Signatur.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <MiniCard title="QR-Code" text="Öffnet die Verifizierungsseite mit einem technischen Parameter `v`." />
              <MiniCard title="PDF" text="Enthält die ausgestellte Bescheinigung und signierte Dokumentelemente." />
              <MiniCard title="Schlüssel" text="Der öffentliche Prüfschlüssel dient zur Validierung der Signatur." />
            </div>
          </TechnicalSection>

          <TechnicalSection id="cryptographic-foundations" eyebrow="Abschnitt 2" title="Kryptografische Grundlagen">
            <p>
              Certif-Scope nutzt eine öffentliche Prüflogik: Ein privater Ausstellerschlüssel signiert die relevanten Bescheinigungsdaten, während der öffentliche Prüfschlüssel zur Kontrolle verwendet werden kann. Dieser öffentliche Schlüssel ist nicht geheim und darf von Dritten gespeichert, dokumentiert und in interne Prüfprozesse integriert werden.
            </p>
            <p>
              Die technische Verifizierung zielt auf dokumentarische Authentizität und Integrität. Sie bestätigt nicht, dass die vom Nutzer eingegebenen Ausgangsdaten wirtschaftlich oder fachlich geprüft wurden.
            </p>
            <div className="mt-6 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
              <p className="text-sm font-semibold text-[#0B3A63]">Öffentlicher Certif-Scope Prüfschlüssel — Ed25519</p>
              <pre className="mt-3 overflow-x-auto break-all whitespace-pre-wrap rounded-md border border-gray-300 bg-white p-4 font-mono text-sm text-gray-600">
                {CERTIFSCOPE_PUBLIC_KEY_BASE64}
              </pre>
              <p className="mt-3 text-xs leading-relaxed text-gray-500">
                Dieser Schlüssel ist öffentlich, dauerhaft und für die Prüfung von Certif-Scope-Bescheinigungen vorgesehen. Er ist kein API-Geheimnis und kein Kundenschlüssel.
              </p>
            </div>
          </TechnicalSection>

          <TechnicalSection id="signed-data-structure" eyebrow="Abschnitt 3" title="Struktur der signierten Daten">
            <p>
              Die Verifizierung stützt sich auf eine strukturierte Nutzlast. Je nach Dokumentversion können technische Felder wie Bescheinigungs-ID, Ausstellungsdatum, Gültigkeitsdatum, Methodenversion, Faktorversion, Aussteller und Signatur enthalten sein.
            </p>
            <p>
              Die Nutzlast muss konsistent verarbeitet werden. Eine Implementierung sollte keine Felder stillschweigend überschreiben, keine Werte normalisieren, ohne dies zu dokumentieren, und keine fachliche Bedeutung aus fehlenden optionalen Feldern ableiten.
            </p>
            <CodeBlock
              code={`{
  "certificateId": "CS-...",
  "issuedAt": "2026-06-18",
  "validUntil": "2027-06-18",
  "methodVersion": "Certif-Scope deterministic spend-based methodology v1.0",
  "factorVersion": "...",
  "issuer": "Certif-Scope",
  "signature": "..."
}`}
            />
          </TechnicalSection>

          <TechnicalSection id="public-key-and-trust" eyebrow="Abschnitt 4" title="Öffentlicher Schlüssel und Vertrauensmodell">
            <p>
              Das Vertrauensmodell ist einfach: Eine Certif-Scope-Bescheinigung wird als von Certif-Scope ausgestellt betrachtet, wenn die signierten Daten mit dem öffentlichen Prüfschlüssel validiert werden können und die Dokumentstruktur kohärent bleibt.
            </p>
            <p>
              Diese Logik ist bewusst unabhängig von einem Nutzerkonto. Ein Dritter soll eine Bescheinigung prüfen können, ohne Zugriff auf private Kundendaten oder auf eine interne Certif-Scope-Datenbank zu benötigen.
            </p>
            <div className="mt-6 border-l-4 border-[#0B3A63] bg-[#F8FAFC] p-4">
              <p className="text-sm leading-relaxed text-gray-700">
                Wichtig: Das Vertrauensmodell bestätigt die Dokumentherkunft und die technische Integrität der signierten Elemente. Es bestätigt nicht die Richtigkeit aller vom Nutzer deklarierten Ausgangsdaten.
              </p>
            </div>
          </TechnicalSection>

          <TechnicalSection id="verification-scope" eyebrow="Abschnitt 5" title="Was verifiziert wird — und was nicht">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                <h3 className="mb-3 text-base font-bold text-[#0B3A63]">Die Prüfung kann bestätigen</h3>
                <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                  <li>dass eine Bescheinigungs-ID vorhanden und lesbar ist;</li>
                  <li>dass die signierten Elemente technisch kohärent sind;</li>
                  <li>dass die Signatur mit dem öffentlichen Schlüssel geprüft werden kann;</li>
                  <li>dass das Dokument im Certif-Scope-Format ausgestellt wurde;</li>
                  <li>dass das angegebene Gültigkeitsdatum technisch ausgewertet werden kann.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
                <h3 className="mb-3 text-base font-bold text-[#0B3A63]">Die Prüfung bestätigt nicht</h3>
                <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                  <li>ein vollständiges CO₂-Audit;</li>
                  <li>eine zertifizierte CO₂-Bilanz;</li>
                  <li>eine regulatorische Treibhausgasbilanz;</li>
                  <li>eine CSRD- oder ESRS-Konformität;</li>
                  <li>eine externe Prüfung der vom Nutzer gelieferten Eingabedaten.</li>
                </ul>
              </div>
            </div>
          </TechnicalSection>

          <TechnicalSection id="verification-workflows" eyebrow="Abschnitt 6" title="Verifizierungsabläufe">
            <p>
              In der Praxis gibt es drei typische Verifizierungsabläufe: schnelle QR-Code-Prüfung, Prüfung des Original-PDF mit Standardwerkzeugen und manuelle kryptografische Prüfung in einem technischen Workflow.
            </p>
            <div className="mt-6 space-y-4">
              <WorkflowStep number="1" title="QR-Code prüfen" text="Der QR-Code öffnet `/de/verify/?v=...`. Die Seite decodiert den Parameter und zeigt die Kontrollelemente an." />
              <WorkflowStep number="2" title="Original-PDF prüfen" text="Ein PDF-Reader mit Signaturunterstützung kann verwendet werden, um die digitale Signatur und die Integrität des Dokuments zu kontrollieren." />
              <WorkflowStep number="3" title="Manuell integrieren" text="Technische Teams können die signierte Nutzlast extrahieren und die Signatur mit dem öffentlichen Prüfschlüssel prüfen." />
            </div>
          </TechnicalSection>

          <TechnicalSection id="step-by-step-verification" eyebrow="Abschnitt 7" title="Schritt-für-Schritt-Prüfung">
            <p>
              Eine robuste Prüfung sollte immer mit dem Originaldokument arbeiten. Screenshots, Ausdrucke oder kopierte Textauszüge sind nicht ausreichend, um die technische Integrität mit demselben Niveau zu bestätigen.
            </p>
            <ol className="mt-6 list-decimal space-y-3 pl-6 text-gray-700">
              <li>Original-PDF vom Inhaber der Bescheinigung erhalten.</li>
              <li>QR-Code öffnen und die angezeigten Kontrollelemente prüfen.</li>
              <li>Bescheinigungs-ID, Aussteller, Ausstellungsdatum und Gültigkeitsdatum vergleichen.</li>
              <li>Bei Bedarf das PDF in einem PDF-Reader mit Signaturunterstützung öffnen.</li>
              <li>Für technische Workflows die signierte Nutzlast und die Signatur extrahieren.</li>
              <li>Signatur mit dem öffentlichen Certif-Scope Prüfschlüssel validieren.</li>
              <li>Prüfergebnis dokumentieren, ohne daraus eine fachliche CO₂-Audit-Aussage abzuleiten.</li>
            </ol>
            <CodeBlock
              code={`// Pseudocode
const payload = extractSignedPayload(pdf);
const signature = extractSignature(pdf);
const publicKey = importEd25519PublicKey(CERTIFSCOPE_PUBLIC_KEY_BASE64);
const valid = verifyEd25519(signature, payload, publicKey);

if (!valid) {
  throw new Error("Signature verification failed");
}`}
            />
          </TechnicalSection>

          <TechnicalSection id="security-assumptions" eyebrow="Abschnitt 8" title="Sicherheitsannahmen und Bedrohungsmodell">
            <p>
              Die technische Verifizierung ist darauf ausgelegt, Veränderungen an signierten Dokumentelementen erkennbar zu machen. Sie schützt jedoch nicht gegen alle denkbaren organisatorischen Risiken. Insbesondere kann eine technisch gültige Bescheinigung auf Nutzerangaben beruhen, die nicht extern auditiert wurden.
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <MiniCard title="Angenommene Risiken" text="Veränderte PDF-Dateien, manipulierte QR-Parameter, unvollständige Links, abgelaufene Dokumente oder Nutzung von Screenshots statt Original-PDF." />
              <MiniCard title="Nicht abgedeckte Risiken" text="Fachliche Falschangaben des Nutzers, falsche Ausgabenkategorien, fehlende Primärdaten oder eine vom Auftraggeber verlangte externe Prüfung." />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-gray-600">
              Für Ausschreibungen, Banken, Versicherungen oder Kundenportale gilt: Wenn ein bestimmtes Audit, eine Norm, eine externe Prüfung oder ein regulatorisches Format verlangt wird, hat diese Anforderung Vorrang vor einer indikativen Certif-Scope-Bescheinigung.
            </p>
          </TechnicalSection>

          <section className="rounded-3xl border border-[#E2E8F0] bg-[#0B3A63] p-6 text-white md:p-8">
            <h2 className="text-2xl font-extrabold">Zur Verifizierungsseite zurückkehren</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/82">
              Nutzen Sie die Standardseite, um einen QR-Code-Parameter zu prüfen oder die Verifizierung für ein konkretes Certif-Scope-Dokument zu starten.
            </p>
            <Link href="/de/verify/" className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] hover:bg-white/90">
              Zur deutschen Verifizierung
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}

function TechnicalSection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">{eyebrow}</p>
      <h2 className="mb-5 text-2xl font-extrabold leading-tight text-[#0B3A63] md:text-3xl">{title}</h2>
      <div className="space-y-4 text-base leading-relaxed text-gray-700">{children}</div>
    </section>
  );
}

function MiniCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
      <h3 className="mb-2 text-base font-bold text-[#0B3A63]">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-700">{text}</p>
    </div>
  );
}

function WorkflowStep({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0B3A63] text-sm font-bold text-white">{number}</span>
      <div>
        <h3 className="font-bold text-[#0B3A63]">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-gray-700">{text}</p>
      </div>
    </div>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="mt-6 overflow-x-auto rounded-2xl border border-gray-300 bg-[#F8FAFC] p-5 font-mono text-sm leading-relaxed text-gray-700">
      {code}
    </pre>
  );
}
