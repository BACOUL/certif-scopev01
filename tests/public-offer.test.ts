import { test } from "node:test";
import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";
import Offers from "../src/components/Offers";
import Regulatory from "../src/components/Regulatory";
import { POST as spendCheckout } from "../src/app/api/spend/checkout/route";

test("public offer: exactly one supplier carbon product promoted in FR, EN and DE", () => {
 for (const locale of ["fr","en","de"] as const) {
  const markup = renderToStaticMarkup(Offers({ locale }));
  assert.ok(markup.includes(`/${locale}/generate`));
  assert.ok(markup.includes(`/api/sample?locale=${locale}`));
  assert.ok(markup.includes("2026/1560"));
  assert.ok(markup.includes("B3"));
  assert.equal(markup.includes(`/${locale}/spend`), false);
  assert.equal(markup.includes("spend-based"), false);
 }
});

test("legacy spend checkout: no new purchases including when test checkout flag is enabled", async () => {
 const oldFlag=process.env.CARBON_TEST_CHECKOUT;
 try {
  for (const value of [undefined,"true"]) {
   if (value) process.env.CARBON_TEST_CHECKOUT=value;
   else delete process.env.CARBON_TEST_CHECKOUT;
   const result=await spendCheckout();
   assert.equal(result.status,410);
   assert.equal((await result.json()).error,"LEGACY_PRODUCT_NOT_FOR_SALE");
  }
 } finally {
  if (oldFlag===undefined) delete process.env.CARBON_TEST_CHECKOUT;
  else process.env.CARBON_TEST_CHECKOUT=oldFlag;
 }
});

test("regulatory copy includes current EU 2026/470, 2026/1560 B3 and limits in all supported locales", () => {
 for (const locale of ["fr","en","de"] as const) {
  const markup = renderToStaticMarkup(Regulatory({ locale }));
  assert.match(markup, /2026\/470/);
  assert.match(markup, /2026\/1560/);
  assert.match(markup, /450/);
  assert.match(markup, /1[ .\u00a0]?000/);
  assert.match(markup, /B3/);
  assert.match(markup, /2027/);
 }
});
