import React from 'react';
import { Award, Users, Map, Headphones } from 'lucide-react';

export function TrustStatistics() {
  const stats = [
    { icon: Award, label: 'Experience', value: '10+ Years' },
    { icon: Users, label: 'Happy Travellers', value: '5000+' },
    { icon: Map, label: 'Customized', value: 'Packages' },
    { icon: Headphones, label: 'Travel Assistance', value: '24/7' },
  ];

  return (
    <section className="py-12 bg-[#114088] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center py-10 px-4 rounded-xl bg-[#1E50A0] shadow-md border border-white/5 transition-transform duration-300 hover:-translate-y-1">
              <stat.icon className="w-8 h-8 text-[#F59E0B] mb-5" strokeWidth={2} />
              <div className="text-3xl font-serif font-bold text-[#F59E0B] mb-2">{stat.value}</div>
              <div className="text-[11px] font-bold text-white uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
