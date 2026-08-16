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
    <section className="relative z-30 bg-[#FBF9F5] border-y border-[#F59E0B]/20 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-5 bg-white/90 backdrop-blur-md border border-[#F59E0B]/20 hover:border-[#F59E0B]/60 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-[#F59E0B]/10 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl border border-[#F59E0B]/40 bg-gradient-to-br from-[#114088] to-[#0A2654] flex items-center justify-center shrink-0 group-hover:from-[#F59E0B] group-hover:to-[#EA580C] transition-all duration-500 shadow-sm">
                  <Icon className="w-6 h-6 text-[#F59E0B] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider text-[#114088] group-hover:text-[#EA580C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 font-medium mt-1 leading-snug">
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
