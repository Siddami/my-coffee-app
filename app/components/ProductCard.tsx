import Image from "next/image";
import { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div
      className="relative w-[300px] h-[500px] shadow-[0_0_5px_rgba(0,0,0,0.25)] bg-white rounded-lg overflow-hidden"
      role="article"
    >
      <Image
        width={390}
        height={333}
        priority
        loading="eager"
        src={product.image}
        alt={product.name}
        className="w-full h-[333px] object-cover bg-gray-200"
      />
      <div className="absolute top-6 right-6 w-9 h-9 bg-white/98 rounded-full flex items-center justify-center">
        <Image
            src="/images/heart.svg" 
            alt="Favorite icon"
            width={24}
            height={24}
            className="w-6 h-6"
            loading="lazy"
            aria-label="Favorite product"
        />
      </div>
      <div className="px-7 pt-7">
        <h3
          className="text-2xl font-bold text-gray-900"
          aria-label={`Product: ${product.name}`}
        >
          {product.name}
        </h3>
        <div className="flex items-center mt-3">
          <Image
            src={product.brandImage}
            alt={product.brand}
            className="w-9 h-9 bg-gray-200"
            width={36}
            height={36}
            loading="lazy"
            aria-label={`Brand: ${product.brand}`}
          />
          <span className="ml-3 text-xl text-gray-900">{product.brand}</span>
        </div>
        <p className="mt-6 text-xl font-medium text-black">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
