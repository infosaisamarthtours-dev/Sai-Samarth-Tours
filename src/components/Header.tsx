import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/config';
import { Phone, Menu, X, Search, ChevronDown, UserCheck } from 'lucide-react';

interface HeaderProps {
  onOpenEnquiry: (packageTitle?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full flex flex-col z-50 sticky top-0 shadow-md">
      
      {/* Main Header Tier (Image 2 Layout: Logo, Tour Guide Badge, Search, Social Icons, CTA) */}
      <div className="bg-white w-full px-4 sm:px-8 py-2.5 flex justify-between items-center border-b border-gray-100 gap-4">
        {/* Left: Logo */}
        <div className="flex justify-start items-center">
          <Link to="/" className="flex-shrink-0 block">
            <img 
              src="/Sai samarth tours logo.jpeg" 
              alt={siteConfig.name} 
              className="h-12 sm:h-14 w-auto object-contain hover:scale-105 transition-transform" 
            />
          </Link>
        </div>

        {/* Middle-Left: Tour Guide Badge in Header Row (Image 2 Placement) */}
        <div className="hidden lg:flex items-center gap-2 bg-[#114088]/10 text-[#114088] px-4 py-2 rounded-full border border-[#114088]/25 shadow-sm font-bold text-xs whitespace-nowrap">
          <UserCheck className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
          <span>Tour Guide & Manager Available for All Packages</span>
        </div>

        {/* Middle-Right: Search Bar with Animated Blue & Orange Hover Glow */}
        <div className="hidden md:flex flex-1 max-w-sm justify-center relative group">
          <div className="w-full relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none z-10">
              <Search className="h-4 w-4 text-gray-400 group-hover:text-[#F59E0B] transition-colors duration-300" />
            </div>
            <input 
              type="text" 
              placeholder="Search Jyotirlinga Tours..." 
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none text-sm transition-all shadow-sm search-glow-animated"
            />
          </div>
        </div>

        {/* Right: Social Media Icons + Book Now CTA */}
        <div className="flex justify-end items-center gap-3 sm:gap-4">
          <div className="hidden xl:flex items-center gap-2 mr-1">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Facebook" 
              className="w-8 h-8 rounded-full bg-blue-50 text-[#114088] hover:bg-[#2563EB] hover:text-white flex items-center justify-center transition-all shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Instagram" 
              className="w-8 h-8 rounded-full bg-pink-50 text-[#E1306C] hover:bg-[#E1306C] hover:text-white flex items-center justify-center transition-all shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a 
              href="https://wa.me/919483488258" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="WhatsApp" 
              className="w-8 h-8 rounded-full bg-green-50 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </a>
          </div>

          <button
            onClick={() => onOpenEnquiry()}
            className="bg-[#2563EB] text-white px-3.5 py-1.5 sm:px-7 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm hover:bg-[#1D4ED8] hover:shadow-lg transform hover:-translate-y-0.5 transition-all shadow-md active:scale-95 whitespace-nowrap"
          >
            Book Now
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#114088] p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Navigation Tier (Image 1 Layout: Links + Rich Blue Tour Guide Badge) */}
      <nav className="bg-[#114088] w-full hidden md:block border-t border-blue-900/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-center items-center h-12">
          {/* Main Navigation (Desktop) */}
          <ul className="flex items-center h-full gap-8">
            <li className="flex items-center h-full">
              <Link to="/" className="text-white text-sm font-semibold hover:text-[#F59E0B] transition-colors h-full flex items-center">
                Home
              </Link>
            </li>
            
            {/* Shirdi Dropdown */}
            <li className="relative group flex items-center h-full">
              <Link to="/shirdi-packages" className="text-white text-sm font-semibold hover:text-[#F59E0B] transition-colors flex items-center h-full">
                Shirdi <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 top-full w-72 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-b-lg overflow-hidden">
                <div className="flex flex-col">
                  <Link to="/package/shirdi-3-jyothirlinga" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Shirdi with 3 Jyothirlinga</Link>
                  <Link to="/package/kholapur-pandarpur" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Kholapur and Pandrapur</Link>
                  <Link to="/package/shirdi-regular" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Regular Shirdi</Link>
                  <Link to="/package/puri-jagannath" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Puri Jagannath</Link>
                  <Link to="/package/kamakhya" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Kamakya</Link>
                </div>
              </div>
            </li>

            {/* Pilgrimage Dropdown */}
            <li className="relative group flex items-center h-full">
              <Link to="/pilgrimage-packages" className="text-white text-sm font-semibold hover:text-[#F59E0B] transition-colors flex items-center h-full">
                Pilgrimage <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 top-full w-80 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-b-lg overflow-hidden">
                <div className="flex flex-col max-h-[250px] overflow-y-auto">
                  <Link to="/package/kashi-ayodhya-prayagraj" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Kashi With Ayodhya & Prayagraj</Link>
                  <Link to="/package/kashi-ayodhya" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Kashi With Ayodhya</Link>
                  <Link to="/package/indore-ujjain" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Indore and Ujjain</Link>
                  <Link to="/package/vaishnodevi" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Vaishnodevi</Link>
                  <Link to="/package/baidyanath" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Baidyanath</Link>
                  <Link to="/package/rameshwaram" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Rameshwaram</Link>
                  <Link to="/package/gujarat" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Gujarat</Link>
                </div>
              </div>
            </li>

            {/* Domestic Dropdown */}
            <li className="relative group flex items-center h-full">
              <Link to="/domestic-packages" className="text-white text-sm font-semibold hover:text-[#F59E0B] transition-colors flex items-center h-full">
                Domestic <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 top-full w-[600px] bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-b-lg p-6">
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">North India</h3>
                    <ul className="space-y-2">
                      <li><Link to="/package/kashmir" className="text-sm text-gray-700 hover:text-[#2563EB] transition-colors flex items-center group/link"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/link:bg-[#F59E0B] mr-2 transition-colors"></span>Kashmir</Link></li>
                      <li><Link to="/package/leh-ladakh" className="text-sm text-gray-700 hover:text-[#2563EB] transition-colors flex items-center group/link"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/link:bg-[#F59E0B] mr-2 transition-colors"></span>Leh Ladakh</Link></li>
                      <li><Link to="/package/golden-triangle" className="text-sm text-gray-700 hover:text-[#2563EB] transition-colors flex items-center group/link"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/link:bg-[#F59E0B] mr-2 transition-colors"></span>Golden Triangle</Link></li>
                      <li><Link to="/package/himachal" className="text-sm text-gray-700 hover:text-[#2563EB] transition-colors flex items-center group/link"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/link:bg-[#F59E0B] mr-2 transition-colors"></span>Himachal Pradesh</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">South & West India</h3>
                    <ul className="space-y-2">
                      <li><Link to="/package/kerala" className="text-sm text-gray-700 hover:text-[#2563EB] transition-colors flex items-center group/link"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/link:bg-[#F59E0B] mr-2 transition-colors"></span>Kerala</Link></li>
                      <li><Link to="/package/andaman" className="text-sm text-gray-700 hover:text-[#2563EB] transition-colors flex items-center group/link"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/link:bg-[#F59E0B] mr-2 transition-colors"></span>Andaman</Link></li>
                      <li><Link to="/package/goa" className="text-sm text-gray-700 hover:text-[#2563EB] transition-colors flex items-center group/link"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/link:bg-[#F59E0B] mr-2 transition-colors"></span>Goa</Link></li>
                      <li><Link to="/package/rajasthan" className="text-sm text-gray-700 hover:text-[#2563EB] transition-colors flex items-center group/link"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/link:bg-[#F59E0B] mr-2 transition-colors"></span>Rajasthan</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* International Dropdown */}
            <li className="relative group flex items-center h-full">
              <Link to="/international-packages" className="text-white text-sm font-semibold hover:text-[#F59E0B] transition-colors flex items-center h-full">
                International <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 top-full w-48 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-b-lg overflow-hidden py-2">
                <Link to="/package/bhutan" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 transition-colors">Bhutan</Link>
                <Link to="/package/nepal" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 transition-colors">Nepal</Link>
                <Link to="/package/malaysia" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 transition-colors">Malaysia</Link>
                <Link to="/package/maldives" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 transition-colors">Maldives</Link>
                <Link to="/package/europe" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 transition-colors flex justify-between items-center">Europe <span className="text-[9px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-bold">SOON</span></Link>
                <Link to="/package/dubai" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 transition-colors flex justify-between items-center">Dubai <span className="text-[9px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-bold">SOON</span></Link>
                <Link to="/package/singapore" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 transition-colors">Singapore</Link>
                <Link to="/package/thailand" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 transition-colors">Thailand</Link>
              </div>
            </li>
            
            <li className="flex items-center h-full">
              <Link to="/about" className="text-white text-sm font-semibold hover:text-[#F59E0B] transition-colors h-full flex items-center">
                About Us
              </Link>
            </li>
            <li className="flex items-center h-full">
              <Link to="/contact" className="text-white text-sm font-semibold hover:text-[#F59E0B] transition-colors h-full flex items-center">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl z-40 flex flex-col p-6 animate-fadeIn border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          {/* Mobile Tour Guide & Human Icon Badge */}
          <div className="flex items-center gap-2.5 bg-[#114088] text-white p-3 rounded-xl border border-blue-800 mb-4 shadow-sm">
            <UserCheck className="w-5 h-5 text-[#F59E0B] flex-shrink-0" />
            <span className="text-xs font-bold leading-tight text-[#F59E0B]">Tour Guide & Manager Available for All Packages</span>
          </div>

          {/* Mobile Search */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search tours..." 
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#114088] text-sm"
            />
          </div>

          <nav className="flex flex-col space-y-2">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-[#114088] font-bold text-lg py-3 border-b border-gray-100 flex justify-between">Home</Link>
            <Link to="/shirdi-packages" onClick={() => setMobileMenuOpen(false)} className="text-[#114088] font-bold text-lg py-3 border-b border-gray-100 flex justify-between">Shirdi <ChevronDown className="w-5 h-5" /></Link>
            <Link to="/pilgrimage-packages" onClick={() => setMobileMenuOpen(false)} className="text-[#114088] font-bold text-lg py-3 border-b border-gray-100 flex justify-between">Pilgrimage <ChevronDown className="w-5 h-5" /></Link>
            <Link to="/domestic-packages" onClick={() => setMobileMenuOpen(false)} className="text-[#114088] font-bold text-lg py-3 border-b border-gray-100 flex justify-between">Domestic <ChevronDown className="w-5 h-5" /></Link>
            <Link to="/international-packages" onClick={() => setMobileMenuOpen(false)} className="text-[#114088] font-bold text-lg py-3 border-b border-gray-100 flex justify-between">International <ChevronDown className="w-5 h-5" /></Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-[#114088] font-bold text-lg py-3 border-b border-gray-100 flex justify-between">About Us</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-[#114088] font-bold text-lg py-3 border-b border-gray-100 flex justify-between">Contact</Link>
          </nav>
          
          <div className="mt-8 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3.5 text-center text-sm font-bold uppercase tracking-wider text-white bg-[#2563EB] rounded-lg shadow-md"
            >
              Get Free Quote
            </button>
            <a href={`tel:+91${siteConfig.phoneTentative}`} className="flex justify-center items-center text-[#114088] font-bold text-lg pt-4 border-t border-gray-100">
              <Phone className="w-5 h-5 mr-2 text-[#2563EB]" />
              +91 {siteConfig.phoneTentative}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
