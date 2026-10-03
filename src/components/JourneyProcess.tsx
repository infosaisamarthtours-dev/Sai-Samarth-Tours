import React from 'react';
import { Compass, ClipboardList, TicketCheck, Luggage, Camera, ArrowRight, CheckCircle2 } from 'lucide-react';

export function JourneyProcess() {
  const steps = [
    {
      num: '01',
      icon: Compass,
      title: 'Tell Us Your Plan',
      desc: 'Share your preferred pilgrimage or holiday destination, travel dates, family size, and preferences.',
      badge: 'Step 1'
    },
    {
      num: '02',
      icon: ClipboardList,
      title: 'Get Custom Itinerary',
      desc: 'Receive a transparent day-wise travel plan, confirmed airline timings, and all-inclusive pricing quote.',
      badge: 'Step 2'
    },
    {
      num: '03',
      icon: TicketCheck,
      title: 'Confirm Your Booking',
      desc: 'Finalize your dates with secure advance booking, flight reservation, and hotel room allocation.',
      badge: 'Step 3'
    },
    {
      num: '04',
      icon: Luggage,
      title: 'Travel With Ease',
      desc: 'Enjoy verified 3-star AC hotels, VIP temple darshan entry, and dedicated Tour Manager guidance.',
      badge: 'Step 4'
    },
    {
      num: '05',
      icon: Camera,
      title: 'Cherish Memories',
      desc: 'Return home spiritually fulfilled with unforgettable memories, blessings, and lifelong stories.',
      badge: 'Step 5'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA] relative overflow-hidden font-sans border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Single H2 in DOM) */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#EA580C] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 inline-block mb-3">
            Simple 5-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#114088] font-serif-brand mb-3">
            How It <span className="text-[#2563EB]">Works</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium max-w-2xl mx-auto">
            From your first enquiry to returning home with sacred blessings, here is how we ensure a seamless, worry-free journey.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Unified Responsive Steps Container (Rendered exactly ONCE in DOM) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.num}
                className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-amber-400/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#114088] group-hover:bg-[#114088] group-hover:text-amber-400 flex items-center justify-center transition-colors shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-extrabold font-serif text-gray-200 group-hover:text-[#F59E0B] transition-colors">
                    {step.num}
                  </span>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#EA580C] bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60 inline-block mb-2">
                    {step.badge}
                  </span>
                  <h3 className="text-lg font-bold font-serif-brand text-[#114088] group-hover:text-[#2563EB] transition-colors mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Status / Arrow */}
                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-gray-400">
                  <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Verified Service
                  </span>
                  {idx < steps.length - 1 && (
                    <span className="hidden lg:block text-[#F59E0B] font-bold text-sm">
                      →
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Highlight Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#0B1E3F] via-[#114088] to-[#0B1E3F] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0">
              <Compass className="w-7 h-7 text-[#F59E0B]" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold font-serif">
                Need Help Selecting the Right Package or Dates?
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Our Bangalore travel coordinators are ready to craft a personalized tour plan for your family.
              </p>
            </div>
          </div>
          <a
            href="#quote"
            className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0B1E3F] px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 hover:scale-105 active:scale-95"
          >
            <span>Plan Your Journey</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
