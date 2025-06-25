"use client";

import { useState } from "react";

interface TopFiltersProps {
  totalProducts: number;
  onSortChange: (sort: string) => void;
  onImageToggle: (showImages: boolean) => void;
}

export const TopFilters = ({
  totalProducts,
  onSortChange,
  onImageToggle,
}: TopFiltersProps) => {
  const [sortBy, setSortBy] = useState("Bestselling");
  const [showImages, setShowImages] = useState(false);

  return (
    <div className="flex justify-between items-center w-[589px] h-16 mx-auto">
      <div className="text-gray-500 text-xl font-normal">
        Show all products ({totalProducts})
      </div>
      <div className="flex space-x-8">
        <div className="flex items-center">
          <span className="text-gray-500 text-xl font-normal">Sort by:</span>
          <select
            className="ml-2 text-gray-500 text-xl font-normal bg-transparent"
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              onSortChange(e.target.value);
            }}
          >
            <option>Bestselling</option>
          </select>
        </div>
        <div className="flex items-center">
          <span className="text-gray-500 text-xl font-normal">
            Show image only
          </span>
          <div
            className="ml-2 w-12 h-7 bg-gray-200 rounded-full relative"
            onClick={() => {
              setShowImages(!showImages);
              onImageToggle(!showImages);
            }}
          >
            <div
              className={`w-7 h-7 bg-gray-400 rounded-full absolute top-0 transition-all duration-200 ${
                showImages ? "right-0" : "left-0"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
