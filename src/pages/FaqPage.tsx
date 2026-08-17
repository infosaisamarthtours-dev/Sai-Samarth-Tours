import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/config';

export function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqCategories = [
    {
      category: "Pilgrimage & Shirdi Tours",
      faqs: [
        {
          question: "How is VIP Darshan arranged for Shirdi Sai Baba packages?",
          answer: "Our Shirdi packages include pre-arranged VIP Darshan passes directly with the temple trust. Our experienced tour manager accompanies the group to ensure hassle-free, smooth darshan entry with minimal waiting time."
        },
        {
          question: "Are senior citizen facilities provided during Yatras?",
          answer: "Yes, absolutely! All pilgrimage itineraries are senior-citizen friendly with comfortable AC transport, wheelchair support at major temples, central hotel accommodations, and slow-paced schedules."
        },
        {
          question: "What dress code is required for temples in Kashi, Ayodhya, and Rameshwaram?",
          answer: "Traditional modest attire is required for temple entries. Men are advised to wear dhoti/kurta or trousers, and women can wear saree, salwar suit, or modest Indian traditional clothing."
        }
      ]
    },
    {
      category: "Booking & Payments",
      faqs: [
        {
          question: "How do I book a tour package with Sai Samarth Tours?",
          answer: "You can book directly by clicking 'Enquire Now' on any package page, filling our contact form, or reaching out to us via WhatsApp at +91 91877 11649. Our travel experts will assist you with dates, customized options, and confirmation."
        },
        {
          question: "What payment methods are accepted?",
          answer: "We accept UPI payments (GPay, PhonePe, Paytm), Net Banking, NEFT/RTGS bank transfers, Credit/Debit cards, and direct office payments."
        },
        {
          question: "Are custom family packages available?",
          answer: "Yes, 100%! We specialize in custom private tours for families, corporate groups, and senior citizen groups. We can tailor travel dates, vehicle types, hotel categories, and meal preferences."
        }
      ]
    },
    {
      category: "International & Visa Guidance",
      faqs: [
        {
          question: "Is visa required for Indian citizens traveling to Malaysia & Thailand?",
          answer: "Malaysia and Thailand currently offer Visa Exemption / Visa-on-Arrival facility for Indian passport holders for short tourist visits. Our team will guide you through all necessary documentation before travel."
        },
        {
          question: "Is travel insurance included in international packages?",
          answer: "Complimentary basic travel insurance for guests up to 59 years of age is included in select international packages like Malaysia & Maldives. Comprehensive medical & trip cancellation insurance is strongly recommended."
        }
      ]
    }
  ];

  let faqCounter = 0;

  return (
    <div className="flex-grow bg-[#FBF9F5] font-sans pb-24">
      {/* Hero Banner */}
      <div className="bg-[#0B1E3F] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-200">FAQ</span>
          </div>
          <span className="text-xs uppercase font-bold tracking-widest text-[#F59E0B] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mb-4 inline-block">
            Help Center
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif-brand mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our pilgrimage packages, booking process, inclusions, and international travel guidance.
          </p>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 space-y-12">
        {faqCategories.map((cat, catIdx) => (
          <div key={catIdx} className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold font-serif-brand text-[#114088] mb-6 border-b border-gray-100 pb-3 flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-[#F59E0B]" />
              {cat.category}
            </h2>
            <div className="space-y-4">
              {cat.faqs.map((faq) => {
                const currentIndex = faqCounter++;
                const isOpen = openIndex === currentIndex;
                return (
                  <div key={currentIndex} className="border border-gray-100 rounded-xl overflow-hidden transition-all">
                    <button
                      onClick={() => toggleFaq(currentIndex)}
                      className="w-full p-4 text-left font-bold text-[#1C2B39] text-sm sm:text-base flex justify-between items-center gap-4 bg-gray-50/50 hover:bg-blue-50/50 transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-[#F59E0B] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="p-4 sm:p-5 text-xs sm:text-sm text-gray-600 leading-relaxed bg-white border-t border-gray-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Contact Assistance Box */}
        <div className="bg-gradient-to-r from-[#114088] to-[#0B1E3F] text-white p-8 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-serif-brand mb-2">Still Have Questions?</h3>
            <p className="text-blue-100 text-sm">Our travel experts are available 24/7 to assist you with your booking.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a href={`tel:+91${siteConfig.phoneTentative}`} className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors">
              <Phone className="w-4 h-4" /> Call +91 {siteConfig.phoneTentative}
            </a>
            <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
