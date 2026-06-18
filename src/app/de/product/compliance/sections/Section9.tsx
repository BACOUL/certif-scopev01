"use client";

export default function Section9() {
  return (
    <section id="auditability-independent-verification-boundaries" className="scroll-mt-24 border-b border-gray-200 pb-24">
      <div className="p-12 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-md"><h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]"><span className="mr-2">9.</span>Auditierbarkeit und Grenzen der unabhängigen Verifizierung</h2><p className="text-lg text-gray-700 max-w-5xl mt-6 leading-relaxed">Diese Section legt fest, was Dritte unabhängig prüfen können und was außerhalb der Verifizierung bleibt. Sie verhindert die Verwechslung mit einem regulatorischen Audit.</p></div>
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Umfang der unabhängigen Verifizierung</h3><ul className="space-y-2 text-sm text-gray-700 leading-relaxed"><li>• Korrekte Anwendung der Emissionsfaktoren je Kategorie.</li><li>• Korrekte Multiplikation von Ausgaben mit Emissionsfaktoren.</li><li>• Korrekte Aggregation zum Gesamtwert.</li><li>• Übereinstimmung der Datensatzversion mit den Metadaten.</li></ul></div>
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#1FB6C1]/30 rounded-xl shadow-sm"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Grenzen der Verifizierung</h3><ul className="space-y-2 text-sm text-gray-700 leading-relaxed"><li>• Keine Validierung der vom Nutzer gelieferten Finanzdaten.</li><li>• Keine Bestätigung, ob Ausgaben vollständig oder korrekt sind.</li><li>• Keine Bewertung realer Lieferantenemissionen.</li><li>• Kein Ersatz für CSRD- oder ESRS-Reporting.</li></ul></div>
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md"><h3 className="text-2xl font-semibold mb-4">Explizite Verifizierungsgrenze</h3><p className="text-sm text-white/90 leading-relaxed">Certif-Scope speichert keine detaillierten Finanzdaten. Unabhängige Prüfer können daher nicht erneut auf Nutzereingaben zugreifen oder diese fachlich validieren.</p></div>
      <div className="mt-12 text-right"><a href="#top" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">Zurück zum Inhaltsverzeichnis</a></div>
    </section>
  );
}
