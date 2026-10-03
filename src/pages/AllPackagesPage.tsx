import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ALL_PACKAGES } from '../data/packages';
import { Package } from '../types';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getPackageSlug } from '../utils/slugs';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { 
  Search, Filter, Plane, Calendar, Clock, 
  MapPin, CheckCircle2, ChevronRight, Phone, MessageCircle 
} from 'lucide-react';

interface AllPackagesPageProps {
  onOpenEnquiry?: (title?: string) => void;
}

export function AllPackagesPage({ onOpenEnquiry }: AllPackagesPageProps) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'pilgrimage' | 'domestic' | 'international'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPackages = ALL_PACKAGES.filter((pkg) => {
    const matchesCategory = selectedCategory === 'all' || pkg.category === selectedCategory;
    const matchesSearch = 
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', label: 'All Packages', count: ALL_PACKAGES.length },
    { id: 'pilgrimage', label: 'Pilgrimage Yatras', count: ALL_PACKAGES.filter(p => p.category === 'pilgrimage').length },
    { id: 'domestic', label: 'Domestic Holidays', count: ALL_PACKAGES.filter(p => p.category === 'domestic').length },
    { id: 'international', label: 'International Tours', count: ALL_PACKAGES.filter(p => p.category === 'international').length }
  ];

  return (
    <div className="flex-grow bg-[#FBF9F5] font-sans pb-24">
      <SEOHead
        title="Tour Packages from Bangalore | Pilgrimage & Holiday Yatras | Sai Samarth Tours"
        description="Browse 30+ all-inclusive tour packages from Bangalore. Curated Shirdi flight yatras, Kashi Ayodhya, Jyotirlingas, Kashmir, Kerala, and international vacations with 3-star AC hotels & pure veg meals."
        canonical="https://saisamarthtours.com/tour-packages"
        ogImage="/shirdi-tour-hero-banner-desktop.webp"
        ogType="website"
      />

      {/* Hero Banner */}
      <div className="bg-[#0B1E3F] text-white pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-6">
            <Breadcrumbs items={[{ name: 'Tour Packages' }]} className="text-gray-300" />
          </div>

          <div className="max-w-3xl">
            <span className="text-[10px] sm:text-xs uppercase font-extrabold tracking-widest text-[#F59E0B] bg-amber-500/15 px-3.5 py-1.5 rounded-full border border-amber-500/30 mb-4 inline-block">
              Bangalore's Premier Tour Operator
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-brand mb-4 leading-tight">
              Tour Packages from Bangalore
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              Explore our complete collection of all-inclusive holiday packages and sacred pilgrimage yatras departing from Kempegowda International Airport (BLR). Verified 3-star AC hotels, pure veg dining, and dedicated tour manager care.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destination (e.g. Shirdi, Kashi, Kashmir, Bali)..."
                className="w-full pl-12 pr-4 py-3.5 bg-white text-gray-900 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] text-sm shadow-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 bg-gray-100 px-2 py-1 rounded"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Filter & Packages Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        {/* Category Tabs */}
        <div className="bg-white rounded-2xl p-2 sm:p-3 shadow-md border border-gray-200 flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`flex-1 min-w-[140px] px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#114088] text-white shadow-md'
                  : 'bg-transparent text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                selectedCategory === cat.id ? 'bg-amber-400 text-[#0B1E3F]' : 'bg-gray-100 text-gray-500'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Popular Destination Shortcuts */}
        <div className="flex flex-wrap items-center gap-2 mb-8 text-xs font-semibold text-gray-600">
          <span className="text-gray-400 font-bold uppercase text-[10px] tracking-wider">Popular Destinations:</span>
          {[
            { label: 'Shirdi', url: '/destinations/shirdi' },
            { label: 'Kashi', url: '/destinations/kashi' },
            { label: 'Kashmir', url: '/destinations/kashmir' },
            { label: 'Kerala', url: '/destinations/kerala' },
            { label: 'Ayodhya', url: '/destinations/ayodhya' },
            { label: '12 Jyotirlingas', url: '/destinations/jyotirlinga' }
          ].map((dest, i) => (
            <Link
              key={i}
              to={dest.url}
              className="bg-white hover:bg-amber-50 text-[#114088] border border-gray-200 hover:border-amber-300 px-3 py-1.5 rounded-lg transition-colors shadow-2xs"
            >
              {dest.label} →
            </Link>
          ))}
        </div>

        {/* Packages Grid */}
        {filteredPackages.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
            <p className="text-base text-gray-600 mb-4">No tour packages found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="bg-[#114088] text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image & Badges */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={`${pkg.title} from Bangalore - Sai Samarth Tours`}
                      width={400}
                      height={250}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#114088]/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-xs flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#F59E0B]" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#F59E0B] text-[#0B1E3F] text-xs font-extrabold px-3 py-1 rounded-lg shadow-md">
                      {pkg.price}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#EA580C]">
                        {pkg.destination}
                      </span>
                      <span className="text-[10px] text-gray-400 capitalize">
                        {pkg.category}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold font-serif-brand text-[#114088] group-hover:text-[#2563EB] transition-colors mb-3 line-clamp-2">
                      {pkg.title}
                    </h2>

                    <ul className="space-y-1.5 mb-6">
                      {pkg.highlights.slice(0, 3).map((hl, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 border-t border-gray-100 flex items-center gap-3">
                  <Link
                    to={`/package/${getPackageSlug(pkg)}`}
                    className="flex-1 bg-[#114088] hover:bg-[#0B1E3F] text-white text-center py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => onOpenEnquiry ? onOpenEnquiry(pkg.title) : navigate(`/package/${getPackageSlug(pkg)}`)}
                    className="bg-amber-100 hover:bg-amber-200 text-[#0B1E3F] px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom CTA Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-gradient-to-r from-[#0B1E3F] via-[#114088] to-[#0B1E3F] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F59E0B] bg-amber-500/20 px-3.5 py-1.5 rounded-full border border-amber-500/30 mb-3 inline-block">
              Custom Travel Planning
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-3">
              Need a Tailor-Made Tour Package from Bangalore?
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              We design private family vacations, corporate group outings, and senior citizen yatras with custom departure dates, flights, and vehicle upgrades.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="tel:+919187711649"
              className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0B1E3F] px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 91877 11649</span>
            </a>
            <a
              href={getWhatsAppUrl({ title: 'Tour Packages Consultation' })}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
