"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white pt-14 pb-10 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Column 1 – Branding */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Certif-Scope
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Instant certified CO₂ attestation for SMEs.  
              Simple, verifiable and compliant.
            </p>
          </div>

          {/* Column 2 – Product */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Product
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><Link href="/product" className="hover:text-[#0B3A63]">Overview</Link></li>
              <li><Link href="/methodology" className="hover:text-[#0B3A63]">Methodology</Link></li>
              <li><Link href="/regulations" className="hover:text-[#0B3A63]">Regulations</Link></li>
              <li><Link href="/pricing" className="hover:text-[#0B3A63]">Pricing</Link></li>
              <li><Link href="/verify" className="hover:text-[#0B3A63]">Verify Attestation</Link></li>
            </ul>
          </div>

          {/* Column 3 – Support */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Support
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><Link href="/contact" className="hover:text-[#0B3A63]">Contact</Link></li>
              <li><Link href="/error" className="hover:text-[#0B3A63]">Report an issue</Link></li>
            </ul>
          </div>

          {/* Column 4 – Legal */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Legal
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><Link href="/legal" className="hover:text-[#0B3A63]">Legal Notice</Link></li>
              <li><Link href="/privacy" className="hover:text-[#0B3A63]">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#0B3A63]">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Certif-Scope. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
