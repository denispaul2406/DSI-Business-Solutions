'use client';

import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  variant?: 'dark' | 'light' | 'monochrome';
  className?: string;
  showSubtitle?: boolean;
  hideSubtitleOnMobile?: boolean;
}

export default function BrandLogo({
  variant = 'light',
  className = '',
  showSubtitle = true,
  hideSubtitleOnMobile = false,
}: BrandLogoProps) {
  const isDark = variant === 'dark';
  
  return (
    <Link
      href="/"
      id="brand-logo-link"
      className={`group inline-flex items-center gap-2.5 sm:gap-3.5 focus:outline-hidden ${className}`}
      aria-label="DSI Business Solutions - Home"
    >
      {/* Precision Geometric Monogram */}
      <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-[#121417] border border-[#2a2d32] shadow-xs group-hover:border-[#c89f56] transition-colors duration-300 shrink-0">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 sm:w-6 sm:h-6"
          aria-hidden="true"
        >
          {/* Subtle architectural foundation grid */}
          <rect x="4" y="4" width="28" height="28" stroke="#33383f" strokeWidth="0.75" opacity="0.6" rx="2" />
          
          {/* DSI Estates Roof Monogram Outline (from business card) */}
          <path
            d="M5 15L18 5L31 15"
            stroke="#c89f56"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Roof Apex Ring / Chimney */}
          <circle cx="21" cy="7.5" r="2" stroke="#ffffff" strokeWidth="1.5" fill="#121417" />
          
          {/* Base foundation line */}
          <line x1="5" y1="30" x2="31" y2="30" stroke="#52525b" strokeWidth="1.5" />
          
          {/* Letter D */}
          <path
            d="M9 16H15C18 16 20 18 20 20.5C20 23 18 25 15 25H9V16Z"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="square"
          />
          {/* Letter S diagonal / flow */}
          <path
            d="M17 18.5C17 17.5 18.5 16.5 21 16.5C23.5 16.5 25 17.5 25 19C25 21 21.5 22 19 23.5C17.5 24.5 17 25.5 17 27C17 28.5 19 29.5 21.5 29.5C24.5 29.5 26.5 28.5 26.5 27"
            stroke="#c89f56"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typography Hierarchy */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-semibold tracking-[0.14em] text-sm sm:text-base leading-none uppercase ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
          >
            DSI
          </span>
          <span
            className={`text-[11px] sm:text-[12px] font-medium tracking-[0.16em] uppercase whitespace-nowrap ${
              isDark ? 'text-zinc-300' : 'text-zinc-700'
            }`}
          >
            Business Solutions
          </span>
        </div>
        
        {showSubtitle && (
          <span
            className={`text-[9px] sm:text-[9.5px] font-medium tracking-[0.12em] uppercase mt-0.5 sm:mt-1 whitespace-nowrap ${
              hideSubtitleOnMobile ? 'hidden sm:block' : ''
            } ${
              isDark ? 'text-zinc-400' : 'text-zinc-500'
            }`}
          >
            Ansari & Co. • DSI Estates (Builders & Developers)
          </span>
        )}
      </div>
    </Link>
  );
}
