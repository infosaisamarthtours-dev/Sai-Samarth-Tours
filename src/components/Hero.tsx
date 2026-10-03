import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: () => void;
}

const slides = [
  {
    id: 1,
    topBadge: "✦ TOP RATED TRAVEL AGENCY IN BANGALORE ✦",
    scriptTitle: "Tour Packages From Bangalore",
    mainTitle: "& Pilgrimage Tours",
    subBadge: "Direct Flights • VIP Darshan • 3-Star Hotels",
    desc: "Bangalore's leading tour operator for direct flight Shirdi tour packages from Bangalore with early morning Kakad Aarti, pure veg food, and senior citizen care.",
    desktopImg: '/shirdi-tour-hero-banner-desktop.webp',
    mobileImg: '/shirdi-tour-hero-banner-mobile.webp',
    seoAlt: "Tour packages from Bangalore and pilgrimage tours - Sai Samarth Tours"
  },
  {
    id: 2,
    topBadge: "✦ PILGRIMAGE TOURS FROM BANGALORE ✦",
    scriptTitle: "Sacred Temple Expeditions",
    mainTitle: "Kashi Ayodhya & Jyotirlinga Tours",
    subBadge: "Confirmed Darshan • Flights from BLR",
    desc: "All-inclusive pilgrimage tours from Bangalore to Kashi Vishwanath, Ayodhya Ram Mandir, and 12 Jyotirlingas with dedicated tour manager assistance.",
    desktopImg: '/pilgrimage-tours-hero-banner-desktop.webp',
    mobileImg: '/pilgrimage-tours-hero-banner-mobile.webp',
    seoAlt: "Kashi Ayodhya tour package from Bangalore with flights and VIP darshan - Sai Samarth Tours"
  },
  {
    id: 3,
    topBadge: "✦ DOMESTIC TOUR PACKAGES FROM BANGALORE ✦",
    scriptTitle: "Curated Holiday Packages",
    mainTitle: "Kashmir, Kerala & Leh Ladakh",
    subBadge: "Private AC Vehicles & Verified Resorts",
    desc: "Customized domestic holiday packages from Bangalore with flights, Dal Lake houseboats in Kashmir, Munnar tea hills in Kerala, and Rajasthan royal palaces.",
    desktopImg: '/domestic-tours-hero-banner-desktop.webp',
    mobileImg: '/domestic-tours-hero-banner-mobile.webp',
    seoAlt: "Domestic tour packages from Bangalore to Kashmir, Kerala, and Ladakh - Sai Samarth Tours"
  },
  {
    id: 4,
    topBadge: "✦ INTERNATIONAL TOUR PACKAGES FROM BANGALORE ✦",
    scriptTitle: "Global Family Vacations",
    mainTitle: "Thailand, Bali, Dubai & Malaysia",
    subBadge: "Complete Visa Assistance & Indian Meals",
    desc: "Handcrafted international tour packages from Bangalore departing Kempegowda Airport with complete visa guidance, 4-star stays, and Indian dining.",
    desktopImg: '/international-tours-hero-banner-desktop.webp',
    mobileImg: '/international-tours-hero-banner-mobile.webp',
    seoAlt: "International tour packages from Bangalore to Thailand, Dubai, Bali and Malaysia - Sai Samarth Tours"
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
      {slides.map((slide, index) => {
        const isFirst = index === 0;
        return (
          <div 
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {/* Unified Responsive Hero Image with WebP & priority loading */}
            <picture className="w-full h-full block">
              <source media="(min-width: 640px)" srcSet={slide.desktopImg} type="image/webp" width={1600} height={587} />
              <source media="(max-width: 639px)" srcSet={slide.mobileImg} type="image/webp" width={750} height={950} />
              <img 
                src={slide.desktopImg} 
                alt={slide.seoAlt}
                width={1600}
                height={587}
                loading={isFirst ? "eager" : "lazy"}
                fetchPriority={isFirst ? "high" : "low"}
                decoding={isFirst ? "sync" : "async"}
                className="w-full h-full object-contain"
              />
            </picture>
          
          <div className="absolute inset-0 w-full h-full max-w-7xl mx-auto pl-4 xs:pl-6 sm:pl-16 md:pl-20 pr-2 sm:pr-12 flex flex-col justify-center items-start">
            <div className={`w-[58%] xs:w-[60%] sm:w-2/3 lg:w-1/2 space-y-1.5 xs:space-y-2 sm:space-y-3.5 ${slide.id === 3 || slide.id === 4 ? 'lg:ml-[10%]' : 'lg:-ml-[4%]'} ${slide.id === 4 ? '-mt-[2%] sm:-mt-[8%]' : ''}`}>
              
              {/* Top Pill Badge */}
              <div className="inline-flex items-center gap-1 bg-[#114088] text-white px-2 py-0.5 sm:px-4 sm:py-1.5 rounded-full text-[6.5px] xs:text-[8.5px] sm:text-xs font-extrabold tracking-wider uppercase shadow-md border border-blue-400/40 whitespace-nowrap">
                {slide.topBadge}
              </div>

              {/* Headline with Mixed Script & Serif */}
              <div className="flex flex-col gap-0.5 sm:gap-1 mb-0.5">
                {isFirst ? (
                  <h1 className="font-serif text-[11px] xs:text-xs sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[#114088] drop-shadow-sm leading-tight tracking-tight">
                    <span className="block font-script text-[#EA580C] text-sm xs:text-base sm:text-5xl lg:text-6xl font-bold drop-shadow-xs leading-snug sm:leading-none sm:whitespace-nowrap">
                      {slide.scriptTitle}
                    </span>
                    <span className="block">
                      {slide.mainTitle}
                    </span>
                  </h1>
                ) : (
                  <div className="font-serif text-[11px] xs:text-xs sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[#114088] drop-shadow-sm leading-tight tracking-tight">
                    <span className="block font-script text-[#EA580C] text-sm xs:text-base sm:text-5xl lg:text-6xl font-bold drop-shadow-xs leading-snug sm:leading-none sm:whitespace-nowrap">
                      {slide.scriptTitle}
                    </span>
                    <span className="block">
                      {slide.mainTitle}
                    </span>
                  </div>
                )}
              </div>

              {/* Sub-Badge Pill */}
              <div className="hidden sm:inline-block">
                <span className="bg-[#114088] text-white px-3.5 py-1 sm:px-5 sm:py-1.5 rounded-full font-bold text-xs sm:text-sm shadow-md border border-blue-300/30">
                  {slide.subBadge}
                </span>
              </div>

              {/* Description - Pure Sentence Text (No Background Card) */}
              <p className="hidden sm:block text-xs sm:text-sm text-[#114088] font-semibold max-w-md leading-relaxed drop-shadow-xs">
                {slide.desc}
              </p>

              {/* Diamond Divider */}
              <div className="hidden sm:flex items-center gap-2.5 w-40 my-1 opacity-70">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent flex-1"></div>
                <div className="w-1.5 h-1.5 rotate-45 bg-[#F59E0B]"></div>
                <div className="h-[1px] bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent flex-1"></div>
              </div>

              {/* Golden Pill CTA Button */}
              <div className="pt-1 sm:pt-2">
                <button 
                  onClick={onOpenEnquiry}
                  className="px-3 py-1 sm:px-8 sm:py-3.5 bg-gradient-to-r from-[#F59E0B] via-[#F59E0B] to-[#EA580C] hover:from-[#EA580C] hover:to-[#F59E0B] text-[#114088] hover:text-white font-extrabold text-[9px] xs:text-[10px] sm:text-base rounded-full shadow-md hover:shadow-2xl hover:shadow-[#F59E0B]/40 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-1 sm:gap-2 border border-amber-300/50"
                >
                  <span>Explore Packages</span>
                  <span className="text-[10px] sm:text-lg">→</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      ); })}
      
      {/* Slider Controls (Desktop Only) */}
      <button 
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/50 hover:bg-white/90 text-[#114088] shadow-md border border-white/60 transition-colors backdrop-blur-md items-center justify-center"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>
      <button 
        onClick={nextSlide}
        aria-label="Next slide"
        className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/50 hover:bg-white/90 text-[#114088] shadow-md border border-white/60 transition-colors backdrop-blur-md items-center justify-center"
      >
        <ChevronRight className="w-7 h-7" />
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
