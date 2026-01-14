import ClientLayout from "./client-layout";
import "../styles/index.css";

export const metadata = {
  title: "Certif-Scope – Instant Carbon Attestation",
  description:
    "Generate a standardized, compliant carbon footprint attestation in seconds — aligned with GHG Protocol and accepted by procurement and banking workflows.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
