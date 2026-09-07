'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, TrendingUp, Handshake, Target } from 'lucide-react';

export default function VisionSection() {
  return (
    <section
      id="vision"
      className="bg-[#121417] text-white py-14 sm:py-20 lg:py-28 border-b border-zinc-800 relative overflow-hidden"
    >
      {/* Background Accent Grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <span className="w-2 h-2 rounded-full bg-[#c89f56]" />
          <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[#c89f56]">
            OUR INSTITUTIONAL VISION
          </span>
        </div>

        {/* Asymmetrical Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Bold Typographic Vision Statement */}
          <div className="lg:col-span-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.14] mb-6 sm:mb-8">
              Helping Businesses Move Forward With Confidence.
            </h2>

            <div className="p-4 sm:p-6 bg-zinc-900/90 border-l-2 border-[#c89f56] border-y border-r border-zinc-800">
              <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-normal leading-relaxed italic">
                “Statutory compliance is not an obstacle to commerce—when executed with precision, structured books and transparent reporting form the very bedrock upon which resilient enterprises expand.”
              </p>
            </div>
          </div>

          {/* Right Column: Supporting Vision Narrative & Commitments */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed font-normal">
              At DSI Business Solutions, our vision under Amjad Ansari unites Ansari & Co. and DSI Estates to deliver precise tax consulting, statutory compliance, investment planning, and quality property development across Bangalore.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed font-normal">
              We view client engagements as multi-year professional relationships built on mutual trust, meticulous documentation, and unyielding statutory accuracy. Whether managing complex GST and ROC compliances or executing sensitive real estate projects, our objective is absolute peace of mind.
            </p>

            {/* 3 Vision Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-2 sm:pt-4">
              <div className="p-3.5 sm:p-4 bg-zinc-900/60 border border-zinc-800">
                <Target className="w-5 h-5 text-[#c89f56] mb-2" />
                <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                  Precision First
                </h3>
                <p className="text-xs text-zinc-400 leading-normal">
                  Zero tolerance for calculation discrepancies or statutory omissions.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-zinc-900/60 border border-zinc-800">
                <TrendingUp className="w-5 h-5 text-[#c89f56] mb-2" />
                <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                  Efficient Scale
                </h3>
                <p className="text-xs text-zinc-400 leading-normal">
                  Rapid resolution cycles and streamlined documentation workflows.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 bg-zinc-900/60 border border-zinc-800">
                <Handshake className="w-5 h-5 text-[#c89f56] mb-2" />
                <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                  Long-Term Trust
                </h3>
                <p className="text-xs text-zinc-400 leading-normal">
                  Consistent advisory continuity across all stages of enterprise growth.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#c89f56] hover:text-white transition-colors py-2"
              >
                <span>Partner with DSI Business Solutions</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
