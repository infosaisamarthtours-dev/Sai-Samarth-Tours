import React from 'react';
import { Link } from 'react-router-dom';
import { Package } from '../types';
import { BlogPost } from '../data/blogs';
import { DestinationData } from '../data/destinations';
import { 
  isValidInternalUrl, 
  getCanonicalPackageUrl, 
  getCanonicalBlogUrl, 
  getCanonicalDestinationUrl 
} from '../utils/internalLinking';
import { MapPin, ArrowRight, BookOpen, Plane, Compass } from 'lucide-react';

export interface InternalLinkItem {
  title: string;
  url: string;
  description?: string;
  badge?: string;
  image?: string;
  price?: string;
  duration?: string;
}

interface InternalLinkHubProps {
  title?: string;
  subtitle?: string;
  variant?: 'cards' | 'pills' | 'contextual';
  packages?: Package[];
  blogs?: BlogPost[];
  destinations?: DestinationData[];
  customItems?: InternalLinkItem[];
  className?: string;
  limit?: number;
}

export function InternalLinkHub({
  title = 'Related Yatra Guides & Packages',
  subtitle,
  variant = 'cards',
  packages,
  blogs,
  destinations,
  customItems,
  className = '',
  limit = 6
}: InternalLinkHubProps) {
  // Normalize items into a unified structure
  const items: InternalLinkItem[] = [];

  if (customItems) {
    for (const item of customItems) {
      if (isValidInternalUrl(item.url)) {
        items.push(item);
      }
    }
  }

  if (packages) {
    for (const pkg of packages) {
      const url = getCanonicalPackageUrl(pkg);
      if (isValidInternalUrl(url)) {
        items.push({
          title: pkg.title,
          url,
          description: pkg.description,
          badge: pkg.category.toUpperCase(),
          image: pkg.image,
          price: pkg.price,
          duration: pkg.duration
        });
      }
    }
  }

  if (blogs) {
    for (const blog of blogs) {
      const url = getCanonicalBlogUrl(blog);
      if (isValidInternalUrl(url)) {
        items.push({
          title: blog.title,
          url,
          description: blog.excerpt,
          badge: blog.category,
          image: blog.image,
          duration: blog.readTime
        });
      }
    }
  }

  if (destinations) {
    for (const dest of destinations) {
      const url = getCanonicalDestinationUrl(dest.id);
      if (isValidInternalUrl(url)) {
        items.push({
          title: `${dest.name} Tour Packages & Travel Guide`,
          url,
          description: dest.tagline,
          badge: dest.category.toUpperCase(),
          image: dest.heroImage
        });
      }
    }
  }

  const displayedItems = items.slice(0, limit);

  if (displayedItems.length === 0) {
    return null;
  }

  // Variant 1: Quick Pills for breadcrumbs/footers/headers
  if (variant === 'pills') {
    return (
      <div className={`my-4 ${className}`}>
        {title && (
          <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>{title}</span>
          </h4>
        )}
        <div className="flex flex-wrap gap-2">
          {displayedItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.url}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#114088] bg-blue-50/70 hover:bg-[#114088] hover:text-white px-3 py-1.5 rounded-full border border-blue-200/60 transition-colors duration-200"
              title={item.title}
            >
              <span>{item.title}</span>
              <ArrowRight className="w-3 h-3 opacity-70" />
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Variant 2: Contextual List
  if (variant === 'contextual') {
    return (
      <div className={`bg-white rounded-2xl p-5 border border-gray-100 shadow-sm ${className}`}>
        {title && (
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
            <h4 className="text-sm font-bold font-serif-brand text-[#0B1E3F] flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#EA580C]" />
              <span>{title}</span>
            </h4>
            {subtitle && <span className="text-[11px] text-gray-500">{subtitle}</span>}
          </div>
        )}
        <ul className="space-y-3">
          {displayedItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.url}
                className="group flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors"
              >
                {item.image && (
                  <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      width={56}
                      height={56}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  {item.badge && (
                    <span className="text-[9px] uppercase tracking-wider font-extrabold text-[#EA580C] block mb-0.5">
                      {item.badge}
                    </span>
                  )}
                  <h5 className="text-xs font-bold text-gray-800 group-hover:text-[#114088] transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h5>
                  {item.price && (
                    <span className="text-xs font-extrabold text-[#F59E0B] mt-0.5 block">
                      {item.price}
                    </span>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Variant 3: Rich Cards Grid (Default)
  return (
    <section className={`my-8 ${className}`}>
      {title && (
        <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div>
            <h3 className="text-lg sm:text-xl font-bold font-serif-brand text-[#0B1E3F]">
              {title}
            </h3>
            {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.url}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
          >
            {item.image && (
              <div className="relative h-36 w-full overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {item.badge && (
                  <span className="absolute top-2.5 left-2.5 bg-[#0B1E3F]/80 backdrop-blur-xs text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md">
                    {item.badge}
                  </span>
                )}
                {item.duration && (
                  <span className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded-md">
                    {item.duration}
                  </span>
                )}
              </div>
            )}

            <div className="p-4 flex flex-col flex-1">
              <h4 className="font-bold text-sm text-[#0B1E3F] group-hover:text-[#114088] transition-colors line-clamp-2 mb-1.5 leading-snug">
                {item.title}
              </h4>
              {item.description && (
                <p className="text-xs text-gray-500 line-clamp-2 mb-3 flex-1">
                  {item.description}
                </p>
              )}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
                {item.price ? (
                  <span className="text-xs font-bold text-[#F59E0B]">{item.price}</span>
                ) : (
                  <span className="text-xs font-medium text-gray-400">View Guide</span>
                )}
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#114088] group-hover:translate-x-0.5 transition-transform">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
