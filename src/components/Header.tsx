import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/config';
import { Phone, Menu, X, Search, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onOpenEnquiry: (packageTitle?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // You can easily replace these with actual image paths once you upload them to the public folder.
  const ministryLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Ministry_of_Tourism_India.svg/200px-Ministry_of_Tourism_India.svg.png";
  const karnatakaLogo = "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Karnataka_Tourism_Logo.svg/200px-Karnataka_Tourism_Logo.svg.png";

  return (
    <header className="w-full flex flex-col z-50 sticky top-0 shadow-md">
      
      {/* Top Tier: Logo, Search, Certifications, CTA */}
      <div className="bg-white w-full px-4 sm:px-8 py-3 flex justify-between items-center border-b border-gray-100">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex-shrink-0 block">
            <img 
              src="/Sai samarth tours logo.jpeg" 
              alt={siteConfig.name} 
              className="h-12 sm:h-14 w-auto object-contain hover:scale-105 transition-transform" 
            />
          </Link>
        </div>

        {/* Middle: Search Bar (Hidden on mobile) */}
        <div className="hidden md:flex flex-1 justify-center relative">
          <div className="w-full max-w-md relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search Jyotirlinga Tours..." 
              className="w-full pl-11 pr-4 py-2.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#114088] focus:border-transparent text-sm transition-all"
            />
          </div>
        </div>

        {/* Right: CTA */}
        <div className="flex-1 flex justify-end items-center gap-4 sm:gap-6">
          <button
            onClick={() => onOpenEnquiry()}
            className="bg-[#2563EB] text-white px-5 sm:px-7 py-2.5 rounded-full font-bold text-sm hover:bg-[#1D4ED8] hover:shadow-lg transform hover:-translate-y-0.5 transition-all hidden sm:block"
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

      {/* Bottom Tier: Navigation Links */}
      <nav className="bg-[#114088] w-full hidden md:block border-t border-blue-900/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-center items-center h-12">
          {/* Main Navigation (Desktop) */}
          <ul className="hidden md:flex items-center h-full gap-8">
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
              {/* Standard Vertical Scrollable Dropdown Menu */}
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
                <Link to="/package/malaysia" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 transition-colors">Malaysia</Link>
                <Link to="/package/maldives" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 transition-colors">Maldives</Link>
                <Link to="/package/europe" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 transition-colors">Europe</Link>
                <Link to="/package/dubai" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 transition-colors flex justify-between items-center">Dubai <span className="text-[9px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-bold">SOON</span></Link>
                <Link to="/package/singapore" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 transition-colors flex justify-between items-center">Singapore <span className="text-[9px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-bold">SOON</span></Link>
                <Link to="/package/thailand" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 transition-colors flex justify-between items-center">Thailand <span className="text-[9px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-bold">SOON</span></Link>
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
            <a href="tel:+919036980166" className="flex justify-center items-center text-[#114088] font-bold text-lg pt-4 border-t border-gray-100">
              <Phone className="w-5 h-5 mr-2 text-[#2563EB]" />
              +91 90369 80166
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
