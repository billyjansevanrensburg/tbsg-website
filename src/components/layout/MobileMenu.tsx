"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";

interface NavItem {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: NavItem[];
}

export function MobileMenu({ isOpen, onClose, navigation }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      {/* Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <span className="font-heading font-bold text-xl text-tbsg-primary">Menu</span>
          <button onClick={onClose} className="p-2 text-tbsg-charcoal">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-200px)]">
          {navigation.map((item) => (
            <div key={item.name}>
              <button
                onClick={() => setExpandedItem(expandedItem === item.name ? null : item.name)}
                className="flex items-center justify-between w-full px-4 py-3 text-left font-medium text-tbsg-charcoal hover:bg-tbsg-light rounded-lg"
              >
                {item.name}
                {item.children && (
                  <svg
                    className={`w-5 h-5 transition-transform ${expandedItem === item.name ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>

              {item.children && expandedItem === item.name && (
                <div className="ml-4 mt-2 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      onClick={onClose}
                      className="block px-4 py-2 text-sm text-tbsg-charcoal hover:text-tbsg-primary hover:bg-tbsg-light rounded-lg"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-white space-y-3">
          <Button variant="ghost" href="/contact" className="w-full" onClick={onClose}>
            Contact Us
          </Button>
          <Button variant="primary" href="/bridging-finance/sellers" className="w-full" onClick={onClose}>
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}
