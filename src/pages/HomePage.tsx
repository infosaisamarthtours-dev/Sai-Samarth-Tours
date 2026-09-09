import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package } from '../types';
import { Hero } from '../components/Hero';
import { FeaturedYatras } from '../components/FeaturedYatras';
import { AboutSection } from '../components/AboutSection';
import { TrustStatistics } from '../components/TrustStatistics';
import { ShirdiSpecial } from '../components/ShirdiSpecial';
import { PilgrimageYatras } from '../components/PilgrimageYatras';
import { DomesticJourneys } from '../components/DomesticJourneys';
import { InternationalJourneys } from '../components/InternationalJourneys';
import { PromoAndReviews } from '../components/PromoAndReviews';
import { JourneyProcess } from '../components/JourneyProcess';
import { QuoteSection } from '../components/QuoteSection';
import { FaqSection } from '../components/FaqSection';
import { EnquiryModal } from '../components/EnquiryModal';

export function HomePage() {
  const navigate = useNavigate();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryPackageTitle, setEnquiryPackageTitle] = useState('');

  const handleOpenEnquiry = (packageTitle?: string) => {
    if (packageTitle) {
      setEnquiryPackageTitle(packageTitle);
    } else {
      setEnquiryPackageTitle('');
    }
    setIsEnquiryOpen(true);
  };

  const handleSelectPackage = (pkg: Package) => {
    navigate(`/package/${pkg.id}`);
  };

  return (
    <div className="flex-grow">
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

      {/* Enquiry Booking Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        initialPackageTitle={enquiryPackageTitle}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </div>
  );
}
