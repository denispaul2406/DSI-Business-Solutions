'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calculator,
  Building2,
  FileSpreadsheet,
  Landmark,
  Scale,
  TrendingUp,
  Receipt,
  FileCheck,
  ShieldCheck,
  ArrowUpRight,
  Globe2,
  Users,
  FileText,
  HeartHandshake,
  ShieldAlert,
  Gavel,
} from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/company-config';

// Icon mapping for clean visual cards
const SERVICE_ICONS: Record<string, React.ReactNode> = {
  // Auditing & Tax (Ansari & Co.)
  'fdi-expansion': <Globe2 className="w-5 h-5" />,
  'bookkeeping': <FileSpreadsheet className="w-5 h-5" />,
  'payroll-management': <Users className="w-5 h-5" />,
  'income-tax-services': <Receipt className="w-5 h-5" />,
  'gst-services': <Calculator className="w-5 h-5" />,
  'roc-compliance': <Landmark className="w-5 h-5" />,
  'statutory-compliance': <Scale className="w-5 h-5" />,
  'financial-planning': <TrendingUp className="w-5 h-5" />,

  // DSI Estates
  'property-management': <Building2 className="w-5 h-5" />,
  'builders-and-developers': <Building2 className="w-5 h-5" />,
  'property-documentation': <FileCheck className="w-5 h-5" />,
  'deed-execution': <Scale className="w-5 h-5" />,
  'estate-support-services': <ShieldCheck className="w-5 h-5" />,

  // Legal Consultancy
  'contracts-and-agreements': <FileText className="w-5 h-5" />,
  'civil-law-services': <Scale className="w-5 h-5" />,
  'family-law-services': <HeartHandshake className="w-5 h-5" />,
  'criminal-law-services': <ShieldAlert className="w-5 h-5" />,
  'rera-compliance': <Gavel className="w-5 h-5" />,
};

interface ServicesOverviewProps {
  onSelectService?: (serviceName: string) => void;
}

export default function ServicesOverview({ onSelectService }: ServicesOverviewProps = {}) {
  const [filter, setFilter] = useState<'all' | 'accountant' | 'estates' | 'legal'>('all');

  const allServices = [
    ...COMPANY_CONFIG.ACCOUNTANT_SERVICES,
    ...COMPANY_CONFIG.DSI_ESTATES,
    ...COMPANY_CONFIG.LEGAL_SERVICES,
  ];

  const displayedServices =
    filter === 'all'
      ? allServices
      : filter === 'accountant'
      ? COMPANY_CONFIG.ACCOUNTANT_SERVICES
      : filter === 'estates'
      ? COMPANY_CONFIG.DSI_ESTATES
      : COMPANY_CONFIG.LEGAL_SERVICES;

  return (
    <section
      id="services"
      className="bg-[#121417] text-white py-16 sm:py-24 border-b border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MAS LLP Inspired Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-800">
          <div>
            {/* Gold Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c89f56]/10 border border-[#c89f56]/30 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c89f56]" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#c89f56]">
                What We Do
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white">
              Practice Areas & Services
            </h2>
          </div>

          {/* Clean Segmented Tab Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 self-start md:self-end">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#c89f56] text-[#0f1114] font-semibold shadow-xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All ({allServices.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('accountant')}
              className={`px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase transition-colors cursor-pointer ${
                filter === 'accountant'
                  ? 'bg-[#c89f56] text-[#0f1114] font-semibold shadow-xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Ansari & Co. ({COMPANY_CONFIG.ACCOUNTANT_SERVICES.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('estates')}
              className={`px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase transition-colors cursor-pointer ${
                filter === 'estates'
                  ? 'bg-[#c89f56] text-[#0f1114] font-semibold shadow-xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              DSI Estates ({COMPANY_CONFIG.DSI_ESTATES.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('legal')}
              className={`px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase transition-colors cursor-pointer ${
                filter === 'legal'
                  ? 'bg-[#c89f56] text-[#0f1114] font-semibold shadow-xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Legal ({COMPANY_CONFIG.LEGAL_SERVICES.length})
            </button>
          </div>
        </div>

        {/* Clean, Scannable MAS LLP Style Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-8">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="bg-zinc-900/60 border border-zinc-800/80 p-6 flex flex-col justify-between hover:border-[#c89f56]/50 hover:bg-zinc-900 transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-zinc-800 border border-zinc-700/60 text-[#c89f56] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {SERVICE_ICONS[service.id] || <Scale className="w-5 h-5" />}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {service.category === 'accountant'
                      ? 'Ansari & Co.'
                      : service.category === 'estates'
                      ? 'DSI Estates'
                      : 'Legal Advisory'}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[#c89f56] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Software / Deliverable Pills */}
                {service.deliverables && service.deliverables.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-400 truncate max-w-[180px]">
                  {service.tagline}
                </span>
                {onSelectService ? (
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#c89f56] group-hover:text-white transition-colors cursor-pointer shrink-0"
                  >
                    <span>Enquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#c89f56] group-hover:text-white transition-colors shrink-0"
                  >
                    <span>Enquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Action Banner */}
        <div className="mt-12 p-6 bg-zinc-900/40 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-semibold text-white">
              Expanding to India, needing Property Oversight, or requiring Legal Counsel?
            </h4>
            <p className="text-xs text-zinc-400">
              Speak directly with Amjad Ansari and our practice directors in Bangalore.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-[#c89f56] hover:bg-[#b88f46] text-[#0f1114] text-xs font-semibold tracking-wider uppercase transition-colors shrink-0"
          >
            Get in Touch →
          </Link>
        </div>
      </div>
    </section>
  );
}
