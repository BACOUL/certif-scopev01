"use client";

export default function GenerateAttestationButton() {
  const handleClick = async () => {
    try {
      const res = await fetch("/api/generate-attestation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: "Demo Company",
          sector: "Services",
          country: "France",
          period: "2024",
          scope1: 0,
          scope2: 12.5,
          scope3: 8.2,
          total: 20.7
        }),
      });

      if (!res.ok) {
        alert("PDF generation failed");
        return;
      }

      const data = await res.json();

      // téléchargement du PDF
      const link = document.createElement("a");
      link.href = `data:application/pdf;base64,${data.pdfBase64}`;
      link.download = `certif-scope-${data.id}.pdf`;
      link.click();
    } catch (err) {
      alert("Unexpected error");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#1FB6C1] hover:bg-[#17a2a8] text-white font-semibold px-10 py-3 rounded-xl shadow-md text-center transition mt-auto"
    >
      Generate Attestation
    </button>
  );
}
