import React from 'react';

export function OurServices() {
  const services = [
    { title: 'Shirdi', image: '/Shridi-Package.png' },
    { title: 'Pilgrimage', image: '/Pilgrimage.png' },
    { title: 'Domestic', image: '/Domastic-Tours.png' },
    { title: 'International', image: '/International-tour.png' }
  ];

  return (
    <section className="pt-12 pb-2 bg-[#FBF9F5] relative overflow-hidden">
      {/* Devotional Bells Decoration */}
      <img 
        src="/temple-bell.jpg" 
        alt="" 
        className="absolute top-0 -left-10 sm:-left-16 md:-left-20 w-32 sm:w-40 md:w-56 xl:w-64 mix-blend-multiply pointer-events-none"
        aria-hidden="true"
      />
      <img 
        src="/temple-bell.jpg" 
        alt="" 
        className="absolute top-0 -right-10 sm:-right-16 md:-right-20 w-32 sm:w-40 md:w-56 xl:w-64 mix-blend-multiply pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#114088] font-serif">Our Services</h2>
          <div className="w-16 h-1 bg-[#F59E0B] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full max-w-7xl mx-auto px-2">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col items-center group cursor-pointer w-full">
              {/* Natural Image Container without white card */}
              <div className="w-full h-48 sm:h-64 lg:h-80 flex items-center justify-center transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-105">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-contain drop-shadow-sm group-hover:drop-shadow-md transition-all"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
