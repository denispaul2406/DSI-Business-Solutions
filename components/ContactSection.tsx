'use client';

import React, { Suspense } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';
import ContactForm from './ContactForm';
import { COMPANY_CONFIG } from '@/lib/company-config';

interface ContactSectionProps {
  preselectedService?: string;
}

export default function ContactSection({ preselectedService }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="bg-[#fafaf8] text-zinc-900 py-14 sm:py-20 lg:py-28 border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-14">
          <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[#b3883b] block mb-2 sm:mb-3">
            DIRECT ENGAGEMENT
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 leading-[1.15] mb-3 sm:mb-4">
            Let&apos;s Talk About Your Requirements.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-zinc-600 font-normal leading-relaxed">
            Have a question or need professional assistance? Get in touch with DSI Business Solutions.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            {/* CALL US Card */}
            <div className="p-5 sm:p-6 bg-white border border-zinc-200/90 shadow-xs hover:border-[#b3883b] transition-colors">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 rounded-sm bg-zinc-100 flex items-center justify-center text-[#b3883b] shrink-0 border border-zinc-200">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
                    CALL US DIRECT
                  </span>
                  <h3 className="text-base font-semibold text-zinc-900">
                    Phone Consultation
                  </h3>
                  <p className="text-xs text-zinc-500 pb-1.5">
                    Available during business hours for direct client queries.
                  </p>
                  <a
                    href={COMPANY_CONFIG.PHONE_TEL}
                    className="min-h-[44px] inline-flex items-center gap-1.5 text-sm sm:text-base font-mono font-medium text-zinc-900 hover:text-[#b3883b] transition-colors py-1"
                  >
                    <span>{COMPANY_CONFIG.PHONE}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* EMAIL US Card */}
            <div className="p-5 sm:p-6 bg-white border border-zinc-200/90 shadow-xs hover:border-[#b3883b] transition-colors">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 rounded-sm bg-zinc-100 flex items-center justify-center text-[#b3883b] shrink-0 border border-zinc-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
                    EMAIL US
                  </span>
                  <h3 className="text-base font-semibold text-zinc-900">
                    Official Enquiries
                  </h3>
                  <p className="text-xs text-zinc-500 pb-1.5">
                    Send detailed statements or brief requirements for review.
                  </p>
                  <a
                    href={COMPANY_CONFIG.EMAIL_MAILTO}
                    className="min-h-[44px] inline-flex items-center gap-1.5 text-sm sm:text-base font-mono font-medium text-zinc-900 hover:text-[#b3883b] transition-colors break-all py-1"
                  >
                    <span>{COMPANY_CONFIG.EMAIL}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            {/* ADDRESS Card */}
            <div className="p-5 sm:p-6 bg-white border border-zinc-200/90 shadow-xs hover:border-[#b3883b] transition-colors">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 rounded-sm bg-zinc-100 flex items-center justify-center text-[#b3883b] shrink-0 border border-zinc-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
                    OFFICE ADDRESS
                  </span>
                  <h3 className="text-base font-semibold text-zinc-900">
                    Physical Office
                  </h3>
                  <p className="text-xs text-zinc-600 font-mono leading-relaxed pt-1">
                    {COMPANY_CONFIG.ADDRESS_DISPLAY}
                  </p>
                  <p className="text-[11px] text-zinc-500 bg-zinc-50 p-2 border border-zinc-200 mt-2">
                    In-person consultations are hosted at our Rahmath Nagar, Bangalore office by prior appointment with Amjad Ansari.
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-4 sm:p-5 bg-zinc-100 border border-zinc-200 flex items-center gap-3.5 text-xs text-zinc-600">
              <Clock className="w-4 h-4 text-[#b3883b] shrink-0" />
              <div>
                <span className="font-semibold text-zinc-800">Hours of Operation:</span>{' '}
                <span>{COMPANY_CONFIG.BUSINESS_HOURS}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-8 bg-white border border-zinc-200 text-zinc-400 text-sm">Loading enquiry form...</div>}>
              <ContactForm preselectedService={preselectedService} />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
