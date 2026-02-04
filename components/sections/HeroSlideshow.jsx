"use client";

import { useState, useEffect } from "react";
import { HERO_SLIDES } from "@/lib/siteData";

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full"
      style={{ height: "90vh", minHeight: "500px" }}
    >
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
          {/* Background image with zoom-out Ken Burns */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              animation: i === active ? "zoomOut 6s ease-out forwards" : "none",
            }}
          />
          {/* Dark overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>
      ))}

      {/* Content (on top) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white font-bold text-4xl md:text-6xl lg:text-7xl leading-tight max-w-4xl">
          {HERO_SLIDES[active].heading}
        </h1>
        <p className="text-white/80 text-lg md:text-xl mt-5 max-w-2xl leading-relaxed">
          {HERO_SLIDES[active].subtext}
        </p>
        <a
          href="/products"
          className="mt-8 inline-block bg-white text-gray-900 font-semibold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-200"
        >
          View products
        </a>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: i === active ? "#15803d" : "#fff",
            }}
          />
        ))}
      </div>

      {/* Keyframes for zoom-out */}
      <style>{`
        @keyframes zoomIn {
          0%   { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
