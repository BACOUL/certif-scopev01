export type AnalysisStatus = "compatible" | "a_clarifier" | "incompatible";

export type RequestContext =
  | "client"
  | "fournisseur"
  | "appel_offres"
  | "banque"
  | "assurance"
  | "autre"
  | "inconnu";

export type RequestedScope = "scope_1" | "scope_2" | "scope_3";

export type RequirementSeverity = "positive" | "ambiguous" | "blocking";

export type RequirementMatch = {
  code: string;
  label: string;
  excerpt: string;
  severity: RequirementSeverity;
};

export type RequestAnalysis = {
  status: AnalysisStatus;
  context: RequestContext;
  reportingYear?: string;
  requestedScopes: RequestedScope[];
  standards: string[];
  externalVerificationRequired: boolean;
  matches: RequirementMatch[];
  summary: string;
  nextAction: string;
};

export type AnalysisErrorCode = "too_short" | "too_long";

export type AnalysisError = {
  code: AnalysisErrorCode;
  message: string;
};

export type AnalysisOutcome =
  | { ok: true; analysis: RequestAnalysis }
  | { ok: false; error: AnalysisError };

export type RuleDefinition = {
  code: string;
  label: string;
  severity: RequirementSeverity;
  patterns: RegExp[];
  ignoreWhenNegated?: boolean;
};
