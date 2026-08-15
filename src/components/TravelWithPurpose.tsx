import React from 'react';
import { ShieldCheck, HeartHandshake } from 'lucide-react';

export const TravelWithPurpose: React.FC = () => {
  return (
    <section id="travel-with-purpose" className="relative py-24 sm:py-32 bg-[#FFFFFF] overflow-hidden border-b border-[#C89B3C]/20">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C89B3C]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Asymmetrical Image Collage Column (Lg: 7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative z-10 grid grid-cols-12 gap-4">
              
              {/* Main Large Image */}
              <div className="col-span-8 overflow-hidden shadow-2xl border-2 border-[#C89B3C]/40 group">
                <img
                  src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1000&auto=format&fit=crop"
                  alt="Varanasi Ghats at Dawn"
                  className="w-full h-[380px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
              </div>

              {/* Overlapping Secondary Images */}
              <div className="col-span-4 flex flex-col gap-4">
                <div className="overflow-hidden shadow-xl border-2 border-[#C89B3C]/40 group h-[180px] sm:h-[230px]">
                  <img
                    src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=600&auto=format&fit=crop"
                    alt="Temple Heritage Sculpture"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  />
                </div>

                <div className="overflow-hidden shadow-xl border-2 border-[#C89B3C]/40 group h-[180px] sm:h-[230px] relative -ml-8 sm:-ml-12 z-20">
                  <img
                    src="https://images.unsplash.com/photo-1609946782701-79010375a2d8?q=80&w=600&auto=format&fit=crop"
                    alt="Spiritual Lamp Lighting"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  />
                </div>
              </div>
            </div>

            {/* Vertical Gold Typography Line */}
            <div className="hidden sm:block absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center z-20">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#C89B3C] font-bold whitespace-nowrap">
                HERITAGE • FAITH • DEVOTION
              </span>
            </div>
          </div>

          {/* Text Editorial Content Column (Lg: 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#C89B3C]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C89B3C] font-bold">
                OUR PHILOSOPHY
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#07152A] leading-tight mb-6 font-bold">
              Travel With <br />
              <span className="italic text-[#C89B3C] font-normal">Purpose.</span>
            </h2>

            <blockquote className="font-serif italic text-lg sm:text-xl text-[#07152A]/90 border-l-4 border-[#C89B3C] pl-4 mb-6 leading-relaxed">
              "Some journeys are measured in kilometres. Others are remembered for a lifetime."
            </blockquote>

            <p className="text-sm text-[#07152A]/80 font-light leading-relaxed mb-6">
              At <strong className="text-[#07152A] font-semibold">Sai Samarth Tours</strong>, we believe travel should touch the soul. Based in Bengaluru, our founders Naveen M & Chandra Shekar R envisioned a travel brand that honors the deep spiritual and cultural roots of sacred destinations across India and beyond.
            </p>

            <p className="text-sm text-[#07152A]/80 font-light leading-relaxed mb-8">
              Whether taking a revered pilgrimage to Shirdi, Kashi, or Vaishnodevi, or exploring the tranquility of Bhutan and Nepal, every itinerary is curated to provide peace of mind, seamless comfort, and sacred devotion.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#C89B3C]/30">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#07152A] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-[#D9B866]" />
                </div>
                <span className="text-xs text-[#07152A] font-semibold">Hassle-Free Darshans</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#07152A] flex items-center justify-center">
                  <HeartHandshake className="w-4 h-4 text-[#D9B866]" />
                </div>
                <span className="text-xs text-[#07152A] font-semibold">Personalized Care</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
