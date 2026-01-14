"use client";

export default function ComplianceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-24">
      {children}
    </div>
  );
}
