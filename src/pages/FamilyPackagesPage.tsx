import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ALL_PACKAGES } from '../data/packages';
import { Package } from '../types';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { getPackageUrl } from '../utils/slugs';
import { 
  Users, ShieldCheck, Clock, Plane, 
  MapPin, CheckCircle2, ChevronRight, Phone, MessageCircle, 
  ChevronDown, ChevronUp, Utensils, Award, Heart, Sparkles, Compass
} from 'lucide-react';

interface Props {
  onOpenEnquiry?: (title?: string) => void;
}

export function FamilyPackagesPage({ onOpenEnquiry }: Props) {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [tab, setTab] = useState<'all' | 'domestic' | 'international'>('all');

  const familyPackageIds = [
    'kashmir',
    'kerala',
    'goa',
    'andaman',
    'rajasthan',
    'thailand-regular',
    'dubai',
    'malaysia-regular',
    'bali',
    'singapore-malaysia'
  ];

  const allFamilyPackages = familyPackageIds
    .map(id => ALL_PACKAGES.find(p => p.id === id))
    .filter((p): p is Package => p !== undefined);

  const displayedPackages = allFamilyPackages.filter(p => {
    if (tab === 'all') return true;
    return p.category === tab;
  });

  const familyPillars = [
    {
      icon: <Users className="w-6 h-6 text-[#114088]" />,
      title: 'Private AC Vehicles for Your Family',
      desc: 'No sharing seats with strangers. Every family vacation includes private, spacious AC vehicles (Innova Crysta / Ertiga / Tempo Traveller) with verified local chauffeurs.'
    },
    {
      icon: <Clock className="w-6 h-6 text-[#114088]" />,
      title: 'Relaxed, Child-Friendly Pacing',
      desc: 'No crack-of-dawn rush or exhausting non-stop schedules. Itineraries feature built-in afternoon relaxation, swimming pool hours, and flexible morning start times.'
    },
    {
      icon: <Utensils className="w-6 h-6 text-[#114088]" />,
      title: 'Kid-Friendly & Pure Veg Dining',
      desc: 'Traveling with toddlers or teenagers? We ensure hotels provide familiar kid-friendly breakfast options alongside authentic South Indian and pure vegetarian dining.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#114088]" />,
      title: 'Deluxe Family Stays & Interconnecting Rooms',
      desc: 'Handpicked verified 3-star & 4-star beach resorts and hill-station cottages with safe swimming pools, play areas, and connecting room availability.'
    },
    {
      icon: <Plane className="w-6 h-6 text-[#114088]" />,
      title: 'Direct BLR Flights & Hassle-Free Visas',
      desc: 'We select the most convenient flight timings departing from Kempegowda International Airport (BLR) and handle complete visa paperwork for Dubai, Thailand, and Malaysia.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#114088]" />,
      title: 'Handcrafted Unforgettable Memories',
      desc: 'From Shikara rides on Dal Lake to private houseboat cruises in Alleppey and Coral Island speedboats in Thailand, every activity is curated for memorable family bonding.'
    }
  ];

  const faqs = [
    {
      q: 'Are flight tickets from Bangalore included in your family packages?',
      a: 'Yes, all our primary family packages include round-trip economy flights departing from Kempegowda International Airport (BLR) with airport transfers and pre-arranged baggage allowances.'
    },
    {
      q: 'Can the daily itinerary be customized to fit young children or elderly grandparents?',
      a: 'Absolutely! Because our family tours use private vehicles, your driver and coordinator follow your family’s natural rhythm. You can pause for snacks, request photo stops, or return early to the resort whenever needed.'
    },
    {
      q: 'Which destination is best for a 5-day family trip from Bangalore during school holidays?',
      a: 'For domestic trips, Kashmir (snow and Shikara rides in Srinagar) and Kerala (misty Munnar hills & Alleppey backwater houseboats) are top family favorites. For international travel, Thailand (Bangkok & Pattaya) and Dubai offer short 4-hour direct flights and immense entertainment for all age groups.'
    },
    {
      q: 'How does visa facilitation work for international family holidays?',
      a: 'We manage the entire visa process! For Thailand and Malaysia, Indian passport holders enjoy Visa-Free entry. For Dubai, we handle 100% of the online UAE e-visa processing, document verification, and travel insurance.'
    }
  ];

  const pageJsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'serviceType': 'Family Tour Packages from Bangalore',
      'provider': {
        '@type': 'TravelAgency',
        'name': 'Sai Samarth Tours',
        'url': 'https://saisamarthtours.com',
        'telephone': '+916361181869'
      },
      'areaServed': {
        '@type': 'City',
        'name': 'Bangalore'
      },
      'description': 'Handcrafted domestic and international family tour packages departing from Bangalore Kempegowda Airport with private vehicles, kid-friendly resorts, and meals.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(f => ({
        '@type': 'Question',
        'name': f.q,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': f.a
        }
      }))
    }
  ];

  const handleEnquire = (pkgTitle?: string) => {
    if (onOpenEnquiry) {
      onOpenEnquiry(pkgTitle || 'Family Tour Packages from Bangalore');
    }
  };

  return (
    <div className="flex-grow bg-[#FBF9F5] font-sans pb-24">
      <SEOHead
        title="Family Tour Packages from Bangalore | Domestic & International Holidays | Sai Samarth Tours"
        description="Book best family tour packages from Bangalore with flights. Handcrafted vacations to Kashmir, Kerala, Goa, Andaman, Thailand, Dubai & Bali with kid-friendly activities, deluxe hotels & private AC vehicles."
        canonical="https://saisamarthtours.com/family-tour-packages-from-bangalore"
        ogImage="/domestic-tours-hero-banner-desktop.webp"
        ogType="website"
        jsonLd={pageJsonLd}
      />

      {/* Hero Banner Section */}
      <div className="bg-[#0B1E3F] text-white pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="/domestic-tours-hero-banner-desktop.webp" 
            alt="Family Tour Packages from Bangalore - Sai Samarth Tours"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3F] via-[#0B1E3F]/85 to-transparent z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs 
              items={[
                { name: 'Tour Packages', url: '/tour-packages' },
                { name: 'Family Tour Packages from Bangalore' }
              ]} 
              theme="dark" 
            />
          </div>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs uppercase font-extrabold tracking-widest text-[#F59E0B] bg-amber-500/15 px-3.5 py-1.5 rounded-full border border-amber-500/30 mb-4">
              <Users className="w-3.5 h-3.5" />
              Tailored Family Vacation Specialist
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-brand mb-4 leading-tight">
              Family Tour Packages from Bangalore
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              Create lifelong memories with your loved ones. Handcrafted holiday packages from Bangalore to Kashmir, Kerala, Goa, Andaman, Thailand, and Dubai with private AC vehicles, child-friendly resorts, Indian dining, and seamless flight connections.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => handleEnquire()}
                className="bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#D84E07] hover:to-[#B43807] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base flex items-center gap-2"
              >
                Plan Family Vacation
                <ChevronRight className="w-4 h-4" />
              </button>
              <a
                href={getWhatsAppUrl({ title: 'Family Tour Packages from Bangalore' })}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 6 Core Pillars of Family Travel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-brand text-[#114088] mb-3">
              Designed Specifically for Traveling with Family
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We eliminate the stress of logistics so parents, kids, and grandparents can simply focus on bonding and having fun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {familyPillars.map((pillar, idx) => (
              <div key={idx} className="flex gap-4 p-5 rounded-xl bg-[#FBF9F5] border border-blue-100/60 hover:border-blue-300 transition-colors">
                <div className="p-3 bg-blue-50 rounded-xl shrink-0 h-fit border border-blue-200/60">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#114088] text-base mb-1.5 font-serif-brand">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Family Packages Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-10 gap-4">
          <div>
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#EA580C] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/80 mb-2 inline-block">
              Top Pick Vacations
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif-brand text-[#114088]">
              Best Holiday Packages for Bangalore Families
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex bg-gray-100 p-1 rounded-xl text-xs font-bold">
            <button
              onClick={() => setTab('all')}
              className={`px-4 py-2 rounded-lg transition-all ${tab === 'all' ? 'bg-[#114088] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'}`}
            >
              All ({allFamilyPackages.length})
            </button>
            <button
              onClick={() => setTab('domestic')}
              className={`px-4 py-2 rounded-lg transition-all ${tab === 'domestic' ? 'bg-[#114088] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Domestic India
            </button>
            <button
              onClick={() => setTab('international')}
              className={`px-4 py-2 rounded-lg transition-all ${tab === 'international' ? 'bg-[#114088] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'}`}
            >
              International
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedPackages.map((pkg) => (
            <div 
              key={pkg.id}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 border border-gray-100 flex flex-col group"
            >
              {/* Image */}
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={`${pkg.title} family holiday package from Bangalore`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0B1E3F]/85 backdrop-blur-xs text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                  {pkg.duration}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-[#114088] font-black text-sm px-3 py-1 rounded-lg shadow-sm border border-gray-100">
                  {pkg.price}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1.5 text-xs text-amber-700 font-semibold mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>{pkg.destination}</span>
                </div>

                <h3 className="text-lg font-bold font-serif-brand text-gray-900 mb-3 group-hover:text-[#114088] transition-colors leading-snug">
                  {pkg.title}
                </h3>

                <ul className="space-y-2 mb-6 flex-grow">
                  {pkg.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-100 flex gap-2">
                  <Link
                    to={getPackageUrl(pkg)}
                    className="flex-1 text-center py-2.5 bg-gray-50 hover:bg-[#114088] text-gray-800 hover:text-white rounded-xl font-bold text-xs transition-colors border border-gray-200 hover:border-[#114088]"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => handleEnquire(pkg.title)}
                    className="flex-1 py-2.5 bg-[#EA580C] hover:bg-[#C2410C] text-white rounded-xl font-bold text-xs transition-colors shadow-sm"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comprehensive FAQs for Families */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="text-center mb-10">
          <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#EA580C] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/80 mb-2 inline-block">
            Family Vacation Planning
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-brand text-[#114088]">
            Frequently Asked Questions for Family Tours
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Essential information regarding kid-friendly activities, custom vehicles, meal preferences, and booking from Bangalore.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 hover:bg-gray-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-gray-900 text-sm sm:text-base font-serif-brand pr-2">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full shrink-0 transition-transform duration-200 ${isOpen ? 'bg-[#114088] text-white rotate-180' : 'bg-gray-100 text-gray-600'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="bg-gradient-to-br from-[#0B1E3F] via-[#114088] to-[#0A2558] rounded-3xl p-8 sm:p-14 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#F59E0B] bg-white/10 px-4 py-1.5 rounded-full inline-block mb-4">
              Customized For Your Family's Dates & Budget
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif-brand mb-4 leading-tight">
              Ready to Book Your Family Holiday from Bangalore?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-8 leading-relaxed">
              Contact our Bangalore family travel advisors today. We will compare flight combinations, hotel categories, and custom sightseeing options for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => handleEnquire()}
                className="bg-[#EA580C] hover:bg-[#D84E07] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm sm:text-base"
              >
                Get Custom Family Itinerary
              </button>
              <a
                href="tel:+919187711649"
                className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold px-7 py-4 rounded-xl transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#F59E0B]" />
                Call +91 9187711649
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
