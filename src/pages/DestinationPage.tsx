import React, { useState } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { DESTINATIONS, ALL_DESTINATION_SLUGS } from '../data/destinations';
import { ALL_PACKAGES } from '../data/packages';
import { Package } from '../types';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { getPackageSlug } from '../utils/slugs';
import { 
  Plane, Clock, Calendar, CheckCircle2, ChevronRight, 
  MapPin, Star, Phone, MessageCircle, Utensils, 
  Sparkles, ShieldCheck, ChevronDown, ChevronUp, HelpCircle
} from 'lucide-react';

interface DestinationPageProps {
  onOpenEnquiry?: (title?: string) => void;
}

export function DestinationPage({ onOpenEnquiry }: DestinationPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!slug) return <Navigate to="/tour-packages" replace />;

  const destKey = slug.toLowerCase().trim();
  const dest = DESTINATIONS[destKey];

  if (!dest) {
    return <Navigate to="/tour-packages" replace />;
  }

  // Find all packages matching this destination
  const matchingPackages = ALL_PACKAGES.filter(p => 
    dest.packageIds.includes(p.id) || 
    p.destination.toLowerCase().includes(dest.name.toLowerCase()) ||
    p.title.toLowerCase().includes(dest.name.toLowerCase())
  );

  // Fallback to destination package IDs if filter is empty
  const packagesToDisplay = matchingPackages.length > 0 
    ? matchingPackages 
    : ALL_PACKAGES.filter(p => p.category === dest.category).slice(0, 4);

  // Other destinations for internal linking
  const sisterDestinations = ALL_DESTINATION_SLUGS
    .filter(s => s !== dest.id)
    .map(s => DESTINATIONS[s])
    .slice(0, 4);

  const destinationJsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'TouristDestination',
      'name': `${dest.name} Tour Packages from Bangalore`,
      'description': dest.seoDescription,
      'image': `https://saisamarthtours.com${dest.heroImage}`,
      'touristType': dest.category === 'pilgrimage' ? 'Pilgrim' : 'Leisure Traveler',
      'url': `https://saisamarthtours.com/destinations/${dest.id}`
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': dest.faqs.map(f => ({
        '@type': 'Question',
        'name': f.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': f.answer
        }
      }))
    }
  ];

  return (
    <div className="flex-grow bg-[#FBF9F5] font-sans pb-24">
      <SEOHead
        title={dest.seoTitle}
        description={dest.seoDescription}
        canonical={`https://saisamarthtours.com/destinations/${dest.id}`}
        ogImage={dest.heroImage}
        ogType="website"
        jsonLd={destinationJsonLd}
      />

      {/* Hero Banner Section */}
      <div className="bg-[#0B1E3F] text-white pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={dest.heroImage} 
            alt={`${dest.name} Tour Packages from Bangalore - Sai Samarth Tours`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3F] via-[#0B1E3F]/80 to-transparent z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          {(() => {
            const catMeta = dest.category === 'pilgrimage'
              ? { name: 'Pilgrimage Tours', url: '/pilgrimage-tour-packages' }
              : dest.category === 'international'
              ? { name: 'International Tours', url: '/international-tour-packages' }
              : { name: 'Domestic Tours', url: '/domestic-tour-packages' };
            return (
              <div className="mb-6">
                <Breadcrumbs 
                  items={[
                    { name: catMeta.name, url: catMeta.url },
                    { name: `${dest.name} Packages` }
                  ]} 
                  theme="dark" 
                />
              </div>
            );
          })()}

          <div className="max-w-3xl">
            <span className="text-[10px] sm:text-xs uppercase font-extrabold tracking-widest text-[#F59E0B] bg-amber-500/15 px-3.5 py-1.5 rounded-full border border-amber-500/30 mb-4 inline-block">
              {dest.category === 'pilgrimage' ? '🙏 Sacred Yatra from Bangalore' : '✈️ Curated Holiday from Bangalore'}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-brand mb-4 leading-tight">
              {dest.name} Tour Packages from Bangalore
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              {dest.tagline}. Pre-booked flights from Kempegowda International Airport (BLR), 3-star AC accommodations, pure vegetarian meals, and dedicated tour manager guidance.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#packages"
                className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0B1E3F] px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center gap-2"
              >
                <span>View {dest.name} Packages</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl({ title: `${dest.name} Tour Inquiry` })}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Tour Expert</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Facts Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#F59E0B] flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase block">Flight Time from BLR</span>
              <span className="text-xs sm:text-sm font-bold text-[#114088]">{dest.quickFacts.flightDuration}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase block">Best Time to Visit</span>
              <span className="text-xs sm:text-sm font-bold text-[#114088]">{dest.quickFacts.bestTime}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase block">Dining Inclusions</span>
              <span className="text-xs sm:text-sm font-bold text-[#114088]">{dest.quickFacts.meals}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase block">Assistance</span>
              <span className="text-xs sm:text-sm font-bold text-[#114088]">{dest.quickFacts.tourManager}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Available Packages Section */}
      <div id="packages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-gray-200 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#EA580C] bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-2">
              Available Itineraries
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#114088]">
              {dest.name} Tour Packages
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Select an itinerary below for full day-by-day sightseeing, flight inclusions, and instant booking.
            </p>
          </div>
          <div className="text-xs font-bold text-gray-500">
            Showing {packagesToDisplay.length} package{packagesToDisplay.length > 1 ? 's' : ''} from Bangalore
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packagesToDisplay.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={`${pkg.title} - Sai Samarth Tours`}
                    width={400}
                    height={250}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#114088]/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-xs">
                    {pkg.duration}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#F59E0B] text-[#0B1E3F] text-xs font-extrabold px-3 py-1 rounded-lg shadow-md">
                    {pkg.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#EA580C] block mb-1">
                    {pkg.destination}
                  </span>
                  <h3 className="text-lg font-bold font-serif-brand text-[#114088] group-hover:text-[#2563EB] transition-colors mb-3 line-clamp-2">
                    {pkg.title}
                  </h3>

                  <ul className="space-y-1.5 mb-6">
                    {pkg.highlights.slice(0, 3).map((hl, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                        <span className="text-emerald-500 font-bold shrink-0">✓</span>
                        <span className="line-clamp-1">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 pt-0 border-t border-gray-100 flex items-center gap-3">
                <Link
                  to={`/package/${getPackageSlug(pkg)}`}
                  className="flex-1 bg-[#114088] hover:bg-[#0B1E3F] text-white text-center py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  View Itinerary
                </Link>
                <button
                  onClick={() => onOpenEnquiry ? onOpenEnquiry(pkg.title) : navigate(`/package/${getPackageSlug(pkg)}`)}
                  className="bg-amber-100 hover:bg-amber-200 text-[#0B1E3F] px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Destination Overview Guide */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm">
          <div className="max-w-4xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#EA580C] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 inline-block mb-3">
              Bangalore Traveler Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#114088] mb-4">
              Visiting {dest.name} with Sai Samarth Tours
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
              {dest.overview}
            </p>

            <h3 className="text-lg font-bold font-serif text-[#114088] mb-3">Key Tour Highlights:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {dest.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-[#114088] text-sm sm:text-base mb-1">
                  Have Specific Dates in Mind for {dest.name}?
                </h4>
                <p className="text-xs text-gray-600">
                  Contact our travel specialists for custom flight tickets, private vehicle upgrades, and immediate quote.
                </p>
              </div>
              <a
                href={getWhatsAppUrl({ title: `${dest.name} Custom Inquiry` })}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#114088] hover:bg-[#0B1E3F] text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Talk to Advisor</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Destination FAQs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#EA580C] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 inline-block mb-3">
            Helpful Information
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#114088] mb-2">
            Frequently Asked Questions — {dest.name}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Everything Bangalore travelers need to know before visiting {dest.name}.
          </p>
        </div>

        <div className="space-y-4">
          {dest.faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                openFaqIndex === idx ? 'border-amber-400 shadow-md ring-1 ring-amber-400/20' : 'border-gray-200'
              }`}
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full px-6 py-4 sm:py-5 text-left flex justify-between items-center focus:outline-none cursor-pointer gap-4"
              >
                <span className="font-semibold text-sm sm:text-base text-[#114088] flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  {faq.question}
                </span>
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  {openFaqIndex === idx ? <ChevronUp className="w-4 h-4 text-amber-600" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
                </div>
              </button>
              {openFaqIndex === idx && (
                <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 border-t border-gray-100 leading-relaxed">
                  <p className="pl-9">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Sister Destinations Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="border-t border-gray-200 pt-10">
          <h3 className="text-lg font-bold font-serif text-[#114088] mb-6">
            Explore Other Popular Destinations from Bangalore:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {sisterDestinations.map((sister) => (
              <Link
                key={sister.id}
                to={`/destinations/${sister.id}`}
                className="bg-white rounded-2xl p-4 border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div>
                  <span className="font-bold text-xs sm:text-sm text-[#114088] group-hover:text-[#2563EB] transition-colors block">
                    {sister.name}
                  </span>
                  <span className="text-[10px] text-gray-400 capitalize">
                    {sister.category} Tours
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-amber-500 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
