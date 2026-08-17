import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { PromoAndReviews } from '../components/PromoAndReviews';
import { JourneyProcess } from '../components/JourneyProcess';

export function AboutPage() {
  return (
    <div className="flex-grow bg-[#FBF9F5] font-sans">
      {/* Hero Banner */}
      <div className="bg-[#0B1E3F] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-[#F59E0B] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mb-4 inline-block">
            Our Legacy & Values
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif-brand mb-4">
            About Sai Samarth Tours
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Dedicated to providing spiritually enriching journeys and unforgettable holiday experiences across India and the globe.
          </p>
        </div>
      </div>

      {/* 1. About Us / Divine Journeys Section */}
      <AboutSection />

      {/* 2. Why Choose Sai Samarth Section */}
      <PromoAndReviews />

      {/* 3. How It Works Section */}
      <JourneyProcess />
    </div>
  );
}

