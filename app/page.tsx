'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import AboutSection from '@/components/AboutSection';
import VisionSection from '@/components/VisionSection';
import WhyDsiSection from '@/components/WhyDsiSection';
import ContactCtaBanner from '@/components/ContactCtaBanner';
import ContactSection from '@/components/ContactSection';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import MobileActionPill from '@/components/MobileActionPill';

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<string | undefined>();

  const handleSelectServiceForEnquiry = (serviceName: string) => {
    setSelectedService(serviceName);
    // Smooth scroll to contact
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1114] text-zinc-100 flex flex-col selection:bg-[#c89f56] selection:text-[#0f1114]">
      {/* 1. Sticky Navigation */}
      <Navbar onOpenEnquiry={() => handleSelectServiceForEnquiry('General Enquiry')} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Services Overview (2 Types: Auditing & Real Estate) */}
        <ServicesOverview />

        {/* 4. About Us Preview */}
        <AboutSection />

        {/* 5. Vision & Values */}
        <VisionSection />

        {/* 6. Why DSI Approach */}
        <WhyDsiSection />

        {/* 7. Contact CTA Banner */}
        <ContactCtaBanner />

        {/* 8. Contact Information & Contact Form */}
        <ContactSection preselectedService={selectedService} />

        {/* 9. Google Maps / Location */}
        <MapSection />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* 11. Persistent Mobile Bottom Action Bar */}
      <MobileActionPill />
    </div>
  );
}
