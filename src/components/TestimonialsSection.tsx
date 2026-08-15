import React from 'react';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Bangalore",
      text: "The Shirdi flight package was incredibly well-organized. The VIP darshan made our spiritual journey completely hassle-free. Highly recommended!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "Booked a Maldives trip for our anniversary. The team handled everything perfectly, from sea-plane transfers to a beautiful water villa setup.",
      rating: 5
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad",
      text: "Our Kashmir family trip was a dream come true. The accommodations were top-notch and our driver was very courteous and knowledgeable.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-[#114088] text-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif-brand font-bold text-white mb-4">
            Happy Travellers
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Read what our clients have to say about their experiences
          </p>
          <div className="w-24 h-1 bg-[#F59E0B] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 relative mt-8 pt-12">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#F59E0B] rounded-full flex items-center justify-center shadow-lg border-4 border-[#114088]">
                <Quote className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex justify-center mb-4">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#F59E0B] fill-current" />
                ))}
              </div>
              
              <p className="text-gray-200 text-center mb-6 italic">"{test.text}"</p>
              
              <div className="text-center border-t border-white/20 pt-4">
                <h4 className="font-bold text-white text-lg">{test.name}</h4>
                <p className="text-sm text-[#F59E0B]">{test.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
