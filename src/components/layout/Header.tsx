"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";
import { MobileMenu } from "./MobileMenu";

const navigation = [
  {
    name: "Bridging Finance",
    href: "/bridging-finance",
    children: [
      { name: "For Property Sellers", href: "/bridging-finance/sellers" },
      { name: "For Estate Agents", href: "/bridging-finance/agents" },
      { name: "For Bond Applicants", href: "/bridging-finance/bond-applicants" },
      { name: "For Bond Originators", href: "/bridging-finance/bond-originators" },
    ],
  },
  {
    name: "Home Loans",
    href: "/home-loans",
    children: [
      { name: "Get Pre-Approved", href: "/home-loans/get-preapproved" },
      { name: "Apply for Home Loan", href: "/home-loans/apply" },
      { name: "Why Use Us", href: "/home-loans/why-use-us" },
      { name: "Commercial Loans", href: "/home-loans/commercial" },
    ],
  },
  {
    name: "Tools",
    href: "/tools",
    children: [
      { name: "Bridging Calculator", href: "/tools/bridging-calculator" },
      { name: "Affordability Calculator", href: "/tools/affordability-calculator" },
      { name: "Repayment Calculator", href: "/tools/repayment-calculator" },
      { name: "Refer & Earn", href: "/tools/refer-and-earn" },
    ],
  },
  {
    name: "Partners",
    href: "/partners",
    children: [
      { name: "For Attorneys", href: "/partners/attorneys" },
      { name: "For Estate Agents", href: "/partners/agents" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logos/tbsg-logo.png"
              alt="TBSG - The Bridging Solutions Group"
              width={200}
              height={56}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-tbsg-charcoal hover:text-tbsg-primary transition-colors font-medium py-2"
                >
                  {item.name}
                  {item.children && (
                    <svg
                      className="inline-block w-4 h-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 mt-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-tbsg-charcoal hover:bg-tbsg-light hover:text-tbsg-primary transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="primary" href="/home-loans/get-preapproved">
              Get Pre-Approved
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-tbsg-charcoal"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigation={navigation}
      />
    </header>
  );
}
