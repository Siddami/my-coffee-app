"use client";

import { useState, useEffect } from "react";
import { Product } from "../../types/product";
import { ProductCard } from "./ProductCard";
import { SearchFilter } from "./SearchFilter";
import { CategoryFilter } from "./CategoryFilter";
import { DietaryFilter } from "./DietaryFilter";
import { TopFilters } from "./TopFilters";

interface ProductListProps {
  initialProducts: Product[];
}

export default function ProductList({ initialProducts }: ProductListProps) {
  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    { name: "Baked Goods", count: 8 },
    { name: "Coffee", count: 2 },
  ];
  const dietaryOptions = [
    { name: "Eco Friendly", count: 2 },
    { name: "Gluten Free", count: 4 },
    { name: "Nut Free", count: 7 },
  ];

  // Close sidebar after filter application
  const handleFilterAction = (callback: (arg: string) => void) => (value: string) => {
    callback(value);
    setIsFilterOpen(false); // It Auto-closes on filter change
  };

  const handleSearch = handleFilterAction((query: string) => {
    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  });

  const handleCategoryChange = handleFilterAction((categories: string) => {
    const catArray = categories.split(",").filter(Boolean);
    const filtered = products.filter(
      (p) => !catArray.length || catArray.includes(p.category)
    );
    setFilteredProducts(filtered);
  });

  const handleDietaryChange = handleFilterAction((dietary: string) => {
    const dietArray = dietary.split(",").filter(Boolean);
    setFilteredProducts(products); // Placeholder
  });

  const handleSortChange = (sort: string) => {
    const sorted = [...filteredProducts].sort((a, b) =>
      sort === "Bestselling" ? a.price - b.price : 0
    );
    setFilteredProducts(sorted);
  };

  const handleImageToggle = (showImages: boolean) => {
    console.log("Image visibility toggled:", showImages);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.querySelector(".sidebar-overlay");
      if (isFilterOpen && sidebar && !sidebar.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isFilterOpen]);

  return (
    <div className="w-full mx-auto px-4 py-6">
      {/* Mobile Toggle Button */}
      <div className="lg:hidden my-4">
        <button
          className="w-full bg-gray-200 text-black py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setIsFilterOpen(true)}
          aria-label="Open filters"
        >
          Open Filters
        </button>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-8">
        {/* Sidebar - visible on large screens */}
        <aside className="hidden lg:block w-[280px] p-4 bg-white space-y-6 sticky top-4">
          <div className="text-blue-500 text-sm cursor-pointer hover:underline">
            Clear all
          </div>
          <SearchFilter onSearch={handleSearch} />
          <CategoryFilter
            categories={categories}
            onFilterChange={handleCategoryChange}
          />
          <DietaryFilter
            dietaryOptions={dietaryOptions}
            onFilterChange={handleDietaryChange}
          />
        </aside>

        {/* Product List Section */}
        <main className="flex-1 mx-auto">
          <TopFilters
            totalProducts={products.length}
            onSortChange={handleSortChange}
            onImageToggle={handleImageToggle}
            className="w-full"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-center text-red-600" role="alert">
                No products available.
              </p>
            )}
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 transition-all duration-500 ease-in-out
 ${isFilterOpen ? "opacity-100" : "opacity-0 pointer-events-none"} lg:hidden`}
      >
        <div
          className={`sidebar-overlay absolute left-0 top-0 w-3/4 sm:w-1/2 max-w-[344px] h-full bg-white p-4 space-y-6 overflow-y-auto transition-transform duration-300 transform ${
            isFilterOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="w-full bg-gray-300 text-black py-2 px-4 rounded mb-4"
            onClick={() => setIsFilterOpen(false)}
            aria-label="Close filters"
          >
            Close
          </button>
          <SearchFilter onSearch={handleSearch} />
          <CategoryFilter
            categories={categories}
            onFilterChange={handleCategoryChange}
          />
          <DietaryFilter
            dietaryOptions={dietaryOptions}
            onFilterChange={handleDietaryChange}
          />
        </div>
      </div>
    </div>
  );
}