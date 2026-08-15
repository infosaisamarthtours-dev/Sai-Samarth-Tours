import React, { useRef } from 'react';
import { Users, Camera, Map, ShieldCheck, ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export function PromoAndReviews() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Expert Travel Guide',
      desc: 'Professional guidance for a hassle-free trip'
    },
    {
      icon: Map,
      title: 'Customizable Packages',
      desc: 'Tailor-made packages just for you'
    },
    {
      icon: Camera,
      title: 'Memorable Experiences',
      desc: 'Unique experiences that last a lifetime'
    },
    {
      icon: ShieldCheck,
      title: 'Trusted by Travelers',
      desc: '20,000+ happy travelers around the world'
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Bangalore",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      text: "Amazing experience! The Shirdi package was perfectly organized. Highly recommend Sai Samarth for unforgettable trips.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      location: "Bangalore",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
      text: "Excellent service and great support throughout our trip to Kashi. Will definitely book again!",
      rating: 5
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
      text: "Our family vacation to Rajasthan was beyond wonderful. Thank you Sai Samarth for making it so special!",
      rating: 5
    },
    {
      name: "Kavya Reddy",
      location: "Bangalore",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
      text: "The customized Andaman package exceeded all our expectations. Everything was seamless from start to finish.",
      rating: 5
    },
    {
      name: "Sneha Desai",
      location: "Mumbai",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
      text: "VIP darshan at Tirupati was so peaceful. The team arranged everything perfectly. Five stars!",
      rating: 5
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth / 2;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full py-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Big Centered Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-serif-brand text-[#114088] mb-4">
            Why Choose Sai Samarth?
          </h2>
          <div className="w-24 h-1 bg-[#F59E0B] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Top Section: Promo + Why Choose Us Grid */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16">
          
          {/* Promo Banner (Left) */}
          <div className="lg:w-5/12 rounded-2xl overflow-hidden relative shadow-lg min-h-[280px] lg:min-h-[320px]">
            <img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80" 
              alt="Adventure Awaits" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F2A4A]/90 via-[#0F2A4A]/60 to-transparent"></div>
            
            <div className="relative z-10 h-full p-8 flex flex-col justify-center text-white">
              <span className="font-script text-2xl text-amber-300 mb-2" style={{ fontFamily: "'Dancing Script', cursive" }}>Special Offer</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight font-serif-brand">Adventure Awaits!</h2>
              <p className="text-sm md:text-base font-medium text-gray-100 max-w-[200px] mb-8">
                Get up to <span className="font-bold text-amber-400">30% OFF</span> on selected tour packages.
              </p>
              
              <button className="bg-white text-[#114088] font-bold py-2.5 px-6 rounded-lg text-sm w-max hover:bg-amber-50 transition-colors flex items-center gap-2">
                Explore Deals
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Why Choose Us Grid (Right) */}
          <div className="lg:w-7/12 flex flex-col justify-center">
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100 transition-all duration-300 cursor-pointer group transform hover:-translate-y-1">
                  <div className="mt-1 p-2.5 bg-blue-50/50 rounded-xl group-hover:bg-[#F59E0B]/10 transition-colors duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#F59E0B]/20 scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full opacity-0 group-hover:opacity-100"></div>
                    <item.icon className="w-6 h-6 text-[#2563EB] group-hover:text-[#F59E0B] group-hover:scale-110 transition-all duration-300 relative z-10" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1C2B39] text-sm mb-1 group-hover:text-[#114088] transition-colors">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed max-w-[200px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section: Testimonials */}
        <div>
          <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-4">
            <h3 className="text-2xl font-bold text-[#1C2B39] font-serif-brand">What Our Travelers Say</h3>
          </div>

          {/* Carousel Container */}
          <div className="relative group">
            {/* Scroll Buttons */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 lg:-ml-6 z-20 bg-white shadow-lg border border-gray-200 text-[#114088] p-3 rounded-full opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-gray-50 focus:outline-none hidden md:block"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 lg:-mr-6 z-20 bg-white shadow-lg border border-gray-200 text-[#114088] p-3 rounded-full opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-gray-50 focus:outline-none hidden md:block"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Scrollable Area */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth pb-6 hide-scrollbar pt-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.map((test, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-6 rounded-xl border border-amber-200 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:border-amber-300 transition-all shrink-0 w-[85vw] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] snap-start"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img src={test.avatar} alt={test.name} className="w-12 h-12 rounded-full object-cover border border-amber-100" />
                    <div>
                      <h4 className="font-bold text-[#1C2B39] text-sm">{test.name}</h4>
                      <p className="text-[10px] text-gray-400 uppercase tracking-wide">{test.location}</p>
                      <div className="flex items-center gap-0.5 mt-1">
                        {[...Array(test.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-[#F59E0B] fill-[#F59E0B]" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed italic">
                    "{test.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
