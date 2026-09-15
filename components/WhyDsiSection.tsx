'use client';

import React from 'react';
import Link from 'next/link';
import { Lock, CalendarCheck, UserCheck, ShieldCheck, Check } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/company-config';

export default function WhyDsiSection() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Statutory Vigilance',
      desc: 'Proactive tracking of Income Tax circulars, GST notifications, and MCA corporate filing schedules.',
    },
    {
      icon: Lock,
      title: 'Fiduciary Discretion',
      desc: 'Uncompromising confidentiality protecting your financial accounts, tax history, and deed records.',
    },
    {
      icon: CalendarCheck,
      title: 'Zero Late-Fee Record',
      desc: 'Calendar discipline ensuring corporate tax returns, ROC files, and registrations are submitted early.',
    },
    {
      icon: UserCheck,
      title: 'Direct Senior Access',
      desc: 'Work directly with principal Amjad Ansari rather than junior associates or call centers.',
    },
  ];

  return (
    <section
      id="why-dsi"
      className="bg-[#f8f9fa] text-zinc-900 py-16 sm:py-24 border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Gold Pill */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c89f56]/15 border border-[#c89f56]/40 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b3883b]" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#966d24]">
                Why Us — Our Advantage
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-zinc-900">
              Precision Standards Built on Trust
            </h2>
          </div>
          <p className="text-sm text-zinc-600 max-w-md leading-relaxed">
            A balanced combination of statutory rigor, prompt execution, and direct personal attention across accounting and property affairs.
          </p>
        </div>

        {/* 4 Clean Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white border border-zinc-200/90 shadow-xs hover:border-[#b3883b] hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 bg-zinc-50 border border-zinc-200 text-[#b3883b] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-zinc-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Client Guarantee Strip */}
        <div className="p-6 bg-white border border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-zinc-700">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              100% On-Time Filing
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              Verified Sub-Registrar Conveyance
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              Bangalore Headquartered
            </span>
          </div>

          <Link
            href="/contact"
            className="text-xs font-semibold tracking-wider uppercase text-[#b3883b] hover:text-[#966d24] transition-colors"
          >
            Schedule a Consultation →
          </Link>
        </div>
      </div>
    </section>
  );
}
