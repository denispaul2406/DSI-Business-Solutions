'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Calculator, Building, ChevronRight } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/company-config';

export default function ServicesOverview() {
  const [activeTab, setActiveTab] = useState<'all' | 'accountant' | 'estates'>('all');

  return (
    <section
      id="services"
      className="bg-[#121417] text-white py-14 sm:py-20 lg:py-28 border-b border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-8 sm:pb-12 border-b border-zinc-800">
          <div className="max-w-2xl">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[#c89f56] block mb-2 sm:mb-3">
              Practice Disciplines
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-medium tracking-tight text-white leading-tight">
              Services Designed Around Your Business
            </h2>
          </div>
          <p className="text-xs sm:text-base text-zinc-400 max-w-md font-normal leading-relaxed">
            Integrated advisory structured across statutory corporate accounting and specialized estate documentation.
          </p>
        </div>

        {/* Dual Primary Category Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 pt-8 sm:pt-12">
          {/* Division 01: Accountant Services */}
          <div className="group relative bg-[#181a1f] border border-zinc-800 p-5 sm:p-8 lg:p-10 flex flex-col justify-between hover:border-[#c89f56] transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-12 h-12 bg-[#c89f56]/10 -rotate-45 translate-x-6 -translate-y-6" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#c89f56] px-2.5 py-1 bg-zinc-900 border border-zinc-800">
                  DISCIPLINE 01
                </span>
                <div className="w-10 h-10 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#c89f56]">
                  <Calculator className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl sm:text-3xl font-medium text-white mb-2 sm:mb-3 tracking-tight">
                Ansari & Co.
              </h3>
              <p className="text-xs font-mono uppercase tracking-wider text-[#c89f56] mb-4 sm:mb-6">
                Auditor & Tax Consultants • Financial Planning
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 sm:mb-8">
                Comprehensive statutory and financial management: Income Tax, GST, ROC secretarial compliance, investment planning, and business advisory led by Amjad Ansari.
              </p>

              {/* Service Highlights Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 sm:mb-8">
                {COMPANY_CONFIG.ACCOUNTANT_SERVICES.slice(0, 6).map((svc) => (
                  <div
                    key={svc.id}
                    className="flex items-center gap-2 p-2 bg-zinc-900/80 border border-zinc-800/80 text-xs text-zinc-300"
                  >
                    <span className="text-[10px] font-mono text-[#c89f56] shrink-0">{svc.number}</span>
                    <span className="truncate">{svc.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 sm:pt-6 border-t border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500">10 Practice Areas</span>
              <Link
                href="/services?type=auditing"
                className="min-h-[44px] inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#c89f56] group-hover:text-white transition-colors py-2"
              >
                <span>Open Auditing Services</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Division 02: DSI Estates */}
          <div className="group relative bg-[#181a1f] border border-zinc-800 p-5 sm:p-8 lg:p-10 flex flex-col justify-between hover:border-[#c89f56] transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-12 h-12 bg-[#c89f56]/10 -rotate-45 translate-x-6 -translate-y-6" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#c89f56] px-2.5 py-1 bg-zinc-900 border border-zinc-800">
                  DISCIPLINE 02
                </span>
                <div className="w-10 h-10 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#c89f56]">
                  <Building className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl sm:text-3xl font-medium text-white mb-2 sm:mb-3 tracking-tight">
                DSI Estates
              </h3>
              <p className="text-xs font-mono uppercase tracking-wider text-[#c89f56] mb-4 sm:mb-6">
                Builders & Developers • Property Services
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 sm:mb-8">
                Residential and commercial building development, 30-year title verification, formal conveyance deed execution, sub-registrar liaison, and estate support across Bangalore.
              </p>

              {/* Service Highlights Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 sm:mb-8">
                {COMPANY_CONFIG.DSI_ESTATES.map((svc) => (
                  <div
                    key={svc.id}
                    className="flex items-center gap-2 p-2 bg-zinc-900/80 border border-zinc-800/80 text-xs text-zinc-300"
                  >
                    <span className="text-[10px] font-mono text-[#c89f56] shrink-0">{svc.number}</span>
                    <span className="truncate">{svc.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 sm:pt-6 border-t border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500">5 Practice Areas</span>
              <Link
                href="/services?type=real-estate"
                className="min-h-[44px] inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#c89f56] group-hover:text-white transition-colors py-2"
              >
                <span>Open Real Estate Services</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
