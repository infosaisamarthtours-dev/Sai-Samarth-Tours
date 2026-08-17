import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Scale, UserCheck, ShieldAlert } from 'lucide-react';
import { siteConfig } from '../data/config';

export function TermsOfUsePage() {
  return (
    <div className="flex-grow bg-[#FBF9F5] font-sans pb-24">
      {/* Hero Banner */}
      <div className="bg-[#0B1E3F] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-200">Terms of Use</span>
          </div>
          <span className="text-xs uppercase font-bold tracking-widest text-[#F59E0B] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mb-4 inline-block">
            Legal Terms
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif-brand mb-4">
            Terms & Conditions of Use
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Please review the terms and conditions governing all tour bookings made with Sai Samarth Tours.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 space-y-8">
        
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-md border border-gray-100 space-y-8">
          
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif-brand text-[#114088] flex items-center gap-3">
              <FileText className="w-6 h-6 text-[#F59E0B]" />
              1. Tour Booking & Confirmation
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              All bookings are confirmed upon receipt of advance deposit. Final balance payment must be cleared prior to tour departure date as per invoice terms.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif-brand text-[#114088] flex items-center gap-3">
              <UserCheck className="w-6 h-6 text-[#2563EB]" />
              2. Passenger Identity & Documents
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Passengers are responsible for carrying valid original government-issued photo ID (Aadhaar / Voter ID / Passport) for domestic packages and valid passports with minimum 6-month validity for international packages.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif-brand text-[#114088] flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-rose-600" />
              3. Force Majeure & Itinerary Changes
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Sai Samarth Tours reserves the right to alter sightseeing sequences or substitute hotel properties of equal standard in case of unforeseen road blockades, natural calamities, temple schedule changes, or flight delays.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif-brand text-[#114088] flex items-center gap-3">
              <Scale className="w-6 h-6 text-emerald-600" />
              4. Governing Law & Jurisdiction
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              All disputes or legal proceedings arising out of services rendered by {siteConfig.name} shall be subject to the exclusive jurisdiction of the courts in <strong>Bengaluru, Karnataka, India</strong>.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
