"use client";
import {useState} from "react";
import type {Locale} from "@/lib/carbon/copy";
import {COPY} from "@/lib/carbon/copy";
import {recoveryCode} from "@/lib/carbon/recovery";

/** Must be rendered BEFORE a redirect to Stripe, not only on its success page. */
export default function RecoveryCode({locale,id,token}:{locale:Locale;id:string;token:string}){
 const c=COPY[locale],code=recoveryCode(id,token);
 const [visible,setVisible]=useState(false),[copied,setCopied]=useState(false);
 async function copy(){
  try{
   if(!navigator.clipboard?.writeText)throw Error("NO_CLIPBOARD");
   await navigator.clipboard.writeText(code);setCopied(true);
  }catch{setVisible(true);setCopied(false);}
 }
 return <section className="card" aria-label={c.recoveryTitle}>
  <h3>{c.recoveryTitle}</h3>
  <p>{c.recoveryExplanation}</p>
  <div className="actions">
   <button type="button" className="secondary" onClick={()=>void copy()}>{copied?c.recoveryCopied:c.recoveryCopy}</button>
   <button type="button" className="secondary" onClick={()=>setVisible(!visible)}>{visible?c.recoveryHide:c.recoveryShow}</button>
  </div>
  {visible&&<p><code style={{overflowWrap:"anywhere",userSelect:"all"}}>{code}</code></p>}
 </section>;
}
