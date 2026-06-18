"use client";

const pdfContents = [
  ["1. Zusammenfassung des CO₂e-Ergebnisses", "Ein einzelner aggregierter CO₂e-Wert in Tonnen CO₂-Äquivalent, klar und eindeutig für eine institutionelle Prüfung dargestellt."],
  ["2. Überblick über den deklarierten Umfang", "Eine High-Level-Sicht auf die deklarierten Kategorien, mit nützlichem Kontext ohne Offenlegung detaillierter Finanzdaten oder operativer Daten."],
  ["3. Normative Kontextreferenzen", "Verweise auf anerkannte europäische und internationale Rahmen wie CSRD, ESRS und GHG Protocol, um den institutionellen Kontext zu erklären, ohne regulatorische Konformität zu behaupten."],
  ["4. Verifizierungsreferenz und QR-Code", "Eine eindeutige Bescheinigungs-ID und ein QR-Code ermöglichen Dritten die Prüfung der Authentizität und Integrität über eine öffentliche Verifizierungsseite."],
  ["5. Institutionelle Metadaten", "Ausstellungsdatum, Gültigkeitszeitraum, deklariertes Referenzjahr und Basisidentifikation, die für Audit-Trails und interne Compliance-Prozesse nützlich sind."],
  ["6. Erklärung der Nutzungsgrenzen", "Eine klare Erklärung zur indikativen Natur des Dokuments und zur vorgesehenen Nutzung, um Verwechslungen mit Reporting, Audit oder Zertifizierung zu vermeiden."],
];

export default function Section4() {
  return (
    <section id="attestation-pdf-contents" className="scroll-mt-24 border-b border-gray-200 pb-24">
      <div className="relative p-12 rounded-2xl bg-[#F0F4F8] border border-[#0B3A63]/15 shadow-md overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/10 to-transparent pointer-events-none" aria-hidden="true" />
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10"><span className="mr-2">4.</span>Inhalt des CO₂e-Bescheinigungs-PDF</h2>
        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">Die CO₂e-Bescheinigung wird als standardisiertes PDF-Dokument ausgegeben, bereit für institutionelle Nutzung. Jedes Element ist so strukturiert, dass Einkaufsreview, Finanzrisikoprüfung und Lieferanten-Onboarding erleichtert werden.</p>
        <p className="mt-4 text-gray-600 text-sm max-w-4xl leading-relaxed relative z-10">Dieser Abschnitt beschreibt Struktur und Inhalt des gelieferten Dokuments. Die Berechnungsmethodik wird separat beschrieben.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
        {pdfContents.map(([title, text], index) => (
          <div key={title} className={`p-8 rounded-xl border shadow-sm hover:shadow-md transition ${index % 2 ? "bg-[#F8FAFC] border-[#1FB6C1]/20" : "bg-white border-gray-200"}`}>
            <h3 className="text-2xl font-semibold text-[#0B3A63]">{title}</h3>
            <p className="text-sm text-gray-700 mt-3 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
      <div className="mt-20 p-8 rounded-xl bg-[#F0FDFC] border border-[#1FB6C1]/30 shadow-sm"><h4 className="text-xl font-semibold text-[#0B3A63] mb-2">Hinweis zur institutionellen Nutzung</h4><p className="text-sm text-gray-700 leading-relaxed max-w-4xl">Diese Bescheinigung ist für Lieferantenbewertung, Einkaufs-Screening und Finanzrisiko-Review konzipiert. Sie ersetzt weder regulatorisches Sustainability-Reporting noch ein auditiertes THG-Inventar.</p></div>
      <div className="mt-12 text-right"><a href="#top" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">Zurück zum Inhaltsverzeichnis</a></div>
    </section>
  );
}
