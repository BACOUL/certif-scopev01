"use client";

export default function GeneratePage() {
  async function handleGenerate() {
    const payload = {
      companyName: "Demo company",
      sector: "Consulting",
      country: "France",
      period: "2024",
      scope1: 0,
      scope2: 0,
      scope3: 0,
      total: 12.34
    };

    const res = await fetch("/api/create-attestation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (!res.ok) {
      alert("Generation error");
      return;
    }

    const link = document.createElement("a");
    link.href = "data:application/pdf;base64," + data.pdfBase64;
    link.download = "certif-scope-attestation.pdf";
    link.click();
  }

  return (
    <main className="max-w-xl mx-auto py-24 text-center">
      <h1 className="text-2xl font-bold mb-6">
        Generate your CO₂e attestation
      </h1>

      <button
        onClick={handleGenerate}
        className="bg-[#1FB6C1] text-white px-8 py-4 rounded-xl font-semibold"
      >
        Generate attestation
      </button>
    </main>
  );
}
