"use client";

/* ======================================================
   CERTIF-SCOPE — KONTAKT & SUPPORT (DE)
   KEIN FORMULAR · KEINE DATENSPEICHERUNG · E-MAIL ONLY
====================================================== */

const Contact = () => {
  return (
    <section
      id="contact"
      className="overflow-hidden py-16 md:py-20 lg:py-28 bg-[#F8FAFC]"
    >
      <div className="container max-w-3xl mx-auto px-6">
        <div className="rounded-xl bg-white border border-gray-200 shadow-sm px-8 py-12">

          {/* TITLE */}
          <h1 className="mb-4 text-2xl font-bold text-[#0B3A63] sm:text-3xl">
            Kontakt & Support
          </h1>

          {/* INTRO */}
          <p className="mb-8 text-base text-gray-600 leading-relaxed">
            Bei Fragen zu Certif-Scope, zur Ausstellung von CO₂e-Nachweisen,
            zur Verifizierung oder zur institutionellen Nutzung kontaktieren
            Sie uns bitte per E-Mail.
          </p>

          {/* EMAIL BLOCK */}
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-700">
                Allgemeiner Kontakt
              </p>
              <a
                href="mailto:contact@certif-scope.io"
                className="text-[#0B3A63] font-semibold underline"
              >
                contact@certif-scope.io
              </a>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700">
                Technischer Support
              </p>
              <a
                href="mailto:support@certif-scope.io"
                className="text-[#0B3A63] font-semibold underline"
              >
                support@certif-scope.io
              </a>
            </div>
          </div>

          {/* POLICY / CLARIFICATIONS */}
          <div className="mt-10 space-y-3 text-sm text-gray-500 leading-relaxed">
            <p>
              Certif-Scope verwendet kein Ticket-System.
              Anfragen werden manuell per E-Mail bearbeitet.
            </p>

            <p>
              Mit einem Zugangsschlüssel generierte Nachweise werden <strong>nicht per E-Mail versendet</strong>.
              Das Dokument muss unmittelbar nach der Erstellung heruntergeladen
              und gespeichert werden.
            </p>

            <p>
              Certif-Scope speichert keine ausgestellten PDF-Dokumente und kann
              verlorene Nachweise nicht erneut bereitstellen.
            </p>

            <p>
              Bitte senden Sie keine sensiblen oder vertraulichen Daten per E-Mail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
