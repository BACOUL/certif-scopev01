import AssessmentForm from "@/components/AssessmentForm";

export const metadata = {
  title: "Generate Attestation — Certif-Scope",
  description:
    "Generate a standardized CO₂e attestation using a spend-based methodology.",
};

export default function GeneratePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <AssessmentForm />
    </main>
  );
}
