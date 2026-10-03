import React from 'react';

export function GallerySection() {
  const galleryItems = [
    { src: 'https://images.unsplash.com/photo-1590050752117-238cb122a275?auto=format&fit=crop&q=80', alt: 'Shirdi Sai Baba and Maharashtra temple pilgrimage yatra' },
    { src: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80', alt: 'Holy Varanasi Kashi Vishwanath Ganga Aarti ceremony' },
    { src: 'https://images.unsplash.com/photo-1623854767648-e7bf80040fb5?auto=format&fit=crop&q=80', alt: 'Golden Temple Amritsar spiritual pilgrimage tour from Bangalore' },
    { src: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80', alt: 'Taj Mahal Agra and Golden Triangle holiday tour package' },
    { src: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80', alt: 'Goa beach holiday and scenic coastal tour package' },
    { src: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80', alt: 'Bali and international holiday tour with Sai Samarth Tours' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif-brand font-bold text-[#114088] mb-4">
            Travel Memories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Glimpses of joyful journeys with Sai Samarth Tours
          </p>
          <div className="w-24 h-1 bg-[#F59E0B] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="relative h-48 md:h-64 overflow-hidden rounded-xl group">
              <img 
                src={item.src} 
                alt={item.alt} 
                width={400}
                height={256}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
