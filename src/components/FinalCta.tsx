import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Props {
  onOpenEnquiry: () => void;
}

export function FinalCta({ onOpenEnquiry }: Props) {
  return (
    <section className="py-20 relative overflow-hidden bg-[#114088]">
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1590050752117-238cb122a275?auto=format&fit=crop&q=80" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#114088] via-[#114088]/90 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-serif-brand font-bold text-white mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Contact us today to get a customized tour package tailored to your preferences and budget.
        </p>
        <button 
          onClick={onOpenEnquiry}
          className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
        >
          Get Your Free Quote <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
