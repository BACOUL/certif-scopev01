"use client";
import {useState} from "react";
import {COPY, type Locale} from "@/lib/carbon/copy";
import RecoveryCode from "./RecoveryCode";

export type PendingOrder={id:string;token:string;url:string;requiresPayment:boolean};

/**
 * The buyer sees and can save the capability BEFORE leaving the checkout form.
 * Stripe is never given this secret. No assumption about sessionStorage support.
 */
export default function CheckoutAccess({locale,order}:{locale:Locale;order:PendingOrder}){
 const c=COPY[locale];const [saved,setSaved]=useState(false);
 return <div>
  <RecoveryCode locale={locale} id={order.id} token={order.token}/>
  <label><input type="checkbox" checked={saved} onChange={e=>setSaved(e.target.checked)}/>{c.recoverySaved}</label>
  <button type="button" disabled={!saved} onClick={()=>location.assign(order.url)}>
   {order.requiresPayment?c.recoveryContinuePayment:c.recoveryContinueFiles}
  </button>
 </div>;
}
