'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Scale, Shield, CheckCheck, Clock } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/company-config';

export default function TrustIntro() {
  return (
    <section
      id="trust-section"
      className="bg-[#fafaf8] text-zinc-900 py-12 sm:py-18 lg:py-24 border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Banner */}
        <div className="max-w-3xl mb-8 sm:mb-14">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[#b3883b] block mb-2 sm:mb-3">
            Fiduciary Discipline & Corporate Integrity
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 leading-snug mb-3 sm:mb-5">
            Professional expertise. Practical solutions. Reliable support.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-zinc-600 font-normal leading-relaxed">
            Led by Amjad Ansari in Bangalore, our practice combines Ansari & Co. (Auditor & Tax Consultants) and DSI Estates (Builders & Developers) to manage corporate taxation, statutory ROC compliances, investments planning, and residential & commercial property projects.
          </p>
        </div>

        {/* 4 Professional Foundations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-2 sm:pt-4">
          <div className="p-5 sm:p-6 bg-white border border-zinc-200/90 shadow-xs hover:border-[#c89f56] transition-colors">
            <div className="w-9 h-9 flex items-center justify-center bg-zinc-100 text-zinc-900 mb-4 sm:mb-5 border border-zinc-200">
              <Scale className="w-5 h-5 text-[#b3883b]" />
            </div>
            <h3 className="text-base font-semibold text-zinc-900 mb-1.5 sm:mb-2">Statutory Rigor</h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Every return, reconciliation, and audit filing is checked against current Indian regulatory standards and MCA statutes.
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-white border border-zinc-200/90 shadow-xs hover:border-[#c89f56] transition-colors">
            <div className="w-9 h-9 flex items-center justify-center bg-zinc-100 text-zinc-900 mb-4 sm:mb-5 border border-zinc-200">
              <Shield className="w-5 h-5 text-[#b3883b]" />
            </div>
            <h3 className="text-base font-semibold text-zinc-900 mb-1.5 sm:mb-2">Discreet & Confidential</h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Proprietary books of accounts, personal estate assets, and corporate filings are handled with unwavering ethical discretion.
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-white border border-zinc-200/90 shadow-xs hover:border-[#c89f56] transition-colors">
            <div className="w-9 h-9 flex items-center justify-center bg-zinc-100 text-zinc-900 mb-4 sm:mb-5 border border-zinc-200">
              <Clock className="w-5 h-5 text-[#b3883b]" />
            </div>
            <h3 className="text-base font-semibold text-zinc-900 mb-1.5 sm:mb-2">Proactive Calendar</h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Structured schedules for GST cycles, advance tax tranches, and ROC return dates prevent last-minute compliance risks.
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-white border border-zinc-200/90 shadow-xs hover:border-[#c89f56] transition-colors">
            <div className="w-9 h-9 flex items-center justify-center bg-zinc-100 text-zinc-900 mb-4 sm:mb-5 border border-zinc-200">
              <CheckCheck className="w-5 h-5 text-[#b3883b]" />
            </div>
            <h3 className="text-base font-semibold text-zinc-900 mb-1.5 sm:mb-2">Integrated Advisory</h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              A unified point of contact bridging daily bookkeeping, corporate tax obligations, and long-term estate property documentation.
            </p>
          </div>
        </div>

        {/* Supporting Trust Action Strip */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-zinc-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-zinc-500">
            Seeking professional advice for your company or estate documentation?
          </p>
          <Link
            href="/contact"
            className="min-h-[44px] inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-zinc-900 hover:text-[#b3883b] transition-colors py-1"
          >
            <span>Request Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
