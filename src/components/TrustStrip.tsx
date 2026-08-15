import React from 'react';
import { Landmark, Compass, Mountain, Globe2 } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: Compass,
      title: 'CURATED JOURNEYS',
      subtitle: 'Thoughtfully planned itineraries focusing on comfort & meaning',
    },
    {
      icon: Landmark,
      title: 'PILGRIMAGE EXPERIENCES',
      subtitle: 'Sacred journeys with dedicated guidance and priority access',
    },
    {
      icon: Mountain,
      title: 'DOMESTIC ESCAPES',
      subtitle: 'Exploring the rich cultural landscapes of India',
    },
    {
      icon: Globe2,
      title: 'INTERNATIONAL DESTINATIONS',
      subtitle: 'Handcrafted Himalayan and global cultural odysseys',
    },
  ];

  return (
    <section className="relative z-30 bg-[#FAF8F5] border-y border-[#C89B3C]/30 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-5 bg-[#FFFFFF] border border-[#C89B3C]/20 hover:border-[#C89B3C] shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full border border-[#C89B3C]/50 bg-[#07152A] flex items-center justify-center shrink-0 group-hover:bg-[#C89B3C] transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#D9B866] group-hover:text-[#07152A] transition-colors" />
                </div>
                <div>
                  <h3 className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider text-[#07152A] group-hover:text-[#C89B3C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#07152A]/70 font-light mt-0.5 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
