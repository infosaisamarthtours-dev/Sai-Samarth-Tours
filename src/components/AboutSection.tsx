import React from 'react';
import { ShieldCheck, HeartHandshake, Map, Headset } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          {/* Left: Image / Visuals */}
          <div className="hidden lg:block w-full lg:w-1/2 relative shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] group">
              <img 
                src="/About session.png" 
                alt="About Sai Samarth Tours" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#114088]/80 to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center gap-3">
                  <div className="bg-[#F59E0B] text-white px-3 py-2 rounded-xl shadow-md">
                    <span className="text-2xl sm:text-3xl font-extrabold font-serif">10+</span>
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold font-serif leading-tight">Years of</div>
                    <div className="text-xs font-semibold tracking-wider uppercase text-[#F59E0B]">Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content (Streamlined to match image height) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-1 bg-[#F59E0B] rounded-full"></div>
              <span className="text-[#F59E0B] font-bold tracking-widest text-xs uppercase">About Us</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#114088] mb-3 font-serif leading-tight">
              Your Trusted Partner for Divine Journeys
            </h2>
            
            <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
              Welcome to <strong>Sai Samarth Tours</strong>, where faith meets comfort. With over a decade of experience, we specialize in curating seamless and deeply spiritual pilgrimage experiences to India's most revered shrines. From flights and 3-star accommodations to VIP Darshan access, over <strong>5,000+ happy travellers</strong> trust us for their sacred journeys.
            </p>
            
            {/* Features List */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="flex items-center gap-2.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <div className="bg-blue-100/70 p-1.5 rounded-lg text-[#2563EB] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#1C2B39]">Safe & Secure</h4>
                  <p className="text-[10px] text-gray-500">Your safety is priority</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <div className="bg-amber-100/70 p-1.5 rounded-lg text-[#F59E0B] shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#1C2B39]">Expert Guidance</h4>
                  <p className="text-[10px] text-gray-500">Dedicated tour managers</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <div className="bg-emerald-100/70 p-1.5 rounded-lg text-emerald-600 shrink-0">
                  <Map className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#1C2B39]">Custom Packages</h4>
                  <p className="text-[10px] text-gray-500">Tailored to your needs</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <div className="bg-rose-100/70 p-1.5 rounded-lg text-rose-600 shrink-0">
                  <Headset className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#1C2B39]">24/7 Support</h4>
                  <p className="text-[10px] text-gray-500">Always here to help</p>
                </div>
              </div>
            </div>
            
            <div>
              <a href="#featured" className="inline-flex items-center justify-center bg-[#2563EB] text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-[#1D4ED8] transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200">
                Explore Our Packages
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
