// lib/keys/generateKey.ts
import crypto from "crypto";

export function generateAttestationKey(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // sans ambiguïtés
  const block = () =>
    Array.from({ length: 4 })
      .map(() => chars[Math.floor(Math.random() * chars.length)])
      .join("");

  return `CS-${block()}-${block()}-${block()}`;
}
