"use client";

import { useState } from "react";
import ColorFilters from "./colorFilters";
import ColorSwatch from "./colorSwatch";
import { colorFamilies, getColorsByFamily } from "@/lib/colors";

export default function ColorGrid({ initialColors }) {
  const [displayedColors, setDisplayedColors] = useState(initialColors);
  const [activeFamily, setActiveFamily] = useState("All");

  const handleFilterChange = (family) => {
    setActiveFamily(family);
    const filtered = getColorsByFamily(family);
    setDisplayedColors(filtered);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Color Collection
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explore our extensive palette of premium colors, carefully crafted
            for African environments. From vibrant statement shades to subtle
            neutrals, find the perfect color for your project.
          </p>
        </div>

        {/* Filters */}
        <ColorFilters
          families={colorFamilies}
          onFilterChange={handleFilterChange}
        />

        {/* Color Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {displayedColors.length}
            </span>{" "}
            color
            {displayedColors.length !== 1 ? "s" : ""}
            {activeFamily !== "All" && (
              <span className="ml-1">
                in{" "}
                <span className="font-semibold text-gray-900">
                  {activeFamily}
                </span>
              </span>
            )}
          </p>
        </div>

        {/* Color Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {displayedColors.map((color) => (
            <ColorSwatch key={color.id} color={color} />
          ))}
        </div>

        {/* No Results */}
        {displayedColors.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No colors found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
