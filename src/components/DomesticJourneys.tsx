import React, { useRef } from 'react';
import { Package } from '../types';
import { ALL_PACKAGES } from '../data/packages';
import { ChevronLeft, ChevronRight, Plane, Bus, Clock, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  onSelectPackage: (pkg: Package) => void;
  onOpenEnquiry: (title?: string) => void;
}

export function DomesticJourneys({ onSelectPackage, onOpenEnquiry }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // The specific packages requested by the user
  const domesticIds = [
    'andaman',
    'kashmir',
    'leh-ladakh',
    'golden-triangle',
    'rajasthan'
  ];

  const domesticPackages = domesticIds
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
    <section className="w-full py-16 md:py-24 bg-white" id="domestic">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#114088] mb-4">
            Incredible India
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the beauty of our domestic destinations
          </p>
          <div className="w-24 h-1 bg-[#F59E0B] mx-auto mt-6 rounded-full"></div>
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
            {domesticPackages.map((pkg) => (
              <div 
                key={pkg.id} 
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-amber-200 overflow-hidden flex flex-col transition-all duration-300 transform group h-full shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-start"
              >
                {/* Image (Top) */}
                <div className="relative h-48 w-full overflow-hidden shrink-0">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className={`w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition-transform duration-700 ${pkg.id === 'shirdi-regular' ? 'object-right' : 'object-center'}`}
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-bold text-[#114088] shadow-md z-20">
                    {pkg.duration}
                  </div>
                </div>

                {/* Content (Bottom) */}
                <div className="p-4 flex flex-col flex-grow w-full relative z-10">
                  <div className="flex items-center gap-1 mb-1.5">
                    <svg className="w-3.5 h-3.5 text-[#2563EB] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <div className="text-[10px] uppercase tracking-wider font-bold text-[#F59E0B] truncate" title={`Tours from Bangalore to ${pkg.destination}`}>Tours from Bangalore to {pkg.destination}</div>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1C2B39] mb-4 leading-tight line-clamp-2 min-h-[44px]">{pkg.title}</h3>
                  
                  {/* Minified Icons - 4 in a single line */}
                  <div className="grid grid-cols-4 gap-1.5 mb-5">
                    <div className="flex flex-col items-center justify-center gap-1 bg-white py-2 rounded-md border border-gray-100 shadow-sm">
                      <Clock className="w-4 h-4 text-amber-500" />
                      <span className="text-[8px] font-bold text-gray-700 whitespace-nowrap">{pkg.duration.split(' ')[0]}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 bg-white py-2 rounded-md border border-gray-100 shadow-sm">
                      <Plane className="w-4 h-4 text-sky-500" />
                      <span className="text-[8px] font-bold text-gray-700 whitespace-nowrap">Flight</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 bg-white py-2 rounded-md border border-gray-100 shadow-sm">
                      <Bus className="w-4 h-4 text-emerald-500" />
                      <span className="text-[8px] font-bold text-gray-700 whitespace-nowrap">AC Bus</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 bg-white py-2 rounded-md border border-gray-100 shadow-sm">
                      <Building2 className="w-4 h-4 text-blue-600" />
                      <span className="text-[8px] font-bold text-gray-700 whitespace-nowrap">Hotel</span>
                    </div>
                  </div>
                  
                  {/* Footer */}
                  <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-3">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-extrabold text-[#1C2B39] text-xl leading-none">{pkg.price}</span>
                      <span className="text-[10px] text-gray-400 font-medium">Starting price per adult</span>
                    </div>
                    
                    <div className="flex flex-row gap-2 w-full">
                      <button 
                        onClick={() => onOpenEnquiry(pkg.title)}
                        className="flex-1 flex items-center justify-center gap-1.5 bg-white text-[#2563EB] border border-[#2563EB] hover:bg-amber-50 hover:border-[#F59E0B] hover:text-[#F59E0B] px-2 py-2 rounded-lg font-bold text-xs transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                        Enquiry
                      </button>
                      <button 
                        onClick={() => onSelectPackage(pkg)}
                        className="flex-1 flex items-center justify-center gap-1.5 bg-[#2563EB] text-white hover:bg-[#F59E0B] px-2 py-2 rounded-lg font-bold text-xs transition-colors shadow-sm"
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
            to="/domestic-packages"
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
