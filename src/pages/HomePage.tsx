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
