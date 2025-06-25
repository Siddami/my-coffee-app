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
    <div className="w-[344px] h-16 flex items-center relative">
      <div className="absolute inset-0 bg-gray-100 rounded-xl"></div>
     <Image 
        src="/images/search.svg"
        alt="Search Icon"
        width={24}
        height={24}
        className="absolute left-4 top-6 w-6 h-6 z-10"
     />
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search"
        className="absolute left-20 top-3 w-[257px] h-9 bg-transparent text-gray-900 text-2xl font-normal outline-none"
        aria-label="Search products"
      />
    </div>
  );
};
