import React, { useRef } from 'react';
import { ALL_PACKAGES } from '../data/packages';
import { Package } from '../types';
import { ChevronLeft, ChevronRight, Plane, Bus, UserCheck, Clock, Building2, Camera, Utensils } from 'lucide-react';

interface FeaturedYatrasProps {
  onSelectPackage: (pkg: Package) => void;
  onOpenEnquiry: (packageTitle?: string) => void;
}

export const FeaturedYatras: React.FC<FeaturedYatrasProps> = ({ onSelectPackage, onOpenEnquiry }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Select the 8 specific priority packages for the home page feature
  const featuredIds = [
    'shirdi-regular', 
    'shirdi-3-jyothirlinga', 
    'kamakhya', 
    'puri-jagannath',
    'vaishnodevi',
    'gujarat',
    'indore-ujjain',
    'kashi-ayodhya-prayagraj'
  ];
  
  // Use ALL_PACKAGES to ensure we find them regardless of their specific category
  const featuredPackages = featuredIds
    .map(id => ALL_PACKAGES.find(p => p.id === id))
    .filter((p): p is Package => p !== undefined);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth / 2; // Scroll by one card width
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="featured" className="w-full bg-[#FBF9F5] pt-4 pb-12 md:pt-8 md:pb-20 border-b border-gray-200">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#114088] mb-2 font-serif">Priority Packages</h2>
          </div>
          <a href="#pilgrimage" className="hidden sm:inline-flex text-[#2563EB] font-bold text-sm items-center hover:text-[#114088] transition-colors">
            View All Tours &rarr;
          </a>
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
            {featuredPackages.map((pkg) => (
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
                    <span className="text-white/80 font-normal">| Priority</span>
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
        
        <div className="mt-8 text-center sm:hidden">
          <a href="#pilgrimage" className="inline-flex text-[#2563EB] font-bold text-sm items-center hover:text-[#114088] transition-colors">
            View All Tours &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
