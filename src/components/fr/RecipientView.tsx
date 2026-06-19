const recipientItems = [
  "Nom de l’entreprise",
  "Année concernée",
  "Résultat CO₂e agrégé",
  "Méthode déclarée",
  "Limites visibles",
  "Date d’émission",
  "Identifiant de vérification",
  "Mention indicative, non auditée et non réglementaire",
];

export default function RecipientView() {
  return (
    <section
      id="pdf-destinataire"
      aria-labelledby="pdf-destinataire-title"
      className="bg-[#F8FAFC] py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0B3A63]/70 md:text-sm">
              Document transmis
            </p>

            <h2
              id="pdf-destinataire-title"
              className="mt-4 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl"
            >
              Ce que le destinataire verra dans le PDF
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[#0B3A63]/80 md:text-lg">
              L’objectif est de transmettre un document lisible, archivable et
              prudent, avec une méthode déclarée et des limites visibles.
            </p>

            <p className="mt-6 rounded-lg border border-[#0B3A63]/12 bg-white p-5 text-sm leading-relaxed text-[#0B3A63]/80 shadow-sm md:text-base">
              Le document ne promet pas une acceptation automatique par un
              client, une banque, un assureur ou un acheteur. Il fournit une
              réponse carbone claire, standardisée et vérifiable lorsque la
              demande reste documentaire.
            </p>

            <a
              href="/api/sample"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-[54px] w-full items-center justify-center rounded-lg bg-[#1FB6C1] px-7 py-3 text-base font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3A63] focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2 sm:w-auto"
            >
              Voir un exemple gratuit
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {recipientItems.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-[#0B3A63]/12 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 h-1 w-10 rounded-full bg-[#1FB6C1]" />
                <p className="text-base font-semibold leading-snug text-[#0B3A63]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
