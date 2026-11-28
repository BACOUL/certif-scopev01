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
const {calculate}=load("calculate.ts"),{CATEGORIES,FACTORS,category}=load("factors.ts");
const base=()=>({locale:"fr",company:"Entreprise fictive",identifier:"TEST-ONLY",country:"FR",year:2023,boundary:"Un site fictif",declarant:"Exemple",start:"2023-01-01",end:"2023-12-31",sources:Object.fromEntries(CATEGORIES.map(k=>[k,"not_applicable"])),activities:[],exclusions:"",confirmed:true});
function add(x,kind,quantity,extra={}){
 const group=category(kind);
 x.sources[group]="known";
 x.activities.push({id:"row"+x.activities.length,kind,quantity,unit:FACTORS[kind].unit,quality:"invoice",evidence:"FICTIVE-"+x.activities.length,...extra});return x;
}
function example(){return add(add(base(),"electricity",12000,{renewableEnergyKwh:8000}),"gas_pci",18000,{renewableEnergyKwh:0});}
// Read the actual engine report contract, not a separately implemented mock.
function view(r){
 const p=r.report;
 return {s1:p.scope1,s2:p.scope2,energy:p.energy,sum:p.total,
 shares:p.scopeShares?[p.scopeShares.scope1,p.scopeShares.scope2]:null,
 mix:p.energyMix?{renewable:p.energyMix.renewableMwh,nonRenewable:p.energyMix.nonRenewableMwh}:null,
 releaseApproved:p.releaseApproved};
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
test("2027 still unsupported and unvalidated sale blocked",()=>{const x=example();x.year=2027;x.start="2027-01-01";x.end="2027-12-31";assert.throws(()=>calculate(x));const r=calculate(example());assert.equal(r.saleEligible,false);assert.ok(r.warnings.includes("HISTORICAL_FACTORS"));assert.equal(view(r).releaseApproved,false);});
test("implausible fuel energy rejected",()=>{const x=add(base(),"diesel_b7",1,{energyKwh:100000});assert.throws(()=>calculate(x),/IMPLAUSIBLE_FUEL_ENERGY/);});
test("plausible diesel and E10 inputs preserved",()=>{const x=add(add(base(),"diesel_b7",100,{energyKwh:1000}),"petrol_e10",100,{energyKwh:900});const r=calculate(x);close(r.energyMwh,1.9);close(r.scope1T,.468);assert.equal(r.saleEligible,false);});
test("implausibly low fuel energy rejected",()=>{const x=add(base(),"petrol_e10",100,{energyKwh:1});assert.throws(()=>calculate(x),/IMPLAUSIBLE_FUEL_ENERGY/);});
test("CSV omits incomplete emissions and energy despite retained measured subtotal",()=>{const {simulationCsv}=load("export.ts");const x=example();x.exclusions="Une source manquante";const rows=simulationCsv(calculate(x)).replace(/^\uFEFF/,"").split("\r\n").map(l=>l.split(";"));assert.equal(rows[1][7],"");assert.equal(rows[1][8],"30");for(const i of [9,10,11])assert.equal(rows[1][i],"");});
test("verified 2024 electrical candidate chosen only for exact year",()=>{const x=example();x.year=2024;x.start="2024-01-01";x.end="2024-12-31";const r=calculate(x);close(r.report.scope2.value,.42);close(r.report.total.value,4.038);const f=r.lines[0].factor;assert.equal(f.id,"43642");assert.equal(f.row,"4a-V7kBU5QVSOA-uwyHZp");assert.equal(f.year,2024);assert.equal(f.selection,"exact_year_candidate");assert.equal(f.approvedForIssuance,false);assert.equal(r.saleEligible,false);});
test("2025/26 historic electrical demo is explicitly unapproved",()=>{for(const year of [2025,2026]){const x=example();x.year=year;x.start=year+"-01-01";x.end=year+"-10-31";const r=calculate(x);assert.equal(r.lines[0].factor.id,"43273");assert.equal(r.lines[0].factor.selection,"historical_demo_only");assert.ok(r.warnings.includes("ELECTRICITY_EXACT_YEAR_UNAVAILABLE_DEMO_ONLY"));assert.ok(r.warnings.includes("FACTORS_NOT_APPROVED_FOR_ISSUANCE"));assert.equal(r.saleEligible,false);}});
test("historic 2023 comparison remains reproducible",()=>{const r=calculate(example());close(r.report.scope2.value,.4728);assert.equal(r.lines[0].factor.selection,"exact_year_candidate");assert.equal(r.lines[0].factor.id,"43273");assert.equal(r.saleEligible,false);});
test("additional fuel records and units exactly match archived ADEME data",()=>{const archive=JSON.parse(fs.readFileSync(path.resolve(__dirname,"../docs/refonte/evidence/B03_ADEME_PHYSICAL_20261127.json"),"utf8"));for(const kind of ["fuel_oil_pci","butane_pci","propane_pci"]){const f=FACTORS[kind];const ref=archive.candidates.find(x=>x.row._id===f.row).row;assert.equal(ref["Identifiant_de_l'élément"],f.id);assert.equal(ref.Type_poste,"Combustion");assert.equal(ref.Localisation_géographique,"France continentale");assert.equal(ref["Statut_de_l'élément"],"Valide générique");assert.equal(ref["Unité_français"],kind==="propane_pci"?"kgCO2e/GJ PCI":"kgCO2e/kWh PCI");close(f.value,ref.Total_poste_non_décomposé*(kind==="propane_pci"?0.0036:1));assert.equal(category(kind),"other_fuels");}});
test("three additional combustibles, scope 1 and energy without double counting",()=>{const x=add(add(add(example(),"fuel_oil_pci",10000,{renewableEnergyKwh:0}),"butane_pci",10000,{renewableEnergyKwh:0}),"propane_pci",10000,{renewableEnergyKwh:0});const r=calculate(x);close(r.report.scope1.value,11.0008);close(r.report.scope2.value,.4728);close(r.report.total.value,11.4736);close(r.report.energy.value,60);close(r.energyBreakdown.fuels.totalMwh,48);assert.equal(r.saleEligible,false);for(const l of r.lines.slice(2)){assert.equal(l.factor.selection,"historical_demo_only");assert.equal(l.factor.approvedForIssuance,false);}});
test("additional fuels reject litres in PCI-only entry",()=>{const x=add(base(),"fuel_oil_pci",500);x.activities[0].unit="L";assert.throws(()=>calculate(x),/UNIT_MISMATCH/);});
test("additional fuels cannot override a non-applicable category",()=>{const x=add(base(),"propane_pci",500);x.sources.other_fuels="not_applicable";assert.throws(()=>calculate(x),/SOURCE_CONFLICT/);});
test("unlisted fuel exclusion suppresses complete metrics and graphics",()=>{const x=add(example(),"butane_pci",1000);x.exclusions="Combustible bois non couvert";const r=calculate(x);assert.equal(r.report.scope1.value,null);assert.equal(r.report.total.value,null);assert.equal(r.report.scopeShares,null);assert.equal(r.saleEligible,false);});
console.log("RESULT "+count+" study assertions passed; actual engine and CSV report contract, NOT production acceptance.");
