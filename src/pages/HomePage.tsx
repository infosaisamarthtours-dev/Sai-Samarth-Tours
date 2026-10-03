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
        title="Tour Packages from Bangalore | Sai Samarth Tours"
        description="Explore pilgrimage, domestic and international tour packages from Bangalore with Sai Samarth Tours. Shirdi, Kashi, Kashmir, Kerala, Maldives, Thailand and more."
        canonical="https://saisamarthtours.com/"
        ogImage="/shirdi-tour-hero-banner-desktop.webp"
        ogType="website"
        jsonLd={localBusinessSchema}
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
