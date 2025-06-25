"use client";

import Image from "next/image";
import { useState } from "react";

interface SearchFilterProps {
  onSearch: (query: string) => void;
}

export const SearchFilter = ({ onSearch }: SearchFilterProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="w-full max-w-[344px]">
      <label htmlFor="search-input" className="sr-only">
        Search products
      </label>
      <div className="relative flex items-center">
        {/* Icon */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <Image
            src="/images/search.svg"
            alt=""
            width={16}
            height={16}
            className="pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* Input */}
        <input
          id="search-input"
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search"
          className="w-full pl-12 pr-4 py-2 rounded-xl bg-gray-100 text-gray-900 text-base sm:text-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};
