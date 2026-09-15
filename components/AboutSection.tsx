'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/company-config';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#fafaf8] text-zinc-900 py-16 sm:py-24 border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gold Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c89f56]/15 border border-[#c89f56]/40 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#b3883b]" />
          <span className="text-[11px] font-semibold tracking-widest uppercase text-[#966d24]">
            About Our Practice
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Concise Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-zinc-900 leading-tight">
              Built on Integrity. Driven by Precision.
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Led by <strong>Amjad Ansari</strong> in Bangalore, DSI Business Solutions harmonizes professional corporate auditing and physical real estate development under one roof.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#b3883b] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-zinc-700">
                  <strong>Ansari & Co.:</strong> Direct/indirect taxation, monthly GST filing, corporate ROC secretarial compliance, and wealth planning.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#b3883b] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-zinc-700">
                  <strong>DSI Estates:</strong> Turnkey building development, 30-year title chain scrutiny, deed drafting, and sub-registrar conveyance.
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <span>Read Institutional Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Pillars Card */}
          <div className="lg:col-span-6">
            <div className="bg-white p-6 sm:p-8 border border-zinc-200 shadow-sm">
              <p className="text-xs font-mono font-bold tracking-widest text-[#b3883b] uppercase mb-6">
                OUR OPERATING CODE
              </p>

              <div className="space-y-6">
                {COMPANY_CONFIG.APPROACH_PILLARS.map((pillar) => (
                  <div key={pillar.number} className="flex items-start gap-4">
                    <span className="text-lg font-mono font-bold text-[#b3883b] shrink-0">
                      {pillar.number}
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-zinc-900 mb-1">
                        {pillar.title} — <span className="text-zinc-500 font-normal text-xs">{pillar.subtitle}</span>
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
