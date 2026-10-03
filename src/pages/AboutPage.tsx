import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, HeartHandshake, Award, Users, Compass, 
  MapPin, Calendar, Sparkles, CheckCircle2, Phone, 
  MessageCircle, Star, Target, Eye, Globe, Building2, 
  Utensils, UserCheck, Shield, ArrowRight
} from 'lucide-react';
import { siteConfig } from '../data/config';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { AboutSection } from '../components/AboutSection';
import { FaqSection } from '../components/FaqSection';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { localBusinessSchema } from '../utils/schema';

export function AboutPage() {
  const milestones = [
    {
      year: '2013',
      title: 'Humble Beginnings',
      desc: 'Founded in Bangalore with a mission to organize seamless, hassle-free Shirdi Sai Baba flight yatras with VIP Darshan for elderly devotees.'
    },
    {
      year: '2016',
      title: 'Pan-India Pilgrimage Expansion',
      desc: 'Introduced Jyothirlinga circuits (Kashi, Rameshwaram, Somnath, Ujjain, Grishneshwar, Bhimashankar) with dedicated Tour Managers.'
    },
    {
      year: '2019',
      title: 'Domestic Holidays Circuit',
      desc: 'Expanded into premium leisure destinations including Kashmir, Kerala, Leh Ladakh, Himachal, Goa, and Rajasthan royal heritage packages.'
    },
    {
      year: '2022',
      title: 'International Gateways',
      desc: 'Launched flight packages for Bhutan, Nepal, Malaysia, Thailand, and Dubai with end-to-end visa assistance and authentic Indian vegetarian dining.'
    },
    {
      year: '2024 - Present',
      title: '10,000+ Happy Pilgrims',
      desc: 'Celebrating over a decade of trust, 98.6% positive traveler satisfaction, and accompanied Tour Managers for 100% of group departures.'
    }
  ];

  const corePillars = [
    {
      icon: <UserCheck className="w-6 h-6 text-[#F59E0B]" />,
      title: 'Tour Manager on All Tours',
      desc: 'An experienced tour manager accompanies your group from Bangalore airport departure to return, managing hotel check-ins, local buses, and VIP temple passes.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#2563EB]" />,
      title: 'Senior Citizen Special Care',
      desc: 'Over 60% of our pilgrims are elderly parents. We arrange ground-floor/elevator rooms, wheelchair & battery car coordination, and gentle pacing.'
    },
    {
      icon: <Utensils className="w-6 h-6 text-emerald-600" />,
      title: '100% Pure Vegetarian Dining',
      desc: 'Wholesome daily Breakfast, Lunch, and Dinner prepared under strict hygiene standards, with South & North Indian menus suited for spiritual yatras.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
      title: 'Transparent All-Inclusive Pricing',
      desc: 'Zero hidden surprises. All quotes clearly itemize return flights from Bangalore, AC sanitized transport, 3★/4★ verified hotels, and government GST.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      title: 'VIP Darshan & Vedic Rituals',
      desc: 'Pre-booked special entry passes for Shirdi Kakad Aarti, Kashi Vishwanath, Ayodhya Ram Mandir, and trusted Purohit coordination for Abhishekams.'
    },
    {
      icon: <Shield className="w-6 h-6 text-rose-500" />,
      title: 'Safety, Hygiene & Sanitized Fleet',
      desc: 'Verified commercial AC tempo travellers and coaches driven by experienced route pilots with 24/7 emergency and medical helpline assistance.'
    }
  ];

  const stats = [
    { value: '10,000+', label: 'Happy Travelers Guided', icon: <Users className="w-5 h-5 text-[#F59E0B]" /> },
    { value: '12+', label: 'Years of Experience', icon: <Award className="w-5 h-5 text-[#2563EB]" /> },
    { value: '98.6%', label: '5-Star Satisfaction Rate', icon: <Star className="w-5 h-5 text-[#F59E0B]" /> },
    { value: '100%', label: 'All Packages with Tour Manager', icon: <UserCheck className="w-5 h-5 text-emerald-600" /> }
  ];

  return (
    <div className="flex-grow bg-[#FBF9F5] font-sans">
      <SEOHead
        title="About Us | Sai Samarth Tours - Bangalore's Premier Pilgrimage Agency"
        description="Established in 2013, Sai Samarth Tours is Bangalore's trusted travel agency specializing in Shirdi flight packages, Jyotirlinga pilgrimages, and domestic & global holiday getaways."
        canonical="https://saisamarthtours.com/about"
        ogImage="/about-sai-samarth-tours-agency.webp"
        jsonLd={localBusinessSchema}
      />
      
      {/* 1. Hero Banner */}
      <div className="bg-[#0B1E3F] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-6">
            <Breadcrumbs items={[{ name: 'About Us' }]} className="text-gray-300 justify-center" />
          </div>

          <span className="text-xs uppercase font-extrabold tracking-widest text-[#F59E0B] bg-amber-500/15 px-4 py-1.5 rounded-full border border-amber-500/30 mb-4 inline-block">
            Our Legacy & Dedication
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif-brand mb-6 leading-tight">
            Crafting Sacred Memories & World-Class Journeys
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Headquartered in Bangalore, Sai Samarth Tours is a dedicated pilgrimage tour operator in Bangalore offering spiritually enriching yatras, memorable domestic holidays, and international journeys with absolute comfort, safety, and transparency.
          </p>
        </div>
      </div>

      {/* 2. Key Metrics Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 p-3 rounded-xl bg-gray-50/60 border border-gray-100">
              <div className="w-11 h-11 rounded-xl bg-white shadow-2xs flex items-center justify-center shrink-0 border border-gray-200">
                {item.icon}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#114088] leading-tight">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-500 mt-0.5">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Divine Journeys Section (Main About) */}
      <AboutSection />

      {/* 4. Mission & Vision Session */}
      <section className="py-16 sm:py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#F59E0B] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 inline-block mb-3">
              Our Guiding Compass
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#114088]">
              Mission, Vision & Core Values
            </h2>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-50/70 to-white rounded-3xl p-8 sm:p-10 border border-blue-100 shadow-sm relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-[#114088] text-white flex items-center justify-center mb-6 shadow-md">
                <Target className="w-7 h-7 text-[#F59E0B]" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#114088] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
                To transform every pilgrimage and holiday into a stress-free, sacred, and deeply fulfilling experience by combining reliable flights, deluxe accommodations, authentic vegetarian cuisine, and compassionate tour management.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm font-semibold text-gray-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
                  <span>Eliminate queue anxiety with pre-booked VIP Darshans</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
                  <span>Provide specialized physical and emotional support for elders</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
                  <span>Deliver all-inclusive pricing with zero hidden costs</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-amber-50/70 to-white rounded-3xl p-8 sm:p-10 border border-amber-200/80 shadow-sm relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-[#D97706] text-white flex items-center justify-center mb-6 shadow-md">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#114088] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
                To be recognized across South India as the most trusted, ethical, and hospitable tour operator for spiritual Yatras and domestic & international holiday getaways.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm font-semibold text-gray-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                  <span>Expanding customized private family circuits across India</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                  <span>Seamless global departures directly from Bangalore (BLR)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                  <span>Upholding South Indian warmth, ethics, and culinary excellence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Pillars of Service (The 6 Promises) */}
      <section className="py-16 sm:py-24 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#EA580C] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 inline-block mb-3">
              The Sai Samarth Difference
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#114088]">
              Our 6 Pillars of Excellence
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3">
              Every single package is crafted around these uncompromising hospitality benchmarks.
            </p>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {corePillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-gray-100 hover:border-amber-400/50 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center mb-5">
                    {pillar.icon}
                  </div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#114088] mb-2.5">
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
      </section>

      {/* 6. Company Milestones Timeline (2013 - Present) */}
      <section className="py-16 sm:py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#F59E0B] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 inline-block mb-3">
              A Decade of Devotion
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#114088]">
              Our Journey Through the Years
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3">
              From organizing small Shirdi devotee groups in 2013 to becoming one of Bangalore's most recommended travel specialists.
            </p>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="relative border-l-2 border-[#F59E0B] ml-4 md:ml-32 space-y-10 pl-6 sm:pl-10">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#114088] border-4 border-white shadow-md group-hover:bg-[#F59E0B] transition-colors flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-2xs hover:shadow-md transition-all">
                  <span className="bg-[#114088] text-amber-300 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                    Year {m.year}
                  </span>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#114088] mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Leadership, Tour Managers & E-E-A-T Registration Section */}
      <section className="py-16 sm:py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#EA580C] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 inline-block mb-3">
              Leadership & Tour Managers
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#114088]">
              The People Behind Your Sacred Journeys
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
              Founded by passionate Bangalore travel veterans and supported by on-ground devotional tour leaders who accompany every group from departure to return.
            </p>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Founder 1 */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 rounded-full bg-[#114088] text-white flex items-center justify-center font-serif text-2xl font-bold mb-4 shadow-md">
                NM
              </div>
              <h3 className="text-xl font-bold font-serif text-[#114088] mb-1">Naveen M</h3>
              <p className="text-xs font-bold text-[#EA580C] uppercase tracking-wider mb-3">Founder & Managing Director</p>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Over 12+ years of expertise in spiritual tourism operations and flight logistics. Oversees flight ticketing, VIP temple sanctioning, and customer happiness.
              </p>
              <div className="text-[11px] font-semibold text-gray-500 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Bangalore Headquarters</span>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 rounded-full bg-[#EA580C] text-white flex items-center justify-center font-serif text-2xl font-bold mb-4 shadow-md">
                CR
              </div>
              <h3 className="text-xl font-bold font-serif text-[#114088] mb-1">Chandra Shekar R</h3>
              <p className="text-xs font-bold text-[#EA580C] uppercase tracking-wider mb-3">Co-Founder & Operations Director</p>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Specializes in hotel contracting, deluxe AC coach logistics, South Indian vegetarian catering, and senior citizen accessibility at crowded temple shrines.
              </p>
              <div className="text-[11px] font-semibold text-gray-500 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Bangalore Headquarters</span>
              </div>
            </div>

            {/* Accompanying Tour Managers */}
            <div className="bg-gradient-to-br from-[#0B1E3F] to-[#114088] text-white rounded-2xl p-7 shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-full bg-amber-400 text-[#0B1E3F] flex items-center justify-center font-serif text-2xl font-bold mb-4 shadow-md">
                  TM
                </div>
                <h3 className="text-xl font-bold font-serif text-white mb-1">Our Tour Managers</h3>
                <p className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-3">Devotional Escorts & Caregivers</p>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  Every group departing from Kempegowda International Airport is accompanied by a dedicated tour manager who takes care of baggage, airport boarding, hotel check-ins, and direct VIP queues.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-amber-300">
                <span>100% Accompanied Yatras</span>
                <span>★ 4.9 Rating</span>
              </div>
            </div>
          </div>

          {/* Registration & Real Office Trust Box */}
          <div className="mt-12 bg-amber-50/60 rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center lg:text-left">
              <span className="text-xs font-extrabold text-[#EA580C] uppercase tracking-wider">Verified Business Credentials</span>
              <h4 className="text-lg sm:text-xl font-bold font-serif text-[#114088]">
                Govt. Registered Enterprise & Licensed Tour Operator
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 max-w-2xl leading-relaxed">
                Registered under MSME (Govt. of India), GST Compliant, and operational as a trusted Yelahanka travel agency and tour operator in Bangalore from our registered office at No. 2238, 2nd Floor, 16th ‘B’ Cross, Yelahanka New Town, Bengaluru – 560064.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a 
                href="https://maps.google.com/?q=No.+2238,+Second+Floor,+16th+B+Cross,+Yelahanka+New+Town,+Bengaluru,+Karnataka+560064"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#114088] hover:bg-[#0B1E3F] text-white px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>View Office on Maps</span>
              </a>
              <a 
                href="https://search.google.com/local/reviews?placeid=ChIJ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-50 text-[#114088] border border-gray-300 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-2"
              >
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>Google Reviews (4.9★)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Verified Pilgrim Reviews Summary */}
      <section className="py-16 bg-[#FBF9F5] border-t border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#EA580C] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/80 inline-block mb-3">
            Devotee Trust & Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#114088] mb-4">
            Trusted by 20,000+ Happy Pilgrims & Travelers
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            From our founding yatra to Shirdi in 2013 to expansive holy circuits across India, our travelers' heartfelt blessings inspire our dedication.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed mb-4">
                  "Our Shirdi flight pilgrimage was exceptionally smooth. The tour manager took personal care of my elderly mother during Kakad Aarti. Truly grateful to Sai Samarth Tours."
                </p>
              </div>
              <div className="border-t border-gray-100 pt-3">
                <span className="font-bold text-xs text-[#114088] block">Srinivas Murthy</span>
                <span className="text-[10px] text-gray-400">Bangalore • Shirdi Direct Flight Yatra</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed mb-4">
                  "Kashi, Ayodhya, and Prayagraj yatra was perfectly coordinated. Clean 3-star AC hotels, pure veg food, and zero darshan stress. Top tier service from Bangalore."
                </p>
              </div>
              <div className="border-t border-gray-100 pt-3">
                <span className="font-bold text-xs text-[#114088] block">Anuradha Deshmukh</span>
                <span className="text-[10px] text-gray-400">Bangalore • Kashi Ayodhya Circuit</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed mb-4">
                  "Booked our family Kashmir trip with Sai Samarth. The private Innova, houseboat in Dal Lake, and hotel stays in Gulmarg were flawless. Highly recommend!"
                </p>
              </div>
              <div className="border-t border-gray-100 pt-3">
                <span className="font-bold text-xs text-[#114088] block">Ramesh Babu</span>
                <span className="text-[10px] text-gray-400">Bangalore • Kashmir Family Holiday</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Direct Call to Action (CTA) Consultation Box */}
      <section className="py-16 bg-[#0B1E3F] text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#F59E0B] bg-amber-500/15 px-4 py-1.5 rounded-full border border-amber-500/30 mb-4 inline-block">
            Start Your Journey Today
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Ready to Experience a Seamless Pilgrimage or Holiday?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Connect with our tour advisors in Bangalore for instant itinerary recommendations, custom family packages, and flight bookings.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:+919187711649" 
              className="w-full sm:w-auto bg-[#F59E0B] hover:bg-[#D97706] text-[#0B1E3F] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 91877 11649</span>
            </a>
            <a 
              href={getWhatsAppUrl({ title: 'About Us Consultation' })} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <FaqSection 
        title="Frequently Asked Questions - About Us"
        subtitle="Learn more about our heritage, customer guarantees, and tour management philosophy."
        items={[
          {
            question: "Where is Sai Samarth Tours based and how long have you been operating?",
            answer: "We are headquartered in Bangalore, Karnataka, and have been organizing customized domestic, international, and spiritual pilgrimage group tours since 2013."
          },
          {
            question: "Why choose Sai Samarth Tours over other travel operators?",
            answer: "We pride ourselves on transparent, all-inclusive pricing, accompanied Tour Managers for all group tours, hygienic pure vegetarian meals, handpicked 3-star/4-star hotels, and specialized care for senior citizens."
          },
          {
            question: "How much experience does Sai Samarth Tours have in organizing pilgrimages?",
            answer: "With extensive experience across Shirdi, Jyothirlinga, and Chardham circuits, we have guided over 10,000+ devotees with seamless VIP Darshans and comfortable travel arrangements."
          },
          {
            question: "Is it safe for solo elderly travelers or senior citizen couples to join your group tours?",
            answer: "Absolutely. Our Tour Managers provide end-to-end guidance, airport boarding assistance, luggage handling, and medical attention coordination to ensure total safety."
          },
          {
            question: "How do I request a tailored private family or corporate tour package?",
            answer: "Simply connect with us via our website enquiry form, phone call (+91 91877 11649), or WhatsApp. Our itinerary specialists will prepare a customized quote within a few hours."
          }
        ]}
      />

    </div>
  );
}
