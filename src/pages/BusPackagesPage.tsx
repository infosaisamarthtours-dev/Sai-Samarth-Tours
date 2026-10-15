import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ALL_PACKAGES } from '../data/packages';
import { Package } from '../types';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { trackContact } from '../utils/pixel';
import { siteConfig } from '../data/config';
import { 
  Bus, CheckCircle2, ShieldCheck, UserCheck, Utensils, 
  Building2, MapPin, Clock, Calendar, ArrowRight, Sparkles, 
  FileText, Phone, MessageCircle, ChevronDown, ChevronUp, 
  Flame, Droplets, Wind, Mountain, Globe, Eye, X, Award,
  Check, HeartHandshake, Compass
} from 'lucide-react';

interface BusPackagesPageProps {
  onOpenEnquiry?: (packageTitle?: string) => void;
}

export function BusPackagesPage({ onOpenEnquiry }: BusPackagesPageProps) {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [brochurePage, setBrochurePage] = useState(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Panch Bootha flagship bus package
  const flagshipBusPackage = ALL_PACKAGES.find(p => p.id === 'panch-bootha-balaji-bus-tour') || ALL_PACKAGES[0];

  const brochureImages = [
    '/panch-bootha-brochure-1.png',
    '/panch-bootha-brochure-2.png',
    '/panch-bootha-brochure-3.png',
    '/panch-bootha-brochure-4.png'
  ];

  const elementsData = [
    {
      element: 'Agni (Fire)',
      temple: 'Arunachaleeswarar Temple',
      location: 'Thiruvannamalai, Tamil Nadu',
      icon: Flame,
      color: 'from-amber-500 to-red-600',
      textColor: 'text-amber-600',
      bgLight: 'bg-amber-50',
      description: 'Lord Shiva is venerated as the infinite pillar of fire (Tejo Lingam) at the sacred Arunachala hill. Devotees experience profound spiritual transformation and liberation (Moksha).'
    },
    {
      element: 'Appu (Water)',
      temple: 'Arulmigu Jambukeswarar Temple',
      location: 'Thiruvanaikoil, Tiruchirappalli',
      icon: Droplets,
      color: 'from-blue-500 to-cyan-600',
      textColor: 'text-blue-600',
      bgLight: 'bg-blue-50',
      description: 'The Shivalingam is situated in the sanctum sanctorum where a natural subterranean freshwater spring continuously submerges the base of the lingam, symbolising the element of water.'
    },
    {
      element: 'Akasa (Space / Sky)',
      temple: 'Thillai Nataraja Temple',
      location: 'Chidambaram, Tamil Nadu',
      icon: Globe,
      color: 'from-indigo-500 to-purple-600',
      textColor: 'text-indigo-600',
      bgLight: 'bg-indigo-50',
      description: 'Lord Nataraja performs the cosmic Ananda Tandava dance. The Chidambara Rahasyam represents the formless, omnipresent supreme consciousness in boundless space.'
    },
    {
      element: 'Prithvi (Earth)',
      temple: 'Ekambareswarar Temple',
      location: 'Kanchipuram, Tamil Nadu',
      icon: Mountain,
      color: 'from-emerald-600 to-teal-700',
      textColor: 'text-emerald-700',
      bgLight: 'bg-emerald-50',
      description: 'Crafted from sacred earth and sand by Goddess Parvati Herself beneath an ancient sacred mango tree representing the foundation of life and nature.'
    },
    {
      element: 'Vayu (Air / Wind)',
      temple: 'Sri Kalahasteeswara Temple',
      location: 'Srikalahasti, Andhra Pradesh',
      icon: Wind,
      color: 'from-sky-500 to-teal-600',
      textColor: 'text-sky-600',
      bgLight: 'bg-sky-50',
      description: 'The flame of the lamp inside the windowless sanctum constantly flickers without any breeze, signifying Lord Shiva as Vayu Lingam (the breath of life). World-renowned for Rahu-Ketu parihara.'
    },
    {
      element: 'Supreme Blessings',
      temple: 'Sri Venkateshwara Swamy Temple',
      location: 'Tirumala Hills, Tirupati',
      icon: Sparkles,
      color: 'from-yellow-500 to-amber-600',
      textColor: 'text-amber-700',
      bgLight: 'bg-amber-50',
      description: 'The Kaliyuga Vaikunta on the Seven Hills of Tirumala. Conclude your Pancha Bhootha yatra with the divine darshan of Lord Balaji and Goddess Padmavathi Ammavari.'
    }
  ];

  const busAmenities = [
    {
      title: 'A/C Pushback Reclining Seats',
      desc: 'Ergonomic 2+2 pushback seating with plush neck support, ample legroom, and wide panoramic windows for relaxed scenic transit.',
      icon: Bus
    },
    {
      title: 'Dedicated Tour Manager',
      desc: 'An experienced Sai Samarth tour manager accompanies your coach throughout the 5 days to manage temple queues, hotel check-ins, and meals.',
      icon: UserCheck
    },
    {
      title: 'Wholesome All Meals Included',
      desc: 'Daily pure vegetarian Breakfast, Lunch, and Dinner served at clean, handpicked restaurants with hygienic South and North Indian delicacies.',
      icon: Utensils
    },
    {
      title: 'Verified 3-Star AC Stays',
      desc: 'Stay 4 nights in quality 3-star AC hotels on twin/double sharing with elevator access, clean linens, and modern attached bathrooms.',
      icon: Building2
    },
    {
      title: 'Senior-Citizen Friendly Pacing',
      desc: 'Thoughtfully planned route with timely restroom breaks at modern highway plazas, comfortable boarding steps, and gentle temple schedules.',
      icon: HeartHandshake
    },
    {
      title: 'Bangalore Boarding Points',
      desc: 'Convenient pickups across Bangalore including Yelahanka, Majestic / Anand Rao Circle, and Electronic City / Silk Board.',
      icon: MapPin
    }
  ];

  const busFaqs = [
    {
      question: 'What is the boarding point and departure time in Bangalore?',
      answer: 'The Panch Bootha Yatra bus departs from Bangalore at Night 10:00 PM on Day 1. Convenient boarding points across Bangalore include Yelahanka (Sai Samarth Tours Office), Anand Rao Circle / Majestic, and Silk Board / Electronic City toll gate. Our tour coordinator will call and confirm your boarding details prior to departure.'
    },
    {
      question: 'What are the vehicle specifications for this bus trip?',
      answer: 'We deploy deluxe, sanitized 2+2 A/C Pushback tourist coaches equipped with air suspension for smooth travel, high-comfort reclining seats, generous legroom, clean curtains, overhead reading lights, mobile charging points, and spacious luggage compartments underneath.'
    },
    {
      question: 'Are all meals included in the ₹16,999/- tour price?',
      answer: 'Yes! 100% of your meals (Breakfast, Lunch, and Dinner) are included in the package price. We serve freshly prepared, wholesome pure vegetarian meals suited for pilgrims and families. Morning tea/coffee during breakfast is also provided.'
    },
    {
      question: 'What hotels are provided during the 4 nights?',
      answer: 'You will stay in verified 3-Star AC hotels on twin/double sharing basis in Tiruchirappalli (Day 1), Chidambaram (Day 2), Kanchipuram (Day 3), and Tirumala Hills (Day 4). Single occupancy can be arranged upon request with a nominal supplement.'
    },
    {
      question: 'How is darshan coordinated at Tirumala Balaji and Pancha Bhootha temples?',
      answer: 'Our experienced tour manager oversees temple timings, guides you regarding traditional dress codes (Dhoti/Kurta for men and Saree/Churidar for women), and assists senior citizens with queue lines. Entrance fees for all scheduled sightseeing attractions are included.'
    },
    {
      question: 'What is the payment and cancellation policy for this bus tour?',
      answer: 'Full payment is required at the time of booking for packages under ₹25,000. Cancellations received more than 15 days before departure attract a 50% cancellation fee on the net tour price, while cancellations received within 0–15 days are subject to a 100% cancellation fee as per company policy.'
    }
  ];

  return (
    <div className="flex-grow bg-[#FBF9F5] font-sans pb-20">
      <SEOHead
        title="Bus Tour Packages from Bangalore | Panch Bootha Yatra & Tirumala Balaji | Sai Samarth Tours"
        description="Book all-inclusive Deluxe A/C Pushback Bus tour packages from Bangalore. Flagship Panch Bootha Yatra & Tirumala Balaji 4N/5D for ₹16,999/- with Tour Manager, 3-Star AC hotels & all pure veg meals."
        canonical="https://saisamarthtours.com/bus-packages"
        ogImage="/panch-bootha-bus-yatra-1.webp"
        ogType="website"
      />

      {/* Hero Section */}
      <div className="relative bg-[#0B1E3F] text-white pt-6 sm:pt-10 md:pt-16 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EA580C]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#114088]/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-4 sm:mb-6">
            <Breadcrumbs 
              items={[
                { name: 'Tour Packages', url: '/tour-packages' },
                { name: 'Bus Tour Packages' }
              ]} 
              theme="dark" 
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading, Badges, Summary */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-[#F59E0B]/40 text-[#F59E0B] text-xs font-bold tracking-wide uppercase shadow-sm">
                <Bus className="w-4 h-4 text-[#EA580C]" />
                <span>Premier Deluxe Bus Pilgrimage & Yatras from Bangalore</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-serif-brand leading-tight text-white">
                Comfortable Bus Tour Packages <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#FB923C] to-[#EA580C]">
                  With All Meals & Tour Manager
                </span>
              </h1>

              <p className="text-sm sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
                Travel with faith and journey with ultimate comfort. Sai Samarth Tours brings you sanitized 
                <strong className="text-white font-semibold"> 2+2 A/C Pushback tourist coaches</strong> departing right from Bangalore, featuring verified 3-Star AC accommodations, pure vegetarian meals (Breakfast, Lunch & Dinner), and dedicated on-board tour managers for effortless temple yatras.
              </p>

              {/* Quick Spec Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 sm:p-3 border border-white/10 text-center">
                  <Bus className="w-5 h-5 mx-auto text-[#F59E0B] mb-1" />
                  <div className="text-[10px] uppercase font-bold text-gray-300">Vehicle</div>
                  <div className="text-xs font-bold text-white">A/C Pushback</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 sm:p-3 border border-white/10 text-center">
                  <UserCheck className="w-5 h-5 mx-auto text-[#F59E0B] mb-1" />
                  <div className="text-[10px] uppercase font-bold text-gray-300">Assistance</div>
                  <div className="text-xs font-bold text-white">Tour Manager</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 sm:p-3 border border-white/10 text-center">
                  <Building2 className="w-5 h-5 mx-auto text-[#F59E0B] mb-1" />
                  <div className="text-[10px] uppercase font-bold text-gray-300">Stay</div>
                  <div className="text-xs font-bold text-white">3-Star AC</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 sm:p-3 border border-white/10 text-center">
                  <Utensils className="w-5 h-5 mx-auto text-[#F59E0B] mb-1" />
                  <div className="text-[10px] uppercase font-bold text-gray-300">Meals</div>
                  <div className="text-xs font-bold text-white">ALL MEALS</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry(flagshipBusPackage.title)}
                  className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Book Bus Tour Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={() => setIsBrochureModalOpen(true)}
                    className="flex-1 sm:flex-initial px-5 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-xs sm:text-sm rounded-full backdrop-blur-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-[#F59E0B]" />
                    <span>View Brochure</span>
                  </button>

                  <a
                    href={`tel:${siteConfig.phoneTentative}`}
                    onClick={() => trackContact({ content_name: 'Bus Page Call Button' })}
                    className="p-3.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-all shrink-0 flex items-center justify-center"
                    title="Call for Bus Booking"
                  >
                    <Phone className="w-4 h-4 text-[#F59E0B]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative group bg-white/5 backdrop-blur-md rounded-3xl p-3 border border-white/20 shadow-2xl overflow-hidden">
                <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden">
                  <img
                    src="/panch-bootha-bus-yatra-1.webp"
                    alt="Panch Bootha Yatra and Tirumala Balaji A/C Pushback Bus Tour"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20"></div>
                  
                  {/* Top Bar with Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 z-10">
                    <div className="bg-[#114088]/90 text-[#F59E0B] px-2.5 py-1 rounded-full text-[11px] font-bold backdrop-blur-md border border-white/10 flex items-center gap-1.5 shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>Flagship Bus Yatra</span>
                    </div>

                    <div className="bg-gradient-to-r from-[#EA580C] to-[#C2410C] text-white px-3 py-1 rounded-full shadow-lg font-black text-xs sm:text-sm tracking-wide border border-white/20 shrink-0">
                      ₹16,999/- All-Inclusive
                    </div>
                  </div>

                  {/* Bottom details */}
                  <div className="absolute bottom-3 inset-x-3 text-white">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#F59E0B] block mb-1">
                      4 Nights / 5 Days • Bangalore Departure
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-serif-brand leading-snug">
                      Panch Bootha Yatra & Tirumala Balaji
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-300 mt-1 line-clamp-2">
                      Covering Thiruvannamalai, Srirangam, Thanjavur, Chidambaram, Kanchipuram, Sri Kalahasthi & Tirumala Balaji.
                    </p>
                  </div>
                </div>

                <div className="p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-gray-300 font-medium">
                  <span className="flex items-center gap-1.5 text-[#F59E0B]">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                    All 5 Cosmic Shiva Elements & Balaji
                  </span>
                  <Link
                    to="/package/panch-bootha-yatra-tirumala-balaji-bus-tour-from-bangalore"
                    className="text-white hover:text-[#F59E0B] font-bold flex items-center gap-1 transition-colors self-end sm:self-auto"
                  >
                    View Tour Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: The 5 Sacred Elements (Pancha Bhootha) & Balaji Explorer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 -mt-6 sm:-mt-8 relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Spiritual Significance of the Circuit</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-serif-brand text-[#114088] leading-tight">
            The 5 Sacred Cosmic Elements of Lord Shiva
          </h2>
          <p className="text-gray-600 text-xs sm:text-base mt-2 sm:mt-3 leading-relaxed">
            In Hindu Sanatana Dharma, Lord Shiva manifests in the five natural elements (Pancha Bhootha). 
            Completing all five sthalams in a single devoted yatra harmonizes the inner self with universal cosmic energy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {elementsData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${item.bgLight} ${item.textColor}`}>
                      {item.element}
                    </span>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${item.color} text-white flex items-center justify-center shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#114088] font-serif-brand mb-1">
                    {item.temple}
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 mb-2.5 sm:mb-3 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gray-400" />
                    {item.location}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 sm:mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-500 font-medium">Included in Bus Yatra</span>
                  <span className="text-[#EA580C] font-bold flex items-center gap-1">
                    VIP Darshan Care <Check className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 2: Detailed Day-by-Day Itinerary of Panch Bootha Yatra */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-[#114088] via-[#0D3269] to-[#0A244D] text-white p-4 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2">
                  <span className="bg-[#F59E0B] text-[#114088] font-black text-[11px] sm:text-xs uppercase px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
                    Complete 4N/5D Travel Itinerary
                  </span>
                  <span className="text-[11px] sm:text-xs bg-white/20 text-white px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full font-bold">
                    Vehicle: Deluxe A/C Pushback Bus
                  </span>
                  <span className="text-[11px] sm:text-xs bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full font-bold">
                    All Meals Included
                  </span>
                </div>
                <h2 className="text-xl sm:text-3xl font-extrabold font-serif-brand">
                  Panch Bootha Yatra & Tirumala Balaji
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                  Thoughtfully paced spiritual journey from Bangalore with verified 3-Star AC stays & experienced tour coordinator.
                </p>
              </div>

              {/* Price & Booking Callout */}
              <div className="flex items-center justify-between md:flex-col md:items-end bg-white/10 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/20 shrink-0 gap-3">
                <div className="text-left md:text-right">
                  <span className="text-[10px] text-gray-300 uppercase font-bold tracking-wider block">Tour Fare Per Person</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-black text-[#F59E0B]">₹16,999/-</span>
                    <span className="text-[10px] text-gray-300 md:hidden">(incl. tax)</span>
                  </div>
                  <span className="text-[10px] text-gray-300 hidden md:block">Inclusive of 5% Govt Tax</span>
                </div>
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry(flagshipBusPackage.title)}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md cursor-pointer transition-all active:scale-95 shrink-0"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Day Tabs */}
          <div className="border-b border-gray-200 bg-gray-50/80 px-3 sm:px-8 py-2.5 sm:py-3 flex gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none">
            {flagshipBusPackage.sampleItinerary.map((itinerary, idx) => {
              const dayNum = idx + 1;
              const isSelected = activeDay === dayNum;
              const dayNames = ["Trichy", "Chidambaram", "Kanchipuram", "Kalahasthi", "Tirumala"];
              const shortLoc = dayNames[idx] || `Day ${dayNum}`;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveDay(dayNum)}
                  className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer shrink-0 ${
                    isSelected
                      ? 'bg-[#114088] text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-[#F59E0B] text-[#114088]' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {dayNum}
                  </span>
                  <span className="sm:hidden">Day {dayNum} ({shortLoc})</span>
                  <span className="hidden sm:inline">{itinerary.day}</span>
                </button>
              );
            })}
          </div>

          {/* Active Day Detail Card */}
          <div className="p-4 sm:p-10">
            {flagshipBusPackage.sampleItinerary.map((itinerary, idx) => {
              const dayNum = idx + 1;
              if (activeDay !== dayNum) return null;

              return (
                <div key={idx} className="animate-fadeIn space-y-4 sm:space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-gray-100">
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-widest text-[#EA580C] block mb-1">
                        Detailed Day Schedule
                      </span>
                      <h3 className="text-lg sm:text-2xl font-bold text-[#114088] font-serif-brand">
                        {itinerary.day}: {itinerary.title}
                      </h3>
                    </div>

                    {itinerary.meals && (
                      <div className="flex items-center gap-1.5 sm:gap-2 bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1.5 rounded-xl text-xs font-bold self-start sm:self-auto shrink-0">
                        <Utensils className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600" />
                        <span>Included Meals: {itinerary.meals}</span>
                      </div>
                    )}
                  </div>

                  <div className="bg-gray-50/70 rounded-2xl p-4 sm:p-6 border border-gray-100">
                    <p className="text-gray-700 text-xs sm:text-base leading-relaxed whitespace-pre-line font-medium">
                      {itinerary.detail}
                    </p>
                  </div>

                  {/* Day specific highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 pt-1 sm:pt-2">
                    {dayNum === 1 && (
                      <>
                        <div className="p-3 bg-red-50/70 border border-red-100 rounded-xl text-xs text-red-900 font-semibold flex items-center gap-2">
                          <Flame className="w-4 h-4 text-red-600 shrink-0" />
                          <span>Arunachaleeswarar Temple (Fire Element)</span>
                        </div>
                        <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-xl text-xs text-blue-900 font-semibold flex items-center gap-2">
                          <Droplets className="w-4 h-4 text-blue-600 shrink-0" />
                          <span>Jambukeswarar Temple (Water Element)</span>
                        </div>
                        <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-700 font-semibold flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-[#114088] shrink-0" />
                          <span>Overnight stay at Tiruchirappalli (3-Star)</span>
                        </div>
                      </>
                    )}

                    {dayNum === 2 && (
                      <>
                        <div className="p-3 bg-amber-50/70 border border-amber-100 rounded-xl text-xs text-amber-900 font-semibold flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                          <span>Sri Ranganathaswamy Temple, Srirangam</span>
                        </div>
                        <div className="p-3 bg-purple-50/70 border border-purple-100 rounded-xl text-xs text-purple-900 font-semibold flex items-center gap-2">
                          <Globe className="w-4 h-4 text-purple-600 shrink-0" />
                          <span>Thillai Nataraja Temple (Space Element)</span>
                        </div>
                        <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-700 font-semibold flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-[#114088] shrink-0" />
                          <span>Overnight stay at Chidambaram (3-Star)</span>
                        </div>
                      </>
                    )}

                    {dayNum === 3 && (
                      <>
                        <div className="p-3 bg-emerald-50/70 border border-emerald-100 rounded-xl text-xs text-emerald-900 font-semibold flex items-center gap-2">
                          <Mountain className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Ekambareswarar Temple (Earth Element)</span>
                        </div>
                        <div className="p-3 bg-pink-50/70 border border-pink-100 rounded-xl text-xs text-pink-900 font-semibold flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-pink-600 shrink-0" />
                          <span>Kanchi Kamakshi Amman Temple & Silk Shopping</span>
                        </div>
                        <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-700 font-semibold flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-[#114088] shrink-0" />
                          <span>Overnight stay at Kanchipuram (3-Star)</span>
                        </div>
                      </>
                    )}

                    {dayNum === 4 && (
                      <>
                        <div className="p-3 bg-sky-50/70 border border-sky-100 rounded-xl text-xs text-sky-900 font-semibold flex items-center gap-2">
                          <Wind className="w-4 h-4 text-sky-600 shrink-0" />
                          <span>Sri Kalahasthi Temple (Air Element)</span>
                        </div>
                        <div className="p-3 bg-amber-50/70 border border-amber-100 rounded-xl text-xs text-amber-900 font-semibold flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                          <span>Scenic Ghat Road Ascent to Holy Tirumala</span>
                        </div>
                        <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-700 font-semibold flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-[#114088] shrink-0" />
                          <span>Overnight stay in Tirumala Hills</span>
                        </div>
                      </>
                    )}

                    {dayNum === 5 && (
                      <>
                        <div className="p-3 bg-yellow-50/70 border border-yellow-200 rounded-xl text-xs text-yellow-950 font-semibold flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-yellow-600 shrink-0" />
                          <span>Sri Balaji Venkateshwara Swamy Darshan</span>
                        </div>
                        <div className="p-3 bg-orange-50/70 border border-orange-100 rounded-xl text-xs text-orange-900 font-semibold flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-orange-600 shrink-0" />
                          <span>Sri Padmavathi Ammavari Temple, Tiruchanur</span>
                        </div>
                        <div className="p-3 bg-green-50/70 border border-green-100 rounded-xl text-xs text-green-900 font-semibold flex items-center gap-2">
                          <Bus className="w-4 h-4 text-green-700 shrink-0" />
                          <span>Return to Bangalore with Divine Blessings</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Navigation between days */}
          <div className="bg-gray-50 px-6 sm:px-10 py-4 border-t border-gray-100 flex items-center justify-between">
            <button
              onClick={() => setActiveDay(prev => Math.max(1, prev - 1))}
              disabled={activeDay === 1}
              className="text-xs font-bold text-[#114088] disabled:opacity-30 disabled:cursor-not-allowed hover:underline"
            >
              ← Previous Day
            </button>
            <span className="text-xs font-semibold text-gray-500">
              Day {activeDay} of 5
            </span>
            <button
              onClick={() => setActiveDay(prev => Math.min(5, prev + 1))}
              disabled={activeDay === 5}
              className="text-xs font-bold text-[#114088] disabled:opacity-30 disabled:cursor-not-allowed hover:underline"
            >
              Next Day →
            </button>
          </div>
        </div>
      </div>

      {/* Section 3: Package Details - Inclusions, Exclusions, Payment & Refund Policy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Inclusions & Exclusions (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-5 sm:p-8 border border-gray-200 shadow-md">
              <div className="flex items-center gap-2 mb-5 sm:mb-6">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 shrink-0" />
                <h3 className="text-lg sm:text-xl font-bold font-serif-brand text-[#114088]">
                  What's Included in ₹16,999/-
                </h3>
              </div>

              <ul className="space-y-3">
                {flagshipBusPackage.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-relaxed">{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-5 sm:p-8 border border-gray-200 shadow-md">
              <div className="flex items-center gap-2 mb-5 sm:mb-6">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 shrink-0" />
                <h3 className="text-lg sm:text-xl font-bold font-serif-brand text-[#114088]">
                  What's Not Included
                </h3>
              </div>

              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-gray-600">
                {flagshipBusPackage.exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2.5 sm:gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2"></span>
                    <span className="leading-relaxed">{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Payment & Refund Policy (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-5 sm:p-8 border border-gray-200 shadow-md">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#F59E0B] shrink-0" />
                <h3 className="text-lg sm:text-xl font-bold font-serif-brand text-[#114088]">
                  Payment Policy
                </h3>
              </div>
              <p className="text-xs text-gray-500 mb-3 sm:mb-4 font-medium">
                All modes of payment are accepted (online UPI, Net Banking, Debit/Credit Card, and offline).
              </p>

              <div className="space-y-2.5 sm:space-y-3 text-xs text-gray-700">
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <strong className="block text-gray-900 font-bold mb-1">Package below ₹25,000</strong>
                  Full payment required at the time of booking.
                </div>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <strong className="block text-gray-900 font-bold mb-1">Package below ₹50,000</strong>
                  ₹25,000 registration amount per person at booking; balance due 45 days before departure.
                </div>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <strong className="block text-gray-900 font-bold mb-1">Last-Minute Bookings</strong>
                  Bookings received within 45 days of departure require full payment at the time of booking.
                </div>
              </div>
            </div>

            {/* Cancellation & Refund Table */}
            <div className="bg-white rounded-3xl p-5 sm:p-8 border border-gray-200 shadow-md">
              <h3 className="text-lg sm:text-xl font-bold font-serif-brand text-[#114088] mb-2 sm:mb-3">
                Refund & Cancellation Policy
              </h3>
              <p className="text-xs text-gray-500 mb-3 sm:mb-4 leading-relaxed">
                Sai Samarth Tours will not be responsible for, or liable to refund claims arising from flight delays or cancellations, mechanical issues, strikes/bandhs, or changes in weather conditions.
              </p>

              <div className="border border-gray-200 rounded-xl overflow-hidden text-[11px] sm:text-xs">
                <div className="grid grid-cols-2 bg-amber-50/80 font-bold text-[#114088] p-2.5 sm:p-3 border-b border-gray-200">
                  <span>Days Before Departure</span>
                  <span className="text-right">Cancellation Fee Applicable</span>
                </div>
                <div className="grid grid-cols-2 p-2.5 sm:p-3 border-b border-gray-100 items-center gap-2">
                  <span className="font-semibold text-gray-800">0 – 15 Days</span>
                  <span className="text-right font-extrabold text-red-600 bg-red-50 py-0.5 px-2 rounded self-center ml-auto">
                    100% on Net Price
                  </span>
                </div>
                <div className="grid grid-cols-2 p-2.5 sm:p-3 items-center gap-2">
                  <span className="font-semibold text-gray-800">More than 15 Days</span>
                  <span className="text-right font-extrabold text-amber-700 bg-amber-50 py-0.5 px-2 rounded self-center ml-auto">
                    50% on Net Price
                  </span>
                </div>
              </div>

              {/* Official Brochure CTA Banner */}
              <div className="mt-5 sm:mt-6 p-3.5 sm:p-4 bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <div>
                  <span className="text-xs font-bold text-[#114088] block">Official Printed Brochure</span>
                  <span className="text-[11px] text-gray-500">View complete scanned itinerary & policies</span>
                </div>
                <button
                  onClick={() => setIsBrochureModalOpen(true)}
                  className="w-full sm:w-auto px-4 py-2 bg-[#114088] hover:bg-[#0C1F41] text-white text-xs font-bold rounded-lg shadow-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer shrink-0"
                >
                  <Eye className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>View Brochure</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Why Travel by Bus with Sai Samarth Tours */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="bg-gradient-to-br from-[#114088] to-[#0B1E3F] rounded-3xl p-5 sm:p-10 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] bg-amber-500/15 px-3 py-1 rounded-full border border-amber-500/30 mb-2.5 sm:mb-3 inline-block">
              Travel with Faith. Journey with Comfort.
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-serif-brand text-white leading-tight">
              Why Devotees Love Our Deluxe Bus Yatras
            </h2>
            <p className="text-gray-300 text-xs sm:text-base mt-2 leading-relaxed">
              We eliminate the fatigue of multi-city temple pilgrimages with thoughtfully curated ground transportation, hygienic dining, and caring tour managers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {busAmenities.map((amenity, idx) => {
              const Icon = amenity.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-[#EA580C] to-[#F59E0B] text-white flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2 font-serif-brand">
                    {amenity.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {amenity.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Core Values Strip from user brochure image 4 */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 text-left sm:text-center">
            <div className="p-2.5 sm:p-3 bg-white/5 rounded-xl border border-white/10">
              <span className="text-[11px] sm:text-xs font-bold text-[#F59E0B] uppercase block">Personalized Care</span>
              <p className="text-[10px] sm:text-[11px] text-gray-300 mt-0.5">Thoughtful planning with attention to devotee comfort.</p>
            </div>
            <div className="p-2.5 sm:p-3 bg-white/5 rounded-xl border border-white/10">
              <span className="text-[11px] sm:text-xs font-bold text-[#F59E0B] uppercase block">Spiritual Circuit</span>
              <p className="text-[10px] sm:text-[11px] text-gray-300 mt-0.5">Sacred temple circuits with verified pure veg food.</p>
            </div>
            <div className="p-2.5 sm:p-3 bg-white/5 rounded-xl border border-white/10">
              <span className="text-[11px] sm:text-xs font-bold text-[#F59E0B] uppercase block">Coordination</span>
              <p className="text-[10px] sm:text-[11px] text-gray-300 mt-0.5">Dedicated tour manager accompanying the entire trip.</p>
            </div>
            <div className="p-2.5 sm:p-3 bg-white/5 rounded-xl border border-white/10">
              <span className="text-[11px] sm:text-xs font-bold text-[#F59E0B] uppercase block">Transparent Fare</span>
              <p className="text-[10px] sm:text-[11px] text-gray-300 mt-0.5">Includes hotel stays, bus transit, meals & tax.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Customized Group Bus Charters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
              <Bus className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-serif-brand text-[#114088]">
                Looking for a Custom Group Bus Charter from Bangalore?
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                We organize dedicated 2+2 A/C Pushback coaches for extended families, apartment associations, and corporate pilgrimage groups.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenEnquiry && onOpenEnquiry('Custom Group Bus Charter')}
            className="w-full md:w-auto px-6 py-3 bg-[#114088] hover:bg-[#0C1F41] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-colors cursor-pointer shrink-0 text-center"
          >
            Request Custom Bus
          </button>
        </div>
      </div>

      {/* Section 6: FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#EA580C] block mb-2">
            Got Questions?
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold font-serif-brand text-[#114088]">
            Frequently Asked Questions on Bus Tours
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1.5">
            Everything you need to know about boarding, seat allocation, meals, and darshan assistance.
          </p>
        </div>

        <div className="space-y-3">
          {busFaqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 font-bold text-xs sm:text-base text-[#114088] hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  <span className="leading-snug">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#F59E0B] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3 bg-gray-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 7: Final CTA Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="bg-gradient-to-r from-[#EA580C] to-[#C2410C] rounded-3xl p-6 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase font-extrabold tracking-widest text-amber-200">
              Limited Seats Available Per Departure
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold font-serif-brand">
              Reserve Your Seat on the Panch Bootha Bus Yatra
            </h2>
            <p className="text-xs sm:text-sm text-orange-100 max-w-xl">
              Experience the divine grace of all 5 Shiva Elements and Lord Tirumala Balaji. Call or WhatsApp our Bangalore team for instant booking confirmation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-row items-center sm:gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry(flagshipBusPackage.title)}
              className="w-full sm:w-auto px-2.5 sm:px-6 py-3 bg-white text-[#EA580C] hover:bg-gray-100 font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all cursor-pointer text-center justify-center flex items-center whitespace-nowrap"
            >
              Enquire Now
            </button>
            <a
              href={getWhatsAppUrl({ packageTitle: flagshipBusPackage.title })}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContact({ content_name: 'Bus Page WhatsApp CTA' })}
              className="w-full sm:w-auto px-2.5 sm:px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg flex items-center justify-center gap-1.5 sm:gap-2 transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Official Brochure Carousel Modal */}
      {isBrochureModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
          <div className="relative bg-white rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="p-3.5 sm:p-4 bg-[#114088] text-white flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#F59E0B] shrink-0" />
                <span className="font-bold text-xs sm:text-base truncate">
                  Official Brochure (Page {brochurePage} of 4)
                </span>
              </div>
              <button
                onClick={() => setIsBrochureModalOpen(false)}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Modal Body: Active Brochure Page Image */}
            <div className="flex-1 overflow-y-auto p-2 sm:p-4 flex items-center justify-center bg-gray-100">
              <img
                src={brochureImages[brochurePage - 1]}
                alt={`Panch Bootha Yatra Official Brochure Page ${brochurePage}`}
                className="max-h-[58vh] sm:max-h-[65vh] w-auto object-contain rounded-lg shadow-md border border-gray-300"
              />
            </div>

            {/* Modal Footer: Controls */}
            <div className="p-3 sm:p-4 bg-white border-t border-gray-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2">
                {[1, 2, 3, 4].map((page) => (
                  <button
                    key={page}
                    onClick={() => setBrochurePage(page)}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg font-bold text-xs transition-colors cursor-pointer flex items-center justify-center ${
                      brochurePage === page
                        ? 'bg-[#114088] text-white shadow-sm'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setIsBrochureModalOpen(false);
                    onOpenEnquiry && onOpenEnquiry(flagshipBusPackage.title);
                  }}
                  className="px-4 sm:px-5 py-2 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white text-xs font-bold uppercase rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-all"
                >
                  Book This Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
