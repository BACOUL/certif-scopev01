"use client";
import {useEffect,useState} from "react";
import {COPY,type Locale} from "@/lib/carbon/copy";
import {resolveDeliveryAccess} from "@/lib/carbon/recovery";
import RecoveryCode from "./RecoveryCode";

export default function Download({locale,id}:{locale:Locale;id:string}){
 const c=COPY[locale];
 const [error,setError]=useState(""),[busy,setBusy]=useState(false);
 const [storedToken,setStoredToken]=useState(""),[storedReportId,setStoredReportId]=useState(id),[enteredCode,setEnteredCode]=useState("");

 useEffect(()=>{
  setStoredReportId(id);
  try{
   const stored=id?sessionStorage.getItem(`carbon-${id}`)||"":"";
   // Session storage is untrusted: never render a malformed capability.
   setStoredToken(resolveDeliveryAccess(id,id,stored,"")?stored:"");
  }
  catch{setStoredToken("");}
 },[id]);

 async function download(format:"pdf"|"csv"|"json"){
  setBusy(true);setError("");
  try{
   const access=resolveDeliveryAccess(id,storedReportId,storedToken,enteredCode);
   if(!access)throw Error(c.recoveryInvalid);
   const {id:reportId,token}=access;
   const res=await fetch("/api/attestation/issue",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({id:reportId,token,format})
   });
   if(!res.ok){
    if(res.status===409)throw Error(c.pending);
    if(res.status===403)throw Error(c.recoveryInvalid);
    throw Error(c.error);
   }
   // Only persist a manually supplied code when it has just passed the
   // server-side access and payment checks.
   if(access.manual){
    setStoredReportId(reportId);
    setStoredToken(token);
    setEnteredCode("");
    try{sessionStorage.setItem(`carbon-${reportId}`,token);}catch{}
   }
   const url=URL.createObjectURL(await res.blob());
   const a=document.createElement("a");a.href=url;a.download=`carbon-${reportId}.${format}`;
   a.click();setTimeout(()=>URL.revokeObjectURL(url),10000);
  }catch(e){
   setError((e instanceof Error?e.message:c.error)+" "+c.support);
  }finally{setBusy(false);}
 }

 return <div className="content">
  <h1>{id?c.steps[4]:c.recover}</h1>
  <p>{id?c.notice:c.recoverIntro}</p>
  {id&&<p>{c.pending}</p>}
  {storedToken&&storedReportId&&<RecoveryCode locale={locale} id={storedReportId} token={storedToken}/>}
  <label>{c.recoveryPaste}
   <input type="password" autoComplete="off" maxLength={100} spellCheck={false}
    value={enteredCode} onChange={e=>setEnteredCode(e.target.value)}/>
  </label>
  <p className="small">{c.recoveryExplanation}</p>
  <div className="actions">
   {(["pdf","csv","json"] as const).map(f=><button type="button" key={f} disabled={busy} onClick={()=>void download(f)}>{c.download} {f.toUpperCase()}</button>)}
  </div>
  {storedReportId&&<p className="small">{storedReportId}</p>}
  <div role="alert">{error&&<p className="error">{error}</p>}</div>
 </div>;
}
