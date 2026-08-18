import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { PromoAndReviews } from '../components/PromoAndReviews';
import { JourneyProcess } from '../components/JourneyProcess';
import { FaqSection } from '../components/FaqSection';

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

      {/* 4. FAQ Section */}
      <FaqSection 
        title="Frequently Asked Questions - About Us"
        subtitle="Learn more about our heritage, customer guarantees, and tour management philosophy."
        items={[
          {
            question: "Where is Sai Samarth Tours based?",
            answer: "We are headquartered in Bangalore, Karnataka, organizing customized domestic, international, and pilgrimage group tours departing directly from Bangalore."
          },
          {
            question: "Why choose Sai Samarth Tours over other travel operators?",
            answer: "We pride ourselves on transparent, all-inclusive pricing, accompanied Tour Managers for group tours, hygienic vegetarian meals, handpicked hotels, and specialized care for senior citizens."
          },
          {
            question: "How much experience does Sai Samarth Tours have in organizing pilgrimages?",
            answer: "With extensive experience in Shirdi, Jyothirlinga, and Chardham circuits, we have guided over 10,000+ devotees with seamless VIP Darshans and comfortable travel arrangements."
          },
          {
            question: "Is it safe for solo elderly travelers or senior citizen couples to join your group tours?",
            answer: "Absolutely. Our Tour Managers provide end-to-end guidance, airport boarding assistance, luggage handling, and medical attention coordination to ensure total safety."
          },
          {
            question: "How do I request a tailored private family or corporate tour package?",
            answer: "Simply connect with us via our website enquiry form, phone call (+91 9187711649), or WhatsApp. Our itinerary specialists will prepare a customized quote within a few hours."
          }
        ]}
      />
    </div>
  );
}

