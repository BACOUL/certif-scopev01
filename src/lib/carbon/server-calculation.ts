import "server-only";
import { Buffer } from "node:buffer";
import { calculate } from "./calculate";
import { evaluateLaunch } from "./eligibility";
import { assessmentSchema } from "./schema";
import { REVIEW_GEOGRAPHY } from "./period";

/**
 * Server boundary for the future B3 order flow. No endpoint, persistence,
 * payment, credit consumption or signature is enabled by this module.
 * Raw activity data only. Never accept a browser's total, factor or policy.
 * The caller must enforce the same byte limit while reading a request stream
 * (before buffering), authentication, authorization and rate limits.
 */
export const MAX_ASSESSMENT_BYTES = 128 * 1024;
type ErrorCode = "INVALID_BODY"|"BODY_TOO_LARGE"|"INVALID_ASSESSMENT"|"GEOGRAPHY_REQUIRED"|"ISSUANCE_DISABLED";
export class CarbonRequestError extends Error {
 constructor(readonly code:ErrorCode){super(code);this.name="CarbonRequestError";}
}
export function recalculateOnServer(raw:string){
 if(typeof raw!=="string" || !raw.trim())throw new CarbonRequestError("INVALID_BODY");
 if(Buffer.byteLength(raw,"utf8")>MAX_ASSESSMENT_BYTES)throw new CarbonRequestError("BODY_TOO_LARGE");
 let input:unknown;
 try{input=JSON.parse(raw);}catch{throw new CarbonRequestError("INVALID_BODY");}
 const parsed=assessmentSchema.safeParse(input);
 if(!parsed.success)throw new CarbonRequestError("INVALID_ASSESSMENT");
 if(parsed.data.geography!==REVIEW_GEOGRAPHY)throw new CarbonRequestError("GEOGRAPHY_REQUIRED");
 // The shared engine independently parses the strict schema again.
 // Reject semantic conflicts, and do not expose raw validation inputs.
 let calculation:ReturnType<typeof calculate>;
 try{calculation=calculate(parsed.data);}catch{throw new CarbonRequestError("INVALID_ASSESSMENT");}
 const eligibility=evaluateLaunch(calculation);
 return {calculation,eligibility};
}

/** Future issuance entry point. Hard-disabled until server-side release,
 * verified factor registry, immutable snapshots and commercial controls pass.
 * Do not connect this function to the legacy payment routes yet. */
export function prepareDeclarationOrder(raw:string):never {
 recalculateOnServer(raw);
 throw new CarbonRequestError("ISSUANCE_DISABLED");
}
