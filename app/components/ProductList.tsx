"use client";

import { useState } from "react";
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

  const categories = [
    { name: "Baked Goods", count: 8 },
    { name: "Coffee", count: 2 },
  ];
  const dietaryOptions = [
    { name: "Eco Friendly", count: 2 },
    { name: "Gluten Free", count: 4 },
    { name: "Nut Free", count: 7 },
  ];

  const handleSearch = (query: string) => {
    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (categories: string) => {
    const catArray = categories.split(",").filter(Boolean);
    const filtered = products.filter(
      (p) => !catArray.length || catArray.includes(p.category)
    );
    setFilteredProducts(filtered);
  };

  const handleDietaryChange = (dietary: string) => {
    const dietArray = dietary.split(",").filter(Boolean);
    setFilteredProducts(products); // Placeholder
  };

  const handleSortChange = (sort: string) => {
    const sorted = [...filteredProducts].sort((a, b) =>
      sort === "Bestselling" ? a.price - b.price : 0
    );
    setFilteredProducts(sorted);
  };

  const handleImageToggle = (showImages: boolean) => {
    // Implement image-only toggle logic if needed
  };

  return (
    <>
      <div className="w-[344px] space-y-6">
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
      <div className="flex-1">
        <TopFilters
          totalProducts={products.length}
          onSortChange={handleSortChange}
          onImageToggle={handleImageToggle}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center text-red-500">No products available.</p>
          )}
        </div>
      </div>
    </>
  );
}
