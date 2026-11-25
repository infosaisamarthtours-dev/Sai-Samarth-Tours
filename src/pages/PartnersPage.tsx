import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getSEOForRoute } from '../data/seoConfig';
import { 
  Building2, ExternalLink, ShieldCheck, Plus, CheckCircle2, 
  HelpCircle, ArrowRight, Plane, Hotel, Train, Landmark, Lock
} from 'lucide-react';
import { GENUINE_PARTNERS, Partner, PartnershipType, addPartner } from '../data/partners';

export function PartnersPage() {
  const [partners, setPartners] = useState<Partner[]>(GENUINE_PARTNERS);
  const [showAdminForm, setShowAdminForm] = useState(false);
  const [adminPasscode, setAdminPasscode] = useState('');
  const [isAdminUnlocked, setIsAdminUnlocked] = useState(false);
  const [adminError, setAdminError] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');
  const [partnershipType, setPartnershipType] = useState<PartnershipType>('Aviation Partner');

  const handleUnlockAdmin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPasscode === 'admin123' || adminPasscode === 'sai2026') {
      setIsAdminUnlocked(true);
      setAdminError('');
    } else {
      setAdminError('Invalid administrator authorization code.');
    }
  };

  const handleAddPartner = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !websiteUrl.trim() || !description.trim()) {
      return;
    }

    try {
      // Validate URL format
      new URL(websiteUrl);
    } catch {
      alert('Please enter a valid website URL starting with https://');
      return;
    }

    const created = addPartner({
      name: name.trim(),
      websiteUrl: websiteUrl.trim(),
      description: description.trim(),
      logo: logo.trim() || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop&q=80',
      partnershipType
    });

    setPartners([...GENUINE_PARTNERS]);
    setName('');
    setWebsiteUrl('');
    setDescription('');
    setLogo('');
    setFormSuccess(true);
    setTimeout(() => setFormSuccess(false), 4000);
  };

  const partnersJsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      'name': 'Official Travel Partners & Aviation Associates | Sai Samarth Tours',
      'description': 'Verified business partners, aviation airlines, and hospitality providers collaborating with Sai Samarth Tours Bangalore.',
      'url': 'https://saisamarthtours.com/partners'
    }
  ];

  const getTypeIcon = (type: PartnershipType) => {
    switch (type) {
      case 'Aviation Partner':
        return <Plane className="w-4 h-4 text-blue-600" />;
      case 'Hospitality Partner':
        return <Hotel className="w-4 h-4 text-amber-600" />;
      case 'Ticketing Partner':
        return <Train className="w-4 h-4 text-emerald-600" />;
      case 'Tourism Board':
        return <Landmark className="w-4 h-4 text-purple-600" />;
      default:
        return <Building2 className="w-4 h-4 text-slate-600" />;
    }
  };

  const seo = getSEOForRoute('/partners')!;

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-slate-800 pb-20">
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        ogImage={seo.ogImage}
        keywords={[seo.primaryKeyword, ...seo.secondaryKeywords].join(', ')}
        jsonLd={partnersJsonLd}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#0B1E3F] via-[#114088] to-[#0A1A36] text-white pt-8 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-4">
            <Breadcrumbs items={[{ name: 'Business Partners' }]} theme="dark" />
          </div>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-[11px] uppercase font-extrabold tracking-widest text-[#F59E0B] bg-amber-500/20 px-3.5 py-1.5 rounded-full border border-amber-500/30 mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Industry Network</span>
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-serif-brand text-white leading-tight mb-4">
              Our Trusted Travel Partners
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              We collaborate exclusively with certified airlines, government tourism ecosystems, and vetted hospitality providers to guarantee punctuality, pure vegetarian standards, and safety for all Bangalore travelers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">

        {/* Ethical Partner Policy Callout */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200/80 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-[#0B1E3F]">Genuine Partner Standards</h3>
              <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                Sai Samarth Tours does not engage in automated link schemes or fake reciprocal endorsements. All listed entities represent real operational suppliers.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowAdminForm(!showAdminForm)}
            className="text-xs font-bold text-[#114088] hover:text-[#0B1E3F] px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors inline-flex items-center gap-1.5 shrink-0 cursor-pointer"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>{showAdminForm ? 'Close Admin Panel' : 'Partner Admin Access'}</span>
          </button>
        </div>

        {/* Administrator Partner Management Panel */}
        {showAdminForm && (
          <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border-2 border-blue-200 mb-10 transition-all">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-200">
                <div>
                  <h3 className="text-lg font-bold font-serif-brand text-[#0B1E3F] flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#EA580C]" />
                    <span>Administrator Partner Entry</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Authorized staff only: register verified business partners.
                  </p>
                </div>
              </div>

              {!isAdminUnlocked ? (
                <form onSubmit={handleUnlockAdmin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Staff Passcode
                    </label>
                    <input
                      type="password"
                      value={adminPasscode}
                      onChange={(e) => setAdminPasscode(e.target.value)}
                      placeholder="Enter administrative passcode (e.g. sai2026)"
                      className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:border-[#114088] focus:outline-hidden"
                      required
                    />
                  </div>
                  {adminError && <p className="text-xs text-rose-600 font-semibold">{adminError}</p>}
                  <button
                    type="submit"
                    className="bg-[#114088] hover:bg-[#0B1E3F] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
                  >
                    Unlock Partner Manager
                  </button>
                </form>
              ) : (
                <form onSubmit={handleAddPartner} className="space-y-4">
                  {formSuccess && (
                    <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Partner successfully added to the active directory!</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Partner Name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. IndiGo Airlines"
                        className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:border-[#114088] focus:outline-hidden"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Partner Website URL *
                      </label>
                      <input
                        type="url"
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        placeholder="https://www.example.com"
                        className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:border-[#114088] focus:outline-hidden"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Partnership Type *
                      </label>
                      <select
                        value={partnershipType}
                        onChange={(e) => setPartnershipType(e.target.value as PartnershipType)}
                        className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:border-[#114088] focus:outline-hidden bg-white"
                      >
                        <option value="Aviation Partner">Aviation Partner</option>
                        <option value="Ticketing Partner">Ticketing Partner</option>
                        <option value="Hospitality Partner">Hospitality Partner</option>
                        <option value="Tourism Board">Tourism Board</option>
                        <option value="Transport Partner">Transport Partner</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Partner Logo / Photo URL
                      </label>
                      <input
                        type="url"
                        value={logo}
                        onChange={(e) => setLogo(e.target.value)}
                        placeholder="https://... (Optional)"
                        className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:border-[#114088] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Short Description *
                    </label>
                    <textarea
                      rows={3}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe the operational relationship with Sai Samarth Tours..."
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:border-[#114088] focus:outline-hidden"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Publish Partner Entry</span>
                  </button>
                </form>
              )}
            </div>
          </section>
        )}

        {/* Partners Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/90 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                    {getTypeIcon(partner.partnershipType)}
                    <span>{partner.partnershipType}</span>
                  </span>
                  {partner.featured && (
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                      Verified
                    </span>
                  )}
                </div>

                <div className="h-28 w-full rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-100">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-base font-bold text-[#0B1E3F] mb-2 leading-snug">
                  {partner.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {partner.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={partner.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#114088] hover:text-[#EA580C] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Official Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-[10px] text-slate-400 font-medium">Certified</span>
              </div>
            </div>
          ))}
        </section>

        {/* Natural Internal Links to Tour Packages */}
        <section className="bg-slate-100 rounded-3xl p-6 sm:p-10 border border-slate-200">
          <h2 className="text-lg sm:text-2xl font-bold font-serif-brand text-[#0B1E3F] mb-2">
            Explore Packages Powered by Our Partners
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Benefit from pre-arranged flight seats, VIP passes, and verified stays across all our yatra packages departing Bangalore:
          </p>

          <div className="flex flex-wrap gap-2.5">
            <Link
              to="/tour-packages"
              className="text-xs font-bold text-[#114088] bg-white hover:bg-[#114088] hover:text-white px-4 py-2 rounded-xl border border-slate-200 transition-colors"
            >
              All Tour Packages from Bangalore &rarr;
            </Link>
            <Link
              to="/pilgrimage-tour-packages"
              className="text-xs font-bold text-[#114088] bg-white hover:bg-[#114088] hover:text-white px-4 py-2 rounded-xl border border-slate-200 transition-colors"
            >
              Pilgrimage Tour Packages &rarr;
            </Link>
            <Link
              to="/travel-resources"
              className="text-xs font-bold text-[#114088] bg-white hover:bg-[#114088] hover:text-white px-4 py-2 rounded-xl border border-slate-200 transition-colors"
            >
              Travel Resources &amp; Guides &rarr;
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
