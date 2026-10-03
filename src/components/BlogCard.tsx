import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Bookmark, Sparkles, CheckCircle2, User } from 'lucide-react';
import { BlogPost } from '../data/blogs/types';

interface BlogCardProps {
  post: BlogPost;
  isBookmarked?: boolean;
  onToggleBookmark?: (id: string, e: React.MouseEvent) => void;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  post,
  isBookmarked = false,
  onToggleBookmark,
  featured = false
}) => {
  const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
    'Pilgrimage Guide': { bg: 'bg-amber-50', text: 'text-[#EA580C]', border: 'border-amber-200' },
    'Heritage & Faith': { bg: 'bg-blue-50', text: 'text-[#114088]', border: 'border-blue-200' },
    'International Holidays': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
    'Travel Tips': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
    'Food & Rituals': { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' }
  };

  const catStyle = categoryColors[post.category] || { bg: 'bg-amber-50', text: 'text-[#EA580C]', border: 'border-amber-200' };

  if (featured) {
    return (
      <article className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 grid grid-cols-1 lg:grid-cols-12 group transition-all duration-300 hover:shadow-2xl">
        {/* Left: Image (7 cols) */}
        <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-gray-900">
          <img
            src={post.image}
            alt={`${post.title} - Sai Samarth Tours`}
            width={800}
            height={500}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            onError={(e) => {
              e.currentTarget.src = '/shirdi-tour-hero-banner-desktop.webp';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="bg-[#EA580C] text-white text-[11px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Featured Article
            </span>
            <span className={`text-[11px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-xs border ${catStyle.bg} ${catStyle.text} ${catStyle.border}`}>
              {post.category}
            </span>
          </div>

          {onToggleBookmark && (
            <button
              onClick={(e) => onToggleBookmark(post.id, e)}
              className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-all active:scale-90 ${
                isBookmarked 
                  ? 'bg-[#F59E0B] text-white shadow-lg' 
                  : 'bg-black/40 text-white hover:bg-black/60'
              }`}
              title="Save to reading list"
              aria-label="Bookmark article"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
          )}

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
            <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
              <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
              <Calendar className="w-3.5 h-3.5 text-blue-300" />
              {post.date}
            </span>
          </div>
        </div>

        {/* Right: Content (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 text-xs text-gray-500 font-medium mb-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                width={28}
                height={28}
                className="w-7 h-7 rounded-full object-cover border border-amber-300 shadow-2xs"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author.name)}&background=114088&color=fff`;
                }}
              />
              <div>
                <span className="font-bold text-[#114088] block leading-tight">{post.author.name}</span>
                <span className="text-[10px] text-gray-400 block">{post.author.role}</span>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-serif-brand text-[#0B1E3F] mb-3 group-hover:text-[#2563EB] transition-colors leading-snug">
              <Link to={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
              {post.excerpt}
            </p>

            {/* Key takeaways snippet */}
            {post.content.keyTakeaways && post.content.keyTakeaways.length > 0 && (
              <div className="bg-amber-50/70 rounded-2xl p-4 border border-amber-200/80 mb-6">
                <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#A63A1E] block mb-2">
                  Key Yatra Insights:
                </span>
                <ul className="space-y-1.5 text-xs text-gray-700 font-medium">
                  {post.content.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B] shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <Link
              to={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 bg-[#114088] hover:bg-[#0B1E3F] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow-md transition-all group-hover:shadow-lg"
            >
              <span>Read Complete Guide</span>
              <ArrowRight className="w-4 h-4 text-[#F59E0B] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  // Standard Grid Card
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img
          src={post.image}
          alt={`${post.title} - Sai Samarth Tours Travel Guide`}
          width={400}
          height={224}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          onError={(e) => {
            e.currentTarget.src = '/pilgrimage-packages-category-card.webp';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <span className={`absolute top-3.5 left-3.5 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs border ${catStyle.bg} ${catStyle.text} ${catStyle.border}`}>
          {post.category}
        </span>

        {onToggleBookmark && (
          <button
            onClick={(e) => onToggleBookmark(post.id, e)}
            className={`absolute top-3.5 right-3.5 p-2 rounded-full backdrop-blur-md transition-all active:scale-90 ${
              isBookmarked 
                ? 'bg-[#F59E0B] text-white' 
                : 'bg-black/40 text-white hover:bg-black/60'
            }`}
            title="Save article"
            aria-label="Bookmark article"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        )}

        <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white text-[11px] font-semibold">
          <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/10">
            <Clock className="w-3 h-3 text-[#F59E0B]" />
            {post.readTime}
          </span>
          <span className="bg-black/50 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/10">
            {post.date}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        {/* Author info */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2.5">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            width={22}
            height={22}
            className="w-5 h-5 rounded-full object-cover border border-amber-200"
            onError={(e) => {
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author.name)}&background=114088&color=fff`;
            }}
          />
          <span className="font-semibold text-gray-700">{post.author.name}</span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold font-serif-brand text-[#0B1E3F] mb-2.5 group-hover:text-[#2563EB] transition-colors leading-snug line-clamp-2 min-h-[48px]">
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.slice(0, 5).map((tag, idx) => (
            <span key={idx} className="bg-blue-100 text-blue-600 text-[10px] font-semibold px-2 py-0.5 rounded border border-blue-200">
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Footer */}
        <div className="pt-3.5 border-t border-gray-100 flex items-center justify-between mt-auto">
          <Link
            to={`/blog/${post.slug}`}
            className="text-xs font-bold text-[#114088] group-hover:text-[#EA580C] transition-colors flex items-center gap-1.5"
          >
            Read Article
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <span className="text-[11px] text-gray-400 font-medium">
            Guide
          </span>
        </div>
      </div>
    </article>
  );
};
