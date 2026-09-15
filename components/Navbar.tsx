'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, ArrowUpRight, ChevronDown, MapPin, Clock } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { COMPANY_CONFIG } from '@/lib/company-config';

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(true);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setDesktopServicesOpen(false);
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleMouseEnterServices = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDesktopServicesOpen(true);
  };

  const handleMouseLeaveServices = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDesktopServicesOpen(false);
    }, 150);
  };

  return (
    <>
      <header
        id="main-navigation"
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      >
        {/* MAS LLP Inspired Top Contact Strip (hidden on small screens) */}
        {!isScrolled && (
          <div className="hidden lg:block bg-[#0a0c0e] border-b border-zinc-800/60 py-2 text-[11px] text-zinc-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <a
                  href={COMPANY_CONFIG.PHONE_TEL}
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Phone className="w-3 h-3 text-[#c89f56]" />
                  <span>{COMPANY_CONFIG.PHONE}</span>
                </a>
                <a
                  href={COMPANY_CONFIG.EMAIL_MAILTO}
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Mail className="w-3 h-3 text-[#c89f56]" />
                  <span>{COMPANY_CONFIG.EMAIL}</span>
                </a>
                <span className="hidden xl:inline-flex items-center gap-1.5 text-zinc-500">
                  <MapPin className="w-3 h-3 text-[#c89f56]" />
                  <span>Bangalore - 560 032</span>
                </span>
              </div>
              <div className="flex items-center gap-4 text-zinc-500">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-[#c89f56]" />
                  <span>{COMPANY_CONFIG.BUSINESS_HOURS}</span>
                </span>
                <span className="text-zinc-700">|</span>
                <a
                  href={COMPANY_CONFIG.WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c89f56] hover:text-[#e0b56c] font-medium"
                >
                  WhatsApp Direct →
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Main Navbar */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-[#0f1114]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-lg py-3'
              : 'bg-[#0f1114] border-b border-zinc-800/40 py-4'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              {/* Brand Logo */}
              <BrandLogo variant="dark" hideSubtitleOnMobile={true} />

              {/* Desktop Navigation Links */}
              <nav
                id="desktop-nav"
                className="hidden lg:flex items-center gap-1 xl:gap-2"
                aria-label="Main Navigation"
              >
                {COMPANY_CONFIG.NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href || (link.subItems && pathname.startsWith('/services'));
                  const hasSubItems = Boolean(link.subItems && link.subItems.length > 0);

                  if (hasSubItems) {
                    return (
                      <div
                        key={link.href}
                        className="relative"
                        onMouseEnter={handleMouseEnterServices}
                        onMouseLeave={handleMouseLeaveServices}
                      >
                        <div className="flex items-center">
                          <Link
                            href={link.href}
                            className={`px-3 py-2 text-xs xl:text-sm font-medium tracking-wider uppercase transition-colors inline-flex items-center gap-1 relative ${
                              isActive
                                ? 'text-white font-semibold'
                                : 'text-zinc-300 hover:text-white'
                            }`}
                          >
                            <span>{link.label}</span>
                            <ChevronDown
                              className={`w-3.5 h-3.5 transition-transform duration-200 text-[#c89f56] ${
                                desktopServicesOpen ? 'rotate-180' : ''
                              }`}
                            />
                            {isActive && (
                              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#c89f56]" />
                            )}
                          </Link>
                        </div>

                        {/* Dropdown Menu */}
                        {desktopServicesOpen && (
                          <div
                            className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                          >
                            <div className="bg-[#121417] border border-zinc-800 shadow-2xl p-2 rounded-xs">
                              <div className="px-3 py-1.5 border-b border-zinc-800/80 mb-1">
                                <span className="text-[10px] font-mono uppercase tracking-widest text-[#c89f56]">
                                  Select Practice Division
                                </span>
                              </div>
                              {link.subItems?.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setDesktopServicesOpen(false)}
                                  className="block p-3 rounded-xs hover:bg-zinc-900/90 transition-colors group"
                                >
                                  <div className="flex items-center justify-between text-xs font-semibold text-zinc-200 group-hover:text-white mb-1">
                                    <span>{sub.label}</span>
                                    <ArrowUpRight className="w-3 h-3 text-[#c89f56] opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </div>
                                  {sub.description && (
                                    <p className="text-[11px] text-zinc-400 group-hover:text-zinc-300 leading-snug">
                                      {sub.description}
                                    </p>
                                  )}
                                </Link>
                              ))}
                              <div className="mt-1 pt-2 border-t border-zinc-800/80 px-3 pb-1 flex items-center justify-between">
                                <Link
                                  href="/services"
                                  onClick={() => setDesktopServicesOpen(false)}
                                  className="text-[11px] font-mono text-[#c89f56] hover:underline"
                                >
                                  View All Services →
                                </Link>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-3 py-2 text-xs xl:text-sm font-medium tracking-wider uppercase transition-colors relative ${
                        isActive
                          ? 'text-white font-semibold'
                          : 'text-zinc-300 hover:text-white'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#c89f56]" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Actions & Primary CTA */}
              <div className="hidden lg:flex items-center gap-4">
                <Link
                  href="/contact"
                  id="nav-cta-button"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase bg-[#c89f56] hover:bg-[#b88f46] text-[#0f1114] transition-all duration-200 shadow-sm hover:shadow-md focus:outline-hidden active:scale-[0.98]"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </Link>
              </div>

              {/* Mobile Header Right: CTA + Hamburger */}
              <div className="flex lg:hidden items-center gap-2">
                <Link
                  href="/contact"
                  id="mobile-nav-cta-button"
                  className="inline-flex items-center justify-center px-3 py-2 min-h-[40px] text-[11px] font-semibold tracking-wider uppercase bg-[#c89f56] text-[#0f1114] active:scale-95 transition-transform"
                >
                  <span>Consult</span>
                </Link>

                <button
                  type="button"
                  id="mobile-menu-toggle"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-expanded={mobileMenuOpen}
                  aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
                  className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-colors focus:outline-hidden"
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Menu className="w-6 h-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay & Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-50 lg:hidden bg-[#0f1114] flex flex-col pt-20 pb-[max(2rem,env(safe-area-inset-bottom))] px-5 sm:px-6 overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Close button in top corner */}
          <div className="absolute top-5 right-5">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="mb-6 pb-4 border-b border-zinc-800/80">
            <BrandLogo variant="dark" showSubtitle={true} />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1.5 mb-8" aria-label="Mobile Links">
            {COMPANY_CONFIG.NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const hasSubItems = Boolean(link.subItems && link.subItems.length > 0);

              if (hasSubItems) {
                return (
                  <div key={link.href} className="flex flex-col">
                    <div
                      className={`flex items-center justify-between py-3.5 px-3 min-h-[48px] text-base font-medium tracking-wide transition-colors ${
                        pathname.startsWith('/services')
                          ? 'bg-zinc-900 text-white font-semibold border-l-2 border-[#c89f56]'
                          : 'text-zinc-300 hover:text-white hover:bg-zinc-900/50'
                      }`}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex-1"
                      >
                        {link.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                        className="p-1 text-zinc-400 hover:text-white"
                        aria-label="Toggle sub-services"
                      >
                        <ChevronDown
                          className={`w-4 h-4 text-[#c89f56] transition-transform ${
                            mobileServicesExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {mobileServicesExpanded && (
                      <div className="pl-4 pr-2 py-2 flex flex-col gap-1 bg-zinc-950/60 border-l border-zinc-800 my-1">
                        {link.subItems?.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-2.5 rounded-xs flex flex-col hover:bg-zinc-900/70"
                          >
                            <span className="text-sm font-medium text-[#c89f56] flex items-center justify-between">
                              <span>↳ {sub.label}</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </span>
                            <span className="text-[11px] text-zinc-400 mt-0.5">
                              {sub.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3.5 px-3 min-h-[48px] text-base font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'bg-zinc-900 text-white font-semibold border-l-2 border-[#c89f56]'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-900/50'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-zinc-500">→</span>
                </Link>
              );
            })}
          </nav>

          {/* Contact Details Quick Strip */}
          <div className="mt-auto pt-6 border-t border-zinc-800/80 space-y-3">
            <p className="text-[11px] font-semibold tracking-widest text-zinc-400 uppercase">
              Direct Contact
            </p>
            <a
              href={COMPANY_CONFIG.PHONE_TEL}
              className="flex items-center gap-3 py-3 px-3 min-h-[48px] bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm active:bg-zinc-800"
            >
              <Phone className="w-4 h-4 text-[#c89f56] shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-400 uppercase">Call Office</span>
                <span className="font-mono text-xs">{COMPANY_CONFIG.PHONE}</span>
              </div>
            </a>

            <a
              href={COMPANY_CONFIG.EMAIL_MAILTO}
              className="flex items-center gap-3 py-3 px-3 min-h-[48px] bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm active:bg-zinc-800"
            >
              <Mail className="w-4 h-4 text-[#c89f56] shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-zinc-400 uppercase">Email Enquiries</span>
                <span className="font-mono text-xs truncate">{COMPANY_CONFIG.EMAIL}</span>
              </div>
            </a>

            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 min-h-[48px] bg-[#c89f56] text-[#0f1114] text-xs font-semibold tracking-wider uppercase active:bg-[#b88f46]"
              >
                <span>Book a Consultation / Enquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
