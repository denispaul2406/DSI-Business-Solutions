'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, Search, Filter } from 'lucide-react';
import { COMPANY_CONFIG, ServiceItem } from '@/lib/company-config';

interface AccountantServicesSectionProps {
  onSelectServiceForEnquiry?: (serviceName: string) => void;
  isStandalonePage?: boolean;
}

export default function AccountantServicesSection({
  onSelectServiceForEnquiry,
  isStandalonePage = false,
}: AccountantServicesSectionProps) {
  const [filter, setFilter] = useState<'all' | 'tax' | 'compliance' | 'planning' | 'accounting'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = COMPANY_CONFIG.ACCOUNTANT_SERVICES.filter((svc) => {
    if (filter === 'tax') {
      return ['income-tax-services', 'gst-services'].includes(svc.id);
    }
    if (filter === 'compliance') {
      return ['statutory-compliance', 'roc-compliance'].includes(svc.id);
    }
    if (filter === 'planning') {
      return ['investments-planning', 'business-planning', 'financial-planning'].includes(svc.id);
    }
    if (filter === 'accounting') {
      return ['bookkeeping', 'payroll-management', 'bank-reconciliation'].includes(svc.id);
    }
    return true;
  });

  return (
    <section
      id="accounting-services"
      className="bg-[#fafaf8] text-zinc-900 py-20 sm:py-24 lg:py-28 border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#b3883b]">
              PRACTICE 01 • ANSARI & CO. (AUDITOR & TAX CONSULTANTS)
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 leading-[1.18] mb-5">
            Audit, Taxation & Financial Planning Services
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            Managed by Amjad Ansari, delivering audit-standard precision across Income Tax, GST, ROC statutory compliances, investment planning, and business advisory.
          </p>
        </div>

        {/* Filter Pills - Horizontally swipeable on mobile, wrapping on desktop */}
        <div className="pb-6 border-b border-zinc-200 mb-8">
          <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 sm:hidden">
            <Filter className="w-3.5 h-3.5" /> <span>Filter Practice Area:</span>
          </div>
          <div className="flex overflow-x-auto sm:flex-wrap items-center gap-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
            <span className="hidden sm:flex text-xs font-mono uppercase tracking-wider text-zinc-400 mr-2 items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {[
              { id: 'all', label: 'All Services (10)' },
              { id: 'tax', label: 'Taxation & GST (2)' },
              { id: 'compliance', label: 'ROC & Compliance (2)' },
              { id: 'planning', label: 'Financial & Planning (3)' },
              { id: 'accounting', label: 'Accounting & Payroll (3)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`min-h-[44px] px-4 py-2.5 text-xs font-medium tracking-wide uppercase whitespace-nowrap transition-all shrink-0 ${
                  filter === tab.id
                    ? 'bg-zinc-900 text-white'
                    : 'bg-white text-zinc-700 border border-zinc-300/80 hover:bg-zinc-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sophisticated Service Grid - Awards-Level Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-zinc-200/90 p-5 sm:p-8 flex flex-col justify-between hover:border-[#b3883b] hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Header with Number & Category */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-zinc-100">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#b3883b]">
                    {service.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                    Statutory Accounting
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="text-xl sm:text-2xl font-medium text-zinc-900 tracking-tight mb-2 group-hover:text-zinc-900">
                  {service.title}
                </h3>

                {/* Tagline / One-Line Description */}
                <p className="text-xs sm:text-sm font-medium text-zinc-500 mb-3.5">
                  {service.tagline}
                </p>

                {/* Full Concise Description */}
                <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Key Deliverables Checkpoints */}
                <div className="space-y-2 pt-4 border-t border-zinc-100 mb-5">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    Key Scope Deliverables
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                        <Check className="w-3.5 h-3.5 text-[#b3883b] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Strip */}
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-zinc-400">
                  Custom Scope
                </span>
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}#enquiry-form`}
                  onClick={() => {
                    if (onSelectServiceForEnquiry) {
                      onSelectServiceForEnquiry(service.title);
                    }
                  }}
                  className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-zinc-900 hover:text-[#b3883b] transition-colors py-2 px-1"
                >
                  <span>Enquire on this service</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Comprehensive Advisory Note */}
        <div className="mt-12 p-6 sm:p-8 bg-zinc-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-zinc-800">
          <div>
            <h4 className="text-lg font-medium text-white mb-1">
              Need a bespoke corporate accounting or audit package?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              We structure custom retainers for Indian private limited companies, partnerships, LLP entities, and proprietors.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 bg-[#c89f56] hover:bg-[#b88f46] text-[#0f1114] text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            Speak with our consultants
          </Link>
        </div>
      </div>
    </section>
  );
}
