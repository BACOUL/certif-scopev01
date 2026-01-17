"use client";

export default function GenerateAttestationButton() {
  const handleClick = async () => {
    try {
      const res = await fetch("/api/create-attestation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: "Demo Company",
          sector: "Consulting",
          country: "France",
          period: "2024",
          total: 35,
        }),
      });

      const data = await res.json();

      if (!data?.pdfBase64) {
        alert("PDF generation failed");
        return;
      }

      const bytes = Uint8Array.from(atob(data.pdfBase64), c =>
        c.charCodeAt(0)
      );

      const blob = new Blob([bytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");

    } catch (e: any) {
      alert("ERROR: " + e.message);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#1FB6C1] text-white px-10 py-3 rounded-xl font-semibold"
    >
      Generate Attestation
    </button>
  );
}
