import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, Phone, ArrowLeft, Search } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { getWhatsAppUrl } from '../utils/whatsapp';

export function NotFoundPage() {
  return (
    <div className="min-h-[75vh] bg-[#FBF9F5] flex items-center justify-center px-4 py-16">
      <SEOHead
        title="Page Not Found (404) | Sai Samarth Tours Bangalore"
        description="The page you are looking for might have been moved or removed. Explore our popular pilgrimage and holiday tour packages from Bangalore."
      />
      <div className="max-w-xl w-full bg-white rounded-3xl p-8 sm:p-12 text-center shadow-xl border border-gray-100">
        <span className="text-6xl sm:text-7xl font-extrabold font-serif text-[#EA580C] block mb-2">404</span>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#114088] mb-3">
          Page Not Found
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
          The pilgrimage route or destination page you're looking for doesn't exist or has been relocated. Let’s help you get back on track!
        </p>

        {/* Popular Shortcuts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left">
          <Link
            to="/shirdi-packages"
            className="p-3.5 rounded-xl bg-blue-50/50 hover:bg-blue-50 border border-blue-100 text-[#114088] font-bold text-xs sm:text-sm flex items-center justify-between transition-colors"
          >
            <span>Shirdi Tour Packages</span>
            <span>→</span>
          </Link>
          <Link
            to="/pilgrimage-packages"
            className="p-3.5 rounded-xl bg-amber-50/50 hover:bg-amber-50 border border-amber-100 text-[#114088] font-bold text-xs sm:text-sm flex items-center justify-between transition-colors"
          >
            <span>All Pilgrimage Yatras</span>
            <span>→</span>
          </Link>
          <Link
            to="/domestic-packages"
            className="p-3.5 rounded-xl bg-emerald-50/50 hover:bg-emerald-50 border border-emerald-100 text-[#114088] font-bold text-xs sm:text-sm flex items-center justify-between transition-colors"
          >
            <span>Domestic Holidays</span>
            <span>→</span>
          </Link>
          <Link
            to="/international-packages"
            className="p-3.5 rounded-xl bg-purple-50/50 hover:bg-purple-50 border border-purple-100 text-[#114088] font-bold text-xs sm:text-sm flex items-center justify-between transition-colors"
          >
            <span>International Tours</span>
            <span>→</span>
          </Link>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#114088] hover:bg-[#0B1E3F] text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <a
            href={getWhatsAppUrl({ title: 'Bangalore Tour Packages Enquiry' })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
