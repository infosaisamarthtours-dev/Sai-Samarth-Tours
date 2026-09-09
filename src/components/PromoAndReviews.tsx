import React from 'react';
import { Users, Camera, Map, ShieldCheck, ArrowRight, Star, Quote, CheckCircle2 } from 'lucide-react';

export function PromoAndReviews() {
  const whyChooseUs = [
    {
      icon: Users,
      title: 'Expert Devotional Guide',
      desc: 'Dedicated tour managers ensuring smooth VIP Darshan & guidance.'
    },
    {
      icon: Map,
      title: 'Customizable Itineraries',
      desc: 'Tailor-made flight & AC coach packages for senior citizens & families.'
    },
    {
      icon: Camera,
      title: 'Memorable Expeditions',
      desc: 'Seamless travel, handpicked 3-star hotels & 100% vegetarian meals.'
    },
    {
      icon: ShieldCheck,
      title: 'Trusted by Thousands',
      desc: 'Over 20,000+ happy pilgrims guided with care over 10+ years.'
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Bangalore",
      packageTag: "Regular Shirdi Flight Yatra",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      text: "Amazing experience! The Shirdi flight package was perfectly organized from Bangalore. VIP Darshan at Sai Baba Samadhi Mandir was fast, and the tour manager took great care of my senior citizen parents.",
      rating: 5,
      date: "Verified Yatra • Feb 2026"
    },
    {
      name: "Rajesh Kumar",
      location: "Bangalore",
      packageTag: "Kashi, Ayodhya & Prayagraj Sangam",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
      text: "Excellent service and great support throughout our trip to Kashi & Ayodhya. Accommodations were top-class, flights were perfectly timed, and meals were 100% pure vegetarian. Will definitely book again!",
      rating: 5,
      date: "Verified Yatra • Jan 2026"
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad",
      packageTag: "Shirdi with 3 Jyothirlinga Tour",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
      text: "Visiting Bhimashankar, Trimbakeshwar and Grishneshwar in 3 days was a dream come true. Seamless AC coach transfers and zero hassle at temple gates. Thank you Sai Samarth for making it so special!",
      rating: 5,
      date: "Verified Yatra • Feb 2026"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#FBF9F5] border-b border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= 1. WHY CHOOSE US ================= */}
        <div className="text-center mb-12">
          <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#EA580C] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/80 inline-block mb-3 shadow-2xs">
            ⭐ Why Choose Sai Samarth Tours
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-[#114088] mb-3">
            Your Trusted Spiritual Travel Partner
          </h2>
          <p className="text-xs sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Delivering seamless pilgrimages, VIP Darshan passes, pre-booked flights & 3-star accommodations for over 10 years.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Promo Banner + Why Choose Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Promo Card (Left 5 cols) */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden relative shadow-xl min-h-[300px] lg:min-h-[340px] group flex flex-col justify-between p-8 text-white">
            <img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80" 
              alt="Special Devotional Offer" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A4A] via-[#0F2A4A]/80 to-transparent"></div>
            
            <div className="relative z-10">
              <span className="inline-block bg-amber-500 text-white font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full mb-3 shadow-sm">
                Special Pilgrimage Offers
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold leading-tight mb-2">
                Embark on Your Divine Yatra Today
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 max-w-xs leading-relaxed">
                Avail special group discounts & early bird VIP Darshan booking perks for Shirdi, Kashi & Char Dham circuits.
              </p>
            </div>
            
            <div className="relative z-10 pt-6 border-t border-white/20 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-amber-300 font-semibold block uppercase">All-Inclusive Flight Yatras</span>
                <span className="text-lg font-bold text-white">Starting from ₹17,999/-</span>
              </div>
              <a 
                href="#featured" 
                className="bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white font-bold py-2.5 px-5 rounded-xl text-xs hover:shadow-lg transition-all flex items-center gap-1.5 active:scale-95"
              >
                Book Yatra
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Feature Grid (Right 7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChooseUs.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-5 rounded-2xl border border-gray-200/80 hover:border-amber-500/40 shadow-2xs hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="p-3 bg-amber-50 rounded-xl text-[#EA580C] group-hover:bg-[#114088] group-hover:text-amber-300 transition-colors duration-300">
                    <item.icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <h4 className="font-serif font-bold text-[#114088] text-base group-hover:text-[#EA580C] transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed pl-0.5">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* ================= 2. WHAT OUR TRAVELERS SAY (NEW STRUCTURE) ================= */}
        <div className="pt-4">
          
          {/* Header & Rating Summary */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-gray-200/80 gap-4">
            <div>
              <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#EA580C] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/80 inline-block mb-3 shadow-2xs">
                💬 Pilgrim Testimonials & Reviews
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#114088]">
                What Our Travelers Say
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Real feedback from devotees who experienced seamless yatras with us.
              </p>
            </div>

            {/* Overall Rating Badge */}
            <div className="bg-white px-5 py-3 rounded-2xl border border-amber-300 shadow-sm flex items-center gap-3 self-start md:self-auto">
              <div className="text-center border-r border-gray-200 pr-3">
                <span className="text-2xl font-extrabold text-[#114088] leading-none block">4.9</span>
                <span className="text-[9px] text-gray-400 font-bold uppercase">out of 5</span>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-gray-700 block mt-0.5">
                  500+ Verified Pilgrim Reviews
                </span>
              </div>
            </div>
          </div>

          {/* 3-Column Testimonial Grid Structure */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((test, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-6 border border-gray-200/80 hover:border-amber-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
              >
                {/* Decorative Quote Icon Background */}
                <Quote className="absolute top-4 right-4 w-12 h-12 text-amber-500/10 pointer-events-none group-hover:text-amber-500/20 transition-colors" />

                <div>
                  {/* Top Row: Package Tag + Rating Stars */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="bg-amber-50 text-[#EA580C] px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider border border-amber-200/80 truncate max-w-[200px]">
                      {test.packageTag}
                    </span>
                    <div className="flex items-center gap-0.5">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-6 relative z-10">
                    "{test.text}"
                  </p>
                </div>

                {/* Footer: User Avatar & Info */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <img 
                      src={test.avatar} 
                      alt={test.name} 
                      className="w-10 h-10 rounded-full object-cover border-2 border-amber-400/80 shadow-xs" 
                    />
                    <div>
                      <h4 className="font-bold text-[#114088] text-xs sm:text-sm flex items-center gap-1">
                        {test.name}
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100" />
                      </h4>
                      <p className="text-[10px] text-gray-400 font-medium">
                        {test.location}
                      </p>
                    </div>
                  </div>

                  <span className="text-[9px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {test.date}
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
