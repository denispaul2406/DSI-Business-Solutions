import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import WhyDsiSection from '@/components/WhyDsiSection';
import ContactCtaBanner from '@/components/ContactCtaBanner';
import Footer from '@/components/Footer';
import MobileActionPill from '@/components/MobileActionPill';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Ansari & Co. & DSI Estates — Amjad Ansari, Bangalore',
  description:
    'Learn about Ansari & Co. (Auditors & Tax Consultants) and DSI Estates (Builders & Developers), led by Amjad Ansari in Bangalore.',
};

export default function AboutPage() {
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
              <span className="text-[#c89f56]">About</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-3">
              About Ansari & Co. & DSI Estates
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
              Professional auditing, Income Tax, GST, ROC compliance, and turnkey building development led by Amjad Ansari in Bangalore.
            </p>
          </div>
        </div>

        <AboutSection />
        <WhyDsiSection />
        <ContactCtaBanner />
      </main>

      <Footer />
      <MobileActionPill />
    </div>
  );
}
