import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ALL_PACKAGES } from '../data/packages';
import { Package } from '../types';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { getPackageUrl } from '../utils/slugs';
import { 
  HeartHandshake, ShieldCheck, Clock, Plane, 
  MapPin, CheckCircle2, ChevronRight, Phone, MessageCircle, 
  ChevronDown, ChevronUp, Utensils, Award, Users, Star, Sparkles
} from 'lucide-react';

interface Props {
  onOpenEnquiry?: (title?: string) => void;
}

export function SeniorCitizenPackagesPage({ onOpenEnquiry }: Props) {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Curate packages best suited for senior citizens (pilgrimages with direct flights, VIP darshan, minimal walking)
  const seniorPackageIds = [
    'shirdi-regular',
    'shirdi-via-pune',
    'kashi-ayodhya-prayagraj',
    'kashi-ayodhya',
    'rameshwaram',
    'indore-ujjain',
    'baidyanath',
    'gujarat'
  ];

  const seniorPackages = seniorPackageIds
    .map(id => ALL_PACKAGES.find(p => p.id === id))
    .filter((p): p is Package => p !== undefined);

  const carePillars = [
    {
      icon: <Award className="w-6 h-6 text-[#EA580C]" />,
      title: 'Pre-Booked VIP Darshan Passes',
      desc: 'Skip exhausting 4 to 6-hour general queue lines. We arrange verified VIP Special Darshan entry tickets in advance at Shirdi Baba Samadhi, Kashi Vishwanath, Ayodhya Ram Mandir, and Tirumala.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#EA580C]" />,
      title: 'Dedicated Tour Manager Escort',
      desc: 'An experienced tour manager accompanies the group right from Bangalore Kempegowda Airport (BLR) departure, assisting with boarding, baggage, hotel check-ins, and walking support.'
    },
    {
      icon: <Utensils className="w-6 h-6 text-[#EA580C]" />,
      title: '100% Pure Veg & Satvik South Indian Dining',
      desc: 'Elderly digestion requires wholesome, hygienic meals. We provide freshly prepared pure vegetarian breakfast, lunch, and dinner with authentic South Indian flavors (idli, sambar, rasam, curd rice).'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#EA580C]" />,
      title: 'Lift-Equipped & Ground Floor AC Rooms',
      desc: 'Handpicked verified 3-star hotels featuring functioning elevators, western toilets, 24/7 hot water, and priority ground or lower-floor room allocations.'
    },
    {
      icon: <Plane className="w-6 h-6 text-[#EA580C]" />,
      title: 'Direct Flights & Wheelchair Facilitation',
      desc: 'We prioritize direct non-stop flights from Bangalore (BLR) to minimize airport transit fatigue, and coordinate complimentary airline wheelchair assistance for elders.'
    },
    {
      icon: <Clock className="w-6 h-6 text-[#EA580C]" />,
      title: 'Unhurried, Gentle Itineraries',
      desc: 'No rushed schedules or crack-of-dawn sprint travel. Ample afternoon rest intervals ensure elders complete holy yatras peacefully with complete spiritual bliss.'
    }
  ];

  const faqs = [
    {
      q: 'Can elderly parents travel alone from Bangalore without children accompanying them?',
      a: 'Yes, absolutely! Over 40% of our pilgrims are senior citizen couples or solo elders whose children live in Bangalore or abroad. Our dedicated tour manager escorts the group from Kempegowda Airport (BLR) departure until return, managing boarding passes, luggage, temple queues, and medications assistance.'
    },
    {
      q: 'How is wheelchair assistance coordinated at airports and temple complexes?',
      a: 'We pre-request complimentary airline wheelchair assistance during flight booking at Bangalore (BLR) and destination airports. Inside large temple complexes like Shirdi Sai Sansthan, Ayodhya, and Kashi, we arrange authorized battery-operated vehicles (e-rickshaws) and wheelchairs with handlers.'
    },
    {
      q: 'What kind of food and dietary requirements are taken care of?',
      a: 'We provide 100% pure vegetarian, hygienic meals. If any elder has dietary restrictions (such as diabetic-friendly meals, less spicy food, no onion/garlic Satvik food, or hot drinking water), our team coordinates with hotel and restaurant chefs to accommodate them.'
    },
    {
      q: 'What happens in case of a medical emergency during the tour?',
      a: 'Our tour managers are trained in basic first-aid and carry emergency contacts for verified local hospitals and on-call doctors in every pilgrimage city. We also assist with travel medical insurance facilitation.'
    },
    {
      q: 'Which pilgrimage package is easiest for senior citizens with mobility concerns?',
      a: 'Our 1 Night / 2 Days Direct Shirdi Flight Package is the most popular and easiest yatra. With a short 95-minute direct flight from BLR, pre-booked VIP Darshan passes, and hotel stays within 500 meters of the Samadhi Mandir, walking is kept to an absolute minimum.'
    }
  ];

  const pageJsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'serviceType': 'Senior Citizen Tour Packages from Bangalore',
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
      'description': 'Assisted senior citizen tour packages from Bangalore with direct flights, VIP darshan passes, wheelchair assistance, pure vegetarian meals, and dedicated tour escorts.'
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
      onOpenEnquiry(pkgTitle || 'Senior Citizen Tour Packages from Bangalore');
    }
  };

  return (
    <div className="flex-grow bg-[#FBF9F5] font-sans pb-24">
      <SEOHead
        title="Senior Citizen Tour Packages from Bangalore | Safe & Assisted Pilgrimages | Sai Samarth Tours"
        description="Assisted senior citizen tour packages from Bangalore. Comfortable pilgrimage tours to Shirdi, Kashi, Tirupati, Char Dham & Rameshwaram with wheelchair assistance, pure veg meals, 3-star AC hotels & tour managers."
        canonical="https://saisamarthtours.com/senior-citizen-tour-packages"
        ogImage="/shirdi-tour-hero-banner-desktop.webp"
        ogType="website"
        jsonLd={pageJsonLd}
      />

      {/* Hero Banner Section */}
      <div className="bg-[#0B1E3F] text-white pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="/shirdi-tour-hero-banner-desktop.webp" 
            alt="Senior Citizen Tour Packages from Bangalore - Sai Samarth Tours"
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
                { name: 'Senior Citizen Tour Packages' }
              ]} 
              theme="dark" 
            />
          </div>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs uppercase font-extrabold tracking-widest text-[#F59E0B] bg-amber-500/15 px-3.5 py-1.5 rounded-full border border-amber-500/30 mb-4">
              <HeartHandshake className="w-3.5 h-3.5" />
              Elder Care & Assisted Pilgrimage Specialist
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-brand mb-4 leading-tight">
              Senior Citizen Tour Packages from Bangalore
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              Fulfill your sacred pilgrimage dreams with zero physical stress. Meticulously designed for elderly devotees departing from Bangalore Kempegowda Airport (BLR) with confirmed VIP Darshan, wheelchair assistance, pure vegetarian South Indian meals, and caring tour managers by your side.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => handleEnquire()}
                className="bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#D84E07] hover:to-[#B43807] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base flex items-center gap-2"
              >
                Plan Senior Citizen Yatra
                <ChevronRight className="w-4 h-4" />
              </button>
              <a
                href={getWhatsAppUrl({ title: 'Senior Citizen Tour Packages from Bangalore' })}
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

      {/* 6 Core Pillars of Senior Care */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-brand text-[#114088] mb-3">
              Why Bangalore Families Trust Sai Samarth Tours for Parents
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We understand that traveling at 60+ requires gentle patience, personalized attention, and reliable support at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {carePillars.map((pillar, idx) => (
              <div key={idx} className="flex gap-4 p-5 rounded-xl bg-[#FBF9F5] border border-amber-100/60 hover:border-amber-300 transition-colors">
                <div className="p-3 bg-amber-50 rounded-xl shrink-0 h-fit border border-amber-200/60">
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

      {/* Recommended Senior Citizen Packages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-10 gap-4">
          <div>
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#EA580C] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/80 mb-2 inline-block">
              Recommended Itineraries
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif-brand text-[#114088]">
              Most Popular Senior Citizen Yatras
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-2xl">
              Flight itineraries structured with verified VIP Darshan, short walking distances, and comfortable 3-star AC accommodations.
            </p>
          </div>
          <Link
            to="/pilgrimage-packages"
            className="text-sm font-bold text-[#2563EB] hover:text-[#114088] flex items-center gap-1 shrink-0"
          >
            View All Pilgrimage Yatras &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {seniorPackages.map((pkg) => (
            <div 
              key={pkg.id}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 border border-gray-100 flex flex-col group"
            >
              {/* Image */}
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={`${pkg.title} senior citizen pilgrimage tour from Bangalore`}
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

      {/* Comprehensive FAQs for Senior Citizens */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="text-center mb-10">
          <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#EA580C] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/80 mb-2 inline-block">
            Clear Answers for Families
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-brand text-[#114088]">
            Frequently Asked Questions by Senior Citizens & Children
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Have questions about health, food, wheelchair assistance, or darshan timings? Here is everything you need to know.
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

      {/* Reassurance Call-to-Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="bg-gradient-to-br from-[#0B1E3F] via-[#114088] to-[#0A2558] rounded-3xl p-8 sm:p-14 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#F59E0B] bg-white/10 px-4 py-1.5 rounded-full inline-block mb-4">
              Peace of Mind for Your Entire Family
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif-brand mb-4 leading-tight">
              Ready to Plan a Sacred, Hassle-Free Yatra for Your Parents?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-8 leading-relaxed">
              Speak directly with our senior pilgrimage travel coordinator in Yelahanka, Bangalore. We will customize flight timings, room allocations, and VIP darshan passes according to your parents' comfort.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => handleEnquire()}
                className="bg-[#EA580C] hover:bg-[#D84E07] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm sm:text-base"
              >
                Request Free Senior Callback
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
