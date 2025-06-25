"use client";

import { useState } from "react";

interface DietaryFilterProps {
  dietaryOptions: { name: string; count: number }[];
  onFilterChange: (dietary: string) => void;
}

export const DietaryFilter = ({
  dietaryOptions,
  onFilterChange,
}: DietaryFilterProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleDietary = (option: string) => {
    const newSelected = selected.includes(option)
      ? selected.filter((c) => c !== option)
      : [...selected, option];
    setSelected(newSelected);
    onFilterChange(newSelected.join(","));
  };

  return (
    <fieldset className="w-full max-w-[344px] flex flex-col space-y-4">
      <legend className="text-2xl font-bold text-gray-900 mb-2">Dietary</legend>

      {dietaryOptions.map((opt) => (
        <label
          key={opt.name}
          className="flex items-center gap-4 cursor-pointer group"
        >
          <input
            type="checkbox"
            checked={selected.includes(opt.name)}
            onChange={() => toggleDietary(opt.name)}
            className="sr-only"
            aria-label={`${opt.name}, ${opt.count} items`}
          />
          {/* Custom checkbox */}
          <div
            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-150 ${
              selected.includes(opt.name)
                ? "bg-gray-900 border-gray-900"
                : "bg-white border-gray-400 group-hover:border-gray-700"
            }`}
          >
            {selected.includes(opt.name) && (
              <div className="w-[10px] h-[10px] bg-white rounded-sm" />
            )}
          </div>
          <span className="text-xl text-gray-900">
            {opt.name} ({opt.count})
          </span>
        </label>
      ))}
    </fieldset>
  );
};
