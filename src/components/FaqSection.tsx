import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FaqSection() {
  const faqs = [
    {
      question: "How do I book a tour package?",
      answer: "You can book by clicking on 'Get a Free Quote' or 'Enquire Now' for your desired package. Alternatively, you can call us or WhatsApp us directly."
    },
    {
      question: "Are flights included in the packages?",
      answer: "Flight inclusions depend on the specific package you choose. Our Shirdi and International packages typically include flights. Please check the 'Inclusions' section of your chosen package."
    },
    {
      question: "Do you offer customized tour packages?",
      answer: "Yes, we specialize in customizing packages according to your preferences, travel dates, and budget. Tell us your plan, and we'll design the perfect itinerary."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellation policies vary by package and airline/hotel terms. Generally, a nominal fee is charged if cancelled within a specific timeframe. Detailed terms will be provided during booking."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-[#FBF9F5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif-brand font-bold text-[#114088] mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-[#F59E0B] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-[#EAE2D6] overflow-hidden">
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-[#114088]">{faq.question}</span>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-[#F59E0B]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
