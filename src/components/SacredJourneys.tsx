import React, { useState } from 'react';
import { PILGRIMAGE_PACKAGES } from '../data/packages';
import { Package } from '../types';
import { Plane, Bus, UserCheck, Clock, Building2, Camera, Utensils } from 'lucide-react';

interface SacredJourneysProps {
  onSelectPackage: (pkg: Package) => void;
  onOpenEnquiry: (packageTitle?: string) => void;
}

export const SacredJourneys: React.FC<SacredJourneysProps> = ({ onSelectPackage, onOpenEnquiry }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedPackages = showAll ? PILGRIMAGE_PACKAGES : PILGRIMAGE_PACKAGES.slice(0, 6);

  return (
    <section id="packages" className="w-full bg-[#ffffff] py-16 md:py-24 border-b border-[#EAE2D6]/30">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
        {/* Section Header matching HTML template */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#F59E0B] font-semibold mb-2 block">
            Divine Destinations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#114088] mb-4">
            Curated Pilgrimage Packages
          </h2>
          <p className="text-base text-[#1C2B39]">
            Carefully crafted itineraries to ensure a peaceful and spiritually enriching journey.
          </p>
        </div>

        {/* 3-Column Package Cards Grid matching HTML template */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-[#FFFFFF] rounded-xl border border-[#EAE2D6] overflow-hidden hover-lift flex flex-col justify-between shadow-xs"
            >
              {/* Top Image + Schedule Badge */}
              <div className="relative h-64 w-full">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 right-4 bg-[#ffffff] px-3 py-1 rounded-full text-xs font-semibold text-[#114088] shadow-xs flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-[#F59E0B]">schedule</span>
                  {pkg.duration}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-2xl font-bold text-[#114088]">
                      {pkg.title}
                    </h3>
                    {pkg.featured && (
                      <span className="bg-[#F59E0B]/10 text-[#F59E0B] px-2 py-1 rounded text-xs font-bold">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[#1C2B39] leading-relaxed line-clamp-2 mb-3">
                    {pkg.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-y-3 gap-x-2 mb-2 justify-items-center">
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center border border-amber-100">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                      </div>
                      <span className="text-[9px] font-bold text-[#1C2B39]">{pkg.duration.split(' ')[0]}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center border border-sky-100">
                        <Plane className="w-3.5 h-3.5 text-sky-500" />
                      </div>
                      <span className="text-[9px] font-bold text-[#1C2B39]">Flight</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100">
                        <Bus className="w-3.5 h-3.5 text-emerald-500" />
                      </div>
                      <span className="text-[9px] font-bold text-[#1C2B39]">AC Bus</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                        <Building2 className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                      <span className="text-[9px] font-bold text-[#1C2B39]">Hotels</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center border border-rose-100">
                        <Camera className="w-3.5 h-3.5 text-rose-500" />
                      </div>
                      <span className="text-[9px] font-bold text-[#1C2B39]">Sightseeing</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center border border-orange-100">
                        <Utensils className="w-3.5 h-3.5 text-orange-500" />
                      </div>
                      <span className="text-[9px] font-bold text-[#1C2B39]">Meal</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Row matching HTML template */}
                <div className="flex justify-between items-center pt-4 border-t border-[#EAE2D6]/30">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#1C2B39] uppercase font-bold tracking-wider">
                      Starting from
                    </span>
                    <span className="font-serif text-xl font-bold text-[#F59E0B]">
                      {pkg.price}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className="text-[#F59E0B] hover:text-[#F59E0B] font-semibold text-xs uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                  >
                    View Details
                    <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Button Below Grid matching HTML template */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="border-2 border-[#F59E0B] text-[#F59E0B] px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-[#F59E0B] hover:text-[#ffffff] transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
          >
            {showAll ? 'Show Fewer Packages' : 'Explore All Tours'}
          </button>
        </div>
      </div>
    </section>
  );
};
