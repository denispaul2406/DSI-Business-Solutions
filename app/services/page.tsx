import type { Metadata } from 'next';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import ServicesHub from '@/components/ServicesHub';
import Footer from '@/components/Footer';
import MobileActionPill from '@/components/MobileActionPill';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | Ansari & Co. (Auditors) & DSI Estates (Real Estate) — Amjad Ansari, Bangalore',
  description:
    'Explore two specialized practice divisions: Ansari & Co. (Auditors and Tax Consultants) and DSI Estates (Builders & Developers) led by Amjad Ansari in Bangalore.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0f1114] text-zinc-100 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Breadcrumb Header */}
        <div className="bg-[#121417] border-b border-zinc-800 py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-[#c89f56]">Services</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-3">
              Services & Practice Divisions
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
              Select between <span className="text-[#c89f56]">Auditing & Tax Consultation</span> (Ansari & Co.) and <span className="text-[#c89f56]">Real Estate & Building Development</span> (DSI Estates) led by Amjad Ansari in Bangalore.
            </p>
          </div>
        </div>

        <Suspense fallback={<div className="py-20 text-center text-zinc-400 font-mono">Loading practice areas...</div>}>
          <ServicesHub />
        </Suspense>
      </main>

      <Footer />
      <MobileActionPill />
    </div>
  );
}

