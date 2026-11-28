// Documentary acceptance study, not a production module. Synthetic data only.
const assert=require("node:assert/strict"), fs=require("node:fs"), path=require("node:path"), ts=require("typescript"), vm=require("node:vm");
const root=path.resolve(__dirname,"../src/lib/carbon"), cache=new Map();
function load(file){
 file=path.resolve(root,file); if(!file.startsWith(root+path.sep))throw Error("PATH");
 if(cache.has(file))return cache.get(file).exports;
 const module={exports:{}};cache.set(file,module);
 const js=ts.transpileModule(fs.readFileSync(file,"utf8"),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
 vm.runInNewContext(js,{module,exports:module.exports,require:n=>n==="zod"?require("zod"):n.startsWith("./")?load(n+".ts"):(()=>{throw Error("DEPENDENCY "+n)})()},{filename:file});
 return module.exports;
}
const {calculate}=load("calculate.ts"),{CATEGORIES,FACTORS}=load("factors.ts");
const base=()=>({locale:"fr",company:"Entreprise fictive",identifier:"TEST-ONLY",country:"FR",year:2023,boundary:"Un site fictif",declarant:"Exemple",start:"2023-01-01",end:"2023-12-31",sources:Object.fromEntries(CATEGORIES.map(k=>[k,"not_applicable"])),activities:[],exclusions:"",confirmed:true});
function add(x,kind,quantity,extra={}){
 const group=kind.startsWith("gas_")?"gas":kind.startsWith("refrigerant_")?"refrigerants":kind;
 x.sources[group]="known";
 x.activities.push({id:"row"+x.activities.length,kind,quantity,unit:FACTORS[kind].unit,quality:"invoice",evidence:"FICTIVE-"+x.activities.length,...extra});return x;
}
function example(){return add(add(base(),"electricity",12000,{renewableEnergyKwh:8000}),"gas_pci",18000,{renewableEnergyKwh:0});}
const S1=["gas","diesel_b7","petrol_e10","other_fuels","refrigerants","processes","self_generation"];
const S2=["electricity","purchased_heat","self_generation"];
// Conservative presentation contract: the current unstructured exclusion text cannot identify
// which metric is affected. Mark all affected metrics partial rather than asserting completeness.
function view(r){
 const uncertain=!!r.assessment.exclusions;
 function metric(value,missing){return uncertain||missing?{status:"partial",value:null,knownSum:value}:{status:"declared_covered",value,knownSum:value};}
 const s1=metric(r.scope1T,r.missing.some(k=>S1.includes(k)));
 const s2=metric(r.scope2LocationT,r.missing.some(k=>S2.includes(k)));
 const energy=metric(r.energyMwh,!r.energyTotalComplete);
 const sum=metric(r.totalT,s1.status==="partial"||s2.status==="partial");
 const shares=sum.value!==null&&sum.value>0?[s1.value/sum.value,s2.value/sum.value]:null;
 const mix=energy.value!==null&&r.energyBreakdown.total.complete?{renewable:r.energyBreakdown.total.renewableMwh,nonRenewable:r.energyBreakdown.total.nonRenewableMwh}:null;
 // Even all declared sources covered is not a claim of approved factors or legal compliance.
 return {s1,s2,energy,sum,shares,mix,releaseApproved:false};
}
let count=0; function test(name,fn){fn();count++;console.log("PASS "+name);}
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-9,a+" != "+b);
test("specimen: same data, independent arithmetic",()=>{const r=calculate(example()),v=view(r);close(v.energy.value,30);close(v.s1.value,3.618);close(v.s2.value,.4728);close(v.sum.value,4.0908);close(v.mix.renewable,8);close(v.mix.nonRenewable,22);close(v.shares[0]+v.shares[1],1);assert.equal(v.releaseApproved,false);});
test("unknown gas: no full S1, energy or chart",()=>{const x=add(base(),"electricity",12000);x.sources.gas="unknown";const v=view(calculate(x));assert.equal(v.s1.value,null);assert.equal(v.energy.value,null);assert.equal(v.sum.value,null);assert.equal(v.shares,null);close(v.s2.value,.4728);});
test("unknown bought heat: no full S2 or energy",()=>{const x=example();x.sources.purchased_heat="unknown";const v=view(calculate(x));assert.equal(v.s2.value,null);assert.equal(v.energy.value,null);close(v.s1.value,3.618);});
test("unknown process emissions: energy unaffected, S1 partial",()=>{const x=example();x.sources.processes="unknown";const v=view(calculate(x));close(v.energy.value,30);assert.equal(v.s1.value,null);assert.equal(v.shares,null);});
test("unknown fugitive emissions: S1 partial",()=>{const x=example();x.sources.refrigerants="unknown";const v=view(calculate(x));assert.equal(v.s1.value,null);close(v.energy.value,30);});
test("unknown self generation: block both scopes pending boundary",()=>{const x=example();x.sources.self_generation="unknown";const v=view(calculate(x));assert.equal(v.s1.value,null);assert.equal(v.s2.value,null);assert.equal(v.energy.value,null);});
test("unstructured exclusion: no complete metrics",()=>{const x=example();x.exclusions="Source non précisée";const v=view(calculate(x));for(const k of ["s1","s2","energy","sum"])assert.equal(v[k].value,null);assert.equal(v.mix,null);});
test("missing renewables does not change location-based emissions",()=>{const x=example();delete x.activities[0].renewableEnergyKwh;const v=view(calculate(x));close(v.sum.value,4.0908);assert.equal(v.mix,null);});
test("known source with no row is unknown",()=>{const x=example();x.sources.other_fuels="known";const v=view(calculate(x));assert.equal(v.s1.value,null);assert.equal(v.energy.value,null);});
test("zero consumption: no division by zero",()=>{const v=view(calculate(add(base(),"electricity",0,{renewableEnergyKwh:0})));assert.equal(v.sum.value,0);assert.equal(v.shares,null);assert.equal(v.energy.value,0);});
test("actual prototype rejects contradictory source",()=>{const x=example();x.sources.gas="not_applicable";assert.throws(()=>calculate(x),/SOURCE_CONFLICT/);});
test("actual prototype rejects renewable over total",()=>{const x=example();x.activities[0].renewableEnergyKwh=12001;assert.throws(()=>calculate(x),/RENEWABLE_EXCEEDS_TOTAL_ENERGY/);});
test("actual prototype rejects wrong unit",()=>{const x=example();x.activities[1].unit="kWh PCS";assert.throws(()=>calculate(x),/UNIT_MISMATCH/);});
test("actual prototype rejects duplicate evidence",()=>{const x=example();x.activities.push({...x.activities[0],id:"dup"});assert.throws(()=>calculate(x),/DUPLICATE_EVIDENCE/);});
test("actual prototype rejects unsupported geographic code",()=>{const x=example();x.country="DE";assert.throws(()=>calculate(x));});
test("known release gaps: 2027 unsupported and eligibility not approval",()=>{const x=example();x.year=2027;x.start="2027-01-01";x.end="2027-12-31";assert.throws(()=>calculate(x));const r=calculate(example());assert.equal(r.saleEligible,true);assert.ok(r.warnings.includes("HISTORICAL_FACTORS"));assert.equal(view(r).releaseApproved,false);});
test("known release gap: unbounded positive fuel energy ratio accepted",()=>{const x=add(base(),"diesel_b7",1,{energyKwh:100000});const r=calculate(x);close(r.energyMwh,100);assert.equal(r.saleEligible,true);});
console.log("RESULT "+count+" study assertions passed; includes reproduction of release gaps, NOT production acceptance.");
