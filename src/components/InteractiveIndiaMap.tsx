import React, { useState } from 'react';
import { ALL_PACKAGES } from '../data/packages';
import { Package } from '../types';

interface InteractiveIndiaMapProps {
  onSelectPackage: (pkg: Package) => void;
  onOpenEnquiry: (packageTitle?: string) => void;
}

export const InteractiveIndiaMap: React.FC<InteractiveIndiaMapProps> = ({ onSelectPackage, onOpenEnquiry }) => {
  const mapPackages = ALL_PACKAGES.filter((p) => p.coordinates);
  const [filterCategory, setFilterCategory] = useState<'all' | 'pilgrimage' | 'domestic'>('all');
  const [selectedPkg, setSelectedPkg] = useState<Package | null>(mapPackages[0] || null);

  const filteredPackages =
    filterCategory === 'all'
      ? mapPackages
      : mapPackages.filter((p) => p.category === filterCategory);

  const bengaluruPos = { x: 44, y: 78 };

  return (
    <section id="map-section" className="py-16 md:py-24 bg-[#FFFFFF] relative border-b border-[#EAE2D6]/30 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F59E0B]/10 rounded-full border border-[#F59E0B]/20 mb-3">
            <span className="material-symbols-outlined text-[#F59E0B] text-sm">explore</span>
            <span className="text-xs uppercase font-bold tracking-wider text-[#F59E0B]">
              Interactive Destination Map
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#114088] mb-3">
            Explore Sacred Destinations
          </h2>
          <p className="text-sm text-[#1C2B39]">
            Click any destination pin across India to discover details, duration, and pricing.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-5 py-2.5 rounded-lg text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
              filterCategory === 'all'
                ? 'bg-[#F59E0B] text-[#ffffff] shadow-md'
                : 'bg-[#ffffff] text-[#114088] border border-[#EAE2D6] hover:border-[#F59E0B]'
            }`}
          >
            All Destinations ({mapPackages.length})
          </button>
          <button
            onClick={() => setFilterCategory('pilgrimage')}
            className={`px-5 py-2.5 rounded-lg text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
              filterCategory === 'pilgrimage'
                ? 'bg-[#F59E0B] text-[#ffffff] shadow-md'
                : 'bg-[#ffffff] text-[#114088] border border-[#EAE2D6] hover:border-[#F59E0B]'
            }`}
          >
            Sacred Pilgrimages ({mapPackages.filter((p) => p.category === 'pilgrimage').length})
          </button>
          <button
            onClick={() => setFilterCategory('domestic')}
            className={`px-5 py-2.5 rounded-lg text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
              filterCategory === 'domestic'
                ? 'bg-[#F59E0B] text-[#ffffff] shadow-md'
                : 'bg-[#ffffff] text-[#114088] border border-[#EAE2D6] hover:border-[#F59E0B]'
            }`}
          >
            Domestic Escapes ({mapPackages.filter((p) => p.category === 'domestic').length})
          </button>
        </div>

        {/* Map & Card Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#ffffff] rounded-2xl border border-[#EAE2D6] p-4 sm:p-8 ambient-shadow">
          
          {/* Map Vector Column (Lg: 7 cols) */}
          <div className="lg:col-span-7 relative h-[420px] sm:h-[540px] bg-[#FBF9F5] rounded-xl border border-[#EAE2D6]/60 overflow-hidden flex items-center justify-center p-4">
            <svg viewBox="0 0 100 100" className="w-full h-full object-contain">
              <pattern id="materialGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#F59E0B" strokeWidth="0.1" strokeOpacity="0.15" />
              </pattern>
              <rect width="100" height="100" fill="url(#materialGrid)" />

              {/* India Subcontinent Path */}
              <path
                d="M 32 10 L 40 12 L 42 20 L 36 28 L 24 38 L 18 50 L 22 62 L 34 64 L 40 76 L 46 88 L 52 86 L 56 74 L 68 62 L 78 52 L 92 40 L 86 32 L 72 36 L 64 32 L 60 22 L 50 18 Z"
                fill="#ffffff"
                stroke="#F59E0B"
                strokeWidth="0.8"
                strokeOpacity="0.5"
              />

              {/* Bengaluru Base Hub Marker */}
              <circle cx={bengaluruPos.x} cy={bengaluruPos.y} r="2.5" fill="#F59E0B" className="animate-ping opacity-75" />
              <circle cx={bengaluruPos.x} cy={bengaluruPos.y} r="1.8" fill="#114088" stroke="#ffffff" strokeWidth="0.5" />
              <text x={bengaluruPos.x + 2.5} y={bengaluruPos.y + 1} fill="#114088" fontSize="2.4" fontWeight="bold">
                Bengaluru (HQ)
              </text>

              {/* Route line */}
              {selectedPkg?.coordinates && (
                <path
                  d={`M ${bengaluruPos.x} ${bengaluruPos.y} Q ${(bengaluruPos.x + selectedPkg.coordinates.x) / 2 - 5} ${(bengaluruPos.y + selectedPkg.coordinates.y) / 2} ${selectedPkg.coordinates.x} ${selectedPkg.coordinates.y}`}
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                  className="animate-route"
                />
              )}

              {/* Destination Pins */}
              {filteredPackages.map((pkg) => {
                if (!pkg.coordinates) return null;
                const isSelected = selectedPkg?.id === pkg.id;
                return (
                  <g key={pkg.id} onClick={() => setSelectedPkg(pkg)} className="cursor-pointer group">
                    <circle
                      cx={pkg.coordinates.x}
                      cy={pkg.coordinates.y}
                      r={isSelected ? '3.8' : '2.2'}
                      fill={isSelected ? '#F59E0B' : '#F59E0B'}
                      fillOpacity={isSelected ? '0.35' : '0.2'}
                    />
                    <circle
                      cx={pkg.coordinates.x}
                      cy={pkg.coordinates.y}
                      r="1.4"
                      fill={isSelected ? '#F59E0B' : '#114088'}
                      stroke="#ffffff"
                      strokeWidth="0.5"
                    />
                    <text
                      x={pkg.coordinates.x + 2}
                      y={pkg.coordinates.y + 0.8}
                      fill={isSelected ? '#F59E0B' : '#114088'}
                      fontSize="2.1"
                      fontWeight={isSelected ? 'bold' : '600'}
                    >
                      {pkg.title}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Spotlight Card Column (Lg: 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#FFFFFF] p-6 sm:p-8 rounded-xl border border-[#EAE2D6]">
            {selectedPkg ? (
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#EAE2D6]/40">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#F59E0B]">
                    SPOTLIGHT DESTINATION
                  </span>
                  <span className="bg-[#F59E0B]/10 text-[#F59E0B] text-[10px] uppercase font-bold px-2.5 py-0.5 rounded">
                    {selectedPkg.category}
                  </span>
                </div>

                <div className="h-44 rounded-lg overflow-hidden border border-[#EAE2D6] relative">
                  <img src={selectedPkg.image} alt={selectedPkg.title} className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 right-2 bg-[#F59E0B] text-[#ffffff] px-3 py-1 rounded text-xs font-serif font-bold">
                    {selectedPkg.price}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#114088] mb-1">
                    {selectedPkg.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#F59E0B] mb-2">{selectedPkg.destination}</p>
                  <p className="text-xs text-[#1C2B39] leading-relaxed line-clamp-3 mb-4">
                    {selectedPkg.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[#114088] font-medium bg-[#ffffff] p-2.5 rounded border border-[#EAE2D6]/40">
                    <span>Duration: <strong className="text-[#F59E0B]">{selectedPkg.duration}</strong></span>
                    <span>Min Pax: <strong className="text-[#F59E0B]">0{selectedPkg.minPax}</strong></span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#EAE2D6]/40">
                  <button
                    onClick={() => onSelectPackage(selectedPkg)}
                    className="flex-1 bg-[#F59E0B] text-[#ffffff] py-3 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-[#D97706] flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>View Details</span>
                    <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                  </button>
                  <button
                    onClick={() => onOpenEnquiry(selectedPkg.title)}
                    className="bg-[#ffffff] text-[#F59E0B] border border-[#F59E0B] px-5 py-3 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-[#F59E0B]/10 cursor-pointer"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-16 text-[#1C2B39]">
                Select any location pin on the map to inspect package details.
              </div>
            )}
          </div>
        </div>

        {/* Quick Chips */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-bold text-[#1C2B39] uppercase tracking-wider mr-2">Quick Select:</span>
          {mapPackages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setSelectedPkg(pkg)}
              className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                selectedPkg?.id === pkg.id
                  ? 'bg-[#F59E0B] text-[#ffffff] border-[#F59E0B]'
                  : 'bg-[#ffffff] text-[#114088] border-[#EAE2D6] hover:border-[#F59E0B]'
              }`}
            >
              📍 {pkg.title}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
