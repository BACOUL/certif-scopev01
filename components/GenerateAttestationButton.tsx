"use client";

export default function GenerateAttestationButton() {
  const handleClick = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CERTIF_SCOPE_PDF_URL}/api/attestation`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: "Demo Company",
          sector: "Consulting",
          country: "France",
          period: "2024",
          scope1: 10,
          scope2: 5,
          scope3: 20,
          total: 35
        })
      }
    );

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
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#1FB6C1] hover:bg-[#17a2a8] text-white font-semibold px-10 py-3 rounded-xl shadow-md transition mt-auto"
    >
      Generate Attestation
    </button>
  );
}
