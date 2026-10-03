import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ALL_PACKAGES } from '../data/packages';
import { Package } from '../types';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { getPackageSlug } from '../utils/slugs';
import { 
  Users, Bus, Building2, MapPin, 
  CheckCircle2, ChevronRight, Phone, MessageCircle, 
  ChevronDown, ChevronUp, Utensils, Award, Sparkles, ShieldCheck
} from 'lucide-react';

interface Props {
  onOpenEnquiry?: (title?: string) => void;
}

export function GroupPackagesPage({ onOpenEnquiry }: Props) {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const groupPackageIds = [
    'shirdi-regular',
    'shirdi-3-jyothirlinga',
    'kashi-ayodhya-prayagraj',
    'rameshwaram',
    'goa',
    'kerala',
    'golden-triangle',
    'thailand-regular'
  ];

  const groupPackages = groupPackageIds
    .map(id => ALL_PACKAGES.find(p => p.id === id))
    .filter((p): p is Package => p !== undefined);

  const groupPillars = [
    {
      icon: <Bus className="w-6 h-6 text-[#114088]" />,
      title: 'Exclusive AC Coaches & Tempo Travellers',
      desc: 'Private 12, 21, 33, and 45-seater luxury AC Volvo buses and Tempo Travellers dedicated exclusively to your group throughout the journey.'
    },
    {
      icon: <Award className="w-6 h-6 text-[#114088]" />,
      title: 'Bulk Flight & Hotel Discounts',
      desc: 'Significant per-person cost savings through our group contracting with major domestic airlines (IndiGo, Air India) and verified 3-star/4-star hotel chains.'
    },
    {
      icon: <Utensils className="w-6 h-6 text-[#114088]" />,
      title: 'Custom South Indian & Pure Veg Menus',
      desc: 'Dedicated buffet arrangements tailored to your community’s specific food preferences (Satvik, Jain, pure South Indian idli-vada, rasam, payasam).'
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#114088]" />,
      title: 'Doorstep Society & Office Pickups',
      desc: 'Convenient centralized pickup from your apartment complex, community center, or office in Bangalore (Whitefield, Hebbal, Yelahanka, Jayanagar, etc.).'
    },
    {
      icon: <Users className="w-6 h-6 text-[#114088]" />,
      title: 'Dedicated Tour Escort & Queue Handlers',
      desc: 'An experienced tour manager travels with your group from start to finish, managing group check-ins, luggage coordination, and VIP darshan lines.'
    },
    {
      icon: <Building2 className="w-6 h-6 text-[#114088]" />,
      title: 'Private Group Poojas & Special Darshans',
      desc: 'Coordination of private Vedic rituals, temple Abhishekam, Rudrabhishekam, and dedicated hall arrangements for your family or association.'
    }
  ];

  const faqs = [
    {
      q: 'What is the minimum group size required for a customized group tour package?',
      a: 'We organize customized private group tours for groups of 10 people and above. For smaller groups (4 to 9 travelers), we provide customized Innova Crysta / Tempo Traveller packages with the same VIP care.'
    },
    {
      q: 'Can pickup and drop be arranged directly from our apartment society in Bangalore?',
      a: 'Yes! For all private group departures, our AC coach will arrive directly at your society gates in Bangalore (such as Sobha, Prestige, Brigade, or Godrej properties) to collect all members and their luggage.'
    },
    {
      q: 'Do you offer group discounts for community pilgrimages (Shirdi, Kashi, Tirupati)?',
      a: 'Yes, groups of 15+ passengers receive preferential group airline block fares and bulk hotel room rates, typically reducing the per-person package cost by 10% to 20% compared to individual retail bookings.'
    },
    {
      q: 'How are elderly members in the group assisted during temple visits?',
      a: 'Our tour manager provides specialized queue management, battery car arrangements, and wheelchair assistance so seniors never struggle or feel left behind by younger group members.'
    }
  ];

  const pageJsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'serviceType': 'Group Tour Packages from Bangalore',
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
      'description': 'Customized group tour packages from Bangalore for community associations, family reunions, and corporate retreats with luxury AC coaches and bulk discounts.'
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
      onOpenEnquiry(pkgTitle || 'Group Tour Packages from Bangalore');
    }
  };

  return (
    <div className="flex-grow bg-[#FBF9F5] font-sans pb-24">
      <SEOHead
        title="Group Tour Packages from Bangalore | Custom Community & Corporate Yatras | Sai Samarth Tours"
        description="All-inclusive group tour packages from Bangalore for extended families, apartment associations, senior citizen forums & corporate offsites. Dedicated luxury AC Volvo coaches, customized meals & bulk discounts."
        canonical="https://saisamarthtours.com/group-tour-packages-from-bangalore"
        ogImage="/shirdi-tour-hero-banner-desktop.webp"
        ogType="website"
        jsonLd={pageJsonLd}
      />

      {/* Hero Banner Section */}
      <div className="bg-[#0B1E3F] text-white pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="/shirdi-tour-hero-banner-desktop.webp" 
            alt="Group Tour Packages from Bangalore - Sai Samarth Tours"
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
                { name: 'Group Tour Packages from Bangalore' }
              ]} 
              theme="dark" 
            />
          </div>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs uppercase font-extrabold tracking-widest text-[#F59E0B] bg-amber-500/15 px-3.5 py-1.5 rounded-full border border-amber-500/30 mb-4">
              <Users className="w-3.5 h-3.5" />
              Community & Corporate Group Specialist
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-brand mb-4 leading-tight">
              Group Tour Packages from Bangalore
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              Organizing travel for 10, 25, or 50+ members? Sai Samarth Tours specializes in seamless group travel departing from Bangalore. Private luxury AC Volvo buses, doorstep pickup, bulk airline savings, pure veg dining, and dedicated tour escorts.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => handleEnquire()}
                className="bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#D84E07] hover:to-[#B43807] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base flex items-center gap-2"
              >
                Request Custom Group Quote
                <ChevronRight className="w-4 h-4" />
              </button>
              <a
                href={getWhatsAppUrl({ title: 'Group Tour Packages from Bangalore' })}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Group Desk
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 6 Core Pillars of Group Travel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-brand text-[#114088] mb-3">
              Why Apartment Associations & Groups Choose Us
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We handle all the complex moving parts—tickets, rooms, buses, menus, and VIP darshans—so group organizers can relax and enjoy the trip.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {groupPillars.map((pillar, idx) => (
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

      {/* Recommended Group Packages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-10 gap-4">
          <div>
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#EA580C] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/80 mb-2 inline-block">
              Proven Group Circuits
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif-brand text-[#114088]">
              Most Popular Group Yatras & Getaways
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-2xl">
              Circuits optimized for group coordination, bulk hotel blocks, private coaches, and special darshan slots.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groupPackages.map((pkg) => (
            <div 
              key={pkg.id}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 border border-gray-100 flex flex-col group"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={`${pkg.title} group tour from Bangalore`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#0B1E3F]/85 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                  {pkg.duration}
                </div>
              </div>

              {/* Body */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center gap-1.5 text-xs text-amber-700 font-semibold mb-1">
                  <MapPin className="w-3 h-3 text-[#EA580C]" />
                  <span className="truncate">{pkg.destination}</span>
                </div>

                <h3 className="text-sm font-bold font-serif-brand text-gray-900 mb-2 group-hover:text-[#114088] transition-colors line-clamp-2">
                  {pkg.title}
                </h3>

                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-black text-[#114088]">
                    {pkg.price}
                  </span>
                  <button
                    onClick={() => handleEnquire(pkg.title)}
                    className="px-3 py-1.5 bg-[#EA580C] hover:bg-[#C2410C] text-white rounded-lg font-bold text-xs transition-colors shadow-2xs"
                  >
                    Group Rates
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comprehensive FAQs for Groups */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="text-center mb-10">
          <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#EA580C] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/80 mb-2 inline-block">
            Group Organizer Guide
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-brand text-[#114088]">
            Frequently Asked Questions for Group Travel
          </h2>
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

      {/* Group Booking CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="bg-gradient-to-br from-[#0B1E3F] via-[#114088] to-[#0A2558] rounded-3xl p-8 sm:p-14 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#F59E0B] bg-white/10 px-4 py-1.5 rounded-full inline-block mb-4">
              Best Bulk Pricing in Bangalore
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif-brand mb-4 leading-tight">
              Planning an Association, Family or Corporate Yatra?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-8 leading-relaxed">
              Share your approximate group count and desired travel dates. We will provide a complete customized proposal with bus options, flight blocks, and hotel accommodations within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => handleEnquire()}
                className="bg-[#EA580C] hover:bg-[#D84E07] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm sm:text-base"
              >
                Get Custom Group Proposal
              </button>
              <a
                href="tel:+919187711649"
                className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold px-7 py-4 rounded-xl transition-all text-sm sm:text-base flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#F59E0B]" />
                Call Group Desk: +91 9187711649
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
