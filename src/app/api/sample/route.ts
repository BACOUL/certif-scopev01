import {sample} from "@/lib/carbon/sample";
import {pdf} from "@/lib/carbon/document";
import {localeOf} from "@/lib/carbon/copy";
export const runtime="nodejs";
const cache=new Map<string,Uint8Array>();
export async function GET(req:Request){const locale=localeOf(new URL(req.url).searchParams.get("locale")||"fr");let bytes=cache.get(locale);if(!bytes){bytes=new Uint8Array(await pdf(sample(locale),true));cache.set(locale,bytes);}return new Response(bytes as BodyInit,{headers:{"Content-Type":"application/pdf","Content-Disposition":`inline; filename="specimen-${locale}.pdf"`,"Cache-Control":"public,max-age=3600"}});}
