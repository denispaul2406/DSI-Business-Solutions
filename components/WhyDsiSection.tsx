'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Lock, CalendarCheck, UserCheck, ShieldAlert } from 'lucide-react';

export default function WhyDsiSection() {
  const pillars = [
    {
      icon: ShieldAlert,
      title: 'Statutory Vigilance',
      description: 'Continuous monitoring of GST circulars, Direct Tax notifications, and MCA amendments to ensure your business remains perpetually compliant.',
    },
    {
      icon: Lock,
      title: 'Confidentiality & Discretion',
      description: 'Strict non-disclosure standards safeguarding financial statements, executive payroll registers, and private property title chains.',
    },
    {
      icon: CalendarCheck,
      title: 'Calendar Discipline',
      description: 'Dedicated filing schedules with advance internal review cutoff dates, eliminating eleventh-hour penalties or portal bottlenecks.',
    },
    {
      icon: UserCheck,
      title: 'Dedicated Practice Point',
      description: 'Direct communication with seasoned tax consultants and document specialists rather than rotating anonymous call centers.',
    },
  ];

  return (
    <section
      id="why-dsi"
      className="bg-[#fafaf8] text-zinc-900 py-14 sm:py-20 lg:py-24 border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
          <div className="max-w-2xl">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[#b3883b] block mb-2 sm:mb-3">
              THE DSI ADVANTAGE
            </span>
            <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-zinc-900 leading-tight">
              Why Businesses & Property Owners Choose DSI
            </h2>
          </div>
          <p className="text-xs sm:text-base text-zinc-600 max-w-md leading-relaxed">
            A balanced standard of institutional rigor, prompt turnaround, and personalized professional attention.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 bg-white border border-zinc-200/90 shadow-xs hover:border-[#b3883b] transition-all"
              >
                <div className="w-10 h-10 rounded-sm bg-zinc-100 flex items-center justify-center text-[#b3883b] mb-4 sm:mb-5 border border-zinc-200">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-zinc-900 mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
