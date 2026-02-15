"use client";

export default function TestimonialsDE() {
  const items = [
    {
      initials: "KMU",
      text: "Ein Kunde verlangte während des Onboardings CO₂e-Informationen. Mit Certif-Scope konnten wir innerhalb weniger Minuten ein klares, standardisiertes und überprüfbares Dokument bereitstellen, das den Erwartungen im Einkauf entsprach.",
      role: "Bau — Vereinigtes Königreich",
    },
    {
      initials: "KMU",
      text: "Das standardisierte Format lässt sich problemlos in bestehende Lieferantenprüfungen integrieren. Prüfer verstanden den Indikator und die Verifizierungselemente sofort, ohne zusätzliche Erklärungen.",
      role: "E-Commerce — Portugal",
    },
    {
      initials: "KMU",
      text: "Wir erhalten regelmäßig CO₂e-Anfragen ohne definierte Methodik. Certif-Scope liefert sofort einen indikativen, ausgabenbasierten Wert — ohne Berater oder komplexe Reporting-Prozesse.",
      role: "Dienstleistungen — Italien",
    },
  ];

  return (
    <section
      id="testimonials"
      data-section="testimonials"
      className="w-full bg-[#F8FAFC] dark:bg-gray-900 py-24"
    >
      <div className="max-w-4xl mx-auto px-6 text-center mb-14">
        {/* MICRO LABEL */}
        <p
          data-i18n="testimonials.label"
          className="uppercase text-xs md:text-sm font-medium text-[#64748B] dark:text-gray-400 tracking-wide mb-3"
        >
          CO₂e-Nachweis — Praxisbeispiele
        </p>

        {/* TITLE */}
        <h2
          data-i18n="testimonials.title"
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-3"
        >
          Typische Anwendungsfälle aus Unternehmen
        </h2>

        {/* INTRO */}
        <p
          data-i18n="testimonials.intro"
          className="text-[#475569] dark:text-gray-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Beispielhafte Szenarien, die zeigen, wie europäische KMU Certif-Scope nutzen,
          um auf Anfragen aus Beschaffung, Banken und ESG-Prüfungen mit einem
          standardisierten CO₂e-Nachweis zu reagieren.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-7 flex flex-col h-full"
          >
            {/* INITIALS */}
            <div
              aria-hidden="true"
              className="w-14 h-14 rounded-full bg-[#1FB6C1] flex items-center justify-center text-sm font-semibold text-white mb-5 shadow-md"
            >
              {item.initials}
            </div>

            {/* TEXT */}
            <p
              data-i18n={`testimonials.item.${idx}.text`}
              className="text-[#1E293B] dark:text-gray-200 text-base leading-relaxed mb-5"
            >
              {item.text}
            </p>

            {/* META */}
            <p
              data-i18n={`testimonials.item.${idx}.role`}
              className="mt-auto text-[#64748B] dark:text-gray-400 text-sm"
            >
              {item.role}
            </p>
          </div>
        ))}
      </div>

      {/* DISCLAIMER */}
      <p
        data-i18n="testimonials.disclaimer"
        className="mt-12 text-center text-xs text-[#64748B] dark:text-gray-400 max-w-xl mx-auto leading-relaxed"
      >
        Nur illustrative Beispiele. Indikative, ausgabenbasierte Schätzung.
        Nicht geprüft, nicht CSRD/ESRS-konform und kein Ersatz für ein vollständiges
        Treibhausgasinventar.
      </p>

      {/* CTA */}
      <div className="mt-4 text-center">
        <a
          href="#attestation-preview"
          data-i18n="testimonials.cta"
          className="text-[#0B3A63] dark:text-[#1FB6C1] underline text-base hover:text-[#1FB6C1] transition"
        >
          Nachweisformat ansehen →
        </a>
      </div>
    </section>
  );
        }
