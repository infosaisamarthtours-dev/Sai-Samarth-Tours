import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ALL_PACKAGES } from '../data/packages';
import { Package } from '../types';
import { FaqSection } from '../components/FaqSection';

const shirdiIds = [
  'shirdi-3-jyothirlinga',
  'shirdi-2-jyothirlinga',
  'shirdi-regular'
];

const destinations = shirdiIds
  .map(id => ALL_PACKAGES.find(p => p.id === id))
  .filter((p): p is Package => p !== undefined);

export function ShirdiPackagesPage() {
  return (
    <div className="flex-grow bg-[#FBF9F5] font-sans pb-12">
      
      {/* Hero Banner */}
      <div className="bg-[#0B1E3F] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-200">Shirdi Packages</span>
          </div>

          {/* Title & Description */}
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif-brand mb-4">
            Shirdi Tour Packages from Bangalore
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mb-8 leading-relaxed">
            Experience the divine grace of Sai Baba with our meticulously planned Shirdi tours. Enjoy VIP darshan access, premium accommodations, and seamless travel arrangements designed for absolute peace of mind.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              Devotional Overview & Guide
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#114088] mt-3">
              Why Travel to Shirdi with Sai Samarth Tours?
            </h2>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Sai Samarth Tours has been facilitating divine pilgrimages from Bangalore to Shirdi for years. Our packages are designed around the comfort of devotees, eliminating long lines, travel anxiety, and logistical hassles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-b from-blue-50/50 to-white rounded-xl border border-blue-100">
              <div className="w-10 h-10 rounded-lg bg-[#114088] text-white flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-[#114088] mb-2">Pre-Booked VIP Darshan</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We assist with pre-booked VIP Darshan passes for Kakad Aarti and main Samadhi Mandir entry to ensure minimal queue times for senior citizens and families.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-b from-amber-50/50 to-white rounded-xl border border-amber-100">
              <div className="w-10 h-10 rounded-lg bg-[#F59E0B] text-white flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-[#114088] mb-2">Deluxe Accommodations</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Enjoy stays in handpicked 3-star hygienic hotels situated within walking distance of Samadhi Mandir Gate 1 & 2.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-b from-emerald-50/50 to-white rounded-xl border border-emerald-100">
              <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-[#114088] mb-2">Senior Citizen Special Care</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Dedicated AC vehicle transfers, wheelchair assistance, and patient itinerary pacing tailored specifically for elderly parents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Session */}
      <FaqSection 
        title="Frequently Asked Questions - Shirdi Tours"
        subtitle="Common questions about our Bangalore to Shirdi & Jyothirlinga flight packages."
        items={[
          {
            question: "How do we travel from Bangalore to Shirdi in these packages?",
            answer: "We arrange round-trip economy flights departing early morning from Bangalore (BLR) to Pune or Shirdi airport. From there, you are transferred in a sanitized AC coach with an experienced Tour Manager handling all logistics."
          },
          {
            question: "Is VIP Darshan included for Shirdi Sai Baba Samadhi Mandir?",
            answer: "Yes! We assist with pre-booked VIP Darshan passes for Sai Baba Samadhi Mandir and Aarti sessions to minimize queue times, ensuring a seamless experience for senior citizens and families."
          },
          {
            question: "Which Jyothirlingas are covered in the 2 and 3 Jyothirlinga packages?",
            answer: "The 2 Jyothirlinga package (1N/2D) covers Bhimashankar and Grishneshwar (plus Ellora Caves & Shirdi). The 3 Jyothirlinga package (2N/3D) covers Bhimashankar, Trimbakeshwar (Nashik), and Grishneshwar (plus Shani Shingnapur & Shirdi)."
          },
          {
            question: "Are pure vegetarian meals provided on all days?",
            answer: "Yes, 100% pure vegetarian Breakfast, Lunch, and Dinner are provided on all tour days. We ensure clean, hygienic South and North Indian cuisines suited for pilgrims."
          },
          {
            question: "Will a Tour Manager guide us throughout the entire trip?",
            answer: "Yes, our experienced Tour Manager travels with the group from Bangalore, managing airport check-ins, vehicle transfers, hotel accommodations, and temple guidelines from start to finish."
          }
        ]}
      />
      
    </div>
  );
}

