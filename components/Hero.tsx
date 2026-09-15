'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowDown, ShieldCheck, Building2, Scale } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/company-config';

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative bg-[#0f1114] text-white pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-24 overflow-hidden border-b border-zinc-800"
    >
      {/* Precision Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }}
        aria-hidden="true"
      />

      {/* Subtle radial illumination */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-b from-[#c89f56]/10 to-transparent blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* MAS LLP Inspired Gold Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c89f56]/10 border border-[#c89f56]/30 mb-5 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c89f56] shrink-0" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#c89f56]">
                Ansari & Co. • DSI Estates • Legal Advisory
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium tracking-tight text-white leading-[1.18] mb-4 sm:mb-5">
              Precision in Auditing, Real Estate &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-[#c89f56]">
                Legal Consultancy.
              </span>
            </h1>

            {/* Ultra-Concise Subtitle */}
            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl mb-8">
              Integrated FDI business setup, Zoho & Tally accounting, full property management, title search, and civil, family, criminal & RERA legal counsel in Bangalore.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10">
              <Link
                href="/contact"
                id="hero-primary-cta"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 min-h-[48px] bg-[#c89f56] hover:bg-[#b88f46] text-[#0f1114] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] focus:outline-hidden"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              <Link
                href="#services"
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700 text-xs sm:text-sm font-medium tracking-wider uppercase transition-colors active:scale-[0.98] focus:outline-hidden"
              >
                <span>Explore Practice Areas</span>
                <ArrowDown className="w-4 h-4 text-zinc-400" />
              </Link>
            </div>

            {/* Highlights Bar */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-zinc-300 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c89f56] shrink-0" />
                <span>Tax & FDI Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#c89f56] shrink-0" />
                <span>Property Management</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#c89f56] shrink-0" />
                <span>Civil, Family & RERA Legal</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Matrix Box */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none bg-[#121417] p-5 sm:p-6 border border-zinc-800 shadow-2xl">
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#c89f56]" />
                  <span className="text-xs font-mono tracking-wider uppercase text-zinc-300">
                    PRACTICE TRIAD
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#c89f56]">BANGALORE • HQ</span>
              </div>

              {/* Three Divisions Feature Cards */}
              <div className="space-y-2.5">
                <div className="p-3.5 bg-zinc-900/80 border border-zinc-800 hover:border-[#c89f56]/40 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-mono text-[#c89f56]">DIVISION 01</span>
                    <span className="text-[9px] px-2 py-0.5 bg-zinc-800 text-zinc-300 uppercase">Taxation & FDI</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white mb-0.5">
                    Ansari & Co.
                  </h3>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    India business expansion, Zoho/Tally accounting, GST, ROC and payroll compliance.
                  </p>
                </div>

                <div className="p-3.5 bg-zinc-900/80 border border-zinc-800 hover:border-[#c89f56]/40 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-mono text-[#c89f56]">DIVISION 02</span>
                    <span className="text-[9px] px-2 py-0.5 bg-zinc-800 text-zinc-300 uppercase">Real Estate</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white mb-0.5">
                    DSI Estates
                  </h3>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Property management (leasing, rent, maintenance), building development & 30-yr title search.
                  </p>
                </div>

                <div className="p-3.5 bg-zinc-900/80 border border-zinc-800 hover:border-[#c89f56]/40 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-mono text-[#c89f56]">DIVISION 03</span>
                    <span className="text-[9px] px-2 py-0.5 bg-zinc-800 text-zinc-300 uppercase">Legal Advisory</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white mb-0.5">
                    Legal Consultancy
                  </h3>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Commercial contracts, civil suits, family law, criminal defense & RERA tribunals.
                  </p>
                </div>
              </div>

              {/* Fast Contact Callout */}
              <div className="mt-3.5 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">Direct Partner Line:</span>
                <a href={COMPANY_CONFIG.PHONE_TEL} className="text-[#c89f56] hover:underline font-semibold">
                  {COMPANY_CONFIG.PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MAS LLP Inspired Overlapping Stat Counter Bar */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-zinc-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {COMPANY_CONFIG.STAT_METRICS.map((metric, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 bg-zinc-900/60 border border-zinc-800/80 hover:border-[#c89f56]/40 transition-all group"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#c89f56] group-hover:text-white transition-colors mb-1">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-zinc-200 mb-0.5">
                  {metric.label}
                </div>
                <div className="text-[11px] text-zinc-500 leading-tight">
                  {metric.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
