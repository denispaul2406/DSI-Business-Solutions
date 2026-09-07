'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Calculator, Building, ArrowUpRight, Phone, Mail, CheckCircle2 } from 'lucide-react';
import AccountantServicesSection from './AccountantServicesSection';
import DsiEstatesSection from './DsiEstatesSection';
import ContactCtaBanner from './ContactCtaBanner';
import { COMPANY_CONFIG } from '@/lib/company-config';

export default function ServicesHub() {
  const searchParams = useSearchParams();
  
  // Default to auditing unless explicitly requested as real-estate
  const typeParam = searchParams.get('type');
  const [activeType, setActiveType] = useState<'auditing' | 'real-estate'>('auditing');

  useEffect(() => {
    if (typeParam === 'real-estate' || typeParam === 'realestate' || typeParam === 'estates') {
      setActiveType('real-estate');
    } else if (typeParam === 'auditing' || typeParam === 'tax' || typeParam === 'accounting') {
      setActiveType('auditing');
    }
  }, [typeParam]);

  const handleSwitchType = (type: 'auditing' | 'real-estate') => {
    setActiveType(type);
    // Update URL shallowly so links can be shared and refreshed
    const url = new URL(window.location.href);
    url.searchParams.set('type', type);
    window.history.pushState({}, '', url.toString());

    // Smooth scroll down to content area
    const contentEl = document.getElementById('service-type-content');
    if (contentEl) {
      contentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full">
      {/* 2-Type Primary Selector Bar */}
      <section className="bg-[#121417] py-10 sm:py-14 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#c89f56] block mb-2">
              Select Practice Division
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white mb-3">
              Choose Service Type
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Click either <span className="text-[#c89f56] font-semibold">Auditing</span> or <span className="text-[#c89f56] font-semibold">Real Estate</span> to instantly open the corresponding practice disciplines.
            </p>
          </div>

          {/* Dual Category Interactive Switcher Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {/* Type 1: Auditing (Ansari & Co.) */}
            <button
              type="button"
              id="select-auditing-services"
              onClick={() => handleSwitchType('auditing')}
              className={`p-6 sm:p-8 text-left transition-all duration-300 relative border flex flex-col justify-between cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#c89f56] ${
                activeType === 'auditing'
                  ? 'bg-[#181a1f] border-[#c89f56] shadow-xl shadow-[#c89f56]/10 ring-1 ring-[#c89f56]'
                  : 'bg-[#14161a] border-zinc-800 hover:border-zinc-700 opacity-80 hover:opacity-100'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#c89f56] bg-zinc-900 px-2 py-1 border border-zinc-800">
                      TYPE 01
                    </span>
                    {activeType === 'auditing' && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5">
                        <CheckCircle2 className="w-3 h-3" /> Active View
                      </span>
                    )}
                  </div>
                  <div
                    className={`w-10 h-10 rounded-xs flex items-center justify-center border transition-colors ${
                      activeType === 'auditing'
                        ? 'bg-[#c89f56] text-[#0f1114] border-[#c89f56]'
                        : 'bg-zinc-900 text-[#c89f56] border-zinc-800'
                    }`}
                  >
                    <Calculator className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-medium text-white mb-1 tracking-tight">
                  Auditing & Tax Consultants
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-[#c89f56] mb-3">
                  Ansari & Co. • Amjad Ansari
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                  Income Tax, GST, ROC, Statutory Compliances, Investments Planning, Business Planning & Financial Planning.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {['Income Tax', 'GST', 'ROC', 'Statutory Compliance', 'Financial Planning'].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#c89f56] uppercase tracking-wider">
                  {activeType === 'auditing' ? '✓ Showing Below' : 'Click to Open Auditing →'}
                </span>
                <ArrowUpRight
                  className={`w-4 h-4 transition-transform text-[#c89f56] ${
                    activeType === 'auditing' ? 'rotate-90' : ''
                  }`}
                />
              </div>
            </button>

            {/* Type 2: Real Estate (DSI Estates) */}
            <button
              type="button"
              id="select-real-estate-services"
              onClick={() => handleSwitchType('real-estate')}
              className={`p-6 sm:p-8 text-left transition-all duration-300 relative border flex flex-col justify-between cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#c89f56] ${
                activeType === 'real-estate'
                  ? 'bg-[#181a1f] border-[#c89f56] shadow-xl shadow-[#c89f56]/10 ring-1 ring-[#c89f56]'
                  : 'bg-[#14161a] border-zinc-800 hover:border-zinc-700 opacity-80 hover:opacity-100'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#c89f56] bg-zinc-900 px-2 py-1 border border-zinc-800">
                      TYPE 02
                    </span>
                    {activeType === 'real-estate' && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5">
                        <CheckCircle2 className="w-3 h-3" /> Active View
                      </span>
                    )}
                  </div>
                  <div
                    className={`w-10 h-10 rounded-xs flex items-center justify-center border transition-colors ${
                      activeType === 'real-estate'
                        ? 'bg-[#c89f56] text-[#0f1114] border-[#c89f56]'
                        : 'bg-zinc-900 text-[#c89f56] border-zinc-800'
                    }`}
                  >
                    <Building className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-medium text-white mb-1 tracking-tight">
                  Real Estate & Developers
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-[#c89f56] mb-3">
                  DSI Estates • Builders & Developers
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                  Turnkey building development, residential & commercial projects, deed execution, 30-year title verification, and property management across Bangalore.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {['Builders & Developers', 'Title Search', 'Deed Execution', 'Property Management'].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#c89f56] uppercase tracking-wider">
                  {activeType === 'real-estate' ? '✓ Showing Below' : 'Click to Open Real Estate →'}
                </span>
                <ArrowUpRight
                  className={`w-4 h-4 transition-transform text-[#c89f56] ${
                    activeType === 'real-estate' ? 'rotate-90' : ''
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Quick Switch Toggle Bar */}
          <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs font-mono text-zinc-400">Currently Viewing:</span>
            <div className="inline-flex rounded-xs bg-zinc-900 p-1 border border-zinc-800">
              <button
                type="button"
                onClick={() => handleSwitchType('auditing')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
                  activeType === 'auditing'
                    ? 'bg-[#c89f56] text-[#0f1114]'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                1. Auditing (Ansari & Co.)
              </button>
              <button
                type="button"
                onClick={() => handleSwitchType('real-estate')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
                  activeType === 'real-estate'
                    ? 'bg-[#c89f56] text-[#0f1114]'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                2. Real Estate (DSI Estates)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Content Display Area */}
      <div id="service-type-content" className="scroll-mt-24">
        {activeType === 'auditing' ? (
          <div className="animate-in fade-in duration-200">
            <AccountantServicesSection isStandalonePage={true} />
          </div>
        ) : (
          <div className="animate-in fade-in duration-200">
            <DsiEstatesSection />
          </div>
        )}
      </div>

      {/* Direct Quick Enquiry Strip */}
      <div className="bg-[#121417] py-8 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs font-mono text-[#c89f56] uppercase tracking-wider">
              {activeType === 'auditing' ? 'Consult Amjad Ansari for Auditing & Tax' : 'Consult Amjad Ansari for Real Estate Development'}
            </p>
            <p className="text-sm text-zinc-300 mt-0.5">
              Rahmath Nagar, Bangalore-560 032 • Call or Email for direct consultation
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={COMPANY_CONFIG.PHONE_TEL}
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 text-xs font-mono text-white hover:border-[#c89f56] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c89f56]" />
              <span>{COMPANY_CONFIG.PHONE}</span>
            </a>
            <a
              href={COMPANY_CONFIG.EMAIL_MAILTO}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#c89f56] text-[#0f1114] text-xs font-semibold uppercase tracking-wider hover:bg-[#b88f46] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send Enquiry</span>
            </a>
          </div>
        </div>
      </div>

      <ContactCtaBanner />
    </div>
  );
}
