"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white pt-14 pb-10 dark:bg-gray-dark border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Column 1 – Branding */}
          <div>
            <h2 className="text-xl font-bold mb-4">Certif-Scope</h2>
            <p className="text-base text-body-color dark:text-body-color-dark">
              Instant certified CO₂ attestation for SMEs.  
              Simple, verifiable, compliant.
            </p>
          </div>

          {/* Column 2 – Product links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link href="/product" className="hover:text-primary">Product Overview</Link></li>
              <li><Link href="/methodology" className="hover:text-primary">Methodology</Link></li>
              <li><Link href="/regulations" className="hover:text-primary">Regulations</Link></li>
              <li><Link href="/verify" className="hover:text-primary">Verify Attestation</Link></li>
              <li><Link href="/pricing" className="hover:text-primary">Pricing</Link></li>
            </ul>
          </div>

          {/* Column 3 – Legal links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/legal" className="hover:text-primary">Legal Notice</Link></li>
              <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p className="text-sm text-body-color dark:text-body-color-dark">
            © {new Date().getFullYear()} Certif-Scope. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
