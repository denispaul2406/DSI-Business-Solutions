'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Compass, Shield, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/company-config';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#fafaf8] text-zinc-900 py-14 sm:py-20 lg:py-28 border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-8 sm:mb-14">
          <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[#b3883b] block mb-2 sm:mb-3">
            ABOUT DSI BUSINESS SOLUTIONS
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 leading-[1.15] mb-3 sm:mb-5">
            Built on Professionalism. Driven by Reliability.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-700 font-normal leading-relaxed">
            Professional support for the details that keep your business moving.
          </p>
        </div>

        {/* Editorial Layout: Narrative & Approach Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed font-normal">
            <p>
              DSI Business Solutions, led by Amjad Ansari in Bangalore, integrates the professional capabilities of Ansari & Co. (Auditors & Tax Consultants) and DSI Estates (Builders & Developers). We deliver comprehensive Income Tax, GST, ROC compliance, investment & financial planning, alongside residential and commercial construction.
            </p>
            <p>
              Modern commerce demands adherence to rapidly evolving tax codes, stringent GST reconciliation cycles, and rigorous corporate reporting standards under the Ministry of Corporate Affairs. We relieve management teams of statutory burdens so leadership can remain entirely focused on business development and strategic execution.
            </p>
            <p>
              Through our dedicated DSI Estates practice, we extend the same fiduciary diligence to property development, civil construction, title search verification, and deed conveyance—ensuring structural excellence and legal security across Bangalore.
            </p>

            <div className="pt-2 sm:pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <span>Connect with our leadership</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: "Our Approach" (01 Precision, 02 Professionalism, 03 Reliability) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="p-1 bg-zinc-200/50">
              <div className="bg-white p-5 sm:p-8 border border-zinc-200 shadow-xs">
                <p className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase mb-5 sm:mb-6">
                  OUR OPERATING APPROACH
                </p>

                <div className="space-y-6 sm:space-y-8">
                  {COMPANY_CONFIG.APPROACH_PILLARS.map((pillar) => (
                    <div key={pillar.number} className="flex items-start gap-3.5 sm:gap-6 group">
                      <span className="text-xl sm:text-2xl font-mono font-bold text-[#b3883b] shrink-0 pt-0.5">
                        {pillar.number}
                      </span>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                          <h3 className="text-base sm:text-xl font-medium text-zinc-900 tracking-tight">
                            {pillar.title}
                          </h3>
                          <span className="text-[11px] font-mono text-zinc-400">
                            • {pillar.subtitle}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Note on Firm Verification */}
            <div className="p-4 bg-zinc-100 border border-zinc-200 text-xs text-zinc-500 flex items-center justify-between">
              <span>Amjad Ansari • Ansari & Co. • DSI Estates</span>
              <span className="font-mono text-[11px] text-zinc-400">BANGALORE // INDIA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
