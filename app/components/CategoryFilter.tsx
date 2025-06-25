"use client";

import { useState } from "react";

interface CategoryFilterProps {
  categories: { name: string; count: number }[];
  onFilterChange: (category: string) => void;
}

export const CategoryFilter = ({
  categories,
  onFilterChange,
}: CategoryFilterProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    const newSelected = selected.includes(category)
      ? selected.filter((c) => c !== category)
      : [...selected, category];
    setSelected(newSelected);
    onFilterChange(newSelected.join(","));
  };

  return (
    <fieldset className="w-full max-w-[344px] flex flex-col space-y-4">
      <legend className="text-2xl font-bold text-gray-900 mb-2">
        Categories
      </legend>

      {categories.map((cat) => (
        <label
          key={cat.name}
          className="flex items-center gap-4 cursor-pointer group"
        >
          <input
            type="checkbox"
            checked={selected.includes(cat.name)}
            onChange={() => toggleCategory(cat.name)}
            className="sr-only"
            aria-label={`${cat.name}, ${cat.count} items`}
          />
          {/* Custom checkbox */}
          <div
            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-150 ${
              selected.includes(cat.name)
                ? "bg-green-900 border-gray-900"
                : "bg-white border-gray-400 group-hover:border-gray-700"
            }`}
          >
            {selected.includes(cat.name) && (
              <div className="w-[10px] h-[10px] bg-white rounded-sm" />
            )}
          </div>
          <span className="text-xl text-gray-900">
            {cat.name} ({cat.count})
          </span>
        </label>
      ))}
    </fieldset>
  );
};
