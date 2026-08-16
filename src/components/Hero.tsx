import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: () => void;
}

const slides = [
  {
    id: 1,
    title: 'Begin Your Spiritual Journey to Shirdi',
    highlight: 'Shirdi',
    desc: 'Experience the divine blessings of Sai Baba with comfortable and well-planned Shirdi tour packages.',
    desktopImg: '/Shridi-banner-image.png',
    mobileImg: '/Shridi-mobile-view.png'
  },
  {
    id: 2,
    title: 'Walk the Path of Faith & Devotion',
    highlight: 'Faith & Devotion',
    desc: 'Visit India’s sacred temples and spiritual destinations with thoughtfully planned pilgrimage tours for a peaceful journey.',
    desktopImg: '/pilgrimage-banner-image.png',
    mobileImg: '/pilgrimage-mobile-view.png'
  },
  {
    id: 3,
    title: 'Explore the Beauty of India',
    highlight: 'India',
    desc: 'Discover incredible landscapes, vibrant cultures, and iconic destinations across India with our premium domestic tours.',
    desktopImg: '/Domastic-banner-image.png',
    mobileImg: '/Domastic-mobile-view.png'
  },
  {
    id: 4,
    title: 'Explore the World, Create Memories',
    highlight: 'Memories',
    desc: 'Discover breathtaking international destinations, unique cultures, and unforgettable experiences with our curated tour packages.',
    desktopImg: '/international_tour_desktop_banner_1600x587.png',
    mobileImg: '/International-mobile-view.png'
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section id="hero" className="relative w-full bg-[#FBF9F5] overflow-hidden">
      {/* Invisible spacers to establish container height exactly to the image aspect ratio */}
      <img src={slides[0].desktopImg} className="hidden sm:block w-full h-auto invisible pointer-events-none" aria-hidden="true" alt="" />
      <img src={slides[0].mobileImg} className="block sm:hidden w-full h-auto invisible pointer-events-none" aria-hidden="true" alt="" />

      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {/* Desktop Image */}
          <img 
            src={slide.desktopImg} 
            alt={slide.title} 
            className="hidden sm:block w-full h-full object-contain"
          />
          {/* Mobile Image */}
          <img 
            src={slide.mobileImg} 
            alt={slide.title} 
            className="block sm:hidden w-full h-full object-contain"
          />
          
          <div className="absolute inset-0 w-full h-full max-w-7xl mx-auto pl-10 sm:pl-16 md:pl-20 pr-4 sm:pr-12 flex flex-col justify-center items-start">
            <div className={`w-[68%] sm:w-2/3 lg:w-1/2 space-y-2 sm:space-y-4 ${slide.id === 3 || slide.id === 4 ? 'lg:ml-[10%]' : 'lg:-ml-[5%]'} ${slide.id === 4 ? '-mt-[3%] sm:-mt-[8%]' : ''}`}>
              <h1 className="font-serif text-[15px] xs:text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#114088] drop-shadow-sm sm:drop-shadow-md leading-tight sm:leading-tight">
                {slide.title.split(slide.highlight)[0]}
                <span className="text-[#F59E0B]">{slide.highlight}</span>
                {slide.title.split(slide.highlight)[1]}
              </h1>
              <p className="hidden sm:block text-xs sm:text-sm md:text-base text-gray-900 font-medium max-w-md drop-shadow-sm bg-white/30 p-2 sm:p-0 sm:bg-transparent rounded-lg backdrop-blur-sm sm:backdrop-blur-none leading-snug">
                {slide.desc}
              </p>
              <button 
                onClick={onOpenEnquiry}
                className="px-3.5 py-1.5 sm:px-6 sm:py-2.5 bg-[#114088] hover:bg-[#F59E0B] text-white font-semibold sm:font-bold text-xs sm:text-base rounded-lg shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slider Controls */}
      <button 
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2.5 rounded-full bg-white/50 hover:bg-white/90 text-[#114088] shadow-md border border-white/60 transition-colors backdrop-blur-md"
      >
        <ChevronLeft className="w-4 h-4 sm:w-7 sm:h-7" />
      </button>
      <button 
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2.5 rounded-full bg-white/50 hover:bg-white/90 text-[#114088] shadow-md border border-white/60 transition-colors backdrop-blur-md"
      >
        <ChevronRight className="w-4 h-4 sm:w-7 sm:h-7" />
      </button>
      
      {/* Pagination Dots */}
      <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 sm:h-2.5 rounded-full transition-all ${index === current ? 'bg-[#114088] w-6 sm:w-8' : 'bg-gray-400/60 hover:bg-gray-400 w-2 sm:w-2.5'}`}
          />
        ))}
      </div>
    </section>
  );
};
