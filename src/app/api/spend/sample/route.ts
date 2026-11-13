import {spendPdf} from '@/lib/spend/document';
import {spendSample} from '@/lib/spend/calculate';
import {localeOf} from '@/lib/carbon/copy';
export async function GET(req:Request){const locale=localeOf(new URL(req.url).searchParams.get('locale')||'fr');return new Response(new Uint8Array(await spendPdf(spendSample(locale),true)),{headers:{'Content-Type':'application/pdf','Cache-Control':'public, max-age=3600'}});}
