import React, { useRef } from 'react';
import { Package } from '../types';
import { ALL_PACKAGES } from '../data/packages';
import { ChevronLeft, ChevronRight, Plane, Bus, Clock, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  onSelectPackage: (pkg: Package) => void;
  onOpenEnquiry: (title?: string) => void;
}

export function PilgrimageYatras({ onSelectPackage, onOpenEnquiry }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // The specific packages requested by the user
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

  const pilgrimagePackages = pilgrimageIds
    .map(id => ALL_PACKAGES.find(p => p.id === id))
    .filter((p): p is Package => p !== undefined);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth / 2;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full py-16 md:py-24 bg-[#FBF9F5]" id="pilgrimage">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative">
        <div className="text-center mb-8 sm:mb-14">
          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#EA580C] bg-amber-50 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-amber-200/80 inline-block mb-2 sm:mb-3 shadow-2xs">
            🙏 Sacred Temple Expeditions & Yatras
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#114088] mb-2 sm:mb-4">
            Popular Pilgrimage Yatras
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-normal sm:leading-relaxed px-2">
            Sacred journeys across Kashi, Ayodhya, Prayagraj, Ujjain, Baidyanath & Rameshwaram with flight itineraries & dedicated guidance.
          </p>

          {/* Related Topic Badges - Desktop Only */}
          <div className="hidden sm:flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-6">
            <span className="bg-white text-[#114088] text-xs font-bold px-3 py-1.5 rounded-full border border-blue-100 flex items-center gap-1.5 shadow-2xs">
              <span className="text-[#F59E0B]">✓</span> Kashi, Ayodhya & Prayagraj Sangam
            </span>
            <span className="bg-white text-[#114088] text-xs font-bold px-3 py-1.5 rounded-full border border-blue-100 flex items-center gap-1.5 shadow-2xs">
              <span className="text-[#F59E0B]">✓</span> 12 Jyotirlinga Special Circuits
            </span>
            <span className="bg-white text-[#114088] text-xs font-bold px-3 py-1.5 rounded-full border border-blue-100 flex items-center gap-1.5 shadow-2xs">
              <span className="text-[#F59E0B]">✓</span> Senior Citizen Friendly Guidance
            </span>
          </div>

          <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] mx-auto mt-3 sm:mt-6 rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Scroll Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 lg:-ml-6 z-20 bg-white shadow-lg border border-gray-200 text-[#114088] p-3 rounded-full opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-gray-50 focus:outline-none hidden md:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 lg:-mr-6 z-20 bg-white shadow-lg border border-gray-200 text-[#114088] p-3 rounded-full opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-gray-50 focus:outline-none hidden md:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Area */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth pb-6 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {pilgrimagePackages.map((pkg) => (
              <div 
                key={pkg.id} 
                className="bg-white/95 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-2xl border border-gray-100 hover:border-amber-500/40 overflow-hidden flex flex-col transition-all duration-500 transform hover:-translate-y-1.5 group h-full shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-start"
              >
                {/* Image (Top) */}
                <div className="relative h-48 w-full overflow-hidden shrink-0">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className={`w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition-transform duration-700 ${pkg.id === 'shirdi-regular' ? 'object-right' : 'object-center'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 bg-[#114088]/90 text-amber-300 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-md z-20 flex items-center gap-1">
                    <span>★ 4.9</span>
                    <span className="text-white/80 font-normal">| Sacred</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#114088] shadow-md z-20">
                    {pkg.duration}
                  </div>
                </div>

                {/* Content (Bottom) */}
                <div className="p-5 flex flex-col flex-grow w-full relative z-10">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="bg-amber-50 text-[#EA580C] px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border border-amber-200/60 truncate">
                      Bangalore to {pkg.destination}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#114088] group-hover:text-[#EA580C] transition-colors mb-4 leading-snug line-clamp-2 min-h-[44px]">{pkg.title}</h3>
                  
                  {/* Minified Icons - 4 in a single line */}
                  <div className="grid grid-cols-4 gap-2 mb-5">
                    <div className="flex flex-col items-center justify-center gap-1 bg-slate-50 py-2 rounded-xl border border-slate-100 shadow-2xs">
                      <Clock className="w-4 h-4 text-amber-500" />
                      <span className="text-[9px] font-bold text-gray-700 whitespace-nowrap">{pkg.duration.split(' ')[0]}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 bg-slate-50 py-2 rounded-xl border border-slate-100 shadow-2xs">
                      <Plane className="w-4 h-4 text-sky-500" />
                      <span className="text-[9px] font-bold text-gray-700 whitespace-nowrap">Flight</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 bg-slate-50 py-2 rounded-xl border border-slate-100 shadow-2xs">
                      <Bus className="w-4 h-4 text-emerald-500" />
                      <span className="text-[9px] font-bold text-gray-700 whitespace-nowrap">AC Bus</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 bg-slate-50 py-2 rounded-xl border border-slate-100 shadow-2xs">
                      <Building2 className="w-4 h-4 text-blue-600" />
                      <span className="text-[9px] font-bold text-gray-700 whitespace-nowrap">Hotel</span>
                    </div>
                  </div>
                  
                  {/* Footer */}
                  <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] text-gray-400 font-semibold block uppercase">Starting From</span>
                        <span className="font-extrabold text-[#114088] text-2xl leading-none">{pkg.price}</span>
                      </div>
                      <span className="text-[10px] font-bold bg-green-50 text-green-700 px-2 py-0.5 rounded border border-green-200">
                        All Inclusive
                      </span>
                    </div>
                    
                    <div className="flex flex-row gap-2 w-full pt-1">
                      <button 
                        onClick={() => onOpenEnquiry(pkg.title)}
                        className="flex-1 flex items-center justify-center gap-1.5 bg-white text-[#2563EB] border border-[#2563EB]/40 hover:bg-blue-50 hover:border-[#2563EB] px-2 py-2.5 rounded-xl font-bold text-xs transition-all shadow-2xs"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                        Enquiry
                      </button>
                      <button 
                        onClick={() => onSelectPackage(pkg)}
                        className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#F59E0B] hover:to-[#EA580C] text-white px-2 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md active:scale-95"
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
        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center">
          <Link 
            to="/pilgrimage-packages"
            className="group flex items-center gap-4 bg-white px-8 py-4 rounded-full shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <span className="text-[#F59E0B] font-bold text-lg tracking-wide group-hover:text-[#114088] transition-colors">
              Explore Packages
            </span>
            <div className="w-10 h-10 rounded-full bg-[#F59E0B] flex items-center justify-center group-hover:bg-[#114088] transition-colors shadow-sm">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
