"use client";

export default function Section12() {
  return (
    <section id="data-privacy-gdpr" className="scroll-mt-24 border-b border-gray-200 pb-24">
      <div className="p-12 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]"><span className="mr-2">12.</span>Daten, Datenschutz und DSGVO</h2>
        <p className="text-lg text-gray-700 max-w-5xl mt-6 leading-relaxed">Die Architektur folgt privacy-by-design: keine Speicherung detaillierter Eingaben, kein Profiling und keine Offenlegung an Dritte.</p>
      </div>
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Minimierung</h3><ul className="space-y-2 text-sm text-gray-700 leading-relaxed"><li>• Keine Nutzeridentität für die Berechnung erforderlich.</li><li>• Keine direkte Speicherung personenbezogener Daten.</li><li>• Verarbeitung im Speicher ohne Persistenz detaillierter Eingaben.</li><li>• Kein Verhaltenstracking.</li></ul></div>
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md"><h3 className="text-2xl font-semibold mb-4">Speicherung</h3><ul className="space-y-2 text-sm text-white/90 leading-relaxed"><li>• Keine serverseitige Speicherung detaillierter finanzieller Eingaben.</li><li>• Keine Logs mit detaillierten Nutzereingaben.</li><li>• Keine Backups mit eingegebenen Werten.</li><li>• Eingabedaten werden am Ende des Berechnungszyklus gelöscht.</li></ul></div>
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Institutionelle Kompatibilität</h3><ul className="space-y-2 text-sm text-gray-700 leading-relaxed"><li>• Geeignet für vertrauliche Beschaffungsprozesse.</li><li>• Geringeres Risiko durch minimale Datenverarbeitung.</li><li>• Nutzbar in administrativen Dossiers ohne Offenlegung detaillierter Eingaben.</li></ul></div>
      <div className="mt-12 text-right"><a href="#top" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">Zurück zum Inhaltsverzeichnis</a></div>
    </section>
  );
}
