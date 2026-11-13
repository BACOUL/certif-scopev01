"use client";
import {useEffect,useState} from "react";
import {COPY,type Locale} from "@/lib/carbon/copy";
import {parseRecoveryCode} from "@/lib/carbon/recovery";
import RecoveryCode from "./RecoveryCode";

export default function Download({locale,id}:{locale:Locale;id:string}){
 const c=COPY[locale];
 const [error,setError]=useState(""),[busy,setBusy]=useState(false);
 const [storedToken,setStoredToken]=useState(""),[enteredCode,setEnteredCode]=useState("");

 useEffect(()=>{
  try{setStoredToken(sessionStorage.getItem(`carbon-${id}`)||"");}
  catch{setStoredToken("");}
 },[id]);

 async function download(format:"pdf"|"csv"|"json"){
  setBusy(true);setError("");
  try{
   const recovered=enteredCode.trim()?parseRecoveryCode(id,enteredCode):null;
   if(enteredCode.trim()&&!recovered)throw Error(c.recoveryInvalid);
   const token=recovered||storedToken;
   if(!token)throw Error(c.recoveryInvalid);
   const res=await fetch("/api/attestation/issue",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({id,token,format})
   });
   if(!res.ok){
    if(res.status===409)throw Error(c.pending);
    if(res.status===403)throw Error(c.recoveryInvalid);
    throw Error(c.error);
   }
   // Only persist a manually supplied code when it has just passed the
   // server-side access and payment checks.
   if(recovered){
    setStoredToken(recovered);
    try{sessionStorage.setItem(`carbon-${id}`,recovered);}catch{}
   }
   const url=URL.createObjectURL(await res.blob());
   const a=document.createElement("a");a.href=url;a.download=`carbon-${id}.${format}`;
   a.click();setTimeout(()=>URL.revokeObjectURL(url),10000);
  }catch(e){
   setError((e instanceof Error?e.message:c.error)+" "+c.support);
  }finally{setBusy(false);}
 }

 return <div className="content">
  <h1>{c.steps[4]}</h1>
  <p>{c.notice}</p>
  <p>{c.pending}</p>
  {storedToken&&<RecoveryCode locale={locale} id={id} token={storedToken}/>}
  <label>{c.recoveryPaste}
   <input type="password" autoComplete="off" maxLength={100} spellCheck={false}
    value={enteredCode} onChange={e=>setEnteredCode(e.target.value)}/>
  </label>
  <p className="small">{c.recoveryExplanation}</p>
  <div className="actions">
   {(["pdf","csv","json"] as const).map(f=><button type="button" key={f} disabled={busy} onClick={()=>void download(f)}>{c.download} {f.toUpperCase()}</button>)}
  </div>
  <p className="small">{id}</p>
  <div role="alert">{error&&<p className="error">{error}</p>}</div>
 </div>;
}
