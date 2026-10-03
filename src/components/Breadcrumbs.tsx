import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  theme?: 'light' | 'dark';
}

export function Breadcrumbs({ items, className = '', theme }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [{ name: 'Home', url: '/' }, ...items];

  // Auto-detect theme if not explicitly provided
  const isDark = theme === 'dark' || className.includes('text-gray-300') || className.includes('text-white');

  // Schema.org BreadcrumbList
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': allItems.map((item, index) => {
      const isLast = index === allItems.length - 1;
      let absoluteItemUrl: string | undefined = undefined;

      if (item.url) {
        absoluteItemUrl = item.url.startsWith('http')
          ? item.url
          : `https://saisamarthtours.com${item.url.startsWith('/') ? '' : '/'}${item.url}`;
      } else if (isLast && typeof window !== 'undefined') {
        absoluteItemUrl = window.location.href;
      }

      return {
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.name,
        ...(absoluteItemUrl ? { 'item': absoluteItemUrl } : {})
      };
    })
  };

  return (
    <nav aria-label="Breadcrumb" className={`py-2 text-xs font-medium ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        {allItems.map((item, idx) => {
          const isLast = idx === allItems.length - 1;
          return (
            <li key={idx} className="flex items-center gap-1.5 sm:gap-2">
              {idx > 0 && (
                <ChevronRight 
                  className={`w-3.5 h-3.5 shrink-0 ${isDark ? 'text-white/40' : 'text-gray-400'}`} 
                />
              )}
              {idx === 0 && (
                <Link
                  to="/"
                  className={`flex items-center gap-1 transition-colors ${
                    isDark 
                      ? 'text-white/80 hover:text-[#F59E0B]' 
                      : 'text-[#114088] hover:text-[#EA580C]'
                  }`}
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </Link>
              )}
              {idx > 0 && !isLast && item.url && (
                <Link
                  to={item.url}
                  className={`transition-colors truncate max-w-[200px] ${
                    isDark 
                      ? 'text-white/80 hover:text-[#F59E0B]' 
                      : 'text-[#114088] hover:text-[#EA580C]'
                  }`}
                >
                  {item.name}
                </Link>
              )}
              {idx > 0 && !isLast && !item.url && (
                <span className={`truncate max-w-[200px] ${isDark ? 'text-white/80' : 'text-gray-600'}`}>
                  {item.name}
                </span>
              )}
              {idx > 0 && isLast && (
                <span 
                  className={`font-bold truncate max-w-[250px] sm:max-w-md ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`} 
                  aria-current="page"
                >
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
