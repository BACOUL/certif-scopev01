"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRANDING */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Certif-Scope
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Instant certified CO₂ attestation for SMEs.  
              Simple, verifiable and compliant with procurement and banking workflows.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Product
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><Link href="/product" className="hover:text-[#1FB6C1]">Overview</Link></li>
              <li><Link href="/product/methodology" className="hover:text-[#1FB6C1]">Methodology</Link></li>
              <li><Link href="/product/regulations" className="hover:text-[#1FB6C1]">Regulations</Link></li>
              <li><Link href="/pricing" className="hover:text-[#1FB6C1]">Pricing</Link></li>
              <li><Link href="/verify" className="hover:text-[#1FB6C1]">Verify Attestation</Link></li>
            </ul>
          </div>

          {/* DOCUMENTATION */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Documentation
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><Link href="/sample-pdf" className="hover:text-[#1FB6C1]">Sample PDF</Link></li>
              <li><Link href="/api" className="hover:text-[#1FB6C1]">API Reference</Link></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Legal
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><Link href="/legal" className="hover:text-[#1FB6C1]">Legal Notice</Link></li>
              <li><Link href="/privacy" className="hover:text-[#1FB6C1]">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#1FB6C1]">Terms & Conditions</Link></li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Certif-Scope. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
