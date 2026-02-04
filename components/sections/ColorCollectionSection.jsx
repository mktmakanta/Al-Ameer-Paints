import { ArrowRight } from "lucide-react";
import { COLOR_SWATCHES } from "@/lib/siteData";

export default function ColorCollectionSection() {
  return (
    <section className="w-full py-16" style={{ backgroundColor: "#edf5f0" }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <span className="section-label text-lg tracking-widest">
            COLOR COLLECTION
          </span>
          <a
            href="/products"
            className="btn-green-outline inline-flex items-center gap-2 px-5 py-2 rounded text-sm mt-3 sm:mt-0"
          >
            VIEW ALL COLORS <ArrowRight size={16} />
          </a>
        </div>

        {/* 4 × 2 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {COLOR_SWATCHES.map((swatch, i) => (
            <div
              key={i}
              className="relative bg-white rounded-sm overflow-hidden shadow-sm group"
              style={{ aspectRatio: "1" }}
            >
              <img
                src={swatch.image}
                alt={swatch.label ? swatch.label.name : `Color swatch ${i + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay on hover only */}
              {swatch.label && (
                <div
                  className="absolute inset-0 bg-gray-800/70 flex flex-col items-center justify-center text-center px-4
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <p className="text-white font-bold text-lg">
                    {swatch.label.name}
                  </p>
                  <p className="text-white/60 text-sm mt-1">
                    {swatch.label.code}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
