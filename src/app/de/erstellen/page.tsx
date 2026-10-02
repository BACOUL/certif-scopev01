import AssessmentForm from "@/components/international/AssessmentForm";
import { pageMetadata } from "@/lib/site-locales";
import { formCopy } from "@/lib/form-copy";
export const metadata = pageMetadata("de", "generate", formCopy.de.title, formCopy.de.intro);
export default function Page() { return <AssessmentForm locale="de"/>; }
