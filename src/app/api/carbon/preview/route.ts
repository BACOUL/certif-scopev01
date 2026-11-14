import {calculate} from "@/lib/carbon/calculate";
import {body,json,failure} from "@/lib/carbon/http";
export async function POST(req:Request){try{return json(calculate(await body(req)));}catch(e){return failure(e);}}
