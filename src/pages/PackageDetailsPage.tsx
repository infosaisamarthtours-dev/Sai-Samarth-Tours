import React, { useState, useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { ALL_PACKAGES } from '../data/packages';
import { EnquiryModal } from '../components/EnquiryModal';
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

export function PackageDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'inclusions'>('overview');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const pkg = ALL_PACKAGES.find(p => p.id === id);

  if (!pkg) {
    return <Navigate to="/" />;
  }

  // Generic fallback FAQs if package doesn't define custom ones
  const defaultFaqs = [
    {
      question: `How do I book the ${pkg.title} tour package?`,
      answer: `You can book by clicking on the 'Enquire Now' button or contacting us via WhatsApp (+91 9483488258). Our travel experts will assist you with dates, customized options, and confirmation.`
    },
    {
      question: `Are flights or train tickets included in ${pkg.price}?`,
      answer: `Our base package covers AC accommodation, private transfers, daily meals, and guided sightseeing. Flight or train ticket booking assistance from Bangalore or your origin city can be bundled directly into your package upon request.`
    },
    {
      question: `Is this ${pkg.category === 'pilgrimage' ? 'pilgrimage' : 'tour'} suitable for senior citizens and children?`,
      answer: `Yes! All our tour itineraries are designed to be senior-citizen and family friendly. We ensure comfortable AC vehicles, minimal waiting time, accessible hotels, and dedicated support throughout the trip.`
    },
    {
      question: `Can this package be customized for private family groups?`,
      answer: `Yes, 100%! We specialize in tailored itineraries for private families, corporate groups, and senior citizen yatras. Let us know your preferred travel dates and budget to customize this package.`
    },
    {
      question: `What is the cancellation and refund policy?`,
      answer: `Cancellation policies vary depending on hotel and transportation vendor terms. Detailed policy details will be provided along with your preliminary booking quote.`
    }
  ];

  const packageFaqs = (pkg.faqs && pkg.faqs.length > 0) ? pkg.faqs : defaultFaqs;

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
    hotels: true,
    transport: true,
    allMeals: true,
    flights: true,
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

  return (
    <div className="flex-grow bg-[#FBF9F5]">
      {/* Hero Image */}
      <div className="relative h-[40vh] sm:h-[60vh] overflow-hidden">
        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#114088]/90 via-[#114088]/30 to-transparent" />
        <div className="absolute top-6 left-6 z-10">
          <button onClick={() => navigate(-1)} className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/40 transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        </div>
        <div className="absolute bottom-10 left-6 right-6 max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-6 px-4">
          <div>
            <span className="bg-[#F59E0B] text-[#ffffff] px-4 py-1.5 rounded-full text-xs uppercase font-bold tracking-widest mb-4 inline-block">
              📍 {pkg.destination}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#ffffff] drop-shadow-lg">{pkg.title}</h1>
          </div>
          <div className="bg-[#ffffff] px-6 py-4 rounded-xl border border-[#EAE2D6] shadow-xl">
            <span className="text-xs text-[#1C2B39] uppercase font-bold block mb-1">Starting From</span>
            <span className="font-serif text-3xl font-bold text-[#F59E0B]">{pkg.price}</span>
          </div>
        </div>
      </div>

      {/* Main Content & Sidebar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-8 relative z-20">
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
                  <span>Tour Guide Available for All Packages</span>
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
                    
                    {/* Tour Includes Icons Bar */}
                    {effectiveTourIncludes && (
                      <div className="bg-gray-50/80 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-gray-200/80">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Tour Includes</h4>
                        <div className="flex flex-wrap gap-2.5 sm:gap-3 items-center">
                          {effectiveTourIncludes.hotels && (
                            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-gray-200/90 shadow-2xs hover:border-[#2563EB]/40 transition-all">
                              <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                                <Building2 className="w-4 h-4" />
                              </div>
                              <span className="text-xs sm:text-sm font-bold text-[#114088]">Hotels</span>
                            </div>
                          )}
                          {effectiveTourIncludes.transport && (
                            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-gray-200/90 shadow-2xs hover:border-[#F59E0B]/40 transition-all">
                              <div className="w-7 h-7 rounded-lg bg-amber-50 text-[#F59E0B] flex items-center justify-center shrink-0">
                                <Bus className="w-4 h-4" />
                              </div>
                              <span className="text-xs sm:text-sm font-bold text-[#114088]">Transport</span>
                            </div>
                          )}
                          {effectiveTourIncludes.allMeals && (
                            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-gray-200/90 shadow-2xs hover:border-emerald-500/40 transition-all">
                              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                                <Utensils className="w-4 h-4" />
                              </div>
                              <span className="text-xs sm:text-sm font-bold text-[#114088]">All Meals</span>
                            </div>
                          )}
                          {effectiveTourIncludes.flights && (
                            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-gray-200/90 shadow-2xs hover:border-indigo-500/40 transition-all">
                              <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                                <Plane className="w-4 h-4" />
                              </div>
                              <span className="text-xs sm:text-sm font-bold text-[#114088]">Flights</span>
                            </div>
                          )}
                          {effectiveTourIncludes.sightseeing && (
                            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-gray-200/90 shadow-2xs hover:border-purple-500/40 transition-all">
                              <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                                <Camera className="w-4 h-4" />
                              </div>
                              <span className="text-xs sm:text-sm font-bold text-[#114088]">Sightseeing</span>
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
                    <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#114088] mb-4 sm:mb-8">Day-by-Day Timeline</h3>
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
                              <p className="text-xs sm:text-base text-gray-700 leading-relaxed">{item.detail}</p>
                              
                              {item.meals && (
                                <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-gray-200/60 flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-gray-700">
                                  <Utensils className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F59E0B] shrink-0" />
                                  <span>Meals Included: <strong>{item.meals}</strong></span>
                                </div>
                              )}
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
                    className="w-full bg-[#D97706] hover:bg-[#B45309] text-white py-3.5 px-3 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md transition-all hover:-translate-y-0.5"
                  >
                    <span className="material-symbols-outlined text-base shrink-0">edit_document</span>
                    <span className="truncate">Enquire Now</span>
                  </button>
                  
                  <a 
                    href="https://wa.me/919187711649" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3.5 px-3 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md transition-all hover:-translate-y-0.5"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    <span className="truncate">WhatsApp</span>
                  </a>
                </div>
                
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
                            alt={relatedPkg.title} 
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
    </div>
  );
}
