import React from 'react';
import { ShieldCheck, HeartHandshake, Map, Headset } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left: Image / Visuals */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <img 
                src="/About session.png" 
                alt="About Sai Samarth Tours" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#114088]/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-[#F59E0B] text-white p-3 rounded-xl shadow-lg">
                    <span className="text-3xl font-extrabold font-serif">10+</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold font-serif leading-tight">Years of</div>
                    <div className="text-sm font-medium tracking-wider uppercase text-[#F59E0B]">Excellence</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-48 h-48 bg-[#FBF9F5] rounded-full border border-gray-200"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-blue-50 rounded-full"></div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-1 bg-[#F59E0B] rounded-full"></div>
              <span className="text-[#F59E0B] font-bold tracking-widest text-sm uppercase">About Us</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-[#114088] mb-6 font-serif leading-tight">
              Your Trusted Partner for Divine Journeys
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Welcome to <strong>Sai Samarth Tours</strong>, where faith meets comfort. With over a decade of experience, we specialize in curating seamless and deeply spiritual pilgrimage experiences to India's most revered destinations.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              From the sacred shrines of Shirdi to the ancient ghats of Kashi, our dedicated team ensures every aspect of your journey—from flights and accommodations to exclusive Darshan access—is handled with utmost care. Over <strong>5,000+ happy travellers</strong> have trusted us to guide their spiritual paths.
            </p>
            
            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-blue-50 p-2 rounded-lg text-[#2563EB]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1C2B39]">Safe & Secure</h4>
                  <p className="text-sm text-gray-500">Your safety is our priority</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-amber-50 p-2 rounded-lg text-[#F59E0B]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1C2B39]">Expert Guidance</h4>
                  <p className="text-sm text-gray-500">Knowledgeable tour managers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-emerald-50 p-2 rounded-lg text-emerald-600">
                  <Map className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1C2B39]">Custom Packages</h4>
                  <p className="text-sm text-gray-500">Tailored to your needs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-rose-50 p-2 rounded-lg text-rose-600">
                  <Headset className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1C2B39]">24/7 Support</h4>
                  <p className="text-sm text-gray-500">Always here to help</p>
                </div>
              </div>
            </div>
            
            <div>
              <a href="#featured" className="inline-flex items-center justify-center bg-[#2563EB] text-white px-8 py-3.5 rounded-lg font-bold hover:bg-[#1D4ED8] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
                Explore Our Packages
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
