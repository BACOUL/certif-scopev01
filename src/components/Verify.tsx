"use client";
import {useState} from "react";
import {COPY,Locale} from "@/lib/carbon/copy";
export default function Verify({locale}:{locale:Locale}){const c=COPY[locale],[status,setStatus]=useState("");return <><p>{c.signed}</p><label>{c.upload}<input type="file" accept="application/json,.json" onChange={async e=>{setStatus(c.loading);try{const file=e.target.files?.[0];if(!file||file.size>262144)throw Error();const data=JSON.parse(await file.text());const res=await fetch("/api/carbon/verify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});if(!res.ok)throw Error();setStatus((await res.json()).valid?c.valid:c.invalid);}catch{setStatus(c.invalid);}}}/></label><p role="status">{status}</p></>}
