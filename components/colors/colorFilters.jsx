"use client";

import { useState } from "react";

export default function ColorFilters({ families, onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterClick = (family) => {
    setActiveFilter(family);
    onFilterChange(family);
  };

  return (
    <nav className="mb-8" aria-label="Color family filters">
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => handleFilterClick("All")}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
            activeFilter === "All"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          aria-pressed={activeFilter === "All"}
        >
          All Colors
        </button>
        {families.map((family) => (
          <button
            key={family}
            onClick={() => handleFilterClick(family)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              activeFilter === family
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            aria-pressed={activeFilter === family}
          >
            {family}
          </button>
        ))}
      </div>
    </nav>
  );
}
