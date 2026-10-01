import type { AttestationLocale } from "@/lib/attestation-i18n";

export function getLocaleCopy(locale: AttestationLocale) {
  if (locale === "fr") {
    return {
      headerTagline:
        "Émission automatisée · Attestation indicative standardisée",
      title: "ATTESTATION INDICATIVE D’ÉMISSIONS DE CARBONE",
      documentEyebrow: "DOCUMENT CO₂e INDICATIF · STANDARDISÉ · VÉRIFIABLE",
      standardReference:
        "Émise selon la méthodologie standardisée interne Certif-Scope CS-SB-v1",
      subtitle:
        "Non réglementaire · Fondée sur une méthodologie · Attestation indicative",
      resultLabel: "ÉMISSIONS INDICATIVES AGRÉGÉES DÉCLARÉES",
      resultSubline:
        "Estimation documentaire fondée sur des dépenses agrégées déclarées.",
      resultBottomLine:
        "Base documentaire carbone simple, datée et vérifiable, destinée aux échanges professionnels.",
      scanToVerifyLabel: "Scanner le QR code\npour vérifier",
      attestationReferenceLabel: "RÉFÉRENCE DE L’ATTESTATION",
      issuedDateLabel: "DATE D’ÉMISSION",
      validUntilLabel: "VALABLE JUSQU’AU",
      issuerLabel: "ÉMETTEUR",

      entitySectionTitle: "IDENTIFICATION DE L’ENTITÉ",
      entityNameLabel: "NOM DE L’ENTITÉ",
      countryLabel: "PAYS",
      activitySectorLabel: "SECTEUR D’ACTIVITÉ",
      reportingYearLabel: "ANNÉE DE RÉFÉRENCE",
      entityIdentifierLabel: "IDENTIFIANT DE L’ENTITÉ",

      documentNatureSectionTitle: "NATURE DU DOCUMENT",
      documentNatureText:
        "Ce document constitue une attestation indicative d’émissions de carbone, émise exclusivement à des fins d’information, d’aide à la décision et d’évaluation préliminaire.",

      scopeSectionTitle: "PÉRIMÈTRE",
      scopeText:
        "Cette attestation fournit une estimation indicative des émissions de gaz à effet de serre, dérivée exclusivement de données de dépenses agrégées, selon une méthodologie basée sur les dépenses (spend-based).",

      intendedUseSectionTitle: "USAGE PRÉVU DU DOCUMENT",
      intendedUseText:
        "Cette attestation peut être utilisée comme pièce carbone indicative dans un dossier fournisseur, une demande client, un appel d’offres, une demande bancaire, une demande d’assurance ou une démarche interne. Elle est adaptée aux situations où aucun audit carbone complet, aucune vérification externe et aucun référentiel réglementaire spécifique ne sont explicitement exigés.",

      thirdPartyReadingTitle: "LECTURE PAR UN TIERS",
      thirdPartyReadingText:
        "Un lecteur externe peut contrôler la cohérence documentaire de l’attestation à partir de son identifiant, de sa date d’émission, de sa période de validité, de son résultat agrégé et de la page de vérification.",

      confidentialityTitle: "CONFIDENTIALITÉ RENFORCÉE",
      confidentialityText:
        "Aucune donnée financière détaillée n’est affichée dans cette attestation. Seul le résultat CO₂e agrégé est présenté afin de faciliter une transmission externe sans divulguer les dépenses internes détaillées.",

      verificationTitle: "VÉRIFICATION DOCUMENTAIRE",
      verificationText:
        "L’attestation comporte une référence unique, un QR code et des éléments de contrôle permettant une vérification documentaire indépendante.",

      validityTitle: "VALIDITÉ ENCADRÉE",
      validityText:
        "La période de validité reflète la pertinence temporelle des données et de la méthodologie.",

      statusStripDocumentTitle: "STATUT DOCUMENTAIRE",
      statusStripDocumentValue: "Indicatif · Agrégé · Vérifiable",
      statusStripDataTitle: "DONNÉES AFFICHÉES",
      statusStripDataValue: "Résultat CO₂e uniquement",
      statusStripUseTitle: "USAGE RECOMMANDÉ",
      statusStripUseValue:
        "Dossier fournisseur · Client · Banque · Assurance",

      pageTwoTitle: "MÉTHODOLOGIE, VÉRIFICATION ET LIMITES",
      pageTwoIntro:
        "Cette page précise la méthode utilisée, les références de contexte, les éléments de vérification et les limites documentaires de l’attestation.",

      methodologySectionTitle: "PRINCIPE MÉTHODOLOGIQUE",
      methodologyLabel: "Méthodologie",
      methodologyValue:
        "Certif-Scope deterministic spend-based methodology v1.0",
      methodologyText:
        "L’estimation repose sur une approche monétaire dite spend-based. Les dépenses agrégées déclarées par l’entité sont associées à des facteurs d’émission monétaires afin d’obtenir une estimation CO₂e indicative.",
      formulaText:
        "Dépenses agrégées déclarées × facteurs d’émission monétaires = estimation CO₂e indicative",
      factorVersionLabel: "VERSION DES FACTEURS",
      transferabilityLabel: "TRANSFÉRABILITÉ",
      transferabilityText: "Non transférable.",

      referencesTitle: "CADRES DE RÉFÉRENCE CITÉS À TITRE DE CONTEXTE",
      normativeText:
        "Les cadres suivants sont cités uniquement pour situer la méthode spend-based dans son contexte méthodologique. Ils ne constituent pas une validation, une certification ou une conformité réglementaire de l’attestation.",
      referencesList: [
        "GHG Protocol — Scope 3 (méthode basée sur les dépenses)",
        "ISO 14064-1 (référence)",
        "ISO 14083 (référence)",
        "CSRD / ESRS / Taxonomie UE (contexte)",
      ],
      scopeNote:
        "Ce document ne constitue ni un inventaire de gaz à effet de serre, ni un audit, ni une vérification, ni une déclaration réglementaire au sens de la CSRD, des ESRS ou de tout cadre équivalent.",

      verificationSimpleTitle: "VÉRIFICATION SIMPLE",
      verificationSimpleText:
        "Scanner le QR code ou utiliser la référence d’attestation sur la page officielle de vérification. La vérification permet de contrôler l’identifiant, l’émetteur, la date, la période de validité et les éléments d’intégrité documentaire.",
      quickCheckTitle: "Contrôle rapide possible",
      quickCheckItems: [
        "Référence",
        "Date",
        "Validité",
        "Résultat agrégé",
        "Page de vérification",
      ],
      pageVerificationLabel: "Page de vérification documentaire",
      verifiableObjectTitle: "OBJET VÉRIFIABLE",
      verifiableObjectText:
        "Le PDF signé, son identifiant, son QR code et ses éléments d’intégrité constituent les éléments de contrôle documentaire.",
      verifiableObjectItems: [
        "Identifiant unique",
        "Émetteur déclaré",
        "Date d’émission",
        "Période de validité",
        "Résultat CO₂e agrégé",
        "Éléments d’intégrité",
      ],

      technicalElementsTitle: "ANNEXE TECHNIQUE DE VÉRIFICATION",
      technicalElementsIntro:
        "Les éléments ci-dessous permettent une vérification documentaire avancée. Ils sont fournis à titre technique et ne nécessitent aucune action de la part d’un lecteur standard.",
      algorithmLabel: "ALGORITHME",
      hashLabel: "EMPREINTE DU CONTENU SIGNÉ (SHA-256)",
      signatureLabel: "SIGNATURE (BASE64)",
      publicKeyLabel: "CLÉ PUBLIQUE DE VÉRIFICATION DE L’ÉMETTEUR",

      perimeterLimitsTitle: "PÉRIMÈTRE ET LIMITES",
      perimeterLimitsIntro:
        "Aucune donnée d’activité physique. Aucune émission de Scope 1 ou de Scope 2. Modèle strictement indicatif.",
      explicitExclusionsTitle: "EXCLUSIONS EXPLICITES",
      explicitExclusionsText:
        "Aucune donnée physique détaillée, aucun calcul direct des émissions de Scope 1 ou Scope 2, aucun inventaire Scope 3 exhaustif, aucune certification et aucune validation externe ne sont inclus dans le périmètre de ce document.",
      responsibilityTitle: "RESPONSABILITÉ",
      responsibilityText:
        "Les résultats sont exclusivement dérivés des données fournies par l’entité, sous sa seule responsabilité.",
      languageNotice: "Ce document est émis en langue française.",
      methodologyNote:
        "Certif-Scope CS-SB-v1 · CS-SB-v1 est une méthodologie standardisée interne maintenue par Certif-Scope.",

      finalSynthesisTitle: "SYNTHÈSE DE VALIDITÉ DOCUMENTAIRE",
      finalSynthesisText:
        "Cette attestation présente une estimation CO₂e indicative, agrégée, datée, standardisée et vérifiable. Elle constitue un support documentaire destiné à faciliter la transmission d’une information carbone simple, sans divulgation des données financières détaillées.",

      footerText:
        "Attestation indicative d’émissions de carbone · Émise par Certif-Scope · certif-scope.com",
      footerPageLabel: "Page",
    };
  }

  if (locale === "de") {
    return {
      headerTagline:
        "Automatisierte Ausstellung · Standardisierte indikative Bescheinigung",
      title: "INDIKATIVE BESCHEINIGUNG ZU CO₂e-EMISSIONEN",
      documentEyebrow:
        "INDIKATIVES CO₂e-DOKUMENT · STANDARDISIERT · VERIFIZIERBAR",
      standardReference:
        "Ausgestellt nach der internen standardisierten Certif-Scope-Methodik CS-SB-v1",
      subtitle:
        "Nicht regulatorisch · Methodikbasiert · Indikative Bescheinigung",
      resultLabel: "DEKLARIERTE AGGREGIERTE INDIKATIVE EMISSIONEN",
      resultSubline:
        "Dokumentarische Schätzung auf Basis deklarierter aggregierter Ausgaben.",
      resultBottomLine:
        "Einfaches, datiertes und verifizierbares Carbon-Dokument für professionelle Austausche.",
      scanToVerifyLabel: "QR-Code scannen\nzur Verifizierung",
      attestationReferenceLabel: "REFERENZ DER BESCHEINIGUNG",
      issuedDateLabel: "AUSSTELLUNGSDATUM",
      validUntilLabel: "GÜLTIG BIS",
      issuerLabel: "AUSSTELLER",

      entitySectionTitle: "IDENTIFIKATION DER EINHEIT",
      entityNameLabel: "NAME DER EINHEIT",
      countryLabel: "LAND",
      activitySectorLabel: "TÄTIGKEITSBEREICH",
      reportingYearLabel: "BERICHTSJAHR",
      entityIdentifierLabel: "IDENTIFIKATOR DER EINHEIT",

      documentNatureSectionTitle: "ART DES DOKUMENTS",
      documentNatureText:
        "Dieses Dokument ist eine indikative Bescheinigung zu Kohlenstoffemissionen und wird ausschließlich zu Informations-, Entscheidungs- und Vorbewertungszwecken ausgestellt.",

      scopeSectionTitle: "UMFANG",
      scopeText:
        "Diese Bescheinigung liefert eine indikative Schätzung der Treibhausgasemissionen, die ausschließlich aus aggregierten Ausgabendaten mit einer spend-based Methodik abgeleitet wird.",

      intendedUseSectionTitle: "VORGESEHENE VERWENDUNG",
      intendedUseText:
        "Diese Bescheinigung kann als indikatives Kohlenstoffdokument in Lieferantenunterlagen, Kundenanfragen, Ausschreibungen, Bankanfragen, Versicherungsanfragen oder für interne Zwecke verwendet werden. Sie ist für Situationen geeignet, in denen kein vollständiges Carbon-Audit, keine externe Prüfung und kein spezifischer regulatorischer Rahmen ausdrücklich verlangt werden.",

      thirdPartyReadingTitle: "PRÜFUNG DURCH DRITTE",
      thirdPartyReadingText:
        "Ein externer Leser kann die dokumentarische Kohärenz der Bescheinigung über ihre Referenz, das Ausstellungsdatum, die Gültigkeit, das aggregierte Ergebnis und die Verifizierungsseite prüfen.",

      confidentialityTitle: "VERSTÄRKTE VERTRAULICHKEIT",
      confidentialityText:
        "In dieser Bescheinigung werden keine detaillierten Finanzdaten angezeigt. Nur das aggregierte CO₂e-Ergebnis wird dargestellt, um eine externe Weitergabe ohne Offenlegung interner Ausgaben zu ermöglichen.",

      verificationTitle: "DOKUMENTARISCHE VERIFIKATION",
      verificationText:
        "Die Bescheinigung enthält eine eindeutige Referenz, einen QR-Code und Kontrollelemente für eine unabhängige dokumentarische Verifikation.",

      validityTitle: "EINGERAHMTE GÜLTIGKEIT",
      validityText:
        "Die Gültigkeitsdauer spiegelt die zeitliche Relevanz der Daten und der Methodik wider.",

      statusStripDocumentTitle: "DOKUMENTSTATUS",
      statusStripDocumentValue: "Indikativ · Aggregiert · Verifizierbar",
      statusStripDataTitle: "ANGEZEIGTE DATEN",
      statusStripDataValue: "Nur CO₂e-Ergebnis",
      statusStripUseTitle: "EMPFOHLENE VERWENDUNG",
      statusStripUseValue:
        "Lieferantenunterlage · Kunde · Bank · Versicherung",

      pageTwoTitle: "METHODIK, VERIFIKATION UND GRENZEN",
      pageTwoIntro:
        "Diese Seite beschreibt die verwendete Methodik, die Kontextreferenzen, die Verifikationselemente und die dokumentarischen Grenzen der Bescheinigung.",

      methodologySectionTitle: "METHODISCHES PRINZIP",
      methodologyLabel: "Methodik",
      methodologyValue:
        "Certif-Scope deterministic spend-based methodology v1.0",
      methodologyText:
        "Die Schätzung basiert auf einer monetären spend-based Methodik. Die von der Einheit deklarierten aggregierten Ausgaben werden mit monetären Emissionsfaktoren verknüpft, um eine indikative CO₂e-Schätzung zu erhalten.",
      formulaText:
        "Deklarierte aggregierte Ausgaben × monetäre Emissionsfaktoren = indikative CO₂e-Schätzung",
      factorVersionLabel: "FAKTORENVERSION",
      transferabilityLabel: "ÜBERTRAGBARKEIT",
      transferabilityText: "Nicht übertragbar.",

      referencesTitle: "REFERENZRAHMEN NUR ZU KONTEXTZWECKEN",
      normativeText:
        "Die folgenden Rahmenwerke werden ausschließlich genannt, um die spend-based Methodik in ihren methodischen Kontext einzuordnen. Sie stellen keine Validierung, Zertifizierung oder regulatorische Konformität der Bescheinigung dar.",
      referencesList: [
        "GHG Protocol — Scope 3 (spend-based Methode)",
        "ISO 14064-1 (Referenz)",
        "ISO 14083 (Referenz)",
        "CSRD / ESRS / EU-Taxonomie (Kontext)",
      ],
      scopeNote:
        "Dieses Dokument ist weder ein vollständiges Treibhausgasinventar noch ein Audit, eine Verifikation oder eine regulatorische Erklärung im Sinne der CSRD, der ESRS oder eines gleichwertigen Rahmens.",

      verificationSimpleTitle: "EINFACHE VERIFIKATION",
      verificationSimpleText:
        "Scannen Sie den QR-Code oder verwenden Sie die Referenz der Bescheinigung auf der offiziellen Verifikationsseite. Die Verifikation ermöglicht die Kontrolle von Identifikator, Aussteller, Datum, Gültigkeit und Dokumentintegrität.",
      quickCheckTitle: "Schnellkontrolle möglich",
      quickCheckItems: [
        "Referenz",
        "Datum",
        "Gültigkeit",
        "Aggregiertes Ergebnis",
        "Verifikationsseite",
      ],
      pageVerificationLabel: "Dokumentarische Verifikationsseite",
      verifiableObjectTitle: "VERIFIZIERBARES OBJEKT",
      verifiableObjectText:
        "Das signierte PDF, seine Kennung, sein QR-Code und seine Integritätselemente bilden die dokumentarischen Kontrollelemente.",
      verifiableObjectItems: [
        "Eindeutige Kennung",
        "Aussteller",
        "Ausstellungsdatum",
        "Gültigkeitsdauer",
        "Aggregiertes CO₂e-Ergebnis",
        "Integritätselemente",
      ],

      technicalElementsTitle: "TECHNISCHE VERIFIKATIONSANLAGE",
      technicalElementsIntro:
        "Die nachstehenden Elemente ermöglichen eine fortgeschrittene dokumentarische Verifikation. Sie werden zu technischen Zwecken bereitgestellt und erfordern keine Aktion eines Standardlesers.",
      algorithmLabel: "ALGORITHMUS",
      hashLabel: "SIGNATUR-INHALTSHASH (SHA-256)",
      signatureLabel: "SIGNATUR (BASE64)",
      publicKeyLabel:
        "ÖFFENTLICHER VERIFIKATIONSSCHLÜSSEL DES AUSSTELLERS",

      perimeterLimitsTitle: "UMFANG UND GRENZEN",
      perimeterLimitsIntro:
        "Keine physischen Aktivitätsdaten. Keine Scope-1- oder Scope-2-Emissionen. Strikt indikatives Modell.",
      explicitExclusionsTitle: "AUSDRÜCKLICHE AUSSCHLÜSSE",
      explicitExclusionsText:
        "Keine detaillierten physischen Daten, keine direkte Berechnung von Scope-1- oder Scope-2-Emissionen, kein vollständiges Scope-3-Inventar, keine Zertifizierung und keine externe Validierung sind im Umfang dieses Dokuments enthalten.",
      responsibilityTitle: "VERANTWORTUNG",
      responsibilityText:
        "Die Ergebnisse werden ausschließlich aus den von der Einheit bereitgestellten Daten abgeleitet, unter deren alleiniger Verantwortung.",
      languageNotice:
        "Dieses Dokument wird in deutscher Sprache ausgestellt.",
      methodologyNote:
        "Certif-Scope CS-SB-v1 · CS-SB-v1 ist eine interne standardisierte Methodik, die von Certif-Scope gepflegt wird.",

      finalSynthesisTitle:
        "ZUSAMMENFASSUNG DER DOKUMENTARISCHEN GÜLTIGKEIT",
      finalSynthesisText:
        "Diese Bescheinigung stellt eine indikative, aggregierte, datierte, standardisierte und verifizierbare CO₂e-Schätzung dar. Sie dient als dokumentarische Unterstützung für die Übermittlung einfacher Kohlenstoffinformationen ohne Offenlegung detaillierter Finanzdaten.",

      footerText:
        "Indikative Bescheinigung zu Kohlenstoffemissionen · Ausgestellt von Certif-Scope · certif-scope.com",
      footerPageLabel: "Seite",
    };
  }

  return {
    headerTagline: "Automated issuance · Standardized indicative attestation",
    title: "INDICATIVE CARBON EMISSIONS ATTESTATION",
    documentEyebrow: "INDICATIVE CO₂e DOCUMENT · STANDARDIZED · VERIFIABLE",
    standardReference:
      "Issued under the internal standardized Certif-Scope methodology CS-SB-v1",
    subtitle: "Non-regulatory · Methodology-based · Indicative attestation",
    resultLabel: "DECLARED AGGREGATED INDICATIVE EMISSIONS",
    resultSubline:
      "Documentary estimate based on declared aggregated expenditures.",
    resultBottomLine:
      "Simple, dated and verifiable carbon document intended for professional exchanges.",
    scanToVerifyLabel: "Scan QR code\nto verify",
    attestationReferenceLabel: "ATTESTATION REFERENCE",
    issuedDateLabel: "ISSUED ON",
    validUntilLabel: "VALID UNTIL",
    issuerLabel: "ISSUER",

    entitySectionTitle: "IDENTIFICATION OF THE ENTITY",
    entityNameLabel: "ENTITY NAME",
    countryLabel: "COUNTRY",
    activitySectorLabel: "ACTIVITY SECTOR",
    reportingYearLabel: "REPORTING YEAR",
    entityIdentifierLabel: "ENTITY IDENTIFIER",

    documentNatureSectionTitle: "NATURE OF THE DOCUMENT",
    documentNatureText:
      "This document constitutes an indicative carbon emissions attestation issued exclusively for information, decision-support and preliminary assessment purposes.",

    scopeSectionTitle: "SCOPE",
    scopeText:
      "This attestation provides an indicative estimate of greenhouse gas emissions derived exclusively from aggregated expenditure data, using a spend-based methodology.",

    intendedUseSectionTitle: "INTENDED USE OF THE DOCUMENT",
    intendedUseText:
      "This attestation may be used as an indicative carbon document in supplier files, client requests, tenders, banking requests, insurance requests or internal use. It is suited to situations where no full carbon audit, no external verification and no specific regulatory framework are explicitly required.",

    thirdPartyReadingTitle: "THIRD-PARTY REVIEW",
    thirdPartyReadingText:
      "An external reader may review the documentary consistency of the attestation using its identifier, issuance date, validity period, aggregated result and verification page.",

    confidentialityTitle: "ENHANCED CONFIDENTIALITY",
    confidentialityText:
      "No detailed financial data are displayed in this attestation. Only the aggregated CO₂e result is presented in order to facilitate external transmission without disclosing internal detailed expenditures.",

    verificationTitle: "DOCUMENTARY VERIFICATION",
    verificationText:
      "The attestation contains a unique reference, a QR code and control elements enabling independent documentary verification.",

    validityTitle: "FRAMED VALIDITY",
    validityText:
      "The validity period reflects the temporal relevance of the data and methodology.",

    statusStripDocumentTitle: "DOCUMENT STATUS",
    statusStripDocumentValue: "Indicative · Aggregated · Verifiable",
    statusStripDataTitle: "DISPLAYED DATA",
    statusStripDataValue: "CO₂e result only",
    statusStripUseTitle: "RECOMMENDED USE",
    statusStripUseValue: "Supplier file · Client · Bank · Insurance",

    pageTwoTitle: "METHODOLOGY, VERIFICATION AND LIMITATIONS",
    pageTwoIntro:
      "This page details the methodology used, the contextual references, the verification elements and the documentary limitations of the attestation.",

    methodologySectionTitle: "METHODOLOGICAL PRINCIPLE",
    methodologyLabel: "Methodology",
    methodologyValue:
      "Certif-Scope deterministic spend-based methodology v1.0",
    methodologyText:
      "The estimate is based on a monetary spend-based approach. Declared aggregated expenditures are associated with monetary emission factors in order to produce an indicative CO₂e estimate.",
    formulaText:
      "Declared aggregated expenditures × monetary emission factors = indicative CO₂e estimate",
    factorVersionLabel: "FACTOR VERSION",
    transferabilityLabel: "TRANSFERABILITY",
    transferabilityText: "Non-transferable.",

    referencesTitle: "REFERENCE FRAMEWORKS CITED FOR CONTEXT ONLY",
    normativeText:
      "The following frameworks are cited solely to situate the spend-based method in its methodological context. They do not constitute validation, certification or regulatory compliance of the attestation.",
    referencesList: [
      "GHG Protocol — Scope 3 (spend-based method)",
      "ISO 14064-1 (reference)",
      "ISO 14083 (reference)",
      "CSRD / ESRS / EU Taxonomy (context)",
    ],
    scopeNote:
      "This document does not constitute a full greenhouse-gas inventory, an audit, a verification or a regulatory declaration within the meaning of CSRD, ESRS or any equivalent framework.",

    verificationSimpleTitle: "SIMPLE VERIFICATION",
    verificationSimpleText:
      "Scan the QR code or use the attestation reference on the official verification page. Verification enables control of the identifier, issuer, date, validity period and documentary integrity elements.",
    quickCheckTitle: "Quick check available",
    quickCheckItems: [
      "Reference",
      "Date",
      "Validity",
      "Aggregated result",
      "Verification page",
    ],
    pageVerificationLabel: "Document verification page",
    verifiableObjectTitle: "VERIFIABLE OBJECT",
    verifiableObjectText:
      "The signed PDF, its identifier, its QR code and its integrity elements constitute the documentary control elements.",
    verifiableObjectItems: [
      "Unique identifier",
      "Declared issuer",
      "Issuance date",
      "Validity period",
      "Aggregated CO₂e result",
      "Integrity elements",
    ],

    technicalElementsTitle: "TECHNICAL VERIFICATION ANNEX",
    technicalElementsIntro:
      "The elements below enable advanced documentary verification. They are provided for technical purposes and require no action from a standard reader.",
    algorithmLabel: "ALGORITHM",
    hashLabel: "SIGNED CONTENT HASH (SHA-256)",
    signatureLabel: "SIGNATURE (BASE64)",
    publicKeyLabel: "ISSUER PUBLIC VERIFICATION KEY",

    perimeterLimitsTitle: "SCOPE AND LIMITATIONS",
    perimeterLimitsIntro:
      "No physical activity data. No Scope 1 or Scope 2 emissions. Strictly indicative model.",
    explicitExclusionsTitle: "EXPLICIT EXCLUSIONS",
    explicitExclusionsText:
      "No detailed physical data, no direct calculation of Scope 1 or Scope 2 emissions, no exhaustive Scope 3 inventory, no certification and no external validation are included within the scope of this document.",
    responsibilityTitle: "RESPONSIBILITY",
    responsibilityText:
      "The results are derived exclusively from the data supplied by the entity, under its sole responsibility.",
    languageNotice: "This document is issued in English.",
    methodologyNote:
      "Certif-Scope CS-SB-v1 · CS-SB-v1 is an internal standardized methodology maintained by Certif-Scope.",

    finalSynthesisTitle: "DOCUMENT VALIDITY SUMMARY",
    finalSynthesisText:
      "This attestation presents an indicative, aggregated, dated, standardized and verifiable CO₂e estimate. It constitutes documentary support intended to facilitate the transmission of simple carbon information without disclosing detailed financial data.",

    footerText:
      "Indicative carbon emissions attestation · Issued by Certif-Scope · certif-scope.com",
    footerPageLabel: "Page",
  };
}

