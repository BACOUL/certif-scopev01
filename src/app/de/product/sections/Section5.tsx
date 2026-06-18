"use client";

const integrityPrinciples = [
  ["Fälschungserkennende Ausgabe", "Jede Bescheinigung wird als finales Dokument ausgegeben, dessen Integrität geprüft werden kann. Eine Änderung nach Ausstellung macht die Authentizität des Dokuments ungültig."],
  ["Unabhängige Verifizierung", "Die Authentizität kann von jedem Dritten anhand öffentlicher Verifikationsinformationen geprüft werden, ohne Konto, ohne Login und ohne Zugriff auf interne Systeme."],
  ["Eindeutige Bescheinigungsreferenz", "Jedes PDF enthält eine eindeutige Referenz für präzise Zitation, Rückverfolgbarkeit und Kommunikation in Einkaufs-, Bank- oder Compliance-Kontexten."],
  ["Online-Komfort, Offline-Gültigkeit", "Ein QR-Code bietet optionalen Zugang zu einer öffentlichen Erklärseite. Die Verifizierung bleibt langfristig möglich und hängt nicht von einem zentralen Register ab."],
];

const trustItems = [
  "Bescheinigungen werden einmalig ausgestellt und können nicht verändert werden.",
  "Die Prüfung hängt nicht von einer zentralen Datenbank oder einem Register ab.",
  "Kein Konto, Login oder personenbezogene Daten sind erforderlich.",
  "Ausgestellte Dokumente werden nicht von Certif-Scope gespeichert.",
  "Die Authentizität bleibt über die Zeit unabhängig vom Aussteller überprüfbar.",
];

export default function Section5() {
  return (
    <section id="verification-and-integrity" className="scroll-mt-24 border-b border-gray-200 pb-24">
      <div className="relative p-12 rounded-2xl bg-[#0B3A63] text-white shadow-md overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/90 to-transparent pointer-events-none" aria-hidden="true" /><h2 className="text-4xl md:text-5xl font-extrabold relative z-10"><span className="mr-2">5.</span>Verifizierung & Integrität</h2><p className="text-white/80 text-sm max-w-4xl mt-4 leading-relaxed relative z-10">Dieser Abschnitt beschreibt, wie Authentizität und Integrität des gelieferten Dokuments geprüft werden. Er beschreibt nicht die Berechnungsmethodik.</p><p className="text-white/90 text-lg max-w-4xl mt-6 leading-relaxed relative z-10">Jede CO₂e-Bescheinigung wird mit integrierten Integritätsmechanismen ausgegeben. Ihre Authentizität kann unabhängig geprüft werden, ohne Konto, ohne personenbezogene Daten und ohne Abhängigkeit von einem zentralen Register.</p></div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">{integrityPrinciples.map(([title, text], index) => <div key={title} className={`p-8 rounded-xl border shadow-sm hover:shadow-md transition ${index % 2 ? "bg-[#F8FAFC] border-[#1FB6C1]/20" : "bg-white border-gray-200"}`}><h3 className="text-2xl font-semibold text-[#0B3A63]">{title}</h3><p className="mt-3 text-gray-700 text-sm leading-relaxed">{text}</p></div>)}</div>
      <div className="mt-20 p-10 bg-white rounded-xl border border-[#0B3A63]/15 shadow-sm"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Vertrauens- und Integritätsgarantien</h3><ul className="space-y-3 text-sm text-gray-700 leading-relaxed">{trustItems.map((item) => <li key={item}>• {item}</li>)}</ul></div>
      <div className="mt-12 text-right"><a href="#top" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">Zurück zum Inhaltsverzeichnis</a></div>
    </section>
  );
}
