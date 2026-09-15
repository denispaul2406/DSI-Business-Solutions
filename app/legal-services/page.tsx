import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import LegalServicesSection from '@/components/LegalServicesSection';
import ContactCtaBanner from '@/components/ContactCtaBanner';
import Footer from '@/components/Footer';
import MobileActionPill from '@/components/MobileActionPill';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Legal Consultancy & Litigation Support | Civil, Family, Criminal & RERA — Bangalore',
  description:
    'Strategic legal consultancy, commercial contract vetting, civil suits, family law, criminal defense, and RERA tribunal representation in Bangalore.',
};

export default function LegalServicesPage() {
  return (
    <div className="min-h-screen bg-[#0f1114] text-zinc-100 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28">
        <div className="bg-[#121417] border-b border-zinc-800 py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-[#c89f56]">Legal Advisory</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-3">
              Legal Consultancy & Advisory
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
              Corporate commercial agreements, civil dispute suits, family law, criminal defense & bail, and Karnataka RERA compliance.
            </p>
          </div>
        </div>

        <LegalServicesSection isStandalonePage={true} />
        <ContactCtaBanner />
      </main>

      <Footer />
      <MobileActionPill />
    </div>
  );
}
