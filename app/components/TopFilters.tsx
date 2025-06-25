"use client";

import { useState } from "react";

interface TopFiltersProps {
  totalProducts: number;
  onSortChange: (sort: string) => void;
  onImageToggle: (showImages: boolean) => void;
  className?: string;
}

export const TopFilters = ({
  totalProducts,
  onSortChange,
  onImageToggle,
  className = "",
}: TopFiltersProps) => {
  const [sortBy, setSortBy] = useState("Bestselling");
  const [showImages, setShowImages] = useState(false);

  const handleToggle = () => {
    const newValue = !showImages;
    setShowImages(newValue);
    onImageToggle(newValue);
  };

  return (
    <div
      className={`flex flex-col sm:flex-row justify-between items-center p-2 sm:p-4 gap-4 sm:gap-0 ${className}`}
    >
      {/* Product Count */}
      <div
        className="text-gray-500 text-lg sm:text-xl"
        aria-live="polite"
        aria-atomic="true"
      >
        Show all products ({totalProducts})
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Sort Select */}
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-gray-500 text-base sm:text-lg">
            Sort by:
          </label>
          <select
            id="sort"
            className="px-2 py-1 text-gray-700 text-sm sm:text-base focus:outline-none"
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              onSortChange(e.target.value);
            }}
          >
            <option value="Bestselling">Bestselling</option>
          </select>
        </div>

        {/* Image Toggle Switch */}
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-base sm:text-lg">
            Show image only
          </span>
          <button
            onClick={handleToggle}
            role="switch"
            aria-checked={showImages}
            aria-label="Toggle image only view"
            className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
              showImages ? "bg-blue-600" : "bg-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <span
              className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform duration-200 ${
                showImages ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
