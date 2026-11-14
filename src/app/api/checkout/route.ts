import {createCheckout} from "@/lib/carbon/service";
import {body,json,failure} from "@/lib/carbon/http";
import {rateLimit} from "@/lib/carbon/store";
import {digest} from "@/lib/carbon/crypto";
export async function POST(req:Request){try{
 const b=await body(req);if(b.acceptTerms!==true)throw new Error("INELIGIBLE");
 if(process.env.CARBON_TEST_CHECKOUT!=="true")throw new Error("SALES_DISABLED");
 await rateLimit(digest(["checkout",req.headers.get("x-vercel-forwarded-for")||"shared"]),20);
 return json(await createCheckout(b.assessment,new URL(req.url).origin));
}catch(e){return failure(e);}}
