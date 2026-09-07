'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowDown, ShieldCheck, FileCheck, Building2, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/company-config';

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative bg-[#0f1114] text-white pt-24 sm:pt-32 lg:pt-40 pb-12 sm:pb-20 lg:pb-28 overflow-hidden border-b border-zinc-800"
    >
      {/* Precision Structural Grid Background - Subtle Architectural Lines */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }}
        aria-hidden="true"
      />

      {/* Subtle radial illumination to establish depth */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-b from-[#c89f56]/10 to-transparent blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs (60% on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-900/90 border border-zinc-700/70 mb-5 sm:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c89f56] shrink-0" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.14em] sm:tracking-[0.18em] uppercase text-zinc-300">
                Ansari & Co. • DSI Estates (Builders & Developers)
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium tracking-tight text-white leading-[1.16] mb-5 sm:mb-6">
              Professional Solutions for Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-300">
                Business, Tax & Property Needs.
              </span>
            </h1>

            {/* Supporting Line */}
            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl mb-7 sm:mb-10">
              Reliable Income Tax, GST, ROC statutory compliance, investments planning, and turnkey building development led by Amjad Ansari in Bangalore.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-12">
              <Link
                href="/contact"
                id="hero-primary-cta"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 min-h-[48px] bg-[#c89f56] hover:bg-[#b88f46] text-[#0f1114] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] focus:outline-hidden w-full sm:w-auto"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              <Link
                href="#services"
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700 text-xs sm:text-sm font-medium tracking-wider uppercase transition-colors active:scale-[0.98] focus:outline-hidden w-full sm:w-auto"
              >
                <span>Explore Services</span>
                <ArrowDown className="w-4 h-4 text-zinc-400" />
              </Link>
            </div>

            {/* Core Capability Badges */}
            <div className="pt-6 border-t border-zinc-800/80 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 text-left">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#c89f56] shrink-0" />
                  <span className="text-xs text-zinc-300 font-medium">Income Tax & GST</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#c89f56] shrink-0" />
                  <span className="text-xs text-zinc-300 font-medium">ROC & Compliances</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#c89f56] shrink-0" />
                  <span className="text-xs text-zinc-300 font-medium">Builders & Developers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c89f56] shrink-0" />
                  <span className="text-xs text-zinc-300 font-medium">Investments Planning</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sophisticated Abstract Financial Geometry & Architectural Precision Canvas */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none bg-gradient-to-br from-zinc-900/90 to-[#121417] p-5 sm:p-8 border border-zinc-800 shadow-2xl">
              {/* Geometric Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#c89f56]" />
                  <span className="text-xs font-mono tracking-wider uppercase text-zinc-300">
                    PRACTICE MATRIX
                  </span>
                </div>
                <span className="text-[11px] font-mono text-zinc-400">BANGALORE • INDIA</span>
              </div>

              {/* Architectural Vector Schematic */}
              <div className="relative h-56 sm:h-72 w-full bg-[#0a0b0d] border border-zinc-800/80 p-3 sm:p-4 flex flex-col justify-between overflow-hidden">
                {/* Precision Grid Matrix */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#c89f56 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* SVG Geometric Balance Diagram */}
                <svg
                  viewBox="0 0 400 240"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Axis lines */}
                  <line x1="20" y1="200" x2="380" y2="200" stroke="#27272a" strokeWidth="1.5" />
                  <line x1="40" y1="20" x2="40" y2="220" stroke="#27272a" strokeWidth="1.5" />
                  <line x1="200" y1="20" x2="200" y2="220" stroke="#27272a" strokeWidth="1" strokeDasharray="3 3" />
                  
                  {/* Architectural isometric structures representing dual divisions */}
                  {/* Pillar 1: Accounting & Statutory Compliance */}
                  <rect x="80" y="80" width="80" height="120" stroke="#52525b" strokeWidth="1" fill="#18181b" fillOpacity="0.4" />
                  <rect x="90" y="100" width="60" height="100" stroke="#c89f56" strokeWidth="1" strokeDasharray="2 2" fill="none" />
                  <line x1="80" y1="80" x2="110" y2="50" stroke="#71717a" strokeWidth="1" />
                  <line x1="160" y1="80" x2="190" y2="50" stroke="#71717a" strokeWidth="1" />
                  <line x1="110" y1="50" x2="190" y2="50" stroke="#71717a" strokeWidth="1" />

                  {/* Pillar 2: DSI Estates & Deed Integrity */}
                  <polygon points="240,200 240,70 340,70 340,200" stroke="#71717a" strokeWidth="1" fill="#18181b" fillOpacity="0.4" />
                  <line x1="240" y1="70" x2="290" y2="35" stroke="#c89f56" strokeWidth="1.5" />
                  <line x1="340" y1="70" x2="290" y2="35" stroke="#c89f56" strokeWidth="1.5" />
                  <circle cx="290" cy="35" r="3" fill="#c89f56" />

                  {/* Convergence lines depicting fiduciary trust */}
                  <path d="M 120 140 Q 200 90 290 135" stroke="#c89f56" strokeWidth="1.5" strokeDasharray="4 3" />
                  <circle cx="200" cy="112" r="4" fill="#ffffff" />
                  <circle cx="200" cy="112" r="8" stroke="#c89f56" strokeWidth="1" opacity="0.6" />

                  {/* Precision Coordinates & Labels */}
                  <text x="65" y="225" fill="#a1a1aa" fontSize="9" fontFamily="monospace">DIV 01: ANSARI & CO.</text>
                  <text x="240" y="225" fill="#a1a1aa" fontSize="9" fontFamily="monospace">DIV 02: DSI ESTATES</text>
                </svg>

                {/* Floating Status Marker */}
                <div className="absolute bottom-3 left-3 bg-zinc-900/90 border border-zinc-700/80 px-2.5 py-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-300">
                    Amjad Ansari • Bangalore
                  </span>
                </div>
              </div>

              {/* Dual Division Callout Cards */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="p-3 bg-zinc-900 border border-zinc-800">
                  <span className="text-[10px] font-mono text-[#c89f56] block mb-1">01 / PRACTICE</span>
                  <p className="text-xs font-semibold text-white">Ansari & Co.</p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Auditor & Tax Consultants</p>
                </div>
                <div className="p-3 bg-zinc-900 border border-zinc-800">
                  <span className="text-[10px] font-mono text-[#c89f56] block mb-1">02 / PRACTICE</span>
                  <p className="text-xs font-semibold text-white">DSI Estates</p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Builders & Developers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
