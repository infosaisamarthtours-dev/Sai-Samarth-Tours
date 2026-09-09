import React from 'react';
import { Package } from '../types';
import { ALL_PACKAGES } from '../data/packages';
import { Plane, Bus, Clock, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  onSelectPackage: (pkg: Package) => void;
  onOpenEnquiry: (title?: string) => void;
}

export function DomesticJourneys({ onSelectPackage, onOpenEnquiry }: Props) {
  // Specific domestic package IDs
  const domesticIds = [
    'andaman',
    'kashmir',
    'leh-ladakh',
    'golden-triangle',
    'rajasthan',
    'kerala',
    'himachal',
    'goa'
  ];

  let domesticPackages = domesticIds
    .map(id => ALL_PACKAGES.find(p => p.id === id))
    .filter((p): p is Package => p !== undefined);

  // Fallback: fill up to 8 packages if domesticIds has missing entries
  if (domesticPackages.length < 8) {
    const existingIds = new Set(domesticPackages.map(p => p.id));
    for (const pkg of ALL_PACKAGES) {
      if (pkg.category === 'domestic' && !existingIds.has(pkg.id)) {
        domesticPackages.push(pkg);
        existingIds.add(pkg.id);
      }
    }
  }

  return (
    <section className="w-full py-12 md:py-20 bg-white border-b border-gray-200" id="domestic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#EA580C] bg-amber-50 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-amber-200/80 inline-block mb-2 sm:mb-3 shadow-2xs">
            🏔️ Scenic & Cultural Domestic Getaways
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#114088] mb-2 sm:mb-4">
            Incredible India
          </h2>
          <p className="text-xs sm:text-base text-gray-600 max-w-3xl mx-auto leading-normal sm:leading-relaxed px-2">
            Explore Kashmir, Leh Ladakh, Kerala backwaters, Himachal & Rajasthan with all-inclusive flight packages.
          </p>

          {/* Related Topic Badges */}
          <div className="hidden sm:flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-5">
            <span className="bg-blue-50 text-[#114088] text-xs font-bold px-3.5 py-1.5 rounded-full border border-blue-100 flex items-center gap-1.5 shadow-2xs">
              <span className="text-[#F59E0B]">✓</span> Kashmir & Leh Ladakh Circuits
            </span>
            <span className="bg-blue-50 text-[#114088] text-xs font-bold px-3.5 py-1.5 rounded-full border border-blue-100 flex items-center gap-1.5 shadow-2xs">
              <span className="text-[#F59E0B]">✓</span> Kerala Houseboats & Golden Triangle
            </span>
            <span className="bg-blue-50 text-[#114088] text-xs font-bold px-3.5 py-1.5 rounded-full border border-blue-100 flex items-center gap-1.5 shadow-2xs">
              <span className="text-[#F59E0B]">✓</span> Family & Group Customized Tours
            </span>
          </div>

          <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </div>

        {/* 4 Cards per Row Grid - No horizontal scrolling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {domesticPackages.map((pkg) => (
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
                  <span className="text-white/80 font-normal">| Popular</span>
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
                      className="flex-1 flex items-center justify-center gap-1 bg-amber-50 text-[#EA580C] border border-[#EA580C]/40 hover:bg-[#EA580C] hover:text-white px-1.5 py-2 rounded-lg font-bold text-[11px] transition-all"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                      Enquiry
                    </button>
                    <button 
                      onClick={() => onSelectPackage(pkg)}
                      className="flex-1 flex items-center justify-center gap-1 bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white px-1.5 py-2 rounded-lg font-bold text-[11px] transition-all shadow-xs active:scale-95"
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

        {/* View All Button */}
        <div className="mt-10 flex justify-center">
          <Link 
            to="/domestic-packages"
            className="group flex items-center gap-3 bg-white px-7 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#F59E0B]"
          >
            <span className="text-[#F59E0B] font-bold text-base tracking-wide group-hover:text-[#114088] transition-colors">
              Explore All Domestic Packages
            </span>
            <div className="w-8 h-8 rounded-full bg-[#F59E0B] flex items-center justify-center group-hover:bg-[#114088] transition-colors shadow-xs">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
