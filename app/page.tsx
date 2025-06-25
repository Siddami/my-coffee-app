import { fetchProducts } from "../utils/fetchData";
import { Product } from "../types/product";
import ProductList from "./components/ProductList";

export default async function Home() {
  const initialProducts = await fetchProducts();

  return (
    <div className="flex space-x-6">
      <ProductList initialProducts={initialProducts} />
    </div>
  );
}
