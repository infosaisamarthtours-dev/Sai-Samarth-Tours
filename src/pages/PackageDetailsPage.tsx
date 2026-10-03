import React, { useState, useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { ALL_PACKAGES } from '../data/packages';
import { EnquiryModal } from '../components/EnquiryModal';
import { ImageSlider } from '../components/ImageSlider';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  BookOpen, 
  CheckCircle, 
  Sparkles, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  UserCheck,
  Building2,
  Bus,
  Utensils,
  Plane,
  Camera,
  FileText,
  AlertCircle,
  Info
} from 'lucide-react';

import { getWhatsAppUrl } from '../utils/whatsapp';
import { BrochureModal } from '../components/BrochureModal';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { findPackageBySlugOrId, getPackageSlug } from '../utils/slugs';
import { getPackageBreadcrumbHierarchy } from '../utils/breadcrumbs';

export function PackageDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'inclusions'>('overview');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const pkg = findPackageBySlugOrId(ALL_PACKAGES, id);

  if (!pkg) {
    return <Navigate to="/" />;
  }

  // Context-aware dynamic FAQs based on package category, destination, and itinerary
  const packageFaqs = (() => {
    if (pkg.faqs && pkg.faqs.length > 0) return pkg.faqs;

    const id = pkg.id.toLowerCase();
    const dest = pkg.destination || pkg.title;
    const cat = pkg.category;

    if (id.includes('shirdi')) {
      return [
        {
          question: `How is VIP Darshan and Kakad Aarti organized in the ${pkg.title}?`,
          answer: `Our direct flight package includes pre-booked VIP Darshan passes for Sai Baba Samadhi Mandir directly coordinated with the temple trust. An experienced Tour Manager accompanies your group to assist senior citizens and family members for timely, hassle-free darshan and Aarti entry.`
        },
        {
          question: `What are the flight timings and airport transfers from Bangalore?`,
          answer: `We arrange early morning flights departing from Bangalore (BLR) to Shirdi or Pune airport. Upon arrival, a dedicated sanitized AC coach or vehicle transfers you directly to your hotel with all luggage and logistics managed by our coordinator.`
        },
        {
          question: `Are pure vegetarian meals and 3-star AC hotel accommodations included?`,
          answer: `Yes, 100%! All tour meals (breakfast, lunch, and dinner) are pure vegetarian, fresh, and hygienic with South and North Indian choices. You will stay in verified 3-star AC hotels situated close to the Shirdi temple complex.`
        },
        {
          question: `Is this Shirdi tour senior-citizen friendly with wheelchair support?`,
          answer: `Over 60% of our Shirdi travelers are elderly devotees. We prioritize ground-floor or elevator-accessible rooms, arrange battery car or wheelchair assistance inside the temple premises, and pace the itinerary gently.`
        },
        {
          question: `Can we customize or extend this package to visit Shani Shingnapur or Jyothirlingas?`,
          answer: `Yes! We offer 1N/2D and 2N/3D variations covering Shani Shingnapur, Trimbakeshwar, and Grishneshwar. We can also arrange private customized departures for your family with dedicated Innova Crysta or Tempo Traveller vehicles.`
        }
      ];
    }

    if (id.includes('kashi') || id.includes('ayodhya') || dest.toLowerCase().includes('kashi') || dest.toLowerCase().includes('varanasi')) {
      return [
        {
          question: `How are Kashi Vishwanath Darshan and Varanasi Ganga Aarti coordinated?`,
          answer: `We assist with pre-booked Darshan passes at Sri Kashi Vishwanath Jyotirlinga and reserve special boat seating for the grand evening Dashashwamedh Ghat Ganga Aarti, ensuring an intimate and memorable spiritual experience without excessive crowd strain.`
        },
        {
          question: `Can we perform holy rituals like Pind Daan, Tarpanam, or Triveni Sangam Snan?`,
          answer: `Yes! Our local coordinators facilitate trusted Vedic Purohits at Triveni Sangam (Prayagraj) and holy Varanasi Ghats for personalized rituals, Tarpanam, and sacred Abhishekams according to your family traditions.`
        },
        {
          question: `Are return flights from Bangalore directly to Varanasi included?`,
          answer: `Yes, the package includes round-trip economy flights from Kempegowda International Airport (BLR) to Varanasi (VNS) along with complete AC vehicle transfers covering Varanasi, Ayodhya, and Prayagraj.`
        },
        {
          question: `What hotel accommodations and pure vegetarian meals are provided?`,
          answer: `We provide verified 3-star AC hotel stays with modern amenities, elevator access, and hygienic pure vegetarian breakfast, lunch, and dinner daily suited for pilgrims.`
        },
        {
          question: `How is the tour paced for senior citizens visiting multiple holy cities?`,
          answer: `The itinerary is structured with minimal fatigue in mind. We utilize e-rickshaws in pedestrian temple zones where large vehicles cannot enter and maintain relaxed schedules guided by a dedicated Tour Manager.`
        }
      ];
    }

    if (cat === 'pilgrimage') {
      return [
        {
          question: `How is Darshan and temple entry organized at ${dest}?`,
          answer: `Our tour manager coordinates with local temple authorities and online booking portals for special Darshan slots and Aarti timings, minimizing physical fatigue and queue waiting times for your family.`
        },
        {
          question: `What flight and road transportation is included from Bangalore?`,
          answer: `The package includes return flights from Bangalore (BLR) to the nearest airport, paired with dedicated private AC coaches or tempo travellers for all intercity transfers and shrine visits.`
        },
        {
          question: `Are pure vegetarian South and North Indian meals provided throughout?`,
          answer: `Yes, wholesome pure vegetarian breakfast, lunch, and dinner are provided on all tour days, prepared hygienically to suit spiritual travel requirements.`
        },
        {
          question: `What special assistance is provided for elderly pilgrims on this yatra?`,
          answer: `We ensure elevator-equipped 3-star hotel rooms, accessible vehicle boarding, porter support, and assist with wheelchair or battery car arrangements wherever permitted by temple trusts.`
        },
        {
          question: `Can this pilgrimage itinerary be customized for private family groups?`,
          answer: `Yes, 100%! We can customize travel dates, add special Vedic Abhishekams, upgrade hotels, or arrange private vehicles (Innova / Tempo Traveller) tailored to your family's preferences.`
        }
      ];
    }

    if (cat === 'international') {
      return [
        {
          question: `What visa assistance and entry documentation do you provide for ${dest}?`,
          answer: `Our dedicated Bangalore international travel desk provides complete visa consultation, form filling, document verification, biometric appointment booking, and overseas travel insurance assistance.`
        },
        {
          question: `Are international flights departing directly from Bangalore included?`,
          answer: `Yes, the package features round-trip flights departing from Kempegowda International Airport (BLR) to ${dest} with convenient departure timings and airport transfers upon arrival.`
        },
        {
          question: `Are authentic Indian vegetarian meals available during the tour?`,
          answer: `Yes! We partner with verified Indian restaurants at every destination so you can enjoy authentic Indian vegetarian, Jain, and non-vegetarian meals as per your preference.`
        },
        {
          question: `What hotel accommodations and private sightseeing are included?`,
          answer: `You will stay in verified 3-star or 4-star international hotels with daily breakfast, private AC coaches for all city tours, and pre-booked tickets for all major attractions mentioned in the itinerary.`
        },
        {
          question: `Do you assist with Foreign Exchange (Forex) and international SIM cards?`,
          answer: `Yes, we guide you through authorized Forex multi-currency cards, currency notes exchange, and help activate international e-SIMs or roaming packs before departure.`
        }
      ];
    }

    // Default Domestic Holiday Packages
    return [
      {
        question: `What private vehicle and local sightseeing transfers are included for ${pkg.title}?`,
        answer: `You will enjoy dedicated private AC transport (Sedan for couples, Innova Crysta for families, or AC Tempo Traveller for larger groups) with experienced local chauffeurs for all airport transfers and sightseeing stops.`
      },
      {
        question: `Are round-trip flights from Bangalore and airport pickups included?`,
        answer: `Yes, our packages feature round-trip flights from Bangalore (BLR) with dedicated airport meet-and-greet and transfers directly to your hotel or resort.`
      },
      {
        question: `What hotel categories and meal plans are provided across ${dest}?`,
        answer: `We handpick verified 3-star/4-star AC hotels and scenic heritage resorts with daily wholesome breakfast and dinner included, alongside options for pure vegetarian dining.`
      },
      {
        question: `What is the best season to visit ${dest}, and what packing advice do you recommend?`,
        answer: `Our travel advisors provide season-specific guidance upon booking, including recommendations on seasonal apparel, weather forecasts, and essential packing checklists.`
      },
      {
        question: `Can we customize hotel categories, add extra days, or include special activities?`,
        answer: `Yes, 100%! All our domestic holiday itineraries are fully customizable. We can adjust trip duration, upgrade to premium luxury resorts, or add adventure and sightseeing activities upon request.`
      }
    ];
  })();

  // Fallback detailed content
  const defaultOverview = pkg.detailedContent?.overview || pkg.description || `Embark on an unforgettable journey with our ${pkg.title} package. Carefully curated by Sai Samarth Tours, this experience ensures comfort, spiritual bliss, and memorable sightseeing.`;
  const defaultSignificance = pkg.detailedContent?.significance || (pkg.category === 'pilgrimage' ? `${pkg.title} is a sacred pilgrimage destination visited by thousands of devotees seeking divine peace, spiritual rejuvenation, and blessings.` : `${pkg.title} offers rich natural beauty, cultural heritage, and iconic landmarks that create lasting memories for travelers.`);
  const defaultBestTime = pkg.detailedContent?.bestTimeToVisit || 'October to March is generally the best time to visit when the climate is pleasant and comfortable for sightseeing and temple visits.';
  const defaultPlacesCovered = pkg.detailedContent?.placesCovered || pkg.highlights || [`${pkg.destination} City Tour`, `Major Heritage Landmarks`, `Local Spiritual Shrines` ];
  const defaultTravelTips = pkg.detailedContent?.travelTips || [
    'Carry government-issued photo ID cards (Aadhaar / Passport) for hotel check-in and temple entries.',
    'Dress respectfully for temple visits (modest traditional attire recommended).',
    'Keep essential personal medications and comfortable footwear handy during sightseeing.'
  ];

  const defaultStandardInclusions = [
    'To and from economy class air travel for Bangalore-to-Bangalore tour guests (Airfare, Airport taxes & Visa Fees)',
    'Baggage Allowance as per airline policy',
    'Tour Manager Services throughout the tour',
    'Entrance fees of all sightseeing places visited from inside',
    'All Meals (Breakfast, Lunch & Dinner)',
    'Cost of internal airfare as mentioned in itinerary',
    'Transfers and sightseeing by A/C coach',
    'Accommodation on Twin/Double sharing basis',
    'Govt Tax of 5% over and above the Tour Cost mentioned'
  ];

  const defaultStandardExclusions = [
    'Visa fees, Airport taxes, Govt taxes, Fuel Surcharges & new Govt tax applicability',
    'Up gradation in Airline class or hotel room category',
    'Cost of Air ticket deviation charges',
    'Increase in rate of exchange leading to land arrangement cost increase prior to departure',
    'Cost of pre or post tour hotel accommodation',
    'Extra expenses (route change, airline change, date change, accommodation) due to force majeure',
    'Porterage, laundry, telephone, shopping, alcoholic beverages & personal food/drinks',
    'Individual medical, accident, hospitalization, or personal emergency costs',
    'Activity charges or services other than those included in group tour itinerary',
    'To & fro Airfare, airport transfers, visa fees to join/leave group independently',
    'Anything not explicitly mentioned in the Inclusions column'
  ];

  const effectiveTourIncludes = pkg.tourIncludes || {
    flights: true,
    hotels: true,
    transport: true,
    allMeals: true,
    sightseeing: true
  };

  const effectiveInclusions = (pkg.inclusions && pkg.inclusions.length > 0) ? pkg.inclusions : defaultStandardInclusions;
  const effectiveExclusions = (pkg.exclusions && pkg.exclusions.length > 0) ? pkg.exclusions : defaultStandardExclusions;

  const effectiveCancellationPolicy = pkg.cancellationPolicy || {
    table: [
      { days: 'Days 0-15', fee: '100%' },
      { days: '15 Days & Above', fee: '50%' }
    ],
    notes: [
      'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, mechanical problems, strikes, bandhs, or weather changes.',
      'Flight timings are subject to availability at the time of booking.',
      'Seats in the flights will be auto assigned by respective airlines.'
    ]
  };

  const effectiveRemarks = pkg.remarks || [
    'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
    'The tour price mentioned for this tour is for Indian nationals only. The tour price varies for NRIs or foreign nationals.',
    'NRIs and Foreign nationals please ensure proper identity is conveyed to booking executive at the time of booking and all details along with passport copies are handed over to the booking executive.',
    'Standard Check-in time of hotels in India is generally 1:30 PM and Check-out time is 10:00 AM respectively.'
  ];

  const categoryUrlMap: Record<string, { name: string; url: string }> = {
    shirdi: { name: 'Shirdi Packages', url: '/shirdi-packages' },
    pilgrimage: { name: 'Pilgrimage Packages', url: '/pilgrimage-packages' },
    domestic: { name: 'Domestic Packages', url: '/domestic-packages' },
    international: { name: 'International Packages', url: '/international-packages' }
  };

  const categoryMeta = categoryUrlMap[pkg.category] || { name: 'Tour Packages', url: '/pilgrimage-packages' };

  const packageJsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      'name': `${pkg.title} from Bangalore`,
      'description': pkg.description || `${pkg.title} tour package from Bangalore with flights and hotel stay.`,
      'touristType': ['Pilgrims', 'Families', 'Senior Citizens'],
      'offers': {
        '@type': 'Offer',
        'price': pkg.numericPrice || 17999,
        'priceCurrency': 'INR',
        'availability': 'https://schema.org/InStock',
        'validFrom': '2026-01-01',
        'url': `https://saisamarthtours.com/package/${pkg.id}`
      },
      'provider': {
        '@type': 'TravelAgency',
        'name': 'Sai Samarth Tours',
        'telephone': '+916361181869',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Bengaluru',
          'addressRegion': 'Karnataka',
          'postalCode': '560064',
          'streetAddress': 'No. 2238, Second Floor, 16th ‘B’ Cross, Yelahanka New Town'
        }
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': packageFaqs.map(f => ({
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
    <div className="flex-grow bg-[#FBF9F5]">
      <SEOHead
        title={`${pkg.title} from Bangalore | Sai Samarth Tours`}
        description={pkg.description ? `${pkg.description} Starting from ${pkg.price}. Book with return flights & 3-star hotel.` : `Book ${pkg.title} from Bangalore. Includes return flights, deluxe hotel accommodation, meals, AC transfers, and VIP darshan passes. Starting at ${pkg.price}.`}
        canonical={`https://saisamarthtours.com/package/${getPackageSlug(pkg)}`}
        ogImage={pkg.image}
        ogType="product"
        jsonLd={packageJsonLd}
      />

      {/* Premium Split Hero Section */}
      <div className="bg-[#0B1E3F] text-white pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle background glow effect */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Breadcrumbs Navigation */}
          {(() => {
            const hierarchy = getPackageBreadcrumbHierarchy(pkg);
            return (
              <div className="mb-4">
                <Breadcrumbs
                  items={[
                    { name: hierarchy.category.name, url: hierarchy.category.url },
                    ...(hierarchy.region.name ? [{ name: hierarchy.region.name, url: hierarchy.region.url }] : []),
                    { name: pkg.title }
                  ]}
                  theme="dark"
                />
              </div>
            );
          })()}

          {/* Top Bar with Back Button & Category / Destination Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <button 
              onClick={() => navigate(-1)} 
              className="bg-white/10 hover:bg-white/20 text-white px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 border border-white/10 backdrop-blur-md cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to Packages
            </button>

            <span className="bg-[#EA580C]/90 text-white px-4 py-1.5 rounded-full text-xs uppercase font-extrabold tracking-wider border border-orange-400/30 shadow-md">
              📍 {pkg.destination}
            </span>
          </div>

          {/* Grid Layout: Left Content & Right Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Side: Heading, Paragraph, Price List */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Title */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-sm">
                {pkg.title}
              </h1>

              {/* Description Paragraph */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                {pkg.description || defaultOverview}
              </p>

              {/* Price & Specs List */}
              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
                
                {/* Starting Price Box */}
                <div className="bg-white/10 backdrop-blur-md border border-white/15 px-6 py-3.5 rounded-2xl flex items-center gap-4 shadow-lg">
                  <div>
                    <span className="text-[10px] text-gray-300 font-bold uppercase tracking-wider block">Starting From</span>
                    <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#F59E0B] leading-none">
                      {pkg.price}
                    </span>
                  </div>
                  <span className="bg-green-500/20 text-green-300 border border-green-400/30 text-[11px] font-bold px-2.5 py-1 rounded-md">
                    All Inclusive
                  </span>
                </div>

                {/* Duration & Min Pax badges */}
                <div className="flex flex-wrap gap-2">
                  <div className="bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#F59E0B] text-lg">schedule</span>
                    <div className="text-xs">
                      <span className="text-gray-400 block text-[10px] uppercase font-semibold">Duration</span>
                      <span className="font-bold text-white">{pkg.duration}</span>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#F59E0B] text-lg">group</span>
                    <div className="text-xs">
                      <span className="text-gray-400 block text-[10px] uppercase font-semibold">Min Pax</span>
                      <span className="font-bold text-white">0{pkg.minPax} Person</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Quick Call-to-Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setIsEnquiryOpen(true)}
                  className="bg-gradient-to-r from-[#F59E0B] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-amber-500/25 active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
                  </svg>
                  Enquire Now
                </button>

                <a
                  href={getWhatsAppUrl({ title: pkg.title, duration: pkg.duration, destination: pkg.destination })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-emerald-600/25 active:scale-95 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp Us
                </a>

                <button
                  onClick={() => setIsBrochureOpen(true)}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3 rounded-xl font-bold text-sm transition-all backdrop-blur-md flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-amber-400" />
                  Brochure
                </button>
              </div>

            </div>

            {/* Right Side: Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl group bg-white/5 backdrop-blur-md">
                {pkg.images && pkg.images.length > 1 ? (
                  <ImageSlider
                    images={pkg.images}
                    alt={`${pkg.title} tour package from Bangalore`}
                    width={700}
                    height={450}
                    loading="eager"
                    fetchPriority="high"
                    interval={3000}
                    dotsClassName="top-4 right-4"
                    className="w-full h-[300px] sm:h-[380px]"
                  />
                ) : (
                  <img 
                    src={pkg.image} 
                    alt={`${pkg.title} tour package from Bangalore`} 
                    width={700}
                    height={450}
                    loading="eager"
                    fetchPriority="high"
                    decoding="sync"
                    className="w-full h-[300px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                
                {/* Floating Rating Badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5 shadow-md">
                  <span>★ 4.9 Rating</span>
                  <span className="text-white/80 font-normal">| Verified Tour</span>
                </div>

                {/* Floating Tour Manager Badge */}
                <div className="absolute bottom-4 right-4 left-4 bg-[#0B1E3F]/90 backdrop-blur-md text-white p-3 rounded-2xl border border-white/15 flex items-center gap-3 shadow-lg">
                  <div className="w-9 h-9 rounded-xl bg-[#F59E0B] text-white flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-300 block">Dedicated Tour Manager</span>
                    <span className="text-[11px] text-gray-300">Assistance throughout your yatra from Bangalore</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Main Content & Sidebar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Main Details & Content Sections */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 1. Main Details Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col h-fit">
              
              {/* Specs Bar */}
              <div className="bg-gray-50 border-b border-gray-100 px-4 sm:px-6 py-3 sm:py-4 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-4 sm:gap-6 text-[#114088]">
                  <span className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                    <span className="material-symbols-outlined text-[#F59E0B] text-base sm:text-lg">schedule</span>
                    Duration: <strong className="text-[#F59E0B]">{pkg.duration}</strong>
                  </span>
                  <span className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                    <span className="material-symbols-outlined text-[#F59E0B] text-base sm:text-lg">group</span>
                    Min Pax: <strong className="text-[#F59E0B]">0{pkg.minPax}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-1.5 bg-amber-500/10 text-[#114088] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-amber-300 text-[11px] sm:text-xs font-bold shadow-xs">
                  <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F59E0B] shrink-0" />
                  <span>Tour Manager Available for All Packages</span>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-gray-200 px-3 sm:px-6 pt-3 sm:pt-6 bg-white overflow-x-auto hide-scrollbar gap-1 sm:gap-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-3 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm uppercase font-bold border-b-2 -mb-px transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'overview'
                      ? 'border-[#F59E0B] text-[#F59E0B]'
                      : 'border-transparent text-gray-500 hover:text-[#114088]'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('itinerary')}
                  className={`px-3 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm uppercase font-bold border-b-2 -mb-px transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'itinerary'
                      ? 'border-[#F59E0B] text-[#F59E0B]'
                      : 'border-transparent text-gray-500 hover:text-[#114088]'
                  }`}
                >
                  Itinerary
                </button>
                <button
                  onClick={() => setActiveTab('inclusions')}
                  className={`px-3 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm uppercase font-bold border-b-2 -mb-px transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'inclusions'
                      ? 'border-[#F59E0B] text-[#F59E0B]'
                      : 'border-transparent text-gray-500 hover:text-[#114088]'
                  }`}
                >
                  <span className="hidden sm:inline">Inclusions & Exclusions</span>
                  <span className="sm:hidden">Inclusions</span>
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-4 sm:p-6 md:p-8 min-h-[300px]">
                {activeTab === 'overview' && (
                  <div className="space-y-6 sm:space-y-10">
                    
                    {/* Tour Includes Icons Bar - Responsive balanced grid on mobile and flex on desktop */}
                    {effectiveTourIncludes && (
                      <div className="bg-gray-50/80 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-gray-200/80">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Tour Includes</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-2 sm:gap-3">
                          {effectiveTourIncludes.flights && (
                            <div className="flex items-center gap-2 px-3 py-2.5 bg-white rounded-xl border border-gray-200/90 shadow-2xs hover:border-indigo-500/40 transition-all justify-start">
                              <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                                <Plane className="w-4 h-4" />
                              </div>
                              <span className="text-xs sm:text-sm font-bold text-[#114088] truncate">Flights</span>
                            </div>
                          )}
                          {effectiveTourIncludes.hotels && (
                            <div className="flex items-center gap-2 px-3 py-2.5 bg-white rounded-xl border border-gray-200/90 shadow-2xs hover:border-[#2563EB]/40 transition-all justify-start">
                              <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                                <Building2 className="w-4 h-4" />
                              </div>
                              <span className="text-xs sm:text-sm font-bold text-[#114088] truncate">Hotels</span>
                            </div>
                          )}
                          {effectiveTourIncludes.transport && (
                            <div className="flex items-center gap-2 px-3 py-2.5 bg-white rounded-xl border border-gray-200/90 shadow-2xs hover:border-[#F59E0B]/40 transition-all justify-start">
                              <div className="w-7 h-7 rounded-lg bg-amber-50 text-[#F59E0B] flex items-center justify-center shrink-0">
                                <Bus className="w-4 h-4" />
                              </div>
                              <span className="text-xs sm:text-sm font-bold text-[#114088] truncate">Transportation</span>
                            </div>
                          )}
                          {effectiveTourIncludes.allMeals && (
                            <div className="flex items-center gap-2 px-3 py-2.5 bg-white rounded-xl border border-gray-200/90 shadow-2xs hover:border-emerald-500/40 transition-all justify-start">
                              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                                <Utensils className="w-4 h-4" />
                              </div>
                              <span className="text-xs sm:text-sm font-bold text-[#114088] truncate">All Meals</span>
                            </div>
                          )}
                          {effectiveTourIncludes.sightseeing && (
                            <div className="flex items-center gap-2 px-3 py-2.5 bg-white rounded-xl border border-gray-200/90 shadow-2xs hover:border-purple-500/40 transition-all justify-start col-span-2 sm:col-span-1">
                              <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                                <Camera className="w-4 h-4" />
                              </div>
                              <span className="text-xs sm:text-sm font-bold text-[#114088] truncate">Sightseeing</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Places Badge & Grid */}
                    {pkg.placesBadge && (
                      <div className="bg-gray-50/80 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200/80 space-y-3 sm:space-y-4">
                        <div className="inline-block bg-[#FACC15] text-[#114088] px-3 py-1 font-bold rounded-md sm:rounded-lg text-xs sm:text-sm border-l-4 border-[#D97706] shadow-2xs">
                          {pkg.placesBadge}
                        </div>
                        <h3 className="text-lg sm:text-2xl font-bold font-serif text-[#114088] leading-snug">
                          {pkg.title}
                        </h3>
                        {pkg.placesList && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 pt-1">
                            {pkg.placesList.map((place, idx) => (
                              <div key={idx} className="flex items-center gap-2.5 p-3 sm:p-4 bg-white rounded-xl border border-gray-200/80 shadow-2xs">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                                  <MapPin className="w-4 h-4 text-[#2563EB]" />
                                </div>
                                <span className="font-bold text-gray-800 text-xs sm:text-base leading-snug">{place.name}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    <div>
                      <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#114088] mb-2 sm:mb-4">Journey Overview</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{pkg.description}</p>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#114088] mb-3 sm:mb-6">Key Highlights</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {pkg.highlights?.map((h, i) => (
                          <div key={i} className="flex items-center gap-3 bg-blue-50/50 p-3.5 sm:p-4 rounded-xl border border-blue-100">
                            <span className="material-symbols-outlined text-[#F59E0B] text-lg sm:text-xl shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                              stars
                            </span>
                            <span className="text-xs sm:text-sm font-semibold text-[#114088]">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'itinerary' && (
                  <div className="space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-8 pb-3 border-b border-gray-100">
                      <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#114088]">
                        Day-by-Day Timeline
                      </h3>
                      <button
                        onClick={() => setIsBrochureOpen(true)}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#114088] via-[#1D4ED8] to-[#F59E0B] hover:from-[#0B1E3F] hover:to-[#D97706] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                      >
                        <FileText className="w-4 h-4 text-amber-300" />
                        <span>Get Brochure</span>
                      </button>
                    </div>

                    {(!pkg.sampleItinerary || pkg.sampleItinerary.length === 0) ? (
                      <p className="text-gray-500 italic text-xs sm:text-sm">Detailed itinerary will be provided upon enquiry.</p>
                    ) : (
                      <div className="space-y-4 sm:space-y-6 border-l-2 border-[#F59E0B] pl-4 sm:pl-8 ml-2 sm:ml-4">
                        {pkg.sampleItinerary.map((item, idx) => (
                          <div key={idx} className="relative">
                            <div className="absolute -left-[21px] sm:-left-[41px] top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#F59E0B] border-2 sm:border-4 border-white shadow-xs" />
                            <div className="bg-gray-50 p-3.5 sm:p-6 rounded-xl border border-gray-100">
                              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#F59E0B] block mb-1 sm:mb-2 uppercase">
                                {item.day}
                              </span>
                              <h4 className="font-serif text-base sm:text-xl font-bold text-[#114088] mb-2 sm:mb-3">{item.title}</h4>
                              <p className="text-xs sm:text-base text-gray-700 leading-relaxed">{item.detail || item.desc}</p>
                              
                              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-gray-200/60 flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-gray-700">
                                <Utensils className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F59E0B] shrink-0" />
                                <span>Meals Included: <strong>Breakfast, Lunch, Dinner</strong></span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'inclusions' && (
                  <div className="grid grid-cols-1 gap-8">
                    <div className="bg-emerald-50/50 p-6 sm:p-8 rounded-2xl border border-emerald-100">
                      <h4 className="font-serif text-xl text-emerald-800 font-bold mb-6 flex items-center gap-3">
                        <span className="material-symbols-outlined text-emerald-600 text-2xl">check_circle</span>
                        Inclusions
                      </h4>
                      <ul className="space-y-3.5 text-xs sm:text-sm text-emerald-950">
                        {effectiveInclusions.map((inc, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-emerald-600 font-bold shrink-0 text-base mt-0.5">•</span>
                            <span className="leading-relaxed font-medium">{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-rose-50/50 p-6 sm:p-8 rounded-2xl border border-rose-100">
                      <h4 className="font-serif text-xl text-rose-800 font-bold mb-6 flex items-center gap-3">
                        <span className="material-symbols-outlined text-rose-600 text-2xl">cancel</span>
                        Exclusions
                      </h4>
                      <ul className="space-y-3.5 text-xs sm:text-sm text-rose-950">
                        {effectiveExclusions.map((exc, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-rose-600 font-bold shrink-0 text-base mt-0.5">•</span>
                            <span className="leading-relaxed font-medium">{exc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 2. Cancellation Policy & Payment Terms Card */}
            {effectiveCancellationPolicy && (
              <div id="cancellation-policy" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 space-y-6">
                <h3 className="text-xl font-serif font-bold text-[#114088] pb-3 border-b border-gray-100">
                  Cancellation Policy & Payment Terms
                </h3>
                
                {/* Small, clean compact table box */}
                <div className="max-w-lg overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-[#114088] text-white font-semibold">
                        <th className="p-3 w-1/2 font-medium">
                          Cancellation Timeline
                        </th>
                        {effectiveCancellationPolicy.table.map((row, idx) => (
                          <th key={idx} className="p-3 text-center font-medium border-l border-blue-800/40">
                            {row.days}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-200">
                        <td className="p-3 font-medium text-gray-700 bg-gray-50/80">
                          Cancellation Fee (Per Person)
                        </td>
                        {effectiveCancellationPolicy.table.map((row, idx) => (
                          <td key={idx} className="p-3 text-center border-l border-gray-200">
                            <span className="inline-block bg-rose-50 border border-rose-200 text-rose-700 px-3 py-1 rounded-md text-xs font-bold">
                              {row.fee}
                            </span>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* IMPORTANT NOTES - Point to Point */}
                <div className="bg-amber-50/70 p-5 rounded-xl border border-amber-200/80">
                  <h4 className="text-sm font-bold text-[#114088] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-amber-600 text-xl">priority_high</span>
                    IMPORTANT NOTES
                  </h4>
                  <ol className="space-y-2.5 text-xs sm:text-sm text-gray-800 list-decimal pl-5 font-medium">
                    {effectiveCancellationPolicy.notes.map((note, idx) => (
                      <li key={idx} className="leading-relaxed">{note}</li>
                    ))}
                  </ol>
                </div>
              </div>
            )}

            {/* 3. Remarks & Important Notes Card */}
            {effectiveRemarks && (
              <div id="remarks" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#114088] mb-4 pb-3 border-b border-gray-100">
                  Remarks & Policy Notes
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-gray-800 list-disc pl-5 font-medium">
                  {effectiveRemarks.map((remark, idx) => (
                    <li key={idx} className="leading-relaxed">{remark}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 4. Detailed Content Session Card */}
            <div id="detailed-content" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-[#F59E0B]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#114088]">
                    Detailed Tour & Destination Content Session
                  </h2>
                  <p className="text-xs text-gray-500">Everything you need to know about {pkg.title}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#114088] mb-2">About This Yatra</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{defaultOverview}</p>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50/50 p-5 rounded-xl border border-amber-200/60">
                  <h3 className="font-serif text-base font-bold text-[#114088] mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                    Spiritual & Cultural Importance
                  </h3>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{defaultSignificance}</p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-[#114088] mb-3">Key Attractions & Shrines Covered</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {defaultPlacesCovered.map((place, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                        <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                        <span className="text-xs sm:text-sm font-semibold text-[#1C2B39]">{place}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-blue-50/40 p-5 rounded-xl border border-blue-100">
                    <h3 className="font-serif text-base font-bold text-[#114088] mb-2 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
                      Essential Guidelines
                    </h3>
                    <ul className="space-y-2 text-xs text-gray-700">
                      {defaultTravelTips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#F59E0B] font-bold mt-0.5">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-emerald-50/40 p-5 rounded-xl border border-emerald-100">
                    <h3 className="font-serif text-base font-bold text-emerald-900 mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      Best Time to Visit
                    </h3>
                    <p className="text-xs text-emerald-800 leading-relaxed">{defaultBestTime}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Package FAQs Session Card */}
            <div id="faqs" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#114088]">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#114088]">
                    Frequently Asked Questions (FAQs Session)
                  </h2>
                  <p className="text-xs text-gray-500">Got questions? Find answers tailored for the {pkg.title} package.</p>
                </div>
              </div>

              <div className="space-y-3">
                {packageFaqs.map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl border border-gray-200/80 overflow-hidden transition-all">
                    <button 
                      className="w-full px-5 py-4 text-left flex justify-between items-center focus:outline-none"
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    >
                      <span className="font-semibold text-sm sm:text-base text-[#114088]">{faq.question}</span>
                      {openFaqIndex === idx ? (
                        <ChevronUp className="w-5 h-5 text-[#F59E0B] shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                      )}
                    </button>
                    {openFaqIndex === idx && (
                      <div className="px-5 pb-4 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-200/60 pt-3">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              
              {/* Book Now / Enquire Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <h3 className="text-2xl font-serif-brand font-bold text-[#1C2B39] mb-2">Book Your Tour</h3>
                <p className="text-gray-500 text-sm mb-6">Need help planning? Our experts are here for you.</p>
                
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setIsEnquiryOpen(true)}
                    className="w-full bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white py-3.5 px-3 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base shrink-0">edit_document</span>
                    <span className="truncate">Enquire Now</span>
                  </button>
                  
                  <a 
                    href={getWhatsAppUrl({ title: pkg.title, duration: pkg.duration, destination: pkg.destination })} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3.5 px-3 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md transition-all hover:-translate-y-0.5"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    <span className="truncate">WhatsApp</span>
                  </a>
                </div>

                <button
                  onClick={() => setIsBrochureOpen(true)}
                  className="w-full mt-3 bg-gradient-to-r from-[#114088] via-[#1D4ED8] to-[#114088] hover:from-[#0B1E3F] hover:to-[#0B1E3F] text-white py-3.5 px-3 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all hover:-translate-y-0.5 border border-amber-400/30 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-amber-300" />
                  <span className="truncate">Get Brochure (PDF)</span>
                </button>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-3">Call Us Directly</p>
                  <a href="tel:+919187711649" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-[#114088] transition-colors">
                      <span className="material-symbols-outlined text-[#114088] group-hover:text-white transition-colors">call</span>
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-[#1C2B39]">+91 91877 11649</span>
                      <span className="block text-xs text-gray-500">24/7 Support Available</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Related Packages */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <h3 className="text-xl font-serif-brand font-bold text-[#1C2B39] mb-4">Related Packages</h3>
                <div className="space-y-4">
                  {ALL_PACKAGES
                    .filter(p => p.category === pkg.category && p.id !== pkg.id)
                    .slice(0, 4)
                    .map(relatedPkg => (
                      <div 
                        key={relatedPkg.id} 
                        onClick={() => navigate(`/package/${relatedPkg.id}`)}
                        className="flex items-center gap-4 group cursor-pointer hover:bg-gray-50 p-2 -mx-2 rounded-xl transition-colors"
                      >
                        <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                          <img 
                            src={relatedPkg.image} 
                            alt={`${relatedPkg.title} tour package from Bangalore`} 
                            width={80}
                            height={80}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-sm text-[#1C2B39] group-hover:text-[#114088] transition-colors line-clamp-2 mb-1">
                            {relatedPkg.title}
                          </h4>
                          <p className="text-xs font-bold text-[#F59E0B]">{relatedPkg.price}</p>
                        </div>
                      </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <EnquiryModal
        isOpen={isEnquiryOpen}
        initialPackageTitle={pkg.title}
        onClose={() => setIsEnquiryOpen(false)}
      />

      <BrochureModal
        isOpen={isBrochureOpen}
        pkg={pkg}
        onClose={() => setIsBrochureOpen(false)}
      />
    </div>
  );
}
