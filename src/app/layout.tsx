import ClientLayout from "./client-layout";
import "../styles/index.css";

export const metadata = {
  title: "Certif-Scope — Instant CO₂e Attestation for SMEs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
