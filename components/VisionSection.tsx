'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, TrendingUp, Handshake, Target } from 'lucide-react';

export default function VisionSection() {
  return (
    <section
      id="vision"
      className="bg-[#121417] text-white py-16 sm:py-24 border-b border-zinc-800 relative overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gold Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c89f56]/10 border border-[#c89f56]/30 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c89f56]" />
          <span className="text-[11px] font-semibold tracking-widest uppercase text-[#c89f56]">
            Our Vision
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Bold Vision Statement */}
          <div className="lg:col-span-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white leading-tight mb-6">
              Empowering Enterprises & Estates With Confidence
            </h2>

            <div className="p-5 bg-zinc-900/90 border-l-2 border-[#c89f56] border-y border-r border-zinc-800">
              <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed italic">
                “Statutory compliance is not an obstacle to commerce—when managed with precision, structured books and transparent reporting form the bedrock upon which enterprises expand.”
              </p>
            </div>
          </div>

          {/* Right Column: 3 Sleek Commitments */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-sm text-zinc-400 leading-relaxed font-normal">
              We view client engagements as long-term relationships built on mutual trust, meticulous documentation, and unyielding accuracy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-zinc-900/70 border border-zinc-800">
                <Target className="w-5 h-5 text-[#c89f56] mb-2" />
                <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                  Precision First
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Zero calculation errors and verified statutory accuracy.
                </p>
              </div>

              <div className="p-4 bg-zinc-900/70 border border-zinc-800">
                <TrendingUp className="w-5 h-5 text-[#c89f56] mb-2" />
                <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                  Efficient Scale
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Fast turnaround cycles and simplified compliance filing.
                </p>
              </div>

              <div className="p-4 bg-zinc-900/70 border border-zinc-800">
                <Handshake className="w-5 h-5 text-[#c89f56] mb-2" />
                <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                  Long-Term Trust
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Dedicated advisory continuity through all growth stages.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#c89f56] hover:text-white transition-colors"
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
