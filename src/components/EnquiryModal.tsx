import React, { useState, useEffect } from 'react';
import { ALL_PACKAGES } from '../data/packages';
import { getWhatsAppUrl } from '../utils/whatsapp';
import confetti from 'canvas-confetti';
import { X, User, Phone, MapPin, MessageSquare, Send, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  initialPackageTitle?: string;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, initialPackageTitle = '', onClose }) => {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  
  const getRelevantPackages = () => {
    if (initialPackageTitle) {
      const directMatch = ALL_PACKAGES.find(
        p => p.title.toLowerCase() === initialPackageTitle.toLowerCase() || p.id === initialPackageTitle
      );
      if (directMatch) {
        return [directMatch];
      }
      if (initialPackageTitle.toLowerCase().includes('shirdi')) {
        return ALL_PACKAGES.filter(p => p.id.includes('shirdi'));
      }
      if (initialPackageTitle.toLowerCase().includes('pilgrimage')) {
        return ALL_PACKAGES.filter(p => p.category === 'pilgrimage');
      }
      if (initialPackageTitle.toLowerCase().includes('domestic')) {
        return ALL_PACKAGES.filter(p => p.category === 'domestic');
      }
      if (initialPackageTitle.toLowerCase().includes('international')) {
        return ALL_PACKAGES.filter(p => p.category === 'international');
      }
    }

    if (currentPath.includes('shirdi')) {
      return ALL_PACKAGES.filter(p => p.id.includes('shirdi'));
    }
    if (currentPath.includes('pilgrimage')) {
      return ALL_PACKAGES.filter(p => p.category === 'pilgrimage');
    }
    if (currentPath.includes('domestic')) {
      return ALL_PACKAGES.filter(p => p.category === 'domestic');
    }
    if (currentPath.includes('international')) {
      return ALL_PACKAGES.filter(p => p.category === 'international');
    }

    return ALL_PACKAGES;
  };

  const packagesToShow = getRelevantPackages();

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    selectedPackage: initialPackageTitle || (packagesToShow.length > 0 ? packagesToShow[0].title : ''),
    message: '',
  });

  useEffect(() => {
    const list = getRelevantPackages();
    if (initialPackageTitle) {
      setFormData(prev => ({ ...prev, selectedPackage: initialPackageTitle }));
    } else if (list.length > 0) {
      setFormData(prev => ({ ...prev, selectedPackage: list[0].title }));
    }
  }, [initialPackageTitle, isOpen]);

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2563EB', '#F59E0B', '#114088'],
    });
  };

  const handleWhatsAppDirect = () => {
    const selectedPkg = ALL_PACKAGES.find(p => p.title === formData.selectedPackage);
    const url = getWhatsAppUrl({
      title: formData.selectedPackage,
      duration: selectedPkg?.duration,
      destination: selectedPkg?.destination,
      pathname: currentPath
    });
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md animate-fadeIn overflow-y-auto">
      
      {/* Dual Pane Modal Card */}
      <div className="bg-white text-gray-800 rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl relative my-auto border border-gray-100 flex flex-col md:flex-row max-h-[94vh]">
        
        {/* Left Pane Image (Visible on md+) */}
        <div className="hidden md:block w-5/12 relative bg-cover bg-center shrink-0 min-h-[480px]" style={{ backgroundImage: `url('/Shridi-banner-image.png')` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#114088]/90 via-[#114088]/40 to-transparent flex flex-col justify-end p-8 text-white">
            <span className="bg-[#F59E0B] text-[#114088] px-3 py-1 rounded-full text-xs font-bold self-start mb-3 shadow-md">
              ★ 4.9/5 Rated Agency
            </span>
            <h3 className="font-serif text-2xl font-bold leading-snug">
              Begin Your Divine Journey With Us
            </h3>
            <p className="text-xs text-blue-100 font-medium mt-2 leading-relaxed opacity-90">
              Trusted by 10,000+ happy travelers from Bangalore for pilgrimage, domestic & international packages.
            </p>
          </div>
        </div>

        {/* Right Pane Form */}
        <div className="w-full md:w-7/12 p-6 sm:p-8 flex flex-col relative overflow-y-auto">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 flex items-center justify-center transition-all cursor-pointer z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Form Header */}
          <div className="mb-6 pr-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#114088] font-sans tracking-tight">
              Get a free quote
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
              No spam. Just a quick call from a real travel expert.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 my-auto space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#114088]">Enquiry Submitted!</h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-[#114088]">{formData.fullName || 'Traveler'}</span>. Our expert travel advisor will contact you within 15 minutes.
              </p>
              <button
                onClick={handleWhatsAppDirect}
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer"
              >
                <span>Instant Connect On WhatsApp</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs my-auto">
              
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-600 mb-1.5">
                    YOUR NAME *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Priya Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 rounded-2xl pl-10 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 font-medium outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-600 mb-1.5">
                    PHONE *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 rounded-2xl pl-10 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 font-medium outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Destination */}
              <div>
                <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-600 mb-1.5">
                  INTERESTED DESTINATION <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={formData.selectedPackage}
                    onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 rounded-2xl pl-10 pr-8 py-3 text-sm text-gray-800 font-medium outline-none transition-all appearance-none cursor-pointer"
                  >
                    {packagesToShow.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▼</div>
                </div>
              </div>

              {/* Row 3: Message */}
              <div>
                <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-600 mb-1.5">
                  MESSAGE <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <textarea
                    rows={3}
                    placeholder="Travel dates, group size, budget..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 rounded-2xl pl-10 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 font-medium outline-none transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 text-sm font-bold text-white bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#F59E0B] hover:from-[#1D4ED8] hover:to-[#EA580C] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform active:scale-95 mt-2"
              >
                <Send className="w-4 h-4 text-white" />
                <span>Submit Enquiry</span>
              </button>

              {/* Trust Badges */}
              <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center justify-around gap-2 text-[10px] text-gray-500 font-semibold">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                  <span>No hidden charges</span>
                </div>
                <div className="flex items-center gap-1">
                  <HeartHandshake className="w-3.5 h-3.5 text-amber-500" />
                  <span>Free trip planning</span>
                </div>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
