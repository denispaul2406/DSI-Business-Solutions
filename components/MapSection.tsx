'use client';

import React from 'react';
import { MapPin, Navigation, ExternalLink, Building } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/company-config';

export default function MapSection() {
  return (
    <section
      id="visit-us"
      className="bg-[#121417] text-white py-14 sm:py-20 lg:py-24 border-b border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-end pb-8 sm:pb-10 border-b border-zinc-800 mb-8 sm:mb-10">
          <div className="lg:col-span-7">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[#c89f56] block mb-2">
              LOCATION & ACCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
              Visit Us
            </h2>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <a
              href={COMPANY_CONFIG.MAP_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#c89f56] hover:bg-[#b88f46] text-[#0f1114] text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Address and Map Display Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#16181d] border border-zinc-800 p-4 sm:p-8">
          {/* Address Panel */}
          <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-800 pb-6 lg:pb-0 lg:pr-6">
            <div>
              <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider mb-3">
                <Building className="w-4 h-4 text-[#c89f56]" />
                <span>Firm Headquarters</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-1">
                {COMPANY_CONFIG.COMPANY_NAME}
              </h3>
              <p className="text-xs font-mono text-[#c89f56] uppercase tracking-wider mb-3">
                {COMPANY_CONFIG.TAX_FIRM_NAME} • {COMPANY_CONFIG.ESTATES_FIRM_NAME}
              </p>
              <p className="text-sm font-mono text-zinc-300 leading-relaxed mb-4">
                {COMPANY_CONFIG.ADDRESS_DISPLAY}
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                Consultations led by {COMPANY_CONFIG.FOUNDER_NAME}. In-person meetings are hosted by prior appointment at our Rahmath Nagar practice office in Bangalore.
              </p>
            </div>

            <div className="p-3.5 bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
              <span className="text-[#c89f56] font-mono font-bold block mb-1">
                BANGALORE PRACTICE HQ
              </span>
              <p className="text-[11px] text-zinc-400">
                #21, 3rd Cross, Rahmath Nagar, Bangalore-560 032. Conveniently located near R.T. Nagar and Ganganagar.
              </p>
            </div>
          </div>

          {/* Styled Editorial Map Canvas Placeholder */}
          <div className="lg:col-span-8 relative min-h-[280px] sm:min-h-[360px] bg-[#0c0d0f] border border-zinc-800 flex items-center justify-center overflow-hidden p-4">
            {/* Architectural Grid & Roads Schematic */}
            <svg
              className="absolute inset-0 w-full h-full opacity-30"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
            >
              <defs>
                <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#27272a" strokeWidth="0.75" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#map-grid)" />
              
              {/* Arterial roads */}
              <line x1="0" y1="120" x2="100%" y2="120" stroke="#3f3f46" strokeWidth="3" />
              <line x1="0" y1="240" x2="100%" y2="240" stroke="#3f3f46" strokeWidth="2" />
              <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#3f3f46" strokeWidth="3" />
              <line x1="70%" y1="0" x2="70%" y2="100%" stroke="#3f3f46" strokeWidth="2" />
              
              {/* Subtle block outlines */}
              <rect x="35%" y="40" width="120" height="70" fill="#18181b" stroke="#27272a" />
              <rect x="52%" y="135" width="90" height="90" fill="#18181b" stroke="#27272a" />
              <rect x="10%" y="135" width="80" height="90" fill="#18181b" stroke="#27272a" />
            </svg>

            {/* Centered Map Marker Badge */}
            <div className="relative z-10 flex flex-col items-center p-5 sm:p-6 bg-zinc-900/95 border border-zinc-700 w-[92%] max-w-xs text-center shadow-xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#c89f56]/20 border border-[#c89f56] flex items-center justify-center text-[#c89f56] mb-3 shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-[#c89f56] mb-1">
                BANGALORE OFFICE
              </span>
              <p className="text-sm font-medium text-white mb-1.5">
                Rahmath Nagar, Bangalore
              </p>
              <p className="text-xs text-zinc-400 font-mono mb-3">
                {COMPANY_CONFIG.MAP_LOCATION}
              </p>
              <a
                href={COMPANY_CONFIG.MAP_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] text-xs font-semibold uppercase tracking-wider text-[#c89f56] hover:text-white inline-flex items-center justify-center gap-1.5 transition-colors py-2 px-3 bg-zinc-800/80 border border-zinc-700/80 w-full"
              >
                <span>Launch in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
