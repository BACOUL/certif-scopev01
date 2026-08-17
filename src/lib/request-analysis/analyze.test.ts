import assert from "node:assert/strict";
import test from "node:test";

import {
  analyzeRequest,
  MAX_REQUEST_LENGTH,
  normalizeRequestText,
} from "./analyze";
import type { AnalysisStatus } from "./types";

type Fixture = {
  name: string;
  expected: AnalysisStatus;
  text: string;
};

const fixtures: Fixture[] = [
  {
    name: "compatible - estimation fournisseur sans contrainte",
    expected: "compatible",
    text: "Pour notre revue fournisseur, une estimation CO₂e indicative suffit. Aucun format n’est imposé et aucune vérification externe n’est exigée.",
  },
  {
    name: "compatible - information simplifiée",
    expected: "compatible",
    text: "Merci de transmettre une information carbone simplifiée pour notre revue annuelle des fournisseurs, avec une courte explication de la méthode.",
  },
  {
    name: "compatible - valeur agrégée acceptée",
    expected: "compatible",
    text: "Nous acceptons une indication CO2e agrégée pour l’exercice 2025. Le format est libre et aucune certification n’est demandée.",
  },
  {
    name: "compatible - screening fournisseur",
    expected: "compatible",
    text: "Ce screening fournisseur demande seulement une estimation carbone indicative afin de compléter la préqualification de notre service achats.",
  },
  {
    name: "compatible - document déclaratif",
    expected: "compatible",
    text: "Un document carbone déclaratif convient pour cette première revue client. Merci d’indiquer le résultat agrégé et la méthodologie utilisée.",
  },
  {
    name: "compatible - première information",
    expected: "compatible",
    text: "Une première information carbone suffit à ce stade du référencement. Aucun format obligatoire n’est prévu dans notre procédure.",
  },
  {
    name: "compatible - résultat et méthode",
    expected: "compatible",
    text: "Le dossier attend un résultat agrégé en tCO2e avec une méthodologie indiquée. Il s’agit d’une information indicative pour le client.",
  },
  {
    name: "compatible - email copié",
    expected: "compatible",
    text: "Objet : revue achats\nBonjour, pour notre screening fournisseur, une estimation CO2e indicative suffira. Aucun format n'est imposé. Cordialement, Service achats",
  },
  {
    name: "compatible - accents et majuscules",
    expected: "compatible",
    text: "POUR LA PRÉQUALIFICATION FOURNISSEUR, NOUS ACCEPTONS UNE ESTIMATION CO₂E INDICATIVE. LE FORMAT EST LIBRE POUR CETTE RÉPONSE.",
  },
  {
    name: "compatible - apostrophe typographique",
    expected: "compatible",
    text: "Le donneur d’ordre accepte une attestation CO₂e indicative ; aucune vérification externe n’est requise pour cette étape documentaire.",
  },
  {
    name: "compatible - année de reporting",
    expected: "compatible",
    text: "Pour l’année 2024, une valeur CO2e agrégée convient à notre banque comme première information carbone sur l’entreprise.",
  },
  {
    name: "compatible - texte HTML",
    expected: "compatible",
    text: "<p>Notre client accepte une <strong>estimation CO2e indicative</strong>.</p><p>Aucun format n’est imposé pour la réponse.</p>",
  },
  {
    name: "compatible - bilan complet explicitement exclu",
    expected: "compatible",
    text: "Nous ne demandons pas de bilan carbone complet : une estimation CO2e indicative suffit pour cette première évaluation et le format est libre.",
  },
  {
    name: "compatible - indication agrégée sans vérification",
    expected: "compatible",
    text: "Une indication CO2e agrégée est attendue pour le référencement. Elle peut être déclarative et aucune vérification externe n'est nécessaire.",
  },
  {
    name: "compatible - dossier bancaire simplifié",
    expected: "compatible",
    text: "Dans le cadre du financement bancaire, une information carbone simplifiée suffit pour l’étude initiale du dossier de l’entreprise.",
  },
  {
    name: "à clarifier - bilan carbone générique",
    expected: "a_clarifier",
    text: "Bonjour, merci de nous transmettre votre bilan carbone avant la fin du mois afin de compléter votre dossier fournisseur.",
  },
  {
    name: "à clarifier - document RSE",
    expected: "a_clarifier",
    text: "Le service achats souhaite recevoir un document RSE lié à vos émissions pour renouveler votre référencement annuel.",
  },
  {
    name: "à clarifier - preuve carbone",
    expected: "a_clarifier",
    text: "Nous avons besoin d’une preuve carbone concernant votre entreprise pour finaliser notre questionnaire de qualification.",
  },
  {
    name: "à clarifier - justificatif CO2",
    expected: "a_clarifier",
    text: "Merci de joindre un justificatif CO2 au dossier de consultation, sans autre indication dans le règlement actuel.",
  },
  {
    name: "à clarifier - information ESG",
    expected: "a_clarifier",
    text: "La banque demande une information ESG sur les émissions de l’entreprise avant de poursuivre l’analyse du financement.",
  },
  {
    name: "à clarifier - empreinte environnementale",
    expected: "a_clarifier",
    text: "Le client veut connaître notre empreinte environnementale pour sa revue annuelle, mais son message ne précise aucun référentiel.",
  },
  {
    name: "à clarifier - document environnemental",
    expected: "a_clarifier",
    text: "Veuillez fournir un document environnemental récent à intégrer au mémoire technique remis avec votre candidature.",
  },
  {
    name: "à clarifier - bilan GES",
    expected: "a_clarifier",
    text: "L’assureur nous demande un bilan GES de l’entreprise, sans préciser la période, les scopes ni le niveau de vérification.",
  },
  {
    name: "à clarifier - questionnaire carbone",
    expected: "a_clarifier",
    text: "Un questionnaire carbone doit être complété pour le référencement, mais nous n’avons reçu aucune précision sur le livrable.",
  },
  {
    name: "à clarifier - émissions sans format",
    expected: "a_clarifier",
    text: "Pouvez-vous communiquer les émissions de votre société pour notre dossier interne avant la prochaine réunion du comité achats ?",
  },
  {
    name: "à clarifier - texte sans rapport",
    expected: "a_clarifier",
    text: "Merci de confirmer votre adresse de livraison, vos délais habituels et le nom de la personne à contacter pour cette commande.",
  },
  {
    name: "à clarifier - bilan et seul signal positif",
    expected: "a_clarifier",
    text: "Le client demande un bilan carbone et mentionne simplement une estimation indicative, sans confirmer que ce format lui suffit.",
  },
  {
    name: "à clarifier - scope 3 isolé",
    expected: "a_clarifier",
    text: "Le questionnaire fait référence au Scope 3, mais ne précise ni la méthode attendue ni la nature du document à remettre.",
  },
  {
    name: "à clarifier - HTML avec preuve carbone",
    expected: "a_clarifier",
    text: "<div>Bonjour,</div><div>merci de joindre une <b>preuve carbone</b> au dossier fournisseur avant vendredi.</div>",
  },
  {
    name: "à clarifier - email assurance",
    expected: "a_clarifier",
    text: "De : gestion@assurance.example\nObjet : pièces du dossier\nMerci de nous adresser un document RSE relatif au carbone de votre société.",
  },
  {
    name: "incompatible - BEGES réglementaire",
    expected: "incompatible",
    text: "Le titulaire doit remettre un BEGES réglementaire à jour et conforme aux obligations applicables avant la signature du marché.",
  },
  {
    name: "incompatible - audit complet",
    expected: "incompatible",
    text: "Notre cahier des charges exige un audit carbone complet réalisé sur l’ensemble des activités de l’entreprise candidate.",
  },
  {
    name: "incompatible - certification officielle",
    expected: "incompatible",
    text: "La preuve devra prendre la forme d’une certification carbone officielle validée par un organisme accrédité indépendant.",
  },
  {
    name: "incompatible - vérification externe",
    expected: "incompatible",
    text: "Une vérification externe obligatoire par un tiers indépendant est exigée pour valider les données communiquées au groupe.",
  },
  {
    name: "incompatible - ISO 14064",
    expected: "incompatible",
    text: "L’inventaire devra être établi conformément à la norme ISO 14064-1 et remis avec les justificatifs correspondants.",
  },
  {
    name: "incompatible - GHG Protocol complet",
    expected: "incompatible",
    text: "Nous exigeons un inventaire complet selon le GHG Protocol pour intégrer le fournisseur à notre reporting mondial.",
  },
  {
    name: "incompatible - scopes détaillés",
    expected: "incompatible",
    text: "Le dossier doit contenir un inventaire détaillé des émissions couvrant les Scopes 1, 2 et 3 de la société.",
  },
  {
    name: "incompatible - CSRD et ESRS",
    expected: "incompatible",
    text: "Les informations seront utilisées dans un reporting CSRD conforme à ESRS E1 et doivent répondre aux exigences du groupe.",
  },
  {
    name: "incompatible - empreinte produit et ACV",
    expected: "incompatible",
    text: "Le client exige une empreinte carbone du produit avec une analyse de cycle de vie complète pour chaque référence vendue.",
  },
  {
    name: "incompatible - méthode et facteurs imposés",
    expected: "incompatible",
    text: "Le calcul par données physiques détaillées est obligatoire et les facteurs d’émission ADEME imposés doivent être utilisés.",
  },
];

assert.equal(
  fixtures.length,
  40,
  "La suite doit conserver exactement 40 fixtures métier",
);

for (const fixture of fixtures) {
  test(fixture.name, () => {
    const outcome = analyzeRequest(fixture.text);
    assert.equal(outcome.ok, true);
    if (!outcome.ok) return;
    assert.equal(outcome.analysis.status, fixture.expected);
  });
}

test("refuse un texte vide", () => {
  const outcome = analyzeRequest("   ");
  assert.equal(outcome.ok, false);
  if (outcome.ok) return;
  assert.equal(outcome.error.code, "too_short");
});

test("refuse un texte inférieur à 30 caractères", () => {
  const outcome = analyzeRequest("Bilan carbone demandé");
  assert.equal(outcome.ok, false);
  if (outcome.ok) return;
  assert.equal(outcome.error.code, "too_short");
});

test("refuse un texte supérieur à 12 000 caractères", () => {
  const outcome = analyzeRequest("x".repeat(MAX_REQUEST_LENGTH + 1));
  assert.equal(outcome.ok, false);
  if (outcome.ok) return;
  assert.equal(outcome.error.code, "too_long");
});

test("accepte exactement 12 000 caractères", () => {
  const prefix =
    "Une estimation CO2e indicative suffit et aucun format n'est imposé. ";
  const outcome = analyzeRequest(
    prefix + "x".repeat(MAX_REQUEST_LENGTH - prefix.length),
  );
  assert.equal(outcome.ok, true);
  if (!outcome.ok) return;
  assert.equal(outcome.analysis.status, "compatible");
});

test("normalise les accents, ligatures, apostrophes et espaces", () => {
  assert.equal(
    normalizeRequestText("  L’ŒUVRE  ÉCO₂E\n est — DÉCLARATIVE  "),
    "l'oeuvre eco2e est - declarative",
  );
});

test("la priorité bloquante gagne sur les signaux positifs", () => {
  const outcome = analyzeRequest(
    "Une estimation CO2e indicative suffit, mais une vérification externe obligatoire selon ISO 14064 est également exigée.",
  );
  assert.equal(outcome.ok, true);
  if (!outcome.ok) return;
  assert.equal(outcome.analysis.status, "incompatible");
  assert.ok(
    outcome.analysis.matches.some((match) => match.severity === "blocking"),
  );
  assert.ok(
    outcome.analysis.matches.some((match) => match.severity === "positive"),
  );
});

test("détecte le contexte, l'année, les scopes et plusieurs standards", () => {
  const outcome = analyzeRequest(
    "Pour l'appel d'offres et l'exercice 2025, un reporting CSRD selon ISO 14064 doit détailler Scope 1, Scope 2 et Scope 3.",
  );
  assert.equal(outcome.ok, true);
  if (!outcome.ok) return;
  assert.equal(outcome.analysis.context, "appel_offres");
  assert.equal(outcome.analysis.reportingYear, "2025");
  assert.deepEqual(outcome.analysis.requestedScopes, [
    "scope_1",
    "scope_2",
    "scope_3",
  ]);
  assert.deepEqual(outcome.analysis.standards, ["ISO 14064", "CSRD"]);
});

test("une négation explicite ne déclenche pas la vérification externe", () => {
  const outcome = analyzeRequest(
    "Une estimation CO2e indicative suffit et aucune vérification externe n'est exigée pour cette première réponse fournisseur.",
  );
  assert.equal(outcome.ok, true);
  if (!outcome.ok) return;
  assert.equal(outcome.analysis.status, "compatible");
  assert.equal(outcome.analysis.externalVerificationRequired, false);
});
