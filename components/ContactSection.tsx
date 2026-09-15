'use client';

import React, { Suspense } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, MessageSquare } from 'lucide-react';
import ContactForm from './ContactForm';
import { COMPANY_CONFIG } from '@/lib/company-config';

interface ContactSectionProps {
  preselectedService?: string;
}

export default function ContactSection({ preselectedService }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="bg-[#fafaf8] text-zinc-900 py-16 sm:py-24 border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MAS LLP Inspired Section Header */}
        <div className="max-w-3xl mb-12">
          {/* Gold Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c89f56]/15 border border-[#c89f56]/40 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b3883b]" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#966d24]">
              Get In Touch
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-zinc-900 leading-tight mb-2">
            Schedule a Consultation
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            Reach out for tax planning, company secretarial filings, or property title advice. We reply promptly.
          </p>
        </div>

        {/* 2-Column Responsive Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Phone Card */}
            <div className="p-5 bg-white border border-zinc-200 shadow-xs hover:border-[#b3883b] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-zinc-100 flex items-center justify-center text-[#b3883b] shrink-0 border border-zinc-200">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
                    DIRECT CALL
                  </span>
                  <h3 className="text-sm font-semibold text-zinc-900">
                    Phone Consultation
                  </h3>
                  <a
                    href={COMPANY_CONFIG.PHONE_TEL}
                    className="inline-flex items-center gap-1.5 text-sm font-mono font-medium text-zinc-900 hover:text-[#b3883b] transition-colors pt-1"
                  >
                    <span>{COMPANY_CONFIG.PHONE}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct */}
            <div className="p-5 bg-white border border-zinc-200 shadow-xs hover:border-[#b3883b] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-200">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-600 uppercase">
                    INSTANT CHAT
                  </span>
                  <h3 className="text-sm font-semibold text-zinc-900">
                    WhatsApp Message
                  </h3>
                  <a
                    href={COMPANY_CONFIG.WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 hover:underline pt-1"
                  >
                    <span>Chat with Amjad Ansari →</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 bg-white border border-zinc-200 shadow-xs hover:border-[#b3883b] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-zinc-100 flex items-center justify-center text-[#b3883b] shrink-0 border border-zinc-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
                    EMAIL INQUIRIES
                  </span>
                  <h3 className="text-sm font-semibold text-zinc-900">
                    Official Email
                  </h3>
                  <a
                    href={COMPANY_CONFIG.EMAIL_MAILTO}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-medium text-zinc-900 hover:text-[#b3883b] transition-colors pt-1 truncate max-w-full"
                  >
                    <span className="truncate">{COMPANY_CONFIG.EMAIL}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bangalore Address Card */}
            <div className="p-5 bg-white border border-zinc-200 shadow-xs hover:border-[#b3883b] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-zinc-100 flex items-center justify-center text-[#b3883b] shrink-0 border border-zinc-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
                    HEADQUARTERS
                  </span>
                  <h3 className="text-sm font-semibold text-zinc-900">
                    Bangalore Office
                  </h3>
                  <p className="text-xs text-zinc-600 font-mono leading-relaxed pt-1">
                    {COMPANY_CONFIG.ADDRESS_DISPLAY}
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-4 bg-zinc-100 border border-zinc-200 flex items-center gap-3 text-xs text-zinc-600">
              <Clock className="w-4 h-4 text-[#b3883b] shrink-0" />
              <div>
                <span className="font-semibold text-zinc-800">Hours:</span>{' '}
                <span>{COMPANY_CONFIG.BUSINESS_HOURS}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-8 bg-white border border-zinc-200 text-zinc-400 text-sm">Loading consultation form...</div>}>
              <ContactForm preselectedService={preselectedService} />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
