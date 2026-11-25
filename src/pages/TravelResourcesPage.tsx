import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getSEOForRoute } from '../data/seoConfig';
import { 
  Compass, MapPin, BookOpen, ShieldCheck, HeartHandshake, 
  HelpCircle, CheckCircle2, ArrowRight, Plane, Clock, 
  Sparkles, Calendar, Utensils, Luggage, Phone
} from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { ALL_PACKAGES } from '../data/packages';
import { getCanonicalPackageUrl, getCanonicalDestinationUrl } from '../utils/internalLinking';

export function TravelResourcesPage() {
  const destinationKeys = [
    'shirdi', 'kashi', 'ayodhya', 'ujjain', 'omkareshwar', 
    'puri', 'konark', 'kamakhya', 'meghalaya'
  ];

  const travelResourcesJsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Travel Resources & Pilgrimage Guides | Sai Samarth Tours',
      'description': 'Comprehensive travel resources, temple darshan guides, senior citizen travel tips, and destination hubs for Bangalore travelers.',
      'url': 'https://saisamarthtours.com/travel-resources'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://saisamarthtours.com/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Travel Resources',
          'item': 'https://saisamarthtours.com/travel-resources'
        }
      ]
    }
  ];

  const seo = getSEOForRoute('/travel-resources')!;

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-slate-800 pb-20">
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        ogImage={seo.ogImage}
        keywords={[seo.primaryKeyword, ...seo.secondaryKeywords].join(', ')}
        jsonLd={travelResourcesJsonLd}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#0B1E3F] via-[#114088] to-[#0A1A36] text-white pt-8 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-4">
            <Breadcrumbs items={[{ name: 'Travel Resources' }]} theme="dark" />
          </div>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-[11px] uppercase font-extrabold tracking-widest text-[#F59E0B] bg-amber-500/20 px-3.5 py-1.5 rounded-full border border-amber-500/30 mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>Bangalore Traveler Knowledge Hub</span>
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-serif-brand text-white leading-tight mb-4">
              Pilgrimage &amp; Holiday Travel Resources
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Plan your spiritual journey or holiday with authentic temple protocols, VIP darshan procedures, senior citizen care tips, and curated destination guides departing from Bangalore.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">

        {/* Section 1: Pilgrimage Travel Guides */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">Section 1</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold font-serif-brand text-[#0B1E3F] mb-3">
            Pilgrimage Travel Guides &amp; Sacred Circuits
          </h2>
          <p className="text-sm text-slate-600 mb-8 max-w-3xl">
            Over the past decade, Sai Samarth Tours has guided thousands of devotees from Bangalore across India’s holiest pilgrimage circuits. Explore our in-depth circuit guides below:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Guide Card 1 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase bg-amber-100 text-amber-900 px-2.5 py-1 rounded-md mb-3 inline-block">
                  Jyotirlinga Yatras
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0B1E3F] mb-2">
                  12 Jyotirlinga Circuits from Bangalore
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Everything you need to know about visiting Lord Shiva's divine Jyotirlingas: Maharashtra 3 Jyotirlingas, Madhya Pradesh Mahakal-Omkareshwar, and Gujarat Somnath-Dwarka.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <Link
                  to="/destinations/jyotirlinga"
                  className="text-xs font-bold text-[#114088] hover:text-[#0B1E3F] inline-flex items-center gap-1"
                >
                  Read Jyotirlinga Guide <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Guide Card 2 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase bg-blue-100 text-blue-900 px-2.5 py-1 rounded-md mb-3 inline-block">
                  Himalayan Pilgrimage
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0B1E3F] mb-2">
                  Char Dham Yatra Planning &amp; Helicopter Care
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Step-by-step guidance for completing Yamunotri, Gangotri, Kedarnath, and Badrinath. Covers altitude acclimatization, IRCTC helicopter booking, and biometric registration.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <Link
                  to="/destinations/chardham"
                  className="text-xs font-bold text-[#114088] hover:text-[#0B1E3F] inline-flex items-center gap-1"
                >
                  Read Char Dham Guide <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Guide Card 3 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase bg-orange-100 text-orange-900 px-2.5 py-1 rounded-md mb-3 inline-block">
                  Shakti Peeth Pilgrimage
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0B1E3F] mb-2">
                  Maa Kamakhya Devalaya &amp; Nilachal Yatra
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Essential guidelines for visiting Maa Kamakhya in Guwahati, Assam: VIP Darshan protocol, dress codes, Ambubachi Mela information, and combining with scenic Meghalaya.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <Link
                  to="/destinations/kamakhya"
                  className="text-xs font-bold text-[#114088] hover:text-[#0B1E3F] inline-flex items-center gap-1"
                >
                  Read Kamakhya Guide <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: Temple Travel Guides & Darshan Protocols */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#114088]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#114088]">Section 2</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold font-serif-brand text-[#0B1E3F] mb-3">
            Temple Travel Guides: VIP Darshan &amp; Protocols
          </h2>
          <p className="text-sm text-slate-600 mb-8 max-w-3xl">
            Major temple trusts maintain specific entry rules, attire requirements, and online reservation quotas. Here is a quick reference guide for Bangalore devotees:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200/60">
              <h3 className="text-base font-bold text-[#0B1E3F] mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#EA580C]" />
                <span>Ujjain Mahakaleshwar Bhasma Aarti Protocol</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Timings:</strong> 4:00 AM to 6:00 AM daily. Entry begins at 3:00 AM through Gate No. 4.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Dress Code:</strong> Traditional unstitched Dhoti and Angavastram for men (no shirts allowed in Nandi Hall for Jalabhishek); Saree for women.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Booking:</strong> Online reservation opens 3 months in advance. Sai Samarth Tours assists guests with booking guidance and protocol.</span>
                </li>
              </ul>
              <div className="mt-4 pt-3 border-t border-amber-200/50">
                <Link
                  to={getCanonicalPackageUrl('indore-ujjain')}
                  className="text-xs font-bold text-[#114088] hover:underline"
                >
                  View Indore Ujjain Omkareshwar Tour Package &rarr;
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200/60">
              <h3 className="text-base font-bold text-[#0B1E3F] mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#114088]" />
                <span>Shirdi Sai Baba Samadhi Mandir VIP Darshan</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Darshan Passes:</strong> Sai Samarth Tours pre-books VIP Darshan passes directly with the Shri Saibaba Sansthan Trust to bypass 3–5 hour queues.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Kakad Aarti:</strong> 5:00 AM early morning aarti passes must be reserved in advance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Luggage &amp; Electronics:</strong> Mobile phones and cameras are strictly prohibited inside the sanctum. Free cloakroom facilities are arranged.</span>
                </li>
              </ul>
              <div className="mt-4 pt-3 border-t border-blue-200/50">
                <Link
                  to={getCanonicalPackageUrl('shirdi-regular')}
                  className="text-xs font-bold text-[#114088] hover:underline"
                >
                  View Shirdi Direct Flight Package from Bangalore &rarr;
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-orange-50/50 border border-orange-200/60">
              <h3 className="text-base font-bold text-[#0B1E3F] mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#EA580C]" />
                <span>Puri Sri Jagannath Temple Guidelines</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Entry Rules:</strong> Open to Indian Hindus through Singhadwara (Lion Gate), Paschimadwara, and Uttaradwara.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Mahaprasad:</strong> Available afternoon onwards at Anandabazar, cooked traditionally in earthen pots over wood fire.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Leather Goods:</strong> Pure leather belts, wallets, and bags are prohibited inside the temple premises.</span>
                </li>
              </ul>
              <div className="mt-4 pt-3 border-t border-orange-200/50">
                <Link
                  to={getCanonicalPackageUrl('puri-jagannath')}
                  className="text-xs font-bold text-[#114088] hover:underline"
                >
                  View Puri Jagannath &amp; Konark Tour Package &rarr;
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-base font-bold text-[#0B1E3F] mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#114088]" />
                <span>Kashi Vishwanath &amp; Ganga Aarti Darshan</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Kashi Corridor:</strong> The grand Kashi Vishwanath Corridor directly connects the temple sanctum to the sacred Ganga Ghats with accessible ramps.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Dashashwamedh Aarti:</strong> Starts at sunset (approx. 6:30 PM). Sai Samarth Tours reserves private boat seating for unobstructed viewing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Pind Daan &amp; Tarpanam:</strong> Dedicated Vedic priests arranged at Manikarnika Ghat and Triveni Sangam in Prayagraj.</span>
                </li>
              </ul>
              <div className="mt-4 pt-3 border-t border-slate-200">
                <Link
                  to={getCanonicalPackageUrl('kashi-ayodhya-prayagraj')}
                  className="text-xs font-bold text-[#114088] hover:underline"
                >
                  View Kashi Ayodhya Prayagraj Tour Package &rarr;
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Section 3: Destination Guides (Links to all 9 destination hubs) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">Section 3</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold font-serif-brand text-[#0B1E3F] mb-3">
            Complete Destination Guides
          </h2>
          <p className="text-sm text-slate-600 mb-8 max-w-3xl">
            Explore dedicated destination pages featuring complete local sightseeing itineraries, distance charts, flight timings from Kempegowda Airport, and verified hotel information:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {destinationKeys.map((key) => {
              const dest = DESTINATIONS[key];
              if (!dest) return null;
              return (
                <Link
                  key={key}
                  to={getCanonicalDestinationUrl(dest.id)}
                  className="group bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-900">
                        {dest.category}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">BLR Flights</span>
                    </div>
                    <h3 className="text-base font-bold text-[#0B1E3F] group-hover:text-[#114088] transition-colors mb-1.5">
                      {dest.name} Travel Guide
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                      {dest.tagline}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-200 text-xs font-bold text-[#114088]">
                    <span>Explore Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Section 4: Travel Planning & Senior Citizen Tips */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Section 4</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold font-serif-brand text-[#0B1E3F] mb-3">
            Travel Planning &amp; Senior Citizen Guidelines
          </h2>
          <p className="text-sm text-slate-600 mb-8 max-w-3xl">
            Over 60% of our pilgrims are senior citizens or traveling with elderly parents. We tailor every itinerary to ensure relaxed pacing, minimal walking, and warm care:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/70">
              <HeartHandshake className="w-8 h-8 text-emerald-700 mb-3" />
              <h3 className="text-base font-bold text-[#0B1E3F] mb-2">Wheelchair &amp; Battery Cars</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We pre-arrange wheelchair assistance at Bangalore Kempegowda Airport (BLR) and coordinate battery-operated carts in extensive temple complexes like Ayodhya Ram Mandir and Kashi Vishwanath Corridor.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200/70">
              <Utensils className="w-8 h-8 text-[#114088] mb-3" />
              <h3 className="text-base font-bold text-[#0B1E3F] mb-2">100% Pure Vegetarian Meals</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All tour packages include hygienic pure vegetarian breakfast, lunch, and dinner. Jain food (without onion and garlic) is gladly arranged upon prior intimation during booking.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/70">
              <Luggage className="w-8 h-8 text-[#EA580C] mb-3" />
              <h3 className="text-base font-bold text-[#0B1E3F] mb-2">Essential Packing Checklist</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Carry original government photo ID (Aadhaar / Voter ID / Passport), regular prescription medicines with doctor's prescription, modest temple attire (Dhoti/Kurta/Saree), and light woolens for mountain shrines.
              </p>
            </div>

          </div>
        </section>

        {/* Section 5: Important Travel Information & Contact Hub */}
        <section className="bg-gradient-to-br from-[#0B1E3F] via-[#114088] to-[#0B1E3F] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F59E0B] bg-amber-500/20 px-3 py-1 rounded-md inline-block mb-3">
              Section 5 • Expert Support
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-serif-brand text-white mb-3">
              Need Help Planning Your Custom Yatra?
            </h2>
            <p className="text-sm text-slate-200 leading-relaxed mb-6">
              Our pilgrimage consultants in Yelahanka New Town, Bangalore are available 7 days a week to advise you on flight schedules, special darshan quotas, and customized private family departures.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all"
              >
                Contact Our Travel Desk
              </Link>
              <a
                href="tel:+919187711649"
                className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl border border-white/20 transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#F59E0B]" />
                <span>Call: +91 91877 11649</span>
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
