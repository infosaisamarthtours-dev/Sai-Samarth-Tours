import React from 'react';
import { siteConfig } from '../data/config';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface MobileBottomNavProps {
  onOpenEnquiry: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#ffffff]/95 backdrop-blur-lg border-t border-[#EAE2D6] px-4 py-2 flex items-center justify-around shadow-2xl">
      <a
        href={`tel:${siteConfig.phoneTentative}`}
        className="flex flex-col items-center justify-center text-[#F59E0B] py-1 px-3"
      >
        <span className="material-symbols-outlined text-lg">call</span>
        <span className="text-[9px] uppercase font-bold tracking-wider">Call</span>
      </a>

      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center text-emerald-700 py-1 px-3"
      >
        <span className="material-symbols-outlined text-lg text-emerald-600">chat</span>
        <span className="text-[9px] uppercase font-bold tracking-wider">WhatsApp</span>
      </a>

      <button
        onClick={onOpenEnquiry}
        className="flex items-center gap-1 px-5 py-2 bg-[#F59E0B] text-[#ffffff] font-bold text-xs uppercase tracking-wider rounded-lg shadow-md cursor-pointer"
      >
        <span className="material-symbols-outlined text-sm">send</span>
        <span>Enquire</span>
      </button>
    </div>
  );
};
