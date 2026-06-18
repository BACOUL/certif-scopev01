"use client";

export default function Section10() {
  return (
    <section id="factor-versioning" className="scroll-mt-24 border-b border-gray-200 pb-24">
      <div className="p-12 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-md"><h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]"><span className="mr-2">10.</span>Versionierung der Emissionsfaktoren</h2><p className="text-lg text-gray-700 max-w-5xl mt-6 leading-relaxed">Emissionsfaktoren werden versioniert, aktualisiert, stabilisiert und validiert. Änderungen betreffen niemals bereits ausgestellte Bescheinigungen.</p></div>
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Versionsstruktur</h3><ul className="space-y-2 text-sm text-gray-700 leading-relaxed"><li>• Versionierung folgt MAJOR.MINOR.PATCH.</li><li>• MAJOR für methodische Umfangsänderungen.</li><li>• MINOR für Updates von Emissionsfaktor-Datensätzen.</li><li>• PATCH für kleinere Korrekturen.</li></ul></div>
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#1FB6C1]/30 rounded-xl shadow-sm"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Update-Auslöser</h3><ul className="space-y-2 text-sm text-gray-700 leading-relaxed"><li>• Neue ADEME- oder DEFRA-Durchschnittswerte.</li><li>• Revision wirtschaftlicher EEIO-Datensätze.</li><li>• Regulatorische Ausrichtung, etwa ESRS oder GHG Protocol.</li><li>• Korrektur dokumentierter Inkonsistenzen.</li></ul></div>
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Keine Echtzeit-Substitution</h3><p className="text-sm text-gray-700 leading-relaxed">Faktoren werden nie dynamisch geladen, nie in Echtzeit abgerufen und nie still ersetzt. Sie sind statisch und vor jeder Berechnung versioniert gesperrt.</p></div>
      <div className="mt-12 text-right"><a href="#top" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">Zurück zum Inhaltsverzeichnis</a></div>
    </section>
  );
}
