'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Send } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/company-config';

interface MobileActionPillProps {
  onEnquireClick?: () => void;
}

export default function MobileActionPill({ onEnquireClick }: MobileActionPillProps) {
  return (
    <div
      id="mobile-persistent-action-bar"
      className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-[#0f1114]/95 backdrop-blur-md border-t border-zinc-800 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-2xl"
      aria-label="Quick mobile contact actions"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call CTA */}
        <a
          href={COMPANY_CONFIG.PHONE_TEL}
          id="mobile-bar-call"
          className="min-h-[48px] flex flex-col items-center justify-center py-2 px-1 rounded-sm bg-zinc-900 border border-zinc-800 text-zinc-100 active:bg-zinc-800 transition-colors text-center focus:outline-hidden"
          aria-label="Call DSI Business Solutions"
        >
          <Phone className="w-4 h-4 text-[#c89f56] mb-0.5" />
          <span className="text-[11px] font-medium tracking-wide uppercase">Call Us</span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href={COMPANY_CONFIG.WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bar-whatsapp"
          className="min-h-[48px] flex flex-col items-center justify-center py-2 px-1 rounded-sm bg-zinc-900 border border-zinc-800 text-zinc-100 active:bg-zinc-800 transition-colors text-center focus:outline-hidden"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-[#25D366] mb-0.5" />
          <span className="text-[11px] font-medium tracking-wide uppercase">WhatsApp</span>
        </a>

        {/* Enquire CTA */}
        <Link
          href="/contact#enquiry-form"
          onClick={() => {
            if (onEnquireClick) onEnquireClick();
          }}
          id="mobile-bar-enquire"
          className="min-h-[48px] flex flex-col items-center justify-center py-2 px-1 rounded-sm bg-[#c89f56] text-[#0f1114] active:bg-[#b88f46] transition-colors text-center font-semibold focus:outline-hidden"
          aria-label="Send an Enquiry"
        >
          <Send className="w-4 h-4 mb-0.5 stroke-[2.5]" />
          <span className="text-[11px] font-semibold tracking-wide uppercase">Enquire</span>
        </Link>
      </div>
    </div>
  );
}
