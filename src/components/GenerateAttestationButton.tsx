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
          scope1: 10,
          scope2: 5,
          scope3: 20,
          total: 35,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        alert("API error");
        console.error(text);
        return;
      }

      const data = await res.json();

      const pdfUrl = data?.pdfUrl;

      if (!pdfUrl) {
        alert("No PDF URL returned");
        console.error(data);
        return;
      }

      window.open(pdfUrl, "_blank");
    } catch (err: any) {
      alert("JS error: " + err.message);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#1FB6C1] hover:bg-[#17a2a8] text-white font-semibold px-10 py-3 rounded-xl shadow-md transition"
    >
      Generate Attestation
    </button>
  );
}
