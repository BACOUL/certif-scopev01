import {json} from "@/lib/carbon/http";
export async function GET(){return json({error:"LEGACY_FLOW_REQUIRES_MIGRATION",contact:"contact@certif-scope.com"},410);}
export const POST=GET;
