import React from "react";
import Grid1 from "../../assets/Grid1.png";

import Grid2 from "../../assets/Grid2.png";
import Grid3 from "../../assets/Grid3.png";
import { BsArrowRight } from "react-icons/bs";

const Gallery = () => {
  return (
    <div className="py-12 lg:px-16 px-0">
      <h1 className="font-extrabold text-3xl pb-6">Amazing Offers</h1>
      <div className="grid lg:grid-cols-2 grid-row-1 lg:gap-6 gap-2">
        <div className="relative">
          <img src={Grid1} className="object-cover h-full w-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col pl-6 items-start justify-center text-white">
            <h1 className="lg:text-[16px] text-xs font-bold">
              C O L L E C T I O N S
            </h1>
            <p className="lg:text-6xl text-3xl mt-4 pb-4">
              Golden <br />
              Corporate Wears{" "}
            </p>
            <p className="lg:text-base text-xs">
              Indulge in the opulence of Golden Memory, a mesmerizing jewelry
              <br />
              collection fit for a queen. Embrace your inner allure with
              exquisite <br />
              designs exclusive in our store to your heart content.
            </p>
            <button className="mt-6 bg-transparent flex items-center gap-4 border-white border-2  hover:bg-[#BE0CE7] text-white font-bold py-2 px-4 rounded">
              View All Collection
              <span>
                <BsArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="grid grid-rows-2 lg:gap-6 gap-2">
          <div className="relative">
            <img src={Grid2} className="object-cover h-full w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col pl-6 items-start justify-center text-white">
              <h1 className="text-[16px] font-bold">C O L L E C T I O N S</h1>
              <p className="lg:text-6xl text-3xl mt-4 pb-4">
                OWAMBE
                <br className="hidden lg:block" />
                WEARS{" "}
              </p>

              <button className="mt-6 bg-transparent flex items-center gap-4 border-white border-2  hover:bg-[#BE0CE7] text-white font-bold py-2 px-4 rounded">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="relative">
            <img src={Grid3} className="object-cover h-full w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col pl-6 items-start justify-center text-white">
              <h1 className="text-[16px] font-bold">C O L L E C T I O N S</h1>
              <p className="lg:text-6xl text-3xl mt-4 pb-4">GOWNS</p>

              <button className="mt-6 bg-transparent flex items-center gap-4 border-white border-2  hover:bg-[#BE0CE7] text-white font-bold py-2 px-4 rounded">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
