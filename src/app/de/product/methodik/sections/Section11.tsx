"use client";

export default function Section11() {
  return (
    <section id="dataset-update-cycle" className="scroll-mt-24 border-b border-gray-200 pb-24">
      <div className="p-12 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-md"><h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]"><span className="mr-2">11.</span>Update-Zyklus der Datensätze</h2><p className="text-lg text-gray-700 max-w-5xl mt-6 leading-relaxed">Datensätze werden geplant, validiert und veröffentlicht. Jede Änderung ist versioniert und auditierbar; es gibt keine stille Aktualisierung.</p></div>
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Update-Frequenz</h3><ul className="space-y-2 text-sm text-gray-700 leading-relaxed"><li>• Jährliche Integration öffentlicher ADEME- und DEFRA-Datensätze.</li><li>• Zwischenupdates nur bei offizieller Korrektur.</li><li>• Keine automatische Aufnahme von Echtzeitquellen.</li><li>• Dokumentierter Veröffentlichungskalender.</li></ul></div>
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#1FB6C1]/30 rounded-xl shadow-sm"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Validierungskette</h3><ul className="space-y-2 text-sm text-gray-700 leading-relaxed"><li>• Kohärenzprüfung über alle Kategorien.</li><li>• Vergleich mit der vorherigen Version.</li><li>• Ablehnung auffälliger Ausreißer.</li><li>• Integritäts-Fingerprint des finalen Datensatzes.</li></ul></div>
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md"><h3 className="text-2xl font-semibold mb-4">Veröffentlichungspolitik</h3><ul className="space-y-2 text-sm text-white/90 leading-relaxed"><li>• Jeder neue Datensatz erhält eine semantische Version.</li><li>• Änderungen werden in einem Changelog dokumentiert.</li><li>• Vorherige Versionen bleiben zugänglich.</li><li>• Keine Löschung oder Überschreibung historischer Datensätze.</li></ul></div>
      <div className="mt-12 text-right"><a href="#top" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">Zurück zum Inhaltsverzeichnis</a></div>
    </section>
  );
}
