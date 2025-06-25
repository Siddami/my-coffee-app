import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header
      className="bg-white text-black px-6 py-8 flex flex-col md:flex-row items-center justify-between mx-auto w-full gap-4 md:gap-8"
      role="banner"
    >
      <Image
        src="/images/coffeebag.svg"
        alt="Coffee Store logo featuring a coffee bag"
        className="w-full max-w-[150px] sm:max-w-[250px] h-auto rounded-full object-cover hidden md:block" 
        width={357}
        height={357}
      />
      <div className="w-full sm:w-auto text-center sm:text-left flex flex-col gap-4">
        <h1
          className="text-2xl sm:text-3xl md:text-5xl font-bold"
          id="store-name"
        >
          Coffee Store
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl">Odessa, ON</p>
        <div
            className="flex flex-col lg:flex-row items-center justify-center gap-4"
            aria-label="Location details"
        >
            <Image
              src="/images/location.svg"
              alt="Location icon"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              width={12}
              height={12}
            />
            <div className="text-xs sm:text-sm md:text-base flex flex-col items-center sm:items-start">
              <p>Location</p>
              <p>(Pick Up):</p>
            </div>
            <address className="text-xs sm:text-sm md:text-base not-italic">
              3 McAlpine St, Toronto, ON, CA, M5R 3T5
            </address>
            <a
              href="https://maps.google.com"
              className="ml-0 sm:ml-4 text-cyan-600 hover:text-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-base md:text-xl"
              aria-label="Get directions on Google Maps"
            >
              Get Direction
            </a>
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-end w-full sm:w-auto">
        <Image
          src="/images/lolaandcoco.svg"
          alt="Lola and Coco, the store's dogs"
          className="w-full max-w-[155px] h-auto rounded-full sm:w-[155px] sm:h-[155px]"
          width={155}
          height={155}
        />
      </div>
    </header>
  );
};

export default Header;
