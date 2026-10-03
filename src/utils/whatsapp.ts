import { siteConfig } from '../data/config';

export interface WhatsAppContext {
  title?: string;
  duration?: string;
  destination?: string;
  pathname?: string;
}

export function getWhatsAppUrl(context?: WhatsAppContext): string {
  const number = siteConfig.whatsappNumber || '919187711649';

  if (context?.title) {
    const dur = context.duration ? ` (${context.duration})` : '';
    const dest = context.destination ? `\n📍 Destination: ${context.destination}` : '';
    const msg = `Namaste Sai Samarth Tours 🙏\n\nI am interested in booking the *${context.title}*${dur}.${dest}\n✈️ Departure: Bangalore\n\nPlease share the available departure dates, full day-wise itinerary brochure, and the best quote.\n\nThank you!`;
    return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
  }

  const path = context?.pathname || (typeof window !== 'undefined' ? window.location.pathname : '');

  if (path.includes('shirdi')) {
    const msg = `Namaste Sai Samarth Tours 🙏\n\nI am looking for *Shirdi Tour Packages* from Bangalore (with Direct Flights & VIP Darshan).\n\nPlease share available departure dates, package options, and booking details.\n\nThank you!`;
    return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
  }

  if (path.includes('pilgrimage')) {
    const msg = `Namaste Sai Samarth Tours 🙏\n\nI am interested in *Pilgrimage Tour Packages* from Bangalore (Kashi, Ayodhya, Jyothirlingas, Puri Jagannath, etc.).\n\nPlease share available package itineraries and best price quotes.\n\nThank you!`;
    return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
  }

  if (path.includes('domestic')) {
    const msg = `Namaste Sai Samarth Tours 🙏\n\nI am looking for *Domestic Holiday Tour Packages* from Bangalore (Kashmir, Kerala, Andaman, Leh Ladakh, Himachal, etc.).\n\nPlease share details and upcoming tour dates.\n\nThank you!`;
    return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
  }

  if (path.includes('international')) {
    const msg = `Namaste Sai Samarth Tours 🙏\n\nI am planning a trip and looking for *International Tour Packages* from Bangalore (Dubai, Singapore, Thailand, Maldives, Bhutan, etc.).\n\nPlease provide available packages, inclusions, and best quotes.\n\nThank you!`;
    return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
  }

  const msg = `Namaste Sai Samarth Tours 🙏\n\nI would like to enquire about your customized tour packages from Bangalore.\n\nPlease connect me with a travel expert to discuss tour options and best offers.\n\nThank you!`;
  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
}

export interface EnquiryFormData {
  fullName: string;
  phoneNumber: string;
  selectedPackage?: string;
  message?: string;
}

export function getEnquiryWhatsAppUrl(data: EnquiryFormData): string {
  const number = siteConfig.whatsappNumber || '919187711649';
  const name = data.fullName?.trim() || 'Traveler';
  const phone = data.phoneNumber?.trim() || 'Not specified';
  const pkg = data.selectedPackage ? `\n📍 *Interested Package:* ${data.selectedPackage}` : '';
  const note = data.message?.trim() ? `\n💬 *Message:* ${data.message.trim()}` : '';

  const msg = `Namaste Sai Samarth Tours 🙏\n\n*New Tour Enquiry from Website:*\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}${pkg}${note}\n✈️ *Departure:* Bangalore\n\nPlease share the available dates, day-wise itinerary, and best pricing. Thank you!`;

  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
}

export interface ContactFormData {
  firstName: string;
  lastName?: string;
  email?: string;
  phone: string;
  subject?: string;
  message?: string;
}

export function getContactMessageWhatsAppUrl(data: ContactFormData): string {
  const number = siteConfig.whatsappNumber || '919187711649';
  const fullName = `${data.firstName || ''} ${data.lastName || ''}`.trim() || 'Traveler';
  const phone = data.phone?.trim() || 'Not specified';
  const email = data.email?.trim() ? `\n✉️ *Email:* ${data.email.trim()}` : '';

  const subjectMap: Record<string, string> = {
    pilgrimage: 'Pilgrimage Tour Enquiry',
    shirdi: 'Shirdi Package Enquiry',
    domestic: 'Domestic Holiday Enquiry',
    international: 'International Trip Enquiry',
    custom: 'Custom Tour Request',
    other: 'General Inquiry'
  };
  const subject = data.subject ? (subjectMap[data.subject] || data.subject) : 'General Inquiry';
  const note = data.message?.trim() ? `\n💬 *Message:* ${data.message.trim()}` : '';

  const msg = `Namaste Sai Samarth Tours 🙏\n\n*New Message from Contact Form:*\n👤 *Name:* ${fullName}\n📞 *Phone:* ${phone}${email}\n📌 *Subject:* ${subject}${note}\n\nPlease get in touch with me. Thank you!`;

  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
}
