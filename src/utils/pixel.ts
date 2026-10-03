/**
 * Meta (Facebook) Pixel helper utility
 * Pixel ID: 1117131814098484
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

/**
 * Track page view (used for SPA route transitions)
 */
export const trackPageView = () => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'PageView');
  }
};

/**
 * Track Lead event (e.g. when an enquiry form or booking request is submitted)
 */
export const trackLead = (params?: { content_name?: string; value?: number; currency?: string }) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', params);
  }
};

/**
 * Track Contact event (e.g. WhatsApp click, phone call click)
 */
export const trackContact = (params?: { content_name?: string }) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Contact', params);
  }
};

/**
 * Track custom events
 */
export const trackCustomEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, params);
  }
};
