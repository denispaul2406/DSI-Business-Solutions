'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, Scale, ShieldAlert, HeartHandshake, Gavel, FileText } from 'lucide-react';
import { COMPANY_CONFIG, ServiceItem } from '@/lib/company-config';

interface LegalServicesSectionProps {
  onSelectServiceForEnquiry?: (serviceName: string) => void;
  isStandalonePage?: boolean;
}

const LEGAL_ICONS: Record<string, React.ReactNode> = {
  'contracts-and-agreements': <FileText className="w-5 h-5" />,
  'civil-law-services': <Scale className="w-5 h-5" />,
  'family-law-services': <HeartHandshake className="w-5 h-5" />,
  'criminal-law-services': <ShieldAlert className="w-5 h-5" />,
  'rera-compliance': <Gavel className="w-5 h-5" />,
};

export default function LegalServicesSection({
  onSelectServiceForEnquiry,
  isStandalonePage = false,
}: LegalServicesSectionProps) {
  return (
    <section
      id="legal-services"
      className="bg-[#fafaf8] text-zinc-900 py-16 sm:py-24 border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          {/* Gold Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c89f56]/15 border border-[#c89f56]/40 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b3883b]" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#966d24]">
              Practice 03 • Legal Consultancy & Advisory
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 leading-[1.18] mb-4">
            Corporate, Civil, Family & RERA Legal Services
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            Strategic legal counsel, risk mitigation, commercial contract vetting, and judicial representation across Karnataka courts and statutory tribunals.
          </p>
        </div>

        {/* 5 Legal Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_CONFIG.LEGAL_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-zinc-200/90 p-6 sm:p-7 flex flex-col justify-between hover:border-[#b3883b] hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Header with Icon & Discipline */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-zinc-100">
                  <div className="w-10 h-10 bg-zinc-50 border border-zinc-200 text-[#b3883b] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {LEGAL_ICONS[service.id] || <Scale className="w-5 h-5" />}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase">
                    Legal Counsel
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="text-lg font-semibold text-zinc-900 tracking-tight mb-1.5">
                  {service.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs font-medium text-[#b3883b] mb-3">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-1.5 pt-4 border-t border-zinc-100 mb-5">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Scope of Legal Support
                  </p>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Strip */}
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-400">
                  CONFIDENTIAL
                </span>
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}#enquiry-form`}
                  onClick={() => {
                    if (onSelectServiceForEnquiry) {
                      onSelectServiceForEnquiry(service.title);
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-zinc-900 hover:text-[#b3883b] transition-colors py-1"
                >
                  <span>Enquire on this matter</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Legal Advisory Note */}
        <div className="mt-12 p-6 sm:p-8 bg-zinc-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-zinc-800">
          <div>
            <h4 className="text-lg font-medium text-white mb-1">
              Require confidential pre-litigation advice or urgent bail / notice representation?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              We provide discreet, high-integrity legal counsel for commercial founders, property buyers, and families in Bangalore.
            </p>
          </div>
          <Link
            href="/contact?service=Legal%20Consultancy%20(General)"
            className="shrink-0 px-6 py-3 bg-[#c89f56] hover:bg-[#b88f46] text-[#0f1114] text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            Consult Senior Counsel
          </Link>
        </div>
      </div>
    </section>
  );
}
