export type GermanPageData = {
  path: string;
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb: string;
  quickFacts: Array<{ label: string; value: string }>;
  highlights: Array<{ title: string; body: string }>;
  sections: Array<{ title: string; body: string[]; bullets?: string[] }>;
  limits: string[];
  faq: Array<{ question: string; answer: string }>;
  related: Array<{ href: string; label: string; description: string }>;
};

const defaultLimits = [
  "Keine behördliche Zertifizierung und kein Audit durch eine akkreditierte Stelle.",
  "Keine vollstaendige Treibhausgasbilanz nach GHG Protocol oder ISO 14064.",
  "Nicht als CSRD-, ESRS- oder gesetzlicher Nachhaltigkeitsbericht gedacht.",
  "Die Aussagekraft haengt von den vom Unternehmen eingegebenen Daten ab.",
];

const defaultFaq = [
  {
    question: "Ist die Unterlage eine offizielle CO2-Zertifizierung?",
    answer:
      "Nein. Certif-Scope erstellt eine indikative CO2e-Bescheinigung zur strukturierten Kommunikation. Sie ersetzt keine behördliche Zertifizierung, kein Audit und keine regulatorische Pflichtberichterstattung.",
  },
  {
    question: "Kann die Unterlage an Banken oder Auftraggeber weitergegeben werden?",
    answer:
      "Ja, wenn der Empfaenger eine kurze, nachvollziehbare Orientierung erwartet. Bei formellen Audit-, CSRD-, ESRS- oder Vollbilanz-Anforderungen muss der konkrete Anforderungstext gesondert geprüft werden.",
  },
  {
    question: "Werden detaillierte Finanz- oder Ausgabendaten gespeichert?",
    answer:
      "Certif-Scope ist datensparsam angelegt. Detaillierte Eingaben zu Ausgaben werden nicht als dauerhafte Finanzhistorie gespeichert; verarbeitet werden nur die Daten, die zur Erstellung der Bescheinigung erforderlich sind.",
  },
];

const defaultRelated = [
  {
    href: "/de/grenzen-und-compliance/",
    label: "Grenzen & Einordnung",
    description: "Was die Bescheinigung leisten kann und was bewusst ausgeschlossen bleibt.",
  },
  {
    href: "/de/methodik/",
    label: "Methodik",
    description: "Wie die CO2e-Angaben eingeordnet und zusammengefasst werden.",
  },
  {
    href: "/de/preise/",
    label: "Preise",
    description: "Einzelbescheinigung, Pakete und typische Nutzungssituationen.",
  },
];

function publicPage(input: {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb: string;
  audience: string;
  highlights: GermanPageData["highlights"];
  sections: GermanPageData["sections"];
  faq?: GermanPageData["faq"];
  related?: GermanPageData["related"];
  limits?: string[];
}): GermanPageData {
  return {
    path: `/de/${input.slug ? `${input.slug}/` : ""}`,
    slug: input.slug,
    eyebrow: input.eyebrow,
    title: input.title,
    description: input.description,
    breadcrumb: input.breadcrumb,
    quickFacts: [
      { label: "Art", value: "Indikative CO2e-Unterlage für Geschäftskommunikation" },
      { label: "Geeignet für", value: input.audience },
      { label: "Nicht geeignet für", value: "Audit, offizielle Zertifizierung oder Vollbilanz" },
    ],
    highlights: input.highlights,
    sections: input.sections,
    limits: input.limits ?? defaultLimits,
    faq: input.faq ?? defaultFaq,
    related: input.related ?? defaultRelated,
  };
}

const co2BilanzRelated = [
  {
    href: "/de/co2-bilanz-kmu/kosten/",
    label: "Kosten einer CO2-Bilanz",
    description: "Einordnung der typischen Kosten- und Detailstufen für KMU.",
  },
  {
    href: "/de/co2-bilanz-kmu/beispiel/",
    label: "Beispiel für KMU",
    description: "Wie eine kompakte CO2e-Unterlage aufgebaut sein kann.",
  },
  {
    href: "/de/co2-bilanz-vs-co2-bescheinigung/",
    label: "Bilanz oder Bescheinigung?",
    description: "Unterschied zwischen Vollbilanz und kurzer CO2e-Bescheinigung.",
  },
];

const supplierRelated = [
  {
    href: "/de/co2-angaben-ausschreibung/",
    label: "Ausschreibung",
    description: "CO2e-Angaben für Vergabe- und Angebotsunterlagen.",
  },
  {
    href: "/de/co2-nachweis-lieferanten/",
    label: "Lieferanten",
    description: "Kurze Unterlage für Kunden- und Lieferantenanfragen.",
  },
  {
    href: "/de/co2-dokument-lieferanten/",
    label: "Lieferantendokument",
    description: "Was ein Empfänger in einem standardisierten Dokument sieht.",
  },
];

const whyRelated = [
  {
    href: "/de/warum-unternehmen-co2-angaben-anfordern/leitfaden/",
    label: "Leitfaden",
    description: "Warum CO2e-Angaben heute häufiger in B2B-Prozessen auftauchen.",
  },
  {
    href: "/de/warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-lieferanten/",
    label: "Lieferantenanfrage",
    description: "Wie Lieferanten auf kompakte CO2-Anfragen reagieren können.",
  },
  {
    href: "/de/warum-unternehmen-co2-angaben-anfordern/banken-versicherungen/",
    label: "Banken & Versicherungen",
    description: "Warum Finanzpartner ESG- oder CO2e-Unterlagen anfordern.",
  },
];

export const homePage: GermanPageData = publicPage({
  slug: "",
  eyebrow: "Deutschland",
  title: "Wird eine CO2-Bilanz oder ein CO2e-Nachweis angefragt?",
  description:
    "Certif-Scope hilft deutschen KMU, eine indikative CO2e-Bescheinigung klar, vorsichtig und empfängerfreundlich vorzubereiten, wenn ein vollständiges Audit nicht verlangt wird.",
  breadcrumb: "Start",
  audience:
    "KMU, Lieferanten, Dienstleister und kleine B2B-Teams mit einer pragmatischen Dokumentationsanfrage",
  highlights: [
    {
      title: "Für Empfänger lesbar",
      body: "Die Unterlage fasst die wichtigsten CO2e-Informationen strukturiert zusammen, damit Banken, Versicherungen, Kunden oder Vergabestellen sie schneller einordnen können.",
    },
    {
      title: "Vorsichtige Sprache",
      body: "Die deutsche Fassung vermeidet Audit-, Zertifizierungs- oder regulatorische Erfüllungsversprechen und positioniert die Bescheinigung als indikative Dokumentation.",
    },
    {
      title: "Datensparsam",
      body: "Der Ablauf ist auf die Erstellung der Bescheinigung begrenzt. Detaillierte Ausgaben werden nicht als dauerhafte Finanzhistorie gespeichert.",
    },
  ],
  sections: [
    {
      title: "Wann Certif-Scope passt",
      body: [
        "Viele Unternehmen erhalten heute kurze Anfragen nach CO2e-Angaben, obwohl kein vollständiges Nachhaltigkeitsreporting verlangt wird.",
        "Certif-Scope ist für diesen Zwischenfall gedacht: Es geht um eine kompakte, nachvollziehbare Unterlage, nicht um eine geprüfte Vollbilanz.",
      ],
      bullets: [
        "Bank- oder Versicherungsanfrage mit ESG-Kontext",
        "Lieferantenportal oder Kundenfragebogen mit CO2e-Feld",
        "Ausschreibungsunterlage mit kurzer Klima- oder Emissionsabfrage",
      ],
    },
    {
      title: "Was der Empfänger erhält",
      body: [
        "Das PDF enthält eine zusammengefasste CO2e-Angabe, eine methodische Einordnung, eine klare Begrenzung der Aussage und eine Dokument-ID.",
        "Damit bleibt die Unterlage professionell, ohne einen strengeren Nachweis vorzutäuschen, als tatsächlich erstellt wurde.",
      ],
    },
    {
      title: "Was bewusst ausgeschlossen bleibt",
      body: [
        "Die Bescheinigung ist kein Audit, keine behördliche Anerkennung, keine CSRD- oder ESRS-Berichterstattung und keine vollständige Scope-1-2-3-Inventur.",
        "Wenn ein Empfänger ausdrücklich eine geprüfte Bilanz oder einen bestimmten Standard verlangt, sollte diese Anforderung vorab gesondert geklärt werden.",
      ],
    },
    {
      title: "Deutscher Marktkontext",
      body: [
        "Die deutsche Lokalisierung ist auf vorsichtige B2B-Kommunikation ausgelegt: Banken, Versicherungen, Auftraggeber und Lieferkettenpartner benötigen oft eine einheitliche, schnell prüfbare Darstellung.",
        "Certif-Scope hilft, diese Darstellung sauber zu formulieren, ohne über die Grenzen einer indikativen Bescheinigung hinauszugehen.",
      ],
    },
  ],
  related: [
    {
      href: "/de/co2-bilanz-kmu/",
      label: "CO2-Bilanz KMU",
      description: "Einordnung für kleine und mittlere Unternehmen.",
    },
    {
      href: "/de/co2-bescheinigung/",
      label: "CO2e-Bescheinigung",
      description: "Was eine kompakte Bescheinigung enthält.",
    },
    {
      href: "/de/warum-unternehmen-co2-angaben-anfordern/",
      label: "Warum Anfragen zunehmen",
      description: "Hintergrund zu B2B-, ESG- und Lieferkettenanfragen.",
    },
  ],
});

export const germanPages: Record<string, GermanPageData> = {
  preise: publicPage({
    slug: "preise",
    eyebrow: "Preise",
    title: "Klare Preise für indikative CO2e-Bescheinigungen",
    description:
      "Eine Einzelbescheinigung kostet 89 EUR. Für wiederkehrende Lieferanten-, Bank- oder Ausschreibungsanfragen sind Paketnutzungen vorgesehen, ohne die fachlichen Grenzen der Unterlage zu verändern.",
    breadcrumb: "Preise",
    audience: "Teams, die vor der Erstellung Umfang, Grenzen und Kosten prüfen wollen",
    highlights: [
      {
        title: "Einzelbescheinigung",
        body: "Eine kompakte CO2e-Unterlage für einen konkreten Empfänger oder Geschäftsvorgang.",
      },
      {
        title: "Pakete für Wiederholung",
        body: "Geeignet, wenn mehrere ähnliche Anfragen im Jahr beantwortet werden müssen.",
      },
      {
        title: "Keine versteckte Aufwertung",
        body: "Der Preis ändert nicht den Charakter der Unterlage: Sie bleibt indikativ und nicht auditbasiert.",
      },
    ],
    sections: [
      {
        title: "Was im Preis enthalten ist",
        body: [
          "Enthalten ist die Erstellung einer strukturierten CO2e-Bescheinigung als PDF mit zusammenfassender Darstellung, methodischer Einordnung und klaren Grenzen.",
          "Die Unterlage ist für die Weitergabe an einen Geschäftsempfänger gedacht, wenn keine vollständige geprüfte Bilanz verlangt wird.",
        ],
        bullets: [
          "CO2e-Zusammenfassung",
          "Dokument-ID und nachvollziehbare Angaben",
          "PDF für Bank-, Kunden-, Versicherungs- oder Ausschreibungskontext",
        ],
      },
      {
        title: "Wann ein Paket sinnvoll ist",
        body: [
          "Pakete sind vor allem sinnvoll, wenn ein Unternehmen ähnliche Bescheinigungen für mehrere Empfänger oder Zeitpunkte benötigt.",
          "Die Pakete verändern keine Berechnung, keine Aussagekraft und keine rechtliche Einordnung der Bescheinigung.",
        ],
      },
      {
        title: "Wann Certif-Scope nicht ausreicht",
        body: [
          "Wenn der Empfänger eine geprüfte Treibhausgasbilanz, eine formelle Nachhaltigkeitsberichterstattung oder einen bestimmten Auditstandard verlangt, ist eine indikative Bescheinigung nicht ausreichend.",
        ],
      },
      {
        title: "Vor der Zahlung prüfen",
        body: [
          "Der empfohlene Ablauf ist, zuerst die Anforderung des Empfängers zu lesen und dann zu entscheiden, ob eine kompakte Bescheinigung genügt.",
        ],
      },
    ],
  }),

  produkt: publicPage({
    slug: "produkt",
    eyebrow: "Produkt",
    title: "Eine kompakte CO2e-Unterlage für B2B-Anfragen",
    description:
      "Certif-Scope übersetzt ausgewählte Unternehmensangaben in eine lesbare, indikative Bescheinigung, die für Empfänger leichter zu prüfen und einzuordnen ist.",
    breadcrumb: "Produkt",
    audience: "KMU mit konkreter Anfrage nach CO2e- oder ESG-Basisinformationen",
    highlights: [
      {
        title: "Struktur statt Freitext",
        body: "Die Angaben werden in ein einheitliches Dokument gebracht, statt als lose E-Mail oder Tabellenfragment versendet zu werden.",
      },
      {
        title: "Empfängerorientiert",
        body: "Die Bescheinigung erklärt, was berechnet wurde und welche Grenzen gelten.",
      },
      {
        title: "Keine Überbehauptung",
        body: "Der Text bleibt bewusst vorsichtig und vermeidet den Eindruck eines Audits.",
      },
    ],
    sections: [
      {
        title: "Kernnutzen",
        body: [
          "Das Produkt reduziert Reibung, wenn ein Unternehmen kurzfristig eine CO2e-Angabe liefern soll, aber keine umfassende Nachhaltigkeitsabteilung hat.",
          "Es hilft, aus einer Anfrage eine saubere, nachvollziehbare Unterlage zu machen.",
        ],
      },
      {
        title: "Typische Empfänger",
        body: [
          "Zu den häufigsten Empfängern zählen Banken, Versicherungen, Kunden in Lieferketten, Ausschreibungsstellen und B2B-Plattformen.",
        ],
        bullets: ["Banken und Leasingpartner", "Versicherungen", "Kunden und Auftraggeber", "Vergabe- und Lieferantenportale"],
      },
      {
        title: "Was nicht versprochen wird",
        body: [
          "Certif-Scope verspricht keine regulatorische Anerkennung und keine vollständige Scope-1-2-3-Bilanz.",
          "Die Bescheinigung ist eine geordnete Orientierung, kein Ersatz für eine externe Prüfung.",
        ],
      },
      {
        title: "Warum das Format wichtig ist",
        body: [
          "Ein standardisiertes Dokument kann helfen, Rückfragen zu verringern, weil Empfänger nicht nur eine Zahl, sondern auch Kontext, Grenzen und Zweck sehen.",
        ],
      },
    ],
  }),

  "grenzen-und-compliance": publicPage({
    slug: "grenzen-und-compliance",
    eyebrow: "Einordnung",
    title: "Grenzen der CO2e-Bescheinigung klar verstehen",
    description:
      "Die deutsche Fassung macht transparent, wann die Certif-Scope-Unterlage hilfreich ist und wann eine andere Form von Nachweis erforderlich bleibt.",
    breadcrumb: "Grenzen & Compliance",
    audience: "Unternehmen, die vermeiden wollen, eine kompakte Unterlage zu überdehnen",
    highlights: [
      {
        title: "Indikativ",
        body: "Die Bescheinigung bietet Orientierung auf Basis eingegebener Daten.",
      },
      {
        title: "Nicht regulatorisch",
        body: "Sie ersetzt keine gesetzliche Berichterstattung und keine Pflichtprüfung.",
      },
      {
        title: "Empfänger prüfen",
        body: "Der genaue Wortlaut der Anfrage bleibt entscheidend.",
      },
    ],
    sections: [
      {
        title: "Geeignete Fälle",
        body: [
          "Geeignet ist Certif-Scope, wenn ein Empfänger eine kurze, plausible CO2e-Unterlage für eine erste Einordnung verlangt.",
        ],
      },
      {
        title: "Nicht geeignete Fälle",
        body: [
          "Nicht geeignet ist die Unterlage, wenn ein formelles Audit, eine gesetzliche Bilanz oder eine vollständige Verifizierung gefordert ist.",
        ],
      },
      {
        title: "Sprache im PDF",
        body: [
          "Das Dokument benennt seine Grenzen ausdrücklich. Es stellt nicht den Anspruch, ein offizieller Nachweis oder eine vollständige Klimabilanz zu sein.",
        ],
      },
      {
        title: "Praktischer Umgang",
        body: [
          "Wenn die Anfrage unklar ist, sollte das Unternehmen beim Empfänger nachfragen, ob eine indikative Bescheinigung genügt.",
        ],
      },
    ],
  }),

  methodik: publicPage({
    slug: "methodik",
    eyebrow: "Methodik",
    title: "Methodische Einordnung der indikativen CO2e-Bescheinigung",
    description:
      "Die Methodik erklärt, wie Certif-Scope Angaben strukturiert, zusammenfasst und mit einer vorsichtigen Aussage für Empfänger lesbar macht.",
    breadcrumb: "Methodik",
    audience: "Empfänger und Unternehmen, die verstehen wollen, wie die Unterlage zustande kommt",
    highlights: [
      {
        title: "Zusammenfassung",
        body: "Die Unterlage stellt aggregierte CO2e-Informationen dar.",
      },
      {
        title: "Kontext",
        body: "Methodische Hinweise erklären den Zweck und die Grenzen der Aussage.",
      },
      {
        title: "Nachvollziehbarkeit",
        body: "Eine Dokument-ID erleichtert die Zuordnung der Bescheinigung.",
      },
    ],
    sections: [
      {
        title: "Grundprinzip",
        body: [
          "Certif-Scope ist auf eine pragmatische, indikative Zusammenfassung ausgelegt. Die Aussage hängt von den eingegebenen Unternehmensinformationen ab.",
        ],
      },
      {
        title: "Keine Vollinventur",
        body: [
          "Die Bescheinigung erhebt nicht den Anspruch, alle Emissionsquellen eines Unternehmens vollständig abzubilden.",
        ],
      },
      {
        title: "Dokumentaufbau",
        body: [
          "Das PDF kombiniert Ergebnis, methodische Hinweise, Grenzen, Ausstellungsdaten und eine eindeutige Dokumentreferenz.",
        ],
      },
      {
        title: "Sinnvolle Verwendung",
        body: [
          "Die Methodik passt zu ersten B2B-Anfragen, Lieferantenkommunikation und internen Vorabklärungen, nicht zu formellen Prüfpflichten.",
        ],
      },
    ],
  }),

  "co2-bilanz-kmu": publicPage({
    slug: "co2-bilanz-kmu",
    eyebrow: "KMU",
    title: "CO2-Bilanz für KMU: Wann eine kurze CO2e-Bescheinigung genügt",
    description:
      "Für viele KMU ist nicht sofort eine vollständige Treibhausgasbilanz erforderlich. Certif-Scope hilft bei einer kompakten Unterlage für konkrete Anfragen.",
    breadcrumb: "CO2-Bilanz KMU",
    audience: "Kleine und mittlere Unternehmen mit pragmatischer CO2e-Anfrage",
    highlights: [
      {
        title: "Schnelle Orientierung",
        body: "Hilfreich, wenn eine Anfrage kurzfristig beantwortet werden muss.",
      },
      {
        title: "Klare Grenzen",
        body: "Die Unterlage benennt, dass sie keine Vollbilanz ersetzt.",
      },
      {
        title: "B2B-tauglich",
        body: "Geeignet für häufige Geschäftsanfragen ohne Auditpflicht.",
      },
    ],
    sections: [
      {
        title: "Warum KMU danach gefragt werden",
        body: [
          "CO2e-Angaben werden zunehmend in Lieferketten, Finanzierungsprozessen und Ausschreibungen abgefragt.",
          "Oft soll zuerst nur eine einheitliche, lesbare Einschätzung geliefert werden.",
        ],
      },
      {
        title: "Unterschied zur Vollbilanz",
        body: [
          "Eine vollständige Bilanz ist deutlich breiter, datenintensiver und meist mit externem Fachaufwand verbunden.",
          "Certif-Scope deckt den kompakten Dokumentationsbedarf ab, wenn dieser geringere Detailgrad akzeptiert wird.",
        ],
      },
      {
        title: "Typische Nutzung",
        body: [
          "Die Bescheinigung kann einer E-Mail, einem Lieferantenportal oder einer Ausschreibungsantwort beigefügt werden.",
        ],
      },
      {
        title: "Prüfung der Anforderung",
        body: [
          "Entscheidend bleibt, ob der Empfänger ausdrücklich eine geprüfte Bilanz oder einen bestimmten Standard verlangt.",
        ],
      },
    ],
    related: co2BilanzRelated,
  }),

  "co2-bilanz-kmu/kosten": publicPage({
    slug: "co2-bilanz-kmu/kosten",
    eyebrow: "Kosten",
    title: "Was kostet eine CO2-Bilanz für KMU?",
    description:
      "Die Kosten hängen stark davon ab, ob eine vollständige Bilanz, ein Audit oder nur eine kompakte indikative Unterlage benötigt wird.",
    breadcrumb: "Kosten",
    audience: "KMU, die Aufwand und geeignete Nachweistiefe einschätzen wollen",
    highlights: [
      {
        title: "Kosten folgen dem Anspruch",
        body: "Je formeller die Anforderung, desto höher ist typischerweise der Daten- und Beratungsaufwand.",
      },
      {
        title: "89 EUR für die Bescheinigung",
        body: "Certif-Scope deckt den kompakten, indikativen Nachweisbedarf ab.",
      },
      {
        title: "Kein Ersatz für Beratung",
        body: "Bei anspruchsvollen Standards bleibt externe Expertise erforderlich.",
      },
    ],
    sections: [
      {
        title: "Warum Preise stark variieren",
        body: [
          "Eine einfache CO2e-Bescheinigung, eine Scope-Analyse und eine geprüfte Vollbilanz sind unterschiedliche Leistungen.",
          "Die Kosten steigen mit Datenumfang, Standortzahl, Auditbedarf und Berichtstiefe.",
        ],
      },
      {
        title: "Wo Certif-Scope liegt",
        body: [
          "Certif-Scope ist für den schmalen Bedarf einer kompakten, empfängerlesbaren Unterlage gedacht.",
        ],
      },
      {
        title: "Wann mehr Aufwand nötig ist",
        body: [
          "Wenn der Empfänger einen bestimmten Standard, eine externe Prüfung oder vollständige Scope-Abdeckung fordert, sollte keine Kurzbescheinigung gewählt werden.",
        ],
      },
      {
        title: "Praktische Entscheidung",
        body: [
          "Der beste Startpunkt ist der Wortlaut der Anfrage: Er entscheidet, ob eine indikative Bescheinigung genügt.",
        ],
      },
    ],
    related: co2BilanzRelated,
  }),

  "co2-bilanz-kmu/beispiel": publicPage({
    slug: "co2-bilanz-kmu/beispiel",
    eyebrow: "Beispiel",
    title: "Beispiel für eine kompakte CO2e-Unterlage",
    description:
      "Ein gutes Beispiel zeigt nicht nur eine Zahl, sondern auch Zweck, methodische Einordnung und Grenzen der Aussage.",
    breadcrumb: "Beispiel",
    audience: "Unternehmen, die vorab sehen möchten, wie ein empfängerfreundliches Dokument aufgebaut ist",
    highlights: [
      {
        title: "Ergebnis",
        body: "Aggregierte CO2e-Angabe als kompakte Orientierung.",
      },
      {
        title: "Kontext",
        body: "Kurze Erklärung, wofür die Unterlage gedacht ist.",
      },
      {
        title: "Grenzen",
        body: "Klare Hinweise, dass es sich nicht um ein Audit handelt.",
      },
    ],
    sections: [
      {
        title: "Was ein Beispiel leisten soll",
        body: [
          "Ein Beispiel hilft, den erwarteten Detailgrad zu verstehen, bevor eine Bescheinigung erstellt wird.",
        ],
      },
      {
        title: "Aufbau des Dokuments",
        body: [
          "Die Darstellung sollte Ergebnis, Unternehmensbezug, methodische Hinweise und Grenzen in einem lesbaren Format verbinden.",
        ],
      },
      {
        title: "Warum Grenzen sichtbar sind",
        body: [
          "Empfänger sollen erkennen, dass die Unterlage für eine erste Dokumentation gedacht ist und keine formelle Prüfung ersetzt.",
        ],
      },
      {
        title: "Kostenloses Muster",
        body: [
          "Ein Beispiel-PDF kann geladen werden, um Format und Tonalität zu prüfen.",
        ],
      },
    ],
    related: co2BilanzRelated,
  }),

  "co2-bilanz-kmu/pdf-vorlage": publicPage({
    slug: "co2-bilanz-kmu/pdf-vorlage",
    eyebrow: "PDF-Vorlage",
    title: "PDF-Vorlage für eine indikative CO2e-Bescheinigung",
    description:
      "Die PDF-Vorlage zeigt, welche Informationen in einer kompakten CO2e-Unterlage sinnvoll strukturiert werden.",
    breadcrumb: "PDF-Vorlage",
    audience: "Teams, die Format, Inhalt und Grenzen einer CO2e-Bescheinigung prüfen wollen",
    highlights: [
      {
        title: "Standardisiert",
        body: "Einheitlicher Aufbau erleichtert die Weitergabe.",
      },
      {
        title: "Lesbar",
        body: "Empfänger sehen Ergebnis und Einordnung zusammen.",
      },
      {
        title: "Begrenzt",
        body: "Die Vorlage vermeidet Aussagen, die über den indikativen Charakter hinausgehen.",
      },
    ],
    sections: [
      {
        title: "Zweck der Vorlage",
        body: [
          "Eine Vorlage ersetzt keine fachliche Prüfung, kann aber helfen, wiederkehrende Anfragen konsistent zu beantworten.",
        ],
      },
      {
        title: "Typische Elemente",
        body: [
          "Ergebnis, Unternehmensbezug, methodische Einordnung, Dokument-ID, Datum und Grenzhinweise gehören zusammen.",
        ],
      },
      {
        title: "Warum kein Marketingblatt",
        body: [
          "Das Format ist nüchtern gehalten, damit es in Bank-, Lieferanten- oder Ausschreibungskontexten ernst genommen wird.",
        ],
      },
      {
        title: "Empfängerperspektive",
        body: [
          "Der Empfänger soll schnell erkennen, was belegt wird und was nicht belegt wird.",
        ],
      },
    ],
    related: co2BilanzRelated,
  }),

  "co2-bilanz-kmu/pflicht": publicPage({
    slug: "co2-bilanz-kmu/pflicht",
    eyebrow: "Pflicht",
    title: "Ist eine CO2-Bilanz für KMU Pflicht?",
    description:
      "Viele KMU haben keine allgemeine Pflicht zur vollständigen CO2-Bilanz, werden aber dennoch von Geschäftspartnern nach CO2e-Unterlagen gefragt.",
    breadcrumb: "Pflicht",
    audience: "KMU, die zwischen gesetzlicher Pflicht und Geschäftsanfrage unterscheiden müssen",
    highlights: [
      {
        title: "Anfrage ist nicht Pflicht",
        body: "Eine B2B-Anfrage ist etwas anderes als eine gesetzliche Berichtspflicht.",
      },
      {
        title: "Wortlaut zählt",
        body: "Der Text des Empfängers entscheidet über den erforderlichen Nachweis.",
      },
      {
        title: "Vorsichtige Antwort",
        body: "Eine indikative Bescheinigung kann reichen, wenn keine formelle Bilanz verlangt wird.",
      },
    ],
    sections: [
      {
        title: "Warum die Frage entsteht",
        body: [
          "Große Kunden, Banken oder Versicherungen stellen ESG- und CO2e-Fragen oft entlang eigener Prozesse.",
        ],
      },
      {
        title: "Geschäftliche Anforderung",
        body: [
          "Auch ohne allgemeine Pflicht kann ein Unternehmen eine Unterlage brauchen, um einen Auftrag, Vertrag oder Finanzierungsprozess voranzubringen.",
        ],
      },
      {
        title: "Grenzen der Bescheinigung",
        body: [
          "Certif-Scope ersetzt keine rechtliche Prüfung und keine formelle Bilanzierungspflicht.",
        ],
      },
      {
        title: "Empfohlene Vorgehensweise",
        body: [
          "Bei Unklarheit sollte der Empfänger bestätigen, ob eine indikative CO2e-Bescheinigung akzeptiert wird.",
        ],
      },
    ],
    related: co2BilanzRelated,
  }),

  "co2-angaben-ausschreibung": publicPage({
    slug: "co2-angaben-ausschreibung",
    eyebrow: "Ausschreibung",
    title: "CO2e-Angaben für Ausschreibungen vorbereiten",
    description:
      "Wenn eine Ausschreibung eine kurze CO2e-Angabe verlangt, kann eine indikative Bescheinigung helfen, die Antwort sauber zu strukturieren.",
    breadcrumb: "Ausschreibung",
    audience: "Anbieter, die in Vergabe- oder Angebotsunterlagen eine CO2e-Angabe beilegen müssen",
    highlights: [
      {
        title: "Angebotsfähig",
        body: "Kompakte Unterlage zur Ergänzung einer Ausschreibungsantwort.",
      },
      {
        title: "Nachvollziehbar",
        body: "Empfänger sehen Ergebnis, Zweck und Grenzen zusammen.",
      },
      {
        title: "Nicht für formelle Nachweise",
        body: "Bei explizitem Audit- oder Standarderfordernis reicht die Bescheinigung nicht.",
      },
    ],
    sections: [
      {
        title: "Typische Situation",
        body: [
          "Ausschreibungen enthalten zunehmend ESG- oder CO2e-Felder, ohne immer eine vollständige Bilanz zu verlangen.",
        ],
      },
      {
        title: "Was beigefügt werden kann",
        body: [
          "Die Bescheinigung kann als Anlage dienen, wenn eine kurze, strukturierte Erläuterung genügt.",
        ],
      },
      {
        title: "Was vorher geprüft werden sollte",
        body: [
          "Formulierungen wie Audit, geprüfte Bilanz oder spezifischer Standard deuten darauf hin, dass eine kompakte Bescheinigung nicht ausreicht.",
        ],
      },
      {
        title: "Sichere Formulierung",
        body: [
          "Die deutsche Fassung hält die Aussage bewusst indikativ und vermeidet regulatorische Versprechen.",
        ],
      },
    ],
    related: supplierRelated,
  }),

  "co2-nachweis-lieferanten": publicPage({
    slug: "co2-nachweis-lieferanten",
    eyebrow: "Lieferanten",
    title: "CO2e-Nachweis für Lieferantenanfragen",
    description:
      "Lieferanten können eine kompakte CO2e-Bescheinigung nutzen, wenn Kunden eine erste, strukturierte Orientierung erwarten.",
    breadcrumb: "Lieferanten",
    audience: "Lieferanten und Dienstleister mit wiederkehrenden Kundenanfragen",
    highlights: [
      {
        title: "Kundenfrage beantworten",
        body: "Eine einheitliche PDF-Unterlage ist oft leichter zu prüfen als Freitext.",
      },
      {
        title: "Grenzen transparent",
        body: "Der Empfänger erkennt, dass es sich um eine indikative Darstellung handelt.",
      },
      {
        title: "Wiederverwendbar im Prozess",
        body: "Ähnliche Anfragen können konsistenter beantwortet werden.",
      },
    ],
    sections: [
      {
        title: "Warum Kunden fragen",
        body: [
          "Größere Auftraggeber sammeln CO2e-Informationen, um eigene Einkaufs-, Risiko- oder Nachhaltigkeitsprozesse zu unterstützen.",
        ],
      },
      {
        title: "Was geliefert wird",
        body: [
          "Die Bescheinigung liefert eine strukturierte Antwort, aber keinen geprüften Lieferkettennachweis.",
        ],
      },
      {
        title: "Wann Rückfrage sinnvoll ist",
        body: [
          "Wenn der Kunde eine bestimmte Norm, Auditstufe oder vollständige Scope-Abdeckung nennt, sollte die Anforderung vorab geklärt werden.",
        ],
      },
      {
        title: "Professioneller Ton",
        body: [
          "Die Unterlage ist nüchtern formuliert und eignet sich für Einkaufs-, Compliance- und Nachhaltigkeitsteams.",
        ],
      },
    ],
    related: supplierRelated,
  }),

  "co2-fussabdruck-unternehmen": publicPage({
    slug: "co2-fussabdruck-unternehmen",
    eyebrow: "Unternehmen",
    title: "CO2-Fußabdruck eines Unternehmens kompakt einordnen",
    description:
      "Der Unternehmens-CO2-Fußabdruck kann auf verschiedenen Detailstufen betrachtet werden. Certif-Scope deckt die kurze, indikative Dokumentationsstufe ab.",
    breadcrumb: "CO2-Fußabdruck Unternehmen",
    audience: "Unternehmen, die eine erste empfängerorientierte CO2e-Unterlage benötigen",
    highlights: [
      {
        title: "Erste Orientierung",
        body: "Eine kompakte Darstellung für konkrete Geschäftsanfragen.",
      },
      {
        title: "Keine Vollanalyse",
        body: "Nicht alle Standorte, Quellen oder Scope-Kategorien werden vollständig inventarisiert.",
      },
      {
        title: "Anschlussfähig",
        body: "Kann als erster Schritt vor tieferer Beratung dienen.",
      },
    ],
    sections: [
      {
        title: "Begriff einordnen",
        body: [
          "Der Begriff CO2-Fußabdruck wird im Markt unterschiedlich verwendet: von grober Orientierung bis zu geprüfter Vollbilanz.",
        ],
      },
      {
        title: "Certif-Scope-Stufe",
        body: [
          "Certif-Scope positioniert sich bewusst auf der kompakten Dokumentationsstufe.",
        ],
      },
      {
        title: "Empfängerbedarf",
        body: [
          "Für viele B2B-Anfragen genügt zunächst ein lesbarer Nachweisrahmen mit klarer Begrenzung.",
        ],
      },
      {
        title: "Nächste Ausbaustufe",
        body: [
          "Wenn eine Organisation strategisch steuern oder berichten will, ist eine umfassendere Bilanz sinnvoll.",
        ],
      },
    ],
  }),

  "co2-bescheinigung": publicPage({
    slug: "co2-bescheinigung",
    eyebrow: "Bescheinigung",
    title: "CO2e-Bescheinigung für Geschäftsanfragen",
    description:
      "Eine CO2e-Bescheinigung fasst ausgewählte Angaben so zusammen, dass ein Empfänger sie schnell einordnen kann.",
    breadcrumb: "CO2e-Bescheinigung",
    audience: "Unternehmen, die eine kurze CO2e-Unterlage weitergeben müssen",
    highlights: [
      {
        title: "Kompakt",
        body: "Fokus auf die Informationen, die für eine erste Einordnung relevant sind.",
      },
      {
        title: "Dokumentiert",
        body: "PDF mit Ergebnis, Kontext, Grenzen und Referenz.",
      },
      {
        title: "Vorsichtig",
        body: "Keine Vermischung mit Audit- oder Zertifizierungsansprüchen.",
      },
    ],
    sections: [
      {
        title: "Was eine Bescheinigung ist",
        body: [
          "Im Certif-Scope-Kontext ist die Bescheinigung eine strukturierte, indikative Unterlage für einen konkreten geschäftlichen Zweck.",
        ],
      },
      {
        title: "Was sie nicht ist",
        body: [
          "Sie ist keine amtliche Bestätigung, keine externe Prüfung und kein vollständiger Nachhaltigkeitsbericht.",
        ],
      },
      {
        title: "Was Empfänger sehen",
        body: [
          "Empfänger sehen Ergebnis, Unternehmensbezug, methodische Einordnung, Grenzhinweise und Dokumentdaten.",
        ],
      },
      {
        title: "Wann sie sinnvoll ist",
        body: [
          "Sinnvoll ist sie bei frühen oder pragmatischen CO2e-Anfragen, bei denen eine klare, knappe Unterlage akzeptiert wird.",
        ],
      },
    ],
    related: supplierRelated,
  }),

  "co2-bescheinigung-kmu": publicPage({
    slug: "co2-bescheinigung-kmu",
    eyebrow: "KMU",
    title: "CO2e-Bescheinigung für kleine und mittlere Unternehmen",
    description:
      "KMU können mit einer kompakten Bescheinigung auf CO2e-Anfragen reagieren, ohne eine vollständige Berichtsinfrastruktur aufzubauen.",
    breadcrumb: "CO2e-Bescheinigung KMU",
    audience: "KMU ohne eigene Nachhaltigkeitsabteilung",
    highlights: [
      {
        title: "Niedrige Einstiegshürde",
        body: "Für konkrete Anfragen, bei denen keine formelle Vollbilanz verlangt wird.",
      },
      {
        title: "B2B-kompatibel",
        body: "Sprache und Format sind auf professionelle Empfänger ausgerichtet.",
      },
      {
        title: "Nicht überdehnt",
        body: "Grenzen werden im Dokument sichtbar gemacht.",
      },
    ],
    sections: [
      {
        title: "Warum speziell für KMU",
        body: [
          "Kleine Unternehmen müssen oft schnell reagieren, haben aber nicht immer Budget oder Datenlage für umfangreiche Beratung.",
        ],
      },
      {
        title: "Typische Empfänger",
        body: [
          "Banken, Versicherungen, Auftraggeber, Einkaufsabteilungen und Plattformen fragen solche Unterlagen an.",
        ],
      },
      {
        title: "Gute Nutzung",
        body: [
          "Die Bescheinigung eignet sich als Anhang, wenn ein Empfänger eine pragmatische Orientierung akzeptiert.",
        ],
      },
      {
        title: "Nicht als Pflichtbericht",
        body: [
          "Sie sollte nicht als Ersatz für gesetzliche Berichtspflichten oder geprüfte Klimabilanzen verstanden werden.",
        ],
      },
    ],
  }),

  "scope-1-2-3-erklaert": publicPage({
    slug: "scope-1-2-3-erklaert",
    eyebrow: "Scopes",
    title: "Scope 1, 2 und 3 einfach erklärt",
    description:
      "Scope 1, 2 und 3 beschreiben unterschiedliche Emissionsbereiche. Für viele kurze Anfragen genügt zunächst eine vorsichtige Einordnung.",
    breadcrumb: "Scope 1, 2 und 3",
    audience: "Unternehmen, die Begriffe in Kunden- oder Bankanfragen einordnen müssen",
    highlights: [
      {
        title: "Scope 1",
        body: "Direkte Emissionen aus eigenen oder kontrollierten Quellen.",
      },
      {
        title: "Scope 2",
        body: "Indirekte Emissionen aus eingekaufter Energie.",
      },
      {
        title: "Scope 3",
        body: "Weitere indirekte Emissionen entlang Wertschöpfungsketten.",
      },
    ],
    sections: [
      {
        title: "Warum die Begriffe wichtig sind",
        body: [
          "Empfänger nutzen Scope-Begriffe, um den Umfang einer CO2e-Aussage besser zu verstehen.",
        ],
      },
      {
        title: "Warum Vorsicht nötig ist",
        body: [
          "Eine vollständige Scope-3-Erfassung kann sehr aufwendig sein und ist nicht mit einer kurzen Bescheinigung gleichzusetzen.",
        ],
      },
      {
        title: "Certif-Scope-Einordnung",
        body: [
          "Die Unterlage macht ihren indikativen Charakter deutlich und vermeidet den Eindruck einer vollständigen Scope-Inventur.",
        ],
      },
      {
        title: "Praktischer Nutzen",
        body: [
          "Sie hilft, eine Anfrage lesbar zu beantworten, ohne die fachlichen Grenzen zu verschleiern.",
        ],
      },
    ],
  }),

  "bank-esg-unterlagen-kmu": publicPage({
    slug: "bank-esg-unterlagen-kmu",
    eyebrow: "Banken",
    title: "ESG- und CO2e-Unterlagen für Bankanfragen von KMU",
    description:
      "Banken fragen bei Finanzierungen oder Risikoprüfungen zunehmend nach ESG- und CO2e-Informationen. Certif-Scope hilft bei einer kompakten Unterlage.",
    breadcrumb: "Banken",
    audience: "KMU mit Bank-, Leasing- oder Finanzierungsgespräch",
    highlights: [
      {
        title: "Finanzierungskontext",
        body: "Geeignet für erste Informationsanforderungen im Bankprozess.",
      },
      {
        title: "Dokument statt E-Mail",
        body: "Eine PDF-Unterlage ist leichter intern weiterzugeben.",
      },
      {
        title: "Keine Garantie",
        body: "Die Bescheinigung ersetzt keine bankinterne Prüfung.",
      },
    ],
    sections: [
      {
        title: "Warum Banken fragen",
        body: [
          "Finanzinstitute integrieren Nachhaltigkeits- und Klimarisiken zunehmend in interne Prozesse.",
        ],
      },
      {
        title: "Welche Unterlage helfen kann",
        body: [
          "Eine indikative CO2e-Bescheinigung kann eine erste Antwort liefern, wenn keine formelle Bilanz verlangt wird.",
        ],
      },
      {
        title: "Grenze der Nutzung",
        body: [
          "Die Bank entscheidet selbst, welche Nachweise sie akzeptiert. Certif-Scope gibt keine Finanzierungszusage.",
        ],
      },
      {
        title: "Praktischer Ablauf",
        body: [
          "Unternehmen sollten die Anfrage speichern und prüfen, ob ausdrücklich ein bestimmter Standard genannt wird.",
        ],
      },
    ],
  }),

  "versicherung-esg-unterlagen-kmu": publicPage({
    slug: "versicherung-esg-unterlagen-kmu",
    eyebrow: "Versicherung",
    title: "CO2e- und ESG-Unterlagen für Versicherungsanfragen",
    description:
      "Versicherer können CO2e- oder ESG-Basisinformationen anfordern. Eine kompakte Bescheinigung kann bei einfachen Informationsanfragen helfen.",
    breadcrumb: "Versicherungen",
    audience: "KMU mit Anfrage von Versicherung, Makler oder Risikoprüfung",
    highlights: [
      {
        title: "Risikokontext",
        body: "Unterlage für erste Einordnung im Versicherungsprozess.",
      },
      {
        title: "Klarer Zweck",
        body: "Die Bescheinigung benennt, wofür sie gedacht ist.",
      },
      {
        title: "Keine Deckungszusage",
        body: "Sie ersetzt keine Bewertung durch den Versicherer.",
      },
    ],
    sections: [
      {
        title: "Warum Versicherungen fragen",
        body: [
          "Versicherer und Makler sammeln ESG-Informationen, um Risiken, Branchenprofile oder Ausschreibungsunterlagen besser einzuordnen.",
        ],
      },
      {
        title: "Geeigneter Umfang",
        body: [
          "Eine indikative Bescheinigung passt, wenn nur eine kompakte Orientierung verlangt wird.",
        ],
      },
      {
        title: "Grenze der Aussage",
        body: [
          "Die Bescheinigung trifft keine Aussage über Versicherbarkeit, Prämien oder Deckungsumfang.",
        ],
      },
      {
        title: "Saubere Weitergabe",
        body: [
          "Die PDF-Struktur macht deutlich, dass Ergebnis und Grenzen zusammengehören.",
        ],
      },
    ],
  }),

  "co2-dokument-lieferanten": publicPage({
    slug: "co2-dokument-lieferanten",
    eyebrow: "Lieferantendokument",
    title: "CO2e-Dokument für Lieferanten und Kundenportale",
    description:
      "Ein einheitliches CO2e-Dokument hilft Lieferanten, Kundenanfragen professionell zu beantworten, ohne eine Vollbilanz vorzutäuschen.",
    breadcrumb: "CO2e-Dokument Lieferanten",
    audience: "Lieferanten, die ein PDF für Kunden- oder Portalprozesse benötigen",
    highlights: [
      {
        title: "Portalgeeignet",
        body: "Als Anlage oder unterstützendes Dokument nutzbar.",
      },
      {
        title: "Empfängerfreundlich",
        body: "Kurze Struktur statt verstreuter Angaben.",
      },
      {
        title: "Vorsichtig",
        body: "Keine Behauptung einer geprüften Lieferkettenbilanz.",
      },
    ],
    sections: [
      {
        title: "Worum es geht",
        body: [
          "Viele Kundenportale lassen Dateien zu, wenn CO2e-Angaben erklärt oder belegt werden sollen.",
        ],
      },
      {
        title: "Was im Dokument steht",
        body: [
          "Ergebnis, Unternehmen, Zweck, methodische Einordnung, Grenzen und Dokumentreferenz.",
        ],
      },
      {
        title: "Was nicht abgedeckt ist",
        body: [
          "Keine produktbezogene Lebenszyklusanalyse und keine vollständig geprüfte Lieferkettenemission.",
        ],
      },
      {
        title: "Warum Standardisierung hilft",
        body: [
          "Ein wiedererkennbares Format erleichtert die interne Prüfung beim Kunden.",
        ],
      },
    ],
    related: supplierRelated,
  }),

  "co2-bilanz-vs-co2-bescheinigung": publicPage({
    slug: "co2-bilanz-vs-co2-bescheinigung",
    eyebrow: "Vergleich",
    title: "CO2-Bilanz oder CO2e-Bescheinigung: der Unterschied",
    description:
      "Eine CO2-Bilanz und eine indikative CO2e-Bescheinigung erfüllen unterschiedliche Zwecke. Die Auswahl hängt von der Anforderung ab.",
    breadcrumb: "Bilanz vs Bescheinigung",
    audience: "Unternehmen, die den passenden Nachweistyp auswählen müssen",
    highlights: [
      {
        title: "Bilanz",
        body: "Breiter, detaillierter und oft beratungs- oder prüfungsnah.",
      },
      {
        title: "Bescheinigung",
        body: "Kompakt, empfängerorientiert und indikativ.",
      },
      {
        title: "Anforderung entscheidet",
        body: "Der Empfängertext ist maßgeblich.",
      },
    ],
    sections: [
      {
        title: "CO2-Bilanz",
        body: [
          "Eine Bilanz betrachtet Emissionsquellen umfassender und kann je nach Ziel hohe Daten- und Prüfanforderungen auslösen.",
        ],
      },
      {
        title: "CO2e-Bescheinigung",
        body: [
          "Die Bescheinigung fasst ausgewählte Angaben für einen konkreten Kommunikationszweck zusammen.",
        ],
      },
      {
        title: "Wann welche Option",
        body: [
          "Bei gesetzlicher, auditierter oder standardgebundener Anforderung ist eine Vollbilanz oder Fachberatung naheliegend.",
          "Bei kurzer B2B-Orientierung kann eine Bescheinigung ausreichend sein.",
        ],
      },
      {
        title: "Risiko vermeiden",
        body: [
          "Die Unterlage sollte nicht stärker verkauft werden, als sie fachlich gemeint ist.",
        ],
      },
    ],
  }),

  "warum-unternehmen-co2-angaben-anfordern": publicPage({
    slug: "warum-unternehmen-co2-angaben-anfordern",
    eyebrow: "Hintergrund",
    title: "Warum Unternehmen CO2e-Angaben anfordern",
    description:
      "CO2e-Anfragen entstehen durch Lieferketten, Finanzierung, Versicherungen, Ausschreibungen und interne ESG-Prozesse größerer Unternehmen.",
    breadcrumb: "Warum CO2e-Anfragen",
    audience: "KMU, die eine Anfrage einordnen und passend beantworten wollen",
    highlights: [
      {
        title: "Lieferketten",
        body: "Kunden sammeln Informationen für eigene Einkaufs- und Risikoprozesse.",
      },
      {
        title: "Finanzierung",
        body: "Banken und Versicherer fragen häufiger nach ESG-Basisdaten.",
      },
      {
        title: "Ausschreibungen",
        body: "Vergabeunterlagen enthalten öfter Klima- oder CO2e-Felder.",
      },
    ],
    sections: [
      {
        title: "Nicht jede Anfrage ist gleich",
        body: [
          "Manche Anfragen verlangen nur eine kurze Orientierung, andere nennen konkrete Standards oder Prüfanforderungen.",
        ],
      },
      {
        title: "Warum ein PDF hilft",
        body: [
          "Ein strukturiertes PDF kann Rückfragen reduzieren, weil Empfänger Zahl, Kontext und Grenzen zusammen sehen.",
        ],
      },
      {
        title: "Worauf KMU achten sollten",
        body: [
          "Wichtig ist, keine offizielle oder geprüfte Aussage zu behaupten, wenn nur eine indikative Unterlage erstellt wurde.",
        ],
      },
      {
        title: "Nächster Schritt",
        body: [
          "Der Wortlaut der Anfrage entscheidet, ob eine Certif-Scope-Bescheinigung passt.",
        ],
      },
    ],
    related: whyRelated,
  }),

  "warum-unternehmen-co2-angaben-anfordern/leitfaden": publicPage({
    slug: "warum-unternehmen-co2-angaben-anfordern/leitfaden",
    eyebrow: "Leitfaden",
    title: "Leitfaden: CO2e-Anfragen von Unternehmen beantworten",
    description:
      "Ein pragmatischer Leitfaden für KMU, die zwischen kurzer CO2e-Unterlage, Vollbilanz und Rückfrage beim Empfänger unterscheiden müssen.",
    breadcrumb: "Leitfaden",
    audience: "KMU mit wiederkehrenden CO2e-Anfragen",
    highlights: [
      {
        title: "Anfrage lesen",
        body: "Der genaue Wortlaut entscheidet.",
      },
      {
        title: "Nachweistiefe wählen",
        body: "Kurzbescheinigung, Bilanz oder Fachberatung unterscheiden.",
      },
      {
        title: "Grenzen offenlegen",
        body: "Keine stärkere Aussage machen als belegt ist.",
      },
    ],
    sections: [
      {
        title: "Schritt 1: Empfänger verstehen",
        body: [
          "Kunden, Banken und Versicherungen verfolgen unterschiedliche Zwecke. Die geforderte Nachweistiefe kann daher stark variieren.",
        ],
      },
      {
        title: "Schritt 2: Begriffe prüfen",
        body: [
          "Hinweise auf Audit, Standard, vollständige Bilanz oder regulatorischen Bericht sprechen für höheren Aufwand.",
        ],
      },
      {
        title: "Schritt 3: Kompakte Unterlage nutzen",
        body: [
          "Wenn nur eine erste CO2e-Orientierung verlangt wird, kann eine indikative Bescheinigung passen.",
        ],
      },
      {
        title: "Schritt 4: Sauber kommunizieren",
        body: [
          "Das Dokument sollte Grenzen und Zweck klar nennen, damit keine falsche Erwartung entsteht.",
        ],
      },
    ],
    related: whyRelated,
  }),

  "warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-lieferanten": publicPage({
    slug: "warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-lieferanten",
    eyebrow: "Lieferanten",
    title: "Warum Lieferanten nach einer CO2e-Bescheinigung gefragt werden",
    description:
      "Kunden benötigen CO2e-Informationen häufig für Einkaufs-, Risiko- oder Nachhaltigkeitsprozesse. Lieferanten sollten die geforderte Nachweistiefe sauber einordnen.",
    breadcrumb: "Lieferantenbescheinigung",
    audience: "Lieferanten mit Kundenanfragen",
    highlights: [
      {
        title: "Kundenprozess",
        body: "Anfragen entstehen oft aus internen Einkaufs- oder ESG-Prozessen.",
      },
      {
        title: "Kurzunterlage",
        body: "Eine indikative Bescheinigung kann bei einfachen Abfragen helfen.",
      },
      {
        title: "Rückfrage",
        body: "Bei formellen Anforderungen sollte der Kunde präzisieren.",
      },
    ],
    sections: [
      {
        title: "Warum die Anfrage kommt",
        body: [
          "Große Kunden sammeln Informationen zu Lieferanten, um eigene Datenlücken zu schließen.",
        ],
      },
      {
        title: "Was geliefert werden kann",
        body: [
          "Eine kompakte Bescheinigung kann die Antwort strukturieren, wenn kein umfassendes Audit verlangt wird.",
        ],
      },
      {
        title: "Was nicht behauptet werden sollte",
        body: [
          "Lieferanten sollten nicht von Zertifizierung oder offizieller Prüfung sprechen, wenn nur eine indikative Unterlage vorliegt.",
        ],
      },
      {
        title: "Saubere Dokumentation",
        body: [
          "Eine PDF-Anlage mit Grenzen ist meist belastbarer als eine einzelne Zahl im Freitext.",
        ],
      },
    ],
    related: whyRelated,
  }),

  "warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-ausschreibung": publicPage({
    slug: "warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-ausschreibung",
    eyebrow: "Ausschreibung",
    title: "CO2e-Bescheinigung in Ausschreibungen richtig einordnen",
    description:
      "Ausschreibungen können CO2e-Angaben verlangen. Eine indikative Bescheinigung passt nur, wenn keine formelle Prüfung oder Vollbilanz gefordert ist.",
    breadcrumb: "Ausschreibungsbescheinigung",
    audience: "Anbieter mit Ausschreibungsunterlagen",
    highlights: [
      {
        title: "Anlagetauglich",
        body: "Eine kompakte Bescheinigung kann als unterstützende Anlage dienen.",
      },
      {
        title: "Wortlaut prüfen",
        body: "Standard- oder Auditvorgaben müssen gesondert bewertet werden.",
      },
      {
        title: "Grenzen sichtbar",
        body: "Das PDF benennt, was es nicht leistet.",
      },
    ],
    sections: [
      {
        title: "Warum Vergabestellen fragen",
        body: [
          "CO2e- und ESG-Angaben werden zunehmend als qualitative Informationen in Verfahren abgefragt.",
        ],
      },
      {
        title: "Wie die Bescheinigung hilft",
        body: [
          "Sie bündelt die Antwort in einem einheitlichen Format und vermeidet unklare Freitexte.",
        ],
      },
      {
        title: "Wann sie nicht genügt",
        body: [
          "Sobald eine geprüfte Bilanz, Norm oder formelle Bestätigung verlangt wird, muss eine andere Nachweisform gewählt werden.",
        ],
      },
      {
        title: "Empfängerfreundlichkeit",
        body: [
          "Die nüchterne Struktur hilft Ausschreibungsstellen, die Aussage rasch einzuordnen.",
        ],
      },
    ],
    related: whyRelated,
  }),

  "warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-kmu": publicPage({
    slug: "warum-unternehmen-co2-angaben-anfordern/co2-bescheinigung-kmu",
    eyebrow: "KMU",
    title: "CO2e-Bescheinigung für KMU-Anfragen",
    description:
      "KMU brauchen oft eine pragmatische Antwort auf CO2e-Anfragen. Eine kurze Bescheinigung kann die Lücke zwischen Freitext und Vollbilanz schließen.",
    breadcrumb: "KMU-Bescheinigung",
    audience: "KMU mit konkreter Kunden-, Bank- oder Ausschreibungsanfrage",
    highlights: [
      {
        title: "Pragmatisch",
        body: "Für erste, nicht formelle Anfragen geeignet.",
      },
      {
        title: "Professionell",
        body: "PDF statt losem Text.",
      },
      {
        title: "Begrenzt",
        body: "Keine Vollbilanz, keine offizielle Prüfung.",
      },
    ],
    sections: [
      {
        title: "Warum KMU betroffen sind",
        body: [
          "Auch kleine Unternehmen werden in die Datenanforderungen größerer Geschäftspartner einbezogen.",
        ],
      },
      {
        title: "Wie man reagiert",
        body: [
          "Zuerst sollte geklärt werden, ob eine indikative Unterlage ausreicht.",
        ],
      },
      {
        title: "Wann Certif-Scope passt",
        body: [
          "Wenn der Empfänger eine kurze CO2e-Orientierung akzeptiert und keine geprüfte Bilanz fordert.",
        ],
      },
      {
        title: "Warum klare Sprache zählt",
        body: [
          "Eine zu starke Behauptung kann später Rückfragen erzeugen. Deshalb bleibt die Bescheinigung bewusst präzise und begrenzt.",
        ],
      },
    ],
    related: whyRelated,
  }),

  "warum-unternehmen-co2-angaben-anfordern/banken-versicherungen": publicPage({
    slug: "warum-unternehmen-co2-angaben-anfordern/banken-versicherungen",
    eyebrow: "Finanzpartner",
    title: "Warum Banken und Versicherungen CO2e-Angaben anfordern",
    description:
      "Banken und Versicherungen nutzen ESG- und CO2e-Informationen zunehmend zur internen Einordnung von Kunden, Risiken und Geschäftsprozessen.",
    breadcrumb: "Banken & Versicherungen",
    audience: "KMU mit Finanzierungs-, Leasing- oder Versicherungsanfragen",
    highlights: [
      {
        title: "Risikoperspektive",
        body: "CO2e-Informationen können Teil interner Prüfprozesse sein.",
      },
      {
        title: "Kein Entscheidungssurrogat",
        body: "Die Bescheinigung ersetzt keine Entscheidung des Finanzpartners.",
      },
      {
        title: "Erste Unterlage",
        body: "Geeignet für einfache Informationsanfragen.",
      },
    ],
    sections: [
      {
        title: "Warum der Finanzsektor fragt",
        body: [
          "Finanzpartner erfassen Nachhaltigkeitsinformationen, um Portfolios, Risiken oder regulatorische Anforderungen intern zu steuern.",
        ],
      },
      {
        title: "Was eine Kurzbescheinigung leisten kann",
        body: [
          "Sie liefert eine strukturierte erste Orientierung, wenn der Finanzpartner keine geprüfte Vollbilanz verlangt.",
        ],
      },
      {
        title: "Was sie nicht leistet",
        body: [
          "Sie garantiert keine Finanzierung, keinen Versicherungsschutz und keine positive Risikobewertung.",
        ],
      },
      {
        title: "Wie KMU reagieren sollten",
        body: [
          "Bei formellen Anforderungen sollte der Finanzpartner präzisieren, welcher Nachweis akzeptiert wird.",
        ],
      },
    ],
    related: whyRelated,
  }),

  "warum-unternehmen-co2-angaben-anfordern/co2-nachweis-unternehmen": publicPage({
    slug: "warum-unternehmen-co2-angaben-anfordern/co2-nachweis-unternehmen",
    eyebrow: "CO2e-Nachweis",
    title: "CO2e-Nachweis für Unternehmensanfragen",
    description:
      "Ein CO2e-Nachweis kann je nach Kontext sehr unterschiedlich gemeint sein. Certif-Scope deckt die kurze, indikative Unterlage ab.",
    breadcrumb: "CO2e-Nachweis Unternehmen",
    audience: "Unternehmen, die einen geeigneten Nachweisrahmen suchen",
    highlights: [
      {
        title: "Begriff klären",
        body: "Nachweis kann Freitext, Bescheinigung, Bilanz oder Audit bedeuten.",
      },
      {
        title: "Passende Tiefe",
        body: "Certif-Scope passt zur kompakten Dokumentation.",
      },
      {
        title: "Grenzen benennen",
        body: "Die Unterlage sagt klar, was sie nicht ersetzt.",
      },
    ],
    sections: [
      {
        title: "Warum der Begriff unscharf ist",
        body: [
          "Empfänger verwenden den Begriff Nachweis oft ohne genaue Vorgabe zur Methode.",
        ],
      },
      {
        title: "Was Certif-Scope liefert",
        body: [
          "Eine PDF-Bescheinigung mit CO2e-Ergebnis, Kontext und Begrenzung.",
        ],
      },
      {
        title: "Wann eine andere Lösung nötig ist",
        body: [
          "Bei auditierter, regulatorischer oder standardgebundener Anforderung genügt die kompakte Unterlage nicht.",
        ],
      },
      {
        title: "Praktische Entscheidung",
        body: [
          "Der sichere Weg ist, den Empfänger nach akzeptierter Nachweistiefe zu fragen.",
        ],
      },
    ],
    related: whyRelated,
  }),

  partner: publicPage({
    slug: "partner",
    eyebrow: "Partner",
    title: "Certif-Scope für Berater, Agenturen und B2B-Partner",
    description:
      "Partner können Certif-Scope als pragmatische Unterlage für einfache CO2e-Anfragen einordnen, ohne es als Audit- oder Beratungsersatz darzustellen.",
    breadcrumb: "Partner",
    audience: "Berater, Agenturen und Dienstleister mit KMU-Kunden",
    highlights: [
      {
        title: "Ergänzend",
        body: "Unterstützt einfache Dokumentationsfälle.",
      },
      {
        title: "Nicht ersetzend",
        body: "Ersetzt keine Fachberatung bei komplexen Anforderungen.",
      },
      {
        title: "Klar positioniert",
        body: "Indikative Bescheinigung, kein Audit.",
      },
    ],
    sections: [
      {
        title: "Geeignete Partnerfälle",
        body: [
          "Partner können Certif-Scope nutzen, wenn Kunden eine kurze Unterlage für Bank-, Lieferanten- oder Ausschreibungskontexte brauchen.",
        ],
      },
      {
        title: "Kommunikation",
        body: [
          "Wichtig ist, den indikativen Charakter klar zu benennen und keine Zertifizierungswirkung zu versprechen.",
        ],
      },
      {
        title: "Abgrenzung zu Beratung",
        body: [
          "Bei strategischer Klimabilanzierung, Reduktionspfaden oder formeller Berichterstattung bleibt Fachberatung erforderlich.",
        ],
      },
      {
        title: "Gemeinsamer Nutzen",
        body: [
          "Die Unterlage kann wiederkehrende einfache Anfragen effizienter machen.",
        ],
      },
    ],
  }),

  kontakt: publicPage({
    slug: "kontakt",
    eyebrow: "Kontakt",
    title: "Kontakt zu Certif-Scope",
    description:
      "Für Fragen zur indikativen CO2e-Bescheinigung, zur Einordnung von Anfragen oder zur Nutzung im B2B-Kontext.",
    breadcrumb: "Kontakt",
    audience: "Unternehmen und Empfänger mit Rückfragen zum Dienst",
    highlights: [
      {
        title: "Produktfragen",
        body: "Fragen zu Umfang, Grenzen und Nutzung der Bescheinigung.",
      },
      {
        title: "Empfängerfragen",
        body: "Einordnung, ob eine kompakte Unterlage zur Anfrage passen kann.",
      },
      {
        title: "Keine Rechtsberatung",
        body: "Certif-Scope ersetzt keine rechtliche oder regulatorische Beratung.",
      },
    ],
    sections: [
      {
        title: "Wofür Kontakt sinnvoll ist",
        body: [
          "Sinnvoll sind Fragen zum Produktumfang, zur Methodik, zu Rechnungen oder zu technischen Problemen beim Zugriff auf Dokumente.",
        ],
      },
      {
        title: "Was nicht geleistet wird",
        body: [
          "Certif-Scope kann keine verbindliche Aussage dazu treffen, ob ein bestimmter Empfänger die Unterlage akzeptiert.",
        ],
      },
      {
        title: "Datenminimierung",
        body: [
          "Bitte senden Sie keine unnötigen sensiblen Daten, wenn eine allgemeine Frage ausreicht.",
        ],
      },
      {
        title: "Antwortkontext",
        body: [
          "Bei konkreten Anfragen hilft der Wortlaut der Empfängeranforderung, ohne vertrauliche Details offenzulegen.",
        ],
      },
    ],
    faq: [],
  }),

  datenschutz: publicPage({
    slug: "datenschutz",
    eyebrow: "Datenschutz",
    title: "Datenschutzhinweise",
    description:
      "Certif-Scope ist datensparsam ausgerichtet und nutzt technische Dienstleister nur, soweit dies für Betrieb, Zahlung, E-Mail, Zugriffsschlüssel und PDF-Erstellung erforderlich ist.",
    breadcrumb: "Datenschutz",
    audience: "Nutzer, Kunden und Empfänger mit Datenschutzfragen",
    highlights: [
      {
        title: "Keine Marketing-Analyse",
        body: "Keine verhaltensbasierte Werbung und keine Marketing-Tracking-Cookies.",
      },
      {
        title: "Zahlung über Stripe",
        body: "Zahlungsdaten werden vom Zahlungsanbieter verarbeitet und nicht von Certif-Scope gespeichert.",
      },
      {
        title: "PDF-Erstellung",
        body: "Nur zur PDF-Erstellung erforderliche Daten können technisch an den PDF-Dienstleister übertragen werden.",
      },
    ],
    sections: [
      {
        title: "Grundsatz",
        body: [
          "Certif-Scope verarbeitet Daten nur, soweit dies für die Nutzung des Dienstes, die Erstellung der Bescheinigung, Zahlung, Zustellung und technische Sicherheit erforderlich ist.",
        ],
      },
      {
        title: "Technische Dienstleister",
        body: [
          "Zum Betrieb können Hosting- und Deployment-Anbieter, Stripe für Zahlungen, Resend für E-Mail-Zustellung, Cloudflare KV für technische Zustände wie Zugriffsschlüssel und Guthaben sowie PDFShift für die technische PDF-Erzeugung eingesetzt werden.",
        ],
      },
      {
        title: "Finanz- und Eingabedaten",
        body: [
          "Detaillierte Eingaben zu Ausgaben werden nicht als dauerhafte Finanzhistorie gespeichert. Für die PDF-Erstellung werden nur die Daten verarbeitet, die für die Bescheinigung erforderlich sind.",
        ],
      },
      {
        title: "Keine Werbeverfolgung",
        body: [
          "Nach Entfernung des Google-Trackings nutzt Certif-Scope keine Marketing-Tracker, keine verhaltensbasierten Analysen und keine Werbe-Cookies.",
        ],
      },
    ],
    faq: [],
  }),

  agb: publicPage({
    slug: "agb",
    eyebrow: "AGB",
    title: "Allgemeine Geschäftsbedingungen",
    description:
      "Die Bedingungen beschreiben den begrenzten, indikativen Charakter der Certif-Scope-Unterlage und die Nutzung des Dienstes.",
    breadcrumb: "AGB",
    audience: "Nutzer des Dienstes",
    highlights: [
      {
        title: "Indikativer Dienst",
        body: "Die Bescheinigung ist eine strukturierte Orientierung.",
      },
      {
        title: "Keine Fachprüfung",
        body: "Keine Rechts-, Steuer-, Umwelt- oder Auditberatung.",
      },
      {
        title: "Empfänger entscheidet",
        body: "Die Akzeptanz hängt vom konkreten Anforderungstext ab.",
      },
    ],
    sections: [
      {
        title: "Leistungsgegenstand",
        body: [
          "Certif-Scope stellt eine technische Möglichkeit bereit, eine indikative CO2e-Bescheinigung zu erstellen.",
        ],
      },
      {
        title: "Grenzen",
        body: [
          "Die Unterlage ersetzt keine Prüfung durch eine Fachstelle und keine gesetzliche Berichtspflicht.",
        ],
      },
      {
        title: "Nutzereingaben",
        body: [
          "Nutzer bleiben für Richtigkeit, Vollständigkeit und Berechtigung ihrer Eingaben verantwortlich.",
        ],
      },
      {
        title: "Zahlung und Zugriff",
        body: [
          "Zahlungsabwicklung und technische Zugriffskontrolle erfolgen über notwendige Dienstleister im Rahmen des Dienstbetriebs.",
        ],
      },
    ],
    faq: [],
  }),

  cookies: publicPage({
    slug: "cookies",
    eyebrow: "Cookies",
    title: "Cookie-Hinweise",
    description:
      "Certif-Scope nutzt keine Werbe-Cookies und kein Marketing-Tracking. Notwendige technische Speicherung kann für Betrieb, Sicherheit und Zugriff erforderlich sein.",
    breadcrumb: "Cookies",
    audience: "Nutzer mit Fragen zu Cookies und technischer Speicherung",
    highlights: [
      {
        title: "Keine Werbung",
        body: "Keine Advertising-Cookies.",
      },
      {
        title: "Keine Verhaltensanalyse",
        body: "Keine Marketing-Analytics oder Nutzerprofilbildung.",
      },
      {
        title: "Technisch notwendig",
        body: "Bestimmte technische Zustände können für Zahlung, Zugriff oder Sicherheit erforderlich sein.",
      },
    ],
    sections: [
      {
        title: "Grundsatz",
        body: [
          "Certif-Scope verzichtet auf Marketing-Tracking und verhaltensbasierte Analyse-Cookies.",
        ],
      },
      {
        title: "Notwendige Technik",
        body: [
          "Für Betrieb, Zahlung, E-Mail, Zugriffsschlüssel, Pack-Guthaben und PDF-Erstellung können notwendige technische Dienstleister eingesetzt werden.",
        ],
      },
      {
        title: "Keine Cookie-Banner-Logik",
        body: [
          "Da keine Marketing- oder Werbe-Cookies eingesetzt werden, ist die Seite auf datensparsame Nutzung ausgelegt.",
        ],
      },
      {
        title: "Änderungen",
        body: [
          "Sollte sich die technische Verarbeitung ändern, müssen die Hinweise entsprechend aktualisiert werden.",
        ],
      },
    ],
    faq: [],
  }),

  impressum: publicPage({
    slug: "impressum",
    eyebrow: "Impressum",
    title: "Impressum",
    description:
      "Rechtliche Anbieterinformationen für Certif-Scope und die deutsche Informationsfassung.",
    breadcrumb: "Impressum",
    audience: "Nutzer, Empfänger und Geschäftspartner",
    highlights: [
      {
        title: "Anbieter",
        body: "Angaben zum Betreiber des Dienstes.",
      },
      {
        title: "Kontakt",
        body: "Kontaktweg für formelle und produktbezogene Anliegen.",
      },
      {
        title: "Einordnung",
        body: "Der Dienst erstellt indikative CO2e-Unterlagen.",
      },
    ],
    sections: [
      {
        title: "Anbieterinformationen",
        body: [
          "Die jeweils aktuellen Anbieterinformationen sind im Rahmen der rechtlichen Angaben des Dienstes zu beachten.",
        ],
      },
      {
        title: "Kommunikation",
        body: [
          "Für produktbezogene Fragen kann die Kontaktseite genutzt werden.",
        ],
      },
      {
        title: "Haftung für Inhalte",
        body: [
          "Die Inhalte dienen der Information über den Dienst und ersetzen keine individuelle Beratung.",
        ],
      },
      {
        title: "Haftung für Links",
        body: [
          "Externe Inhalte werden nur verlinkt, soweit dies für den Dienstkontext sinnvoll ist.",
        ],
      },
    ],
    faq: [],
  }),

  datenverarbeitung: publicPage({
    slug: "datenverarbeitung",
    eyebrow: "Datenverarbeitung",
    title: "Hinweise zur Datenverarbeitung",
    description:
      "Die Datenverarbeitung ist auf den Betrieb des Dienstes und die Erstellung der indikativen CO2e-Bescheinigung begrenzt.",
    breadcrumb: "Datenverarbeitung",
    audience: "Kunden, Datenschutzansprechpartner und Empfänger",
    highlights: [
      {
        title: "Betriebsnotwendig",
        body: "Technische Dienstleister werden nur für den Dienstbetrieb eingesetzt.",
      },
      {
        title: "Zahlung getrennt",
        body: "Zahlungsdaten werden von Stripe verarbeitet.",
      },
      {
        title: "PDF technisch",
        body: "PDFShift kann nur die für das PDF erforderlichen Daten erhalten.",
      },
    ],
    sections: [
      {
        title: "Verarbeitungszwecke",
        body: [
          "Daten werden verarbeitet, um den Dienst bereitzustellen, Zahlungen abzuwickeln, E-Mails zuzustellen, Zugriffsschlüssel oder Pack-Guthaben technisch zu verwalten und die Bescheinigung als PDF zu erzeugen.",
        ],
      },
      {
        title: "Auftrags- und Technikdienstleister",
        body: [
          "Dazu können Hosting- und Deployment-Anbieter, Stripe, Resend, Cloudflare KV und PDFShift gehören.",
        ],
      },
      {
        title: "Datenminimierung",
        body: [
          "Es werden nur Daten verarbeitet, die für den jeweiligen Zweck erforderlich sind. Detaillierte Ausgabendaten werden nicht als dauerhafte Finanzhistorie gespeichert.",
        ],
      },
      {
        title: "Grenzen",
        body: [
          "Diese Hinweise beschreiben den Dienstbetrieb und sind keine Zusage einer bestimmten Zertifizierung oder regulatorischen Anerkennung.",
        ],
      },
    ],
    faq: [],
  }),
};

export function getGermanPage(slugParts: string[]) {
  const slug = slugParts.join("/");
  return germanPages[slug] ?? null;
}

export const germanStaticSlugs = Object.keys(germanPages);
