import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  items?: FaqItem[];
  title?: string;
  subtitle?: string;
}

export function FaqSection({ items, title = "Frequently Asked Questions", subtitle }: FaqSectionProps) {
  const defaultFaqs: FaqItem[] = [
    {
      question: "How do I book a tour package with Sai Samarth Tours?",
      answer: "You can book easily by clicking 'Enquire Now' or 'Get Free Quote' on any tour page. Alternatively, you can connect directly with our travel experts on WhatsApp (+91 9187711649) or call us for instant confirmation and date selection."
    },
    {
      question: "Are flights, hotels, and meals included in your tour packages?",
      answer: "Yes! All our signature packages from Bangalore include round-trip economy flights, verified 3-star/4-star AC hotel stays, private AC transportation, daily wholesome meals (Breakfast, Lunch & Dinner), and guided sightseeing."
    },
    {
      question: "Do you provide a Tour Manager for groups and senior citizens?",
      answer: "Yes! A professional, experienced Tour Manager accompanies every group tour to manage airport transfers, VIP temple entries, hotel check-ins, and special assistance for senior citizens throughout the journey."
    },
    {
      question: "Can these packages be customized for private families or corporate groups?",
      answer: "Absolutely! 100% of our packages can be customized for private family groups, couples, or corporate groups with flexible travel dates, vehicle upgrades, and personalized sightseeing schedules."
    },
    {
      question: "What is the cancellation and refund policy?",
      answer: "We offer transparent and customer-friendly cancellation terms. Cancellations made 15 days or more prior to departure incur a nominal 50% charge, while flight tickets are subject to airline refund rules. Full policy details are provided in your booking agreement."
    }
  ];

  const faqsToDisplay = items && items.length > 0 ? items : defaultFaqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-[#FBF9F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-[#114088] px-3.5 py-1.5 rounded-full border border-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4 text-[#F59E0B]" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif-brand font-bold text-[#114088] mb-3">
            {title}
          </h2>
          {subtitle ? (
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          ) : (
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto mt-4 rounded-full"></div>
          )}
        </div>

        <div className="space-y-4">
          {faqsToDisplay.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl shadow-xs border transition-all duration-300 overflow-hidden ${
                openIndex === idx ? 'border-[#F59E0B] ring-1 ring-[#F59E0B]/20 shadow-md' : 'border-[#EAE2D6] hover:border-gray-300'
              }`}
            >
              <button 
                className="w-full px-6 py-4 sm:py-5 text-left flex justify-between items-center focus:outline-none cursor-pointer gap-4"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-sm sm:text-base text-[#114088] flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  openIndex === idx ? 'bg-amber-100 text-[#D97706]' : 'bg-gray-100 text-gray-500'
                }`}>
                  {openIndex === idx ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 border-t border-gray-100/80 leading-relaxed animate-fadeIn">
                  <p className="pl-9">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
