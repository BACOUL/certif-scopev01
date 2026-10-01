import { FR_HOME_COPY, type HomeContent } from "./home-content-fr";
import { internationalCopy } from "./international-copy";
import { paths } from "./site-locales";
import { EU_HOME_COPY, type EuHomeLocale } from "./eu-home-locales";
import { getEuFlowCopy } from "./eu-flow";
import { getEuAttestationCopy } from "./attestation-i18n/eu";
import { HOME_UI, PERSONALIZED_PDF } from "./home-ui";

export function getHomeContent(locale: EuHomeLocale): HomeContent {
  if (locale === "fr") return FR_HOME_COPY;
  if (locale === "en" || locale === "de") {
    const c = internationalCopy[locale];
    const p = paths[locale];
    const en = locale === "en";
    const faq = c.faq.map(([q, a]) => ({ q, a }));
    faq.splice(
      2,
      0,
      {
        q: en ? "What do I receive for 89 €?" : "Was erhalte ich für 89 €?",
        a: `${c.included.join(". ")}. ${c.priceDetail}. ${c.support} ${c.notIncluded}`,
      },
      {
        q: en
          ? "Which method and coefficients are used?"
          : "Welche Methode und Koeffizienten werden verwendet?",
        a: c.methodSections[1][1] + " " + c.methodSections[2][1],
      },
    );
    return {
      locale,
      image: `/attestation-example-${locale}.webp`,
      sampleAlt: c.sampleAlt,
      links: {
        ...p,
        sample: `/api/sample?lang=${locale}`,
        packs: `${p.pricing}#packs`,
        guide: p.methodology,
      },
      alternativeHeadline: c.heroSecond,
      hero: c.hero,
      heroSecond: c.heroSecond,
      description: c.description,
      generate: c.generate,
      sample: c.sample,
      badges: [...c.badges],
      decisionEyebrow: en ? "Quick decision" : "Schnelle Entscheidung",
      suited: c.suited,
      suitedIntro: c.suitedIntro,
      confirm: c.confirm,
      suitable: [...c.suitable],
      unsuitable: c.unsuitable,
      exclusions: [...c.exclusions],
      contents: c.contents,
      featuresEyebrow: c.nav.product,
      featuresIntro: c.productIntro,
      features: c.features.map(([title, text], i) => ({
        id: `0${i + 1}`,
        title,
        text,
      })),
      clarification: en ? "Important clarification" : "Wichtige Klarstellung",
      limits: c.limits,
      ready: en
        ? "A document ready to send."
        : "Ein Dokument, bereit zum Versenden.",
      methodologyLink: c.nav.methodology,
      stepsTitle: c.stepsTitle,
      steps: c.steps.map(([title, text], i) => ({
        id: `0${i + 1}`,
        title,
        text,
      })),
      prepare: c.nav.generate,
      doubt: c.doubt,
      doubtText: c.doubtText,
      contact: c.nav.contact,
      calculation: c.nav.methodology,
      priceTitle: c.priceTitle,
      priceDetail: c.priceDetail,
      prepareDocument: c.nav.generate,
      packsLink: c.packsTitle,
      includedTitle: c.includedTitle,
      included: [...c.included],
      reuse: c.reuse,
      support: c.support,
      notIncluded: c.notIncluded,
      contactLink: c.nav.contact,
      faq,
      faqEyebrow: en
        ? "Before and after your order"
        : "Vor und nach Ihrer Bestellung",
      faqTitle: c.faqTitle,
      faqIntro: en
        ? "Data to prepare, document contents, packs and support: information to help you order and receive your PDF."
        : "Daten, Dokumentinhalt, Pakete und Unterstützung: Informationen für Ihre Bestellung und den Erhalt Ihres PDFs.",
      guideLink: en ? "Read the methodology →" : "Methodik lesen →",
      faqLimits: c.limits,
      finalEyebrow: en
        ? "Quick response — standardised format"
        : "Schnelle Antwort — standardisiertes Format",
      finalTitle: c.heroSecond,
      finalIntro: c.productIntro,
      finalGenerate: `${c.nav.generate} →`,
      pricingLink: c.nav.pricing,
      finalGuide: en ? "Read the methodology →" : "Methodik lesen →",
      scopeTitle: c.nav.compliance,
      scopeItems: [
        c.methodIntro,
        c.features[0][0],
        c.badges[2],
        c.exclusions[0],
        c.exclusions[4],
      ],
      verifyLink: `${c.nav.verify} →`,
      privacyLink: `${c.nav.privacy} →`,
      backTop: en ? "Back to top" : "Nach oben",
    };
  }
  const c = EU_HOME_COPY[locale];
  const flow = getEuFlowCopy(locale);
  const pdf = getEuAttestationCopy(locale);
  const ui = HOME_UI[locale];
  const [
    decisionEyebrow,
    confirm,
    unsuitable,
    clarification,
    ready,
    methodologyLink,
    priceTitle,
    priceDetail,
    includedTitle,
    packsLink,
    faqTitle,
    faqIntro,
    doubt,
    contact,
    calculation,
    pricingLink,
    guideLink,
    scopeTitle,
    privacyLink,
    backTop,
    ,
    ,
    ...badgesAndEyebrow
  ] = ui.labels;
  const badges = badgesAndEyebrow.slice(0, 5);
  const faqEyebrow = badgesAndEyebrow[5];
  const features = [
    { id: "01", title: c.contents[0], text: pdf.resultSubline },
    { id: "02", title: c.contents[2], text: pdf.methodologyText },
    {
      id: "03",
      title: c.contents[1],
      text: pdf.quickCheckItems.slice(0, 3).join(" · "),
    },
    { id: "04", title: c.contents[3], text: pdf.verificationSimpleText },
  ];
  const included = [
    PERSONALIZED_PDF[locale],
    c.contents[0],
    c.contents[1],
    c.contents[2],
    c.contents[3],
  ];
  const answers = [
    `${c.fitText} ${c.limitText}`,
    `${flow.expenseIntro} ${flow.categories.join(" · ")}. ${flow.accepted}`,
    `${included.join(". ")}. ${priceDetail}. ${ui.support}`,
    `${pdf.methodologyText} ${pdf.formulaText} ${pdf.normativeText}`,
    ui.reuse,
    ui.packs,
    ui.correction,
    ui.download,
    `${pdf.verificationSimpleText} ${pdf.verifiableObjectText} ${flow.pdf.responsibilityText}`,
  ];
  // No French fallback: every visible field is supplied in this language.
  return {
    locale,
    image: `/attestation-example-${locale}.webp`,
    sampleAlt: `${c.contentsTitle} — ${c.sample}`,
    links: {
      generate: `/${locale}/generate/`,
      sample: `/api/attestation/eu-sample?lang=${locale}`,
      methodology: "/en/product/methodology/",
      contact: "/en/contact/",
      packs: "/en/pricing/#packs",
      pricing: `/${locale}/#pricing`,
      guide: "/en/product/methodology/",
      verify: `/${locale}/verify/`,
      privacy: "/en/privacy/",
    },
    alternativeHeadline: c.description,
    hero: c.hero.split(/(?<=[?？;])\s/)[0],
    heroSecond: c.hero
      .split(/(?<=[?？;])\s/)
      .slice(1)
      .join(" "),
    description: c.intro,
    generate: c.cta,
    sample: c.sample,
    badges,
    decisionEyebrow,
    suited: c.fitTitle,
    suitedIntro: c.fitText,
    confirm,
    suitable: ui.suitable,
    unsuitable,
    exclusions: ui.exclusions,
    contents: c.contentsTitle,
    featuresEyebrow: flow.pdf.title,
    featuresIntro: flow.pdf.useText,
    features,
    clarification,
    limits: c.limitText,
    ready,
    methodologyLink,
    stepsTitle: c.stepsTitle,
    steps: c.steps.map((text, i) => ({
      id: `0${i + 1}`,
      title: [flow.steps[0], flow.review, flow.success.download][i],
      text,
    })),
    prepare: flow.success.another,
    doubt,
    doubtText: `${c.fitText} ${flow.pdf.responsibilityText}`,
    contact,
    calculation,
    priceTitle,
    priceDetail,
    includedTitle,
    included,
    reuse: ui.reuse,
    support: ui.support,
    notIncluded: c.limitText,
    contactLink: contact,
    prepareDocument: c.cta,
    packsLink,
    faq: ui.questions.map((q, i) => ({ q, a: answers[i] })),
    faqEyebrow,
    faqTitle,
    faqIntro,
    guideLink: `${methodologyLink} →`,
    faqLimits: `${c.limitText} ${flow.pdf.responsibilityText}`,
    finalEyebrow: c.tagline,
    finalTitle: c.hero,
    finalIntro: pdf.intendedUseText,
    finalGenerate: `${ui.labels[21]} →`,
    pricingLink,
    finalGuide: `${methodologyLink} →`,
    scopeTitle,
    scopeItems: [
      flow.indicative,
      c.contents[0],
      flow.pdf.subtitle,
      ui.exclusions[0],
      ui.exclusions[4],
    ],
    verifyLink: `${flow.verify.title} →`,
    privacyLink,
    backTop,
  };
}

import { FR_HOME_NAV, type HomeNavigation } from "./home-navigation";
import { HOME_LEGAL_LABELS } from "./home-ui";
export function getHomeNavigation(
  locale: EuHomeLocale,
  copy = getHomeContent(locale),
): HomeNavigation {
  if (locale === "fr") return FR_HOME_NAV;
  const core = locale === "en" || locale === "de";
  const c = core ? internationalCopy[locale] : undefined;
  const p = core ? paths[locale] : paths.en;
  const extra = core
    ? locale === "en"
      ? [
          c!.nav.legal,
          c!.nav.terms,
          c!.nav.cookies,
          c!.nav.data,
          "Partnerships",
          "Quick links",
          "Use cases",
          "Guides",
          "Company & legal",
          "Information",
          "All rights reserved.",
          "Navigation menu",
        ]
      : [
          c!.nav.legal,
          c!.nav.terms,
          c!.nav.cookies,
          c!.nav.data,
          "Partnerschaften",
          "Schnellzugriff",
          "Anwendungsfälle",
          "Leitfäden",
          "Unternehmen & Recht",
          "Informationen",
          "Alle Rechte vorbehalten.",
          "Navigationsmenü",
        ]
    : HOME_LEGAL_LABELS[locale];
  const [
    legal,
    terms,
    cookies,
    data,
    partners,
    quick,
    cases,
    guides,
    company,
    information,
    rights,
    menu,
  ] = extra;
  return {
    routes: {
      ...p,
      home: `/${locale}/`,
      generate: copy.links.generate,
      verify: copy.links.verify,
      product: core ? p.product : `/${locale}/#features`,
      pricing: copy.links.pricing,
      compliance: core ? p.compliance : `/${locale}/#cas-adaptes`,
      pillarBilanCarbonePME: copy.links.guide,
      partners: p.contact,
      tender: core ? p.compliance : `/${locale}/#cas-adaptes`,
      why: core ? p.product : `/${locale}/#features`,
      tenderExample: copy.links.sample,
    },
    labels: {
      home: c?.nav.home ?? HOME_UI[locale as keyof typeof HOME_UI].labels[20],
      guide: copy.guideLink.replace(/\s*→$/, ""),
      product:
        c?.nav.product ??
        getEuFlowCopy(locale as keyof typeof HOME_UI).pdf.title,
      presentation: c?.nav.product ?? copy.contents,
      methodology: c?.nav.methodology ?? copy.calculation,
      compliance: c?.nav.compliance ?? copy.scopeTitle,
      privacy: copy.privacyLink.replace(/\s*→$/, ""),
      verify: c?.nav.verify ?? copy.verifyLink.replace(/\s*→$/, ""),
      pricing: c?.nav.pricing ?? copy.pricingLink,
      generate:
        c?.nav.generate ?? HOME_UI[locale as keyof typeof HOME_UI].labels[21],
      contact: copy.contact,
      legal,
      terms,
      cookies,
      data,
      partners,
      quick,
      cases,
      guides,
      company,
      information,
      rights,
      menu,
    },
  };
}
