import React, { useState } from 'react';
import { siteConfig, getFullAddress } from '../data/config';
import { ALL_PACKAGES } from '../data/packages';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  initialPackageTitle?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialPackageTitle = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    whatsappNumber: '',
    email: '',
    numberOfTravellers: '2',
    preferredTravelDate: '',
    selectedPackage: initialPackageTitle || ALL_PACKAGES[0].title,
    specialRequirements: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#F59E0B', '#F59E0B', '#ffffff'],
    });
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Sai Samarth Tours,\nMy Name: ${formData.fullName || 'Traveler'}\nPackage Interest: ${formData.selectedPackage}\nDate: ${formData.preferredTravelDate || 'TBD'}\nTravelers: ${formData.numberOfTravellers}\nMessage: ${formData.message || 'I would like to enquire about this package.'}`
    );
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#ffffff] relative border-b border-[#EAE2D6]/30">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#F59E0B] font-bold block mb-2">
            START YOUR JOURNEY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#114088]">
            Connect With Our Travel Team
          </h2>
          <p className="text-sm text-[#1C2B39] mt-2">
            Have questions about a pilgrimage or custom getaway? We are at your service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch bg-[#FFFFFF] rounded-2xl border border-[#EAE2D6] overflow-hidden ambient-shadow">
          {/* Left Column */}
          <div className="lg:col-span-5 relative p-8 sm:p-12 bg-[#F59E0B] text-[#ffffff] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#ffffff]/20">
            <div>
              <h3 className="font-serif text-3xl font-bold text-[#ffffff] mb-6">
                {siteConfig.name}
              </h3>

              <div className="space-y-6 text-xs sm:text-sm font-light mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#ffffff]/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#ffffff]">location_on</span>
                  </div>
                  <div>
                    <strong className="text-[#ffdcbe] block uppercase tracking-wider text-[10px] mb-1 font-bold">
                      Registered Office
                    </strong>
                    <p className="leading-relaxed text-[#ffffff]/90">{getFullAddress()}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#ffffff]/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#ffffff]">call</span>
                  </div>
                  <div>
                    <strong className="text-[#ffdcbe] block uppercase tracking-wider text-[10px] mb-1 font-bold">
                      Direct Line / Support
                    </strong>
                    <a href={`tel:${siteConfig.phoneTentative}`} className="font-bold text-base text-[#ffffff]">
                      +91 {siteConfig.phoneTentative}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#ffffff]/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#ffffff]">mail</span>
                  </div>
                  <div>
                    <strong className="text-[#ffdcbe] block uppercase tracking-wider text-[10px] mb-1 font-bold">
                      Email Communication
                    </strong>
                    <a href={`mailto:${siteConfig.emailTentative}`} className="font-medium text-[#ffffff]">
                      {siteConfig.emailTentative}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#ffffff]/20">
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                Chat Instant On WhatsApp
              </button>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-[#ffffff]">
            {submitted ? (
              <div className="text-center py-16 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-600 flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-emerald-600 text-3xl">check_circle</span>
                </div>
                <h3 className="font-serif text-3xl font-bold text-[#114088]">Enquiry Received</h3>
                <p className="text-sm text-[#1C2B39] max-w-md mx-auto">
                  Thank you. Our travel team will contact you shortly to review your journey requirements.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 text-xs uppercase font-bold text-[#ffffff] bg-[#F59E0B] rounded-lg"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                <h3 className="font-serif text-2xl font-bold text-[#114088] mb-4">
                  Plan Your Trip Enquiry Form
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#114088] mb-1 font-bold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#EAE2D6] focus:border-[#F59E0B] text-sm text-[#114088] p-3 rounded-lg outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#114088] mb-1 font-bold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#EAE2D6] focus:border-[#F59E0B] text-sm text-[#114088] p-3 rounded-lg outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#114088] mb-1 font-bold">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="WhatsApp Number"
                      value={formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#EAE2D6] focus:border-[#F59E0B] text-sm text-[#114088] p-3 rounded-lg outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#114088] mb-1 font-bold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#EAE2D6] focus:border-[#F59E0B] text-sm text-[#114088] p-3 rounded-lg outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#114088] mb-1 font-bold">
                      No. of Travellers
                    </label>
                    <select
                      value={formData.numberOfTravellers}
                      onChange={(e) => setFormData({ ...formData, numberOfTravellers: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#EAE2D6] focus:border-[#F59E0B] text-sm text-[#114088] p-3 rounded-lg outline-none"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons (Min Pax)</option>
                      <option value="3-5">3 - 5 Persons</option>
                      <option value="6+">6+ Group / Family</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#114088] mb-1 font-bold">
                      Preferred Travel Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredTravelDate}
                      onChange={(e) => setFormData({ ...formData, preferredTravelDate: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#EAE2D6] focus:border-[#F59E0B] text-sm text-[#114088] p-3 rounded-lg outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#114088] mb-1 font-bold">
                      Select Package
                    </label>
                    <select
                      value={formData.selectedPackage}
                      onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#EAE2D6] focus:border-[#F59E0B] text-sm text-[#114088] p-3 rounded-lg outline-none"
                    >
                      {ALL_PACKAGES.map((p) => (
                        <option key={p.id} value={p.title}>
                          {p.title} ({p.price})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#114088] mb-1 font-bold">
                    Message / Special Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Senior citizen assistance, flight requests, etc."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[#EAE2D6] focus:border-[#F59E0B] text-sm text-[#114088] p-3 rounded-lg outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-xs uppercase tracking-[0.2em] font-bold text-[#ffffff] bg-[#F59E0B] hover:bg-[#D97706] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span className="material-symbols-outlined text-base">send</span>
                  <span>Submit Journey Enquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
