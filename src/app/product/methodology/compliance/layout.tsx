"use client";

export default function ComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="compliance-layout"
      className="max-w-7xl mx-auto w-full px-6 pt-12 pb-24"
    >
      {children}
    </div>
  );
}
