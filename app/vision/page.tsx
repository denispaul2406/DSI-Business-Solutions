import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import VisionSection from '@/components/VisionSection';
import WhyDsiSection from '@/components/WhyDsiSection';
import ContactCtaBanner from '@/components/ContactCtaBanner';
import Footer from '@/components/Footer';
import MobileActionPill from '@/components/MobileActionPill';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vision & Operating Philosophy | DSI Business Solutions',
  description:
    'Helping businesses move forward with confidence. Learn about our commitment to statutory precision, long-term fiduciary relationships, and dependable compliance execution.',
};

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-[#0f1114] text-zinc-100 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28">
        <div className="bg-[#121417] border-b border-zinc-800 py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-[#c89f56]">Vision</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-3">
              Vision & Practice Philosophy
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
              Fostering enterprise stability and estate protection through unwavering statutory accuracy and long-term client partnerships.
            </p>
          </div>
        </div>

        <VisionSection />
        <WhyDsiSection />
        <ContactCtaBanner />
      </main>

      <Footer />
      <MobileActionPill />
    </div>
  );
}
