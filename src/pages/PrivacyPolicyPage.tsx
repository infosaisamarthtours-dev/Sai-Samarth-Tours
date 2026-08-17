import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Eye, Database } from 'lucide-react';
import { siteConfig } from '../data/config';

export function PrivacyPolicyPage() {
  return (
    <div className="flex-grow bg-[#FBF9F5] font-sans pb-24">
      {/* Hero Banner */}
      <div className="bg-[#0B1E3F] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-200">Privacy Policy</span>
          </div>
          <span className="text-xs uppercase font-bold tracking-widest text-[#F59E0B] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mb-4 inline-block">
            Data Protection
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif-brand mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Your privacy is paramount. Learn how Sai Samarth Tours protects your personal information and travel data.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 space-y-8">
        
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-md border border-gray-100 space-y-8">
          
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif-brand text-[#114088] flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              1. Information We Collect
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              When you book a tour or enquire with Sai Samarth Tours, we collect necessary personal details such as your name, mobile phone number, email address, travel dates, passport copies (for international packages), and payment details required to complete flight, hotel, and darshan bookings.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif-brand text-[#114088] flex items-center gap-3">
              <Lock className="w-6 h-6 text-[#F59E0B]" />
              2. How We Use Your Data
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Your data is strictly utilized to:
            </p>
            <ul className="list-disc pl-6 text-xs sm:text-sm text-gray-600 space-y-1">
              <li>Book airline tickets, railway reservations, and hotel rooms.</li>
              <li>Secure temple Darshan passes and local transport vouchers.</li>
              <li>Send itinerary updates and WhatsApp travel support.</li>
              <li>Comply with Government Tax regulations (GST & TCS reporting).</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif-brand text-[#114088] flex items-center gap-3">
              <Eye className="w-6 h-6 text-[#2563EB]" />
              3. Data Protection & Non-Disclosure
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We do <strong>NOT</strong> sell, rent, or trade customer databases to third-party telemarketers or advertisers. Your data is shared exclusively with verified airline, hotel, and visa processing partners solely for fulfilling your travel bookings.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif-brand text-[#114088] flex items-center gap-3">
              <Database className="w-6 h-6 text-indigo-600" />
              4. Contact Us regarding Privacy
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              For any questions regarding your data privacy, write to our Data Compliance desk at <strong>{siteConfig.emailTentative}</strong>.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
