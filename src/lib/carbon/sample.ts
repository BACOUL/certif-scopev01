import {calculate} from "./calculate";
import {CATEGORIES} from "./factors";
import type {Locale} from "./copy";
export const sample=(locale:Locale="fr")=>({id:"SPECIMEN",issuedAt:"2026-11-12T00:00:00.000Z",calculation:calculate({locale,company:"EXEMPLE / EXAMPLE SARL",identifier:"FICTIF / FICTIONAL",country:"FR",year:2025,start:"2025-01-01",end:"2025-12-31",boundary:"Bureau / Office - France continentale",declarant:"Exemple / Example",exclusions:"",confirmed:true,sources:Object.fromEntries(CATEGORIES.map(k=>[k,k==="electricity"?"known":"not_applicable"])),activities:[{id:"office",kind:"electricity",quantity:10000,unit:"kWh",quality:"invoice",evidence:"SPECIMEN"}]})});
