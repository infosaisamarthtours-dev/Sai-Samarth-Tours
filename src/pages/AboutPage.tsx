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
import { PromoAndReviews } from '../components/PromoAndReviews';
import { JourneyProcess } from '../components/JourneyProcess';
import { FaqSection } from '../components/FaqSection';

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
      
      {/* 1. Hero Banner */}
      <div className="bg-[#0B1E3F] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-200">About Us</span>
          </div>

          <span className="text-xs uppercase font-extrabold tracking-widest text-[#F59E0B] bg-amber-500/15 px-4 py-1.5 rounded-full border border-amber-500/30 mb-4 inline-block">
            Our Legacy & Dedication
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif-brand mb-6 leading-tight">
            Crafting Sacred Memories & World-Class Journeys
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Headquartered in Bangalore, Sai Samarth Tours is dedicated to providing spiritually enriching yatras, memorable domestic holidays, and international journeys with absolute comfort, safety, and transparency.
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

      {/* 7. Why Choose Sai Samarth / Reviews Section */}
      <PromoAndReviews />

      {/* 8. How It Works Section */}
      <JourneyProcess />

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
