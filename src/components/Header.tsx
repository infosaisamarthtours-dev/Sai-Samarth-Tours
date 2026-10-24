import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ALL_PACKAGES } from '../data/packages';
import { siteConfig } from '../data/config';
import { Phone, Menu, X, Search, ChevronDown, UserCheck, MapPin, Clock, ArrowRight, Tag, Bus } from 'lucide-react';

interface HeaderProps {
  onOpenEnquiry: (packageTitle?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const toggleMobileDropdown = (category: string) => {
    setOpenMobileDropdown(prev => prev === category ? null : category);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  // Close search dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current && 
        !searchContainerRef.current.contains(e.target as Node) &&
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(e.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter and prioritize matches based on prefix
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];

    return ALL_PACKAGES.filter((p) => {
      const title = p.title.toLowerCase();
      const dest = p.destination.toLowerCase();
      const cat = p.category.toLowerCase();
      const highlights = p.highlights ? p.highlights.join(' ').toLowerCase() : '';
      return title.includes(q) || dest.includes(q) || cat.includes(q) || highlights.includes(q);
    }).sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      
      // 1. Starts with query (e.g. "s" -> "Shirdi...", "Singapore", "Sri Lanka")
      const aStarts = aTitle.startsWith(q);
      const bStarts = bTitle.startsWith(q);
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;

      // 2. Any word starts with query
      const aWordStarts = aTitle.split(' ').some(w => w.startsWith(q));
      const bWordStarts = bTitle.split(' ').some(w => w.startsWith(q));
      if (aWordStarts && !bWordStarts) return -1;
      if (!aWordStarts && bWordStarts) return 1;

      return 0;
    });
  }, [searchQuery]);

  const handleSelectPackage = (pkgId: string) => {
    setSearchQuery('');
    setIsSearchOpen(false);
    closeMobileMenu();
    navigate(`/package/${pkgId}`);
  };

  return (
    <header className="w-full flex flex-col z-50 sticky top-0 shadow-md">
      
      {/* Main Header Tier (Image 2 Layout: Logo, Tour Guide Badge, Search, Social Icons, CTA) */}
      <div className="bg-white w-full px-4 sm:px-8 py-2.5 flex justify-between items-center border-b border-gray-100 gap-4">
        {/* Left: Logo */}
        <div className="flex justify-start items-center">
          <Link to="/" className="flex-shrink-0 block">
            <img 
              src="/sai-samarth-tours-logo.webp" 
              alt="Sai Samarth Tours - Pilgrimage Travel Agency Bengaluru" 
              width={180}
              height={56}
              loading="eager"
              decoding="sync"
              className="h-12 sm:h-14 w-auto object-contain hover:scale-105 transition-transform" 
            />
          </Link>
        </div>

        {/* Middle-Left: Tour Manager Badge in Header Row */}
        <div className="hidden lg:flex items-center gap-2 bg-[#114088]/10 text-[#114088] px-4 py-2 rounded-full border border-[#114088]/25 shadow-sm font-bold text-xs whitespace-nowrap">
          <UserCheck className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
          <span>Tour Manager Available for All Packages</span>
        </div>

        {/* Middle-Right: Search Bar with Animated Blue & Orange Hover Glow & Live Autocomplete */}
        <div ref={searchContainerRef} className="hidden md:flex flex-1 max-w-sm justify-center relative group">
          <div className="w-full relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none z-10">
              <Search className="h-4 w-4 text-gray-400 group-hover:text-[#F59E0B] transition-colors duration-300" />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => {
                if (searchQuery.trim().length > 0) setIsSearchOpen(true);
              }}
              placeholder="Search Jyotirlinga & Tour Packages..." 
              className="w-full pl-10 pr-9 py-2 rounded-full border border-gray-300 focus:outline-none text-sm transition-all shadow-sm search-glow-animated"
            />
            {searchQuery && (
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setIsSearchOpen(false);
                }}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Premium Real-Time Search Results Dropdown */}
          {isSearchOpen && searchQuery.trim().length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-2.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/80 overflow-hidden z-50 animate-fadeIn">
              <div className="px-4 py-2.5 bg-gray-50/90 border-b border-gray-100 flex items-center justify-between text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                <span>Matching Tours ({searchResults.length})</span>
                <span className="text-[#F59E0B]">Instant Search</span>
              </div>

              <div className="max-h-[360px] overflow-y-auto divide-y divide-gray-100">
                {searchResults.length > 0 ? (
                  searchResults.map((pkg) => (
                    <div 
                      key={pkg.id} 
                      onClick={() => handleSelectPackage(pkg.id)}
                      className="p-3 hover:bg-blue-50/80 cursor-pointer flex items-center gap-3 transition-colors group/item"
                    >
                      <img 
                        src={pkg.image} 
                        alt={`${pkg.title} tour package from Bangalore`} 
                        width={48}
                        height={48}
                        loading="lazy"
                        decoding="async"
                        className="w-12 h-12 rounded-xl object-cover border border-gray-200/80 shrink-0 group-hover/item:scale-105 transition-transform" 
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200/60 shrink-0">
                            {pkg.category}
                          </span>
                          <span className="text-[11px] font-semibold text-gray-400 shrink-0 flex items-center gap-0.5">
                            <Clock className="w-3 h-3 text-[#F59E0B]" />
                            {pkg.duration}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-[#114088] group-hover/item:text-[#2563EB] truncate">
                          {pkg.title}
                        </h4>
                        <p className="text-[11px] text-gray-500 truncate flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-gray-400 shrink-0" />
                          {pkg.destination}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="block text-xs font-extrabold text-[#F59E0B]">
                          {pkg.price}
                        </span>
                        <span className="text-[10px] text-[#2563EB] font-bold flex items-center justify-end gap-0.5 group-hover/item:translate-x-0.5 transition-transform">
                          View <ArrowRight className="w-2.5 h-2.5" />
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center text-xs text-gray-500">
                    <p className="font-semibold text-gray-700 mb-1">No tours found for "{searchQuery}"</p>
                    <p className="text-[11px] text-gray-400">Try searching for <span className="text-[#2563EB] font-medium">Shirdi</span>, <span className="text-[#2563EB] font-medium">Kashi</span>, <span className="text-[#2563EB] font-medium">Kashmir</span>, <span className="text-[#2563EB] font-medium">Singapore</span>...</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right: Social Media Icons + Book Now CTA */}
        <div className="flex justify-end items-center gap-3 sm:gap-4">
          <div className="hidden sm:flex items-center gap-2 mr-1">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Facebook" 
              className="w-8 h-8 rounded-full bg-[#1877F2] text-white hover:scale-110 hover:shadow-md flex items-center justify-center transition-all shadow-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Instagram" 
              className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:scale-110 hover:shadow-md flex items-center justify-center transition-all shadow-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="YouTube" 
              className="w-8 h-8 rounded-full bg-[#FF0000] text-white hover:scale-110 hover:shadow-md flex items-center justify-center transition-all shadow-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a 
              href="https://wa.me/919187711649" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="WhatsApp" 
              className="w-8 h-8 rounded-full bg-[#25D366] text-white hover:scale-110 hover:shadow-md flex items-center justify-center transition-all shadow-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </a>
          </div>

          {/* Bus Tour Button */}
          <Link
            to="/bus-packages"
            className="bg-gradient-to-r from-[#114088] to-[#1E3A8A] hover:from-[#0C1F41] hover:to-[#114088] text-white px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm hover:shadow-lg transform hover:-translate-y-0.5 transition-all shadow-md active:scale-95 whitespace-nowrap flex items-center gap-1.5 border border-amber-400/40"
          >
            <Bus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F59E0B]" />
            <span>Bus Tour</span>
          </Link>

          <button
            onClick={() => onOpenEnquiry()}
            className="bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white px-3.5 py-1.5 sm:px-7 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm hover:shadow-lg transform hover:-translate-y-0.5 transition-all shadow-md active:scale-95 whitespace-nowrap"
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
                  <Link to="/package/shirdi-via-pune" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Shirdi Via Pune</Link>
                  <Link to="/package/shirdi-via-mumbai" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Shirdi Via Mumbai</Link>
                  <Link to="/package/shirdi-3-jyothirlinga" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Shirdi with 3 Jyothirlinga</Link>
                  <Link to="/package/shirdi-2-jyothirlinga" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Shirdi with 2 Jyothirlinga</Link>
                  <Link to="/package/shirdi-regular" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Direct Shirdi</Link>
                </div>
              </div>
            </li>

            {/* Pilgrimage Dropdown */}
            <li className="relative group flex items-center h-full">
              <Link to="/pilgrimage-packages" className="text-white text-sm font-semibold hover:text-[#F59E0B] transition-colors flex items-center h-full">
                Pilgrimage <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 top-full w-80 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-b-lg overflow-hidden">
                <div className="flex flex-col max-h-[280px] overflow-y-auto">
                  <Link to="/package/kholapur-pandarpur" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Kholapur and Pandrapur</Link>
                  <Link to="/package/puri-jagannath" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Puri Jagannath</Link>
                  <Link to="/package/kamakhya" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Kamakya</Link>
                  <Link to="/package/kashi-ayodhya-prayagraj" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Kashi Ayodhya Prayagraj & Bodhgaya</Link>
                  <Link to="/package/kashi-ayodhya" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Kashi With Ayodhya</Link>
                  <Link to="/package/indore-ujjain" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Indore and Ujjain</Link>
                  <Link to="/package/vaishnodevi" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Vaishnodevi</Link>
                  <Link to="/package/baidyanath" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Baidyanath</Link>
                  <Link to="/package/rameshwaram" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Rameshwaram</Link>
                  <Link to="/package/gujarat" className="px-5 py-3.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 border-b border-gray-50 transition-colors font-medium block">Gujarat</Link>
                </div>
              </div>
            </li>

            {/* Bus Tours Dropdown */}
            <li className="relative group flex items-center h-full">
              <Link to="/bus-packages" className="text-white text-sm font-semibold hover:text-[#F59E0B] transition-colors flex items-center h-full gap-1.5">
                <Bus className="w-4 h-4 text-[#F59E0B]" />
                <span>Bus Tours</span>
                <span className="text-[9px] bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider">New</span>
                <ChevronDown className="w-4 h-4 ml-0.5 opacity-70 group-hover:opacity-100 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 top-full w-96 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-b-lg overflow-hidden">
                <div className="px-4 py-3 bg-gradient-to-r from-amber-50 to-blue-50 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-[#114088] uppercase tracking-wider">A/C Pushback Bus Yatras</span>
                    <span className="text-[10px] bg-green-100 text-green-800 font-bold px-1.5 py-0.5 rounded">All Meals Included</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-0.5">Deluxe 2+2 sanitized pushback coaches with Tour Manager</p>
                </div>
                <div className="flex flex-col divide-y divide-gray-100">
                  <Link to="/package/south-india-yatra-bus-tour-from-bangalore" className="px-5 py-3.5 text-sm text-gray-800 hover:text-[#2563EB] hover:bg-orange-50/40 transition-colors block group/item">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#114088] group-hover/item:text-[#EA580C] transition-colors">South India Yatra</span>
                      <span className="text-xs font-black text-[#EA580C]">₹25,999/-</span>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-0.5">5N/6D • Madurai, Rameshwaram, Kanyakumari, Alleppey & Guruvayoor</p>
                  </Link>

                  <Link to="/package/shirdi-saptha-shrungi-kolhapur-bus-tour-from-bangalore" className="px-5 py-3.5 text-sm text-gray-800 hover:text-[#2563EB] hover:bg-amber-50/40 transition-colors block group/item">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#114088] group-hover/item:text-[#EA580C] transition-colors">Shirdi – Saptha Shrungi – Triyambhakeshwar</span>
                      <span className="text-xs font-black text-[#EA580C]">₹15,999/-</span>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-0.5">4N/5D • Ganagapur, Pandharpur, Mumbai, Pune & Savadatti</p>
                  </Link>

                  <Link to="/package/panch-bootha-yatra-tirumala-balaji-bus-tour-from-bangalore" className="px-5 py-3.5 text-sm text-gray-800 hover:text-[#2563EB] hover:bg-blue-50/50 transition-colors block group/item">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#114088] group-hover/item:text-[#EA580C] transition-colors">Panch Bootha & Balaji Yatra</span>
                      <span className="text-xs font-black text-[#EA580C]">₹16,999/-</span>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-0.5">4N/5D • All 5 Shiva Elements + Tirumala Balaji</p>
                  </Link>

                  <Link to="/bus-packages" className="px-5 py-3 text-xs font-bold text-[#114088] hover:text-[#2563EB] hover:bg-gray-50 transition-colors flex items-center justify-between">
                    <span>Explore All Bus Trips & Group Charters</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#EA580C]" />
                  </Link>
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
                      <li><Link to="/package/rajasthan" className="text-sm text-gray-700 hover:text-[#2563EB] transition-colors flex items-center group/link"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/link:bg-[#F59E0B] mr-2 transition-colors"></span>Rajasthan</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">South & Coastal India</h3>
                    <ul className="space-y-2">
                      <li><Link to="/package/kerala" className="text-sm text-gray-700 hover:text-[#2563EB] transition-colors flex items-center group/link"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/link:bg-[#F59E0B] mr-2 transition-colors"></span>Kerala</Link></li>
                      <li><Link to="/package/andaman" className="text-sm text-gray-700 hover:text-[#2563EB] transition-colors flex items-center group/link"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/link:bg-[#F59E0B] mr-2 transition-colors"></span>Andaman</Link></li>
                      <li><Link to="/package/goa" className="text-sm text-gray-700 hover:text-[#2563EB] transition-colors flex items-center group/link"><span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/link:bg-[#F59E0B] mr-2 transition-colors"></span>Goa</Link></li>
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
              <Link to="/blog" className="text-white text-sm font-semibold hover:text-[#F59E0B] transition-colors h-full flex items-center">
                Blog
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
          {/* Mobile Tour Manager & Human Icon Badge */}
          <div className="flex items-center gap-2.5 bg-[#114088] text-white p-3 rounded-xl border border-blue-800 mb-4 shadow-sm">
            <UserCheck className="w-5 h-5 text-[#F59E0B] flex-shrink-0" />
            <span className="text-xs font-bold leading-tight text-[#F59E0B]">Tour Manager Available for All Packages</span>
          </div>

          {/* Mobile Search with live autocomplete */}
          <div ref={mobileSearchRef} className="relative mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => {
                  if (searchQuery.trim().length > 0) setIsSearchOpen(true);
                }}
                placeholder="Search Jyotirlinga & Tour Packages..." 
                className="w-full pl-10 pr-9 py-2.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#114088] text-sm"
              />
              {searchQuery && (
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setIsSearchOpen(false);
                  }}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Mobile Dropdown */}
            {isSearchOpen && searchQuery.trim().length > 0 && (
              <div className="mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden z-50 animate-fadeIn max-h-[300px] overflow-y-auto divide-y divide-gray-100">
                <div className="px-3.5 py-2 bg-gray-50 border-b border-gray-100 text-[10px] font-bold text-gray-500 uppercase tracking-wider flex justify-between">
                  <span>Matching Tours ({searchResults.length})</span>
                </div>
                {searchResults.length > 0 ? (
                  searchResults.map((pkg) => (
                    <div 
                      key={pkg.id} 
                      onClick={() => handleSelectPackage(pkg.id)}
                      className="p-2.5 hover:bg-blue-50 cursor-pointer flex items-center gap-2.5"
                    >
                      <img 
                        src={pkg.image} 
                        alt={`${pkg.title} tour package from Bangalore`} 
                        width={40}
                        height={40}
                        loading="lazy"
                        decoding="async"
                        className="w-10 h-10 rounded-lg object-cover shrink-0" 
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-[#114088] truncate">{pkg.title}</h4>
                        <div className="flex items-center gap-2 text-[10px] text-gray-500">
                          <span>📍 {pkg.destination}</span>
                          <span>⏱️ {pkg.duration}</span>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="block text-xs font-bold text-[#F59E0B]">{pkg.price}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-xs text-gray-500">
                    No tours found for "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>

          <nav className="flex flex-col">
            {/* Home */}
            <Link 
              to="/" 
              onClick={closeMobileMenu} 
              className="text-[#114088] font-bold text-base py-3 border-b border-gray-100 hover:text-[#2563EB] transition-colors flex items-center justify-between"
            >
              <span>Home</span>
            </Link>

            {/* Shirdi Dropdown */}
            <div className="border-b border-gray-100">
              <button
                type="button"
                onClick={() => toggleMobileDropdown('shirdi')}
                className="w-full flex items-center justify-between py-3 text-[#114088] font-bold text-base hover:text-[#2563EB] transition-colors cursor-pointer text-left"
              >
                <span>Shirdi</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openMobileDropdown === 'shirdi' ? 'rotate-180 text-[#F59E0B]' : 'text-gray-400'
                  }`} 
                />
              </button>

              {openMobileDropdown === 'shirdi' && (
                <div className="bg-blue-50/50 rounded-xl p-3 mb-2 space-y-1 border border-blue-100/70 animate-fadeIn">
                  <Link
                    to="/shirdi-packages"
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-[#EA580C] bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors flex items-center justify-between border border-amber-200/60"
                  >
                    <span>Explore All Shirdi Packages</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/package/shirdi-via-pune" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Shirdi Via Pune</Link>
                  <Link to="/package/shirdi-via-mumbai" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Shirdi Via Mumbai</Link>
                  <Link to="/package/shirdi-3-jyothirlinga" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Shirdi with 3 Jyothirlinga</Link>
                  <Link to="/package/shirdi-2-jyothirlinga" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Shirdi with 2 Jyothirlinga</Link>
                  <Link to="/package/shirdi-regular" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Direct Shirdi Flight Yatra</Link>
                </div>
              )}
            </div>

            {/* Pilgrimage Dropdown */}
            <div className="border-b border-gray-100">
              <button
                type="button"
                onClick={() => toggleMobileDropdown('pilgrimage')}
                className="w-full flex items-center justify-between py-3 text-[#114088] font-bold text-base hover:text-[#2563EB] transition-colors cursor-pointer text-left"
              >
                <span>Pilgrimage</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openMobileDropdown === 'pilgrimage' ? 'rotate-180 text-[#F59E0B]' : 'text-gray-400'
                  }`} 
                />
              </button>

              {openMobileDropdown === 'pilgrimage' && (
                <div className="bg-blue-50/50 rounded-xl p-3 mb-2 space-y-1 border border-blue-100/70 animate-fadeIn max-h-[300px] overflow-y-auto">
                  <Link
                    to="/pilgrimage-packages"
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-[#EA580C] bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors flex items-center justify-between border border-amber-200/60 sticky top-0 z-10"
                  >
                    <span>Explore All Pilgrimage Packages</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/package/kholapur-pandarpur" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Kolhapur and Pandharpur</Link>
                  <Link to="/package/puri-jagannath" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Puri Jagannath</Link>
                  <Link to="/package/kamakhya" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Kamakhya</Link>
                  <Link to="/package/kashi-ayodhya-prayagraj" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Kashi Ayodhya Prayagraj & Bodhgaya</Link>
                  <Link to="/package/kashi-ayodhya" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Kashi With Ayodhya</Link>
                  <Link to="/package/indore-ujjain" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Indore and Ujjain</Link>
                  <Link to="/package/vaishnodevi" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Vaishnodevi</Link>
                  <Link to="/package/baidyanath" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Baidyanath</Link>
                  <Link to="/package/rameshwaram" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Rameshwaram</Link>
                  <Link to="/package/gujarat" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Gujarat</Link>
                </div>
              )}
            </div>

            {/* Bus Tours Dropdown (Unique & Highlights Panch Bootha) */}
            <div className="border-b border-gray-100">
              <button
                type="button"
                onClick={() => toggleMobileDropdown('bus')}
                className="w-full flex items-center justify-between py-3 text-[#114088] font-bold text-base hover:text-[#2563EB] transition-colors cursor-pointer text-left"
              >
                <div className="flex items-center gap-2">
                  <Bus className="w-5 h-5 text-[#EA580C]" />
                  <span>Bus Tours</span>
                  <span className="text-[10px] bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">New</span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openMobileDropdown === 'bus' ? 'rotate-180 text-[#F59E0B]' : 'text-gray-400'
                  }`} 
                />
              </button>

              {openMobileDropdown === 'bus' && (
                <div className="bg-gradient-to-br from-amber-50/70 to-blue-50/60 rounded-xl p-3 mb-2 space-y-2 border border-amber-200/60 animate-fadeIn">
                  <Link
                    to="/bus-packages"
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-[#114088] bg-white rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-between shadow-xs border border-blue-100"
                  >
                    <span>Explore All Bus Trips & Charters</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#EA580C]" />
                  </Link>

                  {/* South India Yatra Bus Tour Card */}
                  <Link 
                    to="/package/south-india-yatra-bus-tour-from-bangalore" 
                    onClick={closeMobileMenu} 
                    className="block p-3 bg-white rounded-xl hover:bg-orange-50/50 transition-colors border border-orange-200 shadow-xs"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black text-[#114088]">South India Yatra</span>
                      <span className="text-xs font-black text-[#EA580C] bg-orange-50 px-2 py-0.5 rounded">₹25,999/-</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-tight">
                      5N/6D • A/C Pushback Bus • Madurai, Rameshwaram, Kanyakumari, Alleppey & Guruvayoor
                    </p>
                  </Link>

                  {/* Shirdi - Kolhapur Bus Tour Card */}
                  <Link 
                    to="/package/shirdi-saptha-shrungi-kolhapur-bus-tour-from-bangalore" 
                    onClick={closeMobileMenu} 
                    className="block p-3 bg-white rounded-xl hover:bg-amber-50/50 transition-colors border border-amber-200 shadow-xs"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black text-[#114088]">Shirdi – Saptha Shrungi – Triyambhakeshwar</span>
                      <span className="text-xs font-black text-[#EA580C] bg-amber-50 px-2 py-0.5 rounded">₹15,999/-</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-tight">
                      4N/5D • A/C Pushback Bus • Ganagapur, Pandharpur, Mumbai & Savadatti
                    </p>
                  </Link>

                  {/* Flagship Panch Bootha Tour Highlight Card */}
                  <Link 
                    to="/package/panch-bootha-yatra-tirumala-balaji-bus-tour-from-bangalore" 
                    onClick={closeMobileMenu} 
                    className="block p-3 bg-white rounded-xl hover:bg-amber-50/50 transition-colors border border-amber-200 shadow-xs"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black text-[#114088]">Panch Bootha & Balaji Yatra</span>
                      <span className="text-xs font-black text-[#EA580C] bg-amber-50 px-2 py-0.5 rounded">₹16,999/-</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-tight">
                      4N/5D • A/C Pushback Bus • 5 Shiva Elements + Tirumala (All Meals Included)
                    </p>
                  </Link>
                </div>
              )}
            </div>

            {/* Domestic Dropdown */}
            <div className="border-b border-gray-100">
              <button
                type="button"
                onClick={() => toggleMobileDropdown('domestic')}
                className="w-full flex items-center justify-between py-3 text-[#114088] font-bold text-base hover:text-[#2563EB] transition-colors cursor-pointer text-left"
              >
                <span>Domestic</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openMobileDropdown === 'domestic' ? 'rotate-180 text-[#F59E0B]' : 'text-gray-400'
                  }`} 
                />
              </button>

              {openMobileDropdown === 'domestic' && (
                <div className="bg-blue-50/50 rounded-xl p-3 mb-2 space-y-1 border border-blue-100/70 animate-fadeIn max-h-[300px] overflow-y-auto">
                  <Link
                    to="/domestic-packages"
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-[#EA580C] bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors flex items-center justify-between border border-amber-200/60 sticky top-0 z-10"
                  >
                    <span>Explore All Domestic Packages</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="pt-2 text-[10px] uppercase font-bold text-gray-400 px-3 tracking-wider">North India</div>
                  <Link to="/package/kashmir" onClick={closeMobileMenu} className="block px-3 py-1.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Kashmir</Link>
                  <Link to="/package/leh-ladakh" onClick={closeMobileMenu} className="block px-3 py-1.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Leh Ladakh</Link>
                  <Link to="/package/golden-triangle" onClick={closeMobileMenu} className="block px-3 py-1.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Golden Triangle</Link>
                  <Link to="/package/himachal" onClick={closeMobileMenu} className="block px-3 py-1.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Himachal Pradesh</Link>
                  <Link to="/package/rajasthan" onClick={closeMobileMenu} className="block px-3 py-1.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Rajasthan</Link>

                  <div className="pt-2 text-[10px] uppercase font-bold text-gray-400 px-3 tracking-wider">South & Coastal India</div>
                  <Link to="/package/kerala" onClick={closeMobileMenu} className="block px-3 py-1.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Kerala</Link>
                  <Link to="/package/andaman" onClick={closeMobileMenu} className="block px-3 py-1.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Andaman</Link>
                  <Link to="/package/goa" onClick={closeMobileMenu} className="block px-3 py-1.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Goa</Link>
                </div>
              )}
            </div>

            {/* International Dropdown */}
            <div className="border-b border-gray-100">
              <button
                type="button"
                onClick={() => toggleMobileDropdown('international')}
                className="w-full flex items-center justify-between py-3 text-[#114088] font-bold text-base hover:text-[#2563EB] transition-colors cursor-pointer text-left"
              >
                <span>International</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openMobileDropdown === 'international' ? 'rotate-180 text-[#F59E0B]' : 'text-gray-400'
                  }`} 
                />
              </button>

              {openMobileDropdown === 'international' && (
                <div className="bg-blue-50/50 rounded-xl p-3 mb-2 space-y-1 border border-blue-100/70 animate-fadeIn max-h-[300px] overflow-y-auto">
                  <Link
                    to="/international-packages"
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-[#EA580C] bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors flex items-center justify-between border border-amber-200/60 sticky top-0 z-10"
                  >
                    <span>Explore All International Packages</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link to="/package/bhutan" onClick={closeMobileMenu} className="block px-3 py-1.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Bhutan</Link>
                  <Link to="/package/nepal" onClick={closeMobileMenu} className="block px-3 py-1.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Nepal</Link>
                  <Link to="/package/malaysia" onClick={closeMobileMenu} className="block px-3 py-1.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Malaysia</Link>
                  <Link to="/package/maldives" onClick={closeMobileMenu} className="block px-3 py-1.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Maldives</Link>
                  <Link to="/package/singapore" onClick={closeMobileMenu} className="block px-3 py-1.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Singapore</Link>
                  <Link to="/package/thailand" onClick={closeMobileMenu} className="block px-3 py-1.5 text-sm text-gray-700 hover:text-[#2563EB] hover:bg-white rounded-lg transition-colors font-medium">Thailand</Link>
                  <div className="px-3 py-1.5 text-xs text-gray-400 flex justify-between items-center font-medium">
                    <span>Dubai & UAE</span>
                    <span className="text-[9px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-bold">SOON</span>
                  </div>
                  <div className="px-3 py-1.5 text-xs text-gray-400 flex justify-between items-center font-medium">
                    <span>Europe</span>
                    <span className="text-[9px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-bold">SOON</span>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link to="/about" onClick={closeMobileMenu} className="text-[#114088] font-bold text-base py-3 border-b border-gray-100 hover:text-[#2563EB] transition-colors flex justify-between">About Us</Link>
            <Link to="/blog" onClick={closeMobileMenu} className="text-[#114088] font-bold text-base py-3 border-b border-gray-100 hover:text-[#2563EB] transition-colors flex justify-between">Blog</Link>
            <Link to="/contact" onClick={closeMobileMenu} className="text-[#114088] font-bold text-base py-3 border-b border-gray-100 hover:text-[#2563EB] transition-colors flex justify-between">Contact</Link>
          </nav>
          
          <div className="mt-8 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3.5 text-center text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] rounded-lg shadow-md"
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
