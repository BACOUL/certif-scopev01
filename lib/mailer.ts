import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendEmail({
  to,
  subject,
  html,
  attachments,
}: {
  to: string;
  subject: string;
  html: string;
  attachments?: {
    filename: string;
    content: Buffer;
    contentType: string;
  }[];
}) {
  return resend.emails.send({
    from: "Certif-Scope <no-reply@certif-scope.com>",
    to,
    subject,
    html,
    attachments,
  });
}
