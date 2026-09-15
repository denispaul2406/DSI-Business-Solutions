'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Calculator, Building, Scale, ArrowUpRight, Phone, Mail, CheckCircle2 } from 'lucide-react';
import AccountantServicesSection from './AccountantServicesSection';
import DsiEstatesSection from './DsiEstatesSection';
import LegalServicesSection from './LegalServicesSection';
import ContactCtaBanner from './ContactCtaBanner';
import { COMPANY_CONFIG } from '@/lib/company-config';

export default function ServicesHub() {
  const searchParams = useSearchParams();
  
  const typeParam = searchParams.get('type');
  const [activeType, setActiveType] = useState<'auditing' | 'real-estate' | 'legal'>('auditing');

  useEffect(() => {
    if (typeParam === 'real-estate' || typeParam === 'realestate' || typeParam === 'estates') {
      setActiveType('real-estate');
    } else if (typeParam === 'legal' || typeParam === 'law' || typeParam === 'rera') {
      setActiveType('legal');
    } else if (typeParam === 'auditing' || typeParam === 'tax' || typeParam === 'accounting') {
      setActiveType('auditing');
    }
  }, [typeParam]);

  const handleSwitchType = (type: 'auditing' | 'real-estate' | 'legal') => {
    setActiveType(type);
    const url = new URL(window.location.href);
    url.searchParams.set('type', type);
    window.history.pushState({}, '', url.toString());

    const contentEl = document.getElementById('service-type-content');
    if (contentEl) {
      contentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full">
      {/* 3-Division Primary Selector Bar */}
      <section className="bg-[#121417] py-12 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#c89f56] block mb-2">
              Select Practice Division
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white mb-3">
              Practice Triad
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Select between <span className="text-[#c89f56]">Auditing & FDI Setup</span>, <span className="text-[#c89f56]">Real Estate & Property Management</span>, or <span className="text-[#c89f56]">Legal Consultancy</span>.
            </p>
          </div>

          {/* 3 Interactive Switcher Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* Type 1: Auditing (Ansari & Co.) */}
            <button
              type="button"
              id="select-auditing-services"
              onClick={() => handleSwitchType('auditing')}
              className={`p-6 text-left transition-all duration-200 border flex flex-col justify-between cursor-pointer focus:outline-hidden ${
                activeType === 'auditing'
                  ? 'bg-[#181a1f] border-[#c89f56] shadow-xl shadow-[#c89f56]/10 ring-1 ring-[#c89f56]'
                  : 'bg-[#14161a] border-zinc-800 hover:border-zinc-700 opacity-80 hover:opacity-100'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#c89f56] bg-zinc-900 px-2 py-1 border border-zinc-800">
                    DIVISION 01
                  </span>
                  <div
                    className={`w-9 h-9 rounded-xs flex items-center justify-center border transition-colors ${
                      activeType === 'auditing'
                        ? 'bg-[#c89f56] text-[#0f1114] border-[#c89f56]'
                        : 'bg-zinc-900 text-[#c89f56] border-zinc-800'
                    }`}
                  >
                    <Calculator className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-1">
                  Auditors & Tax Consultants
                </h3>
                <p className="text-xs text-[#c89f56] font-mono mb-2">
                  Ansari & Co.
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                  India FDI expansion, Zoho/Tally accounting, payroll, Income Tax, GST and ROC filings.
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#c89f56] uppercase tracking-wider">
                  {activeType === 'auditing' ? '✓ Active View' : 'View Services →'}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#c89f56]" />
              </div>
            </button>

            {/* Type 2: Real Estate (DSI Estates) */}
            <button
              type="button"
              id="select-real-estate-services"
              onClick={() => handleSwitchType('real-estate')}
              className={`p-6 text-left transition-all duration-200 border flex flex-col justify-between cursor-pointer focus:outline-hidden ${
                activeType === 'real-estate'
                  ? 'bg-[#181a1f] border-[#c89f56] shadow-xl shadow-[#c89f56]/10 ring-1 ring-[#c89f56]'
                  : 'bg-[#14161a] border-zinc-800 hover:border-zinc-700 opacity-80 hover:opacity-100'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#c89f56] bg-zinc-900 px-2 py-1 border border-zinc-800">
                    DIVISION 02
                  </span>
                  <div
                    className={`w-9 h-9 rounded-xs flex items-center justify-center border transition-colors ${
                      activeType === 'real-estate'
                        ? 'bg-[#c89f56] text-[#0f1114] border-[#c89f56]'
                        : 'bg-zinc-900 text-[#c89f56] border-zinc-800'
                    }`}
                  >
                    <Building className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-1">
                  Builders & Property Management
                </h3>
                <p className="text-xs text-[#c89f56] font-mono mb-2">
                  DSI Estates
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                  5-pillar property management, turnkey development, 30-year title search & conveyance.
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#c89f56] uppercase tracking-wider">
                  {activeType === 'real-estate' ? '✓ Active View' : 'View Services →'}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#c89f56]" />
              </div>
            </button>

            {/* Type 3: Legal Consultancy */}
            <button
              type="button"
              id="select-legal-services"
              onClick={() => handleSwitchType('legal')}
              className={`p-6 text-left transition-all duration-200 border flex flex-col justify-between cursor-pointer focus:outline-hidden ${
                activeType === 'legal'
                  ? 'bg-[#181a1f] border-[#c89f56] shadow-xl shadow-[#c89f56]/10 ring-1 ring-[#c89f56]'
                  : 'bg-[#14161a] border-zinc-800 hover:border-zinc-700 opacity-80 hover:opacity-100'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#c89f56] bg-zinc-900 px-2 py-1 border border-zinc-800">
                    DIVISION 03
                  </span>
                  <div
                    className={`w-9 h-9 rounded-xs flex items-center justify-center border transition-colors ${
                      activeType === 'legal'
                        ? 'bg-[#c89f56] text-[#0f1114] border-[#c89f56]'
                        : 'bg-zinc-900 text-[#c89f56] border-zinc-800'
                    }`}
                  >
                    <Scale className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-1">
                  Legal Consultancy & Litigation
                </h3>
                <p className="text-xs text-[#c89f56] font-mono mb-2">
                  DSI Legal Advisory
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                  Commercial contracts, civil suits, family law, criminal defense & RERA compliance.
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#c89f56] uppercase tracking-wider">
                  {activeType === 'legal' ? '✓ Active View' : 'View Services →'}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#c89f56]" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Dynamic Content Display Area */}
      <div id="service-type-content" className="scroll-mt-24">
        {activeType === 'auditing' ? (
          <div className="animate-in fade-in duration-200">
            <AccountantServicesSection isStandalonePage={true} />
          </div>
        ) : activeType === 'real-estate' ? (
          <div className="animate-in fade-in duration-200">
            <DsiEstatesSection />
          </div>
        ) : (
          <div className="animate-in fade-in duration-200">
            <LegalServicesSection isStandalonePage={true} />
          </div>
        )}
      </div>

      {/* Direct Quick Contact Strip */}
      <div className="bg-[#121417] py-8 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs font-mono text-[#c89f56] uppercase tracking-wider">
              {activeType === 'auditing'
                ? 'Consult Amjad Ansari for Auditing & FDI Setup'
                : activeType === 'real-estate'
                ? 'Consult Amjad Ansari for Real Estate & Property Management'
                : 'Consult Senior Legal Counsel for Civil, Family, Criminal & RERA Matters'}
            </p>
            <p className="text-sm text-zinc-300 mt-0.5">
              Rahmath Nagar, Bangalore-560 032 • Telephone & In-Person Consultations
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
