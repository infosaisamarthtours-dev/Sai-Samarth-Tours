import React, { useState } from 'react';
import { MessageCircle, Phone, Send } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export function QuoteSection() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    destination: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you! Our experts will contact you soon.');
    setFormData({ name: '', mobile: '', destination: '' });
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80" 
          alt="Travel Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a1930]/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#114088]/95 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Copy & CTA Buttons */}
          <div className="w-full lg:w-1/2 text-white">
            <span className="text-[#F59E0B] font-bold tracking-wider text-sm uppercase mb-4 block">
              Get A Free Quote
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif-brand mb-6 leading-tight">
              Plan Your Trip <br />
              <span className="text-[#F59E0B]">With Our Experts</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-lg">
              Sai Samarth Tours is a trusted tour operator, offering tailored domestic and international packages with flights, hotels, meals, sightseeing, and complete itinerary planning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={getWhatsAppUrl()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 shadow-[0_4px_15px_rgba(37,211,102,0.3)]"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              
              <a 
                href="tel:+919187711649"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold backdrop-blur-md transition-all hover:-translate-y-1"
              >
                <Phone className="w-5 h-5" />
                +91 91877 11649
              </a>
            </div>
          </div>

          {/* Right Side: Floating Form Card */}
          <div className="w-full lg:w-1/2 flex justify-end">
            <div className="w-full max-w-md bg-white rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              {/* Decorative top border */}
              <div className="absolute top-0 left-0 w-full h-2 bg-[#F59E0B]"></div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#114088] font-serif-brand mb-2">
                  Get a Callback
                </h3>
                <p className="text-gray-500 text-sm">
                  Fill in your details and we'll plan your perfect trip.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input 
                    type="text" 
                    required
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 focus:border-[#F59E0B] transition-colors"
                  />
                </div>
                
                <div>
                  <input 
                    type="tel" 
                    required
                    placeholder="Mobile Number *"
                    value={formData.mobile}
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 focus:border-[#F59E0B] transition-colors"
                  />
                </div>

                <div>
                  <select 
                    value={formData.destination}
                    onChange={(e) => setFormData({...formData, destination: e.target.value})}
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 focus:border-[#F59E0B] transition-colors text-gray-600"
                  >
                    <option value="" disabled>Where do you want to go? (Optional)</option>
                    <optgroup label="Domestic">
                      <option value="Shirdi">Shirdi</option>
                      <option value="Kashmir">Kashmir</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Goa">Goa</option>
                    </optgroup>
                    <optgroup label="International">
                      <option value="Dubai">Dubai</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Bali">Bali</option>
                      <option value="Europe">Europe</option>
                    </optgroup>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-6 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-blue-500/30 mt-2"
                >
                  <Send className="w-5 h-5" />
                  Submit Enquiry
                </button>

                <p className="text-center text-[11px] text-gray-400 mt-4">
                  No spam. We respect your privacy.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
