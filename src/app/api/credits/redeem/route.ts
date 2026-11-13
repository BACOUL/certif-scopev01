import {creditOrder} from '@/lib/carbon/service';
import {body,json,failure} from '@/lib/carbon/http';
import {rateLimit} from '@/lib/carbon/store';
import {digest} from '@/lib/carbon/crypto';
export async function POST(req:Request){try{const b=await body(req);if(b.acceptTerms!==true)throw new Error('INELIGIBLE');if(process.env.CARBON_TEST_CHECKOUT!=='true')throw new Error('SALES_DISABLED');await rateLimit(digest(['redeem',req.headers.get('x-vercel-forwarded-for')||'shared']),20);return json(await creditOrder(b.assessment,b.product,String(b.key),String(b.requestId)));}catch(e){return failure(e);}}
