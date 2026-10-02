import Link from "next/link";
import { paths } from "@/lib/site-locales";

// English presentation of the existing French service information.
// No new commercial terms or provider commitments are introduced here.
const policies = {
  legal: {
    title: "Legal notice",
    sections: [
      [
        "1. Publisher",
        "The website is operated by Jeason Alexandre Bacoul, trading as TimeProofs, a sole proprietor established in France. SIREN: 999356439. Address: 3 rue de l’Église de Louppy, 55000 Les Hauts-de-Chée, France. VAT exemption regime: VAT not applicable. Contact: contact@certif-scope.com.",
      ],
      [
        "2. Publication manager",
        "Jeason Alexandre Bacoul is the publication manager and legal representative. Contact: contact@certif-scope.com.",
      ],
      [
        "3. Hosting",
        "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States.",
      ],
      [
        "4. Intellectual property",
        "Website texts, structure, design, visual identity and code are protected by applicable intellectual property rules. Reproduction, modification or redistribution requires prior written permission.",
      ],
      [
        "5. Scope and responsibility",
        "Certif-Scope provides deterministic indicative estimates based on user-declared expenditure. The document is not an audit, certification, regulatory emissions inventory or CSRD/ESRS report. Users are responsible for the accuracy of their declarations and the context in which the document is shared. Acceptance by a third party is not guaranteed.",
      ],
      [
        "6. Data processing",
        "Detailed expenditure is calculated in the browser and is not retained in a Certif-Scope database. Aggregate results and document identification data are processed to generate the PDF. Payment records and access-key state are separate technical processes. No user account or recoverable PDF archive is offered.",
      ],
      [
        "7. Reports and support",
        "To report misuse, unlawful content or a technical issue, contact contact@certif-scope.com.",
      ],
    ],
  },
  privacy: {
    title: "Privacy policy",
    sections: [
      [
        "1. Controller and purpose",
        "The service operator is Jeason Alexandre Bacoul, TimeProofs, at the address stated in the legal notice. Data are processed to calculate and issue the requested document, handle payment, deliver access keys or transactional emails, provide support and prevent misuse.",
      ],
      [
        "2. Data you provide",
        "You may provide a company name, optional organisation identifier, country, activity sector, reference year, document language, expenditure and an email address for payment or support. Support messages may contain information you voluntarily submit. Do not include sensitive personal data or unnecessary confidential financial information.",
      ],
      [
        "3. Expenditure calculation and PDF generation",
        "Detailed expenditure is processed locally in your browser. Only the aggregate CO₂e result and information necessary to produce the document are submitted to the service. Detailed expenditure breakdowns are not stored in a Certif-Scope database. PDF generation may transmit document data to PDFShift.",
      ],
      [
        "4. Technical storage and retention",
        "Certif-Scope does not retain a recoverable copy of issued PDFs; save your document immediately. Support emails may be retained for up to twelve months for operational support. Access-key and pack-credit state is stored to manage expiry and consumption. Stripe processes payment and invoice records. When using an access key, the browser’s session storage may hold the aggregate document payload for the current session.",
      ],
      [
        "5. Service providers",
        "Technical services include Vercel for hosting, Stripe for payments, Resend for transactional email, Cloudflare KV for access-key and pack-credit state, and PDFShift for PDF conversion. Certif-Scope does not store payment-card data. These providers receive the data needed for their respective technical operations.",
      ],
      [
        "6. Cookies and attribution",
        "When a visit includes a campaign reference, the certif_scope_ref cookie can retain that reference for up to thirty days to attribute a purchase to its originating campaign. The cookie does not contain detailed expenditure. The service does not use advertising pixels or cross-site behavioural profiling. See the cookie page for browser controls.",
      ],
      [
        "7. Your requests",
        "For access, correction, deletion, restriction or a question about your data, contact contact@certif-scope.com. Requests are assessed in light of applicable obligations, including payment and accounting records. You may contact the competent data protection authority with a complaint.",
      ],
      [
        "8. Updates",
        "This policy may be updated when the service changes. The current version is published on this page.",
      ],
    ],
  },
  terms: {
    title: "Terms of use",
    sections: [
      [
        "1. Purpose",
        "These terms govern use of Certif-Scope and issuance of indicative CO₂e attestations calculated from annual user-declared expenditure in euros using a spend-based method. By generating a document, the user acknowledges these terms.",
      ],
      [
        "2. Service",
        "The service produces a downloadable standardised PDF with an aggregate indicative result, document ID, issue date, reference year, method and factor version, a QR code and signature elements. It is not certification, an audit, a regulatory inventory or a CSRD/ESRS report. The displayed twelve-month period is a documentary convention and does not guarantee third-party acceptance.",
      ],
      [
        "3. Price and payment",
        "The applicable price is the price shown at purchase: €89 per single document, with no subscription, or the selected pack price. Stripe processes payment. VAT is not applicable under the issuer’s French VAT exemption regime.",
      ],
      [
        "4. Delivery",
        "After payment confirmation, the document is made available as a downloadable PDF. Pack access keys are delivered by email. Each key creates one document and must be used within 365 days of creation. Use of a key consumes one credit; credits are non-refundable and non-transferable.",
      ],
      [
        "5. Reissue and lost documents",
        "Certif-Scope keeps no recoverable PDF archive. You are responsible for saving your file. For an input error, failed download or lost document, contact support with the order reference before buying again. Reissue may be granted after review and is not automatically included; conditions and any payment are confirmed before a new order.",
      ],
      [
        "6. Withdrawal",
        "Withdrawal does not apply to fully performed digital services, subject to applicable mandatory statutory rights.",
      ],
      [
        "7. User responsibilities",
        "You are responsible for the accuracy of submitted data and use of the document. Do not use the document for misleading marketing claims, regulatory reporting, certification or an audit. Confirm acceptance of the expenditure-based method and scope with the recipient before ordering.",
      ],
      [
        "8. Responsibility",
        "The operator does not guarantee third-party acceptance and is not responsible for use or interpretation outside the stated indicative scope, subject to applicable mandatory rules.",
      ],
      [
        "9. Intellectual property",
        "Document structures, content and design are protected. Reproduction, modification or redistribution of those elements requires prior authorisation. Sharing your issued PDF with recipients for the same company, year and data is part of its intended use.",
      ],
      [
        "10. Personal data",
        "Data processing is described in the privacy policy. Detailed expenditure is calculated in the browser and is not retained as a financial breakdown.",
      ],
      [
        "11. Updates",
        "The current terms are published on the website and may be updated when the service changes.",
      ],
      [
        "12. Applicable law",
        "These terms are governed by French law. Disputes fall within the jurisdiction of the competent French courts, subject to applicable mandatory rights.",
      ],
      [
        "13. Contact",
        "For contractual questions, contact contact@certif-scope.com.",
      ],
    ],
  },
  cookies: {
    title: "Cookies and browser storage",
    sections: [
      [
        "1. Purpose",
        "Browser storage supports navigation, payment return and access-key workflows. The service does not use advertising pixels or cross-site behavioural profiling.",
      ],
      [
        "2. Campaign reference",
        "When the entry URL includes a campaign reference, certif_scope_ref may store that reference for up to thirty days. It is an HTTP-only cookie, sent over HTTPS, used to attribute a purchase to its originating campaign. It does not contain detailed expenditure.",
      ],
      [
        "3. Session storage",
        "When generating with an access key, the current browser session may store the aggregate document payload. This includes the company information shown on the document and the aggregate CO₂e result, not the seven-category expenditure breakdown.",
      ],
      [
        "4. Third-party services",
        "Stripe manages payment on its own infrastructure. Vercel, Resend, Cloudflare KV and PDFShift support hosting, emails, credit state and PDF conversion. Their technical processing is described on the data-processing page.",
      ],
      [
        "5. Browser controls",
        "You can inspect, delete or block cookies and browser storage in your browser settings. Blocking technical storage can affect payment-return or access-key workflows.",
      ],
      [
        "6. Contact and updates",
        "Questions: contact@certif-scope.com. Updates are published on this page.",
      ],
    ],
  },
  data: {
    title: "Data processing",
    sections: [
      [
        "1. Processing sequence",
        "User input → expenditure calculation in the browser → submission of the aggregate result and document identification data → technical PDF generation → download by the user. Signature and QR data are included in the document.",
      ],
      [
        "2. Data categories",
        "Company information, optional organisation identifier, reference year, country, document language, aggregate CO₂e result, technical document metadata, contact email, payment reference, access-key credit state and minimal technical logs for security or troubleshooting.",
      ],
      [
        "3. Storage",
        "Detailed expenditure is not kept in a Certif-Scope database. No recoverable PDF copy is retained. Support exchanges may be retained up to twelve months. Access-key and credit state is stored separately to manage expiry and consumption. Payment and invoicing records are processed by Stripe.",
      ],
      [
        "4. Technical providers",
        "Vercel: hosting and deployment. Stripe: payment and invoices. Resend: transactional and support emails. Cloudflare KV: access-key and credit state. PDFShift: PDF conversion using the data necessary to produce the requested document.",
      ],
      [
        "5. Responsibilities",
        "The operator manages the service’s necessary processing. Users remain responsible for the accuracy and lawful submission of their information. Reading documentary data does not establish the accuracy of declared expenditure or emissions.",
      ],
      [
        "6. Informational document",
        "This page describes the service’s processing. It is not a data-processing agreement and does not modify separate contractual obligations.",
      ],
      [
        "7. Contact",
        "Questions about processing or privacy: contact@certif-scope.com.",
      ],
    ],
  },
};
export type PolicyKey = keyof typeof policies;
export function policyTitle(key: PolicyKey) {
  return policies[key].title;
}
export default function Policy({ page }: { page: PolicyKey }) {
  const c = policies[page];
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-extrabold text-[#0B3A63] md:text-4xl">
          {c.title}
        </h1>
        <div className="mt-8 space-y-8">
          {c.sections.map(([title, text]) => (
            <section key={title}>
              <h2 className="text-xl font-bold text-[#0B3A63]">{title}</h2>
              <p className="mt-3 leading-relaxed text-[#475569]">{text}</p>
            </section>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-5">
          <Link
            className="font-semibold text-[#0B3A63] underline"
            href={paths.en.contact}
          >
            Contact
          </Link>
          <Link
            className="font-semibold text-[#0B3A63] underline"
            href={paths.en.privacy}
          >
            Privacy
          </Link>
          <Link
            className="font-semibold text-[#0B3A63] underline"
            href={paths.en.terms}
          >
            Terms of use
          </Link>
        </div>
      </div>
    </section>
  );
}
