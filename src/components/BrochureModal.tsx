import React, { useState } from 'react';
import { Package } from '../types';
import { siteConfig } from '../data/config';
import { getWhatsAppUrl } from '../utils/whatsapp';
import confetti from 'canvas-confetti';
import { 
  X, User, Phone, FileText, Printer, 
  Utensils, Building2, Bus, Plane, 
  Camera, UserCheck, MapPin, Share2
} from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  pkg: Package;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, pkg, onClose }) => {
  const [step, setStep] = useState<'form' | 'pdf'>('form');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phoneNumber.trim()) return;

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.5 },
      colors: ['#2563EB', '#F59E0B', '#114088'],
    });

    setStep('pdf');
  };

  const defaultStandardInclusions = [
    'To and from economy class air travel for Bangalore-to-Bangalore tour guests',
    'Baggage Allowance as per airline policy',
    'Tour Manager Services throughout the entire tour',
    'Entrance fees of all sightseeing places visited as per itinerary',
    'All Meals (Daily Breakfast, Lunch & Dinner)',
    'Cost of internal airfare/train as mentioned in itinerary',
    'Transfers and sightseeing by sanitized A/C coach / private vehicle',
    'Accommodation on Twin/Double sharing basis in 3-star/4-star verified hotels',
    'Applicable GST included in the final package quotation'
  ];

  const defaultStandardExclusions = [
    'Room service, laundry, telephone calls, alcoholic beverages & personal expenses',
    'Upgradation in airline seat class or hotel room category',
    'Cost of air ticket deviation charges or early arrival/late departure extensions',
    'Porterage, guide tips, and personal donations at temples',
    'Individual medical, accident, hospitalization, or emergency costs',
    'Anything not explicitly mentioned in the Inclusions column'
  ];

  const inclusions = pkg.inclusions && pkg.inclusions.length > 0 ? pkg.inclusions : defaultStandardInclusions;
  const exclusions = pkg.exclusions && pkg.exclusions.length > 0 ? pkg.exclusions : defaultStandardExclusions;

  const handlePrint = () => {
    const printContent = document.getElementById('printable-brochure-container');
    if (!printContent) {
      window.print();
      return;
    }

    const printWindow = window.open('', '_blank', 'width=900,height=800');
    if (!printWindow) {
      window.print();
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>${pkg.title} - Official Tour Brochure | Sai Samarth Tours</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            @page {
              size: A4 portrait;
              margin: 10mm 8mm;
            }
            body {
              font-family: 'Plus Jakarta Sans', sans-serif;
              background-color: #FAF7F2;
              color: #114088;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              margin: 0;
              padding: 16px;
            }
            .font-serif {
              font-family: 'Noto Serif', serif;
            }
            .brochure-card {
              page-break-inside: avoid !important;
              break-inside: avoid !important;
              margin-bottom: 20px;
              background: #ffffff;
              border-radius: 16px;
            }
          </style>
        </head>
        <body>
          <div class="max-w-4xl mx-auto space-y-6">
            ${printContent.innerHTML}
          </div>
          <script>
            window.onload = function() {
              setTimeout(function() {
                window.print();
              }, 500);
            };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div 
      id="brochure-modal-overlay" 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
    >
      
      {/* Container Card */}
      <div 
        id="brochure-modal-card" 
        className={`bg-white rounded-3xl w-full ${step === 'form' ? 'max-w-xl' : 'max-w-4xl max-h-[96vh]'} overflow-hidden shadow-2xl relative my-auto border border-gray-100 flex flex-col transition-all duration-300`}
      >
        
        {/* TOP BAR / CONTROLS */}
        <div className="bg-[#0B1E3F] text-white px-5 py-3.5 flex items-center justify-between shrink-0 border-b border-blue-900/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-[#F59E0B] flex items-center justify-center border border-amber-400/30">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm sm:text-base text-white truncate max-w-[200px] sm:max-w-md">
                {step === 'form' ? 'Download Official Tour Brochure' : `${pkg.title} - Official PDF Brochure`}
              </h3>
              <p className="text-[10px] text-blue-200">Sai Samarth Tours • Bangalore Departure</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {step === 'pdf' && (
              <>
                <button
                  onClick={handlePrint}
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                  title="Print or Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Download / Print PDF</span>
                </button>
                <a
                  href={getWhatsAppUrl({ title: pkg.title, duration: pkg.duration, destination: pkg.destination })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm transition-all hidden sm:flex"
                  title="Share on WhatsApp"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </>
            )}

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer ml-1"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* BODY */}
        {step === 'form' ? (
          /* STEP 1: LEAD CAPTURE FORM */
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-4 bg-blue-50/60 p-4 rounded-2xl border border-blue-100 mb-6">
              <img 
                src={pkg.image} 
                alt={pkg.title} 
                className="w-16 h-16 rounded-xl object-cover border border-blue-200 shrink-0" 
              />
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-md inline-block mb-1">
                  {pkg.duration} • {pkg.destination}
                </span>
                <h4 className="font-serif text-sm sm:text-base font-bold text-[#114088] truncate">{pkg.title}</h4>
                <p className="text-xs text-gray-500 font-semibold mt-0.5">Starting from <span className="text-[#F59E0B] font-bold">{pkg.price}</span></p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#114088]">
                Get the Complete Color PDF Brochure
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Please enter your contact details below to instantly view and download the official multi-page itinerary & pricing brochure.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 font-medium outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Mobile Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="Enter 10-digit mobile number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 font-medium outline-none transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 text-sm font-bold text-white bg-gradient-to-r from-[#114088] via-[#2563EB] to-[#F59E0B] hover:from-[#0B1E3F] hover:to-[#D97706] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform active:scale-98 mt-2"
              >
                <FileText className="w-4 h-4 text-amber-300" />
                <span>Open PDF Brochure</span>
              </button>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-around text-[10px] text-gray-400 font-medium">
                <span>🔒 Privacy Protected</span>
                <span>⚡ Multi-Page Color PDF</span>
                <span>✨ 100% Free</span>
              </div>
            </form>
          </div>
        ) : (
          /* STEP 2: ALL PAGES COLOR PDF BROCHURE PREVIEW */
          <div 
            id="printable-brochure-container"
            className="overflow-y-auto p-4 sm:p-8 bg-[#FAF7F2] space-y-6"
            style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}
          >
            
            {/* PAGE 1: COVER HEADER & PACKAGE HERO */}
            <div className="brochure-card bg-white rounded-2xl p-6 sm:p-8 shadow-sm border-2 border-[#F59E0B] relative overflow-hidden">
              
              {/* Company Logo Header */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-gray-200 gap-4">
                <div className="flex items-center gap-3">
                  <img src="/Sai samarth tours logo.jpeg" alt={siteConfig.name} className="h-14 w-auto object-contain rounded p-1 bg-white" />
                  <div>
                    <h2 className="font-serif font-bold text-xl text-[#114088]">{siteConfig.name}</h2>
                    <p className="text-xs text-gray-500 font-semibold tracking-wider">Every journey deserves a beautiful story.</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase font-bold text-[#F59E0B] block tracking-wider">Bangalore Departure</span>
                  <span className="text-sm font-bold text-[#114088]">+91 91877 11649</span>
                </div>
              </div>

              {/* Hero Banner Box */}
              <div 
                className="relative rounded-2xl overflow-hidden p-6 sm:p-8 text-white shadow-md mb-6"
                style={{ backgroundColor: '#0B1E3F', backgroundImage: 'linear-gradient(135deg, #0B1E3F 0%, #114088 100%)' }}
              >
                <div className="relative z-10">
                  <span 
                    className="text-xs font-extrabold px-3 py-1 rounded-md inline-block mb-3 uppercase tracking-widest text-[#0B1E3F]"
                    style={{ backgroundColor: '#F59E0B' }}
                  >
                    {pkg.category === 'pilgrimage' ? 'PILGRIMAGE YATRA' : 'SPECIAL TOUR PACKAGE'}
                  </span>
                  
                  <h1 className="font-serif text-2xl sm:text-4xl font-bold leading-tight text-white mb-3">
                    {pkg.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-3 mt-2 text-xs">
                    <span className="bg-white/20 border border-white/30 px-3 py-1 rounded-full font-bold text-white">
                      ⏱️ {pkg.duration}
                    </span>
                    <span className="bg-white/20 border border-white/30 px-3 py-1 rounded-full font-bold text-white">
                      📍 {pkg.destination}
                    </span>
                    <span 
                      className="px-3.5 py-1.5 rounded-full font-extrabold text-[#0B1E3F] text-xs sm:text-sm"
                      style={{ backgroundColor: '#F59E0B' }}
                    >
                      FROM {pkg.price} / person
                    </span>
                  </div>
                </div>
              </div>

              {/* Every Package Includes Bar */}
              <div className="pt-2 border-t border-gray-100">
                <p className="text-center text-xs uppercase font-bold text-gray-500 tracking-widest mb-4">
                  — Every Package Includes —
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 text-center">
                  <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 flex flex-col items-center gap-1.5">
                    <Plane className="w-5 h-5 text-[#2563EB]" />
                    <span className="text-xs font-bold text-[#114088]">Flights</span>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 flex flex-col items-center gap-1.5">
                    <Building2 className="w-5 h-5 text-[#2563EB]" />
                    <span className="text-xs font-bold text-[#114088]">Hotels</span>
                  </div>
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex flex-col items-center gap-1.5">
                    <Bus className="w-5 h-5 text-[#D97706]" />
                    <span className="text-xs font-bold text-[#114088]">Transfers</span>
                  </div>
                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex flex-col items-center gap-1.5">
                    <Utensils className="w-5 h-5 text-emerald-600" />
                    <span className="text-xs font-bold text-[#114088]">All Meals</span>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-xl border border-purple-200 flex flex-col items-center gap-1.5">
                    <Camera className="w-5 h-5 text-purple-600" />
                    <span className="text-xs font-bold text-[#114088]">Sightseeing</span>
                  </div>
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex flex-col items-center gap-1.5">
                    <UserCheck className="w-5 h-5 text-[#D97706]" />
                    <span className="text-xs font-bold text-[#114088]">Tour Manager</span>
                  </div>
                </div>
              </div>
            </div>

            {/* PAGE 2: TOUR OVERVIEW & HIGHLIGHTS */}
            <div className="brochure-card bg-white rounded-2xl p-6 sm:p-8 shadow-sm border-2 border-[#114088]">
              <div 
                className="text-white px-5 py-3 rounded-xl font-serif font-bold text-base sm:text-lg mb-6 shadow-sm flex items-center justify-between"
                style={{ backgroundColor: '#114088' }}
              >
                <span>Tour Overview</span>
                <span className="text-xs font-normal text-blue-200">Sai Samarth Tours</span>
              </div>

              <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h4 className="font-serif font-bold text-[#114088] text-base mb-2">About The Journey</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{pkg.description}</p>
                </div>

                <div>
                  <h4 className="font-serif font-bold text-[#114088] text-base mb-3">Key Highlights & Attractions</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pkg.highlights?.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 p-3 bg-amber-50/60 rounded-xl border border-amber-300 text-xs font-semibold text-[#114088]">
                        <span className="text-[#D97706] text-base">★</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* PAGE 3: DAY-WISE ITINERARY */}
            <div className="brochure-card bg-white rounded-2xl p-6 sm:p-8 shadow-sm border-2 border-[#D97706]">
              <div 
                className="text-white px-5 py-3 rounded-xl font-serif font-bold text-base sm:text-lg mb-6 shadow-sm flex items-center justify-between"
                style={{ backgroundColor: '#D97706' }}
              >
                <span>Day-wise Itinerary</span>
                <span className="text-xs font-normal text-amber-100">{pkg.duration} Complete Schedule</span>
              </div>

              {pkg.sampleItinerary && pkg.sampleItinerary.length > 0 ? (
                <div className="space-y-4">
                  {pkg.sampleItinerary.map((item, idx) => (
                    <div key={idx} className="p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="flex items-center gap-3 mb-2">
                        <span 
                          className="w-7 h-7 rounded-full text-white font-bold text-xs flex items-center justify-center shrink-0"
                          style={{ backgroundColor: '#114088' }}
                        >
                          {idx + 1}
                        </span>
                        <div>
                          <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block">{item.day}</span>
                          <h4 className="font-serif font-bold text-[#114088] text-sm sm:text-base leading-snug">{item.title}</h4>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 pl-10 leading-relaxed mb-3">{item.detail}</p>
                      <div className="pl-10 pt-2 border-t border-gray-200 flex items-center gap-2 text-xs font-semibold text-gray-700">
                        <Utensils className="w-3.5 h-3.5 text-[#D97706]" />
                        <span>Meals Included: <strong>Breakfast, Lunch, Dinner</strong></span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-500 italic">Day-wise schedule will be customized and confirmed prior to departure.</p>
              )}
            </div>

            {/* PAGE 4: WHAT'S INCLUDED & EXCLUSIONS */}
            <div className="brochure-card bg-white rounded-2xl p-6 sm:p-8 shadow-sm border-2 border-[#114088]">
              <div 
                className="text-white px-5 py-3 rounded-xl font-serif font-bold text-base sm:text-lg mb-6 shadow-sm"
                style={{ backgroundColor: '#114088' }}
              >
                What's Included & Exclusions
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Inclusions */}
                <div className="bg-emerald-50 p-5 rounded-2xl border-2 border-emerald-300">
                  <h4 className="font-serif font-bold text-emerald-900 text-sm sm:text-base mb-3 flex items-center gap-2">
                    <span className="text-emerald-700 font-bold">✓</span>
                    Inclusions
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-700">
                    {inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                        <span className="leading-relaxed">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="bg-rose-50 p-5 rounded-2xl border-2 border-rose-300">
                  <h4 className="font-serif font-bold text-rose-900 text-sm sm:text-base mb-3 flex items-center gap-2">
                    <span className="text-rose-700 font-bold">✕</span>
                    Exclusions
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-700">
                    {exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold mt-0.5">✕</span>
                        <span className="leading-relaxed">{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* PAGE 5: PRICE DETAILS & CANCELLATION POLICY */}
            <div className="brochure-card bg-white rounded-2xl p-6 sm:p-8 shadow-sm border-2 border-[#D97706]">
              <div 
                className="text-white px-5 py-3 rounded-xl font-serif font-bold text-base sm:text-lg mb-6 shadow-sm"
                style={{ backgroundColor: '#D97706' }}
              >
                Price Details & Cancellation Policy
              </div>

              {/* Price Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div 
                  className="text-white p-5 rounded-2xl shadow-sm"
                  style={{ backgroundColor: '#0B1E3F' }}
                >
                  <span className="text-xs text-amber-300 font-bold uppercase tracking-wider block mb-1">Per Person • Twin Sharing</span>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#F59E0B]">{pkg.price}</div>
                  <p className="text-xs text-blue-200 mt-1">Bangalore Departure • Inclusive of Flights & AC Stays</p>
                </div>

                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 text-xs space-y-2 text-gray-700">
                  <div className="flex justify-between font-semibold">
                    <span>Duration:</span>
                    <strong className="text-[#114088]">{pkg.duration}</strong>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Min Passengers:</span>
                    <strong className="text-[#114088]">0{pkg.minPax} Pax</strong>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Departure City:</span>
                    <strong className="text-[#114088]">Bangalore (BLR)</strong>
                  </div>
                </div>
              </div>

              {/* Cancellation Table */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden mb-6">
                <div 
                  className="text-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider"
                  style={{ backgroundColor: '#114088' }}
                >
                  Cancellation Policy Table
                </div>
                <div className="divide-y divide-gray-200 text-xs">
                  <div className="flex justify-between p-3 bg-gray-50 font-bold text-gray-800">
                    <span>Cancellation Received Prior to Departure</span>
                    <span>Cancellation Fee Applicable</span>
                  </div>
                  <div className="flex justify-between p-3 text-gray-700">
                    <span>0 - 15 Days</span>
                    <span className="font-bold text-red-600">100% of Tour Cost</span>
                  </div>
                  <div className="flex justify-between p-3 text-gray-700">
                    <span>15 Days and Above</span>
                    <span className="font-bold text-amber-700">50% of Tour Cost</span>
                  </div>
                </div>
              </div>

              {/* Booking Hotline Card */}
              <div 
                className="text-white p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4"
                style={{ backgroundColor: '#0B1E3F' }}
              >
                <div>
                  <h4 className="font-serif font-bold text-base text-white">Ready to Book Your Journey?</h4>
                  <p className="text-xs text-blue-200 mt-0.5">Seats confirmed on advance receipt • Fast & easy booking</p>
                </div>
                <div className="flex items-center gap-3">
                  <a 
                    href="tel:+919187711649" 
                    className="text-[#0B1E3F] text-xs font-extrabold px-4 py-2.5 rounded-xl uppercase tracking-wider transition-colors"
                    style={{ backgroundColor: '#F59E0B' }}
                  >
                    📞 +91 91877 11649
                  </a>
                </div>
              </div>
            </div>

            {/* PAGE 6: BACK COVER CONTACT INFO */}
            <div 
              className="brochure-card text-white rounded-2xl p-6 sm:p-10 shadow-lg text-center space-y-6"
              style={{ backgroundColor: '#0B1E3F', backgroundImage: 'linear-gradient(180deg, #0B1E3F 0%, #061024 100%)' }}
            >
              <img src="/Sai samarth tours logo.jpeg" alt={siteConfig.name} className="h-16 w-auto object-contain mx-auto bg-white rounded p-1" />
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F59E0B]">{siteConfig.name}</h3>
                <p className="text-xs text-blue-200 mt-1">Bangalore's Trusted Pilgrimage & Holiday Specialist</p>
              </div>

              <div className="max-w-md mx-auto bg-white/10 rounded-2xl p-5 border border-white/20 space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-[#F59E0B]" />
                  <span>+91 91877 11649</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F59E0B]" />
                  <span>Bangalore, Karnataka, India</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[#F59E0B]">✉</span>
                  <span>info.saisamarthtours@gmail.com</span>
                </div>
              </div>

              <p className="text-xs text-gray-400 pt-4 border-t border-white/10">
                © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Generated exclusively for {fullName || 'Valued Traveler'}.
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
