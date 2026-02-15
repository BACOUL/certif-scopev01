"use client";

import { useState } from "react";

export default function FAQDE() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(open === i ? null : i);

  const items = [
    // HOHE KAUFABSICHT — DRINGLICHKEIT / AUSSCHREIBUNGEN
    {
      q: "Kann ich sofort einen CO₂e-Nachweis für eine Ausschreibung oder eine Lieferantenanfrage erhalten?",
      a: "Ja. Certif-Scope ist dafür ausgelegt, in unter 60 Sekunden einen standardisierten CO₂e-Nachweis zu erzeugen — ausschließlich auf Basis der jährlichen Ausgaben. Das PDF kann sofort für Beschaffungs- oder Lieferantenunterlagen verwendet werden.",
    },
    {
      q: "Benötige ich Energieabrechnungen oder physische Aktivitätsdaten, um Certif-Scope zu nutzen?",
      a: "Nein. Certif-Scope verwendet einen ausgabenbasierten Ansatz. Erforderlich sind nur jährliche finanzielle Ausgaben (€). Keine Zählerstände, keine Kraftstoffdaten und keine operativen Messwerte.",
    },
    {
      q: "Kann dieser Nachweis für Anfragen von Banken oder Finanzinstituten genutzt werden?",
      a: "Ja — für ESG-Screening- und Risikobewertungsprozesse. Der Nachweis liefert einen standardisierten, verifizierbaren CO₂e-Indikator, der zu Prüfprozessen von Banken und Versicherungen passt, ohne einen vollständigen regulatorischen Bericht zu ersetzen.",
    },
    {
      q: "Worin besteht der Unterschied zwischen diesem Nachweis und einer regulatorischen CO₂-Bilanz?",
      a: "Dieser Nachweis liefert eine indikative, ausgabenbasierte CO₂e-Schätzung. Er ist kein ISO-zertifiziertes Inventar und kein CSRD-Bericht, sondern eine schnelle und pragmatische Lösung für ESG-Anfragen Dritter.",
    },

    // PRODUKT / EINSATZ / GRENZEN
    {
      q: "Akzeptieren Kunden oder Beschaffungsteams den CO₂e-Nachweis?",
      a: "Ja. Er wird im Onboarding, bei Beschaffungsprüfungen und ESG-Screenings genutzt, wenn ein indikativer CO₂e-Wert erforderlich ist. Er ist kein geprüfter oder regulatorischer Bericht, sondern ein standardisiertes Format, das Prüfer schnell und konsistent über Lieferanten hinweg bewerten können.",
    },
    {
      q: "Wie lange dauert die Erstellung des Dokuments?",
      a: "Weniger als eine Minute, sobald die jährlichen Ausgaben (€) eingegeben sind. Keine Berater, keine Erhebung operativer Daten und keine Verzögerungen.",
    },
    {
      q: "Was erhalte ich genau?",
      a: "Ein strukturiertes PDF mit gesamtem CO₂e-Wert, Kategorisierung, Methodik-Version sowie der Gültigkeitsdauer des Nachweises.",
    },
    {
      q: "Wie funktioniert die Verifizierung?",
      a: "Der Nachweis kann von Dritten unabhängig verifiziert werden — über die im Dokument eingebetteten Informationen — ohne Abhängigkeit von Benutzerkonten oder der Speicherung von Finanzdaten.",
    },
    {
      q: "Welche Methodik wird verwendet?",
      a: "Eine deterministische, ausgabenbasierte Berechnung, ausgerichtet an Scope-3 Kategorie 1. Verwendet werden deklarierte finanzielle Ausgaben (€) sowie stabile, versionskontrollierte Emissionsfaktoren (ADEME, DEFRA, IPCC). Keine Scope-1/2-Bilanzierung und keine operativen Aktivitätsdaten.",
    },
    {
      q: "Werden Daten gespeichert?",
      a: "Nein. Finanzielle Eingaben werden während der Erstellung verarbeitet und nicht gespeichert. Certif-Scope speichert keine detaillierten Finanzdaten.",
    },
    {
      q: "Welche Einschränkungen gibt es?",
      a: "Es handelt sich um eine indikative, ausgabenbasierte Schätzung. Nicht geprüft, nicht CSRD/ESRS-konform, keine physischen Aktivitätsdaten und kein Ersatz für ein vollständiges Emissionsinventar.",
    },
  ];

  return (
    <section
      id="faq"
      data-section="faq"
      className="w-full bg-white dark:bg-gray-900 py-24"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* LABEL */}
        <p
          className="uppercase text-xs md:text-sm font-medium text-[#64748B] tracking-wider text-center mb-2"
          data-i18n="faq.label"
        >
          CO₂e-Nachweis — FAQ
        </p>

        {/* TITLE */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] text-center mb-12"
          data-i18n="faq.title"
        >
          Häufig gestellte Fragen
        </h2>

        {/* FAQ ITEMS */}
        <div className="space-y-4" role="list">
          {items.map((item, i) => (
            <div
              key={i}
              role="listitem"
              className="border border-gray-200 rounded-lg"
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={open === i}
                aria-controls={`faq-item-${i}`}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus-visible:outline focus-visible:outline-[#1FB6C1] focus-visible:outline-2"
              >
                <span className="font-medium text-[#0B3A63]">{item.q}</span>
                <span aria-hidden="true" className="text-xl text-[#1FB6C1]">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              {open === i && (
                <div
                  id={`faq-item-${i}`}
                  className="px-6 pb-5 text-gray-600 text-sm leading-relaxed"
                >
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* DISCLAIMER */}
        <p
          className="mt-10 text-center text-xs text-gray-500 max-w-xl mx-auto leading-relaxed"
          data-i18n="faq.disclaimer"
        >
          Indikative, ausgabenbasierte Schätzung. Nicht geprüft, nicht CSRD/ESRS-konform,
          keine Scope-1/2-Abdeckung und kein Ersatz für ein vollständiges Emissionsinventar.
          Werte hängen vollständig von den vom Nutzer bereitgestellten finanziellen Angaben ab.
        </p>
      </div>
    </section>
  );
          }
