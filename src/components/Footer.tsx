import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MessageCircle, 
  Compass, Building2, Map, Plane, ChevronRight, ArrowUp 
} from 'lucide-react';
import { siteConfig } from '../data/config';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#0C1F41] via-[#091833] to-[#061024] text-gray-300 font-sans mt-auto border-t-2 border-[#F59E0B]/30 relative overflow-hidden">
      <div className="h-1.5 w-full bg-gradient-to-r from-[#F59E0B] via-[#F59E0B] to-[#EA580C]"></div>
      
      {/* 1. Top Contact & Social Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center">
            <a href={`tel:${siteConfig.phoneTentative}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-[#F59E0B]" />
              <span className="font-semibold">+91 {siteConfig.phoneTentative}</span>
            </a>
            <a href={`mailto:${siteConfig.emailTentative}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-[#F59E0B]" />
              <span className="font-semibold">{siteConfig.emailTentative}</span>
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            {[
              { label: 'FB', href: '#' },
              { label: 'IG', href: '#' },
              { label: 'IN', href: '#' },
              { label: 'YT', href: '#' },
              { Icon: MessageCircle, href: '#' } // WhatsApp representation
            ].map((social, idx) => (
              <a 
                key={idx} 
                href={social.href} 
                className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#F59E0B] hover:border-[#F59E0B] hover:text-white transition-all text-gray-400 font-bold text-xs"
              >
                {social.Icon ? <social.Icon className="w-4 h-4" /> : social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Category Navigation Bar */}
      <div className="border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 py-5 text-sm font-bold">
            <a href="#" className="flex items-center gap-2 text-[#F59E0B]">
              <Compass className="w-4 h-4" />
              Explore Sai Shishir
            </a>
            <Link to="/pilgrimage-packages" className="flex items-center gap-2 hover:text-white transition-colors">
              <Building2 className="w-4 h-4 text-gray-400" />
              Pilgrimage Tour Packages
            </Link>
            <Link to="/domestic-packages" className="flex items-center gap-2 hover:text-white transition-colors">
              <Map className="w-4 h-4 text-gray-400" />
              Domestic Tour Packages
            </Link>
            <Link to="/international-packages" className="flex items-center gap-2 hover:text-white transition-colors">
              <Plane className="w-4 h-4 text-gray-400" />
              International Tour Packages
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Logo & Info */}
          <div className="lg:col-span-5 pr-4">
            <img 
              src="/Sai samarth tours logo.jpeg" 
              alt={siteConfig.name} 
              className="h-16 w-auto object-contain bg-white rounded p-1 mb-6" 
            />
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm font-medium">
              Bangalore's trusted tour operator since 2013, Sai Samarth Tours provides domestic and international tour packages from Bangalore, including group tours, pilgrimages, honeymoons, family trips, and customized holiday packages.
            </p>
          </div>

          {/* Column 2: Discover Us */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-xs font-bold text-[#F59E0B] tracking-wider mb-6 uppercase">Discover Us</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Blog', href: '#' },
                { label: 'Contact Us', href: '#contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="flex items-center gap-2 hover:text-white transition-colors group">
                    <ChevronRight className="w-3 h-3 text-gray-500 group-hover:text-[#F59E0B]" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-[#F59E0B] tracking-wider mb-6 uppercase">Support</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: 'FAQ', href: '#' },
                { label: 'Cancellation Policy', href: '#' },
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Use', href: '#' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="flex items-center gap-2 hover:text-white transition-colors group">
                    <ChevronRight className="w-3 h-3 text-gray-500 group-hover:text-[#F59E0B]" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* 4. Bottom Bar */}
      <div className="bg-[#08152B] py-6 text-xs text-gray-400 font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cancellation</a>
              <a href="#" className="hover:text-white transition-colors">Site Map</a>
              
              <button 
                onClick={scrollToTop}
                className="flex items-center gap-1 text-white hover:text-[#F59E0B] transition-colors ml-2"
              >
                <ArrowUp className="w-3 h-3" />
                Top
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
}
