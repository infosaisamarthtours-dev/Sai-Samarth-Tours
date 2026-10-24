import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/config';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { trackContact } from '../utils/pixel';

interface MobileBottomNavProps {
  onOpenEnquiry: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#ffffff]/95 backdrop-blur-lg border-t border-[#EAE2D6] px-3 py-2 flex items-center justify-around shadow-2xl">
      <a
        href={`tel:${siteConfig.phoneTentative}`}
        onClick={() => trackContact({ content_name: 'Mobile Nav - Phone Call' })}
        className="flex flex-col items-center justify-center text-[#114088] py-1 px-2"
      >
        <span className="material-symbols-outlined text-lg">call</span>
        <span className="text-[9px] uppercase font-bold tracking-wider">Call</span>
      </a>

      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackContact({ content_name: 'Mobile Nav - WhatsApp' })}
        className="flex flex-col items-center justify-center text-emerald-700 py-1 px-2"
      >
        <span className="material-symbols-outlined text-lg text-emerald-600">chat</span>
        <span className="text-[9px] uppercase font-bold tracking-wider">WhatsApp</span>
      </a>

      <Link
        to="/bus-packages"
        className="flex flex-col items-center justify-center text-[#EA580C] hover:text-[#C2410C] py-1 px-2 transition-colors relative"
      >
        <span className="material-symbols-outlined text-lg">directions_bus</span>
        <span className="text-[9px] uppercase font-black tracking-wider">Bus Tours</span>
        <span className="absolute -top-1 right-0 w-2 h-2 bg-[#EA580C] rounded-full animate-ping"></span>
      </Link>

      <button
        onClick={onOpenEnquiry}
        className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md cursor-pointer"
      >
        <span className="material-symbols-outlined text-sm">send</span>
        <span>Enquire</span>
      </button>
    </div>
  );
};
