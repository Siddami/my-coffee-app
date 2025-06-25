import { promises as fs } from "fs";
import { Product } from "../types/product";
import path from "path";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const filePath = path.join(process.cwd(), "public", "products.json");
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
