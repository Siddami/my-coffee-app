import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

interface LayoutProps {
  children: ReactNode;
  activeTab: "products" | "photos";
}

export const Layout = ({ children, activeTab }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Image
        src="/images/coverphoto.svg"
        alt="Cover photo of the coffee store"
        className="w-full h-64 object-cover"
        width={64}
        height={64}
        priority
      />
      <header className="bg-white text-black p-6 flex items-center justify-between max-w-8xl">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/coffeebag.svg"
            alt="Coffee Store Logo a coffee bag"
            className="w-[357px] h-[357px] bg-gray-300 rounded-full object-cover"
            width={357}
            height={357}
          />
          <div className="text-right">
            <h1 className="text-5xl font-bold">Coffee Store</h1>
            <p className="text-2xl">Odessa, ON</p>
            <div className="flex items-center mt-4">
              <div className="flex items-center justify-center mr-4">
                <Image
                  src="/images/location.svg"
                  alt="Location icon"
                  className="w-6 w-6 align start"
                  width={12}
                  height={12}
                />
                <div className="text-base flex flex-col items-center">
                  <p>Location</p>
                  <p>(Pick Up):</p>
                </div>
              </div>
              <address className="text-base">
                3 McAlpine St, Toronto, ON, CA, M5R 3T5
              </address>
              <a
                href="https://maps.google.com"
                className="ml-4 text-cyan-400 text-2xl"
              >
                Get Direction
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Image
            src="/images/lolaandcoco.svg"
            alt="Lola and coco the dog"
            className="w-[155px] h-[155px] bg-gray-400 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.25)]"
            width={155}
            height={155}
          />
        </div>
      </header>
      <nav className="w-full bg-white border-b border-gray-500">
        <div className="container mx-auto flex justify-start items-center h-16">
          <Link
            href="/"
            className={`px-4 py-2 text-2xl text-gray-800 ${
              activeTab === "products" ? "font-bold" : "font-normal"
            }`}
            aria-current={activeTab === "products" ? "page" : undefined}
          >
            Products
          </Link>
          <Link
            href="/photos"
            className={`px-4 py-2 text-2xl text-gray-800 ${
              activeTab === "photos" ? "font-bold" : "font-normal"
            }`}
            aria-current={activeTab === "photos" ? "page" : undefined}
          >
            Photos
          </Link>
        </div>
      </nav>
      <main className="flex-1 container mx-auto p-4">{children}</main>
    </div>
  );
};
