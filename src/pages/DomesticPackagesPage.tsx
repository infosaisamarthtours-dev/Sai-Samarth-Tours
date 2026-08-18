import React from 'react';
import { ArrowRight, Compass, Shield, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DOMESTIC_PACKAGES } from '../data/packages';
import { FaqSection } from '../components/FaqSection';

export function DomesticPackagesPage() {
  return (
    <div className="flex-grow bg-[#FBF9F5] font-sans pb-12">
      
      {/* Hero Banner */}
      <div className="bg-[#0B1E3F] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-200">Domestic Packages</span>
          </div>

          {/* Title & Description */}
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif-brand mb-4">
            Domestic Tour Packages from Bangalore
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mb-8 leading-relaxed">
            Explore the incredible beauty of India with our expertly crafted domestic holidays. From the snowy peaks of Kashmir to the tranquil backwaters of Kerala, experience seamless travel across the nation.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DOMESTIC_PACKAGES.map((dest) => (
            <Link 
              to={`/package/${dest.id}`} 
              key={dest.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col border border-gray-100"
            >
              {/* Image Section (Top) */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Section (Bottom) */}
              <div className="p-6 flex flex-col flex-grow relative">
                <h3 className="text-[#1C2B39] text-lg font-bold font-serif-brand mb-2 group-hover:text-[#114088] transition-colors leading-tight">
                  {dest.title}
                </h3>
                
                <p className="text-gray-500 text-sm font-medium mb-6">
                  Starts from <span className="text-[#F59E0B] font-bold text-base">{dest.price}</span>
                </p>
                
                {/* Action Link / Button at bottom */}
                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-sm font-bold text-[#114088] group-hover:text-[#F59E0B] transition-colors">
                    Explore Packages
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#114088]/5 group-hover:bg-[#F59E0B] flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 text-[#114088] group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Content Session */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-[#F59E0B] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Domestic Holidays Content Guide
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#114088] mt-3">
              Incredible India Holidays Tailored for You
            </h2>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Whether you are looking for serene hill stations, pristine beaches, or royal heritage forts, Sai Samarth Tours delivers premium domestic travel packages from Bangalore with private transfers and top hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-b from-blue-50/50 to-white rounded-xl border border-blue-100">
              <div className="w-10 h-10 rounded-lg bg-[#114088] text-white flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-[#114088] mb-2">Curated Itineraries</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Balanced travel schedules combining famous landmarks, scenic nature spots, and authentic local experiences.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-b from-amber-50/50 to-white rounded-xl border border-amber-100">
              <div className="w-10 h-10 rounded-lg bg-[#F59E0B] text-white flex items-center justify-center mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-[#114088] mb-2">Private Vehicle Comfort</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Dedicated private cabs throughout your holiday with trusted local drivers and flexible sightseeing stops.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-b from-emerald-50/50 to-white rounded-xl border border-emerald-100">
              <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white flex items-center justify-center mb-4">
                <Map className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-[#114088] mb-2">Complete Peace of Mind</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                24/7 helpline, verified 3-star and resort stays, and transparent pricing with no hidden charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Session */}
      <FaqSection 
        title="Frequently Asked Questions - Domestic Tours"
        subtitle="Helpful answers about customizing your holiday, vehicle transfers, and hotel inclusions."
        items={[
          {
            question: "Can we customize our domestic holiday itinerary and hotel category?",
            answer: "Yes, 100%! All our domestic holiday itineraries (Kashmir, Kerala, Leh Ladakh, Rajasthan, Himachal, Goa, Andaman) can be customized with 3-star, 4-star, or luxury heritage resort upgrades."
          },
          {
            question: "Are flights from Bangalore included in these packages?",
            answer: "Yes, our domestic packages from Bangalore include round-trip flights, airport transfers, hotel accommodations, and daily sightseeing."
          },
          {
            question: "What type of private transport is provided for family tours?",
            answer: "We provide dedicated private AC vehicles (Sedan for couples/small families, Innova Crysta for 4-6 pax, AC Tempo Traveller for larger groups) with experienced local drivers."
          },
          {
            question: "When is the best time to visit Kashmir, Leh Ladakh, and Kerala?",
            answer: "Kashmir is ideal from March to October (and Dec-Feb for snowfall); Leh Ladakh is best from May to September; Kerala and Rajasthan are best from September to March. Our travel team helps you pick the right dates."
          },
          {
            question: "Are daily meals and sightseeing entrance fees included?",
            answer: "Yes, wholesome daily breakfast and dinner (or all meals depending on selected package) are included along with complete sightseeing transfers as per the itinerary."
          }
        ]}
      />
      
    </div>
  );
}

