import { useEffect } from 'react';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  jsonLd?: object | object[];
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage = 'https://saisamarthtours.com/shirdi-tour-hero-banner-desktop.webp',
  ogType = 'website',
  jsonLd
}: SEOHeadProps) {
  useEffect(() => {
    // 1. Document Title
    document.title = title;

    // Helper to update or create meta tags
    const setMeta = (attr: 'name' | 'property', key: string, value: string) => {
      let tag = document.querySelector(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', value);
    };

    // 2. Standard Meta
    setMeta('name', 'description', description);

    // 3. Canonical Link
    const currentUrl = canonical || window.location.href;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // Full absolute URL for og:image (required for WhatsApp & Facebook previews)
    const absoluteImage = ogImage.startsWith('http') 
      ? ogImage 
      : `https://saisamarthtours.com${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

    // 4. Open Graph Tags (WhatsApp, Facebook, LinkedIn)
    setMeta('property', 'og:site_name', 'Sai Samarth Tours');
    setMeta('property', 'og:locale', 'en_IN');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', currentUrl);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:image', absoluteImage);
    setMeta('property', 'og:image:secure_url', absoluteImage);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:image:alt', title);

    // 5. Twitter / X Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', absoluteImage);
    setMeta('name', 'twitter:image:alt', title);

    // 6. Structured Data (JSON-LD)
    const jsonLdScriptId = 'dynamic-page-jsonld';
    let scriptTag = document.getElementById(jsonLdScriptId) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = jsonLdScriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(jsonLd);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, canonical, ogImage, ogType, jsonLd]);

  return null;
}
