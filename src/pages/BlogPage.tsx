import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, X, Calendar, User, Clock, ArrowRight, BookOpen, Tag, 
  Share2, Bookmark, Sparkles, Plane, MapPin, CheckCircle2, 
  MessageCircle, Send, ChevronRight, Eye, Heart, Compass, Mail
} from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogs';
import { ALL_PACKAGES } from '../data/packages';
import { Package } from '../types';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface BlogPageProps {
  onOpenEnquiry?: (packageTitle?: string) => void;
}

export function BlogPage({ onOpenEnquiry }: BlogPageProps) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSuccess, setNewsletterSuccess] = useState<boolean>(false);

  // Categories list
  const categories = [
    'All',
    'Pilgrimage Guide',
    'Heritage & Faith',
    'International Holidays',
    'Travel Tips',
    'Food & Rituals'
  ];

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some(t => t.toLowerCase().includes(q)) ||
        post.author.name.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q)
      );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured post
  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];
  }, []);

  // Top tour packages to display as cards
  const featuredPackages: Package[] = useMemo(() => {
    const targetIds = ['shirdi-3-jyotirlinga', 'kashi-ayodhya-prayagraj', 'singapore-malaysia', 'kashmir-paradise'];
    const matched = ALL_PACKAGES.filter(p => targetIds.includes(p.id));
    return matched.length >= 4 ? matched.slice(0, 4) : ALL_PACKAGES.slice(0, 4);
  }, []);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleShare = (post: BlogPost, e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}/blog/${post.id}`;
    navigator.clipboard.writeText(url);
    alert('Article link copied to clipboard!');
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSuccess(false);
    }, 4000);
  };

  return (
    <div className="flex-grow bg-[#FBF9F5] font-sans pb-20 selection:bg-[#F59E0B] selection:text-white">
      {/* ================= HERO & SEARCH BANNER ================= */}
      <div className="relative bg-gradient-to-br from-[#0B1E3F] via-[#114088] to-[#09152C] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden shadow-xl">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-300 mb-4 font-medium">
            <Link to="/" className="hover:text-[#F59E0B] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#F59E0B] font-semibold">Travel Blog & Yatra Guides</span>
          </div>

          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#F59E0B] bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30 mb-5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sai Samarth Travel Journal</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif-brand mb-4 text-white tracking-tight leading-tight">
            Spiritual Yatras & International Holiday Guides
          </h1>

          <p className="text-sm sm:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8 font-normal">
            Discover expert travel tips, VIP temple darshan walkthroughs, heritage stories, and complete flight itinerary guides curated by Sai Samarth travel specialists.
          </p>

          {/* Live Search Bar */}
          <div className="max-w-2xl mx-auto relative shadow-2xl rounded-2xl overflow-hidden">
            <div className="relative flex items-center bg-white text-gray-800 rounded-2xl p-2 border-2 border-white/20 focus-within:border-[#F59E0B] transition-all">
              <Search className="w-5 h-5 text-gray-400 ml-3 shrink-0" />
              <input
                type="text"
                placeholder="Search by temple, city (Shirdi, Kashi, Singapore), or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-3 text-sm sm:text-base text-gray-900 placeholder-gray-400 bg-transparent focus:outline-none font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1.5 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors mr-1"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <span className="hidden sm:block bg-[#114088] text-white text-xs font-semibold px-4 py-2.5 rounded-xl ml-1 shrink-0">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'Article' : 'Articles'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CATEGORY FILTER TABS ================= */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 border ${
                  isActive
                    ? 'bg-[#114088] text-white border-[#114088] shadow-md shadow-blue-900/10'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 hover:text-[#114088]'
                }`}
              >
                {cat === 'All' && <BookOpen className="w-3.5 h-3.5 text-[#F59E0B]" />}
                {cat === 'Pilgrimage Guide' && <Sparkles className="w-3.5 h-3.5 text-amber-500" />}
                {cat === 'Heritage & Faith' && <MapPin className="w-3.5 h-3.5 text-red-500" />}
                {cat === 'International Holidays' && <Plane className="w-3.5 h-3.5 text-blue-500" />}
                {cat === 'Travel Tips' && <Compass className="w-3.5 h-3.5 text-emerald-500" />}
                {cat === 'Food & Rituals' && <Heart className="w-3.5 h-3.5 text-rose-500" />}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* ================= FEATURED HERO POST CARD ================= */}
        {selectedCategory === 'All' && !searchQuery && featuredPost && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] animate-pulse" />
              <h2 className="text-xs uppercase font-extrabold tracking-widest text-gray-500">
                Featured Guide
              </h2>
            </div>

            <div 
              onClick={() => navigate(`/blog/${featuredPost.id}`)}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 grid grid-cols-1 lg:grid-cols-12 group hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Image Container */}
              <div className="lg:col-span-7 relative h-72 lg:h-auto overflow-hidden min-h-[320px]">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />
                
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="bg-[#F59E0B] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg shadow-md">
                    {featuredPost.category}
                  </span>
                  <span className="bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <button
                  onClick={(e) => toggleBookmark(featuredPost.id, e)}
                  className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-transform active:scale-95 ${
                    bookmarkedIds.includes(featuredPost.id)
                      ? 'bg-amber-500 text-white shadow-lg'
                      : 'bg-black/40 text-white hover:bg-black/60'
                  }`}
                  aria-label="Bookmark post"
                >
                  <Bookmark className={`w-4 h-4 ${bookmarkedIds.includes(featuredPost.id) ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Content Container */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-3 text-xs text-gray-500 font-medium mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#F59E0B]" />
                      {featuredPost.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5 text-[#114088] font-semibold">
                      <User className="w-3.5 h-3.5 text-[#2563EB]" />
                      {featuredPost.author.name}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold font-serif-brand text-[#0B1E3F] mb-4 group-hover:text-[#2563EB] transition-colors leading-snug">
                    {featuredPost.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="bg-amber-500/10 rounded-2xl p-4 border border-amber-500/20 mb-6">
                    <span className="text-xs uppercase font-extrabold tracking-wider text-[#A63A1E] block mb-2">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-gray-700 font-medium">
                      {featuredPost.content.keyTakeaways.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 bg-[#114088] group-hover:bg-[#0B1E3F] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow-md transition-all">
                    <span>Read Full Article Page</span>
                    <ArrowRight className="w-4 h-4 text-[#F59E0B] group-hover:translate-x-1 transition-transform" />
                  </span>

                  <button
                    onClick={(e) => handleShare(featuredPost, e)}
                    className="p-2.5 text-gray-500 hover:text-[#114088] hover:bg-gray-100 rounded-xl transition-colors text-xs font-semibold flex items-center gap-1"
                    title="Share Article"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= ALL BLOG POST CARDS GRID ================= */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-extrabold font-serif-brand text-[#0B1E3F]">
                {selectedCategory === 'All' ? 'Latest Travel Articles' : `${selectedCategory} Articles`}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                Explore in-depth spiritual guides, itineraries, and vacation insights
              </p>
            </div>
            <span className="text-xs font-semibold text-gray-500 bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm self-start sm:self-auto">
              Showing {filteredPosts.length} of {BLOG_POSTS.length} posts
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-sm my-8">
              <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4 animate-bounce" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">No articles found matching your criteria</h3>
              <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
                Try searching for different terms like "Shirdi", "Kashi", "Singapore", or reset your category filter.
              </p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="bg-[#114088] text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#0B1E3F] transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => {
                const isBookmarked = bookmarkedIds.includes(post.id);
                return (
                  <article
                    key={post.id}
                    onClick={() => navigate(`/blog/${post.id}`)}
                    className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer"
                  >
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden bg-gray-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      <span className="absolute top-4 left-4 bg-[#F59E0B] text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-md shadow-md">
                        {post.category}
                      </span>

                      <button
                        onClick={(e) => toggleBookmark(post.id, e)}
                        className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md transition-transform active:scale-90 ${
                          isBookmarked ? 'bg-amber-500 text-white' : 'bg-black/40 text-white hover:bg-black/60'
                        }`}
                        title="Save to reading list"
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
                      </button>

                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
                        <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md">
                          <Clock className="w-3 h-3 text-[#F59E0B]" />
                          {post.readTime}
                        </span>
                        <span className="bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md">
                          {post.date}
                        </span>
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-5 h-5 rounded-full object-cover"
                        />
                        <span className="font-semibold text-gray-700">{post.author.name}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold font-serif-brand text-[#0B1E3F] mb-3 group-hover:text-[#2563EB] transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {post.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-600 text-[10px] font-semibold px-2.5 py-0.5 rounded-md">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Footer Actions */}
                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                        <span className="text-xs font-bold text-[#114088] group-hover:text-[#F59E0B] transition-colors flex items-center gap-1.5">
                          Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <span className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5" /> Full Page
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>

        {/* ================= FEATURED TOUR PACKAGES CARDS BAR ================= */}
        <div className="my-16 bg-gradient-to-br from-[#0B1E3F] via-[#114088] to-[#0A1A36] rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-wider text-[#F59E0B] bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/20 mb-3">
                <Plane className="w-3.5 h-3.5" />
                <span>Featured Yatra Packages</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-serif-brand text-white">
                Book Your Sacred Journey
              </h2>
              <p className="text-sm text-gray-300 max-w-2xl mt-2">
                Turn your blog reading into an unforgettable pilgrimage or vacation. Direct flight packages from Bangalore with 3-star hotel stay, all meals & Purohit darshan passes.
              </p>
            </div>

            <Link
              to="/pilgrimage-packages"
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-amber-600 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow-lg transition-all transform active:scale-95 shrink-0 self-start md:self-auto"
            >
              <span>View All Tour Packages</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {featuredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white text-gray-900 rounded-2xl overflow-hidden shadow-lg border border-white/10 flex flex-col group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#0B1E3F] text-[#F59E0B] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md shadow-md">
                    {pkg.duration}
                  </span>
                  <div className="absolute bottom-2 right-3 bg-black/70 backdrop-blur-sm text-white font-extrabold text-xs px-2.5 py-1 rounded-md">
                    {pkg.price}
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-sm font-bold font-serif-brand text-[#0B1E3F] mb-2 line-clamp-2 group-hover:text-[#2563EB] transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="mt-auto pt-3 border-t border-gray-100 flex items-center gap-2">
                    <button
                      onClick={() => onOpenEnquiry && onOpenEnquiry(pkg.title)}
                      className="flex-1 bg-[#114088] hover:bg-[#0B1E3F] text-white text-xs font-bold py-2 px-3 rounded-lg shadow-sm transition-colors text-center"
                    >
                      Book Yatra
                    </button>
                    <Link
                      to={`/package/${pkg.id}`}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold py-2 px-3 rounded-lg transition-colors text-center"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= NEWSLETTER & WHATSAPP BAR ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-16">
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-wider text-[#114088] bg-blue-50 px-3 py-1 rounded-md mb-4">
                <Mail className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Stay Inspired & Informed</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold font-serif-brand text-[#0B1E3F] mb-3">
                Subscribe for Yatra Articles & Special Offers
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                Get monthly travel stories, temple VIP passes update, and early bird discounts on Bangalore flight packages delivered straight to your inbox.
              </p>
            </div>

            {newsletterSuccess ? (
              <div className="bg-emerald-50 text-emerald-800 rounded-2xl p-4 border border-emerald-200 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <span className="font-bold text-sm">Subscription Confirmed!</span>
                  <p className="text-xs text-emerald-700">Thank you for joining Sai Samarth Travel Journal community.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-grow px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#114088] focus:bg-white transition-all font-medium"
                />
                <button
                  type="submit"
                  className="bg-[#114088] hover:bg-[#0B1E3F] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 shrink-0 transform active:scale-95"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5 text-[#F59E0B]" />
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#25D366]/10 via-emerald-500/5 to-emerald-900/10 rounded-3xl p-6 sm:p-8 border border-emerald-500/20 shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-md mb-4">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instant Yatra Guidance</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold font-serif-brand text-[#0B1E3F] mb-3">
                Need Help Planning Your Custom Yatra?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                Chat directly with our Bangalore Yatra executives on WhatsApp for custom dates, group discounts, or elder assistance.
              </p>
            </div>

            <a
              href={getWhatsAppUrl({ pathname: '/blog' })}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2.5 transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
