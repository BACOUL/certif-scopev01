import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

type SendEmailParams = {
  to: string;
  subject: string;
  html: string;
  attachments?: {
    filename: string;
    content: string; // ✅ BASE64
    contentType: string;
  }[];
};

export async function sendEmail({
  to,
  subject,
  html,
  attachments,
}: SendEmailParams) {
  return resend.emails.send({
    from: "Certif-Scope <no-reply@certif-scope.com>",
    replyTo: "contact@certif-scope.com",
    to,
    subject,
    html,
    attachments,
  });
}
