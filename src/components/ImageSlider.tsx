import React, { useState, useEffect, useRef } from 'react';

interface ImageSliderProps {
  images: string[];
  alt: string;
  interval?: number;
  className?: string;
  imgClassName?: string;
  dotsPosition?: 'bottom-right' | 'bottom-left' | 'top-right' | 'bottom-center';
  dotsClassName?: string;
  objectPosition?: string;
}

export function ImageSlider({
  images,
  alt,
  interval = 3000,
  className = 'w-full h-full',
  imgClassName = '',
  dotsPosition = 'bottom-right',
  dotsClassName,
  objectPosition = 'object-center'
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-scroll every `interval` ms (default 3000ms = 3 sec)
  useEffect(() => {
    if (!images || images.length <= 1 || isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [images, interval, isPaused]);

  if (!images || images.length === 0) {
    return null;
  }

  // Single image fallback
  if (images.length === 1) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img
          src={images[0]}
          alt={alt}
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
            alt={`${alt} slide ${index + 1}`}
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
              aria-label={`Go to slide ${index + 1}`}
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
