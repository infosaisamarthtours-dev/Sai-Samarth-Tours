import React from 'react';
import { Compass, ClipboardList, TicketCheck, Luggage, Camera } from 'lucide-react';

export function JourneyProcess() {
  const steps = [
    {
      num: '01',
      icon: Compass,
      title: 'Tell Us Your Plan',
      desc: 'Share your destination, dates, and preferences.',
      pos: { left: '50%', top: '0%' }
    },
    {
      num: '02',
      icon: ClipboardList,
      title: 'Get Your Package',
      desc: 'Receive a customized itinerary and quote.',
      pos: { left: '85.35%', top: '14.65%' }
    },
    {
      num: '03',
      icon: TicketCheck,
      title: 'Confirm Your Trip',
      desc: 'Finalize your booking securely.',
      pos: { left: '100%', top: '50%' }
    },
    {
      num: '04',
      icon: Luggage,
      title: 'Travel With Confidence',
      desc: 'Enjoy a seamless journey with 24/7 support.',
      pos: { left: '85.35%', top: '85.35%' }
    },
    {
      num: '05',
      icon: Camera,
      title: 'Share Memories',
      desc: 'Capture and share your unforgettable moments.',
      pos: { left: '50%', top: '100%' }
    }
  ];

  return (
    <section className="py-20 bg-[#FAFAFA] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-row items-center min-h-[600px]">
          
          {/* Left Side: Title & Description */}
          <div className="w-5/12 flex flex-col justify-center relative z-20 pr-8">
            <div className="text-left relative z-10">
              <h2 className="text-5xl font-bold text-[#114088] mb-4 leading-tight font-serif-brand">
                How It <br/><span className="text-[#2563EB]">Works</span>
              </h2>
              <p className="text-lg text-gray-500 font-medium max-w-[280px]">
                Your dream vacation is just five simple steps away.
              </p>
            </div>
          </div>

          {/* Right Side: The Arc & Center Image */}
          <div className="w-7/12 relative h-[500px] flex items-center justify-start">
            
            {/* Center Image (Inside the arc) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full overflow-hidden shadow-2xl border-4 border-white z-10">
              <img 
                src="/How It works.png" 
                alt="Travel Journey" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#114088]/10 mix-blend-overlay"></div>
            </div>

            {/* The structural circle (Arc) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full border border-gray-300 z-0"></div>

            {/* The Steps on the Arc */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[450px] h-[450px] z-20">
              {steps.map((step, idx) => (
                <div 
                  key={idx} 
                  className="absolute flex items-center justify-center group"
                  style={{ left: step.pos.left, top: step.pos.top, transform: 'translate(-50%, -50%)' }}
                >
                  {/* The Node */}
                  <div className="relative w-14 h-14 bg-white rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center justify-center z-10 group-hover:scale-110 group-hover:shadow-[0_8px_25px_rgba(37,99,235,0.2)] transition-all duration-300 cursor-pointer">
                    <span className="text-2xl font-extrabold text-[#114088] group-hover:text-[#F59E0B] transition-colors">{step.num}</span>
                  </div>

                  {/* The Text (placed to the right of the node) */}
                  <div className="absolute left-full ml-4 w-56 opacity-90 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-lg font-bold font-serif-brand text-[#114088] mb-1.5 leading-tight group-hover:text-[#2563EB] transition-colors">{step.title}</h3>
                    <p className="text-xs text-gray-600 font-medium leading-snug">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout (Vertical Timeline) */}
        <div className="lg:hidden flex flex-col">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#114088] mb-4 font-serif-brand">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your dream vacation is just five simple steps away.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden shadow-lg border-4 border-white">
              <img 
                src="/How It works.png" 
                alt="Travel Journey" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="relative border-l-2 border-gray-200 ml-8 md:ml-12 space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative pl-8">
                <div className="absolute -left-[25px] top-0 w-12 h-12 bg-white rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center justify-center z-10">
                  <span className="text-lg font-bold text-[#2563EB]">{step.num}</span>
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-bold text-[#114088] mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
