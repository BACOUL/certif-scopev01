import {test} from "node:test";
import assert from "node:assert/strict";
import {calculate} from "../src/lib/carbon/calculate";
import {sample} from "../src/lib/carbon/sample";
import {pdf} from "../src/lib/carbon/document";

/**
 * The input schema allows up to 40 evidence lines. This does not promise a
 * fixed three-page output: long activity inventories legitimately require
 * extra detail pages, with dynamically numbered footers.
 */
test("PDF FR/EN/DE: maximum 40 justified activity lines paginate without render errors",async()=>{
 for(const locale of ["fr","en","de"] as const){
  const assessment=structuredClone(sample(locale).calculation.assessment);
  assessment.activities=Array.from({length:40},(_,i)=>({
   id:`meter_${i}`,
   kind:"electricity" as const,
   quantity:100+i,
   unit:"kWh" as const,
   quality:"invoice" as const,
   evidence:`INV-${String(i).padStart(3,"0")} ${"Documented electricity meter and period. ".repeat(3)}`,
  }));
  const calculation=calculate(assessment);
  assert.equal(calculation.lines.length,40);
  assert.equal(calculation.saleEligible,true);
  assert.equal(calculation.scope1T,0);
  const report={id:`STRESS-40-${locale}`,issuedAt:"2026-11-13T12:00:00.000Z",calculation};
  const buffer=await pdf(report,true);
  assert.equal(buffer.subarray(0,4).toString(),"%PDF");
  const pageCount=(buffer.toString("latin1").match(/\/Type\s*\/Page\b/g)||[]).length;
  assert.ok(pageCount>3 && pageCount<20,`Unexpected 40-line PDF page count in ${locale}: ${pageCount}`);
  assert.ok(buffer.length>4000,`Unexpected small PDF in ${locale}`);
 }
});
