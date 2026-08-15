import React from 'react';
import { HeartHandshake, ShieldCheck, Map, Clock, Star } from 'lucide-react';

export const WhySaiSamarth: React.FC = () => {
  const cards = [
    {
      icon: HeartHandshake,
      title: 'Trusted by 5000+ Travellers',
      description: 'Join our community of happy customers who have experienced memorable journeys with us.'
    },
    {
      icon: Map,
      title: 'Tailor-Made Packages',
      description: 'We customize every itinerary to match your exact preferences, budget, and travel dates.'
    },
    {
      icon: ShieldCheck,
      title: 'Safe & Secure Travel',
      description: 'Your safety is our priority with verified transport and trusted accommodation partners.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Our dedicated team is available around the clock to assist you during your entire trip.'
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'We ensure top-notch services, from 5-star stays to VIP darshans and luxury transport.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif-brand font-bold text-[#114088] mb-4">
            Why Choose Sai Samarth Tours?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to providing you with the best travel experience, blending comfort, safety, and joy.
          </p>
          <div className="w-24 h-1 bg-[#F59E0B] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {cards.map((card, idx) => (
            <div key={idx} className={`bg-[#FBF9F5] p-8 rounded-2xl hover-lift border border-[#EAE2D6] transition-all group ${idx === 4 ? 'lg:col-start-2' : ''}`}>
              <div className="w-14 h-14 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F59E0B] transition-colors">
                <card.icon className="w-7 h-7 text-[#F59E0B] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold font-serif-brand text-[#114088] mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
