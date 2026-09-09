import React from 'react';
import { ALL_PACKAGES } from '../data/packages';
import { Package } from '../types';
import { Plane, Bus, Clock, Building2 } from 'lucide-react';

interface FeaturedYatrasProps {
  onSelectPackage: (pkg: Package) => void;
  onOpenEnquiry: (packageTitle?: string) => void;
}

export const FeaturedYatras: React.FC<FeaturedYatrasProps> = ({ onSelectPackage, onOpenEnquiry }) => {
  // Select priority package IDs for the 4-column x 3-row grid (12 cards total)
  const preferredIds = [
    'shirdi-regular', 
    'shirdi-3-jyothirlinga', 
    'shirdi-2-jyothirlinga',
    'kamakhya', 
    'puri-jagannath',
    'vaishnodevi',
    'gujarat',
    'indore-ujjain',
    'kashi-ayodhya-prayagraj',
    'kashi-ayodhya',
    'rameshwaram-madurai',
    'baidyanath'
  ];
  
  let featuredPackages = preferredIds
    .map(id => ALL_PACKAGES.find(p => p.id === id))
    .filter((p): p is Package => p !== undefined);

  // Fill up to 12 packages from ALL_PACKAGES if preferredIds has missing entries
  if (featuredPackages.length < 12) {
    const existingIds = new Set(featuredPackages.map(p => p.id));
    for (const pkg of ALL_PACKAGES) {
      if (!existingIds.has(pkg.id)) {
        featuredPackages.push(pkg);
        existingIds.add(pkg.id);
      }
      if (featuredPackages.length === 12) break;
    }
  }

  featuredPackages = featuredPackages.slice(0, 12);

  return (
    <section id="featured" className="w-full bg-[#FBF9F5] pt-6 pb-12 md:pt-10 md:pb-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#114088] mb-2 font-serif">Priority Packages</h2>
            <p className="text-sm text-gray-600">Handcrafted, highly-rated spiritual yatras and tour packages</p>
          </div>
          <a href="#pilgrimage" className="hidden sm:inline-flex text-[#2563EB] font-bold text-sm items-center hover:text-[#114088] transition-colors">
            View All Tours &rarr;
          </a>
        </div>

        {/* 4 Cards per Row x 3 Rows (12 cards total) - No horizontal scrolling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {featuredPackages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xs hover:shadow-xl border border-gray-100 hover:border-amber-500/40 overflow-hidden flex flex-col transition-all duration-300 transform hover:-translate-y-1 group h-full w-full"
            >
              {/* Image Header */}
              <div className="relative h-40 w-full overflow-hidden shrink-0">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className={`w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500 ${pkg.id === 'shirdi-regular' ? 'object-right' : 'object-center'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70"></div>
                
                {/* Top Badges */}
                <div className="absolute top-2.5 left-2.5 bg-[#114088]/90 text-amber-300 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-bold shadow-xs flex items-center gap-1">
                  <span>★ 4.9</span>
                  <span className="text-white/80 font-normal">| Priority</span>
                </div>

                <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#114088] shadow-xs">
                  {pkg.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-3.5 sm:p-4 flex flex-col flex-grow w-full relative z-10">
                <div className="flex items-center gap-1 mb-1.5">
                  <span className="bg-amber-50 text-[#EA580C] px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider border border-amber-200/60 truncate max-w-full">
                    Bangalore to {pkg.destination.split(',')[0]}
                  </span>
                </div>
                <h3 className="font-serif text-sm sm:text-base font-bold text-[#114088] group-hover:text-[#EA580C] transition-colors mb-3 leading-snug line-clamp-2 min-h-[40px]">
                  {pkg.title}
                </h3>
                
                {/* Minified Icons */}
                <div className="grid grid-cols-4 gap-1 mb-3">
                  <div className="flex flex-col items-center justify-center gap-0.5 bg-slate-50 py-1.5 rounded-lg border border-slate-100">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-[8px] sm:text-[9px] font-bold text-gray-700 whitespace-nowrap">{pkg.duration.split(' ')[0]}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-0.5 bg-slate-50 py-1.5 rounded-lg border border-slate-100">
                    <Plane className="w-3.5 h-3.5 text-sky-500" />
                    <span className="text-[8px] sm:text-[9px] font-bold text-gray-700 whitespace-nowrap">Flight</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-0.5 bg-slate-50 py-1.5 rounded-lg border border-slate-100">
                    <Bus className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-[8px] sm:text-[9px] font-bold text-gray-700 whitespace-nowrap">AC Bus</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-0.5 bg-slate-50 py-1.5 rounded-lg border border-slate-100">
                    <Building2 className="w-3.5 h-3.5 text-blue-600" />
                    <span className="text-[8px] sm:text-[9px] font-bold text-gray-700 whitespace-nowrap">Hotel</span>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="mt-auto pt-3 border-t border-gray-100 flex flex-col gap-2.5">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[9px] text-gray-400 font-semibold block uppercase">Starting From</span>
                      <span className="font-extrabold text-[#114088] text-xl leading-none">{pkg.price}</span>
                    </div>
                    <span className="text-[9px] font-bold bg-green-50 text-green-700 px-1.5 py-0.5 rounded border border-green-200">
                      All Inclusive
                    </span>
                  </div>
                  
                  <div className="flex flex-row gap-1.5 w-full pt-0.5">
                    <button 
                      onClick={() => onOpenEnquiry(pkg.title)}
                      className="flex-1 flex items-center justify-center gap-1 bg-white text-[#2563EB] border border-[#2563EB]/40 hover:bg-blue-50 hover:border-[#2563EB] px-1.5 py-2 rounded-lg font-bold text-[11px] transition-all"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                      Enquiry
                    </button>
                    <button 
                      onClick={() => onSelectPackage(pkg)}
                      className="flex-1 flex items-center justify-center gap-1 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#F59E0B] hover:to-[#EA580C] text-white px-1.5 py-2 rounded-lg font-bold text-[11px] transition-all shadow-xs active:scale-95"
                    >
                      View Details
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <a href="#pilgrimage" className="inline-flex text-[#2563EB] font-bold text-sm items-center hover:text-[#114088] transition-colors">
            View All Tours &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
