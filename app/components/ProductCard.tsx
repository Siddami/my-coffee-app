import Image from "next/image";
import { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div
      className="relative w-full max-w-[300px] h-auto shadow-[0_0_5px_rgba(0,0,0,0.25)] bg-white rounded-lg overflow-hidden transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      role="article"
      tabIndex={0} // Makes it keyboard focusable
      aria-label={`Product card for ${
        product.name
      }, priced at $${product.price.toFixed(2)}`}
    >
      <Image
        width={390}
        height={333}
        priority
        loading="eager"
        src={product.image}
        alt={product.name}
        className="w-full h-auto object-cover bg-gray-200"
      />
      <div className="absolute top-4 right-4 w-9 h-9 bg-white/98 rounded-full flex items-center justify-center">
        <button
          className="w-6 h-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={`Favorite ${product.name}, currently not favorited`}
          onClick={() => console.log("Toggle favorite")}
        >
          <Image
            src="/images/heart.svg"
            alt=""
            width={24}
            height={24}
            className="w-6 h-6"
            loading="lazy"
          />
        </button>
      </div>
      <div className="p-4 sm:p-6">
        <h3
          className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 break-words"
          id={`product-name-${product.id}`}
        >
          {product.name}
        </h3>
        <div className="flex items-center mt-2 sm:mt-3">
          <Image
            src={product.brandImage}
            alt={product.brand}
            className="w-6 sm:w-9 h-6 sm:h-9 bg-gray-200 rounded-full"
            width={36}
            height={36}
            loading="lazy"
            aria-label={`Brand logo for ${product.brand}`}
          />
          <span className="ml-2 sm:ml-3 text-base sm:text-lg md:text-xl text-gray-900">
            {product.brand}
          </span>
        </div>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-medium text-black">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
