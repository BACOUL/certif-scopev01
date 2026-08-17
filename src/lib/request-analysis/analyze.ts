import { ambiguousRules, blockingRules, positiveRules } from "./rules";
import type {
  AnalysisOutcome,
  AnalysisStatus,
  RequestAnalysis,
  RequestContext,
  RequestedScope,
  RequirementMatch,
  RuleDefinition,
} from "./types";

export const MIN_REQUEST_LENGTH = 30;
export const MAX_REQUEST_LENGTH = 12_000;

type NormalizedRequest = {
  value: string;
  sourceIndices: number[];
};

type LocatedRule = {
  rule: RuleDefinition;
  start: number;
  end: number;
};

const statusCopy: Record<
  AnalysisStatus,
  Pick<RequestAnalysis, "summary" | "nextAction">
> = {
  compatible: {
    summary:
      "Le texte demande une information carbone simplifiée ou indicative, sans exigence bloquante détectée.",
    nextAction:
      "Confirmez une dernière fois que ce format convient au destinataire, puis générez l’attestation.",
  },
  a_clarifier: {
    summary:
      "Le texte évoque un besoin carbone, mais le niveau de méthode, de périmètre ou de vérification attendu reste imprécis.",
    nextAction:
      "Demandez au destinataire de confirmer le format, les scopes et le niveau de vérification attendus.",
  },
  incompatible: {
    summary:
      "Le texte contient au moins une exigence qui dépasse le périmètre de l’attestation CO₂e indicative.",
    nextAction:
      "Préparez le livrable explicitement demandé ou sollicitez un prestataire qualifié pour ce type de mission.",
  },
};

function normalizeCharacter(character: string): string {
  const replacements: Record<string, string> = {
    "’": "'",
    "‘": "'",
    "`": "'",
    "´": "'",
    "‑": "-",
    "–": "-",
    "—": "-",
    œ: "oe",
    Œ: "oe",
    æ: "ae",
    Æ: "ae",
    ß: "ss",
    "₀": "0",
    "₁": "1",
    "₂": "2",
    "₃": "3",
    "₄": "4",
    "₅": "5",
    "₆": "6",
    "₇": "7",
    "₈": "8",
    "₉": "9",
  };

  const replaced = replacements[character] ?? character;

  return replaced
    .toLocaleLowerCase("fr-FR")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function normalizeWithSourceMap(source: string): NormalizedRequest {
  let value = "";
  const sourceIndices: number[] = [];

  for (let sourceIndex = 0; sourceIndex < source.length; ) {
    const codePoint = source.codePointAt(sourceIndex);
    if (codePoint === undefined) break;

    const character = String.fromCodePoint(codePoint);
    const normalizedCharacter = normalizeCharacter(character);
    const isWhitespace = /\s/u.test(normalizedCharacter);
    const segment = isWhitespace ? " " : normalizedCharacter;

    if (!(segment === " " && value.endsWith(" "))) {
      value += segment;
      for (let index = 0; index < segment.length; index += 1) {
        sourceIndices.push(sourceIndex);
      }
    }

    sourceIndex += character.length;
  }

  const leadingWhitespace = value.length - value.trimStart().length;
  const trimmedValue = value.trim();

  return {
    value: trimmedValue,
    sourceIndices: sourceIndices.slice(
      leadingWhitespace,
      leadingWhitespace + trimmedValue.length,
    ),
  };
}

export function normalizeRequestText(source: string): string {
  return normalizeWithSourceMap(source).value;
}

function isNegated(text: string, matchStart: number): boolean {
  const before = text.slice(Math.max(0, matchStart - 64), matchStart);

  return (
    /(?:\baucun(?:e)?|\bsans|\bnon|\bpas d[' ]?|\bne (?:\w+\s+){0,4}pas(?: d[' ]?| de )?|\bplutot qu[' e])(?:\s+\w+){0,5}\s*$/u.test(
      before,
    ) || /\bn[' ]est pas (?:un |une |du |de la )?$/u.test(before)
  );
}

function locateRule(text: string, rule: RuleDefinition): LocatedRule | null {
  for (const pattern of rule.patterns) {
    const flags = pattern.flags.includes("g")
      ? pattern.flags
      : `${pattern.flags}g`;
    const globalPattern = new RegExp(pattern.source, flags);

    for (const match of text.matchAll(globalPattern)) {
      const start = match.index ?? 0;
      if (rule.ignoreWhenNegated && isNegated(text, start)) continue;

      return {
        rule,
        start,
        end: start + match[0].length,
      };
    }
  }

  return null;
}

function createExcerpt(
  source: string,
  sourceMap: number[],
  start: number,
  end: number,
): string {
  const mappedStart = sourceMap[start] ?? 0;
  const mappedEndIndex = sourceMap[Math.max(start, end - 1)] ?? mappedStart;
  const before = Math.max(0, mappedStart - 56);
  const after = Math.min(source.length, mappedEndIndex + 72);
  const cleaned = source
    .slice(before, after)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return `${before > 0 ? "…" : ""}${cleaned}${after < source.length ? "…" : ""}`;
}

function matchRules(
  source: string,
  normalized: NormalizedRequest,
  rules: RuleDefinition[],
): RequirementMatch[] {
  return rules.flatMap((rule) => {
    const located = locateRule(normalized.value, rule);
    if (!located) return [];

    return [
      {
        code: rule.code,
        label: rule.label,
        severity: rule.severity,
        excerpt: createExcerpt(
          source,
          normalized.sourceIndices,
          located.start,
          located.end,
        ),
      },
    ];
  });
}

function detectContext(text: string): RequestContext {
  const contextPatterns: Array<[RequestContext, RegExp]> = [
    [
      "appel_offres",
      /\b(?:appel d[' ]offres|dce|marche public|consultation|rfp)\b/,
    ],
    ["banque", /\b(?:banque|bancaire|financement|credit)\b/],
    ["assurance", /\b(?:assurance|assureur|assurantiel)\b/],
    ["fournisseur", /\b(?:fournisseur|service achats?|prequalification)\b/],
    ["client", /\b(?:client|donneur d[' ]ordre|acheteur)\b/],
  ];

  return (
    contextPatterns.find(([, pattern]) => pattern.test(text))?.[0] ?? "inconnu"
  );
}

function detectReportingYear(text: string): string | undefined {
  const contextualYear = text.match(
    /\b(?:annee|exercice|reporting|periode)(?:\s+de)?(?:\s*[:=-]?\s*)(20\d{2})\b/,
  );
  if (contextualYear?.[1]) return contextualYear[1];

  return text.match(/\b(20\d{2})\b/)?.[1];
}

function detectRequestedScopes(text: string): RequestedScope[] {
  const scopes: Array<[RequestedScope, RegExp]> = [
    ["scope_1", /\bscope\s*1\b/],
    ["scope_2", /\bscope\s*2\b/],
    ["scope_3", /\bscope\s*3\b/],
  ];

  return scopes
    .filter(([, pattern]) => pattern.test(text))
    .map(([scope]) => scope);
}

function detectStandards(text: string): string[] {
  const standards: Array<[string, RegExp]> = [
    ["BEGES", /\bbeges\b/],
    ["ISO 14064", /\biso\s*14064(?:-\d)?\b/],
    ["GHG Protocol", /\bghg protocol\b/],
    ["CSRD", /\bcsrd\b/],
    ["ESRS", /\besrs\b/],
    ["VSME", /\bvsme\b/],
    ["ADEME Base Empreinte", /\b(?:base empreinte|facteurs? ademe)\b/],
  ];

  return standards
    .filter(([, pattern]) => pattern.test(text))
    .map(([standard]) => standard);
}

function ambiguityIsResolved(
  ambiguousMatches: RequirementMatch[],
  positiveMatches: RequirementMatch[],
): boolean {
  if (ambiguousMatches.length === 0) return true;

  const positiveCodes = new Set(positiveMatches.map((match) => match.code));
  const explicitlySufficient = positiveCodes.has("format_indicatif_suffisant");
  const boundariesAreExplicit =
    positiveCodes.has("aucun_format_impose") ||
    positiveCodes.has("aucune_verification_externe");

  return (
    explicitlySufficient ||
    (positiveMatches.length >= 2 && boundariesAreExplicit)
  );
}

function decideStatus(
  blockingMatches: RequirementMatch[],
  ambiguousMatches: RequirementMatch[],
  positiveMatches: RequirementMatch[],
): AnalysisStatus {
  if (blockingMatches.length > 0) return "incompatible";
  if (
    positiveMatches.length > 0 &&
    ambiguityIsResolved(ambiguousMatches, positiveMatches)
  ) {
    return "compatible";
  }

  return "a_clarifier";
}

export function analyzeRequest(source: string): AnalysisOutcome {
  const trimmed = source.trim();

  if (trimmed.length < MIN_REQUEST_LENGTH) {
    return {
      ok: false,
      error: {
        code: "too_short",
        message: `Collez au moins ${MIN_REQUEST_LENGTH} caractères pour obtenir une orientation fiable.`,
      },
    };
  }

  if (source.length > MAX_REQUEST_LENGTH) {
    return {
      ok: false,
      error: {
        code: "too_long",
        message: `La demande ne peut pas dépasser ${MAX_REQUEST_LENGTH.toLocaleString("fr-FR")} caractères.`,
      },
    };
  }

  const normalized = normalizeWithSourceMap(source);
  const blockingMatches = matchRules(source, normalized, blockingRules);
  const ambiguousMatches = matchRules(source, normalized, ambiguousRules);
  const positiveMatches = matchRules(source, normalized, positiveRules);
  const status = decideStatus(
    blockingMatches,
    ambiguousMatches,
    positiveMatches,
  );

  return {
    ok: true,
    analysis: {
      status,
      context: detectContext(normalized.value),
      reportingYear: detectReportingYear(normalized.value),
      requestedScopes: detectRequestedScopes(normalized.value),
      standards: detectStandards(normalized.value),
      externalVerificationRequired: blockingMatches.some(
        (match) => match.code === "external_verification",
      ),
      matches: [...blockingMatches, ...ambiguousMatches, ...positiveMatches],
      ...statusCopy[status],
    },
  };
}
