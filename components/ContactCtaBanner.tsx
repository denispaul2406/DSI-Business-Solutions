'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, PhoneCall, Mail } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/company-config';

export default function ContactCtaBanner() {
  return (
    <section
      id="contact-cta-banner"
      className="bg-[#0f1114] text-white py-12 sm:py-16 lg:py-20 border-b border-zinc-800 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-r from-zinc-900 via-[#15171b] to-zinc-900 border border-zinc-800 p-5 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#c89f56] block mb-2.5">
                COMMENCE ENGAGEMENT
              </span>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white leading-tight mb-3 sm:mb-4">
                Structured Accounting & Property Diligence for Your Operations.
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-zinc-400 max-w-2xl leading-relaxed">
                Schedule a confidential introductory discussion with our tax advisors and estate specialists. We analyze your requirements and structure a dedicated service plan.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 sm:justify-start lg:items-end w-full">
              <Link
                href="/contact#enquiry-form"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#c89f56] hover:bg-[#b88f46] text-[#0f1114] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors shadow-md text-center"
              >
                <span>Submit Detailed Enquiry</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              <a
                href={COMPANY_CONFIG.PHONE_TEL}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs font-medium tracking-wider uppercase transition-colors text-center"
              >
                <PhoneCall className="w-4 h-4 text-[#c89f56]" />
                <span>Call Us Direct</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
