"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HERO_SLIDES } from "@/lib/siteData";

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[65vh] md:h-[75vh] lg:h-[90vh] min-h-[420px] md:min-h-[500px] overflow-hidden">
      {/* Slides */}
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 overflow-hidden"
          style={{
            opacity: i === active ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            zIndex: i === active ? 1 : 0,
          }}
        >
          {/* Optimized Background Image */}
          <div
            className="absolute inset-0"
            style={{
              animation: i === active ? "zoomOut 6s ease-out forwards" : "none",
            }}
          >
            <Image
              src={slide.image}
              alt={slide.heading}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white font-bold text-3xl md:text-6xl lg:text-7xl leading-tight max-w-4xl">
          {HERO_SLIDES[active].heading}
        </h1>

        <p className="text-white/80 text-base md:text-xl mt-4 max-w-2xl leading-relaxed">
          {HERO_SLIDES[active].subtext}
        </p>

        <a
          href="/products"
          className="mt-6 inline-block bg-white text-gray-900 font-semibold text-base md:text-lg px-8 md:px-10 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-200"
        >
          View products
        </a>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-10 md:bottom-16 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="w-2.5 h-2.5 rounded-full transition-all duration-300"
            style={{
              backgroundColor: i === active ? "#15803d" : "#fff",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes zoomOut {
          0%   { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
