import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import MobileActionPill from '@/components/MobileActionPill';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Contact & Consultations | Ansari & Co. & DSI Estates — Amjad Ansari, Bangalore',
  description:
    'Contact Amjad Ansari at #21, 3rd Cross, Rahmath Nagar, Bangalore-560 032 for Income Tax, GST, ROC compliance, investment planning, or DSI Estates building development.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0f1114] text-zinc-100 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28">
        <div className="bg-[#121417] border-b border-zinc-800 py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-[#c89f56]">Contact</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-3">
              Contact Ansari & Co. & DSI Estates
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
              Connect directly with Amjad Ansari for Income Tax, GST, ROC compliance, investments planning, or DSI Estates building and property development in Bangalore.
            </p>
          </div>
        </div>

        <Suspense fallback={<div className="py-20 text-center text-zinc-400">Loading form...</div>}>
          <ContactSection />
        </Suspense>
        
        <MapSection />
      </main>

      <Footer />
      <MobileActionPill />
    </div>
  );
}
