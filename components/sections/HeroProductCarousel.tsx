"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

const AUTOPLAY_MS = 4000;
const SWIPE_THRESHOLD = 50;

function CarouselSkeleton() {
  return (
    <div aria-hidden className="w-full">
      <div className="hero-product-stage relative w-full aspect-[5/3] border border-steel-200 shadow-el1 overflow-hidden">
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-steel-100 via-steel-50 to-steel-100 bg-[length:200%_100%]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[60%] w-[50%] rounded bg-steel-100" />
        </div>
      </div>
      <div className="mt-3">
        <div className="h-3 w-32 rounded bg-steel-100 animate-pulse" />
      </div>
    </div>
  );
}

export function HeroProductCarousel({ products }: { products: Product[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const swipeStartRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    setIsMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % products.length);
  }, [products.length]);

  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + products.length) % products.length);
  }, [products.length]);

  useEffect(() => {
    if (!isMounted || isReducedMotion) return;

    let timer: NodeJS.Timeout;
    
    const startTimer = () => {
      timer = setInterval(() => {
        if (!isHovered && document.visibilityState === "visible") {
          handleNext();
        }
      }, AUTOPLAY_MS);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        clearInterval(timer);
        startTimer();
      } else {
        clearInterval(timer);
      }
    };

    startTimer();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isMounted, isHovered, isReducedMotion, handleNext, activeIdx]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    swipeStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!swipeStartRef.current) return;
    const touch = e.changedTouches[0];
    const diffX = touch.clientX - swipeStartRef.current.x;
    const diffY = touch.clientY - swipeStartRef.current.y;
    
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > SWIPE_THRESHOLD) {
      if (diffX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    swipeStartRef.current = null;
  };

  const handleImageError = (src: string) => {
    setFailedImages((prev) => {
      const updated = new Set(prev);
      updated.add(src);
      return updated;
    });
  };

  if (!isMounted) {
    return <CarouselSkeleton />;
  }

  const currentProduct = products[activeIdx];
  const nextProduct = products[(activeIdx + 1) % products.length];

  return (
    <div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      className="ae-focus w-full select-none outline-none"
      role="region"
      aria-label="Product Showcase Carousel"
    >
      <div 
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="group/stage hero-product-stage relative w-full aspect-[5/3] border border-steel-200 shadow-el1 overflow-hidden cursor-grab active:cursor-grabbing"
      >
        {products.map((product, i) => {
          const isActive = i === activeIdx;
          const imageSrc = product.images[0];
          const hasError = failedImages.has(imageSrc);

          return (
            <div
              key={product.slug}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                isActive
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-95 z-0 pointer-events-none"
              }`}
              style={
                isReducedMotion
                  ? { transition: "none", transform: "none" }
                  : undefined
              }
            >
              <Link 
                href={`/products/${product.slug}`}
                className="relative block w-full h-full"
                tabIndex={isActive ? 0 : -1}
                aria-label={`View ${product.name} details`}
              >
                {hasError ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-steel-50 p-6 text-center">
                    <span className="font-mono text-xs uppercase tracking-wider text-steel-400">
                      Image not available
                    </span>
                    <span className="mt-2 font-heading text-lg font-bold text-navy-900">
                      {product.name}
                    </span>
                  </div>
                ) : (
                  <Image
                    src={imageSrc}
                    alt={`${product.name} — industrial machinery by Aashirwad Engineers`}
                    fill
                    priority={i === 0}
                    className="h-full w-full object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    onError={() => handleImageError(imageSrc)}
                  />
                )}
              </Link>
            </div>
          );
        })}

        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-navy-900/40 text-white transition-all duration-200 hover:bg-navy-900/75 hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 lg:opacity-0 lg:group-hover/stage:opacity-100 lg:focus-visible:opacity-100 ae-focus"
          aria-label="Previous Product"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-navy-900/40 text-white transition-all duration-200 hover:bg-navy-900/75 hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2 lg:opacity-0 lg:group-hover/stage:opacity-100 lg:focus-visible:opacity-100 ae-focus"
          aria-label="Next Product"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <div style={{ display: "none" }} aria-hidden="true">
        <Image
          src={nextProduct.images[0]}
          alt=""
          width={1200}
          height={720}
          priority={false}
          loading="eager"
        />
      </div>

      <div className="mt-4 flex items-center justify-between min-w-0">
        <Link
          href={`/products/${currentProduct.slug}`}
          className="ae-focus group min-w-0 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red hover:text-navy-900 transition-colors"
        >
          <span className="block truncate">
            Featured: {currentProduct.name} <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
