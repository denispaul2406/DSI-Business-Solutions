'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import BrandLogo from './BrandLogo';
import LegalModal from './LegalModal';
import { COMPANY_CONFIG } from '@/lib/company-config';

export default function Footer() {
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer
        id="footer-section"
        className="bg-[#0b0c0e] text-white pt-12 sm:pt-16 lg:pt-20 pb-24 sm:pb-16 lg:pb-14 border-t border-zinc-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pb-10 sm:pb-14 border-b border-zinc-800/80">
            {/* Column 1: Brand & Identity (4 cols) */}
            <div className="lg:col-span-4 space-y-3.5 sm:space-y-4">
              <BrandLogo variant="dark" showSubtitle={false} />
              <p className="text-xs font-mono tracking-wider uppercase text-[#c89f56] pt-1">
                {COMPANY_CONFIG.TAX_FIRM_NAME} • {COMPANY_CONFIG.ESTATES_FIRM_NAME}
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed max-w-sm">
                Led by Amjad Ansari in Bangalore. Professional practice providing Income Tax, GST, ROC statutory compliances, investment planning, alongside DSI Estates property development and deed conveyance.
              </p>
              <div className="pt-1">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 text-[10px] font-mono uppercase text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c89f56]" />
                  Bangalore • Karnataka • India
                </span>
              </div>
            </div>

            {/* Column 2: Navigation Links (2 cols) */}
            <div className="lg:col-span-2 space-y-3 sm:space-y-4">
              <p className="text-xs font-mono font-semibold tracking-widest text-zinc-300 uppercase">
                Navigation
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
                {COMPANY_CONFIG.NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block py-1 hover:text-white hover:underline transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services (3 cols) */}
            <div className="lg:col-span-3 space-y-3 sm:space-y-4">
              <p className="text-xs font-mono font-semibold tracking-widest text-zinc-300 uppercase">
                Practice Areas
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
                <li>
                  <Link href="/accounting-services" className="inline-block py-1 hover:text-white transition-colors">
                    Accounting & Bookkeeping
                  </Link>
                </li>
                <li>
                  <Link href="/accounting-services" className="inline-block py-1 hover:text-white transition-colors">
                    Direct Tax & Income Tax
                  </Link>
                </li>
                <li>
                  <Link href="/accounting-services" className="inline-block py-1 hover:text-white transition-colors">
                    GST Filings & Reconciliation
                  </Link>
                </li>
                <li>
                  <Link href="/accounting-services" className="inline-block py-1 hover:text-white transition-colors">
                    ROC & Secretarial Compliance
                  </Link>
                </li>
                <li>
                  <Link href="/accounting-services" className="inline-block py-1 hover:text-white transition-colors">
                    Statutory Audit Preparation
                  </Link>
                </li>
                <li>
                  <Link href="/dsi-estates" className="inline-block py-1 text-[#c89f56] hover:underline font-medium transition-colors">
                    DSI Estates (Property Services)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Office (3 cols) */}
            <div className="lg:col-span-3 space-y-3 sm:space-y-4">
              <p className="text-xs font-mono font-semibold tracking-widest text-zinc-300 uppercase">
                Contact Office
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-zinc-400">
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#c89f56] shrink-0 mt-0.5" />
                  <a
                    href={COMPANY_CONFIG.PHONE_TEL}
                    className="hover:text-white font-mono transition-colors py-0.5"
                  >
                    {COMPANY_CONFIG.PHONE}
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#c89f56] shrink-0 mt-0.5" />
                  <a
                    href={COMPANY_CONFIG.EMAIL_MAILTO}
                    className="hover:text-white font-mono break-all transition-colors py-0.5"
                  >
                    {COMPANY_CONFIG.EMAIL}
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#c89f56] shrink-0 mt-0.5" />
                  <span className="font-mono text-xs leading-relaxed">
                    {COMPANY_CONFIG.ADDRESS}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#c89f56] hover:text-white transition-colors py-2"
                >
                  <span>Book Formal Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} DSI Business Solutions. All rights reserved.
            </p>

            <div className="flex items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={() => setLegalType('privacy')}
                className="min-h-[44px] inline-flex items-center hover:text-white transition-colors focus:outline-hidden underline-offset-4 hover:underline py-1"
              >
                Privacy Policy
              </button>
              <span className="text-zinc-700">•</span>
              <button
                type="button"
                onClick={() => setLegalType('terms')}
                className="min-h-[44px] inline-flex items-center hover:text-white transition-colors focus:outline-hidden underline-offset-4 hover:underline py-1"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Disclosures Modal */}
      <LegalModal type={legalType} onClose={() => setLegalType(null)} />
    </>
  );
}
