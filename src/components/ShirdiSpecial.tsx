import React from 'react';
import { Package } from '../types';
import { ALL_PACKAGES } from '../data/packages';
import { Plane, Bus, Clock, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  onSelectPackage: (pkg: Package) => void;
  onOpenEnquiry: (title?: string) => void;
}

export function ShirdiSpecial({ onSelectPackage, onOpenEnquiry }: Props) {
  // The specific packages requested by the user
  const shirdiIds = [
    'shirdi-3-jyothirlinga',
    'shirdi-2-jyothirlinga',
    'shirdi-regular'
  ];

  const shirdiPackages = shirdiIds
    .map(id => ALL_PACKAGES.find(p => p.id === id))
    .filter((p): p is Package => p !== undefined);

  return (
    <section className="w-full py-16 md:py-24 bg-[#FBF9F5]" id="shirdi">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#EA580C] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/80 inline-block mb-3 shadow-2xs">
            ✨ Devotional Pilgrimage Journeys
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#114088] mb-3">
            Shirdi Special Packages
          </h2>
          <p className="text-xs sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Seamless Sai Baba Yatra from Bangalore with direct flights, VIP Darshan, 3-star hotels & dedicated tour managers.
          </p>

          {/* Related Topic Feature Badges */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-6">
            <span className="bg-white text-[#114088] text-xs font-bold px-3.5 py-1.5 rounded-full border border-blue-100 flex items-center gap-1.5 shadow-2xs">
              <span className="text-[#F59E0B]">✓</span> Direct Flight & AC Coach Options
            </span>
            <span className="bg-white text-[#114088] text-xs font-bold px-3.5 py-1.5 rounded-full border border-blue-100 flex items-center gap-1.5 shadow-2xs">
              <span className="text-[#F59E0B]">✓</span> VIP Special Darshan Included
            </span>
            <span className="bg-white text-[#114088] text-xs font-bold px-3.5 py-1.5 rounded-full border border-blue-100 flex items-center gap-1.5 shadow-2xs">
              <span className="text-[#F59E0B]">✓</span> Includes Shani Shingnapur & Trimbakeshwar
            </span>
          </div>

          <div className="w-20 h-1 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Perfectly Aligned 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {shirdiPackages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-200/80 hover:border-[#F59E0B]/60 overflow-hidden flex flex-col transition-all duration-300 transform hover:-translate-y-1.5 group h-full"
            >
              {/* Image (Top) */}
              <div className="relative h-52 w-full overflow-hidden shrink-0">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className={`w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ${pkg.id === 'shirdi-regular' ? 'object-right' : 'object-center'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70"></div>
                
                {/* Top Badges */}
                <div className="absolute top-3 left-3 bg-[#114088]/95 text-amber-300 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-md z-20 flex items-center gap-1 border border-white/10">
                  <span>★ 4.9</span>
                  <span className="text-white/80 font-normal">| Verified</span>
                </div>

                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#114088] shadow-md z-20 border border-gray-100">
                  {pkg.duration}
                </div>
              </div>

              {/* Content (Bottom) */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between w-full">
                
                <div>
                  {/* Category / Destination Tag */}
                  <div className="mb-2.5">
                    <span className="bg-amber-50 text-[#EA580C] px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider border border-amber-200/80 block truncate">
                      Bangalore to {pkg.destination}
                    </span>
                  </div>

                  {/* Title (Consistent height for perfect horizontal alignment) */}
                  <h3 className="font-serif text-lg font-bold text-[#114088] group-hover:text-[#EA580C] transition-colors leading-snug min-h-[50px] flex items-center">
                    {pkg.title}
                  </h3>
                  
                  {/* Minified Specs Icons Bar - 4 in a single balanced row */}
                  <div className="grid grid-cols-4 gap-2 my-4">
                    <div className="flex flex-col items-center justify-center gap-1 bg-slate-50 py-2 rounded-xl border border-slate-100 shadow-2xs">
                      <Clock className="w-4 h-4 text-amber-500" />
                      <span className="text-[10px] font-bold text-gray-700 whitespace-nowrap">{pkg.duration.split(' ')[0]}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 bg-slate-50 py-2 rounded-xl border border-slate-100 shadow-2xs">
                      <Plane className="w-4 h-4 text-sky-500" />
                      <span className="text-[10px] font-bold text-gray-700 whitespace-nowrap">Flight</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 bg-slate-50 py-2 rounded-xl border border-slate-100 shadow-2xs">
                      <Bus className="w-4 h-4 text-emerald-500" />
                      <span className="text-[10px] font-bold text-gray-700 whitespace-nowrap">AC Bus</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 bg-slate-50 py-2 rounded-xl border border-slate-100 shadow-2xs">
                      <Building2 className="w-4 h-4 text-blue-600" />
                      <span className="text-[10px] font-bold text-gray-700 whitespace-nowrap">Hotel</span>
                    </div>
                  </div>
                </div>
                
                {/* Footer Section */}
                <div className="pt-4 border-t border-gray-100 mt-2 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] text-gray-400 font-semibold block uppercase">Starting From</span>
                      <span className="font-extrabold text-[#114088] text-2xl leading-none">{pkg.price}</span>
                    </div>
                    <span className="text-[10px] font-bold bg-green-50 text-green-700 px-2.5 py-1 rounded border border-green-200">
                      All Inclusive
                    </span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 w-full pt-1">
                    <button 
                      onClick={() => onOpenEnquiry(pkg.title)}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-white text-[#2563EB] border border-[#2563EB]/40 hover:bg-blue-50 hover:border-[#2563EB] px-2 py-2.5 rounded-xl font-bold text-xs transition-all shadow-2xs cursor-pointer"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                      Enquiry
                    </button>
                    <button 
                      onClick={() => onSelectPackage(pkg)}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#F59E0B] hover:to-[#EA580C] text-white px-2 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md active:scale-95 cursor-pointer"
                    >
                      View Details
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center">
          <Link 
            to="/shirdi-packages"
            className="group flex items-center gap-4 bg-white px-8 py-4 rounded-full shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#F59E0B]"
          >
            <span className="text-[#F59E0B] font-bold text-base sm:text-lg tracking-wide group-hover:text-[#114088] transition-colors">
              Explore All Shirdi Packages
            </span>
            <div className="w-9 h-9 rounded-full bg-[#F59E0B] flex items-center justify-center group-hover:bg-[#114088] transition-colors shadow-sm">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
