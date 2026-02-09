import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

const footerLinks = {
  bridgingFinance: [
    { label: "For Property Sellers", href: "/bridging-finance/sellers" },
    { label: "For Estate Agents", href: "/bridging-finance/agents" },
    { label: "For Bond Applicants", href: "/bridging-finance/bond-applicants" },
    { label: "For Bond Originators", href: "/bridging-finance/bond-originators" },
  ],
  homeLoans: [
    { label: "Get Pre-Approved", href: "/home-loans/get-preapproved" },
    { label: "Apply for Home Loan", href: "/home-loans/apply" },
    { label: "Why Use Us", href: "/home-loans/why-use-us" },
    { label: "Commercial Loans", href: "/home-loans/commercial" },
  ],
  tools: [
    { label: "Bridging Calculator", href: "/tools/bridging-calculator" },
    { label: "Affordability Calculator", href: "/tools/affordability-calculator" },
    { label: "Repayment Calculator", href: "/tools/repayment-calculator" },
    { label: "Refer & Earn", href: "/tools/refer-and-earn" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Partners", href: "/partners" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-tbsg-charcoal text-white">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Logo and Contact */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1 mb-8 lg:mb-0">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/images/logos/tbsg-logo-white.png"
                  alt="TBSG - The Bridging Solutions Group"
                  width={180}
                  height={50}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-gray-400 text-sm mb-6 max-w-xs">
                South Africa&apos;s most transparent property finance partner. Bridging finance and home loans since 2016.
              </p>
              <div className="space-y-3 text-sm">
                <a href="tel:+27120042868" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  012 004 2868
                </a>
                <a href="mailto:info@tbsg.co.za" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@tbsg.co.za
                </a>
              </div>

              {/* Compliance Logos */}
              <div className="flex items-center gap-6 mt-8">
                <Image
                  src="/images/compliance/bfasa.png"
                  alt="BFASA Member"
                  width={80}
                  height={50}
                  className="h-10 w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/images/compliance/ncr.png"
                  alt="NCR Registered"
                  width={80}
                  height={50}
                  className="h-10 w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            {/* Bridging Finance */}
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-white">
                Bridging Finance
              </h3>
              <ul className="space-y-3">
                {footerLinks.bridgingFinance.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Home Loans */}
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-white">
                Home Loans
              </h3>
              <ul className="space-y-3">
                {footerLinks.homeLoans.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-white">
                Tools
              </h3>
              <ul className="space-y-3">
                {footerLinks.tools.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-white">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} The Bridging Solutions Group (Pty) Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
