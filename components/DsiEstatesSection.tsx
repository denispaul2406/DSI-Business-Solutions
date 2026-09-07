'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Compass, FileText, CheckCircle2, Shield, Layers } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/company-config';

interface DsiEstatesSectionProps {
  onSelectServiceForEnquiry?: (serviceName: string) => void;
}

export default function DsiEstatesSection({ onSelectServiceForEnquiry }: DsiEstatesSectionProps) {
  return (
    <section
      id="dsi-estates"
      className="bg-[#0f1114] text-white py-14 sm:py-20 lg:py-28 border-b border-zinc-800 relative overflow-hidden"
    >
      {/* Subtle Architectural Blueprint Cadence */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end pb-8 sm:pb-12 border-b border-zinc-800 mb-8 sm:mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#c89f56]" />
              <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[#c89f56]">
                PRACTICE 02 • ESTATE & PROPERTY DIVISION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              DSI Estates
            </h2>
            <p className="text-lg sm:text-xl text-[#c89f56] font-normal mt-1.5">
              Builders & Developers • Property & Estate Services
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
              Led by Amjad Ansari, delivering turnkey residential & commercial building development, 30-year title verification, formal conveyance deeds, and sub-registrar registration across Bangalore.
            </p>
          </div>
        </div>

        {/* 4 Architectural Estate Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {COMPANY_CONFIG.DSI_ESTATES.map((estateSvc) => (
            <div
              key={estateSvc.id}
              className="group bg-[#16181d] border border-zinc-800/90 p-5 sm:p-8 lg:p-10 flex flex-col justify-between hover:border-[#c89f56] transition-all duration-300 relative"
            >
              {/* Corner Coordinate Accent */}
              <div className="absolute top-4 right-4 text-[10px] font-mono text-zinc-400">
                SEC // {estateSvc.number}
              </div>

              <div>
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#c89f56] group-hover:border-[#c89f56] transition-colors shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#c89f56] uppercase">
                      Estate Discipline
                    </span>
                    <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                      {estateSvc.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-medium text-zinc-300 mb-3">
                  {estateSvc.tagline}
                </p>

                <p className="text-sm text-zinc-400 leading-relaxed mb-5 sm:mb-6">
                  {estateSvc.description}
                </p>

                {/* Key Deliverables Checkpoints */}
                <div className="pt-4 border-t border-zinc-800/80 mb-5 sm:mb-6">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-3">
                    Scope of Professional Assistance
                  </p>
                  <div className="space-y-2">
                    {estateSvc.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c89f56] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-zinc-400">Title & Deed Integrity</span>
                <Link
                  href={`/contact?service=${encodeURIComponent(estateSvc.title)}#enquiry-form`}
                  onClick={() => {
                    if (onSelectServiceForEnquiry) {
                      onSelectServiceForEnquiry(estateSvc.title);
                    }
                  }}
                  className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#c89f56] hover:text-white transition-colors py-2 px-1"
                >
                  <span>Consult DSI Estates</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Property Line Feature Card */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-8 lg:p-10 bg-gradient-to-r from-zinc-900 via-[#15171b] to-zinc-900 border border-zinc-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#c89f56] block mb-2">
                Due Diligence & Title Chain Security
              </span>
              <h4 className="text-xl sm:text-2xl font-medium text-white mb-3">
                Protecting Family Legacies & Enterprise Real Estate Portfolios
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
                Property transactions require an unforgiving chain of documentation: from sub-registrar searches and encumbrance validation to mutation entries and stamp-duty verification. DSI Estates ensures every document stands up to judicial scrutiny.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/contact?service=DSI%20Estates#enquiry-form"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#c89f56] hover:bg-[#b88f46] text-[#0f1114] text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <span>Request Estate Consultation</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
