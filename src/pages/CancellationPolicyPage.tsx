import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Clock, CheckCircle2, Phone } from 'lucide-react';
import { siteConfig } from '../data/config';

export function CancellationPolicyPage() {
  return (
    <div className="flex-grow bg-[#FBF9F5] font-sans pb-24">
      {/* Hero Banner */}
      <div className="bg-[#0B1E3F] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-200">Cancellation Policy</span>
          </div>
          <span className="text-xs uppercase font-bold tracking-widest text-[#F59E0B] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mb-4 inline-block">
            Terms & Policy
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif-brand mb-4">
            Cancellation & Refund Policy
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transparent, fair, and clear guidelines regarding tour cancellations, refunds, and rescheduling procedures.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 space-y-10">
        
        {/* Cancellation Fee Table Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold font-serif-brand text-[#114088] mb-6 flex items-center gap-3">
            <Clock className="w-6 h-6 text-[#F59E0B]" />
            Standard Cancellation Fee Structure
          </h2>

          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm mb-6">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#114088] text-white font-semibold">
                  <th className="p-4 w-1/2">Cancellation Notice Timeline</th>
                  <th className="p-4 text-center border-l border-blue-800/40">Applicable Cancellation Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-bold text-gray-800">15 Days & Above prior to departure date</td>
                  <td className="p-4 text-center font-extrabold text-[#F59E0B] text-base">50% of Package Cost</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors bg-amber-50/30">
                  <td className="p-4 font-bold text-gray-800">Days 0 to 15 prior to departure date</td>
                  <td className="p-4 text-center font-extrabold text-rose-600 text-base">100% of Package Cost</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-2">
            <div className="font-bold flex items-center gap-2 text-[#D97706]">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Important Notes on Flight & Train Tickets:</span>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Airfare and train ticket cancellation refunds are subject strictly to airline/railway cancellation rules and penalties.</li>
              <li>Sai Samarth Tours will not refund claims arising due to flight delays, mechanical faults, strikes, or sudden weather changes.</li>
              <li>Seats in flights are auto-assigned by respective airlines at the time of web check-in.</li>
            </ul>
          </div>
        </div>

        {/* Refund Processing Terms */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 space-y-4">
          <h2 className="text-xl font-bold font-serif-brand text-[#114088] flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            Refund Process & Timelines
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            All valid refund amounts will be processed within <strong>7 to 10 working days</strong> from the official receipt of written cancellation request. Refunds will be credited back via the original payment channel (Bank Transfer / UPI / Card).
          </p>
        </div>

        {/* Help Banner */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center space-y-3 shadow-sm">
          <h3 className="font-bold text-[#114088] text-lg">Need Assistance with your Booking?</h3>
          <p className="text-xs sm:text-sm text-gray-600">Contact our support team directly to request cancellation or booking modifications.</p>
          <a href={`tel:+91${siteConfig.phoneTentative}`} className="inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] hover:text-[#1D4ED8]">
            <Phone className="w-4 h-4" /> Call Customer Care (+91 {siteConfig.phoneTentative})
          </a>
        </div>

      </div>
    </div>
  );
}
