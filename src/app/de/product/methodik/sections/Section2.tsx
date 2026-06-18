"use client";

export default function Section2() {
  return (
    <section id="theoretical-foundations" className="scroll-mt-24 border-b border-gray-200 pb-24">
      <div className="p-12 bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-md"><h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]"><span className="mr-2">2.</span>Theoretische Grundlagen</h2><p className="text-lg text-gray-700 max-w-5xl mt-6 leading-relaxed">Die spend-based Methodik stammt aus umweltökonomischen Input-Output-Modellen. Sie verbindet Wirtschaftsaktivität mit durchschnittlichen sektoralen Umweltwirkungen, wenn keine operativen Primärdaten verfügbar sind.</p></div>
      <div className="mt-16 p-10 bg-white border border-gray-200 rounded-xl shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Ursprung des Ausgabenmodells</h3><p className="text-sm text-gray-700 leading-relaxed">Das Modell basiert auf Environmentally Extended Input-Output (EEIO). Input-Output-Tabellen beschreiben Kaufströme zwischen Wirtschaftssektoren, während Umweltkonten Emissionen den Sektoren zuordnen.</p></div>
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#1FB6C1]/30 rounded-xl shadow-sm"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Mathematische Basis</h3><p className="text-sm text-gray-700 leading-relaxed">Das Modell nimmt eine Proportionalität zwischen finanziellen Ausgaben und zugeordneten Emissionen innerhalb einer Kategorie an.</p><pre className="mt-4 p-4 rounded-lg border bg-white text-[#0B3A63] text-sm overflow-x-auto">Emissionen (kg CO₂e) = Ausgaben (€) × Emissionsfaktor (kg CO₂e / €)</pre></div>
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md"><h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Warum ein lineares Modell akzeptiert wird</h3><ul className="space-y-2 text-sm text-gray-700 leading-relaxed"><li>• Es vermeidet spekulative oder prädiktive Modellierung.</li><li>• Es garantiert Reproduzierbarkeit.</li><li>• Es benötigt keine operativen Primärdaten.</li><li>• Es ist mathematisch transparent und prüfbar.</li></ul></div>
      <div className="mt-12 text-right"><a href="#top" className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors">Zurück zum Inhaltsverzeichnis</a></div>
    </section>
  );
}
