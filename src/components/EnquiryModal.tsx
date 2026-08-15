import React, { useState } from 'react';
import { siteConfig } from '../data/config';
import { ALL_PACKAGES } from '../data/packages';
import confetti from 'canvas-confetti';

interface EnquiryModalProps {
  isOpen: boolean;
  initialPackageTitle?: string;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, initialPackageTitle = '', onClose }) => {
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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#F59E0B', '#114088'],
    });
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Sai Samarth Tours,\nMy Name: ${formData.fullName || 'Traveler'}\nPackage Interest: ${formData.selectedPackage}\nDate: ${formData.preferredTravelDate || 'TBD'}\nTravelers: ${formData.numberOfTravellers}\nMessage: ${formData.message || 'I would like to enquire about this package.'}`
    );
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#114088]/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-[#ffffff] text-[#114088] border border-[#EAE2D6] rounded-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl relative p-6 sm:p-10 my-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#1C2B39] hover:text-[#F59E0B] cursor-pointer"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-full bg-[#F59E0B] text-[#ffffff] flex items-center justify-center mx-auto mb-3 shadow-md">
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              temple_hindu
            </span>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#F59E0B]">
            {siteConfig.name}
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#114088] mt-1">Plan Your Journey</h2>
        </div>

        {submitted ? (
          <div className="text-center py-12 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-600 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-emerald-600 text-3xl">check_circle</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#114088]">Thank You!</h3>
            <p className="text-sm text-[#1C2B39]">Thank you. Our travel team will contact you shortly.</p>
            <button
              onClick={handleWhatsAppDirect}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase px-6 py-3 rounded-lg"
            >
              Connect On WhatsApp
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block uppercase tracking-wider text-[#114088] mb-1 font-bold">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#FFFFFF] border border-[#EAE2D6] focus:border-[#F59E0B] text-sm text-[#114088] p-3 rounded-lg outline-none"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider text-[#114088] mb-1 font-bold">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="Mobile Number"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="w-full bg-[#FFFFFF] border border-[#EAE2D6] focus:border-[#F59E0B] text-sm text-[#114088] p-3 rounded-lg outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block uppercase tracking-wider text-[#114088] mb-1 font-bold">WhatsApp Number</label>
                <input
                  type="tel"
                  placeholder="WhatsApp Number"
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                  className="w-full bg-[#FFFFFF] border border-[#EAE2D6] focus:border-[#F59E0B] text-sm text-[#114088] p-3 rounded-lg outline-none"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider text-[#114088] mb-1 font-bold">Email Address</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#FFFFFF] border border-[#EAE2D6] focus:border-[#F59E0B] text-sm text-[#114088] p-3 rounded-lg outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block uppercase tracking-wider text-[#114088] mb-1 font-bold">No. of Travellers</label>
                <select
                  value={formData.numberOfTravellers}
                  onChange={(e) => setFormData({ ...formData, numberOfTravellers: e.target.value })}
                  className="w-full bg-[#FFFFFF] border border-[#EAE2D6] focus:border-[#F59E0B] text-sm text-[#114088] p-3 rounded-lg outline-none"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons (Min Pax)</option>
                  <option value="3-5">3 - 5 Persons</option>
                  <option value="6+">6+ Family / Group</option>
                </select>
              </div>

              <div>
                <label className="block uppercase tracking-wider text-[#114088] mb-1 font-bold">Preferred Date</label>
                <input
                  type="date"
                  value={formData.preferredTravelDate}
                  onChange={(e) => setFormData({ ...formData, preferredTravelDate: e.target.value })}
                  className="w-full bg-[#FFFFFF] border border-[#EAE2D6] focus:border-[#F59E0B] text-sm text-[#114088] p-3 rounded-lg outline-none"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider text-[#114088] mb-1 font-bold">Select Package</label>
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
              <label className="block uppercase tracking-wider text-[#114088] mb-1 font-bold">Message &amp; Notes</label>
              <textarea
                rows={3}
                placeholder="Senior citizen assistance, room preferences, etc."
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
  );
};
