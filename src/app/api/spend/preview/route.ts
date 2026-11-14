import {body,json,failure} from '@/lib/carbon/http';
import {calculateSpend} from '@/lib/spend/calculate';
export async function POST(req:Request){try{return json(calculateSpend(await body(req)));}catch(e){return failure(e);}}
