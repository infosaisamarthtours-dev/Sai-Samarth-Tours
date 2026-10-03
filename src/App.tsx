import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';

// Route-level code splitting for Core Web Vitals optimization
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const PackageDetailsPage = lazy(() => import('./pages/PackageDetailsPage').then(m => ({ default: m.PackageDetailsPage })));
const PilgrimagePackagesPage = lazy(() => import('./pages/PilgrimagePackagesPage').then(m => ({ default: m.PilgrimagePackagesPage })));
const ShirdiPackagesPage = lazy(() => import('./pages/ShirdiPackagesPage').then(m => ({ default: m.ShirdiPackagesPage })));
const DomesticPackagesPage = lazy(() => import('./pages/DomesticPackagesPage').then(m => ({ default: m.DomesticPackagesPage })));
const InternationalPackagesPage = lazy(() => import('./pages/InternationalPackagesPage').then(m => ({ default: m.InternationalPackagesPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const FaqPage = lazy(() => import('./pages/FaqPage').then(m => ({ default: m.FaqPage })));
const CancellationPolicyPage = lazy(() => import('./pages/CancellationPolicyPage').then(m => ({ default: m.CancellationPolicyPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsOfUsePage = lazy(() => import('./pages/TermsOfUsePage').then(m => ({ default: m.TermsOfUsePage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(m => ({ default: m.BlogPage })));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage').then(m => ({ default: m.BlogDetailPage })));
const AllPackagesPage = lazy(() => import('./pages/AllPackagesPage').then(m => ({ default: m.AllPackagesPage })));
const DestinationPage = lazy(() => import('./pages/DestinationPage').then(m => ({ default: m.DestinationPage })));
const SeniorCitizenPackagesPage = lazy(() => import('./pages/SeniorCitizenPackagesPage').then(m => ({ default: m.SeniorCitizenPackagesPage })));
const FamilyPackagesPage = lazy(() => import('./pages/FamilyPackagesPage').then(m => ({ default: m.FamilyPackagesPage })));
const GroupPackagesPage = lazy(() => import('./pages/GroupPackagesPage').then(m => ({ default: m.GroupPackagesPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

// Lazy-load modal to avoid blocking initial render with confetti library
const EnquiryModal = lazy(() => import('./components/EnquiryModal').then(m => ({ default: m.EnquiryModal })));

import { useLocation } from 'react-router-dom';
import { getWhatsAppUrl } from './utils/whatsapp';
import { trackContact } from './utils/pixel';

function FloatingButtons() {
  const location = useLocation();
  const whatsappUrl = getWhatsAppUrl({ pathname: location.pathname });

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 flex-col gap-3 z-50">
      <a 
        href="tel:+919187711649" 
        onClick={() => trackContact({ content_name: 'Desktop Floating - Call' })}
        className="bg-[#114088] text-white p-3 rounded-full shadow-lg hover:bg-[#0C1F41] transition-transform hover:-translate-y-1 flex items-center justify-center" 
        aria-label="Call Us"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
      </a>
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        onClick={() => trackContact({ content_name: 'Desktop Floating - WhatsApp' })}
        className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-transform hover:-translate-y-1 flex items-center justify-center" 
        aria-label="WhatsApp Us"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </a>
    </div>
  );
}

export function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryPackageTitle, setEnquiryPackageTitle] = useState('');

  // Auto-show Enquiry Popup when visitor opens or refreshes website (after 2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEnquiryOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenEnquiry = (packageTitle?: string) => {
    if (packageTitle) {
      setEnquiryPackageTitle(packageTitle);
    } else {
      setEnquiryPackageTitle('');
    }
    setIsEnquiryOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FBF9F5] text-[#1C1C1C] flex flex-col font-sans selection:bg-[#A63A1E] selection:text-[#FFFFFF]">
        <Header onOpenEnquiry={handleOpenEnquiry} />

        <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center"><div className="w-8 h-8 border-3 border-[#114088] border-t-transparent rounded-full animate-spin"></div></div>}>
          <Routes>
            {/* Core Pages */}
            <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Tour Packages Hub & SEO Landing Pages */}
            <Route path="/tour-packages" element={<AllPackagesPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/tour-packages-from-bangalore" element={<AllPackagesPage onOpenEnquiry={handleOpenEnquiry} />} />

            {/* Category Landing Pages */}
            <Route path="/pilgrimage-packages" element={<PilgrimagePackagesPage />} />
            <Route path="/pilgrimage-tour-packages" element={<PilgrimagePackagesPage />} />
            <Route path="/pilgrimage-tours-from-bangalore" element={<PilgrimagePackagesPage />} />
            <Route path="/shirdi-packages" element={<ShirdiPackagesPage />} />
            <Route path="/shirdi-tour-packages" element={<ShirdiPackagesPage />} />
            <Route path="/shirdi-tour-packages-from-bangalore" element={<ShirdiPackagesPage />} />
            <Route path="/domestic-packages" element={<DomesticPackagesPage />} />
            <Route path="/domestic-tour-packages" element={<DomesticPackagesPage />} />
            <Route path="/domestic-tour-packages-from-bangalore" element={<DomesticPackagesPage />} />
            <Route path="/international-packages" element={<InternationalPackagesPage />} />
            <Route path="/international-tour-packages" element={<InternationalPackagesPage />} />
            <Route path="/international-tour-packages-from-bangalore" element={<InternationalPackagesPage />} />

            {/* Dedicated High-Demand Audience Landing Pages */}
            <Route path="/senior-citizen-tour-packages" element={<SeniorCitizenPackagesPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/senior-citizen-tour-packages-from-bangalore" element={<SeniorCitizenPackagesPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/family-tour-packages-from-bangalore" element={<FamilyPackagesPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/group-tour-packages-from-bangalore" element={<GroupPackagesPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/customized-tour-packages-from-bangalore" element={<GroupPackagesPage onOpenEnquiry={handleOpenEnquiry} />} />

            {/* Direct Top-Level Keyword Destination Shortcuts */}
            <Route path="/shirdi-tour-package-from-bangalore" element={<Navigate to="/package/shirdi-tour-package-from-bangalore" replace />} />
            <Route path="/kashi-tour-package-from-bangalore" element={<Navigate to="/destinations/kashi" replace />} />
            <Route path="/ayodhya-tour-package-from-bangalore" element={<Navigate to="/destinations/ayodhya" replace />} />
            <Route path="/kashmir-tour-package-from-bangalore" element={<Navigate to="/package/kashmir-tour-package-from-bangalore" replace />} />
            <Route path="/kerala-tour-package-from-bangalore" element={<Navigate to="/package/kerala-tour-package-from-bangalore" replace />} />
            <Route path="/goa-tour-package-from-bangalore" element={<Navigate to="/package/goa-beach-tour-package-from-bangalore" replace />} />
            <Route path="/ladakh-tour-package-from-bangalore" element={<Navigate to="/package/leh-ladakh-tour-package-from-bangalore" replace />} />
            <Route path="/andaman-tour-package-from-bangalore" element={<Navigate to="/package/andaman-islands-tour-package-from-bangalore" replace />} />
            <Route path="/maldives-tour-package-from-bangalore" element={<Navigate to="/package/maldives-tour-package-from-bangalore" replace />} />
            <Route path="/thailand-tour-package-from-bangalore" element={<Navigate to="/package/thailand-tour-package-from-bangalore" replace />} />
            <Route path="/malaysia-tour-package-from-bangalore" element={<Navigate to="/package/malaysia-tour-package-from-bangalore" replace />} />
            <Route path="/dubai-tour-package-from-bangalore" element={<Navigate to="/package/dubai-tour-package-from-bangalore" replace />} />
            <Route path="/chardham-yatra-from-bangalore" element={<Navigate to="/destinations/chardham" replace />} />
            <Route path="/tirupati-tour-package-from-bangalore" element={<Navigate to="/destinations/tirupati" replace />} />

            {/* Destination Landing Pages */}
            <Route path="/destinations/:slug" element={<DestinationPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/destinations" element={<Navigate to="/tour-packages" replace />} />

            {/* Package Detail Pages (Resolves short IDs & -tour-package-from-bangalore slugs) */}
            <Route path="/package/:id" element={<PackageDetailsPage />} />

            {/* Policy & Info Pages */}
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/cancellation-policy" element={<CancellationPolicyPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />

            {/* Blog Pages */}
            <Route path="/blog" element={<BlogPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/blog/:id" element={<BlogDetailPage onOpenEnquiry={handleOpenEnquiry} />} />

            {/* 404 Not Found Page */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>

        {/* Floating Action Buttons (Desktop Only - hidden on mobile view) */}
        <FloatingButtons />

        <Footer />

        {/* Global Enquiry Booking Modal (Only loaded when open) */}
        {isEnquiryOpen && (
          <Suspense fallback={null}>
            <EnquiryModal
              isOpen={isEnquiryOpen}
              initialPackageTitle={enquiryPackageTitle}
              onClose={() => setIsEnquiryOpen(false)}
            />
          </Suspense>
        )}

        <MobileBottomNav onOpenEnquiry={() => handleOpenEnquiry()} />
      </div>
    </Router>
  );
}

export default App;
