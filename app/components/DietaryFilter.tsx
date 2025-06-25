"use client";

import { useState } from "react";

interface DietaryFilterProps {
  dietaryOptions: { name: string; count: number }[];
  onFilterChange: (dietary: string[]) => void;
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
    onFilterChange(newSelected);
  };

  return (
    <fieldset className="w-full max-w-[344px] flex flex-col space-y-4">
      <legend className="text-2xl font-bold text-gray-900 mb-2">Dietary</legend>

      {dietaryOptions.map((opt, index) => {
        const id = `dietary-${index}`;
        const isChecked = selected.includes(opt.name);

        return (
          <div key={opt.name} className="flex items-center gap-4">
            <input
              id={id}
              type="checkbox"
              checked={isChecked}
              onChange={() => toggleDietary(opt.name)}
              className="peer hidden"
            />
            <label
              htmlFor={id}
              className="flex items-center gap-4 cursor-pointer group"
            >
              {/* Custom checkbox */}
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-150 ${
                  isChecked
                    ? "bg-gray-900 border-gray-900"
                    : "bg-white border-gray-400 group-hover:border-gray-700"
                } peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500`}
              >
                {isChecked && (
                  <div className="w-[10px] h-[10px] bg-white rounded-sm" />
                )}
              </div>
              <span className="text-xl text-gray-900">
                {opt.name} ({opt.count})
              </span>
            </label>
          </div>
        );
      })}
    </fieldset>
  );
};
