import React from 'react';
import { ArrowRight, Globe, Award, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { INTERNATIONAL_PACKAGES } from '../data/packages';
import { FaqSection } from '../components/FaqSection';

export function InternationalPackagesPage() {
  return (
    <div className="flex-grow bg-[#FBF9F5] font-sans pb-12">
      
      {/* Hero Banner */}
      <div className="bg-[#0B1E3F] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-200">International Packages</span>
          </div>

          {/* Title & Description */}
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif-brand mb-4">
            International Tour Packages from Bangalore
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mb-8 leading-relaxed">
            Embark on a global adventure with our premium international holiday packages. From the vibrant streets of Southeast Asia to the majestic landscapes of Europe, we make world travel seamless and unforgettable.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {INTERNATIONAL_PACKAGES.map((dest) => (
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
                
                {dest.comingSoon && (
                  <div className="absolute top-4 left-4 bg-[#F59E0B] text-white text-[10px] font-extrabold px-3 py-1.5 rounded-md shadow-sm uppercase tracking-widest z-20">
                    Coming Soon
                  </div>
                )}
              </div>

              {/* Content Section (Bottom) */}
              <div className="p-6 flex flex-col flex-grow relative">
                <h3 className="text-[#1C2B39] text-lg font-bold font-serif-brand mb-2 group-hover:text-[#114088] transition-colors leading-tight">
                  {dest.title}
                </h3>
                
                <p className="text-gray-500 text-sm font-medium mb-6">
                  {dest.price === 'Coming Soon' ? (
                    <span>Launching Soon</span>
                  ) : (
                    <>Starts from <span className="text-[#F59E0B] font-bold text-base">{dest.price}</span></>
                  )}
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
              International Travel Guide
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#114088] mt-3">
              Explore the World with Complete Assistance
            </h2>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Sai Samarth Tours simplifies international travel. From Bhutan and Nepal to Malaysia and Europe, we handle visas, flights, foreign exchange guidance, and local transfers so your holiday is 100% stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-b from-blue-50/50 to-white rounded-xl border border-blue-100">
              <div className="w-10 h-10 rounded-lg bg-[#114088] text-white flex items-center justify-center mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-[#114088] mb-2">Visa & Flight Support</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Complete assistance for visa documentation, flight bookings from Kempegowda International Airport (BLR), and travel insurance.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-b from-amber-50/50 to-white rounded-xl border border-amber-100">
              <div className="w-10 h-10 rounded-lg bg-[#F59E0B] text-white flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-[#114088] mb-2">Verified International Stays</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Handpicked 3-star, 4-star, and luxury beachfront resort stays with daily breakfast and optional Indian dining arrangements.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-b from-emerald-50/50 to-white rounded-xl border border-emerald-100">
              <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-[#114088] mb-2">24/7 International Helpdesk</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Dedicated WhatsApp support throughout your journey abroad for any real-time assistance or itinerary changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Session */}
      <FaqSection 
        title="Frequently Asked Questions - International Tours"
        subtitle="Key information regarding international flights, visa assistance, forex, and Indian meals abroad."
        items={[
          {
            question: "Do you provide visa application assistance for international tours?",
            answer: "Yes, our dedicated visa team assists you with visa documentation, biometric slot scheduling, form submissions, and travel insurance for destinations including Malaysia, Singapore, Thailand, Dubai, Europe, and Bhutan."
          },
          {
            question: "What is the passport validity required for international travel?",
            answer: "Your passport must have a minimum validity of 6 months from your scheduled return date, along with at least two blank pages for entry/exit visa stamps."
          },
          {
            question: "Are Indian vegetarian meals available during international holidays?",
            answer: "Yes! We partner with trusted Indian restaurants in all our international destinations (Singapore, Malaysia, Thailand, Bali, Dubai, Europe) so you can enjoy authentic Indian vegetarian and Jain meals."
          },
          {
            question: "Are flights departing directly from Bangalore?",
            answer: "Yes, all our international packages feature convenient flights departing from Bangalore (BLR) with well-timed connections and airport transfers upon arrival."
          },
          {
            question: "Do you help with Foreign Exchange (Forex) and International SIM cards?",
            answer: "Yes, we connect you with authorized Forex partners for multi-currency travel cards and assist in arranging international e-SIMs or physical SIM cards prior to departure."
          }
        ]}
      />
      
    </div>
  );
}
