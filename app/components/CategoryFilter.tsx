"use client"

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
    <div className="w-[344px] flex flex-col justify-between relative">
      <h4 className="text-2xl font-bold text-gray-900">
        Categories
      </h4>
      {categories.map((cat) => (
        <div key={cat.name} className="flex items-center mt-8">
          <div
            className="w-5 h-5 bg-white rounded flex items-center justify-center"
            onClick={() => toggleCategory(cat.name)}
          >
            {selected.includes(cat.name) && (
              <div className="w-[18.75px] h-[18.75px] border-2 border-gray-900 rounded-sm"></div>
            )}
          </div>
          <span className="ml-6 text-xl text-gray-900">{`${cat.name} (${cat.count})`}</span>
        </div>
      ))}
      <div className="absolute top-2 right-4 w-6 h-6 overflow-hidden">
        <div className="w-4 h-2 border-2 border-gray-900 ml-1 mt-2"></div>
      </div>
    </div>
  );
};
