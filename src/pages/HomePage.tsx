import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package } from '../types';
import { Hero } from '../components/Hero';
import { FeaturedYatras } from '../components/FeaturedYatras';
import { AboutSection } from '../components/AboutSection';
import { ShirdiSpecial } from '../components/ShirdiSpecial';
import { PilgrimageYatras } from '../components/PilgrimageYatras';
import { DomesticJourneys } from '../components/DomesticJourneys';
import { InternationalJourneys } from '../components/InternationalJourneys';
import { PromoAndReviews } from '../components/PromoAndReviews';
import { JourneyProcess } from '../components/JourneyProcess';
import { QuoteSection } from '../components/QuoteSection';
import { FaqSection } from '../components/FaqSection';
import { SEOHead } from '../components/SEOHead';
import { localBusinessSchema } from '../utils/schema';

interface HomePageProps {
  onOpenEnquiry?: (packageTitle?: string) => void;
}

export function HomePage({ onOpenEnquiry }: HomePageProps) {
  const navigate = useNavigate();

  const handleOpenEnquiry = (packageTitle?: string) => {
    if (onOpenEnquiry) {
      onOpenEnquiry(packageTitle);
    }
  };

  const handleSelectPackage = (pkg: Package) => {
    navigate(`/package/${pkg.id}`);
  };

  return (
    <div className="flex-grow">
      <SEOHead
        title="Sai Samarth Tours: Tour Packages from Bangalore | Shirdi, Puri Jagannath, Kamakhya, Indore Ujjain"
        description="Book top tour packages from Bangalore with Sai Samarth Tours. Direct flights for Shirdi VIP Darshan, Puri Jagannath Konark, Kamakhya Meghalaya, Indore Ujjain Mahakaleshwar & 3-star AC hotels."
        canonical="https://saisamarthtours.com/"
        ogImage="/shirdi-tour-hero-banner-desktop.webp"
        ogType="website"
        jsonLd={localBusinessSchema}
        keywords="sai samarth tours, sai tour, sai tours bangalore, shirdi tour package from bangalore, puri jagannath tour package from bangalore, kamakhya tour package from bangalore, indore ujjain tour package from bangalore, kamakhya with meghalaya tour package from bangalore, puri jagannath trip from bangalore, ujjain mahakaleshwar tour package, omkareshwar tour package from bangalore, tour packages from bangalore, travel agency in bangalore"
      />
      {/* 2. Hero Banner Section */}
      <Hero onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* 2.5 High-Intent Keyword Navigation Strip */}
      <section className="bg-gradient-to-r from-[#0C1F41] via-[#114088] to-[#0C1F41] text-white py-3.5 px-4 border-y border-[#F59E0B]/30 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#F59E0B]">
            <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-pulse"></span>
            <span>Top Searched Tours:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs font-bold">
            <a 
              href="/package/shirdi-tour-package-from-bangalore"
              className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#EA580C] text-white border border-white/20 transition-all hover:scale-105 shadow-xs"
            >
              🕉️ Shirdi Tour Package
            </a>
            <a 
              href="/package/puri-jagannath-konark-tour-package-from-bangalore"
              className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#EA580C] text-white border border-white/20 transition-all hover:scale-105 shadow-xs"
            >
              🌊 Puri Jagannath Tour Package
            </a>
            <a 
              href="/package/kamakhya-with-meghalaya-tour-package-from-bangalore"
              className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#EA580C] text-white border border-white/20 transition-all hover:scale-105 shadow-xs"
            >
              🌺 Kamakhya Meghalaya Package
            </a>
            <a 
              href="/package/indore-ujjain-omkareshwar-tour-package-from-bangalore"
              className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#EA580C] text-white border border-white/20 transition-all hover:scale-105 shadow-xs"
            >
              🔱 Indore Ujjain Tour Package
            </a>
            <a 
              href="/bus-packages"
              className="px-3 py-1.5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white transition-all hover:scale-105 shadow-xs"
            >
              🚌 Deluxe Bus Tours (₹15,999)
            </a>
          </div>
        </div>
      </section>

      {/* 3. About Us Section (Right after Hero banner) */}
      <AboutSection />

      {/* 4. Priority Packages (Featured Yatras) */}
      <FeaturedYatras
        onSelectPackage={handleSelectPackage}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* 4. Shirdi Special */}
      <ShirdiSpecial 
        onSelectPackage={handleSelectPackage}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* 5. Pilgrimage Yatras */}
      <PilgrimageYatras
        onSelectPackage={handleSelectPackage}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* 6. Domestic Journeys */}
      <DomesticJourneys
        onSelectPackage={handleSelectPackage}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* 7. International Journeys */}
      <InternationalJourneys
        onSelectPackage={handleSelectPackage}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* 8. Combined Promo, Why Us, and Reviews Section */}
      <PromoAndReviews />

      {/* 9. Journey Process */}
      <JourneyProcess />

      {/* 11. Quote / Lead Generation Section */}
      <QuoteSection />

      {/* 12. FAQ Section */}
      <FaqSection />
    </div>
  );
}
