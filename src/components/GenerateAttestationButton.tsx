"use client";

import { useRouter } from "next/navigation";

export default function GenerateAttestationButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/generate")}
      className="bg-[#0B3A63] hover:bg-[#092f50] text-white font-semibold px-10 py-3 rounded-xl transition mt-auto"
    >
      Generate attestation
    </button>
  );
}
