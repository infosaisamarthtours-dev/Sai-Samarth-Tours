import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function OurServices() {
  const services = [
    { title: 'Shirdi', image: '/Shridi-Package.png', path: '/shirdi-packages' },
    { title: 'Pilgrimage', image: '/Pilgrimage.png', path: '/pilgrimage-packages' },
    { title: 'Domestic', image: '/Domastic-Tours.png', path: '/domestic-packages' },
    { title: 'International', image: '/International-tour.png', path: '/international-packages' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll animation every 3 seconds (3000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [services.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <section className="pt-12 pb-8 bg-[#FBF9F5] relative overflow-hidden">
      {/* Devotional Bells Decoration */}
      <img 
        src="/temple-bell.jpg" 
        alt="" 
        className="absolute top-0 -left-10 sm:-left-16 md:-left-20 w-32 sm:w-40 md:w-56 xl:w-64 mix-blend-multiply pointer-events-none z-0"
        aria-hidden="true"
      />
      <img 
        src="/temple-bell.jpg" 
        alt="" 
        className="absolute top-0 -right-10 sm:-right-16 md:-right-20 w-32 sm:w-40 md:w-56 xl:w-64 mix-blend-multiply pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#114088] font-serif">Our Services</h2>
          <div className="w-16 h-1 bg-[#F59E0B] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* MOBILE VIEW: 1 Big item on screen with 3s auto-scroll animation */}
        <div className="block md:hidden relative max-w-sm mx-auto px-6">
          <div className="relative overflow-hidden rounded-2xl p-2 flex items-center justify-center min-h-[260px] sm:min-h-[300px]">
            <Link 
              to={services[currentIndex].path} 
              className="w-full flex flex-col items-center group"
            >
              <div className="w-full h-64 sm:h-72 flex items-center justify-center transition-all duration-500 transform group-hover:scale-105">
                <img 
                  key={currentIndex}
                  src={services[currentIndex].image} 
                  alt={services[currentIndex].title} 
                  className="w-full h-full object-contain filter drop-shadow-md transition-all duration-700 ease-in-out animate-fadeIn"
                />
              </div>
            </Link>
          </div>

          {/* Left / Right Arrow Controls for Mobile */}
          <button 
            onClick={handlePrev}
            aria-label="Previous service"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md text-[#114088] flex items-center justify-center hover:bg-[#114088] hover:text-white transition-colors z-20 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={handleNext}
            aria-label="Next service"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md text-[#114088] flex items-center justify-center hover:bg-[#114088] hover:text-white transition-colors z-20 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Slide Indicators */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {services.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to ${s.title}`}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  currentIndex === idx ? 'w-8 bg-[#F59E0B]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP VIEW: Clean 4-column grid layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full max-w-7xl mx-auto px-2">
          {services.map((service, idx) => (
            <Link 
              key={idx} 
              to={service.path} 
              className="flex flex-col items-center group cursor-pointer w-full"
            >
              <div className="w-full h-64 lg:h-80 flex items-center justify-center transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-105">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-contain drop-shadow-sm group-hover:drop-shadow-md transition-all"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

