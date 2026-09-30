const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const model = { exports: {} };
vm.runInNewContext(ts.transpileModule(fs.readFileSync('src/lib/indicative-model.ts', 'utf8'), {compilerOptions: {module: ts.ModuleKind.CommonJS}}).outputText, model);
const {parseExpense, EMISSION_FACTORS} = model.exports;
for (const [input, expected] of [['1 234,56', 1234.56], ['1\u202f234,56', 1234.56], ['0', 0], ['89.50', 89.5]]) assert.equal(parseExpense(input), expected);
for (const input of ['-1', 'NaN', 'Infinity', '1e3', '89,123', '12,3,4', 'abc']) assert.ok(Number.isNaN(parseExpense(input)), input);
assert.equal(1000 * EMISSION_FACTORS.it / 1000, 0.3);
assert.equal(Object.values(EMISSION_FACTORS).reduce((a,b) => a+b,0).toFixed(2), '1.92');
const source = fs.readFileSync('src/components/Common/ScrollUp.tsx', 'utf8');
for (const result of [undefined, Promise.resolve()]) {
 let cleanup;
 const context = { exports: {}, require: () => ({useEffect: callback => {cleanup = callback();}}), window: {document: {scrollingElement: {scrollTo: () => result}}}};
 vm.runInNewContext(ts.transpileModule(source, {compilerOptions: {module: ts.ModuleKind.CommonJS}}).outputText, context);
 context.exports.default();
 assert.equal(cleanup, undefined, 'ScrollUp must never return a scrolling Promise as React cleanup');
}
console.log('Regression checks passed: French amounts, unchanged factors, React navigation cleanup.');
