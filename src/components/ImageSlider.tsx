import React, { useState, useEffect, useRef } from 'react';

interface ImageSliderProps {
  images: string[];
  alt: string;
  imageAlts?: string[];
  interval?: number;
  className?: string;
  imgClassName?: string;
  dotsPosition?: 'bottom-right' | 'bottom-left' | 'top-right' | 'bottom-center';
  dotsClassName?: string;
  objectPosition?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
}

export function ImageSlider({
  images,
  alt,
  imageAlts,
  interval = 3000,
  className = 'w-full h-full',
  imgClassName = '',
  dotsPosition = 'bottom-right',
  dotsClassName,
  objectPosition = 'object-center',
  width = 600,
  height = 400,
  loading = 'lazy',
  fetchPriority = 'auto'
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Observe element visibility to avoid running background timers on off-screen cards
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '100px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Generate meaningful, descriptive SEO alt tags for each image
  const getSeoAlt = (index: number) => {
    if (imageAlts && imageAlts[index]) {
      return imageAlts[index];
    }
    // Clean up title to prevent redundant repetition
    const cleanTitle = alt
      .trim()
      .replace(/\s+(tour|flight)?\s*packages?(\s+from\s+bangalore)?$/i, '')
      .replace(/\s+yatra(\s+from\s+bangalore)?$/i, '');

    const variations = [
      `${cleanTitle} tour package from Bangalore`,
      `${cleanTitle} temple darshan and sightseeing from Bangalore`,
      `${cleanTitle} pilgrimage itinerary and hotel stay from Bangalore`,
      `${cleanTitle} yatra highlights from Bangalore`
    ];

    return variations[index % variations.length];
  };

  // Auto-scroll every `interval` ms only when visible on screen
  useEffect(() => {
    if (!images || images.length <= 1 || isPaused || !isInView) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [images, interval, isPaused, isInView]);

  if (!images || images.length === 0) {
    return null;
  }

  // Single image fallback
  if (images.length === 1) {
    return (
      <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
        <img
          src={images[0]}
          alt={getSeoAlt(0)}
          width={width}
          height={height}
          loading={loading}
          decoding="async"
          className={`w-full h-full object-cover ${objectPosition} ${imgClassName}`}
        />
      </div>
    );
  }

  const getDotsPositionClass = () => {
    if (dotsClassName) return dotsClassName;
    switch (dotsPosition) {
      case 'bottom-left':
        return 'bottom-2.5 left-2.5';
      case 'top-right':
        return 'top-3 right-3';
      case 'bottom-center':
        return 'bottom-2.5 left-1/2 -translate-x-1/2';
      case 'bottom-right':
      default:
        return 'bottom-2.5 right-2.5';
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides with smooth crossfade */}
      {images.map((img, index) => {
        const isActive = index === currentIndex;
        return (
          <img
            key={img + index}
            src={img}
            alt={getSeoAlt(index)}
            width={width}
            height={height}
            loading={index === 0 ? loading : 'lazy'}
            fetchPriority={index === 0 ? fetchPriority : 'low'}
            decoding="async"
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
            } ${objectPosition} ${imgClassName}`}
          />
        );
      })}

      {/* Corner Dots Indicator */}
      <div
        className={`absolute ${getDotsPositionClass()} z-20 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/50 backdrop-blur-xs border border-white/20 shadow-md`}
      >
        {images.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              type="button"
              aria-label={`View ${getSeoAlt(index)}`}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setCurrentIndex(index);
              }}
              className={`transition-all duration-300 cursor-pointer rounded-full ${
                isActive
                  ? 'w-4 h-1.5 bg-amber-400 shadow-xs'
                  : 'w-1.5 h-1.5 bg-white/60 hover:bg-white'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
