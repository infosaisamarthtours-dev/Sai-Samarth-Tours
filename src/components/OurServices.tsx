import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function OurServices() {
  const services = [
    { 
      title: 'Shirdi', 
      image: '/shirdi-packages-category-card.webp', 
      alt: 'Shirdi Sai Baba flight tour packages from Bangalore',
      path: '/shirdi-packages' 
    },
    { 
      title: 'Pilgrimage', 
      image: '/pilgrimage-packages-category-card.webp', 
      alt: 'Sacred temple pilgrimage yatra packages from Bangalore',
      path: '/pilgrimage-packages' 
    },
    { 
      title: 'Domestic', 
      image: '/domestic-packages-category-card.webp', 
      alt: 'Incredible India domestic holiday tour packages from Bangalore',
      path: '/domestic-packages' 
    },
    { 
      title: 'International', 
      image: '/international-packages-category-card.webp', 
      alt: 'International tour holiday packages from Bangalore with flights and visa',
      path: '/international-packages' 
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll animation every 3 seconds (3000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [services.length]);

  return (
    <section className="pt-12 pb-8 bg-[#FBF9F5] relative overflow-hidden">
      {/* Devotional Bells Decoration */}
      <img 
        src="/temple-bell-sacred-yatra.webp" 
        alt="Sacred temple bell decoration - Sai Samarth Tours" 
        width={256}
        height={256}
        loading="lazy"
        decoding="async"
        className="absolute top-0 -left-10 sm:-left-16 md:-left-20 w-32 sm:w-40 md:w-56 xl:w-64 mix-blend-multiply pointer-events-none z-0"
        aria-hidden="true"
      />
      <img 
        src="/temple-bell-sacred-yatra.webp" 
        alt="Sacred temple bell decoration - Sai Samarth Tours" 
        width={256}
        height={256}
        loading="lazy"
        decoding="async"
        className="absolute top-0 -right-10 sm:-right-16 md:-right-20 w-32 sm:w-40 md:w-56 xl:w-64 mix-blend-multiply pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#EA580C] bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30 inline-block mb-3 shadow-xs">
            ✦ Curated Journeys & Escapes ✦
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#114088] font-serif">Our Services</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* MOBILE VIEW: 1 Big item on screen with 3s auto-scroll animation */}
        <div className="block md:hidden relative max-w-sm mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl p-4 flex items-center justify-center min-h-[280px] bg-white/80 backdrop-blur-md border border-amber-500/20 shadow-lg">
            <Link 
              to={services[currentIndex].path} 
              className="w-full flex flex-col items-center group"
            >
              <div className="w-full h-64 sm:h-72 flex items-center justify-center transition-all duration-500 transform group-hover:scale-105">
                <img 
                  key={currentIndex}
                  src={services[currentIndex].image} 
                  alt={services[currentIndex].alt} 
                  width={280}
                  height={280}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain filter drop-shadow-lg transition-all duration-700 ease-in-out animate-fadeIn"
                />
              </div>
            </Link>
          </div>

          {/* Active Slide Indicators */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {services.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to ${s.title}`}
                className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] shadow-sm' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP VIEW: Clean 4-column grid layout with glassmorphic cards */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full max-w-7xl mx-auto px-2">
          {services.map((service, idx) => (
            <Link 
              key={idx} 
              to={service.path} 
              className="flex flex-col items-center group cursor-pointer w-full bg-white/80 backdrop-blur-md rounded-3xl p-4 border border-amber-500/15 hover:border-amber-500/40 shadow-sm hover:shadow-xl hover:shadow-[#F59E0B]/10 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="w-full h-64 lg:h-72 flex items-center justify-center transition-all duration-300 transform group-hover:scale-105">
                <img 
                  src={service.image} 
                  alt={service.alt} 
                  width={280}
                  height={280}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain drop-shadow-md group-hover:drop-shadow-xl transition-all"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
