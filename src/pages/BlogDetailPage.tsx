import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Calendar, User, Clock, ArrowLeft, ArrowRight, Tag, Share2, 
  Sparkles, CheckCircle2, MessageCircle, Mail, Send, ChevronRight,
  BookOpen, Bookmark, Plane, MapPin, Phone, HelpCircle
} from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogs';
import { ALL_PACKAGES } from '../data/packages';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface BlogDetailPageProps {
  onOpenEnquiry?: (packageTitle?: string) => void;
}

export function BlogDetailPage({ onOpenEnquiry }: BlogDetailPageProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [copiedLink, setCopiedLink] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Find post
  const post: BlogPost | undefined = useMemo(() => {
    return BLOG_POSTS.find(p => p.id === id || p.slug === id);
  }, [id]);

  // Related package
  const relatedPackage = useMemo(() => {
    if (!post?.relatedPackageId) return null;
    return ALL_PACKAGES.find(p => p.id === post.relatedPackageId) || null;
  }, [post]);

  // Other blog posts for sidebar & bottom
  const sidebarPosts = useMemo(() => {
    if (!post) return [];
    return BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-[70vh] bg-[#FBF9F5] flex items-center justify-center px-4 py-20">
        <div className="bg-white rounded-3xl p-10 max-w-md w-full text-center shadow-lg border border-gray-200">
          <BookOpen className="w-16 h-16 text-[#F59E0B] mx-auto mb-4 animate-bounce" />
          <h2 className="text-2xl font-bold font-serif-brand text-[#0B1E3F] mb-2">Article Not Found</h2>
          <p className="text-sm text-gray-500 mb-6">
            The blog article you are looking for might have been moved or removed.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-[#114088] hover:bg-[#0B1E3F] text-white text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Blogs</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
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
    <div className="flex-grow bg-[#FBF9F5] font-sans pb-24 selection:bg-[#F59E0B] selection:text-white">
      {/* ================= HERO HEADER (70%+ SCREEN COVERAGE) ================= */}
      <div className="bg-gradient-to-br from-[#0B1E3F] via-[#114088] to-[#09152C] text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative shadow-lg">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs & Back Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 text-xs sm:text-sm text-gray-300 font-medium">
            <div className="flex items-center gap-2 flex-wrap">
              <Link to="/" className="hover:text-[#F59E0B] transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <Link to="/blog" className="hover:text-[#F59E0B] transition-colors">Blog</Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-[#F59E0B] font-semibold truncate max-w-[250px] sm:max-w-md">{post.title}</span>
            </div>

            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-3.5 py-2 rounded-xl transition-colors backdrop-blur-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Back to Travel Journal</span>
            </Link>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-[#F59E0B] text-white text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-lg shadow-md">
              {post.category}
            </span>
            <span className="bg-white/10 backdrop-blur-md text-gray-200 text-xs font-medium px-3.5 py-1.5 rounded-lg flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
              {post.readTime}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-brand text-white leading-tight mb-6 tracking-tight max-w-5xl">
            {post.title}
          </h1>

          {/* Author Meta & Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 max-w-5xl">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-[#F59E0B]"
              />
              <div>
                <span className="font-bold text-white text-sm block leading-tight">{post.author.name}</span>
                <span className="text-xs text-gray-300">{post.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-gray-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
                <Calendar className="w-4 h-4 text-[#F59E0B]" />
                {post.date}
              </span>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white font-semibold px-3.5 py-1.5 rounded-lg transition-colors"
                title="Copy Article Link"
              >
                <Share2 className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>{copiedLink ? 'Link Copied!' : 'Share Article'}</span>
              </button>
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-lg transition-colors ${isBookmarked ? 'bg-amber-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                title="Bookmark article"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 70% MAIN CONTENT + 30% SIDEBAR LAYOUT ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* ================= LEFT MAIN CONTENT (70% WIDTH) ================= */}
          <main className="lg:col-span-8 bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10 overflow-hidden">
            {/* Main Cover Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-8 h-72 sm:h-[450px]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Key Takeaways Box */}
            <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent rounded-2xl p-6 border-l-4 border-[#F59E0B] mb-8">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#A63A1E] mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                Key Highlights & Takeaways
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-800 font-medium">
                {post.content.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Intro Quote */}
            <blockquote className="text-base sm:text-xl font-medium text-[#0B1E3F] leading-relaxed border-l-4 border-[#114088] pl-5 py-2 my-8 italic bg-blue-50/50 rounded-r-2xl">
              "{post.content.intro}"
            </blockquote>

            {/* Main Structured Sections */}
            <div className="space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
              {post.content.sections.map((section, idx) => (
                <div key={idx} className="pt-2">
                  <h2 className="text-xl sm:text-2xl font-bold font-serif-brand text-[#0B1E3F] mb-4 leading-snug">
                    {section.heading}
                  </h2>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    {section.body}
                  </p>
                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200/80 mb-6 shadow-inner">
                      <ul className="space-y-2.5 text-xs sm:text-sm text-gray-800">
                        {section.bulletPoints.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-[#114088] shrink-0 mt-2" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}

              {/* Conclusion Summary Box */}
              <div className="bg-blue-50/80 rounded-2xl p-6 sm:p-8 border border-blue-100 my-10 shadow-sm">
                <h3 className="text-lg font-bold font-serif-brand text-[#0B1E3F] mb-3">
                  Summary & Travel Guidance
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {post.content.conclusion}
                </p>
              </div>
            </div>

            {/* RECOMMENDED TOUR PACKAGE CARD INSIDE ARTICLE */}
            {relatedPackage && (
              <div className="my-10 bg-gradient-to-br from-[#0B1E3F] via-[#114088] to-[#0A1A36] rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F59E0B] bg-amber-500/20 px-3 py-1 rounded-md inline-block mb-3">
                      Recommended Yatra Package
                    </span>
                    <h4 className="text-xl sm:text-2xl font-extrabold font-serif-brand text-white mb-2">
                      {relatedPackage.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-4 line-clamp-2">
                      {relatedPackage.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs font-bold text-amber-300">
                      <span>Duration: {relatedPackage.duration}</span>
                      <span>•</span>
                      <span>Starting from {relatedPackage.price}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                    <button
                      onClick={() => onOpenEnquiry && onOpenEnquiry(relatedPackage.title)}
                      className="w-full sm:w-auto bg-[#F59E0B] hover:bg-amber-600 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all text-center transform active:scale-95"
                    >
                      Book This Yatra
                    </button>
                    <Link
                      to={`/package/${relatedPackage.id}`}
                      className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-colors text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Tags & Footer Navigation */}
            <div className="pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <Tag className="w-4 h-4 text-gray-400" />
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-lg">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold px-4 py-2.5 rounded-xl transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#114088]" />
                  <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
                </button>
                <Link
                  to="/blog"
                  className="bg-[#114088] hover:bg-[#0B1E3F] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors"
                >
                  Back to Blog Journal
                </Link>
              </div>
            </div>
          </main>

          {/* ================= RIGHT SIDEBAR (30% WIDTH) ================= */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Author Profile Card */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 text-center">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-amber-500/20 shadow-md"
              />
              <h3 className="text-base font-bold font-serif-brand text-[#0B1E3F] mb-1">
                {post.author.name}
              </h3>
              <p className="text-xs text-gray-500 mb-4">{post.author.role}</p>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Dedicated travel specialists and Vedic Purohits helping Indian families plan seamless, divine pilgrimages across India.
              </p>
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry()}
                className="w-full bg-[#114088] hover:bg-[#0B1E3F] text-white text-xs font-bold py-2.5 rounded-xl transition-colors shadow-sm"
              >
                Ask Yatra Specialist
              </button>
            </div>

            {/* Quick Enquiry Booking Card */}
            <div className="bg-gradient-to-br from-[#0B1E3F] to-[#114088] text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F59E0B] bg-amber-500/20 px-3 py-1 rounded-md inline-block mb-3">
                Bangalore Yatra Desk
              </span>
              <h3 className="text-lg font-extrabold font-serif-brand text-white mb-2">
                Planning a Yatra from Bangalore?
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                Get direct flight packages, 3-star hotel stays, pure vegetarian meals, and hassle-free VIP passes.
              </p>

              <div className="space-y-3 mb-6">
                <a
                  href="tel:+919187711649"
                  className="w-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors border border-white/10"
                >
                  <Phone className="w-4 h-4 text-[#F59E0B]" />
                  <span>Call: +91 9187711649</span>
                </a>
                <a
                  href={getWhatsAppUrl({ pathname: `/blog/${post.id}` })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Yatra Expert</span>
                </a>
              </div>
            </div>

            {/* Sidebar Recommended Articles Widget */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
              <h3 className="text-base font-bold font-serif-brand text-[#0B1E3F] mb-4 pb-3 border-b border-gray-100 flex items-center justify-between">
                <span>Recent Travel Articles</span>
                <BookOpen className="w-4 h-4 text-[#F59E0B]" />
              </h3>

              <div className="space-y-4">
                {sidebarPosts.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => navigate(`/blog/${item.id}`)}
                    className="flex gap-3 items-center group cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <span className="text-[10px] text-[#F59E0B] font-bold uppercase block mb-1">
                        {item.category}
                      </span>
                      <h4 className="text-xs font-bold text-gray-800 group-hover:text-[#2563EB] transition-colors line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Newsletter Widget */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
              <div className="inline-flex items-center gap-2 text-xs uppercase font-extrabold text-[#114088] bg-blue-50 px-3 py-1 rounded-md mb-3">
                <Mail className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Newsletter</span>
              </div>
              <h4 className="text-sm font-bold text-[#0B1E3F] mb-2">
                Subscribe for Yatra Stories
              </h4>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                Get monthly updates on VIP darshan passes and discounts.
              </p>

              {newsletterSuccess ? (
                <p className="text-xs font-bold text-emerald-600">✓ Subscribed successfully!</p>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-[#114088]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#114088] text-white text-xs font-bold py-2.5 rounded-xl hover:bg-[#0B1E3F] transition-colors"
                  >
                    Subscribe Now
                  </button>
                </form>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
