import Shell from "@/components/international/Shell";
export const dynamic = "force-dynamic";
export const metadata = { robots: { index: true, follow: true } };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell locale="en">{children}</Shell>;
}
