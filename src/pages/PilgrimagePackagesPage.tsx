import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ALL_PACKAGES } from '../data/packages';
import { Package } from '../types';
import { FaqSection } from '../components/FaqSection';

const pilgrimageIds = [
  'kholapur-pandarpur',
  'puri-jagannath',
  'kamakhya',
  'kashi-ayodhya-prayagraj',
  'kashi-ayodhya',
  'indore-ujjain',
  'vaishnodevi',
  'baidyanath',
  'rameshwaram',
  'gujarat'
];

const destinations = pilgrimageIds
  .map(id => ALL_PACKAGES.find(p => p.id === id))
  .filter((p): p is Package => p !== undefined);

export function PilgrimagePackagesPage() {
  return (
    <div className="flex-grow bg-[#FBF9F5] font-sans pb-12">
      
      {/* Hero Banner */}
      <div className="bg-[#0B1E3F] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-200">Pilgrimage Packages</span>
          </div>

          {/* Title & Description */}
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif-brand mb-4">
            Pilgrimage Tour Packages from Bangalore
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mb-8 leading-relaxed">
            Discover divine peace with our thoughtfully curated spiritual journeys. We ensure hassle-free travel, comfortable accommodations, and special care for senior citizens so you can focus entirely on your devotion.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest) => (
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

      {/* Detailed Content Session Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-[#F59E0B] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Spiritual Yatra Guide
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#114088] mt-3">
              Sacred Pilgrimages Crafted with Devotion & Excellence
            </h2>
            <p className="text-gray-600 mt-2 leading-relaxed">
              From Kashi Vishwanath and Ayodhya Ram Mandir to Vaishno Devi and Puri Jagannath, Sai Samarth Tours connects you with India's most holy places with total comfort, local guidance, and transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-b from-blue-50/50 to-white rounded-xl border border-blue-100">
              <div className="w-10 h-10 rounded-lg bg-[#114088] text-white flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-[#114088] mb-2">Temple Guidance & Rituals</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Expert local coordination for Pujas, Abhishekams, and special Darshan tickets across all major Dham & Shakti Peeth shrines.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-b from-amber-50/50 to-white rounded-xl border border-amber-100">
              <div className="w-10 h-10 rounded-lg bg-[#F59E0B] text-white flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-[#114088] mb-2">Hygienic Vegetarian Dining</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Enjoy fresh, pure vegetarian meals aligned with South Indian & North Indian preferences throughout your pilgrimage.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-b from-emerald-50/50 to-white rounded-xl border border-emerald-100">
              <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-[#114088] mb-2">Doorstep Support</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                End-to-end flight/train booking assistance from Bengaluru with dedicated tour manager guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Session */}
      <FaqSection 
        title="Frequently Asked Questions - Pilgrimage Yatras"
        subtitle="Important information regarding sacred temple yatras, ritual darshans, and senior citizen assistance."
        items={[
          {
            question: "How do you coordinate Darshan in high-rush shrines like Kashi, Ayodhya, or Vaishno Devi?",
            answer: "Our local coordinators and tour managers assist with pre-booked online special darshan tickets, Aarti slot timings, and organized entry routes to minimize wait times and physical strain."
          },
          {
            question: "Is this pilgrimage suitable for senior citizens requiring assistance?",
            answer: "Yes! Over 60% of our pilgrims are senior citizens. We ensure ground-floor or elevator-accessible rooms, battery car and wheelchair arrangements wherever available, comfortable AC tempo travellers, and relaxed itinerary pacing."
          },
          {
            question: "Are flights included from Bangalore for Kashi, Puri, and Kamakhya?",
            answer: "Yes, our packages include return economy flights from Kempegowda International Airport (BLR) to the nearest airport (e.g. Varanasi, Bhubaneswar, Guwahati), complete with airport pickup and drop."
          },
          {
            question: "Can we perform special Poojas, Tarpanam, or Abhishekams?",
            answer: "Yes, we facilitate contact with trusted local Purohits at holy spots like Kashi Ganga Ghat, Triveni Sangam (Prayagraj), Gaya, and Rameswaram for personalized Vedic rituals and Abhishekams."
          },
          {
            question: "What kind of food is provided during the yatra?",
            answer: "We arrange 100% pure vegetarian Sattvic meals (Breakfast, Lunch, and Dinner) without onion/garlic on request, prepared under hygienic standards suitable for devotees of all ages."
          }
        ]}
      />
      
    </div>
  );
}

