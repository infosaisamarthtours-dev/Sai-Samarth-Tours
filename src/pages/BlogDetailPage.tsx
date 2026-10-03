import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Calendar, User, Clock, ArrowLeft, ArrowRight, Tag, Share2, 
  Sparkles, CheckCircle2, MessageCircle, Mail, Send, ChevronRight, ChevronDown,
  BookOpen, Bookmark, Plane, MapPin, Phone, HelpCircle, List,
  ExternalLink, Lightbulb, AlertCircle, Table as TableIcon
} from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogs';
import { ALL_PACKAGES } from '../data/packages';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { renderRichText } from '../utils/richText';

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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  // Find current post by id or slug
  const post: BlogPost | undefined = useMemo(() => {
    return BLOG_POSTS.find(p => p.id === id || p.slug === id);
  }, [id]);

  // Find related tour package
  const relatedPackage = useMemo(() => {
    if (!post?.relatedPackageId) return null;
    return ALL_PACKAGES.find(p => p.id === post.relatedPackageId) || null;
  }, [post]);

  // Sidebar other blog posts
  const sidebarPosts = useMemo(() => {
    if (!post) return [];
    return BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 4);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-[70vh] bg-[#FBF9F5] flex items-center justify-center px-4 py-20">
        <div className="bg-white rounded-3xl p-10 max-w-md w-full text-center shadow-lg border border-gray-200">
          <BookOpen className="w-16 h-16 text-[#F59E0B] mx-auto mb-4 animate-bounce" />
          <h2 className="text-2xl font-bold font-serif-brand text-[#0B1E3F] mb-2">Article Not Found</h2>
          <p className="text-sm text-gray-500 mb-6">
            The travel guide or pilgrimage article you are looking for might have been moved.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-[#114088] hover:bg-[#0B1E3F] text-white text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Travel Guides</span>
          </Link>
        </div>
      </div>
    );
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': post.title,
    'description': post.excerpt,
    'image': post.image.startsWith('http') ? post.image : `https://saisamarthtours.com${post.image}`,
    'author': {
      '@type': 'Person',
      'name': post.author.name
    },
    'publisher': {
      '@type': 'TravelAgency',
      'name': 'Sai Samarth Tours',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://saisamarthtours.com/sai-samarth-tours-logo.webp'
      }
    },
    'datePublished': post.date,
    'mainEntityOfPage': `https://saisamarthtours.com/blog/${post.slug}`
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {
        navigator.clipboard.writeText(window.location.href);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
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

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex-grow bg-[#F8FAFC] font-sans pb-16 sm:pb-24 selection:bg-[#F59E0B] selection:text-white">
      <SEOHead
        title={`${post.title} | Sai Samarth Tours`}
        description={post.excerpt}
        canonical={`https://saisamarthtours.com/blog/${post.slug}`}
        ogImage={post.image}
        ogType="article"
        jsonLd={articleJsonLd}
      />

      {/* ================= EDITORIAL TOP HERO SECTION ================= */}
      <div className="bg-white border-b border-slate-200/80 pt-3 sm:pt-6 lg:pt-8 pb-4 sm:pb-8 px-3.5 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="mb-2 sm:mb-3">
            <Breadcrumbs
              items={[
                { name: 'Travel Blog', url: '/blog' },
                { name: post.category, url: '/blog' },
                { name: post.title }
              ]}
            />
          </div>

          {/* Category Pill & Reading Time */}
          <div className="flex flex-wrap items-center gap-2 mb-2.5 sm:mb-4">
            <span className="bg-[#114088] text-white text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-xs">
              {post.category}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600 text-xs font-semibold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#EA580C]" />
              {post.readTime}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600 text-xs font-semibold flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#114088]" />
              {post.date}
            </span>
          </div>

          {/* Main Large Editorial Title */}
          <h1 className="text-xl sm:text-3xl lg:text-5xl font-extrabold text-[#0B1E3F] leading-[1.25] sm:leading-[1.2] mb-3 sm:mb-5 tracking-tight font-serif-brand">
            {post.title}
          </h1>

          {/* Author Details & Quick Share Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 py-2.5 sm:py-3.5 border-y border-slate-200/80">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                width={40}
                height={40}
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-[#EA580C]/80 shadow-xs"
              />
              <div>
                <span className="font-extrabold text-[#0B1E3F] text-xs sm:text-sm block leading-tight">
                  By {post.author.name}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  {post.author.role} • Sai Samarth Tours
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-[#0B1E3F] font-bold px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl transition-colors cursor-pointer text-xs"
                title="Share this article"
              >
                <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#114088]" />
                <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
              </button>
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-1.5 sm:p-2 rounded-xl transition-colors cursor-pointer ${isBookmarked ? 'bg-amber-500 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                title="Bookmark article"
              >
                <Bookmark className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>

          {/* Lead Intro Paragraph with Rich Contextual Hyperlinks */}
          <div className="mt-3.5 sm:mt-5 text-sm sm:text-lg text-slate-700 leading-relaxed font-sans font-normal border-l-4 border-[#114088] pl-3 sm:pl-4 py-1 bg-slate-50/70 rounded-r-xl">
            {renderRichText(post.content.intro)}
          </div>

          {/* Quick Jump / Table of Contents Pills */}
          <div className="mt-3.5 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-100">
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              <List className="w-3.5 h-3.5 text-[#114088]" />
              <span>Jump to Section:</span>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {post.content.sections.map((section, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(`section-${idx + 1}`)}
                  className="text-[11px] sm:text-xs font-semibold bg-slate-100 hover:bg-[#114088] hover:text-white text-slate-700 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg transition-colors cursor-pointer text-left"
                >
                  {section.heading.replace(/^\d+\.\s*/, '')}
                </button>
              ))}
              {post.content.summaryTable && (
                <button
                  onClick={() => scrollToSection('summary-table')}
                  className="text-[11px] sm:text-xs font-semibold bg-teal-50 hover:bg-teal-700 hover:text-white text-teal-800 border border-teal-200 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  📊 Summary Table
                </button>
              )}
              {post.content.faqs && post.content.faqs.length > 0 && (
                <button
                  onClick={() => scrollToSection('faqs')}
                  className="text-[11px] sm:text-xs font-semibold bg-amber-50 hover:bg-amber-600 hover:text-white text-amber-800 border border-amber-200 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  ❓ FAQs
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= 2-COLUMN EDITORIAL CONTAINER ================= */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-3 sm:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
          
          {/* ================= MAIN COLUMN (8 COLS) ================= */}
          <main className="lg:col-span-8 bg-white rounded-2xl shadow-sm border border-slate-200/90 p-3.5 sm:p-8 lg:p-10">
            
            {/* Primary Featured Image with Authentic Caption */}
            <figure className="mb-5 sm:mb-8">
              <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100 max-h-[480px]">
                <img
                  src={post.image}
                  alt={`${post.title} - Sai Samarth Tours Pilgrimage & Travel Guide`}
                  width={900}
                  height={500}
                  loading="eager"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <figcaption className="text-xs sm:text-sm text-slate-500 text-center mt-2.5 italic">
                {post.title} — Curated by Sai Samarth Tours Yatra Desk, Bangalore.
              </figcaption>
            </figure>

            {/* Key Highlights & Takeaways Box */}
            <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent rounded-2xl p-3.5 sm:p-6 border-l-4 border-[#F59E0B] mb-6 sm:mb-10">
              <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#A63A1E] mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                Key Highlights &amp; Essential Takeaways
              </h3>
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                {post.content.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span>{renderRichText(item)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= BODY SECTIONS ================= */}
            <div className="space-y-6 sm:space-y-10 lg:space-y-12">
              {post.content.sections.map((section, idx) => (
                <article key={idx} id={`section-${idx + 1}`} className="scroll-mt-24">
                  {/* Section Heading */}
                  <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold font-serif-brand text-[#0B1E3F] mb-1.5 sm:mb-2 leading-snug">
                    {section.heading}
                  </h2>

                  {/* Optional Subheading */}
                  {section.subheading && (
                    <h3 className="text-[11px] sm:text-xs font-bold text-[#EA580C] uppercase tracking-wide mb-2 sm:mb-3">
                      {section.subheading}
                    </h3>
                  )}

                  {/* Section Paragraph with In-Text Hyperlinks */}
                  <p className="text-xs sm:text-base text-slate-700 leading-relaxed mb-3 sm:mb-4 font-normal">
                    {renderRichText(section.body)}
                  </p>

                  {/* In-Article Image with Caption (if present) */}
                  {section.image && (
                    <figure className="my-3 sm:my-6">
                      <div className="rounded-xl overflow-hidden border border-slate-200/80 shadow-xs max-h-[400px]">
                        <img
                          src={section.image}
                          alt={section.imageCaption || section.heading}
                          width={800}
                          height={450}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {section.imageCaption && (
                        <figcaption className="text-[11px] sm:text-xs text-slate-500 text-center mt-1.5 italic">
                          {section.imageCaption}
                        </figcaption>
                      )}
                    </figure>
                  )}

                  {/* Section Bullet Points with Bold Titles */}
                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <div className="bg-slate-50 rounded-xl p-3 sm:p-5 border border-slate-200/80 my-3 sm:my-4 shadow-2xs">
                      <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-800">
                        {section.bulletPoints.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#114088] shrink-0 mt-1.5" />
                            <span className="leading-relaxed">{renderRichText(pt)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Highlighted Callout / Tip Box */}
                  {section.tips && (
                    <div className="my-3 sm:my-4 p-3 sm:p-5 rounded-xl bg-teal-50/80 border-l-4 border-teal-600 text-teal-950 text-xs sm:text-sm font-medium leading-relaxed shadow-2xs flex items-start gap-2.5">
                      <Lightbulb className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                      <div>{renderRichText(section.tips)}</div>
                    </div>
                  )}
                </article>
              ))}
            </div>

            {/* ================= SUMMARY / COMPARISON TABLE ================= */}
            {post.content.summaryTable && (
              <section id="summary-table" className="scroll-mt-24 my-6 sm:my-10 pt-4 sm:pt-6 border-t border-slate-200">
                <div className="flex items-center gap-1.5 mb-2">
                  <TableIcon className="w-4 h-4 text-teal-700" />
                  <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-teal-800">
                    Comprehensive Overview
                  </span>
                </div>
                <h2 className="text-lg sm:text-2xl font-bold font-serif-brand text-[#0B1E3F] mb-3">
                  {post.content.summaryTable.title || 'Summary & Schedule Guide'}
                </h2>

                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-teal-700 text-white font-bold">
                        {post.content.summaryTable.headers.map((hdr, hIdx) => (
                          <th key={hIdx} className="py-2.5 px-3 sm:py-3 sm:px-4 uppercase text-[10px] sm:text-xs tracking-wider border-b border-teal-800 whitespace-nowrap">
                            {hdr}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {post.content.summaryTable.rows.map((row, rIdx) => (
                        <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70 hover:bg-teal-50/40 transition-colors'}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className={`py-2.5 px-3 sm:py-3 sm:px-4 text-slate-700 leading-relaxed text-[11px] sm:text-xs md:text-sm ${cIdx === 0 ? 'font-bold text-[#0B1E3F]' : ''}`}>
                              {renderRichText(cell)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* ================= FREQUENTLY ASKED QUESTIONS (FAQ) ================= */}
            {post.content.faqs && post.content.faqs.length > 0 && (
              <section id="faqs" className="scroll-mt-24 my-6 sm:my-10 pt-4 sm:pt-6 border-t border-slate-200">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <HelpCircle className="w-4 h-4 text-[#114088]" />
                  <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#114088]">
                    Common Traveler Queries
                  </span>
                </div>
                <h2 className="text-lg sm:text-2xl font-bold font-serif-brand text-[#0B1E3F] mb-4">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-2 sm:space-y-3">
                  {post.content.faqs.map((faq, fIdx) => {
                    const isOpen = openFaqIndex === fIdx;
                    return (
                      <div
                        key={fIdx}
                        className="rounded-xl border border-slate-200 overflow-hidden transition-all bg-white"
                      >
                        <button
                          onClick={() => toggleFaq(fIdx)}
                          className="w-full text-left p-3 sm:p-4 flex items-center justify-between gap-3 font-bold text-xs sm:text-base text-[#0B1E3F] hover:bg-slate-50/70 transition-colors cursor-pointer"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-[#114088] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-3 pb-3 sm:px-4 sm:pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-2.5 bg-slate-50/50">
                            {renderRichText(faq.answer)}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* ================= RECOMMENDED YATRA PACKAGE CARD ================= */}
            {relatedPackage && (
              <section id="booking-cta" className="my-6 sm:my-10 bg-gradient-to-br from-[#0B1E3F] via-[#114088] to-[#0A1A36] rounded-2xl p-4 sm:p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
                  <div className="flex-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F59E0B] bg-amber-500/20 px-2.5 py-0.5 rounded-md inline-block mb-2">
                      Featured Tour Package from Bangalore
                    </span>
                    <h3 className="text-lg sm:text-2xl font-extrabold font-serif-brand text-white mb-1.5 sm:mb-2">
                      {relatedPackage.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                      {relatedPackage.description}
                    </p>
                    <div className="flex items-center gap-3 text-xs font-bold text-amber-300">
                      <span>⏱️ {relatedPackage.duration}</span>
                      <span>•</span>
                      <span>💰 From {relatedPackage.price}</span>
                      <span>•</span>
                      <span>✈️ BLR Flights</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 shrink-0 w-full md:w-auto">
                    <button
                      onClick={() => onOpenEnquiry && onOpenEnquiry(relatedPackage.title)}
                      className="w-full sm:w-auto bg-[#F59E0B] hover:bg-amber-600 text-[#0B1E3F] font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg transition-all text-center transform active:scale-95 cursor-pointer"
                    >
                      Book This Yatra
                    </button>
                    <Link
                      to={`/package/${relatedPackage.id}`}
                      className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-4 py-3 rounded-xl transition-colors text-center border border-white/20"
                    >
                      View Itinerary &rarr;
                    </Link>
                  </div>
                </div>
              </section>
            )}

            {/* Conclusion Summary Box */}
            <div className="bg-slate-50 rounded-2xl p-4 sm:p-8 border border-slate-200 my-5 sm:my-8">
              <h3 className="text-sm sm:text-lg font-bold font-serif-brand text-[#0B1E3F] mb-2 sm:mb-3">
                Summary &amp; Yatra Planning Guidance
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {renderRichText(post.content.conclusion)}
              </p>
            </div>

            {/* Tags & Bottom Action Footer */}
            <div className="pt-4 sm:pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-slate-400" />
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="bg-slate-100 text-slate-700 text-xs font-semibold px-2 py-0.5 rounded-md">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-[#0B1E3F] text-xs font-bold px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#114088]" />
                  <span>{copiedLink ? 'Copied Link' : 'Share Guide'}</span>
                </button>
                <Link
                  to="/blog"
                  className="bg-[#114088] hover:bg-[#0B1E3F] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors"
                >
                  Back to All Guides
                </Link>
              </div>
            </div>
          </main>

          {/* ================= SIDEBAR (4 COLS) ================= */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Quick Consultation Yatra Desk */}
            <div className="bg-gradient-to-br from-[#0B1E3F] to-[#114088] text-white rounded-2xl p-6 shadow-md border border-blue-900/50">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F59E0B] bg-amber-500/20 px-3 py-1 rounded-md inline-block mb-3">
                Bangalore Yatra Desk
              </span>
              <h3 className="text-lg font-extrabold font-serif-brand text-white mb-2">
                Planning a Pilgrimage or Holiday?
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed mb-5">
                Speak directly with our senior tour specialists in Yelahanka New Town for flight bookings, VIP darshan passes, and custom dates.
              </p>

              <div className="space-y-2.5">
                <a
                  href="tel:+919187711649"
                  className="w-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors border border-white/10"
                >
                  <Phone className="w-4 h-4 text-[#F59E0B]" />
                  <span>Call: +91 91877 11649</span>
                </a>
                <a
                  href={getWhatsAppUrl({ pathname: `/blog/${post.slug}` })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Yatra Expert</span>
                </a>
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry(post.title)}
                  className="w-full bg-[#EA580C] hover:bg-[#cd4700] text-white text-xs font-bold py-3 px-4 rounded-xl transition-colors cursor-pointer text-center"
                >
                  Request Instant Quote
                </button>
              </div>
            </div>

            {/* Author Profile Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/90 text-center">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-4 border-amber-500/20 shadow-xs"
              />
              <h3 className="text-base font-bold font-serif-brand text-[#0B1E3F] mb-1">
                {post.author.name}
              </h3>
              <p className="text-xs text-slate-500 font-semibold mb-3">{post.author.role}</p>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Assisting Bangalore devotees and families with verified temple itineraries, senior citizen wheelchair care, and VIP darshan passes.
              </p>
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry(post.title)}
                className="w-full bg-slate-100 hover:bg-[#114088] hover:text-white text-[#114088] text-xs font-bold py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                Ask Yatra Specialist
              </button>
            </div>

            {/* Recommended Related Articles */}
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/90">
              <h3 className="text-sm font-bold font-serif-brand text-[#0B1E3F] mb-4 pb-3 border-b border-slate-100 flex items-center justify-between">
                <span>More Travel Guides</span>
                <BookOpen className="w-4 h-4 text-[#EA580C]" />
              </h3>

              <div className="space-y-4">
                {sidebarPosts.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => navigate(`/blog/${item.slug}`)}
                    className="flex gap-3 items-center group cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform border border-slate-100"
                    />
                    <div>
                      <span className="text-[10px] text-[#EA580C] font-extrabold uppercase block mb-1">
                        {item.category}
                      </span>
                      <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#2563EB] transition-colors line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/90">
              <div className="inline-flex items-center gap-2 text-[10px] uppercase font-extrabold text-[#114088] bg-blue-50 px-2.5 py-1 rounded-md mb-3">
                <Mail className="w-3 h-3 text-[#EA580C]" />
                <span>Yatra Newsletter</span>
              </div>
              <h4 className="text-sm font-bold text-[#0B1E3F] mb-1.5">
                Never Miss Darshan Timings
              </h4>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                Receive monthly updates on festival passes, flight deals, and auspicious darshan dates.
              </p>

              {newsletterSuccess ? (
                <p className="text-xs font-bold text-emerald-600 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                  ✓ Subscribed successfully!
                </p>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#114088]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#114088] hover:bg-[#0B1E3F] text-white text-xs font-bold py-2.5 rounded-xl transition-colors cursor-pointer"
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
