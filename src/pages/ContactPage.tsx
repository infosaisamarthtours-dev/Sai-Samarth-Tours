import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaqSection } from '../components/FaqSection';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { localBusinessSchema } from '../utils/schema';
import { getContactMessageWhatsAppUrl } from '../utils/whatsapp';
import { trackContact } from '../utils/pixel';
import confetti from 'canvas-confetti';

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    trackContact({
      content_name: formData.subject || 'Contact Page Message'
    });
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2563EB', '#F59E0B', '#114088'],
    });

    const waUrl = getContactMessageWhatsAppUrl(formData);
    try {
      window.open(waUrl, '_blank');
    } catch (err) {
      console.error('Failed to open WhatsApp window', err);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="flex-grow bg-[#FBF9F5] font-sans pb-24">
      <SEOHead
        title="Contact Sai Samarth Tours | Bangalore Tour Agency Office & Helpline"
        description="Get in touch with Sai Samarth Tours. Visit our Yelahanka New Town office in Bengaluru or call +91 91877 11649 for instant pilgrimage and holiday tour enquiries."
        canonical="https://saisamarthtours.com/contact"
        ogImage="/sai-samarth-tours-logo.webp"
        jsonLd={localBusinessSchema}
      />
      
      {/* Hero Banner */}
      <div className="bg-[#0B1E3F] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs items={[{ name: 'Contact Us' }]} className="text-gray-300 justify-center" />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold font-serif-brand mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Connect with our dedicated travel experts. Visit our Yelahanka travel agency office or call +91 91877 11649 for handcrafted tour packages from Bangalore.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* Left Column - Contact Info */}
          <div className="bg-[#114088] text-white p-8 md:p-12 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F59E0B]/10 rounded-full translate-y-1/3 -translate-x-1/4"></div>

            <div className="relative z-10">
              <h2 className="text-2xl font-serif-brand font-bold mb-2">Contact Information</h2>
              <p className="text-blue-100 mb-10 text-sm">Fill up the form and our team will get back to you within 24 hours.</p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <Phone className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <a href="tel:+919187711649" className="text-blue-100 text-sm hover:text-white transition-colors block">+91 91877 11649</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <Mail className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <a href="mailto:info.saisamarthtours@gmail.com" className="text-blue-100 text-sm hover:text-white transition-colors block">info.saisamarthtours@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <MapPin className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Office Location</h4>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Sai Samarth Tours,<br />
                      NO : 2238, Second Floor, 16th ‘B’ Cross,<br />
                      Yelahanka New Town, Bengaluru – 560064,<br />
                      Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <Clock className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Working Hours</h4>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Mon - Sat: 9:00 AM to 8:00 PM<br />
                      Sunday: 10:00 AM to 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links could go here at the bottom */}
          </div>

          {/* Right Column - Contact Form */}
          <div className="p-8 md:p-12 lg:w-3/5 bg-white">
            <h2 className="text-2xl font-bold text-[#1C2B39] mb-2">Send us a Message</h2>
            <p className="text-sm text-gray-500 mb-8">
              Fill in your inquiry details below. We'll format and connect directly with you on WhatsApp!
            </p>
            
            {submitted ? (
              <div className="py-8 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#114088] mb-2">
                    Enquiry Formatted for WhatsApp!
                  </h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-[#114088]">{formData.firstName} {formData.lastName}</span>! We have prepared your tour query. If WhatsApp didn't open automatically, click the button below to send it directly.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={getContactMessageWhatsAppUrl(formData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Open WhatsApp Chat
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>

                <p className="text-xs text-gray-400 pt-4 border-t border-gray-100">
                  Prefer a phone call? Reach our travel desk directly at <a href="tel:+919187711649" className="font-bold text-[#2563EB] hover:underline">+91 91877 11649</a>.
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-bold text-gray-700">First Name *</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all outline-none bg-gray-50/50 focus:bg-white"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-bold text-gray-700">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all outline-none bg-gray-50/50 focus:bg-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all outline-none bg-gray-50/50 focus:bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-gray-700">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all outline-none bg-gray-50/50 focus:bg-white"
                      placeholder="+91 90000 00000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-gray-700">Subject</label>
                  <select 
                    id="subject" 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all outline-none bg-gray-50/50 focus:bg-white text-gray-700 appearance-none"
                  >
                    <option value="">Select a topic...</option>
                    <option value="pilgrimage">Pilgrimage Tour Enquiry</option>
                    <option value="shirdi">Shirdi Package</option>
                    <option value="domestic">Domestic Holiday</option>
                    <option value="international">International Trip</option>
                    <option value="custom">Custom Tour Request</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-gray-700">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all outline-none bg-gray-50/50 focus:bg-white resize-none"
                    placeholder="Tell us about your travel plans..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-blue-500/30 cursor-pointer"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Contact & Support FAQs */}
      <div className="mt-16">
        <FaqSection 
          title="Frequently Asked Questions - Contact & Support"
          subtitle="Quick answers about contacting our travel advisors, booking confirmations, and office appointments."
          items={[
            {
              question: "How fast will I receive a callback after submitting an enquiry?",
              answer: "Our dedicated tour counselors will contact you within 15 to 30 minutes during business hours (9:00 AM - 8:00 PM IST) to share complete package quotes and date availability."
            },
            {
              question: "Can I visit your office in Bangalore for in-person tour consultation?",
              answer: "Yes, you are always welcome! As an established Yelahanka travel agency and registered tour operator in Bangalore, you can visit our office at Yelahanka New Town or book a prior consultation for group yatras and customized holidays."
            },
            {
              question: "What payment methods do you accept for tour bookings?",
              answer: "We accept all secure payment methods including UPI (Google Pay, PhonePe, Paytm), Net Banking (NEFT/RTGS/IMPS), Credit/Debit cards, and direct bank transfers."
            },
            {
              question: "Do you provide emergency travel support during an active tour?",
              answer: "Yes! Every guest is provided with a 24/7 direct helpline number and the personal contact number of the assigned Tour Manager for real-time support."
            },
            {
              question: "How do I receive my flight tickets and hotel confirmation vouchers?",
              answer: "All airline e-tickets, hotel booking confirmation vouchers, driver contact details, and tour itinerary guidelines are sent directly to your registered WhatsApp and email 48-72 hours before departure."
            }
          ]}
        />
      </div>

    </div>
  );
}
