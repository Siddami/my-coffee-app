import { fetchProducts } from "../utils/fetchData";
import ProductList from "./components/ProductList";
import { Suspense } from "react";

export default async function Home() {
  const initialProducts = await fetchProducts();

  return (
    <div className="flex space-x-6">
      <Suspense
        fallback={
          <div className="flex items-center justify-center w-full h-screen">
            <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        }
      >
        <ProductList initialProducts={initialProducts} />
      </Suspense>
    </div>
  );
}
