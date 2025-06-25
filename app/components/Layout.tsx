import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
  activeTab: "products" | "photos";
}

export const Layout = ({ children, activeTab }: LayoutProps) => {
  return (
    <div
      className="min-h-screen mx-auto flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10"
      role="main"
    >
      <Image
        src="/images/coverphoto.svg"
        alt="Cover photo of the coffee store"
        className="w-full h-40 object-cover sm:h-52 md:h-64 lg:h-80"
        width={1440}
        height={360}
        priority
      />

      {/* Header */}
      <Header />

      {/* Navigation */}
      <nav
        className="w-full bg-white border-b border-gray-500 pb-4"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto flex justify-start items-center h-10 sm:h-12 md:h-16 gap-20 ">
          <Link
            href="/"
            className={`px-2 py-1 text-sm sm:text-lg md:text-2xl text-gray-800 ${
              activeTab === "products" ? "font-bold" : "font-normal"
            } focus:outline-none focus:ring-2 focus:ring-gray-500`}
            aria-current={activeTab === "products" ? "page" : undefined}
            aria-label={
              activeTab === "products"
                ? "Current page, Products"
                : "Go to Products"
            }
          >
            Products
          </Link>
          <Link
            href="/photos"
            className={`px-2 py-1 text-sm sm:text-lg md:text-2xl text-gray-800 ${
              activeTab === "photos" ? "font-bold" : "font-normal"
            } focus:outline-none focus:ring-2 focus:ring-gray-500`}
            aria-current={activeTab === "photos" ? "page" : undefined}
            aria-label={
              activeTab === "photos" ? "Current page, Photos" : "Go to Photos"
            }
          >
            Photos
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main
        className="flex-1 container mx-auto p-2 sm:p-4 max-w-[1440px]"
        id="main-content"
      >
        {children}
      </main>
    </div>
  );
};
