'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustIntro from '@/components/TrustIntro';
import ServicesOverview from '@/components/ServicesOverview';
import AccountantServicesSection from '@/components/AccountantServicesSection';
import DsiEstatesSection from '@/components/DsiEstatesSection';
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

        {/* 3. Trust / Introduction */}
        <TrustIntro />

        {/* 4. Services Overview */}
        <ServicesOverview />

        {/* 5. Accountant Services Preview / Grid */}
        <AccountantServicesSection
          onSelectServiceForEnquiry={handleSelectServiceForEnquiry}
        />

        {/* 6. DSI Estates Preview */}
        <DsiEstatesSection
          onSelectServiceForEnquiry={handleSelectServiceForEnquiry}
        />

        {/* 7. About DSI */}
        <AboutSection />

        {/* 8. Vision */}
        <VisionSection />

        {/* 9. Why DSI / Professional Approach */}
        <WhyDsiSection />

        {/* 10. Contact CTA Banner */}
        <ContactCtaBanner />

        {/* 11. Contact Information & Contact Form */}
        <ContactSection preselectedService={selectedService} />

        {/* 12. Google Maps / Location */}
        <MapSection />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* 14. Persistent Mobile Bottom Action Bar */}
      <MobileActionPill />
    </div>
  );
}
