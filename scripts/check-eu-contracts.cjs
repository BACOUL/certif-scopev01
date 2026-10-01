// Offline contracts: no Stripe payment, PDFShift credit, email or customer key used.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const {
  load,
  metadata,
  testEnv,
  captured,
  setPaid,
  setEvent,
} = require("./check-multilingual.cjs");
const { EU_LOCALES } = load("src/lib/eu-locales-core.ts");
const { EU_NON_CORE_LOCALES, getEuFlowCopy } = load("src/lib/eu-flow/index.ts");
const { paths } = load("src/lib/site-locales.ts");
const checkout = load("src/app/api/checkout/route.ts");
const issue = load("src/app/api/attestation/issue/route.ts");
const euIssue = load("src/app/api/attestation/eu/route.ts");
const request = (body) =>
  new Request("https://example.test/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
function strings(value) {
  if (typeof value === "string") return [value];
  return Object.values(value).flatMap(strings);
}
(async () => {
  testEnv.KEY_SECRET = "offline-test-only";
  for (const ui of EU_LOCALES)
    for (const doc of EU_LOCALES) {
      const res = await checkout.POST(
        request({ ...metadata, siteLocale: ui, attestationLocale: doc }),
      );
      assert.equal(res.status, 200, `${ui}/${doc}`);
      const session = captured().checkout;
      assert.equal(session.metadata.attestationLocale, doc);
      assert.equal(session.metadata.siteLocale, ui);
      assert.equal(session.locale, ui === "ga" ? "en" : ui);
      assert.equal(
        session.success_url,
        `https://www.certif-scope.com${paths[ui]?.success || `/${ui}/success/`}?session_id={CHECKOUT_SESSION_ID}`,
      );
      assert.equal(
        session.cancel_url,
        `https://www.certif-scope.com${paths[ui]?.generate || `/${ui}/generate/`}`,
      );
    }
  for (const locale of EU_NON_CORE_LOCALES) {
    const c = getEuFlowCopy(locale);
    assert.ok(strings(c).every((value) => value.trim().length));
    assert.equal(c.steps.length, 3);
    assert.equal(c.categories.length, 7);
    metadata.attestationLocale = locale;
    metadata.companySector = c.sectors.professional_services;
    for (const endpoint of [issue, euIssue]) {
      const res = await endpoint.GET(
        new Request(
          "https://example.test/api/attestation/issue?session_id=cs_mock",
        ),
      );
      assert.equal(res.status, 200, locale);
      assert.equal(res.headers.get("Content-Type"), "application/pdf");
      assert.ok(captured().html.includes(`<html lang="${locale}">`));
      assert.ok(captured().html.includes(c.pdf.title));
      assert.ok(captured().html.includes("Example &lt;Company&gt;"));
      assert.ok(
        captured().qr.startsWith(
          `https://www.certif-scope.com/${locale}/verify/?v=`,
        ),
      );
    }
    fs.writeFileSync(
      `/tmp/certif-scope-issued-${locale}.html`,
      captured().html,
    );
    setPaid(false);
    assert.equal(
      (
        await euIssue.GET(
          new Request(
            "https://example.test/api/attestation/eu?session_id=cs_mock",
          ),
        )
      ).status,
      403,
    );
    setPaid(true);
  }
  const { authorizeKeyDownload } = load("src/lib/key-download.ts");
  metadata.attestationLocale = "es";
  const params = new URLSearchParams({
    ...metadata,
    session_id: "key_offline",
  });
  for (const endpoint of [issue, euIssue]) {
    assert.equal(
      (await endpoint.GET(new Request(`https://example.test/pdf?${params}`)))
        .status,
      403,
    );
  }
  authorizeKeyDownload(params);
  for (const endpoint of [issue, euIssue]) {
    assert.equal(
      (await endpoint.GET(new Request(`https://example.test/pdf?${params}`)))
        .status,
      200,
    );
  }
  params.set("companyName", "Tampered");
  assert.equal(
    (await euIssue.GET(new Request(`https://example.test/pdf?${params}`)))
      .status,
    403,
  );
  params.set("companyName", metadata.companyName);
  params.set("expires", "1");
  assert.equal(
    (await euIssue.GET(new Request(`https://example.test/pdf?${params}`)))
      .status,
    403,
  );
  metadata.attestationLocale = "fr";
  assert.equal(
    (
      await issue.GET(
        new Request("https://example.test/pdf?session_id=key_forged"),
      )
    ).status,
    403,
  );
  Object.assign(testEnv, {
    STRIPE_WEBHOOK_SECRET: "mock",
    RESEND_API_KEY: "mock",
    CLOUDFLARE_ACCOUNT_ID: "mock",
    CF_KV_NAMESPACE_ID: "mock",
    CLOUDFLARE_API_TOKEN: "mock",
  });
  const webhook = load("src/app/api/stripe/webhook/route.ts");
  for (const locale of EU_LOCALES) {
    setEvent({
      type: "checkout.session.completed",
      data: {
        object: {
          id: `cs_offline_${locale}`,
          customer_details: { email: "offline@example.test" },
          metadata: {
            ...metadata,
            product: "certif-scope-attestation",
            attestationLocale: locale,
          },
        },
      },
    });
    const res = await webhook.POST(
      new Request("https://example.test/api/stripe/webhook", {
        method: "POST",
        headers: {
          "stripe-signature": "mock",
          "x-forwarded-proto": "https",
          host: "example.test",
        },
        body: "offline",
      }),
    );
    assert.equal(res.status, 200, `webhook ${locale}`);
    assert.equal(captured().mail.to, "offline@example.test");
    assert.ok(
      captured().mail.attachments[0].filename.endsWith(`-${locale}.pdf`),
    );
    assert.ok(
      captured().pdfUrl.includes(
        EU_NON_CORE_LOCALES.includes(locale)
          ? "/attestation/eu?"
          : "/attestation/issue?",
      ),
    );
    if (EU_NON_CORE_LOCALES.includes(locale))
      assert.ok(
        captured().mail.html.includes(getEuFlowCopy(locale).success.ready),
      );
  }
  console.log(
    "PASS: 576 UI/PDF combinations, 21 translated PDF contracts, 24 localized email/webhook contracts; unpaid and forged/altered/expired key downloads rejected.",
  );
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
